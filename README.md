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
- 個人事業主マネー編(`kojin_jigyou`) — 簿記3級(仕訳の基本)、FP3級(保険・年金)、
  開業届〜確定申告〜法人化までの実務、消費税/インボイス、資金調達、
  フリーランス新法(2024年施行)まで、全10単元
- DAWソフトウェア編(`daw_software`) — Pro Tools・Logic Pro・Ableton Live・Cubase・
  FL Studio・Studio One・Reaper・Bitwig・Reason・Digital Performer・Cakewalk・LUNA・
  Tracktion(Waveform)・MAGIX(Samplitude)・Harrison(Mixbus)のDAWソフト会社15社の沿革・お金の話
- 音楽業界のお金編(`music_business_money`) — 著作権の基礎、著作権印税・原盤印税、
  JASRAC/NexTone、レーベル契約、ストリーミング収益構造、二次使用料、ライブ・物販・
  マネジメント契約、全7単元
- スタジオ音響学編(`studio_acoustics`) — 音の基礎物理、定在波とルームモード、
  吸音と拡散、モニター設置とスイートスポット、防音(遮音)と音響の違い、
  自宅スタジオでの実践的な音響対策、全6単元
- 音響学・音響工学編(`sound_engineering_theory`) — JAPRS(日本音楽スタジオ協会)の
  レコーディングエンジニア認定試験の出題範囲に沿った理論編。聴覚のしくみ、音律、
  両耳効果とステレオ収音理論、電気の基礎、磁気記録、マイキング技法、
  サラウンド制作、録音史、音楽制作史とスタッフの役割、スタジオ設計基礎、全10単元

## ローカルでの開発

`index.html` を直接ブラウザで開けば `file://` でもそのまま動く
(script タグ読み込みのため CORS の影響を受けない)。

新しいコースを追加する場合は `courses/` に `window.COURSES[id] = {...}` 形式の
JS ファイルを追加し、`index.html` に `<script src="courses/新ファイル.js">` を
1行加えるだけでよい。
