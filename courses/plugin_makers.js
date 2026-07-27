/* Phase 2: プラグインメーカー編(一時停止中) — #01のみ本文あり、他はスタブ */
window.COURSES = window.COURSES || {};
window.COURSES["plugin_makers"] = {
  id: "plugin_makers",
  title: "プラグインメーカー編",
  description: "所有プラグイン187個のカタログを分析して選んだ全20社。現在は音響機材編を優先しており一時停止中。",
  color: "#4a3aa7",
  order: 2,
  active: false,
  units: [
    {
      id: "brainworx_plugin_alliance",
      order: 1,
      title: "Brainworx / Plugin Alliance",
      category: "プラグイン出版社",
      hook: "ドイツの町工場が「ライセンスを集める」というビジネスモデルで、業界最大級の寄せ集め帝国になった話。",
      image: "plugin_alliance_structure.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "Brainworxはドイツ・ライヒリンゲン発、Dirk Ulrichらが立ち上げた、もともとはマスタリングスタジオ兼機材開発会社。「bx_」から始まるプラグインは、この会社の自社ブランド。",
            "Plugin Allianceは、Brainworxの製品と他の独立系ハードウェアメーカーの製品をまとめて売るための出版社(パブリッシャー)として2011年前後に作られた別会社。CEOのTorsten Kunkelは自身もエンジニアで、bx_console開発にも関わっている。",
            "つまりPlugin Alliance = 「レコード会社のようなもの」。elysia、Lindell Audio、SPL、Vertigo Sound、Millennia、Chandler Limited、Shadow Hillsなどは、それぞれ独立したハードウェアメーカーで、自分では大きな販売網を持たない代わりに、Plugin Allianceと契約してプラグイン化・販売を任せている。",
          ],
        },
        {
          heading: "音の特徴: 「TMT」という力技",
          paragraphs: [
            "Brainworxの技術的な売りはTMT(Tolerance Modeling Technology)。同じハードウェアを何十台も集めて全部測定し、個体差(製造誤差・経年劣化のばらつき)ごとモデリングするという力技をやっている。だからbx_console SSL 9000 Jのチャンネルごとに微妙にキャラが違う、という「本物っぽさ」が出る。",
          ],
        },
        {
          heading: "お金の話: iLok不要とセール文化",
          paragraphs: [
            "多くのプラグイン会社が長年iLok(専用USBドングル)による認証を必須にしていた中、Plugin Allianceは自社のオンラインライセンス認証を採用し、iLok不要を売りにした。",
            "単品購入と、まとめ買いの大型バンドル、定期購読(サブスク)の選択肢があり、年に何度も大規模セール(50〜90%オフ)をやることで知られる。",
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "Brainworx自社ブランド: bx_console SSL 4000 E/G/9000 J, bx_console AMEK 200/9099, bx_2098 EQ, bx_dynEQ V2, bx_glue, bx_opto, bx_saturator V2, bx_townhouse Buss Compressor。提携ブランド: elysia各種, Lindell各種, SPL各種, Vertigo, Maag, Millennia, Chandler, Shadow Hills, Purple Audio, Black Box Analog Design, AMEK, Acme, Bettermaker, TBTECH, Dangerousなど。",
          ],
        },
      ],
      quiz: [
        { q: "BrainworxとPlugin Allianceの関係は?", choices: ["同じ会社の別名", "別の会社(自社ブランドと出版社)", "無関係の競合会社", "Plugin AllianceがBrainworxの子会社を吸収して消滅した"], answer: 1, explain: "Brainworxは自社ブランド(bx_系)の開発元、Plugin Allianceはそれと他社をまとめて売る出版社。" },
        { q: "Plugin Allianceの認証方式の特徴は?", choices: ["iLok必須", "自社オンライン認証でiLok不要", "認証不要の完全フリー", "サブスクのみで買い切り不可"], answer: 1, explain: "iLok(専用ドングル)を使わず、自社オンライン認証のみで動作する。" },
        { q: "TMT(Tolerance Modeling Technology)とは?", choices: ["AIによる自動EQ", "実機を何十台も測定し個体差までモデリングする技術", "クラウド上でプラグインを動かす技術", "無料でアップデートできる仕組み"], answer: 1, explain: "同じハードウェアを何十台も測定し、個体差ごとモデリングする技術。" },
      ],
    },
    { id: "slate_digital", order: 2, title: "Slate Digital", category: "プラグインバンドル", hook: "ドラム音源屋がサブスク制ミキシングツールの先駆けになり、業界のビジネスモデルを変えた話。", stub: true },
    { id: "ssl_plugins", order: 3, title: "SSL", category: "コンソールプラグイン", hook: "英国の伝説コンソールメーカーが何度も買収され、今は非上場のまま生き残っている話。", stub: true },
    { id: "neve_plugins", order: 4, title: "Neve / AMS Neve", category: "コンソールプラグイン", hook: "一人の天才技術者(Rupert Neve)の名前が今も最高級の代名詞であり続ける理由。", stub: true },
    { id: "izotope", order: 5, title: "iZotope", category: "マスタリング/AI", hook: "大学院生が始めた研究プロジェクトが、AI/機械学習でマスタリングを自動化する会社になり、最後はNative Instrumentsに吸収された話。", stub: true },
    { id: "elysia", order: 6, title: "elysia", category: "ブティックハード系", hook: "ドイツの技術者集団が「値段を下げない」戦略で高級ブランドを守り続けている話。", stub: true },
    { id: "lindell_audio", order: 7, title: "Lindell Audio", category: "ブティックハード系", hook: "スウェーデンの一人メーカーが「本物の回路を安く」で市場を食った話。", stub: true },
    { id: "uad", order: 8, title: "Universal Audio", category: "DSP/インターフェース", hook: "親子二代でDSPハードウェアとプラグインを結びつけたビジネスの話。", stub: true },
    { id: "celemony", order: 9, title: "Celemony", category: "ピッチ編集", hook: "たった一つの技術(DNA)が特許で守られ、20年経っても競合が現れない理由。", stub: true },
    { id: "spl", order: 10, title: "SPL", category: "ブティックハード系", hook: "「Exciter」「Transient Designer」という新しいプラグインのジャンルそのものを発明した会社の話。", stub: true },
    { id: "valhalla_dsp", order: 11, title: "Valhalla DSP", category: "リバーブ", hook: "たった一人の開発者が「安くて良いリバーブ」で業界の価格破壊をした話。", stub: true },
    { id: "maag_audio", order: 12, title: "Maag Audio", category: "ブティックハード系", hook: "一つの帯域(Air Band)を発明したことで一生食えるようになったエンジニアの話。", stub: true },
    { id: "vertigo_bettermaker", order: 13, title: "Vertigo Sound / Bettermaker", category: "ブティックハード系", hook: "オランダとポーランド、東欧発の高級ブティックブランドの話。", stub: true },
    { id: "millennia_chandler", order: 14, title: "Millennia Media / Chandler Limited", category: "ブティックハード系", hook: "アメリカの「本物のヴィンテージ回路を今も作る」職人メーカーの話。", stub: true },
    { id: "shadow_hills_etc", order: 15, title: "Shadow Hills / Purple Audio / Black Box Analog Design", category: "ブティックハード系", hook: "一台数十万円のハードウェアを作る極小工房が、なぜプラグイン化に踏み切ったか。", stub: true },
    { id: "pultec", order: 16, title: "Pultec", category: "ヴィンテージEQ", hook: "1950年代の真空管EQが、今も「あの音」の代名詞であり続ける理由。", stub: true },
    { id: "tascam_teac", order: 17, title: "TASCAM / TEAC", category: "テープエミュレーション", hook: "日本のテープ機メーカーが、なぜ今デジタルの中で「エミュレーション」として蘇っているか。", stub: true },
    { id: "ik_multimedia", order: 18, title: "IK Multimedia", category: "アンプシム/総合", hook: "イタリア発、ハードとソフトの両方でギタリスト市場を制した会社の話。", stub: true },
    { id: "neold", order: 19, title: "NEOLD", category: "ヴィンテージ復刻", hook: "韓国発の新興ブランドが、なぜ古い真空管マイクプリの名前を次々復刻するのか。", stub: true },
    { id: "small_brands_roundup", order: 20, title: "小規模・新興ブランド総集編", category: "総集編", hook: "「大手になれなかった」わけではなく「なる気がない」規模のニッチ経営という生き方。", stub: true },
  ],
};
