# 音楽機材 学習アプリ

音響ハードウェア・楽器メーカーについて、教科書ページ + 採点付きテスト + 間隔反復で
学べるローカルSPA。

**公開URL**: https://hamajimanz-boop.github.io/study-ongaku-kizai/

スマホ・PCどちらのブラウザからでも上記URLで開ける。進捗はブラウザごとの
localStorageに保存されるため、同じブラウザ(同じURL)で開き続けると復習履歴が引き継がれる。

## 画面構成(ホーム = ジャンル見出し + コース一覧、コース → 単元)

以前は ホーム→ジャンル→コース→単元 という3階層(ジャンルが別ページ)だったが、
「クリックしないと中身が見えず分かりにくい」というフィードバックを受けて廃止した。
現在はホーム画面に**ジャンルごとの見出し+そのジャンルのコース一覧を直接**表示する
(`genres.js`はジャンルの定義データとしては引き続き使うが、専用ページへのリンクは
張らない)。ホーム→コース→単元の2階層でどのコースにも1クリックで到達できる。

- **機材ブランド・楽器メーカー** — `hardware_dtm`(音響機材15社)、
  `instrument_makers`(楽器メーカー75社)
- **DAW・ソフトウェア** — `daw_software`(DAWソフト15社)、
  `plugin_makers`(プラグインメーカー全20社)
- **音響理論・音響概論(物理と工学)** — `studio_acoustics`(部屋の音響、軸性/接線/斜め
  モードとシュレーダー周波数まで踏み込んだ全7単元)、`sound_engineering_theory`
  (JAPRS準拠の音響工学理論、高校物理の波動から積み上げ、全14単元)。機材メーカーの
  話ではなく音の物理・工学そのものを扱う編で、「音響概論」はここにある
- **お金・ビジネス** — `kojin_jigyou`(個人事業主マネー、全10単元)、
  `music_business_money`(音楽業界のお金、全7単元)
- **ミックス・マスタリング実践** — `mix_mastering_edit`(実践的な編集/ミキシング/
  マスタリングのテクニックと数値目安、全10単元)。会社の歴史ではなく「今すぐ
  セッションで使える」判断基準を扱う編
- **実践問題編** — `gear_patch_practice`(デスク配線パズル、全16単元)、
  `money_case_studies`(お金のケーススタディ、全10単元)、`mix_tips_practice`
  (ミックス判断即断クイズ、全10単元)。「機材が欲しくなって調べる瞬間がいちばん
  知識が身につく」という発想の編。詳細は下記「実践問題編の仕組み」を参照

## 実践問題編の仕組み(`kind:"patch"` / `kind:"case"` / `kind:"tip"`)

通常コースは `sections`(教材)+ `quiz`(4択)を持つが、実践問題編の3コースは
これを持たず、代わりに `course.kind` と `unit.patch` / `unit.caseStudy` / `unit.tip` を持つ。
`app.js` の `entryHref()`/`reviewHref()` が `course.kind` を見て、教材とテストが
1画面に統合された専用ページ(`#/patch/...` または `#/case/...`)へルーティングする。
採点結果は `updateUnitProgress()` を通して通常のクイズと同じ間隔反復・進捗・
バッジのしくみにそのまま乗る。

- **`kind:"patch"`(配線パズル)** — `unit.patch = { scenario, equipment, cablePalette,
  correctConnections, explain }`。`equipment[].ports[]` に `{id,label,type,dir}` を
  並べ、`correctConnections` に `{from:"equipId.portId", to:"...", cable:"xlr"}` を
  列挙する。画面上ではケーブル種別を1つ選んでから、機材の端子(●)から別の端子へ
  マウスドラッグして接続する(`renderPatch`/`wirePatchBoard`/`gradePatch`)。
  接続した本数・種類が `correctConnections` と一致するかを採点し、不足分は盤面に
  グレーの点線で正解ルートを表示する。新しいデスクのシナリオを追加する場合は
  `courses/gear_patch_practice.js` の `units` 配列に1ユニット追記すればよい
  (機材アイコンは`patch-equip-icon`に表示する短い英字ラベルでよく、写真は不要)。
- **`kind:"case"`(ケーススタディ)** — `unit.caseStudy = { scenario:[...], inputs:[{
  type:"choice"|"number"|"text", label, choices/answer/tolerance, explain }], explain:[...] }`。
  具体的な数字の状況文を読んで、選択式/数値/自由記述の設問に答え、`gradeCase()`が
  1問ずつ正誤判定してから全体の解説(`explain`)を表示する。新しいケースを追加する
  場合は `courses/money_case_studies.js` の `units` 配列に1ユニット追記すればよい。
  音響機材に限らず、お金・ビジネス系の具体例問題もこの仕組みで作れる。
- **`kind:"tip"`(即断クイズ)** — `unit.tip = { situation, question, choices:[...],
  answer, explain, nextStep? }`。具体的な症状(situation)を読んで「まず最初に
  試すべき対処」を選択式で即答する、1問1画面の最短フォーマット(`renderTip`/
  `gradeTip`)。新しい判断クイズを追加する場合は `courses/mix_tips_practice.js` の
  `units` 配列に1ユニット追記すればよい。

## 進捗・実績ダッシュボード(`#/progress`)

各単元の合否履歴から、以下を自動集計して表示する:

- 全体サマリー(理解度%・定着済み単元数・クイズ挑戦回数・連続学習日数)
- **称号(バッジ)** — `badges.js` に判定ロジックを定義。コース制覇・ジャンル制覇の
  称号はコース/ジャンルが増えると自動生成されるため、コース追加時に手作業は不要
- **学習ログ** — 直近のクイズ挑戦を日付順に一覧表示
- コース別の詳細テーブル(単元ごとの理解度%・次回復習日・直近スコア)

## 単元内の「さらに学ぶ」

各unitオブジェクトに任意で `furtherLearning: { videos: [{title,url}], articles: [{title,url}] }`
を追加すると、教材ページの末尾に関連YouTube動画・記事のリンクが表示される
(`app.js` の `furtherLearningHtml()`)。**リンクはWebSearchで実在を確認したものだけを
使うこと**(存在しないURLを推測で載せない)。

## キャッシュ対策

`index.html`の各`<script src="...">`・`<link>`には`?v=YYYYMMDDx`というクエリを
付けている。ブラウザがJS/CSSを古いままキャッシュして「更新したのに反映されない」
状態になるのを防ぐため、CSS/JSを更新してpushする際は必ずこのバージョン文字列を
更新すること(例: `?v=20260805b` → `?v=20260805c`)。

## ローカルでの開発

`index.html` を直接ブラウザで開けば `file://` でもそのまま動く
(script タグ読み込みのため CORS の影響を受けない)。

新しいコースを追加する場合は `courses/` に `window.COURSES[id] = {...}` 形式の
JS ファイルを追加し、`index.html` に `<script src="courses/新ファイル.js">` を
1行加える。さらに `genres.js` の該当ジャンルの `courseIds` 配列にコースIDを
1つ追記すれば、ジャンルページに自動で表示される(新ジャンルを作る場合は
`genres.js` に配列要素を1つ追加するだけでよい)。
