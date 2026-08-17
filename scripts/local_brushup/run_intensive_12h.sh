#!/bin/bash
# 臨時の集中ブラッシュアップ(2026-08-18、ユーザー依頼により12時間・可能な限り高頻度で実行)
# 一般ブラッシュアップと実践問題編を交互に、休みなく連続実行する。
# 5分間隔での起動は1回の作業時間(数分〜数十分)と衝突するため、
# 「前の作業が終わり次第すぐ次を開始」という連続ループ方式にしている。
# 12時間経過、または失敗が連続したら(利用上限到達とみなし)自動停止する。

export PATH="/opt/homebrew/bin:/usr/bin:/bin:/Users/hamajimaaraya/.local/bin:$PATH"

APP_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app"
SCRIPT_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app/scripts/local_brushup"
LOG_FILE="$SCRIPT_DIR/intensive.log"
CLAUDE_BIN="/Users/hamajimaaraya/.local/bin/claude"

START_TS=$(date +%s)
END_TS=$((START_TS + 12*60*60))
FAIL_STREAK=0
ITER=0

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 集中ブラッシュアップ開始(12時間予定) =====" >> "$LOG_FILE"

cd "$APP_DIR" || { echo "APP_DIRに移動できません" >> "$LOG_FILE"; exit 1; }

while [ "$(date +%s)" -lt "$END_TS" ]; do
  ITER=$((ITER + 1))
  if [ $((ITER % 2)) -eq 1 ]; then
    PROMPT_FILE="$SCRIPT_DIR/prompt.txt"
    KIND="一般ブラッシュアップ"
  else
    PROMPT_FILE="$SCRIPT_DIR/practice_problems_prompt.txt"
    KIND="実践問題編"
  fi

  echo "----- iter $ITER ($KIND) 開始 $(date '+%H:%M:%S') -----" >> "$LOG_FILE"

  "$CLAUDE_BIN" -p "$(cat "$PROMPT_FILE")" \
    --allowedTools "Bash Read Write Edit Glob Grep WebSearch WebFetch" \
    >> "$LOG_FILE" 2>&1
  RC=$?

  echo "----- iter $ITER ($KIND) 終了 $(date '+%H:%M:%S') rc=$RC -----" >> "$LOG_FILE"

  if [ $RC -ne 0 ]; then
    FAIL_STREAK=$((FAIL_STREAK + 1))
    echo "!! 失敗 ($FAIL_STREAK 回連続) !!" >> "$LOG_FILE"
    if [ $FAIL_STREAK -ge 3 ]; then
      echo "===== 3回連続失敗のため中断(利用上限到達の可能性) $(date '+%Y-%m-%d %H:%M:%S') =====" >> "$LOG_FILE"
      break
    fi
    sleep 300
  else
    FAIL_STREAK=0
    sleep 20
  fi
done

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 集中ブラッシュアップ終了(iter=$ITER) =====" >> "$LOG_FILE"

# 通常の定時automationを復元
launchctl load /Users/hamajimaaraya/Library/LaunchAgents/com.hamajima.ongaku-kizai-brushup.plist 2>>"$LOG_FILE"
launchctl load /Users/hamajimaaraya/Library/LaunchAgents/com.hamajima.ongaku-kizai-practice-problems.plist 2>>"$LOG_FILE"
echo "===== 通常の定時automationを再開しました =====" >> "$LOG_FILE"
