#!/bin/bash
# 学習アプリのローカル自動ブラッシュアップ(1日1回、launchdから起動)
# クラウド側のRemoteTriggerがGitHub push権限エラーで機能しなくなったため、
# 同じ内容の作業をこのMac自身に定期実行させ、確実にpushする代替経路(2026-08-17構築)

export PATH="/opt/homebrew/bin:/usr/bin:/bin:/Users/hamajimaaraya/.local/bin:$PATH"

APP_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app"
SCRIPT_DIR="/Users/hamajimaaraya/study_ongaku_kizai/app/scripts/local_brushup"
LOG_FILE="$SCRIPT_DIR/brushup.log"

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 開始 =====" >> "$LOG_FILE"

cd "$APP_DIR" || { echo "APP_DIRに移動できません" >> "$LOG_FILE"; exit 1; }

/Users/hamajimaaraya/.local/bin/claude -p "$(cat "$SCRIPT_DIR/prompt.txt")" \
  --allowedTools "Bash Read Write Edit Glob Grep WebSearch WebFetch" \
  >> "$LOG_FILE" 2>&1

echo "===== $(date '+%Y-%m-%d %H:%M:%S') 終了 =====" >> "$LOG_FILE"
