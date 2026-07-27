# 音楽機材 学習アプリ

音響ハードウェア・楽器メーカーについて、教科書ページ + 採点付きテスト + 間隔反復で
学べるローカルSPA。

**公開URL**: https://hamajimanz-boop.github.io/study-ongaku-kizai/

スマホ・PCどちらのブラウザからでも上記URLで開ける。進捗はブラウザごとの
localStorageに保存されるため、同じブラウザ(同じURL)で開き続けると復習履歴が引き継がれる。

## 収録コース

- 音響機材編(`hardware_dtm`) — Neumann, RME, Genelec など15社
- プラグインメーカー編(`plugin_makers`) — 一時停止中
- 楽器メーカー編(`instrument_makers`) — エレキギター/ベース/アコースティック/
  ドラム/シンバル 各15社、計75社

## ローカルでの開発

`index.html` を直接ブラウザで開けば `file://` でもそのまま動く
(script タグ読み込みのため CORS の影響を受けない)。

新しいコースを追加する場合は `courses/` に `window.COURSES[id] = {...}` 形式の
JS ファイルを追加し、`index.html` に `<script src="courses/新ファイル.js">` を
1行加えるだけでよい。
