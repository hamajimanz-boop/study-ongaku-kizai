# X自動投稿スクリプト

学習アプリ(`study_ongaku_kizai/app`)の各コースの内容を、1日1セクションずつ
Xにスレッド形式で自動投稿する。全895セクション(163ユニット)を順番に消化していき、
最後まで行ったら最初から2周目に入る。

## 仕組み

- `extract_units.js` — `courses/*.js` を読み込み、`units.json` に変換する
- `post_thread.py` — `units.json` から次に投稿すべき1セクションを選び、
  スレッド本文を組み立てて投稿する。投稿済みセクションは `posted_log.json` に記録
- `run_daily.sh` — 上記2つをまとめて実行するラッパー(launchdから毎日呼ばれる)
- `~/Library/LaunchAgents/com.hamajima.x-autopost.plist` — 毎日9:00に
  `run_daily.sh` を実行するlaunchd設定

## セットアップ手順

### 1. X Developer Portalでアプリ登録・APIキー取得

1. https://developer.twitter.com/ でDeveloperアカウントを申請(無料枠でOK)
2. アプリを新規作成
3. アプリの **User authentication settings** で
   - App permissions: **Read and Write** に設定(これをしないと投稿できない)
   - Type of App: Native App
4. **Keys and tokens** タブで
   - API Key / API Key Secret
   - Access Token / Access Token Secret
   を発行(すでに発行済みでもPermissionsを変えた後は再発行が必要)

### 2. 認証情報を設定

```
cp .env.example .env
open -e .env   # エディタで開いてキーを貼り付けて保存
```

`.env` は `.gitignore` 済みなのでリポジトリにはコミットされない。

### 3. 動作確認(投稿せずに内容だけ見る)

```
./venv/bin/python3 post_thread.py --dry-run
```

### 4. 実際に1回投稿してみる

```
./venv/bin/python3 post_thread.py
```

### 5. 毎日自動実行を有効化

```
launchctl load ~/Library/LaunchAgents/com.hamajima.x-autopost.plist
```

無効化するときは:

```
launchctl unload ~/Library/LaunchAgents/com.hamajima.x-autopost.plist
```

実行時刻を変えたい場合は plist の `Hour` / `Minute` を編集して load し直す。
Macがスリープ/電源オフだった場合、その日の投稿はスキップされる(次にMacが
起きたタイミングでlaunchdが追いつき実行することが多いが保証はない)。

## ログ・状態ファイル

- `post.log` — 実行ログ(launchdの標準出力/エラー)
- `posted_log.json` — 投稿済みセクションの記録。消すと最初から投稿し直しになる
- `units.json` — 抽出済みコンテンツ(実行のたびに再生成される)

## 投稿フォーマットについて

- 1セクション = スレッド1本(平均5ツイート、中央値4、最大17ツイート)
- ユニットの最初のセクションではタイトルカード付きで開始、最後のセクションでは
  アプリへのリンク付きで完結する
- 文字数はXの実際のカウント方式(日本語などは2文字分、URLはt.co換算で23文字固定)
  に合わせて計算し、280文字を超えないよう自動分割している
