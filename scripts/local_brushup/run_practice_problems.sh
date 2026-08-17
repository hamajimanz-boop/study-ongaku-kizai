#!/bin/bash
# 実践問題編(配線パズル/ケーススタディ)を毎日10単元以上増やすローカル自動化(2026-08-18構築)
# 一般ブラッシュアップ(run_brushup.sh)とは別枠。同じリポジトリを触るため、
# ユーザーが手動でClaude Codeを使って同じファイルを編集中の時間帯と重ならないよう、
# 深夜帯に実行するようスケジュールしている(launchd plist側で時刻設定)。

export PATH="/opt/homebrew/bin:/usr/bin:/bin:/Users/hamajimaaraya/.local/bin:$PATH"

APP_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app"
SCRIPT_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app/scripts/local_brushup"
LOG_FILE="$SCRIPT_DIR/practice_problems.log"

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 開始 =====" >> "$LOG_FILE"

cd "$APP_DIR" || { echo "APP_DIRに移動できません" >> "$LOG_FILE"; exit 1; }

/Users/hamajimaaraya/.local/bin/claude -p "$(cat "$SCRIPT_DIR/practice_problems_prompt.txt")" \
  --allowedTools "Bash Read Write Edit Glob Grep WebSearch WebFetch" \
  >> "$LOG_FILE" 2>&1

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 終了 =====" >> "$LOG_FILE"
