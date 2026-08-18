# 週次コンテンツ拡充ログ

`courses/sound_engineering_theory.js` と `courses/studio_acoustics.js` を交互に拡充する
週次ルーティン(claude.ai routine)が、毎回の作業内容をここに追記していく。
新しく実行する回は、直近どちらのコースIDが記録されているかを見て、もう一方を選ぶ。

- 2026-08-05: sound_engineering_theory — 「波動物理の基礎」4単元(単振動・波の基本式/定在波と共鳴/音のエネルギーと逆二乗則・デシベル/うなりとドップラー効果)を新規追加(全10→14単元)、furtherLearning付き
- 2026-08-05: studio_acoustics — 新単元「ルームモードの分類とシュレーダー周波数」を追加(全6→7単元)、既存7単元すべてにfurtherLearningを追加
- 2026-08-17 [polish] SERVICE_READINESS_CHECKLIST.md — 新規作成(モバイル表示/アクセシビリティ/SEO/パフォーマンス/リンク健全性/コード品質/信頼性)。SEO項目のうちindex.htmlにmeta description・OGPタグ(og:type/title/description/url)を追加して対応済みにチェック
- 2026-08-18 [polish] SEO — favicon.svg(8分音符モチーフ・テーマカラーのグラデーション)を新規作成し、index.htmlに<link rel="icon">を追加。SERVICE_READINESS_CHECKLIST.mdのfavicon項目を対応済みにチェック
- 2026-08-18 [polish] コード品質 — 全13コースのunit数をnode -eで実カウントしREADME.mdの記載と照合(既存記載はすべて一致)。gear_patch_practice(全16単元)とmoney_case_studies(全10単元)の単元数記載がREADME.mdに欠けていたため追記。SERVICE_READINESS_CHECKLIST.mdの該当項目を対応済みにチェック
- 2026-08-18 [content] music_business_money — 全7単元中furtherLearningが0だったため、既存7単元すべてにWebSearchで実在確認したfurtherLearning(記事リンク)を追加(JASRAC公式・NexTone公式・TuneCore Japan等)
- 2026-08-18 [polish] リンク健全性 — node -eで全コース(unit/section image参照209件、products/サブフォルダ含む)を実ファイルと突合し欠損0件を確認。逆方向でimages/配下の未参照ファイル11件(compare_acoustics.png等)を発見したが削除は対象外とし次ラウンド送り。SERVICE_READINESS_CHECKLIST.mdの該当項目を対応済みにチェック
- 2026-08-18 [content] gear_patch_practice — 前回セッションで未コミットのまま残っていた新単元「ステージピアノのサスティンペダルとオーディオ出力を正しく配線する(Nord Stage 4)」(order36)を発見。WebSearchでNord Stage 4公式スペックを裏取りしたところ、下書きの端子仕様(出力=TRS、ペダル=TS)が実際と逆(公式スペックでは出力は1/4インチ・アンバランス=TS、Triple Pedalは複数ペダル状態を1本で送るためTRSプラグ)だったため修正して整合させ、hook/explainも書き直した上でコミット(全35→36単元)。README.mdの単元数記載も30→36に修正
