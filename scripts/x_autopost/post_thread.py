#!/usr/bin/env python3
"""
学習アプリ(study_ongaku_kizai)のコース内容を「セクション単位」で1日1本、
Xにスレッド形式で自動投稿するスクリプト。

1ユニット(会社1社分など)を丸ごと投稿すると40〜50ツイートの巨大スレッドになり
X APIの無料枠の投稿上限をすぐ使い切ってしまうため、ユニットをさらに
セクション(「会社の正体・沿革」「音の特徴」など)単位に分割し、1日1セクションずつ
投稿する。同じユニットの複数セクションは連日にわたって投稿され、最後のセクションで
そのユニットの完結ツイート(アプリへのリンク付き)を出す。

使い方:
  python3 post_thread.py --dry-run   # 投稿せず内容を確認するだけ
  python3 post_thread.py             # 実際に投稿する

必要なもの:
  - .env に X API の認証情報 (.env.example 参照)
  - units.json (extract_units.js で生成)
  - pip install tweepy
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
UNITS_FILE = BASE_DIR / "units.json"
LOG_FILE = BASE_DIR / "posted_log.json"
ENV_FILE = BASE_DIR / ".env"
APP_URL = "https://hamajimanz-boop.github.io/study-ongaku-kizai/"

SPEAKER_LABEL = {"mina": "ミナ", "sensei": "先生"}

# ツイート1本あたりの重み付き文字数の目安上限(280に対して余裕を持たせる)
TWEET_WEIGHT_BUDGET = 210
# フッターを最終チャンクに同居させて良いかの安全上限(280に対して余裕を持たせる)
HARD_LIMIT = 250


def load_env(path: Path) -> None:
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip())


URL_RE = re.compile(r"https?://\S+")
# Xは実際のURL長にかかわらずt.coの23文字として数える
TCO_WEIGHT = 23


def weighted_len(text: str) -> int:
    total = 0
    urls = URL_RE.findall(text)
    text_wo_urls = URL_RE.sub("", text)
    total += len(urls) * TCO_WEIGHT
    for ch in text_wo_urls:
        total += 2 if ord(ch) >= 0x1100 else 1
    return total


TAG_RE = re.compile(r"<[^>]+>")


def strip_html(text: str) -> str:
    return TAG_RE.sub("", text)


def hard_slice(text: str, budget: int):
    """1文字単位で重み付き文字数がbudget以下になるように機械的に分割する。"""
    pieces = []
    current = ""
    current_w = 0
    for ch in text:
        w = 2 if ord(ch) >= 0x1100 else 1
        if current_w + w > budget and current:
            pieces.append(current)
            current, current_w = "", 0
        current += ch
        current_w += w
    if current:
        pieces.append(current)
    return pieces


def split_long_text(text: str, budget: int):
    """budgetを超えるテキストを、句点(。)区切りを優先しつつ複数ツイートに分割する。"""
    sentences = re.split(r"(?<=。)", text)
    pieces = []
    current = ""
    for s in sentences:
        candidate = current + s
        if weighted_len(candidate) > budget and current:
            pieces.append(current)
            current = s
        else:
            current = candidate
    if current:
        pieces.append(current)

    final = []
    for p in pieces:
        if weighted_len(p) <= budget:
            final.append(p)
        else:
            final.extend(hard_slice(p, budget))
    return final


def load_json(path: Path, default):
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def flatten_sections(units):
    """units.json (ユニット単位)を、セクション単位のフラットなリストに展開する。"""
    items = []
    for unit in units:
        total = len(unit["sections"])
        for idx, section in enumerate(unit["sections"]):
            items.append(
                {
                    "courseId": unit["courseId"],
                    "courseTitle": unit["courseTitle"],
                    "unitId": unit["unitId"],
                    "unitTitle": unit["title"],
                    "category": unit.get("category", ""),
                    "hook": unit["hook"],
                    "sectionIndex": idx,
                    "sectionTotal": total,
                    "section": section,
                }
            )
    return items


def pick_next_item(items, posted_keys):
    for item in items:
        key = f"{item['courseId']}::{item['unitId']}::{item['sectionIndex']}"
        if key not in posted_keys:
            return item
    return None


def flush_chunks(lines, budget):
    """行のリストを、重み付き文字数がbudget以下になるように束ねてツイート本文の配列にする。
    1行単独でbudgetを超える場合はsplit_long_textでさらに分割する。"""
    chunks = []
    current = ""

    def push_current():
        nonlocal current
        if current:
            chunks.append(current)
            current = ""

    for line in lines:
        line = strip_html(line)
        if weighted_len(line) > budget:
            push_current()
            chunks.extend(split_long_text(line, budget))
            continue
        candidate = (current + "\n" + line) if current else line
        if weighted_len(candidate) > budget:
            push_current()
            current = line
        else:
            current = candidate
    push_current()
    return chunks


def build_thread(item):
    tweets = []
    is_unit_start = item["sectionIndex"] == 0
    is_unit_end = item["sectionIndex"] == item["sectionTotal"] - 1

    if is_unit_start:
        header = strip_html(
            f"【{item['courseTitle']}】{item['unitTitle']} — {item['category']}\n\n"
            f"{item['hook']}\n\n🧵"
        )
    else:
        header = strip_html(
            f"《{item['courseTitle']} / {item['unitTitle']}》の続き "
            f"({item['sectionIndex'] + 1}/{item['sectionTotal']})\n\n"
            f"▼ {item['section']['heading']}"
        )
    if weighted_len(header) > TWEET_WEIGHT_BUDGET:
        tweets.extend(split_long_text(header, TWEET_WEIGHT_BUDGET))
    else:
        tweets.append(header)

    lines = []
    if is_unit_start:
        lines.append(f"▼ {item['section']['heading']}")
    section = item["section"]
    if section.get("dialogue"):
        for turn in section["dialogue"]:
            label = SPEAKER_LABEL.get(turn["who"], turn["who"])
            lines.append(f"{label}: {turn['text']}")
    if section.get("paragraphs"):
        for p in section["paragraphs"]:
            lines.append(p)
    tweets.extend(flush_chunks(lines, TWEET_WEIGHT_BUDGET))

    if is_unit_end:
        footer = (
            f"▶ {item['courseTitle']}「{item['unitTitle']}」の話はこれで完結。\n"
            f"続きはこちらの学習アプリで👇\n{APP_URL}#/course/{item['courseId']}\n\n"
            f"#音楽機材 #DTM #DAW"
        )
    else:
        footer = f"(次回: {item['courseTitle']}「{item['unitTitle']}」の話、続きます)"

    if weighted_len(tweets[-1] + "\n\n" + footer) <= HARD_LIMIT:
        tweets[-1] = tweets[-1] + "\n\n" + footer
    elif weighted_len(footer) <= TWEET_WEIGHT_BUDGET:
        tweets.append(footer)
    else:
        tweets.extend(split_long_text(footer, TWEET_WEIGHT_BUDGET))

    return tweets


def post_thread_to_x(tweets):
    import tweepy

    client = tweepy.Client(
        consumer_key=os.environ["X_API_KEY"],
        consumer_secret=os.environ["X_API_SECRET"],
        access_token=os.environ["X_ACCESS_TOKEN"],
        access_token_secret=os.environ["X_ACCESS_TOKEN_SECRET"],
    )

    reply_to = None
    posted_ids = []
    for text in tweets:
        resp = client.create_tweet(text=text, in_reply_to_tweet_id=reply_to)
        tweet_id = resp.data["id"]
        posted_ids.append(tweet_id)
        reply_to = tweet_id
    return posted_ids


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="投稿せず内容を表示するだけ")
    args = parser.parse_args()

    load_env(ENV_FILE)

    units = load_json(UNITS_FILE, [])
    if not units:
        print("units.json が空です。先に `node extract_units.js` を実行してください。", file=sys.stderr)
        sys.exit(1)

    items = flatten_sections(units)

    log = load_json(LOG_FILE, {"posted": [], "cycles_completed": 0})
    posted_keys = set(log["posted"])

    item = pick_next_item(items, posted_keys)
    if item is None:
        # 全セクション投稿済み -> 次の周回として最初から
        log["cycles_completed"] = log.get("cycles_completed", 0) + 1
        log["posted"] = []
        posted_keys = set()
        item = items[0]
        print(f"全{len(items)}セクション投稿済み。{log['cycles_completed']}周目を開始します。")

    global_index = items.index(item) + 1
    tweets = build_thread(item)

    print(
        f"=== [{global_index}/{len(items)}] {item['courseTitle']} / {item['unitTitle']} "
        f"/ {item['section']['heading']} ({len(tweets)}ツイート) ===\n"
    )
    for i, t in enumerate(tweets, 1):
        print(f"--- {i}/{len(tweets)} (weighted={weighted_len(t)}) ---")
        print(t)
        print()

    if args.dry_run:
        print("[dry-run] 投稿はしていません。")
        return

    posted_ids = post_thread_to_x(tweets)
    print(f"投稿完了: {len(posted_ids)}件 (先頭ID={posted_ids[0]})")

    key = f"{item['courseId']}::{item['unitId']}::{item['sectionIndex']}"
    log["posted"].append(key)
    save_json(LOG_FILE, log)


if __name__ == "__main__":
    main()
