#!/bin/bash
# 毎日launchdから呼ばれるラッパー。コース内容の変更を拾えるようunits.jsonを
# 都度再生成してから、次の1セクションを投稿する。
set -euo pipefail
cd "$(dirname "$0")"
node extract_units.js
./venv/bin/python3 post_thread.py
