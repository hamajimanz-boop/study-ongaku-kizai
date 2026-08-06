/* Phase 3: 楽器メーカー編(ギター/ベース/ドラム/シンバル) — 全15社 */
window.COURSES = window.COURSES || {};
window.COURSES["instrument_makers"] = {
  id: "instrument_makers",
  title: "楽器メーカー編(ギター/ベース/ドラム)",
  description: "エレキギター・ベース・アコースティックギター・ドラム・シンバルなど、演奏する楽器そのもののメーカーを学ぶ。",
  color: "#b5482a",
  order: 3,
  active: true,
  units: [
    {
      id: "fender",
      order: 1,
      title: "Fender",
      category: "エレキギター",
      hook: "ラジオ修理屋のおやじが「ギターは弾けないのに」設計した1本が、エレキギターという楽器の形そのものを決めてしまった話。",
      image: "fender_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Fenderの創業者Leo Fenderって、実はギター弾けなかったって聞いたんですけどマジですか?" },
            { who: "sensei", text: "本当なんだ。1946年、アメリカ・カリフォルニア州フラトンでLeo Fenderが設立したんだけど、Leo自身はラジオ・アンプの修理業出身の技術者で、実は生涯ほとんどギターを弾けなかったとされる。「演奏者ではなく製造者・修理のしやすさの視点」で楽器を設計したことが、後の量産成功の一因になったんだよ。" },
            { who: "mina", text: "テレキャスとかストラトって、いつ頃生まれたんですか?" },
            { who: "sensei", text: "1950年発売のTelecasterは、世界初の量産型ソリッドボディ・エレキギターだ。1951年にはPrecision Bass(通称P-Bass)を発売して、これも世界初の量産型エレキベースになった。1954年のStratocasterで、現在まで続くエレキギターの基本フォーマットがほぼ完成したんだよ。" },
            { who: "mina", text: "Fenderってずっと独立した会社だったんですか?" },
            { who: "sensei", text: "いや、1965年にCBS(コロンビア放送)に売却されて、いわゆる「CBS期」は量産重視で品質低下が指摘されることもあったんだ。1985年に経営陣・投資家グループが買い戻して、現在のFender Musical Instruments Corporation(FMIC)として独立したんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Fenderの音って、何が特徴なんですか?" },
            { who: "sensei", text: "シングルコイル・ピックアップによる、明るく硬質でクリアな「テリー(Telecaster的なきらびやかさ)」「ストラトのくすんだクセ」が特徴だ。ハムバッカー式のGibson系と対比される音の基準として語られるんだよ。" },
            { who: "mina", text: "構造的な違いも音に影響してるんですか?" },
            { who: "sensei", text: "ボルトオン・ネック(ネックをボディにネジ留めする構造)を採用していて、Gibson系のセットネック(接着)よりアタック感が強く出るとされる。製造コスト・修理のしやすさの面でも優れていて、量産向きの設計思想が音のキャラクターにも表れているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/fender_stratocaster.jpg",
          imageCredit: '写真: Friedrich Haag / <a href="https://commons.wikimedia.org/wiki/File:002_2014_12_17_Musikinstrumente.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>Player IIシリーズ</strong>(15〜25万円) — メキシコ製の主力普及帯。定番ライン。",
            "<strong>American Professional II</strong>(25〜35万円) — USA製上位ライン。テレキャスター/ストラトキャスター/ジャズマスター/ジャガー等の主要モデルを網羅。",
            "<strong>American Ultra II</strong>(25〜35万円) — より現代的な仕様、コンター加工(体に沿うよう丸く削る加工)強化のネック。",
            "<strong>Custom Shop / Masterbuilt</strong>(50万円〜) — 職人による受注製作。Masterbuiltは著名ビルダーの手作業で1本100万円を超えることも。",
            "<strong>Precision Bass</strong>(1951年発売) — 世界初の量産エレキベース。",
            "<strong>Jazz Bass</strong>(1960年発売) — 2ピックアップ仕様のベース定番。",
            "<strong>Squier</strong>(3〜10万円台) — 初心者〜中級者向けの廉価ライン。Fenderが所有するブランド。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Fenderって上場したりしてるんですか?" },
            { who: "sensei", text: "2012年に株式上場を計画していたけど、直前で撤回した経緯があるんだ。ギター人口の減少懸念など市場の不確実性が背景にあったとされる。現在は非公開企業として運営を続けているよ。" },
            { who: "mina", text: "Fenderって他にもブランド持ってるんですか?" },
            { who: "sensei", text: "傘下にはSquier(廉価版ブランド)のほか、Jackson、Charvel、EVH、Gretsch(一部ライセンス生産)なども持っていて、単一ブランドではなく複数価格帯・複数キャラクターのブランド群を統括するグループとして事業を展開しているんだ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          image: "compare_guitars.png",
          dialogue: [
            { who: "mina", text: "Fenderの最大のライバルってGibsonですよね?" },
            { who: "sensei", text: "そう。「ボルトオン・シングルコイルで明るいFender」対「セットネック・ハムバッカーで太いGibson」という対比は、エレキギターの歴史そのものを貫く二大潮流として語られるんだ。近年はPRSが両者の中間的な性格のブランドとして第三勢力の地位を固めつつあるよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "テレキャスターって最初から「テレキャスター」って名前だったんですか?" },
            { who: "sensei", text: "実は違うんだ。最初期の名称「Broadcaster」は、ドラムメーカーGretschの商標「BroadKaster」と衝突したため短期間で改称された経緯がある。この移行期の無銘(ロゴ無し)モデルは「Nocaster」と呼ばれて、コレクターの間で特に珍重されているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Fenderの創業者Leo Fenderの経歴として正しいのは?", choices: ["プロのギタリスト", "ラジオ/アンプ修理業出身の技術者", "レコード会社の経営者", "ドラム職人"], answer: 1, explain: "Leo Fenderはラジオ修理業出身で、生涯ほとんどギターを弾けなかったとされる。" },
        { q: "世界初の量産型ソリッドボディ・エレキギターとされるモデルは?", choices: ["Stratocaster", "Telecaster", "Les Paul", "SG"], answer: 1, explain: "1950年発売のTelecaster(発売当初はEsquire/Broadcaster)が世界初の量産ソリッドボディギター。" },
        { q: "Fenderのギターに採用されているネック構造は?", choices: ["セットネック(接着)", "ボルトオン(ネジ留め)", "スルーネック", "接着剤不使用の圧着式"], answer: 1, explain: "ボルトオン・ネックが特徴で、Gibson系のセットネックと対比される。" },
        { q: "Fenderが1965年に売却された相手企業は?", choices: ["CBS", "Sony", "Yamaha", "Gibson"], answer: 0, explain: "CBS(コロンビア放送)に売却され、1985年に経営陣が買い戻した。" },
        { q: "Telecasterの初期名称「Broadcaster」が短期間で改称された理由は?", choices: ["売上不振のため", "Gretschの商標と衝突したため", "Leo Fenderの気まぐれ", "CBSの指示"], answer: 1, explain: "ドラムメーカーGretschの商標「BroadKaster」と衝突したため改称された。" },
      ],
    },
    {
      id: "gibson",
      order: 2,
      title: "Gibson",
      category: "エレキギター",
      hook: "ギタリスト本人が持ち込んだ「無垢の丸太」というアイデアを一度は断った会社が、後にそれを看板商品にした話。",
      image: "gibson_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Gibsonってどんな成り立ちの会社なんですか?" },
            { who: "sensei", text: "1902年、アメリカ・ミシガン州カラマズーでOrville Gibsonが設立したんだ。アーチトップ(表板が湾曲した)アコースティック/セミアコギターのメーカーとして発展した老舗ブランドだよ。" },
            { who: "mina", text: "Les Paulってどういう経緯で生まれたんですか?" },
            { who: "sensei", text: "1952年発売のLes Paulは、ギタリストのLes Paul本人が提案した「ソリッドボディに近い、ハウリングに強いギター」のアイデアを反映して開発されたんだ。実はLes Paul自身は当初「丸太に弦を張った」ような完全ソリッドボディの試作機をGibsonに持ち込んだけど、市場に受け入れられないと一度は断られた経緯があるんだよ。後にFenderのソリッドボディ人気を見て方針転換して、Les Paulとの協業モデルとして発売されたんだ。" },
            { who: "mina", text: "Gibsonって経営的に苦しい時期もあったんですか?" },
            { who: "sensei", text: "1969年から1986年まで複合企業Norlin傘下となって、この時期は品質のばらつきが指摘されることもあった。1986年にHenry Juszkiewicz氏らが買収し再建したんだ。2018年には楽器以外の消費者向け事業への多角化が裏目に出て経営破綻したけど、その後投資ファンドKKR主導の再建を経て、現在はギター/楽器事業に集中する体制に戻っているよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Gibsonの音って、Fenderと何が違うんですか?" },
            { who: "sensei", text: "ハムバッカー・ピックアップによる、太く滑らかで歪ませても潰れにくい音が特徴だ。セットネック構造による長いサステインも評価されるよ。" },
            { who: "mina", text: "ボディの構造も音に関係してるんですか?" },
            { who: "sensei", text: "マホガニーボディにメイプルの甲板を貼り合わせる構造(Les Paul)は、低域の量感と高域の煌びやかさを両立する組み合わせとして広く模倣されているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/gibson_les_paul.jpg",
          imageCredit: '写真: David Saddler / <a href="https://commons.wikimedia.org/wiki/File:Spirit_of_America_Gibson_Les_Paul_Guitar_closeup_at_Ellis_Island_2011-03-18.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Les Paul</strong>(20万円台〜50万円超) — 1952年発売。Studioから最上位Customまでグレード多数。マホガニーボディ+メイプルトップ。",
            "<strong>SG</strong>(25〜60万円程度) — 1961年発売。Les Paulより軽量なマホガニー単板ボディ。",
            "<strong>ES-335</strong>(25〜60万円程度) — 1958年発売。セミホロウボディでフィードバックに強くジャズ〜ロックまで対応。",
            "<strong>Flying V / Explorer</strong>(25〜60万円程度) — 1958年発売の「Modernistic」シリーズ。当時は先進的すぎて販売不振だったが後年再評価された。",
            "<strong>Epiphone</strong>(3〜15万円台) — Gibson傘下の廉価ライン。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "2018年の経営破綻って、ギターが売れなくなったのが原因なんですか?" },
            { who: "sensei", text: "いや、ギター事業自体よりもオーディオ機器メーカーPhilips傘下のブランド買収など、本業から離れた多角化投資が主因とされているんだ。再建後はギター/ベース本業への集中と、Epiphoneなど廉価ブランドの強化が進められているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Gibsonの立ち位置って、業界的にはどう語られるんですか?" },
            { who: "sensei", text: "Fenderとの「ボルトオン明るい系」対「セットネック太い系」という対比が最大の軸だ。近年はPRSが両者の中間的キャラクターで存在感を増していて、御三家的な構図が語られることもあるよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Les Paul本人はこのギターでどれくらい儲けたんですか?" },
            { who: "sensei", text: "ロイヤリティ契約に基づき自身の名を冠したモデルの売上から収入を得ていて、後年「自分の名前がついた楽器で最も多くの富を得たミュージシャン」とも評されたんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Gibsonの創業都市はどこか?", choices: ["カラマズー", "ナッシュビル", "デトロイト", "シカゴ"], answer: 0, explain: "1902年、ミシガン州カラマズーで創業した。" },
        { q: "Les Paulの開発にまつわるエピソードとして正しいのは?", choices: ["Gibsonが一方的に企画した", "Les Paul本人の試作提案を一度は断っていた", "Fenderと共同開発した", "元は放送局向け機材だった"], answer: 1, explain: "Les Paul本人が持ち込んだソリッドボディ案を、Gibsonは一度断っていた経緯がある。" },
        { q: "Gibsonのピックアップの特徴は?", choices: ["シングルコイル", "ハムバッカー(2コイル)", "ピエゾ式のみ", "磁石を使わない光学式"], answer: 1, explain: "ノイズを打ち消すハムバッカー構造で、太く滑らかな音が特徴。" },
        { q: "2018年のGibson経営破綻の主因とされるのは?", choices: ["ギター需要の急減", "本業から離れた多角化投資", "為替の急変動", "工場の火災"], answer: 1, explain: "楽器以外への多角化投資が裏目に出たことが主因とされる。" },
        { q: "Gibsonの廉価ブランドは?", choices: ["Squier", "Epiphone", "Charvel", "Rockbass"], answer: 1, explain: "EpiphoneはGibson傘下の廉価ブランド。" },
      ],
    },
    {
      id: "ibanez",
      order: 3,
      title: "Ibanez",
      category: "エレキギター",
      hook: "訴訟をきっかけに「コピー品メーカー」から「シュレッドギターの代名詞」へと生まれ変わった日本ブランドの話。",
      image: "ibanez_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Ibanezって名前、そもそもどこから来てるんですか?" },
            { who: "sensei", text: "日本の星野楽器(Hoshino Gakki、1908年創業)が展開するギターブランドだ。「Ibanez」の名は、かつて星野楽器が輸入していたスペインのギター製作者Salvador Ibáñezの名に由来するんだよ。" },
            { who: "mina", text: "訴訟があったって聞いたことあるんですけど?" },
            { who: "sensei", text: "1970年代、GibsonやFenderの人気モデルに酷似した「コピーモデル」を製造・輸出していたことが問題となって、1977年にGibson側と訴訟・和解したんだ。これを機にオリジナルデザインへの転換を進めて、後のRGシリーズなど独自路線を確立したんだよ。" },
            { who: "mina", text: "そこからどうやって今の地位を築いたんですか?" },
            { who: "sensei", text: "1980年代後半以降、Steve Vai(JEMシリーズ)、Joe Satriani(JSシリーズ)ら著名ギタリストとのシグネチャーモデル展開で「テクニカル系ギタリストのブランド」としての地位を確立したんだ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Ibanezの音とか弾きやすさって、何が特徴なんですか?" },
            { who: "sensei", text: "高出力ハムバッカーによる歪ませた時の抜けの良さ、そして極薄・高速なネック形状(Wizardネック等)による速弾きのしやすさが特徴だ。7弦/8弦などの拡張弦モデルにも早くから注力していて、低チューニングのヘヴィな音楽ジャンルでも定番化したんだよ。" },
            { who: "mina", text: "アーミングとかもよくやるイメージあります。" },
            { who: "sensei", text: "フロイドローズ式トレモロの搭載モデルが多くて、激しいアーミング奏法を安定して行える点もメタル/シュレッド系ギタリストに支持される理由なんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/ibanez_rg.jpg",
          imageCredit: '写真: Styroks / <a href="https://commons.wikimedia.org/wiki/File:IbanezRg.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>RGシリーズ</strong>(5〜30万円台) — 1987年発売開始。速弾き向けの定番。",
            "<strong>JEMシリーズ</strong>(20万円台〜) — Steve Vaiシグネチャー。モンキーグリップ付き。",
            "<strong>S(Saber)シリーズ</strong> — 薄型軽量ボディ。",
            "<strong>AZシリーズ</strong>(20万円台〜) — 2018年発売。フジゲン製の近年の高評価汎用ライン。",
            "<strong>GIOシリーズ</strong>(3〜5万円台) — 普及帯のエントリーライン。",
            "<strong>Prestigeライン</strong>(20万円台〜) — 日本製の上位ライン。",
            "<strong>SRシリーズ</strong> — ベースライン。アコースティックギターも展開。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Ibanezって製造はどこでやってるんですか?" },
            { who: "sensei", text: "自社工場「富士弦楽器製造(Fujigen)」との長年の関係により、日本製の高い製造品質と量産効率を両立してきたんだ。近年は上位モデルをインドネシア・中国等の工場にも展開しつつ、Premiumライン以上は日本製にこだわるなど価格帯ごとの生産国戦略を取っているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Ibanezのライバルってどんなブランドがいるんですか?" },
            { who: "sensei", text: "Jackson、Charvel、ESPといった「速弾き/メタル向け」ブランドと直接競合するんだ。Fender/Gibsonの「伝統」路線とは異なる「性能・演奏性重視」の市場を切り開いたパイオニア的存在とされているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "JEMシリーズのあの穴、何のためにあるんですか?" },
            { who: "sensei", text: "「モンキーグリップ」と呼ばれるあの穴は、当初「重量削減」との説明もあったけど、実際にはステージ上でギターを片手で持ち上げるパフォーマンス用の意匠という説が有力なんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "「Ibanez」というブランド名の由来は?", choices: ["星野楽器の創業者の名前", "スペインのギター製作者の名前", "アメリカの都市名", "特に意味のない造語"], answer: 1, explain: "スペインのギター製作者Salvador Ibáñezの名に由来する。" },
        { q: "1977年にIbanezが経験した出来事は?", choices: ["株式上場", "Gibsonとの訴訟・和解", "工場の全焼", "Fenderとの合併"], answer: 1, explain: "コピーモデルを巡りGibsonと訴訟・和解し、オリジナル路線へ転換した。" },
        { q: "IbanezのJEMシリーズのシグネチャーギタリストは?", choices: ["Steve Vai", "Eric Clapton", "Jimi Hendrix", "B.B. King"], answer: 0, explain: "Steve Vaiのシグネチャーモデルとして知られる。" },
        { q: "Ibanezが早くから注力してきた拡張弦仕様は?", choices: ["12弦モデルのみ", "7弦/8弦などの拡張弦モデル", "3弦モデル", "フレットレスモデルのみ"], answer: 1, explain: "低チューニング向けの7弦/8弦モデルに早くから注力してきた。" },
        { q: "Ibanezと同じ星野楽器グループに属するドラムブランドは?", choices: ["Tama", "Pearl", "Ludwig", "DW"], answer: 0, explain: "Tamaは星野楽器(Hoshino Gakki)のドラム部門ブランド。" },
      ],
    },
    {
      id: "prs",
      order: 4,
      title: "PRS (Paul Reed Smith)",
      category: "エレキギター",
      hook: "「Fenderのように弾けてGibsonのように鳴る」を本気で目指した若者が、ギター製作者としての地位を築いた話。",
      image: "prs_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "PRSってどうやって創業したブランドなんですか?" },
            { who: "sensei", text: "1985年、アメリカ・メリーランド州でPaul Reed Smith本人が設立したんだ。大学時代からギター製作を独学で始めて、有名ミュージシャンに直接ギターを見せて回るなど、地道な営業活動からブランドを立ち上げた経緯を持つんだよ。" },
            { who: "mina", text: "無名のブランドがどうやって信頼を得たんですか?" },
            { who: "sensei", text: "創業初期にCarlos Santanaが同社のギターを気に入り使用を始めたことが、ブランドの信頼性を大きく押し上げたとされているんだ。GibsonでLes Paul開発時代の社長を務めたTed McCarty氏を顧問に迎えて、その名を冠したMcCartyシリーズも展開しているよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "PRSってFenderとGibsonの中間って言われますけど、どういうことなんですか?" },
            { who: "sensei", text: "「Fenderの弾きやすさ・レスポンスの速さ」と「Gibsonの太さ・サステイン」を両立させることを明確な設計目標に掲げてきたブランドなんだ。多くのモデルがセットネック構造ながら、Fender的な機敏さを感じさせるネックシェイプを追求している点が特徴だよ。" },
            { who: "mina", text: "デザイン的にも独自の要素があるんですか?" },
            { who: "sensei", text: "24フレット仕様や独自のトレモロブリッジ設計など、Fender/Gibsonのどちらの伝統にも属さない独自のディテールを多く持っているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/prs_guitar.jpg",
          imageCredit: '写真: Rachmaninoff / <a href="https://commons.wikimedia.org/wiki/File:PRS_Custom_24_teal_black_2004,_headstock.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>Custom 24</strong>(40万円台〜) — 1985年発売。24フレット仕様のフラッグシップ。",
            "<strong>McCarty</strong>(40万円台〜) — 22フレット、よりヴィンテージ的な音を志向。Ted McCarty監修。",
            "<strong>Silver Sky</strong>(30万円台) — John Mayerシグネチャー。Fenderライクな設計。",
            "<strong>SEシリーズ</strong>(5〜15万円台) — インドネシア等での製造による廉価ライン。",
            "<strong>Private Stock</strong>(100万円超) — 完全受注生産、同社最高峰のカスタムライン。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "PRSって木目で価格が変わったりするんですか?" },
            { who: "sensei", text: "木材の杢目の等級によって価格が変わる「10 Top」というグレーディング制度が有名で、見た目の美しさそのものが価格の付加価値として明確に商品化されているんだ。基準に満たない木材は容赦なく製品から外されるという、徹底した品質管理でも知られているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "PRSって業界的にはどういう立ち位置なんですか?" },
            { who: "sensei", text: "Fender・Gibsonの「二大老舗」に次ぐ「第三勢力」として、ハイエンド市場での存在感を確立した数少ない後発ブランドの一つなんだ。ボディインレイに使われる鳥のデザイン(バードインレイ)は同社の視覚的な識別要素として広く認知されているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "あの鳥のインレイって、全部同じデザインなんですか?" },
            { who: "sensei", text: "いや、モデルグレードによってデザインが異なっていて、コレクターの間ではグレード識別の目安としても使われているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "PRSを創業したのは誰か?", choices: ["Paul Reed Smith本人", "Leo Fender", "Ted McCarty", "Les Paul"], answer: 0, explain: "1985年、Paul Reed Smith本人がメリーランド州で設立した。" },
        { q: "PRSの初期の信頼性向上に大きく貢献したとされるミュージシャンは?", choices: ["Carlos Santana", "Jimi Hendrix", "Chuck Berry", "B.B. King"], answer: 0, explain: "Carlos SantanaがPRSを気に入り使用したことがブランドの信頼性を押し上げた。" },
        { q: "PRSが設計目標として掲げてきたことは?", choices: ["Fenderの弾きやすさとGibsonの太さの両立", "できるだけ安価に量産すること", "アコースティックギター専業になること", "ドラムとのセット販売"], answer: 0, explain: "両ブランドの長所を両立させることを明確な目標としてきた。" },
        { q: "PRSの木材グレーディング制度の名称は?", choices: ["10 Top", "AAAグレード", "プレミアムシリーズ", "マスターグレード"], answer: 0, explain: "杢目の美しさによって等級分けする「10 Top」制度が知られる。" },
        { q: "PRSの視覚的な識別要素として知られるインレイは?", choices: ["鳥(バード)", "星", "ハート", "稲妻"], answer: 0, explain: "フレットボードのバードインレイが同社の識別要素として広く知られる。" },
      ],
    },
    {
      id: "rickenbacker",
      order: 5,
      title: "Rickenbacker",
      category: "エレキギター",
      hook: "世界初の電気楽器を生んだ会社が、その後も頑なに「量産の誘惑」に乗らなかった話。",
      image: "rickenbacker_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Rickenbackerって、いつからある会社なんですか?" },
            { who: "sensei", text: "1931年、Adolph RickenbackerとGeorge Beauchampらによって設立されたんだ(当時の社名はRo-Pat-In)。同年発表の「フライパン」(Frying Pan、ラップスティール型の電気楽器)は、世界初期の電気楽器の一つとされているよ。" },
            { who: "mina", text: "今のイメージの元になった製品はいつ頃なんですか?" },
            { who: "sensei", text: "1950年代後半以降のセミホロウボディ「300シリーズ」(330/360等)が看板製品になって、1960年代にThe Beatles(George Harrisonの360/12、12弦モデル)やThe Byrds(Roger McGuinn)が使用したことで「ジャングリーサウンド」の代名詞になったんだ。" },
            { who: "mina", text: "ベースも有名アーティストが使ってたんですか?" },
            { who: "sensei", text: "そう、ベースの4001/4003シリーズも、Paul McCartney(The Beatles)、Chris Squire(Yes)ら著名ベーシストが使用して、ロック/プログレの音を象徴する存在になったんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "「ジャングルサウンド」ってどういう音なんですか?" },
            { who: "sensei", text: "12弦モデルの「ジャングルサウンド」、倍音の多い、シャリシャリと煌めくコーラス的な響きが最大の個性だ。ベースにおいては、「ホースシュー・ピックアップ」による中域の強い「グロウル」サウンドが特徴で、通常のベースとは明確に異なる音の輪郭を持つんだよ。" },
            { who: "mina", text: "他にも独自の機構があるんですか?" },
            { who: "sensei", text: "「Rick-O-Sound」というステレオ出力機構、ピックアップごとに別々の出力に振り分けられる仕様も同社独自のものとして知られているよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/rickenbacker_360_12.jpg",
          imageCredit: '写真: Marc Wathieu / <a href="https://commons.wikimedia.org/wiki/File:Rickenbacker_360-12_Jetglo_(black),_360-6_Fireglo_(red),_Fender_Vibro-Champ_vintage_tube_amp_1968,_Marc_Morgan_album_recording,_LowSwing_studio,_Berlin,_2011-01-25_22_30_45.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>330</strong>(20〜35万円) — セミアコ、シングルピックアップ配置。",
            "<strong>360</strong>(20〜35万円) — 上位機、バインディング装飾強化。",
            "<strong>360/12</strong>(20〜35万円) — 12弦、George Harrison使用モデル。",
            "<strong>4001</strong> — 1960年代のヴィンテージベース、Paul McCartney使用。",
            "<strong>4003</strong>(20万円台) — 現行主力ベースモデル。",
            "ラインナップは他ブランドに比べて非常に絞り込まれており(常時展開モデルは10種前後)、頻繁なモデルチェンジも行わない。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Rickenbackerって他のブランドより手に入りにくい印象があります。" },
            { who: "sensei", text: "同族経営(Hall家)を維持する非公開企業で、海外への正規販売網を意図的に限定するなど、供給量を絞ることでブランドの希少性を保つ戦略を取っているとされているんだ。他社に比べエンドースメント契約にも消極的であることで知られているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Rickenbackerって、FenderやGibsonとは違う戦い方をしてるんですか?" },
            { who: "sensei", text: "そう、Fender/Gibsonのような「主流」の座を追わず、独自のニッチ(ジャングルサウンド、プログレ/オルタナティブ系のベース)に特化したポジションを保ち続けている数少ないヴィンテージブランドなんだ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "中古のRickenbackerって高いイメージあります。" },
            { who: "sensei", text: "中古市場での流通量が絞られていることもあって、状態の良いヴィンテージモデルは他ブランド以上に価格が高騰しやすい傾向があるんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Rickenbackerが1931年に発表した世界初期の電気楽器の愛称は?", choices: ["フライパン", "アイロン", "スプーン", "フォーク"], answer: 0, explain: "ラップスティール型の「フライパン(Frying Pan)」が発表された。" },
        { q: "Rickenbackerの12弦ギターを象徴する音のキャラクターは?", choices: ["ジャングリーサウンド(きらびやかな響き)", "極端に太いベース音", "無音に近い静けさ", "パーカッシブな打撃音"], answer: 0, explain: "The Beatlesらが使用し「ジャングルサウンド」の代名詞となった。" },
        { q: "Rickenbackerベースの特徴的なピックアップ形状は?", choices: ["ホースシュー(馬蹄形)", "三角形", "円形単一コイル", "六角形"], answer: 0, explain: "馬蹄形のホースシュー・ピックアップが中域の強いグロウルサウンドを生む。" },
        { q: "Rickenbackerのステレオ出力機構の名称は?", choices: ["Rick-O-Sound", "StereoMax", "DualTone", "TwinOut"], answer: 0, explain: "ピックアップごとに出力を振り分けるRick-O-Soundが独自仕様として知られる。" },
        { q: "Rickenbackerの事業戦略として知られる特徴は?", choices: ["積極的なエンドースメント契約と大量生産", "供給を絞り希少性を保つ戦略", "毎年のモデルチェンジ", "海外への積極的なOEM供給"], answer: 1, explain: "販売網・供給量を絞り、希少性を保つ戦略を取っているとされる。" },
      ],
    },
    {
      id: "jackson",
      order: 6,
      title: "Jackson",
      category: "エレキギター",
      hook: "1本のスケッチから生まれたV字型ギターが、メタルギターの「標準的な尖り方」を決めた話。",
      image: "jackson_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Jacksonって、あのV字型ギターで有名ですよね?どういう経緯で生まれたブランドなんですか?" },
            { who: "sensei", text: "元はCharvelのリペア工房を引き継いだGrover Jacksonが、1980年前後に自身の名を冠したブランドとして展開を始めたんだ。最初の看板製品は、Ozzy Osbourneのバンドのギタリスト、故Randy Rhoadsが自らスケッチしたデザインを元に製作されたV字形ギター「Randy Rhoads」モデルなんだよ。" },
            { who: "mina", text: "今も独立したブランドなんですか?" },
            { who: "sensei", text: "現在はFenderグループ傘下(Charvelと同じ企業グループ)で、メタル/シュレッド市場に特化したブランドとして運営されているんだ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Jacksonの音の特徴って何なんですか?" },
            { who: "sensei", text: "先鋭的なボディシェイプ(V字・スター型など)と、ネックスルー構造による長いサステインが特徴だ。高出力ピックアップとの組み合わせで、歪ませた時の抜けの良さを追求しているんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/jackson_v.jpg",
          imageCredit: '写真: The original uploader was RunningWild at English Wikipedia. / <a href="https://commons.wikimedia.org/wiki/File:JACK1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 3.0)',
          paragraphs: [
            "<strong>Randy Rhoadsモデル</strong>(20万円台〜) — 1981年発表のV字型。",
            "<strong>Soloist</strong> — 汎用スーパーストラト型。ネックスルー構造の上位機あり。",
            "<strong>King V / Dinky</strong> — 小ぶりなヘッドが特徴。",
            "<strong>USA Custom Shop</strong>(40万円〜100万円超) — 上位ライン。",
            "<strong>JSシリーズ</strong>(3〜8万円台) — 海外生産の普及帯。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Jacksonっていつ頃Fenderの傘下になったんですか?" },
            { who: "sensei", text: "2002年にFenderグループに買収されて、Charvelと同じ傘下企業として運営されているんだ。メタル市場という明確なニッチに特化することで、Fender/Gibsonの主流路線とは棲み分けたブランド戦略を取っているんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Jacksonと同じジャンルのブランドって他にもありますよね?" },
            { who: "sensei", text: "Ibanez、ESP/LTD、Charvelと並ぶ「メタル/シュレッド系」ブランドの代表格だ。特にV字ボディの分野ではJacksonが最も象徴的なブランドとして扱われることが多いんだよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Jacksonのギターって、見た目で分かる特徴とかあるんですか?" },
            { who: "sensei", text: "「シャークフィン」(サメのヒレ型)インレイと呼ばれる指板装飾が、Jacksonブランドの視覚的な識別要素として広く知られているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Jacksonの看板モデル「Randy Rhoads」の由来は?", choices: ["ギタリストRandy Rhoadsのスケッチを元に製作", "創業者の息子の名前", "開発都市の名前", "特に由来はない"], answer: 0, explain: "Ozzy Osbourneのギタリスト、Randy Rhoadsが自ら描いたスケッチが元になっている。" },
        { q: "Jacksonが得意とするボディ構造は?", choices: ["ネックスルー構造", "完全分解式ボディ", "アコースティック構造", "カーボン一体成型のみ"], answer: 0, explain: "ネックスルー構造による長いサステインが特徴とされる。" },
        { q: "Jacksonの視覚的識別要素として知られるインレイは?", choices: ["シャークフィン(サメのヒレ)", "バード(鳥)", "星条旗", "ハート"], answer: 0, explain: "シャークフィンインレイが同ブランドの識別要素として知られる。" },
        { q: "Jacksonの現在の親会社は?", choices: ["Fenderグループ", "Gibsonグループ", "Yamaha", "独立資本"], answer: 0, explain: "2002年にFenderグループに買収され、Charvelと同じ傘下となった。" },
        { q: "Jacksonが特化している音楽ジャンルは?", choices: ["メタル/シュレッド", "クラシック", "ジャズ", "レゲエ"], answer: 0, explain: "先鋭的なボディと高出力ピックアップでメタル市場に特化している。" },
      ],
    },
    {
      id: "charvel",
      order: 7,
      title: "Charvel",
      category: "エレキギター",
      hook: "パーツ屋の寄せ集めから、エディ・ヴァン・ヘイレンの伝説のギターが生まれた話。",
      image: "charvel_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Charvelってどうやって始まったブランドなんですか?" },
            { who: "sensei", text: "1970年代、Wayne Charvelがリペア/パーツ販売業として創業したんだ。後にGrover Jacksonが引き継いで、1980年代初頭の「カスタムパーツでスーパーストラトを組む」というシュレッドギター文化の震源地の一つになったんだよ。" },
            { who: "mina", text: "エディ・ヴァン・ヘイレンとも関係あるんですか?" },
            { who: "sensei", text: "そう、Eddie Van Halenが自作した通称「Frankenstrat」は、Charvel製のパーツを組み合わせて作られたものとされていて、この1本がその後のスーパーストラト・ブームに火をつけたと言われているんだ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Charvelの音の特徴って何なんですか?" },
            { who: "sensei", text: "Fender系のボルトオン構造をベースに、高出力ハムバッカーやフロイドローズ式トレモロを組み合わせた「いいとこ取り」設計が特徴だ。伝統的なFender/Gibsonのどちらにも属さない「実戦向けカスタム」という発想を体現しているんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/charvel_guitar.jpg",
          imageCredit: '写真: Shixart1985 / <a href="https://commons.wikimedia.org/wiki/File:Charvel_San_Dimas_Koa_headstock_with_logo.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>So-Cal</strong> — ハムバッカー2基のシンプル構成。",
            "<strong>San Dimas</strong> — ブランド発祥地カリフォルニアの地名に由来。Fender系ヴィンテージ寄りの設計。",
            "<strong>Pro-Mod DK24</strong>(10〜20万円台) — 24フレット仕様の中核ライン。",
            "<strong>USA製Custom Shop</strong>(50万円超) — 上位ライン。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "CharvelもJacksonと同じ会社なんですか?" },
            { who: "sensei", text: "そう、JacksonとともにFenderグループ傘下で運営されていて、企業としては同じ資本のもとメタル系(Jackson)/オールラウンド系(Charvel)という棲み分けがされているんだ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Charvelって業界的にはどう位置づけられてるんですか?" },
            { who: "sensei", text: "Ibanez・Jacksonと並ぶ「スーパーストラト」文化の源流ブランドの一つだ。特にEddie Van Halenのエピソードにより、シュレッドギター史における象徴的な存在として語られるんだよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "「Frankenstrat」って、Charvelの正式な製品だったんですか?" },
            { who: "sensei", text: "いや、実はCharvel純正の完成品ではなく、パーツを寄せ集めて自作されたギターだったんだ。この点が、当時のDIY的なカスタムギター文化そのものを象徴するエピソードとしてしばしば語られるんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Eddie Van Halenの「Frankenstrat」に使われたとされるパーツブランドは?", choices: ["Charvel", "Gretsch", "Martin", "Zildjian"], answer: 0, explain: "Charvel製パーツを組み合わせて自作されたギターとされる。" },
        { q: "Charvelの創業当初の事業は?", choices: ["リペア/パーツ販売業", "レコード会社", "弦専業メーカー", "ドラム製造業"], answer: 0, explain: "Wayne Charvelがリペア/パーツ販売業として創業した。" },
        { q: "Charvelの現在の親会社は?", choices: ["Fenderグループ(Jacksonと同じ)", "Gibsonグループ", "Yamaha", "独立資本"], answer: 0, explain: "Jacksonと同じFenderグループ傘下で運営されている。" },
        { q: "Charvelが体現したとされるギター文化は?", choices: ["パーツを組み合わせるカスタムスーパーストラト文化", "完全受注生産のクラシックギター", "電子楽器専業への転換", "アコースティック専業ブランド化"], answer: 0, explain: "パーツ寄せ集めによるカスタムギター文化の震源地の一つとされる。" },
        { q: "Charvelの代表シリーズ名の由来となった地名は?", choices: ["San Dimas(カリフォルニア)", "ナッシュビル", "オックスフォード", "ハンブルク"], answer: 0, explain: "San Dimasはブランド発祥地カリフォルニアの地名に由来する。" },
      ],
    },
    {
      id: "esp_ltd",
      order: 8,
      title: "ESP / LTD",
      category: "エレキギター",
      hook: "メタリカのギタリスト2人の名を冠したモデルを持つ、日本発のメタル特化ブランドの話。",
      image: "esp_ltd_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "ESPって日本のブランドなんですか?" },
            { who: "sensei", text: "そう、1975年、日本で創業したんだ(Electric Sound Products)。当初はパーツ/リペア事業から始まって、後にオリジナルブランドとして展開したんだよ。カスタムショップ(ESP)と、より手頃な海外生産ライン(LTD)の二段構えで展開しているんだ。" },
            { who: "mina", text: "有名なアーティストとの繋がりもあるんですか?" },
            { who: "sensei", text: "Metallicaのギタリスト James Hetfield・Kirk Hammettや、多くのエクストリームメタル系アーティストとのシグネチャーモデル契約で知られているよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "ESPのギターってどういう方向性なんですか?" },
            { who: "sensei", text: "極端に速いネック、拡張スケール、高出力/アクティブピックアップの標準搭載など、メタル/エクストリームミュージック向けの機能を一貫して追求しているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Eclipse</strong>(ESP本家40万円台〜) — Les Paul的ボディ形状のオリジナル解釈。",
            "<strong>Horizon</strong>(40万円台〜) — スーパーストラト型。",
            "<strong>Kirk Hammettシグネチャー(KH-2等)</strong> — こうもり型インレイが特徴。",
            "<strong>James Hetfieldシグネチャー(Snakebyte、Truckster等)</strong> — Metallica両ギタリストのシグネチャーモデル。",
            "<strong>LTD EC / MHシリーズ</strong>(3〜15万円台) — 本家デザインを踏襲した海外生産の廉価版。EC-1000等は中級者に人気。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "ESPとLTDって、ビジネス的にはどう使い分けてるんですか?" },
            { who: "sensei", text: "ハイエンドのESPカスタムショップ製品と、量産型のLTDブランドで価格帯を分けることで、プロ向けとアマチュア向け両方の市場を同時に取り込むビジネスモデルを確立しているんだ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "ESPって業界的にどんな立ち位置なんですか?" },
            { who: "sensei", text: "Jackson、Schecterと並ぶメタル系ブランドの代表格だ。特にエクストリームメタル/デスメタル系のアーティストからの支持が厚い点が特徴だよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Metallicaのギタリスト2人とも契約してるって、珍しいことなんですか?" },
            { who: "sensei", text: "そうなんだ。James HetfieldとKirk Hammettという同一バンドの2人のギタリスト双方とシグネチャー契約を結んでいる点は、1ブランドが1バンドを事実上独占しているような珍しい事例として語られるんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "ESPの創業国はどこか?", choices: ["日本", "アメリカ", "ドイツ", "スウェーデン"], answer: 0, explain: "1975年に日本で創業した。" },
        { q: "ESPが展開する2つのブランドラインの関係は?", choices: ["ESP=カスタムショップ、LTD=廉価海外生産ライン", "ESPとLTDは無関係の別会社", "LTDが上位、ESPが廉価版", "ESPは既に廃止された"], answer: 0, explain: "ESPが上位カスタム、LTDが手頃な海外生産ラインという位置づけ。" },
        { q: "ESPとシグネチャー契約を結んでいるMetallicaのメンバーは?", choices: ["James HetfieldとKirk Hammett", "Lars UlrichとRobert Trujillo", "ボーカルのみ", "契約は結んでいない"], answer: 0, explain: "2人のギタリスト双方とシグネチャーモデル契約を結んでいる。" },
        { q: "ESP/LTDが一貫して追求している設計方向は?", choices: ["メタル/エクストリームミュージック向けの機能", "クラシックギターの伝統的設計", "アコースティック専業化", "電子ドラムとの統合"], answer: 0, explain: "拡張スケールや高出力ピックアップなどメタル向け機能を追求している。" },
        { q: "ESPと並ぶメタル系ブランドとして挙げられるのは?", choices: ["Jackson", "Martin", "Taylor", "Zildjian"], answer: 0, explain: "Jackson、Schecterと並ぶメタル系ブランドの代表格とされる。" },
      ],
    },
    {
      id: "schecter",
      order: 9,
      title: "Schecter",
      category: "エレキギター",
      hook: "パーツ交換用の部品メーカーが、いつの間にか完成品ブランドとして独り立ちした話。",
      image: "schecter_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Schecterって最初から完成品ギターを作ってたんですか?" },
            { who: "sensei", text: "いや、1976年、アメリカでSchecter Guitar Researchとして創業したんだけど、当初はFender系ギターの交換用パーツ(ネック、ボディ等)を製造する部品メーカーとしてスタートして、後に完成品ギターブランドへと発展したんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Schecterってどういう評価をされてるんですか?" },
            { who: "sensei", text: "ミドルクラス〜ハイエンドの価格帯で、メタル/ハードロック向けの高出力ピックアップと、実用性の高いネック形状を組み合わせた「コストパフォーマンスの高いメタルギター」という評価を確立しているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/schecter_guitar.jpg",
          imageCredit: '写真: Toglenn / <a href="https://commons.wikimedia.org/wiki/File:Schecter_Guitar_Research-2020_by_Glenn_Francis.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>Hellraiserシリーズ</strong>(8〜15万円台) — EMGアクティブピックアップ(電池で信号を増幅するピックアップ)搭載。",
            "<strong>Omenシリーズ</strong>(3〜6万円台) — 入門〜中級。",
            "<strong>C-1</strong> — 汎用性の高いオフセット気味のボディ、シリーズの主力形状。",
            "<strong>Synyster Gatesシグネチャー</strong> — Avenged Sevenfoldのギタリストとの協業モデル。",
            "<strong>Nikki Sixxシグネチャー</strong> — Mötley Crüeのベーシストとの協業モデル。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "パーツメーカーから完成品ブランドへの転換って、珍しいことなんですか?" },
            { who: "sensei", text: "パーツメーカーから完成品ブランドへの転換に成功した数少ない事例なんだ。ESP/LTDやJacksonと競合する価格帯・ジャンルに位置しながら、独自の「価格の割に上質」という評価軸で差別化を図っているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Schecterって業界的にどういう立ち位置なんですか?" },
            { who: "sensei", text: "ESP/LTD、Jacksonと並ぶメタル系ブランドの一角だ。特にミドルクラス価格帯でのコストパフォーマンスの良さで支持を集めているんだよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "パーツ専業だった名残みたいなものってあるんですか?" },
            { who: "sensei", text: "元々はパーツ専業だったという成り立ちから、現在も自社製ハードウェア(ブリッジ、ペグ等)の設計力に定評があるんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Schecterの創業当初の事業は?", choices: ["Fender系ギターの交換パーツ製造", "レコード制作", "ドラム製造", "弦専業メーカー"], answer: 0, explain: "交換用パーツメーカーとして創業し、後に完成品ブランドとなった。" },
        { q: "Schecterが評価されているポイントは?", choices: ["価格の割に上質(コストパフォーマンス)", "世界最高価格帯のみの展開", "アコースティック専業", "ドラムとのセット販売のみ"], answer: 0, explain: "ミドルクラス価格帯でのコストパフォーマンスの良さが評価されている。" },
        { q: "Schecterの入門〜中級ラインの名称は?", choices: ["Omenシリーズ", "StingRay", "Custom 24", "Starclassic"], answer: 0, explain: "Omenシリーズは入門〜中級向けの定番ラインとして知られる。" },
        { q: "Schecterとシグネチャー契約を結んだアーティストは?", choices: ["Synyster Gates(Avenged Sevenfold)", "Ringo Starr", "Carlos Santana", "Les Paul"], answer: 0, explain: "Synyster Gatesらとのシグネチャーモデルを展開している。" },
        { q: "Schecterが強みを持つとされる分野は?", choices: ["自社製ハードウェア(ブリッジ・ペグ)の設計力", "電子ドラムの開発", "シンバル合金の配合", "アコースティック力木設計"], answer: 0, explain: "パーツ専業だった経緯から、ハードウェア設計に定評がある。" },
      ],
    },
    {
      id: "gretsch",
      order: 10,
      title: "Gretsch",
      category: "エレキギター",
      hook: "ジョージ・ハリスンの最初の相棒であり、ロカビリーの音を決めたホロウボディギターの話。",
      image: "gretsch_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Gretschってすごく古い会社なんですよね?" },
            { who: "sensei", text: "そう、1883年、ドイツ系移民Friedrich Gretschがニューヨーク・ブルックリンで創業した老舗なんだ。当初は太鼓・バンジョーなど幅広い楽器を手がけて、後にホロウボディ/セミホロウボディのエレキギターで独自の地位を築いたんだよ。" },
            { who: "mina", text: "有名なモデルってどんなのがあるんですか?" },
            { who: "sensei", text: "The BeatlesのGeorge Harrisonが初期に愛用したDuo Jet、カントリー奏者Chet Atkinsのシグネチャーモデル(6120)、そして白い外装が印象的なWhite Falconなど、視覚的にも個性の強いモデルで知られているんだ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Gretschの音の特徴って何なんですか?" },
            { who: "sensei", text: "ホロウボディ/セミホロウボディ構造による、乾いたトゥワング(はじけるような煌びやかさ)サウンドが特徴だ。ロカビリー(Brian Setzer等)の音を象徴するギターとして今も現役で使われ続けているんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/gretsch_white_falcon.jpg",
          imageCredit: '写真: Eric Kilby / <a href="https://commons.wikimedia.org/wiki/File:Gretsch_White_Falcon_(1995),_played_by_The_Reverend_Horton_Heat,_Petersen_Auto_Museum.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.0)',
          paragraphs: [
            "<strong>White Falcon</strong>(40万円台〜) — 1955年発表、最上位。金色パーツと白い外装が特徴。",
            "<strong>Duo Jet</strong> — George Harrison使用。黒い外装のソリッド寄りホロウ構造。",
            "<strong>6120</strong> — Chet Atkinsモデル。オレンジ色が象徴的。",
            "<strong>Streamlinerシリーズ</strong>(5〜10万円台) — 入門〜中級ライン。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Gretschって今もFriedrich Gretsch家の会社なんですか?" },
            { who: "sensei", text: "いや、2002年よりギター部門はFenderがライセンス生産・販売を担当しているんだ。一方、Gretschのドラム部門は全くの別企業として存在していて、2012年にDW(Drum Workshop)が買収して現在に至るよ。同じGretschブランドがギターとドラムで別々の企業に運用されているという珍しい構造を持っているんだ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Gretschって業界的にどう見られてるんですか?" },
            { who: "sensei", text: "ホロウボディ系ギターの代表格として、Gibsonのセミホロウ(ES-335等)と比較されるんだ。ロカビリー/カントリー/ロックンロールの「レトロな色気」を求める層に特に支持されているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "George Harrisonって最初はGretschを使ってたんですか?" },
            { who: "sensei", text: "そう、最初に本格的に使用したエレキギターはGretsch Duo Jetだったとされていて、後にRickenbackerやGibsonへと移行していく前の重要な足跡として語られるんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Gretschの創業年はいつか?", choices: ["1883年", "1946年", "1974年", "1985年"], answer: 0, explain: "1883年、ドイツ系移民Friedrich Gretschがニューヨークで創業した老舗。" },
        { q: "Gretschギターの音の特徴は?", choices: ["乾いたトゥワング(煌びやかな響き)", "極端に太いメタル向けの歪み", "無音に近い静けさ", "電子音源のような無機質さ"], answer: 0, explain: "ホロウボディ構造によるトゥワングサウンドが特徴。" },
        { q: "現在のGretschギター部門を運営しているのは?", choices: ["Fender(ライセンス生産・販売)", "Gibson", "Yamaha", "独立資本のまま"], answer: 0, explain: "2002年以降、Fenderがライセンスでギター部門を運営している。" },
        { q: "Gretschのドラム部門の現在の所有者は?", choices: ["DW(Drum Workshop)", "Fender", "Pearl", "独立を維持"], answer: 0, explain: "ギター部門とは別企業として存在し、2012年にDWが買収した。" },
        { q: "George Harrison(The Beatles)が初期に使用したGretschモデルは?", choices: ["Duo Jet", "White Falcon", "Les Paul", "Stratocaster"], answer: 0, explain: "Duo Jetが初期のGeorge Harrisonの主力ギターだったとされる。" },
      ],
    },
    {
      id: "epiphone",
      order: 11,
      title: "Epiphone",
      category: "エレキギター",
      hook: "かつてGibsonの最大のライバルだった会社が、今はGibson傘下の廉価ブランドになっている話。",
      image: "epiphone_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Epiphoneって最初からGibsonの廉価版だったんですか?" },
            { who: "sensei", text: "実は全く逆なんだ。ギリシャ系移民Anastasios Stathopouloが興した楽器製造業が源流で、息子Epaminondas(愛称Epi)の名にちなみ「Epiphone」ブランドとして展開されたんだよ。1930〜40年代のアーチトップギター全盛期にはGibsonと肩を並べる、あるいは凌ぐ人気を誇るブランドだったんだ。" },
            { who: "mina", text: "それがどうしてGibson傘下になったんですか?" },
            { who: "sensei", text: "創業者Epiの死後経営が傾いて、1957年にライバルであったはずのGibsonが買収したんだ。以後はGibsonの廉価ブランドとして運用されて、Les Paul・SGなどGibsonの代表モデルを海外で生産する役割を担っているんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Epiphoneの音ってGibson本家とどう違うんですか?" },
            { who: "sensei", text: "現行製品は基本的にGibsonと同系統の設計(ハムバッカー、セットネック等)を踏襲しているけど、コスト重視の部材・工程により、Gibson本家とは価格・質感の面で明確に差別化されているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/epiphone_lp.jpg",
          imageCredit: '写真: Ethan Prater / <a href="https://commons.wikimedia.org/wiki/File:Epiphone_Limited_Edition_1959_Les_Paul_Standard_(2008,_headstock).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Les Paul(Epiphone版)</strong>(3〜10万円台) — Gibsonデザインの廉価版。",
            "<strong>SG(Epiphone版)</strong>(3〜10万円台)",
            "<strong>Casino</strong> — セミホロウ、John Lennon/Paul McCartneyが使用したことで知られる。",
            "<strong>Epiphone Inspired by Gibsonシリーズ</strong>(6〜15万円台) — 本家に近い仕様(USA製ピックアップ採用モデルも)を手頃な価格で提供。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "ライバルに買収されたブランドって、そのあとどうなるものなんですか?" },
            { who: "sensei", text: "「かつてのライバルが、買収後は相手の廉価版ブランドとして生き延びる」という構図は楽器業界でも有数の劇的な転換劇として語られるんだ。Gibsonにとっては入門〜中級市場を取りこぼさないための重要な収益源になっているんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Epiphoneって他ブランドで言うと何に近い立ち位置なんですか?" },
            { who: "sensei", text: "FenderにおけるSquierと同じ立ち位置(廉価版海外生産ブランド)として、業界内で明確に対になる存在として語られることが多いよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "ジョン・レノンがEpiphoneを使ってたって本当ですか?" },
            { who: "sensei", text: "本当だよ。使用したEpiphone Casinoは、Gibson本家ではなくEpiphoneブランドの製品でありながら、音楽史上屈指の有名ギターの一つになっているんだ。" },
          ],
        },
      ],
      quiz: [
        { q: "Epiphoneがかつて占めていた立場は?", choices: ["Gibsonの最大のライバル", "Fenderの子会社", "ドラム専業メーカー", "弦専業メーカー"], answer: 0, explain: "1930〜40年代のアーチトップ全盛期にはGibsonと肩を並べる人気ブランドだった。" },
        { q: "GibsonがEpiphoneを買収したのはいつか?", choices: ["1957年", "1902年", "1985年", "2018年"], answer: 0, explain: "創業者Epiの死後経営が傾き、1957年にGibsonが買収した。" },
        { q: "現在のEpiphoneの位置づけは?", choices: ["Gibsonの廉価版ブランド", "独立系の高級ブランド", "ドラム専業ブランド", "Fenderの一部門"], answer: 0, explain: "現在はGibsonの海外生産・廉価版ブランドとして運用されている。" },
        { q: "John Lennonが使用したEpiphoneのモデルは?", choices: ["Casino", "Les Paul", "SG", "Flying V"], answer: 0, explain: "セミホロウのCasinoをJohn Lennonが使用したことで知られる。" },
        { q: "FenderにおけるSquierと同じ立ち位置にあるとされるのは?", choices: ["Epiphone", "PRS", "Rickenbacker", "Martin"], answer: 0, explain: "廉価版海外生産ブランドとして、両者は対になる存在として語られる。" },
      ],
    },
    {
      id: "squier",
      order: 12,
      title: "Squier",
      category: "エレキギター",
      hook: "弦メーカーだった会社が、いつのまにかFenderの「入門者の入り口」を一手に引き受けるようになった話。",
      image: "squier_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Squierって最初からギターブランドだったんですか?" },
            { who: "sensei", text: "いや、1890年、V.C. Squier Companyとして弦メーカーからスタートしたんだ。1965年、FenderのCBS売却時に一緒に買収されて、Fenderグループの一員となったんだよ。" },
            { who: "mina", text: "今の「入門者向け」っていうイメージはいつ頃からなんですか?" },
            { who: "sensei", text: "1982年、当時市場に溢れていた日本製の高品質な「コピーモデル」に対抗するため、Fender自身が公認する廉価ブランドとしてSquierブランドのギターが復活・展開されたんだ。以後、Fenderの入門者向けラインとして定着しているんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Squierの音ってFender本家とどれくらい違うんですか?" },
            { who: "sensei", text: "設計自体はFender本家(Stratocaster、Telecaster等)の忠実な縮小コスト版で、音の傾向も基本的にはFender系のシングルコイルサウンドを踏襲するんだ。価格帯によって部材・製造精度に差があるよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/squier_strat.jpg",
          imageCredit: '写真: Arkach at English Wikipedia / <a href="https://commons.wikimedia.org/wiki/File:Modified_Fender_Squier_Stratocaster.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 3.0)',
          paragraphs: [
            "<strong>Bulletシリーズ</strong>(1〜2万円台) — 最も手頃な入門帯。",
            "<strong>Affinityシリーズ</strong>(2〜3万円台) — 中位ライン。",
            "<strong>Classic Vibeシリーズ</strong>(3〜6万円台) — 上位、ヴィンテージ仕様に近い再現度でコストパフォーマンスの評価が特に高い。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Squierってビジネス的にはどういう役割なんですか?" },
            { who: "sensei", text: "多くのギタリストが「最初の1本」としてSquierを手にすることから、Fenderブランド全体へのファン獲得の入り口として重要な役割を果たしているんだ。生産国は時代により日本・韓国・インドネシア・中国など変遷してきたよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Squierって他のブランドで言うと何に近いんですか?" },
            { who: "sensei", text: "GibsonにおけるEpiphoneと対になる、入門〜廉価帯の代表ブランドだ。近年は上位ラインの品質向上により「初心者用」という枠を超えた評価を得ることもあるよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "1982年の復活って、どういう背景があったんですか?" },
            { who: "sensei", text: "その頃は日本製ギターの品質向上がFender/Gibson側に強い危機感を与えていた時期で、Squierはその対抗策として生まれた「防衛的ブランド」という側面を持っているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "V.C. Squier Companyの創業当初の事業は?", choices: ["弦メーカー", "アンプ製造", "レコード会社", "ドラム製造"], answer: 0, explain: "1890年、弦メーカーとして創業した。" },
        { q: "Squierブランドが1982年に復活した背景は?", choices: ["日本製コピーモデルへの対抗", "CBSからの独立", "上場のため", "新素材の開発"], answer: 0, explain: "当時流通していた高品質な日本製コピーモデルに対抗する目的があった。" },
        { q: "Squierの上位ラインでヴィンテージ再現度の高いシリーズは?", choices: ["Classic Vibeシリーズ", "Bulletシリーズ", "Hellraiserシリーズ", "Eliminatorシリーズ"], answer: 0, explain: "Classic Vibeシリーズは上位帯でヴィンテージ仕様に近い再現度を持つ。" },
        { q: "GibsonにおけるEpiphoneと対になるとされるブランドは?", choices: ["Squier", "PRS SE", "LTD", "Rockbass"], answer: 0, explain: "両者とも親ブランドの廉価版海外生産ラインという共通点を持つ。" },
        { q: "Squierが1965年にFenderグループ入りした経緯は?", choices: ["CBSによるFender買収に伴い一緒に組み込まれた", "独自に資本参加を希望した", "訴訟の和解条件だった", "Gibsonからの譲渡"], answer: 0, explain: "CBSのFender買収時に一緒に買収されFenderグループの一員となった。" },
      ],
    },
    {
      id: "danelectro",
      order: 13,
      title: "Danelectro",
      category: "エレキギター",
      hook: "「口紅の容器」をそのままピックアップに転用した、安物ギターの異端児の話。",
      image: "danelectro_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Danelectroって、なんか安っぽいイメージがあるんですけど、どんな会社なんですか?" },
            { who: "sensei", text: "1947年、アメリカでNathan Danielが設立したんだ。当初から一貫して「低コストで独特の音を出す」ことを追求したブランドで、Sears百貨店のプライベートブランド「Silvertone」向けにもOEM供給していたことで知られているよ。" },
            { who: "mina", text: "ずっと同じブランドとして続いてきたんですか?" },
            { who: "sensei", text: "いや、1969年に一度生産を終了したんだけど、後にブランドが復活して現在まで独特なポジションを保ち続けているんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Danelectroの音って何が独特なんですか?" },
            { who: "sensei", text: "ボディにマソナイト(木質繊維板)を使うなど、当時としては異例の低コスト構造を採用しているんだ。ピックアップは実際に口紅容器の金属ケースを流用して作られたとされる「リップスティックピックアップ」で、独特の細く粒立った音を生み出すんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/danelectro_guitar.jpg",
          imageCredit: '写真: Eden, Janine and Jim / <a href="https://commons.wikimedia.org/wiki/File:Jimmy_Page%27s_Rig_-_1961_Danelectro_Model_3021,_ca.1962_Harmony_Sovereign_H1260_(serial_no._9631111260),_2%C3%97_Marshall_1959_Super_Lead,_Super_Bass,_3%C3%97_4%C3%9712in._cab.,_etc._-_Play_It_Loud._MET_(2019-05-13_19.09.34_by_Eden,_Janine_and_Jim).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>56/59シリーズ</strong>(5〜10万円台) — 1956/1959年モデルの復刻。",
            "<strong>12弦モデル</strong>(5〜10万円台) — リップスティックピックアップ2基搭載。",
            "<strong>Longhorn(ベース)</strong> — 牛の角のような特徴的なボディ形状、軽量なのに独特の見た目。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "安く作ることが逆に強みになったってことですか?" },
            { who: "sensei", text: "そうなんだ。「安く作る」ことそのものを個性・音楽的価値に転換した稀有な成功例とされているんだ。高級ブランドとは真逆の方向性でありながら、独特の音を求めるレコーディングエンジニアやプロデューサーに根強く支持されているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Danelectroってどんな時に選ばれるブランドなんですか?" },
            { who: "sensei", text: "Fender/Gibsonの「正統派」路線とは全く異なる、「変わり種・個性派」ギターというジャンルの代表格だ。実験的なレコーディングで「もう一味違う音」が欲しい時の選択肢として扱われることが多いよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "「リップスティックピックアップ」って名前、本当に口紅の容器から来てるんですか?" },
            { who: "sensei", text: "そうなんだ。実際に口紅の金属チューブ容器を転用して作られたという逸話に由来していて、コスト削減の工夫がそのまま製品の個性・伝説になった珍しい例なんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Danelectroのピックアップの通称は?", choices: ["リップスティックピックアップ", "ホースシューピックアップ", "モンキーグリップ", "アイアンコブラ"], answer: 0, explain: "口紅の金属容器を転用して作られたとされることに由来する。" },
        { q: "Danelectroが供給していた百貨店ブランドは?", choices: ["Sears(Silvertone)", "JCPenney", "Macy's", "Target"], answer: 0, explain: "Sears百貨店のプライベートブランドSilvertone向けにOEM供給していた。" },
        { q: "Danelectroのボディに使われた特徴的な素材は?", choices: ["マソナイト(木質繊維板)", "純チタン", "カーボンファイバー", "アルミ削り出し"], answer: 0, explain: "当時としては異例の低コスト素材マソナイトを採用していた。" },
        { q: "Danelectroの特徴的なベースモデル名は?", choices: ["Longhorn", "StingRay", "Thumb Bass", "Precision"], answer: 0, explain: "牛の角のような形状の「Longhorn」ベースが知られる。" },
        { q: "Danelectroが業界内で占めるポジションは?", choices: ["正統派とは異なる個性派・変わり種ギター", "最高級カスタムショップ専業", "メタル専業ブランド", "アコースティック専業ブランド"], answer: 0, explain: "低コスト構造から生まれる独特の音で、個性派ギターの代表格とされる。" },
      ],
    },
    {
      id: "suhr",
      order: 14,
      title: "Suhr",
      category: "エレキギター",
      hook: "Fenderのカスタムショップの職人が独立し、精密さで新しい「究極」を作った話。",
      image: "suhr_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Suhrってどういう成り立ちのブランドなんですか?" },
            { who: "sensei", text: "1997年、Fender Custom ShopのマスタービルダーだったJohn Suhrが独立して設立したんだ。ブティック(少量高品質生産)ギターブランドの代表格として、精密な製造技術を武器に急成長したんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Suhrの特徴って何なんですか?" },
            { who: "sensei", text: "Fender/PRS系の伝統的な設計をベースにしながら、フレットの擦り合わせ精度やネックの品質管理など「工作精度」そのものを競うレベルまで突き詰めているんだ。ピックアップも自社開発・製造していて、素材から一貫した音作りを行っているよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Modern</strong>(30〜50万円台) — 汎用性の高いモダンなスーパーストラト型。",
            "<strong>Classic</strong>(30〜50万円台) — Stratocaster的な伝統デザイン。",
            "<strong>Guthrie Govanシグネチャー</strong> — テクニカル系ギタリストとの協業モデル。",
            "自社製ピックアップ(SSV、SSH+等)の評価も高い。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "SuhrってPRSと似たポジションなんですか?" },
            { who: "sensei", text: "似ているけど、PRSよりさらに少量生産・受注生産に近い体制を維持していて、価格帯もさらに上位に位置することが多いんだ。セッションミュージシャン・プロツアーミュージシャンからの支持が特に厚いよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Suhrと同じジャンルのブランドって他にもあるんですか?" },
            { who: "sensei", text: "Tom Anderson、Fodera(ベース)などと並ぶ「ブティックビルダー」市場の代表格だ。量産ブランドとは異なる、少量生産ならではの精密さで評価されているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "創業者は今も現場に関わってるんですか?" },
            { who: "sensei", text: "そう、John Suhr自身が現在も製品開発・回路設計に深く関わっていて、「職人の名前がそのままブランド名」という、ブティックギター文化を象徴する成り立ちを持っているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Suhr創業者John Suhrの前職は?", choices: ["Fender Custom Shopのマスタービルダー", "Gibsonの経営者", "レコード会社のプロデューサー", "ドラム職人"], answer: 0, explain: "Fender Custom Shop出身の技術者が1997年に独立して設立した。" },
        { q: "Suhrが力を入れているとされるのは?", choices: ["工作精度の高さ", "世界最安値での量産", "電子ドラムとの統合", "アコースティック専業化"], answer: 0, explain: "フレットやネックの精度など工作精度そのものを追求している。" },
        { q: "Suhrのシグネチャーアーティストとして知られるのは?", choices: ["Guthrie Govan", "Ringo Starr", "Les Paul", "Carlos Santana"], answer: 0, explain: "テクニカル系ギタリストGuthrie Govanとのモデルで知られる。" },
        { q: "Suhrのようなブランドは一般に何と呼ばれるか?", choices: ["ブティックビルダー", "量産専業メーカー", "OEM専業メーカー", "レンタル専業ブランド"], answer: 0, explain: "少量高品質生産を行うブティックビルダーの代表格とされる。" },
        { q: "Suhrと同様にブティックビルダーとして挙げられるベースブランドは?", choices: ["Fodera", "Squier", "Epiphone", "LTD"], answer: 0, explain: "Foderaもハイエンドのブティックベースビルダーとして知られる。" },
      ],
    },
    {
      id: "gl",
      order: 15,
      title: "G&L",
      category: "エレキギター",
      hook: "Fenderを作った男が、生涯最後にたどり着いた「完成形」を注ぎ込んだ、あまり知られていない会社の話。",
      image: "gl_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "G&Lって聞いたことないブランドなんですけど、どんな会社なんですか?" },
            { who: "sensei", text: "1979年、Leo Fender本人と、初期Fenderの盟友George Fullertonによって設立されたんだ。社名G&Lは「George & Leo」に由来しているよ。FenderとMusic Manに続く、Leo Fenderにとって生涯3社目のギターブランドになったんだ。" },
            { who: "mina", text: "Leo Fenderってここでも設計に関わってたんですか?" },
            { who: "sensei", text: "そう、1991年に亡くなるまで、このG&Lで現役の設計者として製品開発に携わり続けたんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "G&Lの音ってFenderと何が違うんですか?" },
            { who: "sensei", text: "初代Fenderの設計思想を土台にしつつ、独自開発のピックアップ「マグネットレゾネーター」や、より精密なサドル設計のブリッジなど、Leo Fenderが生涯かけて改良を続けた技術が惜しみなく投入されているんだ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Legacy</strong>(20〜30万円台) — Stratocaster的デザイン。",
            "<strong>ASAT</strong>(20〜30万円台) — Telecaster的デザイン。",
            "<strong>L-2000(ベース)</strong> — 2基のハムバッカー的構造を持つ独自設計、シリーズ/パラレル配線(ピックアップ2つの結線方式を切り替えて音色を変える仕組み)切替可能。",
            "USA製が基本で廉価ラインは持たない。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "G&LってFenderほど有名じゃないですよね?" },
            { who: "sensei", text: "そうだね、Fenderほどの知名度・売上規模は持たないけど、「Leo Fender本人による設計の集大成」という物語性から、コアなギターファン・コレクターの間で高く評価されているんだ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "G&Lって業界的にはどう見られてるんですか?" },
            { who: "sensei", text: "一般的な知名度ではFenderに及ばないものの、設計の完成度という観点から「知る人ぞ知る」ブランドとして語られることが多いんだ。Fenderの伝統的設計を愛しつつ、より現代的な精度・機能を求める層に支持されているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Leo Fenderって、Fenderを離れた後もずっとギター作ってたんですか?" },
            { who: "sensei", text: "そう、自身の最初の会社Fenderを去った後も、Music Man、G&Lと生涯にわたりギター設計に携わり続けたんだ。G&Lはその「最終到達点」としてファンの間で特別視されているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "G&Lという社名の由来は?", choices: ["George & Leo(創業者2人の名前)", "Guitar & Lutherie", "地名の頭文字", "特に意味のない造語"], answer: 0, explain: "Leo FenderとGeorge Fullertonの名前に由来する。" },
        { q: "G&Lは創業者Leo Fenderにとって何社目のギター会社か?", choices: ["3社目(Fender・Music Manに続く)", "1社目", "2社目", "5社目"], answer: 0, explain: "Fender、Music Manに続く、生涯3社目のブランドだった。" },
        { q: "Leo FenderがG&Lに携わった期間は?", choices: ["1991年に亡くなるまで現役で設計に携わった", "設立後すぐに引退した", "資金提供のみで設計には関与しなかった", "設立直後に他界した"], answer: 0, explain: "1991年に亡くなるまで現役の設計者として関わり続けた。" },
        { q: "G&Lの独自開発ピックアップの名称は?", choices: ["マグネットレゾネーター", "ホースシューピックアップ", "リップスティックピックアップ", "アクティブMEC"], answer: 0, explain: "独自開発の「マグネットレゾネーター」ピックアップが搭載されている。" },
        { q: "G&Lが評価されている点は?", choices: ["Leo Fender設計の集大成としての完成度", "世界最大の販売台数", "電子ドラムとの統合機能", "アコースティック専業としての評価"], answer: 0, explain: "Leo Fender本人による設計の集大成という物語性が評価されている。" },
      ],
    },
    {
      id: "music_man",
      order: 16,
      title: "Music Man (Ernie Ball Music Man)",
      category: "エレキベース",
      hook: "Fenderを去った技術者たちが興した会社を、弦メーカーが買収してベースの歴史を変えた話。",
      image: "music_man_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Music Manってどういう経緯でできた会社なんですか?" },
            { who: "sensei", text: "1972年、Fenderの元従業員(Forrest White、Tom Walkerら)によって設立されたんだ。Leo Fender本人も設立に関与していたとされていて、後年G&Lへと移る前の重要な足跡になっているんだよ。" },
            { who: "mina", text: "今の社名、なんかErnie Ballって付いてますよね?" },
            { who: "sensei", text: "そう、1984年、弦メーカーのErnie Ball社が買収して、現在の社名「Ernie Ball Music Man」になったんだ。弦メーカーが楽器メーカーそのものを傘下に収めるという珍しい統合の例なんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "StingRayベースって何がそんなに画期的だったんですか?" },
            { who: "sensei", text: "1976年発売のStingRayベースは、量産ベースとして初めて「オンボード・アクティブプリアンプ/EQ」を搭載したモデルとされていて、パンチが効いて前に出る、いわゆる「スラップベース」に理想的な音を確立したんだ。" },
            { who: "mina", text: "音の個性はどこから来るんですか?" },
            { who: "sensei", text: "ハムバッカー1基のピックアップとアクティブ回路の組み合わせが生む、太さと抜けの両立が最大の個性なんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/musicman_stingray.jpg",
          imageCredit: '写真: Serguei Trouchelle / <a href="https://commons.wikimedia.org/wiki/File:AX_Music_Man_Bongo_5_Head_Front.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 3.0)',
          paragraphs: [
            "<strong>StingRay</strong>(20〜30万円台) — 1976年発売、定番ベース。3バンドアクティブEQ。",
            "<strong>StingRay5</strong>(20〜30万円台) — 5弦版。",
            "<strong>Bongo</strong>(20〜30万円台) — 2003年発売、近年の上位モデル、より現代的なボディ形状。",
            "<strong>JPシリーズ</strong> — John Petrucciシグネチャーギター。7弦モデルも展開。",
            "<strong>Steve Morseシグネチャーモデル</strong> — テクニカル系ギタリストとの協業モデル。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Ernie Ball傘下になって、何か変わったんですか?" },
            { who: "sensei", text: "弦メーカーであるErnie Ball社の傘下に入ったことで、自社製造・自社流通を強みとする体制を築いているんだ。米国内工場での一貫生産にこだわる数少ないブランドの一つだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Music Manって業界的にどういう位置づけなんですか?" },
            { who: "sensei", text: "アクティブベースの分野ではWarwick等と並び称される存在だ。ギターにおいてはPRS同様、Fender/Gibsonに次ぐハイエンド市場のプレイヤーとして扱われることが多いよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "StingRayの有名な愛用者っているんですか?" },
            { who: "sensei", text: "Red Hot Chili PeppersのFlea(ベーシスト)が長年愛用してきたことでも知られていて、ファンクロック系のベースサウンドの基準の一つになっているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Music Manを1984年に買収した企業は?", choices: ["Ernie Ball(弦メーカー)", "Fender", "Gibson", "Yamaha"], answer: 0, explain: "弦メーカーのErnie Ball社が買収し、現社名になった。" },
        { q: "StingRayベースが量産ベースとして初めて搭載したとされるものは?", choices: ["オンボード・アクティブプリアンプ", "MIDI出力端子", "フレットレス指板", "ワイヤレス送信機"], answer: 0, explain: "電池駆動のアクティブEQ回路を搭載した先駆的なモデルとされる。" },
        { q: "Music Manの設立に関与したとされる人物は?", choices: ["Leo Fender", "Les Paul", "Ted McCarty", "Orville Gibson"], answer: 0, explain: "Fenderを離れたLeo Fender本人が設立に関与していたとされる。" },
        { q: "Music ManのJPシリーズのシグネチャーギタリストは?", choices: ["John Petrucci", "Steve Vai", "Carlos Santana", "Joe Satriani"], answer: 0, explain: "Dream TheaterのJohn Petrucciシグネチャーモデルとして知られる。" },
        { q: "StingRayベースの愛用者として知られるのは?", choices: ["Flea(Red Hot Chili Peppers)", "Paul McCartney", "Chris Squire", "Jack Bruce"], answer: 0, explain: "FleaはStingRayを長年愛用しファンクロックベースの基準を作った。" },
      ],
    },
    {
      id: "warwick",
      order: 17,
      title: "Warwick",
      category: "エレキベース",
      hook: "ギターメーカーの息子が「ベース専業」を選び、木材へのこだわりだけでドイツの名門になった話。",
      image: "warwick_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Warwickってどういう成り立ちのブランドなんですか?" },
            { who: "sensei", text: "1982年、ドイツでHans-Peter Wilfer(父Fred Wilferはギターブランド Framusの創業者)が設立したんだ。父の会社Framusは一度廃業していたけど、Hans-Peterは独立してベース専業のWarwickを興して、後年Framusブランドも買い戻して復活させたんだよ。" },
            { who: "mina", text: "生産体制はどうなってるんですか?" },
            { who: "sensei", text: "「Made in Germany」の高級ラインと、アジア圏工場で生産する廉価ラインRockbassの二段構えの生産体制を早くから確立しているんだ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Warwickの音って何が特徴なんですか?" },
            { who: "sensei", text: "Bubinga、Wenge、Ovangkolなどのエキゾチックウッドを積極採用していて、明るく倍音の多い「ザラッとした」個性的なトーンを追求しているんだ。自社開発のピックアップ/プリアンプブランドMECによる積極的なアクティブ回路設計も特徴だよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/warwick_bass.jpg",
          imageCredit: '写真: Simon Doggett / <a href="https://commons.wikimedia.org/wiki/File:Warwick_Thumb_5_Custom_White_-_backplate.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Thumb Bass</strong>(40万円台〜) — フラッグシップ。ネックスルー構造、Bubinga単板ネック。",
            "<strong>Streamer</strong> — ボルトオン仕様もある中位ライン。",
            "<strong>Corvette</strong> — 比較的コンパクトなボディ。",
            "<strong>Rockbass</strong>(3〜8万円台) — コリア・中国・インドネシア工場生産の廉価ライン。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "エキゾチックウッドにこだわるのって、経営的にはリスクもあるんですか?" },
            { who: "sensei", text: "高価な輸入木材への依存度が高いから、為替・産地の環境規制の影響を受けやすいビジネスモデルとされているんだ。近年は木材資源の持続可能性にも配慮した調達方針を打ち出しているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "WarwickってMusic Manと似たポジションなんですか?" },
            { who: "sensei", text: "同じアクティブベースの代表格だけど、Warwickはより「攻撃的で個性の強い」音作りで知られていて、メタル/ヘヴィ系のベーシスト(Kornの Fieldy等)からも支持を集めてきたんだ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Warwickってギターも作ってるんですか?" },
            { who: "sensei", text: "Hans-Peter Wilferは1995年に父の会社Framusブランドを買い戻して、ギター事業も並行して展開しているんだ。ベース専業からギターブランドも傘下に収めるという逆流的な展開をたどった稀有な例なんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Warwick創業者Hans-Peter Wilferの父が創業したブランドは?", choices: ["Framus", "Rickenbacker", "Ibanez", "PRS"], answer: 0, explain: "父Fred WilferはギターブランドFramusの創業者だった。" },
        { q: "Warwickが積極採用するアフリカ産の木材でないものは?", choices: ["Bubinga", "Wenge", "Ovangkol", "メイプル"], answer: 3, explain: "メイプル(楓)は北米産で、Warwickが特徴とするアフリカ産木材ではない。" },
        { q: "Warwickの自社ピックアップ/プリアンプブランドは?", choices: ["MEC", "EMG", "Bartolini", "Seymour Duncan"], answer: 0, explain: "MEC(Music Electronic Germany)が自社ブランドとして知られる。" },
        { q: "Warwickの廉価ラインの名称は?", choices: ["Rockbass", "SE", "Squier", "Epiphone"], answer: 0, explain: "Rockbassがアジア圏工場生産の廉価ラインとして知られる。" },
        { q: "Warwickのサウンドの傾向として語られるのは?", choices: ["無色透明でクリーン", "攻撃的で個性の強い音", "極端に柔らかい丸い音", "アコースティックのような響き"], answer: 1, explain: "エキゾチックウッドによる明るく倍音の多い個性的な音が特徴とされる。" },
      ],
    },
    {
      id: "sadowsky",
      order: 18,
      title: "Sadowsky",
      category: "エレキベース",
      hook: "スタジオの裏方リペアマンが作った1本のプリアンプ回路が、世界中のベーシストの「標準装備」になった話。",
      image: "sadowsky_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Sadowskyってどんな人が始めたブランドなんですか?" },
            { who: "sensei", text: "アメリカ・ニューヨークのリペア/カスタムビルダーRoger Sadowskyが1980年代に設立したんだ。数多くのトップセッション/ツアーベーシストの機材調整を手がけてきたリペアマンとしてのキャリアが土台になっているんだよ。" },
            { who: "mina", text: "今もニューヨークだけで作ってるんですか?" },
            { who: "sensei", text: "近年は日本の工場と提携して、より手頃な「Metroライン」を展開する一方、NYC本店では引き続き最高級のハンドメイドモデルを製作するという二段構えの体制を取っているんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Sadowskyの音の特徴って何なんですか?" },
            { who: "sensei", text: "Fender Jazz Bass的な伝統的設計をベースにしつつ、自社開発の「Sadowskyプリアンプ」による上質なローエンドとハイの伸びが特徴なんだ。このプリアンプ単体が他社製ベースへの後付けパーツとしても広く流通しているんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>NYCシリーズ</strong>(50万円台〜) — 最上位、ニューヨーク製。",
            "<strong>Metroシリーズ</strong>(20万円前後) — 日本製の手頃な価格帯。",
            "<strong>Sadowskyプリアンプ</strong> — オプションで他ブランドのベースに後付け改造することも可能。",
            "Marcus Millerが自身のシグネチャーモデルを持つ以前、長年Sadowsky製ベースを愛用していたことでも知られる。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Sadowskyってベース本体以外にもビジネスがあるんですか?" },
            { who: "sensei", text: "単体製品としてのベース販売だけでなく、「Sadowskyプリアンプ」というパーツ単体のビジネスが確立している点が特徴的なんだ。他ブランドのベースにこの回路を組み込むというカスタム需要も根強いんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Sadowskyって業界的にどんな立ち位置なんですか?" },
            { who: "sensei", text: "Fodera、Kenn Smithと並ぶニューヨーク発のハイエンドベースビルダーの一角だ。特にセッションミュージシャンからの信頼が厚くて、「縁の下の力持ち」的なブランドイメージを持っているよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Marcus MillerってSadowsky使ってたんですか?" },
            { who: "sensei", text: "そう、自身のシグネチャーベース(Fender)を持つ以前、長年Sadowsky製のJazz Bass系モデルをレコーディング/ライブで愛用していたことで知られているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Sadowsky創業者Roger Sadowskyの経歴は?", choices: ["トップベーシスト向けのリペア/カスタムビルダー", "レコード会社の経営者", "ドラム職人", "弦専業メーカーの技術者"], answer: 0, explain: "数多くのセッションベーシストの機材調整を手がけてきたリペアマン出身。" },
        { q: "Sadowskyの看板技術は?", choices: ["Sadowskyプリアンプ(アクティブEQ回路)", "フロイドローズ式ブリッジ", "同軸スピーカー", "フロイドローズトレモロ"], answer: 0, explain: "自社開発のプリアンプ回路が他社製ベースにも組み込まれるほど普及している。" },
        { q: "Sadowskyの手頃な価格帯のラインは?", choices: ["Metroシリーズ(日本製)", "NYCシリーズ", "Custom 24", "StingRay"], answer: 0, explain: "日本の工場と提携したMetroシリーズが手頃な価格帯を担う。" },
        { q: "Sadowskyを長年愛用していたベーシストとして知られるのは?", choices: ["Marcus Miller", "Flea", "Paul McCartney", "Chris Squire"], answer: 0, explain: "自身のシグネチャーベースを持つ以前、Sadowskyを愛用していた。" },
        { q: "Sadowskyと並ぶニューヨーク発のハイエンドベースビルダーは?", choices: ["Fodera", "Warwick", "Ibanez", "Yamaha"], answer: 0, explain: "Foderaも同じくニューヨーク発のハイエンドベースブランドとして知られる。" },
      ],
    },
    {
      id: "lakland",
      order: 19,
      title: "Lakland",
      category: "エレキベース",
      hook: "シカゴの新興ブランドが「ヴィンテージの気分」と「現代の信頼性」を両立させて名門の仲間入りをした話。",
      image: "lakland_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Laklandって比較的新しいブランドなんですか?" },
            { who: "sensei", text: "そう、1994年、アメリカ・シカゴでDan Lakinが設立したんだ。後発ブランドながら、著名セッションベーシストとのシグネチャーモデル展開(Duck Dunn、Joe Osborn等)で急速に信頼を獲得したんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Laklandの音の特徴って何なんですか?" },
            { who: "sensei", text: "Fender系のヴィンテージサウンドを踏襲しつつ、現代的な製造精度・パーツ品質でトラブルの少なさを実現しているんだ。パッシブ/アクティブ両対応モデルを併売していて、幅広い音作りに対応するよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>55-94 / 55-02</strong>(30万円台〜) — フラッグシップ、USA製。",
            "<strong>Duck Dunnモデル</strong>(30万円台〜) — Pベース系シグネチャー。",
            "<strong>Joe Osbornモデル</strong>(30万円台〜) — ジャズベース系シグネチャー。",
            "<strong>Skylineシリーズ</strong>(8〜15万円台) — 韓国製、特にコストパフォーマンスで評価が高い。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "後発ブランドなのに、どうやって価格帯を広げたんですか?" },
            { who: "sensei", text: "USカスタムショップの高級ラインと、韓国製Skylineの普及ラインを両輪にすることで、後発ブランドながら価格帯の幅を早期に確立したんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Laklandって業界的にどういう立ち位置なんですか?" },
            { who: "sensei", text: "Sadowsky同様「ヴィンテージ系の音を現代の信頼性で」という路線のブランドとして、セッション/ツアーミュージシャンから支持されているんだ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Duck Dunnモデルってどんな人が使うんですか?" },
            { who: "sensei", text: "Duck Dunn(Stax/Booker T. & the M.G.'sのベーシスト)のシグネチャーモデルは、ソウル/R&B系のヴィンテージPベースサウンドを求めるベーシストの定番になっているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Laklandの創業都市はどこか?", choices: ["シカゴ", "ニューヨーク", "ロサンゼルス", "ナッシュビル"], answer: 0, explain: "1994年、アメリカ・シカゴで設立された。" },
        { q: "Laklandの普及ラインの名称は?", choices: ["Skyline(韓国製)", "Metro", "Rockbass", "SE"], answer: 0, explain: "韓国製のSkylineシリーズが手頃な価格帯を担う。" },
        { q: "Laklandのシグネチャーモデルを持つベーシストは?", choices: ["Duck Dunn", "Flea", "Marcus Miller", "Chris Squire"], answer: 0, explain: "Stax/Booker T. & the M.G.'sのDuck Dunnのモデルが知られる。" },
        { q: "Laklandの音作りの方向性は?", choices: ["ヴィンテージサウンドと現代的信頼性の両立", "極端な色付けの追求", "電子音源への完全移行", "アコースティック専業化"], answer: 0, explain: "Fender系ヴィンテージサウンドを現代の製造精度で実現している。" },
        { q: "Laklandと似た路線のニューヨーク発ブランドは?", choices: ["Sadowsky", "Alembic", "Dingwall", "Status Graphite"], answer: 0, explain: "Sadowskyも同様にヴィンテージ系サウンドと現代的信頼性を両立させる路線。" },
      ],
    },
    {
      id: "fodera",
      order: 20,
      title: "Fodera",
      category: "エレキベース",
      hook: "「ベース界のロールスロイス」と呼ばれる、完全手作りの超高級ブランドの話。",
      image: "fodera_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Foderaって「ベース界のロールスロイス」って呼ばれてるって聞いたんですけど?" },
            { who: "sensei", text: "1983年、ニューヨークでVinnie FoderaとJoey Lauricellaが設立したんだ。完全受注のハンドメイド生産にこだわっていて、ベース業界でも屈指の高価格帯ブランドとして知られているよ。" },
            { who: "mina", text: "何か特別なコンセプトの楽器も作ってるんですか?" },
            { who: "sensei", text: "ベーシストAnthony Jacksonが提唱した「コントラバスギター」、通常の4弦ベースより広い音域を持つ6弦ベースのコンセプトは、Foderaとの協業によって初めて具現化されたとされているんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Foderaの音って何がそんなに特別なんですか?" },
            { who: "sensei", text: "極めて精密な木材選定・加工と、手作業による調整によって、量産品では出しにくい繊細なニュアンス表現力を実現しているんだ。スラップからフィンガーピッキングまで幅広い奏法に対応する懐の深さも特徴だよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Monarch</strong>(100万円前後〜) — 標準的なフラッグシップ。",
            "<strong>Emperor</strong>(100万円超) — 上位、より豪華な装飾。",
            "<strong>Victor Wootenシグネチャーモデル</strong> — 著名ベーシストとの協業モデル。",
            "<strong>Anthony Jackson コントラバスギター</strong>(6弦) — B-F弦の拡張音域。",
            "1本ずつ価格が異なる完全受注生産が基本。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Foderaって1本いくらくらいするんですか?" },
            { who: "sensei", text: "1本あたりの価格は数百万円規模に達することもあって、完全受注生産のため納期も長期化しやすいんだ。「ベース界のロールスロイス」と称されるほどの価格帯・希少性を保っているよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Foderaって業界的にはどういう立ち位置なんですか?" },
            { who: "sensei", text: "Ken Smith、Sadowskyと並ぶニューヨーク発ハイエンドベースの頂点として扱われるんだ。特にフュージョン/ジャズ系の超絶技巧ベーシストからの支持が厚いよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Foderaのシグネチャーモデルって誰が持ってるんですか?" },
            { who: "sensei", text: "Victor Wooten(ベーシスト)のシグネチャーモデルは、Foderaのハイエンドブランドイメージを象徴する存在として広く知られているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Foderaの生産スタイルの特徴は?", choices: ["完全受注のハンドメイド生産", "完全自動化の大量生産", "海外委託生産のみ", "電子部品のみの製造"], answer: 0, explain: "1本ずつ手作業で仕上げる完全受注生産にこだわっている。" },
        { q: "Anthony Jacksonが提唱し、Foderaが具現化したコンセプトは?", choices: ["コントラバスギター(6弦ベース)", "同軸スピーカー", "フロイドローズブリッジ", "V字形ボディ"], answer: 0, explain: "通常より広い音域を持つ6弦ベースのコンセプトを協業で実現した。" },
        { q: "Foderaのシグネチャーモデルを持つベーシストは?", choices: ["Victor Wooten", "Flea", "Paul McCartney", "Duck Dunn"], answer: 0, explain: "Victor Wootenのシグネチャーモデルがブランドイメージを象徴している。" },
        { q: "Foderaが業界内でどう称されることがあるか?", choices: ["「ベース界のロールスロイス」", "「ベース界のスクイア」", "「最安値ベース」", "「電子ベースの元祖」"], answer: 0, explain: "極めて高価格・高品質なことから称されることがある。" },
        { q: "Foderaの創業都市はどこか?", choices: ["ニューヨーク", "ロサンゼルス", "シカゴ", "ナッシュビル"], answer: 0, explain: "1983年、ニューヨークで設立された。" },
      ],
    },
    {
      id: "spector",
      order: 21,
      title: "Spector",
      category: "エレキベース",
      hook: "翼のような曲線ボディが、見た目だけでなく「弾きやすさ」そのものを再発明した話。",
      image: "spector_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Spectorのあの翼みたいなボディ、いつからあるんですか?" },
            { who: "sensei", text: "1976年、ニューヨークでStuart Spectorが設立したんだ。看板モデル「NSシリーズ」(New Sound)は、人間工学的な曲線ボディを持つ独特のデザインで、発表当初から大きな話題を呼んだんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "あの独特な形って、見た目だけの話じゃないんですか?" },
            { who: "sensei", text: "多くのモデルがネックスルー構造を標準採用していて、パンチの効いた前に出る音を特徴とするんだ。ボディの「翼」のような非対称カーブは、座奏・立奏どちらでも構えやすい人間工学的な工夫でもあるんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/spector_bass.jpg",
          imageCredit: '写真: Toglenn / <a href="https://commons.wikimedia.org/wiki/File:Spector_Guitars_2020_by_Glenn_Francis.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>NS-2 / NS-4</strong>(20万円台前後) — 定番、ネックスルー構造。",
            "<strong>NS-5</strong>(20万円台前後) — 5弦版。",
            "<strong>Performerシリーズ</strong>(5〜8万円台) — 海外生産の廉価ライン。独特のボディ形状を手頃な価格で体験できる。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Spectorって経営的には安定してたんですか?" },
            { who: "sensei", text: "設立以来複数回オーナーが変わっているんだけど、独特なボディデザインというブランド資産により、常に一定のファン層を維持し続けてきたんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Spectorって業界的にどういう立ち位置なんですか?" },
            { who: "sensei", text: "Warwick同様「見た目も音も個性的」なベースの代表格だ。ロック/メタル系ベーシストからの支持が厚いよ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "あの曲線デザイン、他のブランドにも影響与えたりしたんですか?" },
            { who: "sensei", text: "NSシリーズの曲線ボディデザインは、後にヘッドレスベースなど他社の人間工学的設計にも影響を与えたとされているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Spectorの看板モデルシリーズ名は?", choices: ["NSシリーズ(New Sound)", "Starclassic", "StingRay", "Thumb Bass"], answer: 0, explain: "人間工学的な曲線ボディを持つNSシリーズが看板モデル。" },
        { q: "Spectorのボディ構造の標準仕様は?", choices: ["ネックスルー構造", "完全分解式ボディ", "アコースティック構造", "カーボン一体成型のみ"], answer: 0, explain: "多くのモデルがネックスルー構造を採用している。" },
        { q: "Spectorの創業年はいつか?", choices: ["1976年", "1902年", "1985年", "2007年"], answer: 0, explain: "1976年、ニューヨークで設立された。" },
        { q: "Spectorのボディデザインの特徴は?", choices: ["翼のような非対称の曲線", "完全な長方形", "V字型", "円形"], answer: 0, explain: "翼のような曲線ボディが人間工学的な弾きやすさを実現している。" },
        { q: "Spectorが支持を集めている音楽ジャンルは?", choices: ["ロック/メタル系", "クラシック専業", "雅楽", "アンビエント専業"], answer: 0, explain: "パンチの効いた音でロック/メタル系ベーシストに支持されている。" },
      ],
    },
    {
      id: "alembic",
      order: 22,
      title: "Alembic",
      category: "エレキベース",
      hook: "グレイトフル・デッドと組んで、「ベースにアクティブ回路を積む」という発想そのものを発明した会社の話。",
      image: "alembic_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Alembicってどういう成り立ちの会社なんですか?" },
            { who: "sensei", text: "1969年、アメリカ・サンフランシスコで設立されたんだ。ロックバンドGrateful Deadの音響機材制作チームと近い関係にあって、ベーシストPhil Leshとの協業を通じて、当時まだ珍しかった「ベース本体に電池駆動のアクティブ回路を搭載する」という設計を早くから実用化したんだよ。" },
          ],
        },
        {
          heading: "音の特徴",
          dialogue: [
            { who: "mina", text: "Alembicの音って当時どう評価されてたんですか?" },
            { who: "sensei", text: "エキゾチックウッドの複雑な積層ボディと、独自のアクティブ電子回路により、非常に情報量の多い、広いダイナミックレンジを持つサウンドが特徴なんだ。当時としては「ハイファイすぎる」とすら評された先進性を持っていたんだよ。" },
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Series I / Series II</strong>(100万円クラス) — 最上位ライン。複雑な積層ボディとアクティブ回路。",
            "<strong>Epicシリーズ</strong>(30万円台〜) — 比較的手頃な価格帯でAlembicサウンドを体験できる入門格。",
            "全モデルとも受注生産が基本で納期は長め。",
          ],
        },
        {
          heading: "お金の話",
          dialogue: [
            { who: "mina", text: "Alembicってビジネス的にはどういう位置づけなんですか?" },
            { who: "sensei", text: "「ブティックベース」というジャンルそのものの生みの親とされていて、後発のFodera、Ken Smithらのハイエンドベースビルダーの先駆的存在として位置づけられているんだよ。" },
          ],
        },
        {
          heading: "業界内でのポジション",
          dialogue: [
            { who: "mina", text: "Alembicって今のアクティブベースとどう繋がってるんですか?" },
            { who: "sensei", text: "「アクティブベースの元祖」として、現在のあらゆるアクティブベースメーカー(Music Man、Warwick等)の源流に位置づけられる歴史的な存在なんだ。" },
          ],
        },
        {
          heading: "豆知識",
          dialogue: [
            { who: "mina", text: "Phil Leshってどれくらい開発に関わってたんですか?" },
            { who: "sensei", text: "自身の要望を反映させる形でAlembicの黎明期の開発に深く関与していて、「顧客兼共同開発者」という関係性は楽器業界でも珍しい成り立ちとされているんだよ。" },
          ],
        },
      ],
      quiz: [
        { q: "Alembicが早くから実用化した設計は?", choices: ["ベース本体へのアクティブ回路搭載", "フレットレス指板", "同軸スピーカー", "フロイドローズブリッジ"], answer: 0, explain: "電池駆動のアクティブ回路を早期に実用化したパイオニアとされる。" },
        { q: "Alembicの黎明期に深く関わったミュージシャンは?", choices: ["Phil Lesh(Grateful Dead)", "Paul McCartney", "Flea", "Chris Squire"], answer: 0, explain: "Grateful DeadのPhil Leshとの協業が開発の土台になった。" },
        { q: "Alembicが位置づけられている歴史的役割は?", choices: ["「ブティックベース」ジャンルの生みの親", "廉価版ベースの元祖", "電子ドラムの発明者", "シンバル合金の発明者"], answer: 0, explain: "後発のハイエンドベースビルダーの先駆的存在とされる。" },
        { q: "Alembicの創業都市はどこか?", choices: ["サンフランシスコ", "ニューヨーク", "シカゴ", "ロンドン"], answer: 0, explain: "1969年、サンフランシスコで設立された。" },
        { q: "Alembicのボディに使われる特徴的な構造は?", choices: ["エキゾチックウッドの複雑な積層構造", "マソナイト単板", "完全プラスチック製", "カーボン単一素材"], answer: 0, explain: "複雑な積層(ラミネート)構造による情報量の多いサウンドが特徴。" },
      ],
    },
    {
      id: "dingwall",
      order: 23,
      title: "Dingwall",
      category: "エレキベース",
      hook: "フレットをまっすぐ並べる「当たり前」を疑ったカナダ人が、低音弦の音程問題を解決した話。",
      image: "dingwall_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "カナダでSheldon Dingwallが設立。「ファンフレット(扇状フレット)」という、フレットを弦ごとに異なる角度で斜めに配置する設計を実用化したことで知られる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "通常のギター/ベースは全弦で同じスケール長(弦長)だが、実際には太い低音弦ほど長いスケールの方が音程・張力バランスが安定するとされる。ファンフレット設計はこの物理特性に対応し、特に5弦・6弦以上の拡張弦ベースで低音弦の音程の安定性・タイトさを高めている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>NGシリーズ</strong>(30万円台〜) — カナダ製の上位ライン。",
            "<strong>Combustionシリーズ</strong>(10万円台) — インドネシア製の比較的手頃な価格帯。",
            "<strong>Zシリーズ</strong> — より現代的な形状。",
            "5弦・6弦モデルが特に高く評価されており、低音弦のファンフレット角度が特に大きく設計されている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "プログレッシブ・メタル/ジェント(低チューニングを多用するジャンル)の流行とともに、拡張弦ベース市場でのDingwallの評価が急速に高まった経緯がある。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "ファンフレット設計の分野ではほぼ独占的な知名度を持ち、低音弦の安定性を求める現代的なベーシストの選択肢として確立している。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "ファンフレット設計はギター(Novax、Strandberg等)にも波及しており、Dingwallの成功が拡張弦楽器全体の設計思想に影響を与えたと見る向きもある。",
          ],
        },
      ],
      quiz: [
        { q: "Dingwallが実用化した設計は?", choices: ["ファンフレット(扇状フレット)", "ホースシューピックアップ", "同軸スピーカー", "リップスティックピックアップ"], answer: 0, explain: "弦ごとに角度を変えて配置するファンフレット設計で知られる。" },
        { q: "ファンフレット設計が特に効果を発揮するのは?", choices: ["5弦・6弦などの拡張弦ベース", "4弦の標準ベースのみ", "アコースティックギターのみ", "ドラムのチューニング"], answer: 0, explain: "低音弦の音程・張力バランスの安定性を高める設計として評価されている。" },
        { q: "Dingwallの創業国はどこか?", choices: ["カナダ", "アメリカ", "ドイツ", "日本"], answer: 0, explain: "カナダのSheldon Dingwallによって設立された。" },
        { q: "Dingwallが評価を高めた音楽ジャンルの流行は?", choices: ["プログレッシブメタル/ジェント", "クラシック", "ジャズのみ", "民族音楽"], answer: 0, explain: "低チューニングを多用するジャンルの流行とともに評価が高まった。" },
        { q: "ファンフレット設計が波及したとされる楽器は?", choices: ["ギター(Novax、Strandberg等)", "ピアノ", "バイオリン", "トランペット"], answer: 0, explain: "ギター業界にも同様の設計思想が波及したとされる。" },
      ],
    },
    {
      id: "yamaha_bass",
      order: 24,
      title: "Yamaha (ベース)",
      category: "エレキベース",
      hook: "楽器からバイクまで作る巨大メーカーが、地味に「一番壊れない実用ベース」の座を守り続けている話。",
      image: "yamaha_bass_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "日本の総合楽器メーカーYamahaが1977年に発表した「BBシリーズ(Broad Bass)」が、ベース部門の看板ラインとして長年展開されている。楽器以外にもオートバイ・音響機器・ピアノなど幅広い事業を持つ巨大コングロマリットの一部門であることが特徴。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "派手な個性よりも、安定した出力・扱いやすいネック・耐久性を重視した「実用ベース」としての完成度が評価されている。世界中のセッションミュージシャン・教育現場で広く使われている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>BBシリーズ(BB434/BB735等)</strong>(3〜15万円台) — 1977年発売の定番。幅広い価格帯を展開。",
            "<strong>TRBシリーズ</strong> — より上位、5弦・6弦の多弦モデルも充実。",
            "長年基本設計を維持しながら細部を継続的に改良するロングセラー戦略が特徴。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "総合楽器メーカーとしての量産技術・品質管理体制を背景に、価格に対する品質の安定性で高い評価を得ている。派手なブランディングより堅実さで勝負するタイプの製品ラインといえる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "PeaveyなどとともにMusic Man、Warwickのような「個性派ブティック系」とは対照的な、「実用・信頼性重視」路線の代表格として位置づけられる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "BBシリーズは1977年の発売から現在まで基本コンセプトを維持しながら改良され続けている、息の長いロングセラーモデルである。",
          ],
        },
      ],
      quiz: [
        { q: "Yamahaのベース部門の看板シリーズは?", choices: ["BBシリーズ(Broad Bass)", "StingRay", "Thumb Bass", "NSシリーズ"], answer: 0, explain: "1977年発表のBBシリーズが長年の看板ラインになっている。" },
        { q: "Yamahaのベースが評価されている点は?", choices: ["安定した実用性・耐久性", "極端な個性の強さ", "最高価格帯であること", "電子ドラムとの統合"], answer: 0, explain: "派手さより実用性・耐久性を重視した設計が評価されている。" },
        { q: "Yamahaという企業の事業範囲として正しいのは?", choices: ["楽器以外にオートバイなども手がける総合メーカー", "楽器専業の小規模工房", "ドラム専業メーカー", "シンバル専業メーカー"], answer: 0, explain: "楽器・オートバイ・音響機器など幅広い事業を持つ企業である。" },
        { q: "Yamahaのベースの上位シリーズは?", choices: ["TRBシリーズ", "Skylineシリーズ", "Rockbass", "Metroシリーズ"], answer: 0, explain: "TRBシリーズがBBシリーズより上位のラインとして展開されている。" },
        { q: "Yamahaと似た「実用・信頼性重視」路線とされるブランドは?", choices: ["Peavey", "Alembic", "Fodera", "Status Graphite"], answer: 0, explain: "Peaveyも同様に堅実・実用重視の路線で知られるブランド。" },
      ],
    },
    {
      id: "mtd",
      order: 25,
      title: "MTD (Michael Tobias Design)",
      category: "エレキベース",
      hook: "一度Gibsonに売った自分のブランド名を失い、それでもゼロから再出発した職人の話。",
      image: "mtd_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "Michael Tobiasは1970年代後半から自身の名を冠した「Tobias Basses」を展開していたが、1990年代にブランドをGibsonに売却。Gibson傘下でのTobiasブランドは後に事業整理され姿を消した。",
            "その後Michael Tobias本人は新たに「MTD(Michael Tobias Design)」を設立し、ゼロからブランドを再構築した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "人間工学に基づいた独特のボディ形状・薄いネックシェイプにより、弾き心地の良さに定評がある。ハイエンドの米国製カスタムショップモデルと、より手頃な韓国製Kingstonラインを併売している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>535</strong>(40万円台〜) — 5弦フラッグシップ、USA製。",
            "<strong>434</strong>(40万円台〜) — 4弦版。",
            "<strong>Kingstonシリーズ</strong>(10万円台) — 韓国製の廉価ライン。本家の人間工学的設計を手頃な価格で体験できる。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "自身のブランドを一度手放し、再び個人名義で立ち上げ直すという経緯は、楽器業界における「ブランドと創業者個人の分離・再統合」の典型例として語られる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Ken Smith、Foderaと並ぶ、拡張弦(5弦以上)ベース設計のパイオニア世代の一人として位置づけられている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "旧ブランド名Tobiasは、Gibson傘下時代の製品も含め今も中古市場でコレクターズアイテムとして流通している。",
          ],
        },
      ],
      quiz: [
        { q: "MTD創業者Michael Tobiasのかつてのブランド名は?", choices: ["Tobias Basses", "Alembic", "Spector", "Warwick"], answer: 0, explain: "1990年代にGibsonへ売却した旧ブランドの名前がTobias Bassesだった。" },
        { q: "旧Tobiasブランドの現在の状況は?", choices: ["Gibson傘下で事業整理され姿を消した", "今もGibsonの主力ブランドである", "独立資本として存続している", "Fenderが買収した"], answer: 0, explain: "Gibson傘下でのブランド展開は後に整理され、現存していない。" },
        { q: "MTDの廉価ラインの名称は?", choices: ["Kingstonシリーズ", "Skylineシリーズ", "Rockbass", "Metroシリーズ"], answer: 0, explain: "韓国製のKingstonシリーズが手頃な価格帯を担う。" },
        { q: "MTDが評価されているのは?", choices: ["人間工学に基づいた弾き心地の良さ", "極端な低価格", "電子ドラムとの統合", "アコースティック専業"], answer: 0, explain: "独特なボディ形状・ネックシェイプによる弾き心地の良さが評価されている。" },
        { q: "MTDと並ぶ拡張弦ベース設計のパイオニアとされるのは?", choices: ["Ken Smith", "Squier", "Epiphone", "Danelectro"], answer: 0, explain: "Ken Smith、Foderaと並ぶパイオニア世代として位置づけられる。" },
      ],
    },
    {
      id: "ken_smith",
      order: 26,
      title: "Ken Smith",
      category: "エレキベース",
      hook: "「5弦ベースなんて売れない」と言われた時代に、拡張弦ベースの土台を作った職人の話。",
      image: "ken_smith_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカでKen Smithが1970年代末〜80年代に設立。当時まだ一般的ではなかった5弦・6弦ベース(低音側にさらに1〜2弦を追加した拡張弦モデル)の設計を早期から手がけたパイオニアの一人とされる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "太い低音弦を含めても音のバランスが崩れないよう、ボディ・ネック設計から見直した緻密な設計が特徴。BSRシリーズは重厚かつ輪郭のはっきりした低域で知られる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>BSRシリーズ</strong>(50万円前後〜) — USA製ハンドメイド。5弦・6弦モデルが充実。",
            "<strong>Burner</strong>(20万円台) — 海外生産の比較的手頃なライン。",
            "低音弦の音圧を損なわないボディバランス設計が評価されている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "ハンドメイド中心の小規模生産を貫いており、Fodera同様「知る人ぞ知る」ハイエンド市場での評価が高い。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Fodera、MTDと並ぶ、拡張弦ベースというジャンルそのものを切り開いたパイオニア世代の代表格。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "5弦ベースが今日ほど一般的でなかった時代から一貫して拡張弦モデルに注力してきた実績から、多弦ベース愛好家の間では特に尊敬を集める存在になっている。",
          ],
        },
      ],
      quiz: [
        { q: "Ken Smithが早期から手がけたベースの種類は?", choices: ["5弦・6弦の拡張弦ベース", "フレットレス4弦のみ", "アコースティックベース", "電子ドラム"], answer: 0, explain: "当時珍しかった拡張弦ベースの設計を早期から手がけたパイオニア。" },
        { q: "Ken Smithの代表シリーズは?", choices: ["BSRシリーズ", "NSシリーズ", "StingRay", "Thumb Bass"], answer: 0, explain: "BSRシリーズが5弦・6弦モデルの充実したラインとして知られる。" },
        { q: "Ken Smithの生産スタイルは?", choices: ["ハンドメイド中心の小規模生産", "完全自動化の大量生産", "海外委託のみ", "電子部品専業"], answer: 0, explain: "小規模なハンドメイド生産を貫いている。" },
        { q: "Ken Smithと並ぶ拡張弦ベースのパイオニアは?", choices: ["Fodera", "Squier", "Epiphone", "Danelectro"], answer: 0, explain: "Fodera、MTDと並ぶパイオニア世代として位置づけられる。" },
        { q: "Ken Smithが尊敬を集める理由として正しいのは?", choices: ["5弦ベースが一般的でない時代から注力してきた実績", "世界最安値の実現", "電子ドラムの開発", "シンバル合金の発明"], answer: 0, explain: "拡張弦ベースが一般的でなかった時代からの一貫した注力が評価されている。" },
      ],
    },
    {
      id: "status_graphite",
      order: 27,
      title: "Status Graphite",
      category: "エレキベース",
      hook: "木ではなく「炭素繊維」でベースを作るという発想を、真っ先に実用化したイギリスの会社の話。",
      image: "status_graphite_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "イギリスでRob Greenらによって設立。木材ではなくグラファイト(黒鉛/炭素繊維)を使ったネック・ボディの製造をいち早く実用化したブランドとして知られる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "グラファイト素材は湿度・温度による反り(ネックの変形)がほとんど無く、トラスロッド(反り調整用の金属棒)を必要としないモデルも存在する。木材特有の個体差が少なく、非常に均一で安定したサウンド・演奏性を実現している。",
            "ヘッドレス(ペグ/ヘッドが無い)設計のモデルも多く手がけ、軽量化と省スペース化を両立している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Status Streamlineシリーズ</strong>(30万円前後〜) — ヘッドレス、グラファイトネック。",
            "<strong>Kingbassシリーズ</strong>(30万円前後〜) — 木材ボディ+グラファイトネックのハイブリッド構成。",
            "全モデルとも英国内でのハンドメイド生産が基本。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "木材資源に依存しないという特性上、木材価格の高騰・伐採規制などの影響を受けにくいビジネスモデルとされる。ニッチながら根強いファン層を持つ。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "同じくグラファイト素材を扱うアメリカのModulusと並ぶ、非木材ベース設計の代表格。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "グラファイトネックは理論上、木材ネックよりも遥かに長期間形状が安定するとされ、過酷な気候変化のあるツアー環境でも安心して使えるという実用上の利点がある。",
          ],
        },
      ],
      quiz: [
        { q: "Status Graphiteがネックに使う素材は?", choices: ["グラファイト(炭素繊維)", "マソナイト", "純アルミニウム", "竹"], answer: 0, explain: "木材ではなくグラファイト製のネックをいち早く実用化した。" },
        { q: "グラファイトネックの利点として正しいのは?", choices: ["湿度・温度による反りがほとんど無い", "音が全く出ない", "非常に重くなる", "電池が必要になる"], answer: 0, explain: "木材特有の反りが起きにくく、安定した演奏性を実現している。" },
        { q: "Status Graphiteの創業国はどこか?", choices: ["イギリス", "アメリカ", "ドイツ", "日本"], answer: 0, explain: "イギリスのRob Greenらによって設立された。" },
        { q: "Status Graphiteが多く手がける設計は?", choices: ["ヘッドレス設計", "V字型ボディ", "アコースティック構造", "同軸ピックアップ"], answer: 0, explain: "ヘッドレス(ペグ/ヘッドが無い)モデルを多く展開している。" },
        { q: "Status Graphiteと並ぶグラファイト素材ベースの代表格は?", choices: ["Modulus", "Alembic", "Fodera", "Spector"], answer: 0, explain: "アメリカのModulusも同様にグラファイト素材で知られるブランド。" },
      ],
    },
    {
      id: "modulus",
      order: 28,
      title: "Modulus",
      category: "エレキベース",
      hook: "湿度で音程が狂う木製ネックの弱点を、カーボン素材で解決しようとしたカリフォルニアの会社の話。",
      image: "modulus_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカ・カリフォルニアで設立。Status Graphiteと同じく、グラファイト(炭素繊維)を使ったネック製造技術のパイオニアとして、1980〜90年代に高い評価を得た。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "グラファイトネックによる高い剛性と、湿度変化に左右されない安定した音程・演奏性を特徴とする。木材ボディと組み合わせたハイブリッド構造のモデルが主流。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Quantumシリーズ</strong>(20〜30万円台) — グラファイトネック+木製ボディのハイブリッド。",
            "<strong>Flea Bass</strong>(20〜30万円台) — Red Hot Chili PeppersのFleaのシグネチャーモデル。コンパクトなボディが特徴。",
            "近年は生産規模が縮小し、中古市場での取引が中心になっている面もある。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "1980〜90年代の「安定性重視」ブームの中で高く評価されたが、近年は主に木製ネックのブランドが市場の主流を占めており、Modulusはニッチな存在としてコアなファン層に支持され続けている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Status Graphiteと並ぶグラファイトネックの代表格。特にFleaのようなロック/ファンク系ベーシストからの支持で知られる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Flea(Red Hot Chili Peppers)は主力のMusic Man StingRayと並行してModulus製ベースも使用してきたことがあり、両ブランドの愛用者として語られることがある。",
          ],
        },
      ],
      quiz: [
        { q: "Modulusが得意とする素材技術は?", choices: ["グラファイト(炭素繊維)ネック", "マソナイトボディ", "純木製単板", "竹製指板"], answer: 0, explain: "Status Graphiteと同様、グラファイトネックのパイオニアとされる。" },
        { q: "Modulusの創業国・地域はどこか?", choices: ["アメリカ・カリフォルニア", "イギリス", "ドイツ", "日本"], answer: 0, explain: "アメリカ・カリフォルニアで設立された。" },
        { q: "Modulusのシグネチャーモデルを持つベーシストは?", choices: ["Flea(Red Hot Chili Peppers)", "Marcus Miller", "Duck Dunn", "Chris Squire"], answer: 0, explain: "Fleaのシグネチャーモデル「Flea Bass」が知られる。" },
        { q: "グラファイトネックが評価される理由は?", choices: ["湿度変化に左右されない安定性", "極端な軽さのみ", "電池が不要になること", "音が全く出ないこと"], answer: 0, explain: "湿度・温度変化による反りが起きにくい安定性が評価されている。" },
        { q: "Modulusと同じ技術路線のイギリスのブランドは?", choices: ["Status Graphite", "Warwick", "Spector", "Alembic"], answer: 0, explain: "Status Graphiteも同様にグラファイト素材を使うブランド。" },
      ],
    },
    {
      id: "pedulla",
      order: 29,
      title: "Pedulla",
      category: "エレキベース",
      hook: "フレットの無いベースの「なめらかさ」だけを追求し続けた、マサチューセッツの職人の話。",
      image: "pedulla_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカ・マサチューセッツでMichael Pedullaが設立。特にフレットレスベース(フレットの無い、指板を直接押さえて音程を作るベース)の分野で高い評価を確立してきたブティックビルダー。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "フレットレス特有の「なめらかに音程が繋がる(グリッサンド的な)」表現力を最大限引き出す指板・弦高設計にこだわっている。フュージョン/ジャズ系のベーシストから特に支持されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Buzzシリーズ</strong>(30万円台〜) — フレットレス/フレット付き両対応。指板にライン(目印)入りのモデルも選択可能。",
            "<strong>MVPシリーズ</strong>(30万円台〜) — より汎用的な形状。",
            "少量生産のためモデルチェンジは緩やかで、ロングセラー傾向が強い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "小規模なブティックビルダーとして、大量生産ブランドとは異なる「専門特化」の価格戦略・ブランディングを取っている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "フレットレスベースの分野では、Foderaなどと並び「専門性の高さ」で評価される数少ないブランドの一つ。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "フレットレスベース奏者の間では、音程の不安定さを恐れずに「なめらかさ」を追求する上で、指板のカーブ設計が特に重要視されるとされ、Pedullaはこの点への造詣の深さで知られる。",
          ],
        },
      ],
      quiz: [
        { q: "Pedullaが特に評価される分野は?", choices: ["フレットレスベース", "ヘッドレスベース", "アコースティックベース", "電子ドラム"], answer: 0, explain: "フレットの無いフレットレスベースの分野で高い評価を確立してきた。" },
        { q: "Pedullaの創業地はどこか?", choices: ["マサチューセッツ", "カリフォルニア", "テキサス", "フロリダ"], answer: 0, explain: "アメリカ・マサチューセッツでMichael Pedullaが設立した。" },
        { q: "Pedullaが支持を集めているベーシストのジャンルは?", choices: ["フュージョン/ジャズ系", "メタル系", "民族音楽専業", "電子音楽専業"], answer: 0, explain: "フレットレスの表現力を活かすフュージョン/ジャズ系に支持されている。" },
        { q: "Pedullaの代表シリーズ名は?", choices: ["Buzzシリーズ", "NSシリーズ", "StingRay", "BSRシリーズ"], answer: 0, explain: "Buzzシリーズがフレットレス/フレット付き両対応の代表製品。" },
        { q: "フレットレスベースの表現力として重視される要素は?", choices: ["音程がなめらかに繋がる表現力", "極端な歪み", "同軸ピックアップの定位", "フロイドローズの安定性"], answer: 0, explain: "グリッサンド的になめらかに音程が繋がる表現力が重視される。" },
      ],
    },
    {
      id: "peavey",
      order: 30,
      title: "Peavey",
      category: "エレキベース",
      hook: "アンプからPAスピーカーまで何でも作る「地方の巨人」が、実は堅実なベースメーカーでもある話。",
      image: "peavey_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1965年、アメリカ・ミシシッピ州でHartley Peaveyが設立。ギターアンプ、PAスピーカー、ミキサー、エレキギター/ベースまで幅広く手がける総合音響機材メーカーとして急成長した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "ベースラインの「Cirrus」シリーズは、ニュートラルで前に出るサウンドと高い工作精度で、コストパフォーマンスに優れたハイエンド機として評価されてきた。1970年代の「T-40」も、当時としては先進的な設計を持つヴィンテージモデルとして再評価されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Cirrusシリーズ</strong>(15〜25万円台) — 上位、ニュートラルなサウンドで評価。",
            "<strong>T-40</strong> — 1978年発売のヴィンテージ、コイルタップ機能(ハムバッカーの片方のコイルだけを使い音を細くできる機能)を先進的に搭載。",
            "<strong>Milleniumシリーズ</strong>(5〜10万円台) — 普及帯。",
            "アンプ・PA機材との組み合わせでのバンドルセット展開も強み。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "楽器単体だけでなくアンプ・PA機材まで含めた垂直統合型のビジネスモデルにより、価格に対する品質の高さを実現している。地方(ミシシッピ州)発祥ながら世界的な規模に成長した数少ない音響機材グループの一つ。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Yamahaと同様、「実用・信頼性・コストパフォーマンス」路線の代表格。ハイエンドブティック系ブランド(Fodera、Alembic等)とは異なる市場セグメントで確固たる地位を築いている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "PeaveyはPA/アンプ機材の分野でも大きなシェアを持っており、ベース単体のブランドイメージ以上に「ライブ音響を裏で支える総合メーカー」としての存在感が大きい。",
          ],
        },
      ],
      quiz: [
        { q: "Peaveyの創業州はどこか?", choices: ["ミシシッピ州", "カリフォルニア州", "ニューヨーク州", "テキサス州"], answer: 0, explain: "1965年、アメリカ・ミシシッピ州でHartley Peaveyが設立した。" },
        { q: "Peaveyの上位ベースシリーズは?", choices: ["Cirrusシリーズ", "BBシリーズ", "NSシリーズ", "StingRay"], answer: 0, explain: "Cirrusシリーズがコストパフォーマンスに優れた上位機として知られる。" },
        { q: "Peaveyの事業範囲として正しいのは?", choices: ["アンプ・PA機材からギター/ベースまで幅広く手がける", "ベース専業メーカー", "ドラム専業メーカー", "シンバル専業メーカー"], answer: 0, explain: "アンプ・PA・ミキサーなど幅広い音響機材を手がける総合メーカー。" },
        { q: "Peaveyの1970年代のヴィンテージベースモデルは?", choices: ["T-40", "P-Bass", "StingRay", "Thumb Bass"], answer: 0, explain: "T-40は先進的な設計を持つヴィンテージモデルとして再評価されている。" },
        { q: "PeaveyとYamahaに共通する路線は?", choices: ["実用・信頼性・コストパフォーマンス重視", "超高価格帯のブティック路線", "電子音源専業", "アコースティック専業"], answer: 0, explain: "両社とも堅実な実用性重視の路線で知られる。" },
      ],
    },
    {
      id: "martin",
      order: 31,
      title: "Martin (C.F. Martin & Co.)",
      category: "アコースティックギター",
      hook: "190年間、一度も家族の手を離れなかった会社が、今のアコースティックギターの「形」そのものを発明した話。",
      image: "martin_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1833年、ドイツ出身のChristian Frederick Martinがアメリカ・ニューヨークで創業(後にペンシルベニア州ナザレスに移転)。190年以上にわたり同族(Martin家)の経営が続く、現存する楽器メーカーの中でも最古参格の一社。現当主は7代目にあたるChris Martin IV。",
            "1916年、楽器店Ditson社の依頼で大型ボディの「ドレッドノート」型ギターを開発。当時の戦艦の名から取られたこの巨大ボディは、後の1931年からMartin自身のブランドラインにも採用され、現在ではスチール弦アコースティックギターの最も標準的なボディ形状として、他社にも広く模倣されている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "1850年代にMartinが発明した「Xブレーシング」(表板裏側の力木をX字状に組む補強・音響設計)は、強度と鳴りを両立させる技術として、現代のスチール弦アコースティックギターのほぼ全てに継承されている基礎技術。",
            "ドレッドノート型は大型ボディによる豊かな低域と音量を特徴とし、弾き語り・バンド演奏における「アコースティックギターの基準的な太さ」を作り上げた。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/martin_d28.jpg",
          imageCredit: '写真: Tony 1212 / <a href="https://commons.wikimedia.org/wiki/File:Martin-dreadnought-shapes.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 4.0)',
          paragraphs: [
            "<strong>D-28</strong>(50万円台〜) — 1931年発売、ドレッドノートの定番。ローズウッド単板。",
            "<strong>D-45</strong>(100万円超) — 最高級ライン。abalone(アワビ貝の内側を使った装飾素材)の装飾。1933年に「歌うカウボーイ」Gene Autryのために特注されたのが最初で、一般ラインへの再導入は1968年。",
            "<strong>000シリーズ</strong> — 小ぶりなボディで指弾き向き。",
            "<strong>DX1シリーズ</strong>(5〜10万円台) — 合板・複合素材の普及帯。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "同族経営を維持し、大規模な株式公開などは行わない堅実路線を貫いている。トレンドを追わず伝統的な設計・製法を守り続けることが、逆に「アコースティックギターの基準機」としての価格・ブランド価値の安定につながっている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          image: "compare_acoustics.png",
          paragraphs: [
            "アコースティックギター全体の「伝統・ヴィンテージ」の基準として、Gibsonのアコースティックラインや、より現代的なTaylorと比較される。「Martinは伝統と深み、Taylorは現代性と明瞭さ」という対比がしばしば語られる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "「ドレッドノート」という名称は、当時世界最大級だったイギリス海軍の戦艦HMS Dreadnoughtに由来する。ギターの「大きさ」を強調するための命名だった。",
          ],
        },
      ],
      quiz: [
        { q: "Martinが1850年代に発明したとされる技術は?", choices: ["Xブレーシング", "ハムバッカー", "フロイドローズ", "アクティブプリアンプ"], answer: 0, explain: "表板裏の力木をX字に組む「Xブレーシング」は現代アコースティックの基礎技術。" },
        { q: "「ドレッドノート」という名称の由来は?", choices: ["イギリス海軍の戦艦", "創業者の愛犬の名前", "開発担当者の名字", "フランス語の造語"], answer: 0, explain: "当時世界最大級だった戦艦HMS Dreadnoughtに由来する。" },
        { q: "D-45が最初に製作されたきっかけは?", choices: ["歌手Gene Autryのための特注", "万国博覧会出展用", "Martin家の結婚式用", "軍への献上品"], answer: 0, explain: "「歌うカウボーイ」Gene Autryのために1933年に特注されたのが最初。" },
        { q: "Martin社の経営形態の特徴は?", choices: ["190年以上続く同族経営", "近年上場した", "海外資本に買収された", "国営企業として運営"], answer: 0, explain: "1833年創業以来、Martin家による同族経営が続いている。" },
        { q: "MartinとTaylorの対比としてよく語られるのは?", choices: ["Martinは伝統と深み、Taylorは現代性と明瞭さ", "Martinは電子楽器専業、Taylorはアコースティック専業", "両社は全く同じ音", "Martinは日本製、Taylorはアメリカ製"], answer: 0, explain: "伝統的な深みのMartinと、現代的で明瞭なTaylorという対比で語られることが多い。" },
      ],
    },
    {
      id: "taylor",
      order: 32,
      title: "Taylor",
      category: "アコースティックギター",
      hook: "「手作りこそ至高」の業界に、精密機械加工という異物を持ち込んで成り上がった若手ブランドの話。",
      image: "taylor_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1974年、アメリカ・カリフォルニア州でBob TaylorとKurt Listugが設立。Martinら伝統ブランドに比べ後発ながら、精密な製造技術を武器に急速にシェアを伸ばした現代的なアコースティックギターブランド。",
            "1999年に発表した「NTネック」(New Technology neck)は、伝統的なアコースティックギターのネック接合方法(ダブテイル、蟻継ぎ)に代わり、ボルトオンに近い方式で精密なネック角度調整を可能にした技術。伝統派からは賛否が分かれたが、量産時の品質安定に大きく貢献した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Martinの「伝統的な深み・温かみ」と対比される形で、明るく粒立ちの良い、現代的で見通しの良いサウンドが特徴とされる。フィンガースタイル(指弾き)奏者からの支持が特に厚い。",
            "2018年発表の「V-Classブレーシング」(開発者Andy Powersによる、Xブレーシングに代わる新設計の力木パターン)は、サステインと音程の正確さを両立させる技術として、近年の代表的な技術革新となっている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/taylor_acoustic.jpg",
          imageCredit: '写真: andy carter / <a href="https://commons.wikimedia.org/wiki/File:Taylor_Richie_Sambora_Signature_model,_2008_Stamford_Guitar_Festival.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>800シリーズ</strong>(50万円台〜) — ハイエンド。V-Classブレーシング搭載。",
            "<strong>200/300番台</strong>(15〜30万円台) — ミドルクラス。",
            "<strong>100番台</strong>(10万円台) — 入門〜中級。",
            "<strong>GS Mini</strong>(3〜5万円台) — 小型・携行向けモデルとして人気。",
            "上位モデルはExpression System(ピエゾ+マイクのハイブリッド式ピックアップ)をほぼ標準搭載し、ライブでのプラグイン使用にも強い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "創業者Bob Taylor自身が、黒檀(エボニー)の乱獲・違法伐採問題に強い問題意識を持ち、2011年にカメルーンの黒檀製材所(Crelicam)を自社で買収して持続可能な調達体制を構築したことで知られる。単なる原材料調達を超えた、業界全体への環境的責任のモデルケースとして語られることが多い。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Martinの「伝統」に対する「革新」の象徴として位置づけられることが多い。CNC加工(コンピューター制御による精密な切削加工)などの精密機械技術を早くから取り入れたことで、量産品としての品質の均一性という点でも評価されてきた。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Bob Taylorは自身のエボニー調達の取り組みについて著書やインタビューで積極的に発信しており、楽器メーカーの経営者としては珍しく環境問題の専門家としても知られる人物になっている。",
          ],
        },
      ],
      quiz: [
        { q: "Taylorが1999年に発表したネック技術の名称は?", choices: ["NTネック", "Xブレーシング", "ホースシューピックアップ", "V-Classネック"], answer: 0, explain: "New Technology neckは、精密な角度調整を可能にしたボルトオン式に近い接合方式。" },
        { q: "Taylorが2018年に発表した新しい力木パターンの名称は?", choices: ["V-Classブレーシング", "Xブレーシング", "Aフレーム", "スカラップドブレーシング"], answer: 0, explain: "Andy Powers設計のV-Classブレーシングがサステインと音程の正確さを高めた。" },
        { q: "創業者Bob Taylorが取り組んだ環境関連の施策は?", choices: ["カメルーンの黒檀製材所を自社買収", "太陽光発電工場への全面転換", "プラスチック弦への切り替え", "森林への植樹活動のみ"], answer: 0, explain: "エボニーの持続可能な調達のため、カメルーンの製材所Crelicabを買収した。" },
        { q: "Taylorのサウンドの傾向として語られるのは?", choices: ["明るく粒立ちの良い現代的な音", "極端にこもった音", "金属的で耳障りな音", "Martinと全く同じ音"], answer: 0, explain: "現代的で見通しの良い音が特徴とされ、フィンガースタイル奏者に支持される。" },
        { q: "Taylorの小型・携行向け人気モデルは?", choices: ["GS Mini", "D-45", "Thumb Bass", "StingRay"], answer: 0, explain: "GS Miniはコンパクトな携行向けモデルとして人気が高い。" },
      ],
    },
    {
      id: "guild",
      order: 33,
      title: "Guild",
      category: "アコースティックギター",
      hook: "Epiphoneを辞めた男が興した会社の12弦ギターが、ウッドストックのステージで鳴っていた話。",
      image: "guild_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1952年、ニューヨークで元Epiphone社員のAlfred DrongeとGeorge Mannが設立。アーチトップ/フラットトップ両方の高品質なアコースティックギターで評価を確立した。",
            "特に12弦ギターの評価が高く、1969年のウッドストック・フェスティバルでRitchie Havensが演奏した12弦ギターがGuild製だったことでも知られる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "12弦モデルは、6弦それぞれに対応するオクターブ違いの弦を追加することで生まれる豊かな倍音・煌びやかな響きが特徴。フラットトップモデルはMartin系の伝統を踏襲しつつ、やや異なる力木設計で独自の鳴りを追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/guild_12string.jpg",
          imageCredit: '写真: Alfred Kiefer / <a href="https://commons.wikimedia.org/wiki/File:Kopfplatte_Guild_F-2512E.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>F-212</strong>(20万円台〜) — 12弦の代表格。",
            "<strong>D-55</strong>(20万円台〜) — ドレッドノート型、Martin系に近い設計。",
            "<strong>DV-6</strong>(10万円台) — 近年の再設計ライン、普及帯。",
            "生産拠点はWesterly(米国ロードアイランド)から、後に中国・韓国工場へと時代により変遷してきた。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "複数回オーナーが変わり、現在はコルドバ・ミュージック・グループ(Cordoba、後述)の傘下で運営されている。歴史ある名門ブランドが、近年参入した企業グループに統合されるという業界の再編を象徴する例。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Martin・Gibsonに次ぐ「老舗フォーク/アコースティック」ブランドとして位置づけられ、特に12弦ギターの分野では独自の存在感を保っている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "創業者Alfred DrongeはEpiphoneで培った製造ノウハウを土台にGuildを立ち上げており、Epiphone→Guildという人材の流れも楽器業界の系譜として興味深い。",
          ],
        },
      ],
      quiz: [
        { q: "Guild創業者のかつての勤務先は?", choices: ["Epiphone", "Gibson", "Fender", "Martin"], answer: 0, explain: "元Epiphone社員のAlfred Dronge, George Mannが1952年に設立した。" },
        { q: "ウッドストックでRitchie Havensが演奏した12弦ギターのブランドは?", choices: ["Guild", "Martin", "Taylor", "Gretsch"], answer: 0, explain: "Guild製の12弦ギターが使用されたことで知られる。" },
        { q: "Guildの現在の親会社は?", choices: ["Cordoba Music Group", "Gibson", "Fenderグループ", "独立資本を維持"], answer: 0, explain: "現在はCordoba Music Groupの傘下で運営されている。" },
        { q: "12弦ギターが豊かな倍音を持つ理由は?", choices: ["各弦にオクターブ違いの弦を追加しているため", "弦の本数が半分だから", "金属ボディだから", "電子回路を内蔵しているから"], answer: 0, explain: "各弦に対応するオクターブ違いの弦を加えることで倍音が豊かになる。" },
        { q: "Guildが特に強みを持つとされるモデルは?", choices: ["12弦ギター", "V字型エレキギター", "フレットレスベース", "電子ドラム"], answer: 0, explain: "12弦ギターの分野で独自の存在感を保っている。" },
      ],
    },
    {
      id: "gibson_acoustic",
      order: 34,
      title: "Gibson (アコースティック)",
      category: "アコースティックギター",
      hook: "エルヴィスが抱えた「ジャンボ」なボディが、フォーク/カントリーの定番サウンドを作った話。",
      image: "gibson_acoustic_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "エレキギターで知られるGibsonは、実はアーチトップ/フラットトップアコースティックの老舗としての歴史も長い。1942年発表のJ-45は「ワークホース(働き者の馬)」と呼ばれるほど頑丈で扱いやすく、フォーク/カントリー系の定番モデルとして長年愛用されてきた。",
            "SJ-200(通称J-200)は大型の「ジャンボ」ボディを持つモデルで、Elvis Presleyが使用したことでも知られ、「フラットトップの王様」と称されることもある。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Martinのドレッドノート型が低域の量感・パワーを重視するのに対し、Gibsonのジャンボ/スロープショルダー型(なで肩型)ボディは中域が前に出る、ボーカル伴奏に馴染みやすいバランスの音とされる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/gibson_j45.jpg",
          imageCredit: '写真: Lauren Gerson (Uploaded on Flickr by LBJ Foundation) / <a href="https://commons.wikimedia.org/wiki/File:Buddy_Holly%27s_Gibson_J-45_with_leather_cover_-_%22Ladies_and_Gentlemen..._the_Beatles!%22_exhibit_at_LBJ_Presidential_Library,_Austin,_TX,_2015-06-23_16.11.39.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Public domain)',
          paragraphs: [
            "<strong>J-45</strong>(30万円台〜) — 1942年発売、「ワークホース」の異名を持つ定番。",
            "<strong>Hummingbird</strong>(30万円台〜) — 1960年発売、装飾的なピックガードが特徴。",
            "<strong>SJ-200</strong>(50万円台〜) — 1937年発売、ジャンボボディ。",
            "<strong>Epiphone Gibsonアコースティック復刻ライン</strong>(5〜10万円台) — 廉価版。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "エレキギター事業と同じGibson本体が手がけており、2018年の経営危機・再建はアコースティック事業にも影響したが、再建後は改めてラインナップが整理・強化されている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Martinの「ドレッドノート系の伝統」と対比される「なで肩/ジャンボ系の伝統」の代表格。ボーカル伴奏に向いた音作りという点で、シンガーソングライターから根強い支持を得ている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Hummingbird(ハチドリ)の名は、ピックガードに描かれた華やかな鳥と花の装飾に由来し、Gibsonアコースティックの中でも特に視覚的に印象的なモデルとして知られる。",
          ],
        },
      ],
      quiz: [
        { q: "Gibsonの「ワークホース」と呼ばれるモデルは?", choices: ["J-45", "SJ-200", "Hummingbird", "D-45"], answer: 0, explain: "1942年発表のJ-45は頑丈さから「ワークホース」と呼ばれる。" },
        { q: "Elvis Presleyが使用したことで知られるGibsonのジャンボモデルは?", choices: ["SJ-200", "J-45", "Les Paul", "SG"], answer: 0, explain: "大型ボディのSJ-200(J-200)は「フラットトップの王様」とも称される。" },
        { q: "GibsonアコースティックとMartinの音の傾向の違いとして語られるのは?", choices: ["Gibsonは中域が前に出る、Martinは低域の量感重視", "両者は全く同じ音", "Gibsonは電子音源、Martinはアコースティック専業", "Martinの方が新しいブランドである"], answer: 0, explain: "Gibsonはボーカルなじみのよいなで肩型ボディ、Martinはドレッドノート系の低域重視が特徴。" },
        { q: "Hummingbirdの名の由来は?", choices: ["ピックガードのハチドリと花の装飾", "開発者の名前", "発売都市の名前", "特に意味はない"], answer: 0, explain: "華やかなハチドリと花のピックガード装飾に由来する。" },
        { q: "Gibsonアコースティックのなで肩ボディが向いているとされる用途は?", choices: ["ボーカル伴奏", "メタルのリフ", "打楽器的な演奏", "電子音楽制作"], answer: 0, explain: "中域が前に出るためボーカル伴奏に馴染みやすいとされる。" },
      ],
    },
    {
      id: "yamaha_acoustic",
      order: 35,
      title: "Yamaha (アコースティック)",
      category: "アコースティックギター",
      hook: "「赤ラベル」と呼ばれる1本が、世界中の初心者の「最初の1本」になった話。",
      image: "yamaha_acoustic_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1966年発売のFGシリーズ(通称「赤ラベル」、内部に貼られた赤いラベルに由来)は、価格に対する品質の高さで世界的に評価され、日本国内外で爆発的に普及した。総合楽器メーカーYamahaの量産技術力を象徴するモデルとなった。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "均一な品質管理による安定したサウンドが特徴で、個体差の少なさはメーカー独自の強み。高級ブティックブランドのような強い個性は主張しないが、価格帯を考えれば非常にバランスの取れた鳴りを実現している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/yamaha_fg.jpg",
          imageCredit: '写真: John Clift / <a href="https://commons.wikimedia.org/wiki/File:Yamaha_FG-312_12-String_Acoustic_Guitar_(1977-1981).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>FGシリーズ</strong>(2〜6万円台) — 1966年発売の定番、普及帯〜中級帯。",
            "<strong>LLシリーズ</strong>(10万円台〜) — 上位、単板構成。",
            "<strong>LSシリーズ</strong> — 小ぶりなボディ、指弾き向け。",
            "<strong>FG-180(初代赤ラベル)</strong> — ヴィンテージ、中古市場で特に人気が高い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "総合楽器メーカーとしての量産効率・品質管理体制により、価格に対するコストパフォーマンスで長年高い評価を得ている。世界中の音楽教育の現場でも定番教材として使われてきた。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Martin・Taylorのようなハイエンド路線とは異なる、「入門〜量産帯の基準機」としての地位を確立している。多くのギタリストにとって「最初のアコースティックギター」の代表的存在。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "「赤ラベル」ヴィンテージのFGシリーズ(1960〜70年代製)は、近年になって「隠れた名器」として再評価され、中古市場で人気が高まっている。",
          ],
        },
      ],
      quiz: [
        { q: "Yamaha FGシリーズの通称は?", choices: ["赤ラベル", "白ラベル", "金ラベル", "青ラベル"], answer: 0, explain: "内部に貼られた赤いラベルに由来する通称。" },
        { q: "YamahaのFGシリーズが評価されている点は?", choices: ["価格に対する品質の高さ", "世界最高価格帯であること", "電子回路の複雑さ", "金属ボディの採用"], answer: 0, explain: "コストパフォーマンスの高さで世界的に評価されてきた。" },
        { q: "Yamahaアコースティックが果たしてきた役割は?", choices: ["入門者の「最初の1本」としての基準機", "超高級ブティックブランド", "電子ドラム専業", "シンバル専業"], answer: 0, explain: "多くのギタリストの入門機として長年親しまれてきた。" },
        { q: "YamahaのFGシリーズの発売年は?", choices: ["1966年", "1902年", "1985年", "2007年"], answer: 0, explain: "1966年に発売され、世界的に普及した。" },
        { q: "ヴィンテージのYamaha FGシリーズの近年の評価は?", choices: ["「隠れた名器」として再評価されている", "全く評価されていない", "生産不良品として扱われる", "コレクター市場では無価値"], answer: 0, explain: "1960〜70年代製が近年中古市場で人気が高まっている。" },
      ],
    },
    {
      id: "ovation",
      order: 36,
      title: "Ovation",
      category: "アコースティックギター",
      hook: "ヘリコプター会社のエンジニアが、木の代わりに「航空機素材」でギターのボディを作った話。",
      image: "ovation_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1966年、ヘリコプターメーカーKaman Aerospaceの創業者Charles Kamanが設立。航空宇宙工学の知見を応用し、伝統的な木製の裏板・側板に代わる合成素材「ライラコード(Lyrachord)」を使った、丸みを帯びた特徴的なボウル型ボディを開発した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "ボウル型の合成素材ボディは、木材のような個体差・経年変化が少なく、均一な鳴りを長期間保ちやすいとされる。1970年代から積極的にピエゾピックアップ(圧電素子による搭載型ピックアップ)を採用し、ステージでの音量確保に強い「アコースティック/エレクトリック」という分野を早期に切り開いた。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/ovation_guitar.jpg",
          imageCredit: '写真: Eden, Janine and Jim; derivative by Clusternote / <a href="https://commons.wikimedia.org/wiki/File:Nancy_Wilson_(Heart)%27s_1978_Ovation_Adamas_1687-7_(serial_no._477-92)_specially_made_for_her_-_Play_It_Loud._MET_(2019-05-13_19.31.01_by_Eden,_Janine_and_Jim).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.0)',
          paragraphs: [
            "<strong>Balladeer</strong>(15〜25万円台) — 定番のボウル型。",
            "<strong>Adamas</strong>(50万円台〜) — 最上位、カーボン系素材の甲板。",
            "<strong>Celebrity</strong>(5〜10万円台) — 海外生産の廉価ライン。",
            "全モデルに何らかの形でピエゾピックアップが内蔵されているのが基本仕様。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "航空宇宙企業が母体という異色の成り立ちから、木材資源に依存しない生産体制を早期に確立した。ステージでの実用性(アンプに繋いで大音量で演奏できる)を重視するシンガーソングライターから支持を集めた。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Takamineと並び「ステージ向けアコースティック/エレクトリック」の先駆け的存在。伝統的な木製ボディにこだわるMartin/Taylorとは全く異なる技術的アプローチを取る。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "ボウル型ボディは椅子に座って構えると滑りやすいという指摘もあり、賛否が分かれる独特な形状として長年語り草になっている。",
          ],
        },
      ],
      quiz: [
        { q: "Ovation創業者Charles Kamanの本業は?", choices: ["ヘリコプターメーカーの経営者", "レコード会社の経営者", "ギター職人", "弦楽器店の店主"], answer: 0, explain: "Kaman Aerospaceの創業者が航空宇宙工学の知見を応用してOvationを設立した。" },
        { q: "Ovationのボディに使われる特徴的な合成素材は?", choices: ["ライラコード(Lyrachord)", "マソナイト", "純チタン", "竹"], answer: 0, explain: "木材の代わりに合成素材ライラコードを使ったボウル型ボディが特徴。" },
        { q: "Ovationが早期から採用してきた技術は?", choices: ["ピエゾピックアップによるアコースティック/エレクトリック化", "同軸スピーカー", "フロイドローズブリッジ", "グラファイトネック"], answer: 0, explain: "1970年代から積極的にピエゾピックアップを搭載してきた。" },
        { q: "Ovationのボディ形状に関する指摘として正しいのは?", choices: ["座って構えると滑りやすいという指摘がある", "全く問題なく万能と評価されている", "木製より遥かに重い", "音が全く出ない"], answer: 0, explain: "ボウル型形状ゆえの滑りやすさが賛否の分かれる点として語られる。" },
        { q: "Ovationと同様「ステージ向けアコースティック/エレクトリック」の先駆けとされるブランドは?", choices: ["Takamine", "Martin", "Larrivée", "Collings"], answer: 0, explain: "Takamineも早期からステージ向け内蔵ピックアップに注力してきた。" },
      ],
    },
    {
      id: "takamine",
      order: 37,
      title: "Takamine",
      category: "アコースティックギター",
      hook: "「山の名前」を冠した日本のブランドが、アコースティックに「ステージ用の耳」を初めて与えた話。",
      image: "takamine_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1959年、日本で創業。社名は工場近くの山「高峰山」に由来する。1978年に独自のピックアップシステム「パラセティック(Palathetic)」を開発し、アコースティックギターのステージ用アンプリファイにおける先駆者となった。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "パラセティックピックアップは、ブリッジ下に複数のセンサーを配置し、弦振動だけでなく生音のニュアンスも拾いやすい設計とされ、ライブでの「生々しいアコースティック感」の再現に貢献してきた。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/takamine_guitar.jpg",
          imageCredit: '写真: Alan Levine / <a href="https://commons.wikimedia.org/wiki/File:Takamine_F-340_headstock_logo_-_EST._1962.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.0)',
          paragraphs: [
            "<strong>Pro Seriesシリーズ</strong>(15〜30万円台) — パラセティックピックアップ標準搭載。",
            "<strong>GN/EGシリーズ</strong>(5〜15万円台) — 廉価〜中位。",
            "エレキギター的な薄型カッタウェイ(演奏性を高める切り欠き)を持つステージ向けモデルも多い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "「弾き語りでアンプに繋いでツアーに出る」という現代のシンガーソングライターの標準的なスタイルは、Takamine・Ovationのようなブランドの技術革新が土台になっているとされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Ovationと並ぶ「アコースティック/エレクトリック」分野のパイオニア。近年はMartin・Taylorも高性能な内蔵ピックアップを標準搭載するようになったが、その先鞭をつけたのはTakamineの功績とされる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "社名の由来である「高峰」という山岳由来の名前は、日本の楽器ブランドが海外市場でも独自の存在感を保つ一因になっているとされる。",
          ],
        },
      ],
      quiz: [
        { q: "Takamineの社名の由来は?", choices: ["工場近くの山の名前", "創業者の名前", "地域の川の名前", "特に意味のない造語"], answer: 0, explain: "工場近くの「高峰山」に由来するとされる。" },
        { q: "Takamineが1978年に開発した技術は?", choices: ["パラセティックピックアップ", "同軸スピーカー", "フロイドローズブリッジ", "グラファイトネック"], answer: 0, explain: "ブリッジ下にセンサーを配置するパラセティックピックアップを開発した。" },
        { q: "Takamineが果たした役割として正しいのは?", choices: ["アコースティック/エレクトリック分野のパイオニア", "電子ドラムの発明", "シンバル合金の開発", "フレットレスベースの元祖"], answer: 0, explain: "ステージ用アンプリファイの分野で先駆的な役割を果たしてきた。" },
        { q: "Takamineの創業年はいつか?", choices: ["1959年", "1902年", "1985年", "2007年"], answer: 0, explain: "1959年、日本で創業した。" },
        { q: "Takamineと並ぶアコースティック/エレクトリックのパイオニアは?", choices: ["Ovation", "Guild", "Collings", "National Reso-Phonic"], answer: 0, explain: "Ovationも同様にピエゾピックアップの早期採用で知られる。" },
      ],
    },
    {
      id: "alvarez",
      order: 38,
      title: "Alvarez",
      category: "アコースティックギター",
      hook: "アメリカの楽器商社が、日本の職人の名前をそのままモデル名にした「逆輸入ブランド」の話。",
      image: "alvarez_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカの楽器商社St. Louis Musicが展開するブランド。自社工場を持たず、時代により日本・韓国・中国の工場と提携して製造してきた「企画・流通」型のブランド運営が特徴。",
            "上位ラインには、日本の名工Kazuo Yairi(エレキではなくアコースティックの職人)が設計・監修する「Yairiモデル」があり、職人個人の名前がそのまま製品ラインの信頼性の証になっている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "エントリー〜ミドルクラス帯は堅実な設計でコストパフォーマンスを重視し、上位のYairiラインは伝統的な力木設計・木材選定にこだわった、より深みのある鳴りを追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Artist Seriesシリーズ</strong>(3〜8万円台) — 普及帯。",
            "<strong>Yairiシリーズ</strong>(15〜30万円台) — 上位、Kazuo Yairi監修。",
            "生産国は時代により日本・韓国・中国と変遷しており、旧い日本製個体はヴィンテージとして評価されることもある。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "自社工場を持たない「ファブレス」型のビジネスモデルにより、時代の為替・製造コストの変化に応じて生産国を柔軟に切り替えられる体制を確立している。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Takamine同様、ミドルクラス帯のアコースティック/エレクトリックとして支持されている。Yairiラインは職人の個人ブランドに近い評価軸を持つ点で他社と一線を画す。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Kazuo Yairiは自身の工房「Yairiギター」も別途運営しており、Alvarez-Yairiとはまた別に、独立した高級カスタムギターブランドとしても知られている。",
          ],
        },
      ],
      quiz: [
        { q: "Alvarezを展開するアメリカの企業は?", choices: ["St. Louis Music", "Fenderグループ", "Gibsonグループ", "Yamaha"], answer: 0, explain: "アメリカの楽器商社St. Louis Musicが展開するブランド。" },
        { q: "Alvarezの上位ラインを監修する日本の職人は?", choices: ["Kazuo Yairi", "Hans-Peter Wilfer", "Bob Taylor", "Ted McCarty"], answer: 0, explain: "名工Kazuo Yairiが監修する「Yairiモデル」が上位ラインとして知られる。" },
        { q: "Alvarezのビジネスモデルの特徴は?", choices: ["自社工場を持たないファブレス型", "完全自社一貫生産", "電子部品専業", "ドラム専業"], answer: 0, explain: "時代により複数国の工場と提携する企画・流通型の運営が特徴。" },
        { q: "Alvarezと同様ミドルクラス帯で支持されるブランドは?", choices: ["Takamine", "Fodera", "Alembic", "Collings"], answer: 0, explain: "Takamineも同様にミドルクラス帯のアコースティック/エレクトリックとして支持される。" },
        { q: "Kazuo Yairiについて正しい説明は?", choices: ["自身の工房も別途運営する名工", "Alvarezの創業者本人", "アメリカ人のギター職人", "ドラム専門の職人"], answer: 0, explain: "Alvarez-Yairiとは別に、独立した工房も運営する日本の名工。" },
      ],
    },
    {
      id: "larrivee",
      order: 39,
      title: "Larrivée",
      category: "アコースティックギター",
      hook: "自分のブランドを大きくするより、「弟子」を何人も育てることを選んだカナダの職人の話。",
      image: "larrivee_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1967年、カナダ人luthier(弦楽器職人)Jean Larrivéeが設立。緻密なハンドメイド工程にこだわり、多くの後進の職人を育てた「師匠」としても知られ、彼の工房出身者が独立して他のブランドを興した例も複数ある。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的な力木設計を土台にしながら、非常に精密な木材の削り出し・接合により、レスポンスの良さ(小さなタッチにも敏感に反応する特性)が高く評価されている。フィンガースタイル奏者から特に支持が厚い。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>OMシリーズ</strong>(40万円台〜) — 小ぶりな指弾き向けボディ。",
            "<strong>Dreadnoughtシリーズ</strong>(40万円台〜) — 低域重視の大型ボディ。",
            "全て単板構成のハンドメイドで、量産ラインは持たない。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "大量生産路線を追わず、手工芸的な品質を維持し続けるビジネスモデルを貫いている。ブランドの規模拡大より品質の一貫性を優先する経営方針が特徴。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Collingsと並ぶ「ハンドメイド品質重視」路線の代表格。派手さより精密さで評価されるタイプのブランド。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Jean Larrivéeの工房で修行した職人たちが、後に独立して別のギターブランドを興すケースが複数あり、カナダのアコースティックギター製作文化における「源流」的な存在として位置づけられている。",
          ],
        },
      ],
      quiz: [
        { q: "Larrivée創業者Jean Larrivéeの職業は?", choices: ["Luthier(弦楽器職人)", "エレキギターの回路設計者", "レコード会社の経営者", "ドラム職人"], answer: 0, explain: "カナダ人のluthierとして1967年にブランドを設立した。" },
        { q: "Larrivéeが「師匠」として果たした役割は?", choices: ["多くの後進の職人を育てた", "誰にも技術を教えなかった", "電子ドラムの発明", "シンバル合金の開発"], answer: 0, explain: "工房出身の職人が独立して他ブランドを興すなど、育成面で知られる。" },
        { q: "Larrivéeが評価される特徴は?", choices: ["レスポンスの良さ(タッチへの敏感さ)", "極端に大きい音量のみ", "電子回路の複雑さ", "金属ボディの採用"], answer: 0, explain: "精密な削り出し・接合によるレスポンスの良さが評価されている。" },
        { q: "Larrivéeの代表シリーズの一つは?", choices: ["OMシリーズ", "StingRay", "NSシリーズ", "BSRシリーズ"], answer: 0, explain: "小ぶりな指弾き向けボディのOMシリーズが代表的。" },
        { q: "Larrivéeと並ぶ「ハンドメイド品質重視」路線のブランドは?", choices: ["Collings", "Squier", "Epiphone", "Danelectro"], answer: 0, explain: "Collingsも同様に精密なハンドメイド品質で評価されるブランド。" },
      ],
    },
    {
      id: "collings",
      order: 40,
      title: "Collings",
      category: "アコースティックギター",
      hook: "テキサスの完璧主義者が、「これ以上ないほど精密」という理由だけでプロから絶大な信頼を得た話。",
      image: "collings_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1973年、アメリカ・テキサス州オースティンでBill Collingsが設立。フラットトップアコースティックだけでなく、アーチトップギター・マンドリンでも高い評価を得ているブティックブランド。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "圧倒的な工作精度・仕上げの均一性で知られ、プロのセッションミュージシャンから「個体差に当たり外れがない」という高い信頼を得ている。派手な音の個性よりも、完成度の高さそのものが評価軸になっている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/collings_guitar.jpg",
          imageCredit: '写真: Roberto Cipriano / <a href="https://commons.wikimedia.org/wiki/File:Collings_MT2-O_mandolin_headstock.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>OMシリーズ</strong>(50万円台〜)",
            "<strong>CJシリーズ</strong>(50万円台〜) — ジャンボボディ。",
            "<strong>マンドリンMFシリーズ</strong> — ブルーグラス奏者に評価が高い。",
            "全ラインで木材の乾燥・加工に極めて長い時間をかける工程が品質の均一性を支えている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "小規模ながら高価格帯を維持し、プロ向け市場での評価を軸にブランドを確立している。創業者Bill Collings自身は2017年に死去したが、その品質基準は現在も維持されている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Larrivéeと並ぶ「精密さ」重視のブティックブランド。セッションミュージシャン・スタジオワークの現場で「安心して持ち込める1本」としての評価が高い。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Collingsはギターだけでなくマンドリンの評価も非常に高く、ブルーグラス系ミュージシャンの間でも指折りのブランドとして扱われている。",
          ],
        },
      ],
      quiz: [
        { q: "Collings創業者Bill Collingsの拠点はどこか?", choices: ["テキサス州オースティン", "ニューヨーク", "カリフォルニア", "カナダ"], answer: 0, explain: "1973年、テキサス州オースティンで設立された。" },
        { q: "Collingsが評価されている最大の特徴は?", choices: ["圧倒的な工作精度・仕上げの均一性", "極端な低価格", "電子回路の充実", "同軸スピーカー技術"], answer: 0, explain: "個体差の少ない高精度な仕上げがプロから信頼を得ている。" },
        { q: "Collingsが高く評価されている、ギター以外の楽器は?", choices: ["マンドリン", "ドラム", "シンバル", "電子ベース"], answer: 0, explain: "マンドリンの評価も非常に高く、ブルーグラス系で知られる。" },
        { q: "Collingsと並ぶ精密さ重視のブランドは?", choices: ["Larrivée", "Danelectro", "Ovation", "Squier"], answer: 0, explain: "Larrivéeも同様にハンドメイドの精密さで評価されるブランド。" },
        { q: "Collingsが支持されている理由として正しいのは?", choices: ["個体差に当たり外れがない信頼性", "世界最大の生産台数", "電子ドラムとの統合機能", "アコースティック専業からの脱却"], answer: 0, explain: "プロのセッションミュージシャンから個体差の少なさで信頼されている。" },
      ],
    },
    {
      id: "breedlove",
      order: 41,
      title: "Breedlove",
      category: "アコースティックギター",
      hook: "「伝統の形」にこだわらず、木材の選び方から見直したオレゴンの若いブランドの話。",
      image: "breedlove_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1990年、アメリカ・オレゴン州で設立。Martin・Gibsonのような伝統的ブランドに比べ後発ながら、独自のボディシェイプ・力木設計・木材調達方針で個性を打ち出してきた比較的新しいブランド。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的なドレッドノート型とは微妙に異なる独自のボディ輪郭を採用し、レスポンスの良さと持ち運びのしやすさを両立させている。持続可能性に配慮した非伝統的な木材(サステナブルウッド)の採用にも積極的。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Oregonシリーズ</strong>(20万円台〜) — 地元産木材使用。",
            "<strong>Discoveryシリーズ</strong>(5〜10万円台) — 入門〜中級帯、海外生産。",
            "姉妹ブランドBedellも含め、木材のトレーサビリティを製品ページで開示する取り組みを進めている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "希少木材の枯渇問題を意識し、地元オレゴン産の木材や、あまり伝統的に使われてこなかった樹種の活用に積極的に取り組んでいる点が、環境配慮型ブランドとしての差別化になっている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Taylorと同様「伝統よりも革新・現代性」を志向する後発ブランドの一角。特に環境配慮の姿勢を明確に打ち出している点で独自性を持つ。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Breedloveの姉妹ブランドBedellも、同じグループ内でさらに持続可能性を重視した木材調達に取り組んでいることで知られる。",
          ],
        },
      ],
      quiz: [
        { q: "Breedloveの創業州はどこか?", choices: ["オレゴン州", "テキサス州", "カリフォルニア州", "ニューヨーク州"], answer: 0, explain: "1990年、アメリカ・オレゴン州で設立された。" },
        { q: "Breedloveが積極的に取り組んでいることは?", choices: ["持続可能な木材(サステナブルウッド)の活用", "希少木材の大量消費", "電子回路のみの製品化", "アコースティック事業からの撤退"], answer: 0, explain: "地元産・非伝統的な樹種を含むサステナブルな木材調達に積極的。" },
        { q: "Breedloveのボディ形状の特徴は?", choices: ["伝統的なドレッドノートとは異なる独自輪郭", "完全な四角形", "V字型", "円形"], answer: 0, explain: "独自のボディ輪郭でレスポンスの良さと持ち運びやすさを両立させている。" },
        { q: "Breedloveと同じグループの姉妹ブランドは?", choices: ["Bedell", "Guild", "Larrivée", "Collings"], answer: 0, explain: "Bedellも同グループでさらに持続可能性を重視したブランド。" },
        { q: "Breedloveと同様「革新・現代性」志向とされるブランドは?", choices: ["Taylor", "Martin", "Gibson", "National Reso-Phonic"], answer: 0, explain: "Taylorも同様に伝統より現代的な革新を志向するブランドとされる。" },
      ],
    },
    {
      id: "seagull",
      order: 42,
      title: "Seagull",
      category: "アコースティックギター",
      hook: "カナダの地元産木材だけで、「コスパの怪物」と呼ばれるギターを作り続けている会社の話。",
      image: "seagull_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "カナダのGodin Guitarsグループ傘下のブランド。カナダ国内(ケベック州)の自社工場での一貫生産にこだわり、地元産の木材(ワイルドチェリー等)を積極的に使用している。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "決して安価な素材で妥協しているわけではなく、無垢材(単板)を比較的手頃な価格帯からラインナップしている点が高く評価されている。伝統的なMartin系の設計を土台にした、素直で扱いやすい鳴りが特徴。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>S6シリーズ</strong>(4〜8万円台) — 定番の入門〜中級帯、単板トップ。",
            "<strong>Mavenシリーズ</strong> — コンパクトボディ、より現代的な仕様。",
            "<strong>Artist Collection</strong>(15万円前後) — 単板オール構成の上位ライン。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "カナダ国内生産という付加価値を保ちながら、価格帯は入門〜中級帯に抑えるという「コストパフォーマンス重視」のブランド戦略が高く評価されている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Yamahaと同様「価格の割に品質が高い」実用アコースティックの代表格として、特にコストパフォーマンス重視の層から根強い支持を集めている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "同じGodin Guitarsグループには、エレキギターブランドのGodin本体や、他の派生ブランドも存在し、カナダの楽器製造業を代表するグループの一つになっている。",
          ],
        },
      ],
      quiz: [
        { q: "Seagullが属するグループは?", choices: ["Godin Guitarsグループ", "Fenderグループ", "Gibsonグループ", "Cordoba Music Group"], answer: 0, explain: "カナダのGodin Guitarsグループ傘下のブランド。" },
        { q: "Seagullが積極的に使用する木材は?", choices: ["カナダ産のワイルドチェリー等の地元産木材", "輸入専用の希少木材のみ", "合成樹脂のみ", "竹材のみ"], answer: 0, explain: "ケベック州の自社工場で地元産木材を積極的に使用している。" },
        { q: "Seagullが評価されている点は?", choices: ["無垢材(単板)を手頃な価格で実現していること", "世界最高価格帯であること", "電子ドラムとの統合", "同軸スピーカー技術"], answer: 0, explain: "比較的手頃な価格帯から無垢材モデルを展開している点が評価されている。" },
        { q: "Seagullの代表シリーズは?", choices: ["S6シリーズ", "FGシリーズ", "OMシリーズ", "Buzzシリーズ"], answer: 0, explain: "S6シリーズが入門〜中級帯の定番として知られる。" },
        { q: "Seagullと似た「コストパフォーマンス重視」の路線とされるブランドは?", choices: ["Yamaha", "Fodera", "Collings", "Alembic"], answer: 0, explain: "Yamahaも同様に価格に対する品質の高さで評価されるブランド。" },
      ],
    },
    {
      id: "cordoba",
      order: 43,
      title: "Cordoba",
      category: "アコースティックギター",
      hook: "クラシックギター専業の新興ブランドが、老舗Guildを飲み込むまでに成長した話。",
      image: "cordoba_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1997年設立、比較的新しいブランドながら、クラシックギター(ナイロン弦ギター)市場をアメリカで再活性化させた立役者として知られる。近年は前述のGuildを傘下に収めるなど、企業グループとしても急拡大している。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "ナイロン弦特有の柔らかく温かみのある響きを、初心者にも扱いやすい価格帯・ネック幅で提供することに注力してきた。フラメンコ向けの明るいモデルも展開している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>C5シリーズ</strong>(3〜6万円台) — 入門〜中級帯の定番。",
            "<strong>GKシリーズ</strong>(3〜6万円台) — フラメンコ向け、Cypress材使用。",
            "<strong>Fusionシリーズ</strong> — 12フレットジョイント・薄いネック等、スチール弦感覚で弾けるナイロン弦モデル。",
            "<strong>Masterシリーズ</strong>(10万円台〜) — 単板構成の上位ライン。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "スチール弦ギター市場に比べニッチとされてきたクラシックギター市場で、手頃な価格帯の高品質モデルを展開することで独自の地位を築いた。Guild買収は、スチール弦市場への本格進出を意味する動きとしても注目された。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "アメリカのクラシックギター市場における事実上の代表的ブランド。近年はGuildブランドを通じてスチール弦アコースティック市場にも影響力を広げている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "社名「Cordoba」は、スペインのクラシックギター製作の伝統的な中心地の一つである都市コルドバに由来する。",
          ],
        },
      ],
      quiz: [
        { q: "Cordobaが専門とするギターの種類は?", choices: ["クラシックギター(ナイロン弦)", "エレキギター専業", "ベース専業", "12弦スチール弦専業"], answer: 0, explain: "ナイロン弦のクラシックギター市場を再活性化させたブランド。" },
        { q: "Cordobaが近年傘下に収めたブランドは?", choices: ["Guild", "Martin", "Taylor", "Gibson"], answer: 0, explain: "老舗Guildを買収し、スチール弦市場にも進出している。" },
        { q: "「Cordoba」という社名の由来は?", choices: ["スペインのクラシックギター製作の伝統都市", "創業者の名前", "アメリカの地名", "特に意味のない造語"], answer: 0, explain: "スペインの都市コルドバに由来する。" },
        { q: "Cordobaのフラメンコ向けシリーズは?", choices: ["GKシリーズ", "C5シリーズ", "S6シリーズ", "OMシリーズ"], answer: 0, explain: "GKシリーズがフラメンコ向けの明るいモデルとして展開されている。" },
        { q: "Cordobaの創業年はいつか?", choices: ["1997年", "1902年", "1952年", "1966年"], answer: 0, explain: "1997年設立の比較的新しいブランドである。" },
      ],
    },
    {
      id: "national_resophonic",
      order: 44,
      title: "National Reso-Phonic",
      category: "アコースティックギター",
      hook: "アンプが無かった時代、「金属のお椀」を仕込んで音量を稼いだギターの話。",
      image: "national_resophonic_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1927年、National String Instrument Corporationとして創業。まだ電気増幅技術が一般的でなかった時代に、ボディ内部に金属製の共鳴コーン(円錐状の振動板)を仕込み、機械的に音量を増幅する「リゾネーターギター」を発明した。",
            "一度事業は途絶えたが、1988年に「National Reso-Phonic」として再興され、現在もリゾネーターギター専業のブランドとして伝統を受け継いでいる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "金属コーンによる独特の金属的な響き・強いサステインが特徴で、ブルース/ブルーグラスのスライドギター(弦の上を金属/ガラス製の筒でなぞって演奏する奏法)の定番サウンドとして今も愛用されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/national_resonator.jpg",
          imageCredit: '写真: brad_bechtel / <a href="https://commons.wikimedia.org/wiki/File:National_prototype_Smith_%26_Young_style_1_metal_body_resonator_guitar_-_ResoSummit_2012_(2012-11-10_12.53.55_by_brad_bechtel).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Style O</strong>(20万円台〜) — 装飾的なエングレービングが特徴のヴィンテージ復刻、金属ボディ。",
            "<strong>Delphiシリーズ</strong>(10万円前後) — 比較的手頃な価格帯、木製ボディ。",
            "単一コーン式・トリコーン(3連コーン)式などコーン構造の違いで音のキャラクターを選べる。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "エレキギター・PA機材の発展により「音量を稼ぐための機械的な工夫」という当初の存在意義は薄れたが、その独特のサウンドキャラクターが音楽的な価値として今も評価され続けている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "リゾネーターギターという専門ジャンルにおいて、ほぼ唯一無二の伝統と専門性を持つブランド。ブルース/ブルーグラス系ミュージシャンにとって欠かせない選択肢の一つ。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "リゾネーターギターは電気増幅技術が普及する以前、バンド編成の中でギターの音量を確保するための「音響技術としての解決策」として生まれたという歴史的背景を持つ。",
          ],
        },
      ],
      quiz: [
        { q: "National Reso-Phonicが発明したギターの種類は?", choices: ["リゾネーターギター(金属コーン内蔵)", "エレキギター", "12弦アコースティック", "フレットレスギター"], answer: 0, explain: "金属製の共鳴コーンで機械的に音量を増幅するリゾネーターギターを発明した。" },
        { q: "リゾネーターギターが発明された当時の背景は?", choices: ["電気増幅技術が一般的でなかった時代の音量確保", "デジタル録音の普及", "エレキギターへの対抗", "アコースティック衰退への対策"], answer: 0, explain: "アンプが普及する前、機械的に音量を稼ぐ工夫として生まれた。" },
        { q: "リゾネーターギターが特に愛用される音楽ジャンルは?", choices: ["ブルース/ブルーグラスのスライドギター", "EDM", "クラシック", "雅楽"], answer: 0, explain: "スライド奏法との相性の良さから、この分野の定番サウンドになっている。" },
        { q: "National Reso-Phonicとして再興されたのはいつか?", choices: ["1988年", "1927年", "1966年", "2007年"], answer: 0, explain: "1927年創業の事業が一度途絶え、1988年に再興された。" },
        { q: "National Reso-Phonicの代表モデルは?", choices: ["Style O", "J-45", "D-45", "SJ-200"], answer: 0, explain: "装飾的なエングレービングが特徴のStyle Oがヴィンテージ復刻として知られる。" },
      ],
    },
    {
      id: "recording_king",
      order: 45,
      title: "Recording King",
      category: "アコースティックギター",
      hook: "百貨店のプライベートブランドとして生まれたギターが、90年経って「本気のブルーグラス機材」として復活した話。",
      image: "recording_king_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1930年代、アメリカの通信販売百貨店Montgomery Wardのプライベートブランドとして誕生。当時は複数のメーカー(一部Gibsonが製造を請け負ったことも)が製造を担っていた。",
            "その後ブランドは長らく休眠していたが、近年になって「ヴィンテージ・ブルーグラス機材の再現」に特化したブランドとして復活を遂げた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "1930〜40年代のヴィンテージ・ブルーグラス/ブルース系アコースティックギターの設計・音作りを強く意識したラインナップが特徴。同ブランドはバンジョーやマンドリンなど、ブルーグラス編成に必要な楽器群も幅広く手がけている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/recording_king_guitar.jpg",
          imageCredit: '写真: Matanao / <a href="https://commons.wikimedia.org/wiki/File:Recording_king_headstock.JPG" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 3.0)',
          paragraphs: [
            "<strong>RD/RDシリーズ</strong>(5〜10万円台) — ドレッドノート型のヴィンテージ系。",
            "<strong>Voyagerシリーズ(バンジョー)</strong>",
            "海外生産による手頃な価格ながら、ヴィンテージらしい仕様(V字ネックシェイプ等)にこだわった作り。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "百貨店プライベートブランドという成り立ちから、ヴィンテージ愛好家向けの専門ブランドへと生まれ変わった、楽器業界でも珍しい「ブランドの再定義」の成功例とされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "National Reso-Phonic同様、特定ジャンル(ブルーグラス)に特化した専門ブランドとして、ヴィンテージ志向のミュージシャンから支持を集めている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "1930年代当時、Recording King印のギターの一部を実際にGibsonが製造していたという経緯があり、ヴィンテージコレクターの間ではこの「隠れGibson」個体が特に珍重されることがある。",
          ],
        },
      ],
      quiz: [
        { q: "Recording Kingが誕生した当初の成り立ちは?", choices: ["通信販売百貨店のプライベートブランド", "独立系luthierの工房", "航空宇宙企業の一部門", "レコード会社の直営ブランド"], answer: 0, explain: "1930年代、Montgomery Wardのプライベートブランドとして誕生した。" },
        { q: "1930年代当時、Recording Kingの一部モデルを製造していたメーカーは?", choices: ["Gibson", "Fender", "Yamaha", "Martin"], answer: 0, explain: "一部モデルをGibsonが製造していたとされ、コレクターに珍重される。" },
        { q: "現在のRecording Kingが特化しているジャンルは?", choices: ["ヴィンテージ・ブルーグラス機材の再現", "エレキギターのメタル向け機材", "電子ドラム", "クラシックギター専業"], answer: 0, explain: "1930〜40年代のブルーグラス/ブルース系設計を強く意識している。" },
        { q: "Recording Kingが手がける楽器として正しいのは?", choices: ["ギターに加えバンジョー・マンドリンも展開", "ギターのみで他は一切扱わない", "ドラムセットのみ", "シンバルのみ"], answer: 0, explain: "ブルーグラス編成に必要な楽器群を幅広く手がけている。" },
        { q: "Recording Kingと同様、専門ジャンルに特化したブランドは?", choices: ["National Reso-Phonic", "Fender", "Ibanez", "Zildjian"], answer: 0, explain: "National Reso-Phonicもリゾネーターギターという専門分野に特化している。" },
      ],
    },
    {
      id: "ludwig",
      order: 46,
      title: "Ludwig",
      category: "ドラム",
      hook: "リンゴ・スターがテレビで叩いた1台のドラムセットが、会社の運命を変えた話。",
      image: "ludwig_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1909年、アメリカ・シカゴでWilliam F. Ludwig Sr.が設立。創業初期の看板発明が「バスドラムペダル」の実用化で、これによりドラマー1人でバスドラムとその他の太鼓を同時に演奏する現代的なドラムセットのスタイルが可能になったとされる。",
            "1964年、The BeatlesがアメリカのTV番組『エド・サリヴァン・ショー』に出演した際、Ringo StarrがLudwig製ドラムセット(オイスターブラックパールのSuper Classic、通称「ダウンビート」キット)を使用していたことが全米で放映され、爆発的な売上増(いわゆる「リンゴ効果」)を記録した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "特に有名なのがスネアドラム「Supraphonic(LM402)」。アルミニウム製シェルによる、コーン(角のような)響きと乾いたクラック感を持つ音が特徴で、レコーディング史上最も多く録音されたスネアドラムの一つとされている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/ludwig_drums.jpg",
          imageCredit: '写真: Eden, Janine and Jim / <a href="https://commons.wikimedia.org/wiki/File:Ringo_Starr%27s_Ludwig_Downbeat_Four-piece_drum_set_with_cymbals_(1963)_-_Play_It_Loud._MET_(2019-05-13_18.37.59_by_Eden,_Janine_and_Jim).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Supraphonic LM402</strong>(3〜8万円台) — アルミシェルスネア。",
            "<strong>Black Beauty</strong>(3〜8万円台) — 真鍮製スネア、より重く太い音。",
            "<strong>Classic Maple</strong>(15〜40万円台) — ヴィンテージ系メイプルシェルのドラムセット。",
            "<strong>Breakbeats</strong>(15〜40万円台) — コンパクトキット、都市部の宅練習にも人気。",
            "ロゴのScript(筆記体)ロゴは、実はRingo Starrのキット用に特別デザインされたものが、後に同社全体の標準ロゴとして定着した経緯がある。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "複数回の資本移動を経て、現在は管楽器大手Conn-Selmerグループ(Steinway Musical Instruments傘下)の一部として運営されている。老舗ブランドながら、大手楽器グループの傘下でブランド運用される典型的な例。",
          ],
        },
        {
          heading: "業界内でのポジション",
          image: "compare_drums.png",
          paragraphs: [
            "「ロック創成期の音」を象徴するブランドとして、Pearl、Tama、DWといった後発の日本・アメリカブランドと対比される。特にヴィンテージ・オールドスクールなロック/ジャズサウンドの基準として今も参照され続けている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Ringo Starr自身は数多くのLudwigキットを所有・使用してきたが、中でもエド・サリヴァン・ショー出演時のキットは音楽史上最も有名なドラムセットの一つとしてオークション等でも高額取引の対象になっている。",
          ],
        },
      ],
      quiz: [
        { q: "Ludwigが創業初期に実用化した発明は?", choices: ["バスドラムペダル", "電子ドラム", "メッシュヘッド", "カーボンファイバーシェル"], answer: 0, explain: "バスドラムペダルの実用化が、現代的なドラムセットの演奏スタイルを可能にした。" },
        { q: "1964年のBeatlesのTV出演で使われ「リンゴ効果」を生んだブランドは?", choices: ["Ludwig", "Pearl", "Tama", "DW"], answer: 0, explain: "Ringo StarrのLudwig製ドラムセットがTV放映され爆発的な売上増を記録した。" },
        { q: "Ludwigの代表的なスネアドラムは?", choices: ["Supraphonic(LM402)", "Black Panther", "Iron Cobra", "Starclassic"], answer: 0, explain: "アルミシェルのSupraphonicは史上最も多く録音されたスネアの一つとされる。" },
        { q: "Ludwigの筆記体ロゴの由来は?", choices: ["Ringo Starrのキット用に特別デザインされた", "創業者の直筆サインをそのまま使用", "1900年代の広告デザインの流用", "特に由来は不明"], answer: 0, explain: "Ringoのキット用ロゴが、後に会社全体の標準ロゴとして定着した。" },
        { q: "現在のLudwigが属するグループは?", choices: ["Conn-Selmer(Steinway傘下)", "Yamaha", "Fender", "独立資本を維持"], answer: 0, explain: "管楽器大手Conn-Selmerグループの一部として運営されている。" },
      ],
    },
    {
      id: "pearl",
      order: 47,
      title: "Pearl",
      category: "ドラム",
      hook: "もともとドラム専業ではなかった日本の会社が、ハードウェア(金具)の発明力で世界最大級のドラムメーカーになった話。",
      image: "pearl_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1946年、日本・千葉で創業。当初は家具・金属加工など周辺分野から出発し、後にドラム製造に軸足を移していった経緯を持つ。",
            "シェル(太鼓の胴)そのものだけでなく、スタンドやペダルといった「ハードウェア」の技術開発に強みを持ち続けてきたことが、同社の一貫した特徴になっている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "上位ラインMasterworks/Referenceシリーズは、シェルの素材・厚み・プライ数(積層数)を細かく選べるカスタム性の高さが特徴。ジャンルを問わない汎用性の高いチューニングのしやすさが評価されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Masterworks</strong>(50万円超) — 完全カスタムオーダーのドラムセット。",
            "<strong>Reference</strong>(20〜30万円台) — 準カスタム。",
            "<strong>Export</strong>(5〜10万円台) — 普及価格帯の定番。",
            "<strong>Eliminatorシリーズ(ペダル)</strong> — ダブルペダル/メタル系ドラマーに人気。",
            "マーチング(吹奏楽・パレード用)打楽器や教育市場向け製品も幅広く手がける。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "生産量の面で世界最大級のドラムメーカーの一つとされ、学校教育向け楽器や吹奏楽用マーチング楽器市場でも強い存在感を持つ。プロ向けの高付加価値製品と、教育市場向けの量産製品を両輪で展開するビジネスモデルが特徴。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "同じ日本発のTama、アメリカのDWと直接競合する。Pearlは特にハードウェア(スタンド・ペダル)の信頼性と、価格帯の幅広さ(普及機からプロ向けまで)で強みを発揮しているとされる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "吹奏楽部・マーチングバンド向けの打楽器市場でも大きなシェアを持っており、日本の学校教育現場でPearl製品に触れたことがある人は非常に多いとされる。",
          ],
        },
      ],
      quiz: [
        { q: "Pearlの創業国はどこか?", choices: ["日本", "アメリカ", "ドイツ", "イギリス"], answer: 0, explain: "1946年、日本・千葉で創業した。" },
        { q: "Pearlが伝統的に強みを持つとされる分野は?", choices: ["シェルの素材開発のみ", "スタンド・ペダルなどハードウェア開発", "電子ドラム専業", "シンバル製造専業"], answer: 1, explain: "ハードウェア(金具)の技術開発に一貫して強みを持ってきた。" },
        { q: "Pearlのダブルペダルで人気のシリーズは?", choices: ["Eliminator", "Iron Cobra", "5000シリーズ", "Speed Cobra"], answer: 0, explain: "Eliminatorシリーズはメタル系ドラマーにも人気のペダル。" },
        { q: "Pearlが強い存在感を持つ市場として正しいのは?", choices: ["学校教育向け/マーチング楽器市場", "航空機部品市場", "自動車オーディオ市場", "映画音響機材市場"], answer: 0, explain: "教育市場・マーチングバンド向け打楽器でも大きなシェアを持つ。" },
        { q: "Pearlと直接競合する日本発のドラムブランドは?", choices: ["Tama", "Ludwig", "DW", "Zildjian"], answer: 0, explain: "同じ日本発のTamaと市場で直接競合している。" },
      ],
    },
    {
      id: "tama",
      order: 48,
      title: "Tama",
      category: "ドラム",
      hook: "ギターブランドIbanezと「実は同じ会社」という、意外と知られていない繋がりの話。",
      image: "tama_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "Ibanezと同じく星野楽器(Hoshino Gakki)グループのドラムブランドとして1974年頃に確立(前身のブランド展開はそれ以前から存在)。ギターブランドとドラムブランドを同一グループが展開しているという、他社にはあまり見られない構造を持つ。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Superstarシリーズはバランスの取れた汎用性の高いミドルクラスの定番として長年支持されてきた。上位ラインStarclassicはシェル素材(メイプル、バーチ、ベルベットバブアなど)の選択肢の幅広さで知られる。",
            "ハードウェア面では「Iron Cobra」ペダルシリーズが特に有名で、耐久性とスピードの両立を武器にメタル/ハードロック系ドラマーから絶大な支持を得てきた。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/tama_drums.jpg",
          imageCredit: '写真: Kenny Jolt / <a href="https://commons.wikimedia.org/wiki/File:Bsy_boredsuburbanyouths_redmenace.JPG" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 3.0)',
          paragraphs: [
            "<strong>Starclassic</strong>(20〜40万円台) — 上位。メイプル/バーチ/ベルベットバブア等シェル素材選択可。",
            "<strong>Superstar</strong>(10万円台) — 定番。",
            "<strong>Imperialstar</strong>(5〜8万円台) — 入門。",
            "<strong>Iron Cobraペダル</strong>(1万円台後半〜)",
            "<strong>Speed Cobraペダル</strong> — より軽量・高速志向の後継。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "Ibanezと共通の親会社を持つことで、木材調達・工場設備など一部リソースを共有できる規模のメリットを持つとされる。ギター/ドラム両方の楽器ブランドを1グループで展開する多角化戦略の成功例の一つ。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Pearl・DWと並ぶ「ビッグ3」的な存在として、メタル/ハードロック系ドラマーからの支持が特に厚い。ペダルの信頼性・スピードという一点で強いブランドイメージを確立している。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Ibanez(ギター)とTama(ドラム)が同じ星野楽器グループであることは、ギタリストとドラマー双方に意外と知られていない豆知識としてしばしば語られる。",
          ],
        },
      ],
      quiz: [
        { q: "Tamaと同じ親会社を持つギターブランドは?", choices: ["Ibanez", "Fender", "PRS", "Rickenbacker"], answer: 0, explain: "TamaとIbanezはともに星野楽器(Hoshino Gakki)グループのブランド。" },
        { q: "Tamaの人気ペダルシリーズは?", choices: ["Iron Cobra", "Eliminator", "5000シリーズ", "DW9000"], answer: 0, explain: "Iron Cobraは耐久性とスピードで特に評価されるペダルシリーズ。" },
        { q: "Tamaの上位ドラムラインの名称は?", choices: ["Starclassic", "Masterworks", "Classic Maple", "Reference"], answer: 0, explain: "Starclassicはシェル素材選択の幅広さで知られる上位ライン。" },
        { q: "Tamaが特に支持を集めてきたジャンルのドラマー層は?", choices: ["メタル/ハードロック系", "クラシック専業", "民族音楽専業", "アンビエント専業"], answer: 0, explain: "ペダルの信頼性・スピードからメタル/ハードロック系に強い支持がある。" },
        { q: "Tamaのドラム事業が確立された年代は?", choices: ["1970年代", "1900年代初頭", "2000年代", "1950年代"], answer: 0, explain: "1974年頃に現在のブランド展開が確立されたとされる。" },
      ],
    },
    {
      id: "dw",
      order: 49,
      title: "DW (Drum Workshop)",
      category: "ドラム",
      hook: "ドラム教室の講師が「もっと良いペダルが欲しい」と作り始めた部品が、最高級ドラムブランドの土台になった話。",
      image: "dw_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1972年、アメリカ・カリフォルニアでDon Lombardiがドラム教室(レッスンスタジオ)兼ショップとして創業。当初は楽器製造業ではなく、教育・販売業からスタートした点が他の老舗ブランドと異なる。",
            "1980年代にオリジナルのバスドラムペダル(5000シリーズ)を開発したことをきっかけに製造業へ本格参入し、その後フルセットのドラム製造(カスタムショップ)へと事業を拡大していった。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "「カスタムショップ」を掲げ、シェルの木材・厚み・仕上げを顧客ごとに細かくオーダーできる体制を特徴とする。VLT(Very Low Timbre、低音重視のシェル接着技術)などの独自加工技術により、シェルそのものの響きを精密にコントロールする設計思想を持つ。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/dw_drums.jpg",
          imageCredit: '写真: Angel Ramos G / <a href="https://commons.wikimedia.org/wiki/File:3_Doors_Down_DW_Drum-kits_-_HRC_Punta_Cana.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>Collector's Series</strong>(50万円超) — 最上位カスタムライン。VLT加工・SoftWood Technology等の独自仕上げ選択可。",
            "<strong>Performance Series</strong>(20万円前後) — 中位。",
            "<strong>5000シリーズ(ペダル)</strong>(1〜3万円台) — チェーンドライブ/ベルトドライブ等、駆動方式を選べる先駆的な設計。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "ドラムブランドの中でも最高価格帯に位置づけられる「カスタムショップ」路線を貫いており、ギターで言えばPRSやカスタムショップ専業ブランドに近いポジションにある。セッション/ツアーミュージシャンなどプロ層からの支持が厚い。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Pearl、Tamaという日本勢に対する「アメリカ製高級ブランド」の代表格。ペダルの駆動方式(チェーン/ベルト/直結)を選べる先駆的な設計は、後に他社のペダル開発にも大きな影響を与えたとされる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "DWはドラム本体だけでなく、ペダルの駆動方式そのものの選択肢を広げた点で「ドラムハードウェアの進化」に大きく貢献したブランドとして評価されている。",
          ],
        },
      ],
      quiz: [
        { q: "DWは創業当初どのような事業から始まったか?", choices: ["ドラム教室兼ショップ", "レコード会社", "楽器の輸出入商社", "ラジオ局"], answer: 0, explain: "1972年にドラム教室兼ショップとして創業し、後に製造業へ参入した。" },
        { q: "DWが製造業参入のきっかけとした製品は?", choices: ["バスドラムペダル(5000シリーズ)", "スネアドラム", "シンバル", "電子ドラムパッド"], answer: 0, explain: "オリジナルのバスドラムペダル開発をきっかけに製造業へ本格参入した。" },
        { q: "DWの事業スタイルとして知られるのは?", choices: ["カスタムショップによる細かなオーダー対応", "完全な自動化のみによる大量生産", "廉価版のみの展開", "電子楽器専業への転換"], answer: 0, explain: "顧客ごとに木材・仕上げを選べるカスタムショップ路線が特徴。" },
        { q: "DWのペダル開発が業界に与えた影響として正しいのは?", choices: ["駆動方式の選択肢を広げ他社にも影響を与えた", "ペダル自体を廃止する流れを作った", "電動ペダルの標準化", "無音ペダルの開発"], answer: 0, explain: "チェーン/ベルト等の駆動方式を選べる設計が後のペダル開発に影響を与えた。" },
        { q: "DWの市場での位置づけとして正しいのは?", choices: ["最高価格帯のアメリカ製カスタムブランド", "最安価格帯の入門ブランド", "電子ドラム専業ブランド", "シンバル専業ブランド"], answer: 0, explain: "ドラム業界の中でも最高価格帯に位置づけられるブランドとされる。" },
      ],
    },
    {
      id: "yamaha_drums",
      order: 50,
      title: "Yamaha (ドラム)",
      category: "ドラム",
      hook: "スタジオミュージシャンが「録音の基準」として選び続ける、日本製ドラムの堅実さの話。",
      image: "yamaha_drums_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "総合楽器メーカーYamahaのドラム部門。ギター/ベース同様、量産技術力と品質管理の高さを武器に、プロのレコーディング現場からも高い信頼を得てきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "上位ラインRecording Customは、その名の通りスタジオレコーディング向けに設計されており、癖の少ない素直な鳴りで「どんなジャンルにも合わせやすい基準機」として評価されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/yamaha_drum_kit.jpg",
          imageCredit: '写真: Bookcase72 / <a href="https://commons.wikimedia.org/wiki/File:Yamaha_DTXPRO_Module.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>Recording Custom</strong>(20万円台〜) — 上位、スタジオ向け。",
            "<strong>Stage Custom</strong>(10万円前後) — 中位。",
            "<strong>Rydeen</strong>(5〜7万円台) — 入門帯。",
            "上位機ほどシェルの真円精度・厚み管理が緻密になり、それが「録音向き」の均一な鳴りにつながっている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "セッションドラマーのSteve Gaddら著名アーティストとの関係を長年築いており、「派手さより信頼性」という評価軸で世界的なシェアを確保している。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Pearl・Tamaと並ぶ日本発のドラムブランド御三家の一角。特にレコーディング/スタジオワークの現場での支持が厚い。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Yamahaのドラムは同社のギター/ベース/オーディオ機器と同じ品質管理体制のもとで作られており、グループ全体の「堅実さ」というブランドイメージを共有している。",
          ],
        },
      ],
      quiz: [
        { q: "Yamahaのドラム上位ラインの名称は?", choices: ["Recording Custom", "Starclassic", "Masterworks", "Collector's Series"], answer: 0, explain: "スタジオレコーディング向けに設計されたRecording Customが上位ラインとして知られる。" },
        { q: "Yamahaドラムが特に支持されている現場は?", choices: ["レコーディング/スタジオワーク", "野外フェスのみ", "民族音楽の現場のみ", "電子音楽制作のみ"], answer: 0, explain: "癖の少ない素直な鳴りがスタジオワークで評価されている。" },
        { q: "Yamahaと並ぶ日本発ドラムブランド御三家とされるのは?", choices: ["Pearl・Tama", "Ludwig・DW", "Sonor・Premier", "Zildjian・Sabian"], answer: 0, explain: "Pearl・Tamaと並び日本発のドラムブランド御三家とされる。" },
        { q: "Yamahaドラムの評価軸として正しいのは?", choices: ["派手さより信頼性・堅実さ", "極端な個性の強さ", "世界最安値であること", "電子ドラム専業であること"], answer: 0, explain: "総合楽器メーカーとしての品質管理体制による堅実さが評価されている。" },
        { q: "Yamahaのドラムと関係が深いセッションドラマーは?", choices: ["Steve Gadd", "Ringo Starr", "Charlie Watts", "Cozy Powell"], answer: 0, explain: "Steve Gaddら著名ドラマーとの長年の関係で知られる。" },
      ],
    },
    {
      id: "sonor",
      order: 51,
      title: "Sonor",
      category: "ドラム",
      hook: "150年近い歴史を持つドイツの精密機械工学が、そのままドラムの音になった話。",
      image: "sonor_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1875年、ドイツで創業。ヨーロッパの打楽器製造史における最も古く重要なブランドの一つで、ジャズ・オーケストラ・ロックと幅広いジャンルで長年支持されてきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "ドイツ的な精密機械工学に基づくハードウェア設計と、シェル(胴)の音響設計の緻密さで知られる。上位ラインSQ2はカスタムオーダーによる木材・サイズ・金具の細かな選択が可能で、演奏者ごとの理想の音を追求できる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/sonor_drums.jpg",
          imageCredit: '写真: Stephan Czuratis (Jazz-face) / <a href="https://commons.wikimedia.org/wiki/File:2006-07-06_drum_set.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.5)',
          paragraphs: [
            "<strong>SQ2</strong>(30万円超) — フルカスタムオーダー。木材・サイズ・金具を個別選択。",
            "<strong>Signature Series</strong>(20万円台) — 準カスタム。",
            "<strong>AQ2</strong>(10万円台) — 中位。",
            "ヨーロッパらしい多様なラッカー仕上げのバリエーションも特徴。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "ヨーロッパ市場を中心に、特にジャズ/オーケストラ系の演奏家から根強い支持を得ており、Ludwig・Pearlとは異なる「ヨーロッパの精密さ」というブランドイメージを保っている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "ヨーロッパ発の老舗ドラムブランドとして、アメリカ発のLudwig/DW、日本発のPearl/Tamaとは異なる文化的背景を持つ第三極として位置づけられる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "150年近い歴史を持つ企業でありながら、現在もカスタムオーダー(SQ2)という個別対応を続けている点は、老舗ながら顧客ごとの要望に応え続ける姿勢の表れとされる。",
          ],
        },
      ],
      quiz: [
        { q: "Sonorの創業年はいつか?", choices: ["1875年", "1902年", "1946年", "1972年"], answer: 0, explain: "1875年、ドイツで創業した老舗ブランド。" },
        { q: "Sonorのフルカスタムオーダーラインは?", choices: ["SQ2", "Collector's Series", "Starclassic", "Masterworks"], answer: 0, explain: "SQ2は木材・サイズ・金具を細かく選べるカスタムオーダーラインとして知られる。" },
        { q: "Sonorが強い支持を得ている音楽ジャンルは?", choices: ["ジャズ/オーケストラ系", "EDM専業", "雅楽専業", "レゲエ専業"], answer: 0, explain: "ジャズ・オーケストラを中心に長年支持されてきた。" },
        { q: "Sonorが位置づけられる立ち位置は?", choices: ["ヨーロッパ発の老舗という第三極", "日本発ブランドの一角", "アメリカ発のカスタムショップ系", "電子ドラム専業"], answer: 0, explain: "アメリカ・日本発のブランドとは異なる文化的背景を持つ存在とされる。" },
        { q: "Sonorが評価されている設計面の特徴は?", choices: ["ドイツ的な精密機械工学に基づくハードウェア", "極端に軽量な素材のみの使用", "電子回路の内蔵", "同軸ピックアップ"], answer: 0, explain: "精密なハードウェア設計とシェルの音響設計の緻密さで知られる。" },
      ],
    },
    {
      id: "gretsch_drums",
      order: 52,
      title: "Gretsch (ドラム)",
      category: "ドラム",
      hook: "同じ社名なのに、ギター部門とは全くの別会社が運営している「もう一つのGretsch」の話。",
      image: "gretsch_drums_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "ギターブランドのGretschと起源は同じ1883年創業の会社だが、現在はギター部門(Fenderがライセンス運営)とドラム部門が別々の企業によって運営されている。ドラム部門は2012年よりDW(Drum Workshop)が所有している。",
            "1950〜60年代の「ラウンドバッジ(丸いエンブレム)」期のヴィンテージキットは特に評価が高く、ジャズ〜ロックの幅広いジャンルで愛用されてきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "「Gretschサウンド」と呼ばれる、深みのある温かいシェルの鳴りが特徴とされる。The Rolling StonesのCharlie Wattsが長年Gretschドラムを愛用していたことでも知られる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>USA Custom</strong>(30万円超) — 上位、アメリカ製シェル。",
            "<strong>Catalinaシリーズ</strong>(10万円前後) — 中位、海外生産。",
            "<strong>Broadkasterシリーズ</strong> — ヴィンテージ復刻、ラウンドバッジ期の意匠を再現。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "同一ブランド名でギター部門とドラム部門が全く別の企業に運用されているという珍しい構造は、複数回の事業売却・再編を経てきたGretschというブランドの歴史そのものを物語っている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Ludwigと並ぶヴィンテージ・ロック/ジャズドラムサウンドの代表格。DW傘下となったことで、製造技術面でのアップデートも進んでいる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Charlie Watts(The Rolling Stones)は生涯を通じてGretschドラムへの愛用を貫いたことで知られ、ロック史における「渋いドラムサウンド」の象徴として語られることが多い。",
          ],
        },
      ],
      quiz: [
        { q: "現在Gretschのドラム部門を所有しているのは?", choices: ["DW(Drum Workshop)", "Fender", "Yamaha", "独立資本を維持"], answer: 0, explain: "2012年よりDWがGretschのドラム部門を所有している。" },
        { q: "Gretschドラムを長年愛用したロックドラマーは?", choices: ["Charlie Watts(The Rolling Stones)", "Ringo Starr", "Cozy Powell", "Keith Moon"], answer: 0, explain: "Charlie Wattsが生涯Gretschドラムへの愛用を貫いたことで知られる。" },
        { q: "Gretschドラムのヴィンテージ期を象徴する通称は?", choices: ["ラウンドバッジ期", "ゴールドラベル期", "ブルーノート期", "レッドスター期"], answer: 0, explain: "1950〜60年代の丸いエンブレムのついたキットが特に評価される。" },
        { q: "現在のGretschギター部門を運営しているのは?", choices: ["Fender", "DW", "Gibson", "Yamaha"], answer: 0, explain: "ギター部門はFenderがライセンスで運営し、ドラム部門とは別企業体制。" },
        { q: "「Gretschサウンド」と呼ばれる特徴は?", choices: ["深みのある温かいシェルの鳴り", "極端に硬く冷たい響き", "電子音源のような無機質さ", "無音に近い静けさ"], answer: 0, explain: "深みと温かみのあるシェルの鳴りがGretschサウンドとされる。" },
      ],
    },
    {
      id: "mapex",
      order: 53,
      title: "Mapex",
      category: "ドラム",
      hook: "台湾/中国の楽器グループが、「価格の割に本格的」というポジションで一気にシェアを伸ばした話。",
      image: "mapex_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "楽器製造グループKHS Musical Instrumentsが展開するドラムブランド。台湾・中国での生産体制を背景に、ミドルクラス〜プロ向けまで幅広い価格帯のドラムを展開している。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "上位ラインSaturnシリーズは、シェルの選択肢の豊富さと、モダンロック/メタル系にマッチするパンチの効いたサウンドで支持を得ている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Saturnシリーズ</strong>(15〜25万円台) — 上位、複数のシェル素材を選択可能。",
            "<strong>Armoryシリーズ</strong>(10万円前後) — 中位。",
            "<strong>Comet/Toriシリーズ</strong>(5万円前後) — 入門帯。",
            "上位機は日本製の高精度ハードウェアを採用している点も評価されている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "老舗ブランドに比べ後発ながら、生産体制の効率化によって「価格の割に本格的」というポジションを確立し、急速にシェアを伸ばしてきた。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Pearl・Tamaに続く「価格競争力のあるプロ向けドラム」の代表格として、特に若手〜中堅のロック/メタル系ドラマーから支持を集めている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "同じKHSグループには管楽器ブランドも含まれており、ドラム単体ではなく総合楽器グループとしての生産効率がMapexの価格競争力を支えている。",
          ],
        },
      ],
      quiz: [
        { q: "Mapexが属するグループは?", choices: ["KHS Musical Instruments", "Godin Guitarsグループ", "Cordoba Music Group", "Fenderグループ"], answer: 0, explain: "楽器製造グループKHS Musical Instrumentsが展開するブランド。" },
        { q: "Mapexの上位ラインは?", choices: ["Saturnシリーズ", "Recording Custom", "Collector's Series", "SQ2"], answer: 0, explain: "Saturnシリーズがシェル選択肢の豊富さで支持を得ている。" },
        { q: "Mapexが確立したポジションは?", choices: ["価格の割に本格的なプロ向けドラム", "世界最高価格帯専業", "電子ドラム専業", "シンバル専業"], answer: 0, explain: "生産体制の効率化により価格競争力のあるプロ向け製品を実現している。" },
        { q: "Mapexが特に支持を集めている層は?", choices: ["若手〜中堅のロック/メタル系ドラマー", "クラシック専業奏者のみ", "雅楽奏者のみ", "電子音楽専業者のみ"], answer: 0, explain: "モダンロック/メタル系にマッチするサウンドで支持されている。" },
        { q: "Mapexの生産拠点として正しいのは?", choices: ["台湾・中国", "ドイツのみ", "アメリカのみ", "カナダのみ"], answer: 0, explain: "台湾・中国での生産体制を背景に価格競争力を実現している。" },
      ],
    },
    {
      id: "premier",
      order: 54,
      title: "Premier",
      category: "ドラム",
      hook: "アメリカのLudwigに対抗した「イギリス代表」のドラムブランドの話。",
      image: "premier_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1922年、イギリスで創業。アメリカのLudwigに対する「イギリスを代表するドラムブランド」として、20世紀を通じて英国ロック/ポップスシーンを支えてきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "「Premier Resonator」等の独自シェル設計により、パンチのある明瞭なサウンドを追求してきた。The Whoの Keith Moon、Cozy Powell(Rainbow等)ら英国の著名ドラマーに愛用された歴史を持つ。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/premier_drums.jpg",
          imageCredit: '写真: Acabashi / <a href="https://commons.wikimedia.org/wiki/File:Premier_drum_kit_at_Two_Temple_Place,_Astor_House.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 4.0)',
          paragraphs: [
            "<strong>Genista</strong>(15〜25万円台) — 現行の上位ライン。",
            "<strong>Series XPK</strong> — 過去の代表機、ヴィンテージ市場で流通。",
            "<strong>Resonatorシリーズ</strong>(1960〜70年代) — 現在も英国ロックファンの間でコレクターズアイテムとして人気が高い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "1960〜70年代の英国ロック黄金期を支えたブランドとしての歴史的価値を持つが、近年は日本・アメリカブランドとの競争の中でかつてほどの市場シェアは持っていないとされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "「イギリスのLudwig」として、英国ロックの歴史を語る上で欠かせないブランド。ヴィンテージファンの間では今も高く評価されている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "The WhoのKeith Moonの破天荒なドラムセット破壊パフォーマンスも、当時のPremier製ドラムセットを舞台に行われていたことがしばしば語られる。",
          ],
        },
      ],
      quiz: [
        { q: "Premierの創業国はどこか?", choices: ["イギリス", "アメリカ", "ドイツ", "日本"], answer: 0, explain: "1922年、イギリスで創業した。" },
        { q: "Premierが「イギリスの」何と称されることがあるか?", choices: ["Ludwig", "Zildjian", "DW", "Fender"], answer: 0, explain: "アメリカのLudwigに対する英国代表ブランドとして語られる。" },
        { q: "Premierを愛用した英国の著名ドラマーは?", choices: ["Keith Moon(The Who)", "Ringo Starr", "Charlie Watts", "Neil Peart"], answer: 0, explain: "Keith MoonやCozy Powellらに愛用された歴史を持つ。" },
        { q: "Premierが支えたとされる時代は?", choices: ["1960〜70年代の英国ロック黄金期", "2000年代のEDMブーム", "1990年代のグランジブーム", "2010年代のK-POPブーム"], answer: 0, explain: "英国ロック黄金期を支えたブランドとしての歴史的価値を持つ。" },
        { q: "Premierの独自シェル設計技術の名称は?", choices: ["Premier Resonator", "SteadyClock", "TMT", "GLM"], answer: 0, explain: "「Premier Resonator」等の独自設計でパンチのある音を追求してきた。" },
      ],
    },
    {
      id: "slingerland",
      order: 55,
      title: "Slingerland",
      category: "ドラム",
      hook: "スウィングジャズ時代の帝王が愛用した1台が、今もヴィンテードラムの最高峰として語られる話。",
      image: "slingerland_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1912年、アメリカ・シカゴで創業。20世紀前半〜中盤、Ludwigと並ぶアメリカを代表するドラムブランドとして君臨した歴史を持つ。",
            "スウィングジャズ期の伝説的ドラマーGene Krupaが使用した「Radio King」モデルは、ジャズドラム史における最高峰の名器として今も語り継がれている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Radio Kingシリーズは単板(1枚の木材を曲げて作る)シェル構造を採用しており、通常の合板シェルよりも豊かで温かみのある鳴りを持つとされる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Radio King</strong>(中古市場で数十万円) — 最も著名なヴィンテージシリーズ。単板シェル。",
            "現行ブランドとしての新製品展開は限定的で、主にヴィンテージ市場での評価が中心。復刻版が期間限定で生産されることもある。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "最盛期にはLudwigと市場を二分する存在だったが、その後経営規模が縮小し、現在はヴィンテージ機材としての価値が中心のブランドとなっている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Ludwigと並ぶ「スウィング〜ジャズ時代のアメリカ」を象徴するヴィンテージブランド。現行製品よりもヴィンテージ個体そのものの評価で語られることが多い。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Gene KrupaのRadio Kingキットは、ジャズドラム史における最も有名なドラムセットの一つとして、今もコレクター・研究者の間で語り継がれている。",
          ],
        },
      ],
      quiz: [
        { q: "Slingerlandの創業都市はどこか?", choices: ["シカゴ", "ニューヨーク", "ロンドン", "東京"], answer: 0, explain: "1912年、アメリカ・シカゴで創業した。" },
        { q: "Gene Krupaが使用したSlingerlandの名器は?", choices: ["Radio King", "Recording Custom", "SQ2", "Starclassic"], answer: 0, explain: "スウィングジャズ期の名ドラマーGene KrupaがRadio Kingを愛用した。" },
        { q: "Radio Kingシリーズのシェル構造の特徴は?", choices: ["単板(1枚の木材を曲げた)構造", "金属製の合金シェル", "合成樹脂製シェル", "竹製シェル"], answer: 0, explain: "単板シェルにより通常の合板より豊かな鳴りを持つとされる。" },
        { q: "最盛期にSlingerlandと市場を二分したとされるブランドは?", choices: ["Ludwig", "Pearl", "Tama", "DW"], answer: 0, explain: "20世紀前半〜中盤、Ludwigと並ぶアメリカ代表ブランドだった。" },
        { q: "現在のSlingerlandの評価軸として正しいのは?", choices: ["主にヴィンテージ機材としての価値", "最新テクノロジーの先進性", "電子ドラム専業としての評価", "世界最大の販売台数"], answer: 0, explain: "現行製品よりヴィンテージ個体そのものの評価が中心となっている。" },
      ],
    },
    {
      id: "rogers",
      order: 56,
      title: "Rogers",
      category: "ドラム",
      hook: "「金具の発明」だけで一時代を築いた、知る人ぞ知るアメリカのドラムブランドの話。",
      image: "rogers_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカのドラムブランドで、1960〜70年代にハードウェア(金具)の技術革新で高く評価された。特にタムホルダーの「スウィヴォマティック(Swiv-O-Matic)」機構は、当時としては画期的な角度調整の自由度を実現した。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "シェル自体の評価も高く、パワフルなロックドラマーCarmine Appice(Vanilla Fudge等)らが愛用したことで知られる。ハードウェアの信頼性と合わせて、ハードロック期のドラムサウンドを支えた。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Dyna-Sonicシリーズ</strong>(ヴィンテージ市場で10万円前後) — スネアドラム、独特のスプリング機構を持つ。",
            "<strong>Holiday</strong> — 普及帯。",
            "現行の再興版として一部モデルが再生産されることもあるが、大半はヴィンテージ流通が中心。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "その後複数回オーナーが変わり、最盛期ほどの市場での存在感は失われたが、ヴィンテージハードウェアの設計思想は現在も高く評価されている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Ludwig・Slingerlandと並ぶ、アメリカのヴィンテージドラム黄金期を支えたブランドの一つ。特にハードウェア設計の革新性で歴史的に評価されている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Dyna-Sonicスネアの独特なスプリング付きスナッピー機構(裏面の響き線の機構)は、他のスネアには無い独特のスナッピーサウンドを生み出すことで知られる。",
          ],
        },
      ],
      quiz: [
        { q: "Rogersが1960〜70年代に評価された技術は?", choices: ["Swiv-O-Maticタムホルダー", "同軸スピーカー", "フロイドローズブリッジ", "グラファイトネック"], answer: 0, explain: "角度調整の自由度を実現したSwiv-O-Matic機構で高く評価された。" },
        { q: "Rogersを愛用したハードロック系ドラマーは?", choices: ["Carmine Appice", "Ringo Starr", "Charlie Watts", "Gene Krupa"], answer: 0, explain: "Vanilla FuddgeのCarmine Appiceらが愛用したことで知られる。" },
        { q: "Rogersの独自スネアシリーズは?", choices: ["Dyna-Sonicシリーズ", "Radio King", "Recording Custom", "Supraphonic"], answer: 0, explain: "独特のスプリング機構を持つDyna-Sonicシリーズが知られる。" },
        { q: "Rogersが評価されている主な分野は?", choices: ["ハードウェア設計の革新性", "電子回路の内蔵", "シンバル合金の開発", "アコースティックギター設計"], answer: 0, explain: "タムホルダーなどハードウェアの技術革新で歴史的に評価されている。" },
        { q: "Rogersと並ぶアメリカのヴィンテージドラム黄金期のブランドは?", choices: ["Slingerland", "Sonor", "Mapex", "Roland"], answer: 0, explain: "Ludwig・Slingerlandと並ぶ黄金期のアメリカンブランドとされる。" },
      ],
    },
    {
      id: "craviotto",
      order: 57,
      title: "Craviotto",
      category: "ドラム",
      hook: "「板を蒸気で曲げる」という手間だけにこだわり続ける、超少量生産の職人ブランドの話。",
      image: "craviotto_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカの職人Johnny Craviottoが手がける、超少量生産のブティックドラムブランド。通常の合板(プライシェル)ではなく、1枚の木材を蒸気で曲げて作る「スティームベント・ソリッドシェル」という伝統的かつ手間のかかる製法にこだわり続けている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "単板シェルは、合板シェルに比べて木材本来の響きがより豊かに残るとされ、暖かく芯のあるサウンドが特徴。1台ずつ職人の手作業で仕上げられるため、量産品にはない個体ごとの表情がある。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Solid Shellシリーズ</strong>(1台15〜30万円台) — スネアドラムが特に有名。木材の種類(メイプル、ウォルナット等)ごとに細かくラインが分かれている。",
            "フルセットよりも単品のスネアドラム販売が中心的な事業になっている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "生産数が極めて限られるため、価格はドラム業界でも最高水準に位置する。数量よりも技術の伝承・希少性を重視するブランド戦略を取っている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "DWの「カスタムショップ」路線をさらに突き詰めた、ドラム業界における究極のブティックブランドとして位置づけられている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "蒸気で木材を曲げる製法は、家具や造船技術にも通じる伝統的な木工技術であり、ドラム製造としては非常に手間のかかる希少な手法とされる。",
          ],
        },
      ],
      quiz: [
        { q: "Craviottoが採用するシェル製法は?", choices: ["蒸気で曲げた単板(ソリッドシェル)", "合板(プライシェル)のみ", "金属製シェルのみ", "合成樹脂シェル"], answer: 0, explain: "1枚の木材を蒸気で曲げるスティームベント製法にこだわっている。" },
        { q: "Craviottoが中心的に手がける製品は?", choices: ["単品のスネアドラム", "電子ドラム", "シンバルセット", "ギターアンプ"], answer: 0, explain: "フルセットよりスネアドラム単体の販売が中心的な事業になっている。" },
        { q: "Craviottoの生産規模の特徴は?", choices: ["極めて少量の手作業生産", "世界最大級の大量生産", "完全自動化された工場生産", "海外委託の量産"], answer: 0, explain: "職人による超少量生産で、数量より希少性を重視している。" },
        { q: "単板シェルが合板シェルと比べて評価される点は?", choices: ["木材本来の響きがより豊かに残る", "圧倒的に軽量になる", "全く音が出ない", "電池が必要になる"], answer: 0, explain: "合板に比べ木材本来の響きが豊かに残るとされる。" },
        { q: "Craviottoが位置づけられるブランド像は?", choices: ["ドラム業界における究極のブティックブランド", "最安価格帯の入門ブランド", "電子ドラム専業ブランド", "シンバル専業ブランド"], answer: 0, explain: "DWのカスタムショップ路線をさらに突き詰めた存在とされる。" },
      ],
    },
    {
      id: "sjc",
      order: 58,
      title: "SJC Drums",
      category: "ドラム",
      hook: "若い3人が始めたガレージ工房が、派手なカラーリングで新しい世代のドラマーの心をつかんだ話。",
      image: "sjc_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "2004年頃、アメリカで複数の若いビルダーによって設立された比較的新しいカスタムドラムブランド。老舗ブランドに比べ歴史は浅いが、SNS世代のロック/ポップパンク系ドラマーから急速に支持を集めた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "音作りの基本は伝統的なアメリカンシェル設計を踏襲しつつ、顧客が仕上げ・カラーリング・金具の組み合わせを自由にカスタムオーダーできる仕組みを大きな特徴としている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Custom Series</strong>(15〜25万円台) — 受注生産、カラーリング自由選択。",
            "<strong>Tour Series</strong>(10万円前後) — 既製品ライン。",
            "パステルカラーやグラフィティ調など、他ブランドにはない大胆な仕上げの選択肢が豊富。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "大手のような大規模工場を持たず、比較的小規模なカスタムビルダーとしてスタートしたが、SNSでの visibility(視認性の高いカラーリング)戦略により、若い世代への訴求に成功した新興ブランドの一例とされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Craviottoのような伝統工芸路線とは異なる、「見た目のカスタム性」を重視した現代的カスタムブランドの代表格。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "派手で個性的なカラーリングのドラムセットがSNS上で目を引きやすく、ライブ映像・写真映えを意識したブランディングが特徴的とされる。",
          ],
        },
      ],
      quiz: [
        { q: "SJC Drumsが設立されたのはいつ頃か?", choices: ["2004年頃", "1902年", "1946年", "1922年"], answer: 0, explain: "比較的新しい2000年代のカスタムドラムブランドである。" },
        { q: "SJC Drumsが大きな特徴としている点は?", choices: ["カラーリング・仕上げの自由なカスタムオーダー", "電子ドラム専業であること", "世界最古の歴史", "金属製シェル専業"], answer: 0, explain: "顧客が仕上げ・カラーリングを自由に選べる仕組みが特徴。" },
        { q: "SJC Drumsが特に支持を集めている層は?", choices: ["SNS世代のロック/ポップパンク系ドラマー", "クラシック専業奏者", "雅楽奏者", "電子音楽専業者"], answer: 0, explain: "若い世代のロック/ポップパンク系ドラマーから支持を集めてきた。" },
        { q: "SJC Drumsのブランディング戦略として正しいのは?", choices: ["視認性の高いカラーリングによるSNS訴求", "地味な単色仕上げのみの展開", "全く広告を行わない方針", "電子回路の充実のみを訴求"], answer: 0, explain: "SNS上で目を引くカラーリング戦略が特徴的とされる。" },
        { q: "SJC Drumsと対照的な「伝統工芸路線」のブランドは?", choices: ["Craviotto", "Roland", "Mapex", "Premier"], answer: 0, explain: "Craviottoは蒸気曲げの伝統技法にこだわる対照的な路線を取る。" },
      ],
    },
    {
      id: "ocdp",
      order: 59,
      title: "OCDP (Orange County Drum & Percussion)",
      category: "ドラム",
      hook: "有名バンドのドラマー本人が、自分の理想のドラムを追求するために始めたブランドの話。",
      image: "ocdp_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカ・カリフォルニアで設立された比較的小規模なカスタムドラムブランド。設立にはCheap TrickのドラマーBun E. Carlosや職人Johnny Craviottoら複数の関係者が関わったとされる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "手作業による丁寧なシェル製作にこだわり、大量生産ブランドにはない細やかな仕上げ・音響チューニングを特徴としている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Customシリーズ</strong>(1台10〜20万円台) — 受注生産中心。フルセットだけでなく単品スネアの受注も多い。",
            "顧客の要望に応じた木材・仕上げの組み合わせが可能。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "大規模な工場生産ではなく、小規模ながら質の高い製品作りにこだわる、ブティックドラムブランドの一つとして位置づけられている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Craviotto、SJCと並ぶアメリカの小規模カスタムドラムビルダーの一角として、コアなファン層に支持されている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "著名ドラマー自身がブランド設立に関わったという成り立ちは、演奏者目線での製品開発が反映されやすいというカスタムブランドならではの強みを象徴している。",
          ],
        },
      ],
      quiz: [
        { q: "OCDPの設立に関わったとされるドラマーは?", choices: ["Bun E. Carlos(Cheap Trick)", "Ringo Starr", "Charlie Watts", "Keith Moon"], answer: 0, explain: "Cheap TrickのBun E. Carlosらが設立に関わったとされる。" },
        { q: "OCDPの拠点はどこか?", choices: ["アメリカ・カリフォルニア", "ドイツ", "日本", "イギリス"], answer: 0, explain: "アメリカ・カリフォルニアで設立された小規模ブランド。" },
        { q: "OCDPの生産スタイルは?", choices: ["手作業による受注生産中心", "完全自動化の大量生産", "海外委託の量産のみ", "電子部品のみの製造"], answer: 0, explain: "小規模ながら丁寧な手作業での製作にこだわっている。" },
        { q: "OCDPと並ぶアメリカの小規模カスタムドラムビルダーは?", choices: ["Craviotto", "Yamaha", "Sonor", "Mapex"], answer: 0, explain: "CraviottoやSJCと並ぶ小規模カスタムビルダーの一角とされる。" },
        { q: "著名ドラマー自身がブランド設立に関わることの意義として語られるのは?", choices: ["演奏者目線での製品開発が反映されやすい", "広告費が不要になる", "電子部品調達が容易になる", "海外輸出が義務付けられる"], answer: 0, explain: "演奏者としての視点が製品開発に直接反映されやすいとされる。" },
      ],
    },
    {
      id: "roland_drums",
      order: 60,
      title: "Roland (電子ドラム)",
      category: "ドラム",
      hook: "「静かに練習したい」という切実な願いから、まったく新しい打楽器のジャンルが生まれた話。",
      image: "roland_drums_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "日本の電子楽器メーカーRolandは、シンセサイザー等で知られる一方、電子ドラムの分野でも「V-Drums」シリーズを展開し、この分野の事実上の標準を作ったブランドとされる。",
            "1990年代後半、メッシュ素材のヘッド(打面)を採用したV-Drumsが登場し、それまでのゴム製パッドに比べ生ドラムに近いスティックの跳ね返り(反発感)を実現、電子ドラムの実用性を大きく引き上げた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "内蔵音源による多彩な音色に加え、静音性(夜間・集合住宅でも練習しやすい)と、ヘッドフォンでの練習・PCへの録音のしやすさが最大の実用的価値とされる。近年はモデルによりアコースティックに迫る打感・トリガー精度を追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/roland_vdrums.jpg",
          imageCredit: '写真: Rob DiCaterino / <a href="https://commons.wikimedia.org/wiki/File:Electronic_drum_kit_Roland.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.5)',
          paragraphs: [
            "<strong>TD-17</strong>(10〜30万円台) — V-Drums中級モデル。",
            "<strong>TD-27/TD-50</strong>(10〜30万円台) — 上位、ハイブリッドキット構築も可能。",
            "<strong>SPD-SX</strong>(3〜6万円台) — サンプリングパッド、ライブでの効果音/オケ再生にも使われる。",
            "<strong>TM-2トリガーモジュール</strong> — 電子/生ハイブリッド用、太鼓の振動を検知して電子音を鳴らすトリガー機能を追加する製品。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "住宅環境の制約(騒音問題)が大きい都市部の音楽人口にとって、電子ドラムは「ドラムを始めるハードルを下げる」役割を果たしており、Rolandはこの市場をほぼ切り開いたパイオニアとされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "電子ドラムというジャンルにおいて、アコースティックドラムのPearl・Tama・DW等とは全く異なる市場を独自に確立している。近年はアコースティックとのハイブリッド運用(生ドラムにトリガーを追加する等)も一般的になっている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "SPD-SXのようなサンプリングパッドは、ドラマーが叩くだけで効果音・シンセフレーズなどをライブ中に再生できるため、近年のポップス/EDM系ライブで打楽器奏者の役割を大きく広げている。",
          ],
        },
      ],
      quiz: [
        { q: "Rolandの電子ドラムシリーズの名称は?", choices: ["V-Drums", "Starclassic", "Recording Custom", "SQ2"], answer: 0, explain: "V-Drumsシリーズが電子ドラム分野の事実上の標準を作った。" },
        { q: "1990年代後半にV-Drumsが採用した打面素材は?", choices: ["メッシュ素材", "純木製", "金属製", "ガラス製"], answer: 0, explain: "メッシュヘッドにより生ドラムに近い反発感を実現した。" },
        { q: "電子ドラムの実用的な最大の価値として語られるのは?", choices: ["静音性・練習のしやすさ", "アコースティックより大音量なこと", "調律が一切不要なこと", "重量が非常に重いこと"], answer: 0, explain: "夜間・住宅環境でも練習しやすい静音性が大きな価値とされる。" },
        { q: "Rolandのライブでよく使われるサンプリングパッドは?", choices: ["SPD-SX", "TD-27", "Iron Cobra", "Eliminator"], answer: 0, explain: "SPD-SXは効果音やオケ再生にライブで広く使われるパッド。" },
        { q: "Rolandの電子ドラムが切り開いた市場の特徴は?", choices: ["アコースティックとは異なる独自市場", "アコースティック市場を完全に置き換えた", "シンバル専業市場", "アコースティックギター市場"], answer: 0, explain: "アコースティックドラムメーカーとは異なる独自の市場を確立している。" },
      ],
    },
    {
      id: "zildjian",
      order: 61,
      title: "Zildjian",
      category: "シンバル",
      hook: "「金を作ろうとした錬金術師」が、間違って人類史上最も成功した合金を発明してしまった話。",
      image: "zildjian_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1623年、当時のオスマン帝国コンスタンティノープル(現イスタンブール)で、錬金術師Avedis Zildjian Iが創業。伝承によれば、彼は金を作ろうとする実験の過程で、銅と錫を独自の比率で配合した合金(通称「Zildjianの秘密」)を偶然発見し、これがシンバルに理想的な響きを持つ金属だったとされる。",
            "現存する家族経営企業としては世界最古級とされ、400年以上にわたり同族(Zildjian家)による経営が続いてきた。1920年代にAvedis Zildjian IIIがアメリカに移住し、現在はマサチューセッツ州ノーウェルに拠点を置く。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "合金の配合比率(銅約80%・錫約20%のB20ブロンズ)は代々一族の秘伝として厳重に管理されてきた。「Aシリーズ」(アメリカ製、明るく煌びやかな響き)と「Kシリーズ」(元々イスタンブール系の製法に由来する、より複雑で暗めの響き)という二大系統が、シンバルサウンドの基本的な語彙を形成している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/zildjian_cymbal.jpg",
          imageCredit: '写真: U.S. Navy (Mark Logico) / <a href="https://commons.wikimedia.org/wiki/File:US_Navy_110518-N-WP746-217_Musician_2nd_Class_Ed_William,_assigned_to_the_U.S._Pacific_Fleet_Band,_plays_the_cymbals_during_the_joint-service_rehea.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Public domain)',
          paragraphs: [
            "<strong>A Zildjian</strong>(1枚2〜4万円台) — 1900年代〜、明るいオールラウンド系。",
            "<strong>K Zildjian</strong>(2〜4万円台) — イスタンブール系譜の暗く複雑な響き。",
            "<strong>K Custom</strong>(2〜4万円台) — Kシリーズ派生、ジャズ〜フュージョン向けにモダン化。",
            "<strong>Planet Z / ZBTシリーズ</strong>(1万円前後) — 普及帯。",
            "<strong>K Constantinople</strong>(5万円超) — 最上位、職人による手作業比率が最も高い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "同族経営を長年維持しており、非公開企業として運営されている。400年という歴史そのものが最大のブランド資産であり、合金配合の秘伝性が今も製品の付加価値・神秘性の核になっている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "シンバル業界の頂点に立つブランドとして、後述のSabianや他の追随ブランド(Meinl、Paiste等)と比較される基準点的な存在。ドラマーにとって「Zildjianか否か」自体が一つの選択の軸になるほどの存在感を持つ。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "1970年代、経営を巡る一族内の対立から会社が分裂し、後述するSabian社が設立されるという「シンバル界の家族分裂劇」が起きている。同じ秘伝の合金知識を持つ兄弟が、それぞれ別のブランドで競合する異例の事態となった。",
          ],
        },
      ],
      quiz: [
        { q: "Zildjianが創業したのはどこの都市か?", choices: ["コンスタンティノープル(現イスタンブール)", "ロンドン", "ボストン", "パリ"], answer: 0, explain: "1623年、当時のオスマン帝国コンスタンティノープルで創業した。" },
        { q: "Zildjianの合金誕生にまつわる伝承として語られるのは?", choices: ["金を作ろうとした錬金術の実験から偶然生まれた", "軍需産業からの転用", "宇宙開発技術の応用", "陶芸の技術から派生した"], answer: 0, explain: "金を作ろうとする錬金術の実験過程で偶然発見されたと伝えられている。" },
        { q: "Zildjianの合金の基本配合とされるのは?", choices: ["銅約80%・錫約20%のB20ブロンズ", "純金", "アルミニウム合金", "ステンレス鋼"], answer: 0, explain: "B20ブロンズと呼ばれる銅・錫の配合が秘伝とされてきた。" },
        { q: "AシリーズとKシリーズの一般的な音の違いは?", choices: ["Aは明るく煌びやか、Kは暗く複雑", "Aは無音、Kは爆音", "両方とも全く同じ音", "Aは電子製品、Kはアナログ製品"], answer: 0, explain: "Aシリーズは明るい響き、Kシリーズはより複雑で暗めの響きとされる。" },
        { q: "1970年代のZildjian一族に起きた出来事は?", choices: ["経営を巡る対立から分裂しSabianが設立された", "会社が消滅した", "国有化された", "社名がSabianに完全変更された"], answer: 0, explain: "一族内の対立からRobert Zildjianが独立しSabianを設立した。" },
      ],
    },
    {
      id: "sabian",
      order: 62,
      title: "Sabian",
      category: "シンバル",
      hook: "400年続いた一族の「秘密」を持ったまま、兄と袂を分かった弟が、カナダで新しい会社を興した話。",
      image: "sabian_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1981年、Avedis Zildjian III の息子Robert Zildjianが、カナダ・ニューブランズウィック州メダクティックで設立。兄Armand Zildjianとの経営方針を巡る対立の末、Zildjian社を離れて独立したという経緯を持つ。",
            "社名「Sabian」は、Robertの3人の子供の名前(SArah、BIll、ANdyなど、頭文字を組み合わせた造語とされる)に由来する。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Zildjian一族由来の合金知識を土台にしながら、独自の製法・仕上げを開発。明るく抜けの良い「AA/AAX」シリーズと、より暗く複雑な「HH/HHX」シリーズという二大ラインは、ZildjianのA/K系統と類似した設計思想を持ちながら、明確に異なる個性を追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/sabian_cymbal.jpg",
          imageCredit: '写真: The United States Army Band / <a href="https://commons.wikimedia.org/wiki/File:VDC_2197_(34822470623).jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Public domain)',
          paragraphs: [
            "<strong>AA/AAXシリーズ</strong>(2〜4万円台) — 明るい系統、B20ブロンズ。",
            "<strong>HH/HHXシリーズ</strong>(2〜4万円台) — ヴィンテージ系の暗さ、手打ち工程を含む。",
            "<strong>B8シリーズ</strong>(1万円前後) — 青銅合金比率の異なる普及価格帯ライン。",
            "<strong>Artisanシリーズ</strong>(4〜6万円台) — 最上位、職人の手作業比率が高い。",
            "Neil Peart(Rush)らとのシグネチャーモデルも展開している。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "Zildjianとほぼ同じ市場・同じ価格帯で真っ向勝負を続けており、同族から分裂したブランド同士が数十年にわたり直接競合するという、楽器業界でも稀有なビジネス上の対立構造が続いている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Zildjianとほぼ同格のトップブランドとして扱われ、多くのプロドラマーが両社どちらかを選ぶ、あるいは併用するという構図が定着している。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "同じ350年以上の伝統ある合金知識の「正当な継承者」を自認する2つのブランドが、今も同じ市場で真っ向から競い合っているという構図は、楽器業界でも屈指のドラマチックな「家族劇」として語り継がれている。",
          ],
        },
      ],
      quiz: [
        { q: "Sabianの創業者は誰か?", choices: ["Robert Zildjian", "Armand Zildjian", "Avedis Zildjian I", "William Ludwig"], answer: 0, explain: "Avedis Zildjian IIIの息子Robert Zildjianが1981年に設立した。" },
        { q: "Sabianの創業国はどこか?", choices: ["カナダ", "アメリカ", "トルコ", "イギリス"], answer: 0, explain: "カナダ・ニューブランズウィック州メダクティックで設立された。" },
        { q: "「Sabian」という社名の由来として語られるのは?", choices: ["Robertの子供たちの名前の頭文字", "地名に由来する", "創業者の座右の銘", "特に意味のない造語"], answer: 0, explain: "3人の子供の名前の頭文字を組み合わせたとされる。" },
        { q: "SabianがZildjianと分裂した背景は?", choices: ["経営方針を巡る兄弟間の対立", "国家間の貿易摩擦", "特許侵害訴訟での敗訴", "工場の火災による解散"], answer: 0, explain: "兄Armand Zildjianとの経営方針を巡る対立が背景にあった。" },
        { q: "SabianとZildjianの現在の関係として正しいのは?", choices: ["同市場で真っ向から競合し続けている", "Sabianは既に廃業した", "両社は再合併した", "SabianはZildjianの下請けになった"], answer: 0, explain: "分裂後も数十年にわたり同じ市場で直接競合を続けている。" },
      ],
    },
    {
      id: "paiste",
      order: 63,
      title: "Paiste",
      category: "シンバル",
      hook: "トルコ式の「手打ち神話」に対して、スイスの精密工学で真っ向勝負を挑んだ会社の話。",
      image: "paiste_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "Paiste家によって興され、後にスイスを拠点に発展したシンバルメーカー。Zildjian/Sabianに代表される「トルコ系・手打ち」の伝統とは異なる、精密な製造工程による一貫した音作りを追求してきた。",
            "1971年発表の「2002」シリーズは、Led ZeppelinのJohn Bonham、Deep PurpleのIan Paiceら1970年代のロックドラマーに広く愛用され、ロック向けシンバルの代名詞的存在となった。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "トルコ系ブランドの複雑で暗い響きとは対照的に、明るく前に出る、パワフルなロック向けサウンドを得意とする。精密な製造管理により、同一モデル内での個体差が少ないことも特徴とされる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/paiste_cymbal.jpg",
          imageCredit: '写真: Stephan Czuratis (Jazz-face) / <a href="https://commons.wikimedia.org/wiki/File:2006-07-06_crash_paiste_16.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 2.5)',
          paragraphs: [
            "<strong>2002シリーズ</strong>(1枚2〜4万円台) — 1971年発表、ロック向けの定番。",
            "<strong>Signatureシリーズ</strong>(2〜4万円台) — モダンなジャズ〜フュージョン向け。",
            "<strong>Formula 602</strong> — 1960年代のヴィンテージ系、復刻ラインもあり。",
            "<strong>PSTXシリーズ</strong> — エフェクト系(トラッシュ、スプラッシュ等)に特化。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "「トルコ式の神秘性」を売りにする多くの競合とは異なるアプローチ(精密な製造管理・音響工学)でブランドを差別化してきた、業界でも独自のポジショニングを持つ企業。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Zildjian・Sabianの「トルコ系伝統」路線に対する、「ヨーロッパの精密工学」路線の代表格。特に1970〜80年代のロック/ハードロックシーンで大きな存在感を示した。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "John Bonham(Led Zeppelin)の重厚なドラムサウンドの一部は、Paiste 2002シリーズの明るく抜けの良いシンバルサウンドによって支えられていたとされる。",
          ],
        },
      ],
      quiz: [
        { q: "Paisteの1971年発表の代表シリーズは?", choices: ["2002シリーズ", "Aシリーズ", "Byzanceシリーズ", "K Custom"], answer: 0, explain: "2002シリーズはロックドラマーに広く愛用された代名詞的存在。" },
        { q: "Paisteを愛用したロックドラマーは?", choices: ["John Bonham(Led Zeppelin)", "Ringo Starr", "Charlie Watts", "Gene Krupa"], answer: 0, explain: "John BonhamやIan Paiceらが愛用したことで知られる。" },
        { q: "Paisteのアプローチとして正しいのは?", choices: ["精密な製造工程による一貫した音作り", "トルコ式の手打ちのみにこだわる", "電子音源の内蔵", "木製シンバルの開発"], answer: 0, explain: "Zildjian/Sabianの手打ち伝統とは異なる精密製造アプローチを取る。" },
        { q: "Paisteのサウンド傾向として語られるのは?", choices: ["明るく前に出るパワフルな音", "暗く複雑な響き", "無音に近い静けさ", "極端にこもった音"], answer: 0, explain: "トルコ系の暗い響きとは対照的な、明るく前に出る音が特徴。" },
        { q: "Paisteの拠点として関係が深い国は?", choices: ["スイス", "トルコ", "アメリカ", "日本"], answer: 0, explain: "スイスを拠点に発展したシンバルメーカーである。" },
      ],
    },
    {
      id: "meinl",
      order: 64,
      title: "Meinl",
      category: "シンバル",
      hook: "シンバルだけでなく、世界中の打楽器を1社でカバーする「パーカッションの総合商社」の話。",
      image: "meinl_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1951年、ドイツでReinhold Meinlが設立。シンバルだけでなく、カホン・コンガ・ボンゴなど世界中の民族打楽器も幅広く手がける総合パーカッションメーカーとして成長してきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "上位ラインByzanceは、トルコ式の伝統的な手打ち製法を採り入れつつ、ドイツ的な品質管理を組み合わせた設計。中位のClassics Customはモダンなロック/ポップス向けの扱いやすいサウンドを追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Byzanceシリーズ</strong>(1枚3〜6万円台) — 上位、伝統製法。",
            "<strong>Classics Customシリーズ</strong>(1〜2万円台) — 中位。",
            "<strong>HCS</strong>(5千円前後) — 入門帯。",
            "<strong>Headlinerシリーズ(カホン)</strong> — パーカッション製品で特に普及している。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "シンバル単体だけでなく世界中の打楽器を扱う総合力により、Meinlはドラムセット以外の音楽制作現場(ワールドミュージック、パーカッションアンサンブル等)でも高いシェアを持つ。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Zildjian・Sabianに次ぐ規模のシンバルブランドとして、特に「シンバル+その他打楽器」という総合力で他社と差別化している。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Meinlのカホン(箱型の打楽器)は、シンバルとは別の市場でアコースティック弾き語り系のパーカッション奏者にも広く普及している。",
          ],
        },
      ],
      quiz: [
        { q: "Meinlの創業国はどこか?", choices: ["ドイツ", "トルコ", "アメリカ", "イタリア"], answer: 0, explain: "1951年、ドイツでReinhold Meinlが設立した。" },
        { q: "Meinlが扱う製品範囲として正しいのは?", choices: ["シンバルに加え世界中の民族打楽器", "シンバル専業のみ", "ギターとベースのみ", "電子ドラム専業"], answer: 0, explain: "カホン・コンガ・ボンゴなど幅広い打楽器を手がける総合メーカー。" },
        { q: "Meinlの上位シンバルラインは?", choices: ["Byzanceシリーズ", "Kシリーズ", "AAXシリーズ", "HHシリーズ"], answer: 0, explain: "Byzanceシリーズが伝統製法を採り入れた上位ラインとして知られる。" },
        { q: "Meinlが広く普及させた打楽器の一つは?", choices: ["カホン", "ティンパニ", "マリンバ", "ハンドベル"], answer: 0, explain: "箱型打楽器カホンがアコースティック系奏者にも広く普及している。" },
        { q: "Meinlの業界内での位置づけは?", choices: ["Zildjian・Sabianに次ぐ規模のシンバルブランド", "最も歴史の浅い新興ブランド", "電子ドラム専業ブランド", "アコースティックギター専業ブランド"], answer: 0, explain: "シンバル+その他打楽器の総合力で規模を確立している。" },
      ],
    },
    {
      id: "istanbul_agop",
      order: 65,
      title: "Istanbul Agop",
      category: "シンバル",
      hook: "アメリカに渡らなかった「もう一つのZildjianの職人」が、イスタンブールで伝統を守り続けた話。",
      image: "istanbul_agop_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "創業者Agop Tomurcukは、かつてZildjian一族がアメリカへ拠点を移す以前、イスタンブールの工房で培われていた伝統的な手打ち製法の系譜に連なる職人とされる。Zildjianの主力がアメリカに移った後も、イスタンブールに残り伝統的な製法を守り続けた流れの中で設立されたブランド。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "1枚ずつ手作業で打ち出すことによる、複雑で暗く、倍音の多い「オールドKスタイル」の響きが特徴。ジャズドラマーから特に高い評価を得ている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>30th Anniversary</strong>(高価格帯) — 記念モデル。",
            "<strong>Xistシリーズ</strong>(1〜2万円台) — 比較的手頃。",
            "<strong>Traditionalシリーズ</strong>(2〜4万円台) — ジャズ向け、暗く複雑な響き。",
            "1枚ずつ音の個体差があるため、店頭での試打・選定が前提とされることが多い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "1枚ずつ手作業で仕上げるため大量生産には向かないが、その希少性・伝統性がむしろ高価格帯での付加価値になっている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "同じくイスタンブール系伝統を継ぐIstanbul Mehmet、Bosphorusと並ぶ「トルコ伝統派」の代表格。近代的なZildjian/Sabianの量産ラインとは異なる評価軸(職人の手仕事)で語られる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "Istanbul AgopとIstanbul Mehmetは、同じイスタンブールの伝統を汲みながらも別会社として競合しており、Zildjian/Sabianの分裂劇と似た構図がトルコのシンバル業界にも存在する。",
          ],
        },
      ],
      quiz: [
        { q: "Istanbul Agopの製法として特徴的なのは?", choices: ["1枚ずつの手作業による手打ち製法", "完全自動化の量産製法", "3Dプリンティング製法", "鋳造による一体成型"], answer: 0, explain: "伝統的な手打ち製法による複雑で暗い響きが特徴。" },
        { q: "Istanbul Agopが特に評価されているジャンルは?", choices: ["ジャズ", "EDM", "メタルのみ", "雅楽"], answer: 0, explain: "複雑で暗いオールドKスタイルの響きがジャズドラマーに評価されている。" },
        { q: "Istanbul Agopと並ぶイスタンブール系伝統ブランドは?", choices: ["Istanbul Mehmet", "Paiste", "Meinl", "Yamaha"], answer: 0, explain: "同じイスタンブールの伝統を汲むIstanbul Mehmetと並び称される。" },
        { q: "Istanbul AgopとZildjian一族の関係として語られるのは?", choices: ["アメリカに渡らなかった職人の系譜に連なる", "全く無関係の新興ブランド", "Zildjianの直営子会社", "Sabianの下請け企業"], answer: 0, explain: "Zildjianがアメリカに拠点を移す前のイスタンブールの伝統を継ぐとされる。" },
        { q: "Istanbul AgopとIstanbul Mehmetの関係は?", choices: ["同じ伝統を汲みながら競合する別会社", "同一企業の別ブランド名", "親会社と子会社の関係", "完全に無関係で接点がない"], answer: 0, explain: "Zildjian/Sabianと似た分裂・競合の構図がトルコにも存在する。" },
      ],
    },
    {
      id: "istanbul_mehmet",
      order: 66,
      title: "Istanbul Mehmet",
      category: "シンバル",
      hook: "同じ「イスタンブール」の名を背負う2つの会社が、今も別々に競い合っている話。",
      image: "istanbul_mehmet_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "創業者Mehmet Tamdegerも、Istanbul Agop同様イスタンブールの伝統的なシンバル製造の系譜に連なる人物とされる。両社は同じ伝統文化を土台にしながら、別会社として独自にブランドを展開している。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Istanbul Agopと同様、複雑で暗い響きの伝統的なトルコ式サウンドを追求しているが、モデルごとの音の傾向にはそれぞれ独自の個性がある。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Traditionalシリーズ</strong>(2〜4万円台) — Istanbul Agopと同価格帯。",
            "<strong>Nostalgiaシリーズ</strong>(2〜4万円台) — よりヴィンテージ寄りの音作り。",
            "ジャズドラマー向けに1枚ずつ試打販売されることが多い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "Istanbul Agopと同じくニッチながら根強いファン層を持つ、手作業中心の高付加価値ブランドとして運営されている。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "ジャズ・伝統的な音楽ジャンルで、Istanbul Agopとしばしば比較・併用される。「イスタンブール系ならこの2社」という形で並び称されることが多い。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "同じ「イスタンブール」を名乗る2社が別会社として存在すること自体、シンバル業界の伝統と分裂の歴史を象徴するエピソードとしてしばしば紹介される。",
          ],
        },
      ],
      quiz: [
        { q: "Istanbul Mehmetの創業者は誰とされるか?", choices: ["Mehmet Tamdeger", "Agop Tomurcuk", "Robert Zildjian", "Reinhold Meinl"], answer: 0, explain: "Mehmet Tamdegerがイスタンブールの伝統を継いで設立したとされる。" },
        { q: "Istanbul MehmetとIstanbul Agopの関係は?", choices: ["同じ伝統文化を土台にした別会社", "完全に同一の企業", "親子会社の関係", "全く無関係の新興ブランド"], answer: 0, explain: "同じイスタンブールの伝統を汲みながら別会社として展開している。" },
        { q: "Istanbul Mehmetのサウンド傾向は?", choices: ["複雑で暗い伝統的なトルコ式サウンド", "極端に明るいポップサウンド", "電子音のみ", "無音に近い静けさ"], answer: 0, explain: "Istanbul Agopと同様の伝統的な暗い響きを追求している。" },
        { q: "Istanbul Mehmetが特に評価される場は?", choices: ["ジャズなど伝統的な音楽ジャンル", "EDM専業", "雅楽専業", "電子音楽専業"], answer: 0, explain: "ジャズなどでIstanbul Agopとしばしば比較・併用される。" },
        { q: "2社が同じ「イスタンブール」を名乗ることが象徴するのは?", choices: ["シンバル業界の伝統と分裂の歴史", "商標権の完全な独占", "電子化の進展", "国家による統制"], answer: 0, explain: "伝統を継ぎながらも分裂・競合してきた業界の歴史を象徴している。" },
      ],
    },
    {
      id: "bosphorus",
      order: 67,
      title: "Bosphorus",
      category: "シンバル",
      hook: "海峡の名を冠したブランドが、イスタンブール伝統の「第三の勢力」として名乗りを上げた話。",
      image: "bosphorus_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "イスタンブールの伝統的なシンバル職人たちによって設立された、比較的後発のトルコ系シンバルブランド。社名はイスタンブールを東西に分けるボスポラス海峡に由来する。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "Istanbul Agop/Mehmetと同様、伝統的な手打ち製法による複雑で暗い響きを特徴とする。Master seriesは特にジャズ/フュージョン系ドラマーから評価が高い。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Masterシリーズ</strong>(2〜4万円台) — 伝統的な暗い響き。",
            "<strong>Turkシリーズ</strong>(1万円台) — 比較的手頃な価格帯。",
            "近年はモダンジャズ〜フュージョン向けの明るめのラインも拡充している。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "Istanbul Agop/Mehmetという先行2社に対する「第三の勢力」として、同じ伝統技術を武器に独自の顧客基盤を築いてきた。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "イスタンブール伝統派シンバルの中では比較的後発だが、Istanbul Agop/Mehmetと並ぶ選択肢として認知されるようになっている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "トルコには他にもDiril、Amedia等、伝統的な手打ち製法を受け継ぐ中小メーカーが複数存在し、イスタンブール系シンバルは一つの企業に留まらない「地域産業」として発展してきた。",
          ],
        },
      ],
      quiz: [
        { q: "Bosphorusという社名の由来は?", choices: ["イスタンブールのボスポラス海峡", "創業者の名前", "アメリカの地名", "特に意味のない造語"], answer: 0, explain: "イスタンブールを東西に分けるボスポラス海峡に由来する。" },
        { q: "Bosphorusの製法として正しいのは?", choices: ["伝統的な手打ち製法", "完全自動化の量産製法", "3Dプリンティング", "電子回路の内蔵"], answer: 0, explain: "Istanbul Agop/Mehmetと同様の伝統的手打ち製法を用いる。" },
        { q: "Bosphorusが評価されている音楽ジャンルは?", choices: ["ジャズ/フュージョン系", "EDM専業", "雅楽専業", "電子音楽専業"], answer: 0, explain: "Master seriesがジャズ/フュージョン系ドラマーから高く評価されている。" },
        { q: "Bosphorusの業界内での立ち位置は?", choices: ["Istanbul Agop/Mehmetに対する第三の勢力", "業界最古参のブランド", "電子ドラム専業ブランド", "アメリカ発の量産ブランド"], answer: 0, explain: "先行2社に対する第三の勢力として独自の顧客基盤を築いてきた。" },
        { q: "トルコの伝統的シンバル製造業の特徴として正しいのは?", choices: ["複数の中小メーカーが並び立つ地域産業として発展", "1社が完全独占している", "全て電子化されている", "アメリカ資本のみで運営されている"], answer: 0, explain: "Diril、Amedia等、複数の企業が並び立つ地域産業として発展してきた。" },
      ],
    },
    {
      id: "ufip",
      order: 68,
      title: "UFIP",
      category: "シンバル",
      hook: "「叩いてから叩く」のではなく「溶かしてから叩く」、イタリアだけの独自製法の話。",
      image: "ufip_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "1931年、イタリアで創業。ヨーロッパ最古級のシンバルメーカーの一つとされ、他の多くのメーカーとは異なる独自の「キャスト製法(鋳造製法)」を用いることで知られる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "多くのシンバルは、圧延して伸ばした板状のブロンズから円形に打ち抜いて成形するが、UFIPは溶かした合金をシンバルの形にそのまま鋳造(キャスト)する製法を用いる。この違いにより、より複雑で豊かな倍音を持つ独特の響きが生まれるとされる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Class Seriesシリーズ</strong>(2〜4万円台) — キャスト製法による複雑な倍音。",
            "<strong>Rideシリーズ</strong>(2〜4万円台) — 単品ライドシンバルに強み。",
            "イタリアらしい、やや華やかで艶のある響きが個性とされる。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "トルコ系・アメリカ系メーカーとは異なる製法・文化的背景を持つことで、ニッチながら独自のブランドイメージ(イタリアの職人技)を確立してきた。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "ヨーロッパの中でもドイツのMeinl、スイスのPaisteとはまた異なる、「イタリアの鋳造技術」という独自路線を持つブランドとして位置づけられる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "キャスト製法は圧延製法に比べ手間もコストもかかるとされ、大量生産には不向きだが、その分独特の音響特性を生み出す要因になっている。",
          ],
        },
      ],
      quiz: [
        { q: "UFIPの創業国はどこか?", choices: ["イタリア", "トルコ", "アメリカ", "ドイツ"], answer: 0, explain: "1931年、イタリアで創業したヨーロッパ最古級のブランド。" },
        { q: "UFIPが用いる独自の製法は?", choices: ["キャスト製法(鋳造)", "圧延製法のみ", "3Dプリンティング", "電子回路の内蔵"], answer: 0, explain: "溶かした合金をそのまま鋳造するキャスト製法を用いる。" },
        { q: "一般的な圧延製法とキャスト製法の違いは?", choices: ["板状に伸ばすか、溶かして鋳造するかの違い", "色が違うだけ", "重さが全く同じになる", "音には影響しない"], answer: 0, explain: "製法の違いにより倍音の複雑さ・響きの豊かさに差が生まれるとされる。" },
        { q: "UFIPの立ち位置として正しいのは?", choices: ["イタリアの鋳造技術という独自路線", "トルコ伝統派の一角", "アメリカの量産ブランド", "電子ドラム専業ブランド"], answer: 0, explain: "Meinl(ドイツ)・Paiste(スイス)とも異なる独自路線を持つ。" },
        { q: "キャスト製法のデメリットとして語られるのは?", choices: ["手間・コストがかかり大量生産に不向き", "全く音が出ないこと", "極端に軽量になること", "電池が必要になること"], answer: 0, explain: "圧延製法に比べ手間もコストもかかるとされる。" },
      ],
    },
    {
      id: "wuhan",
      order: 69,
      title: "Wuhan",
      category: "シンバル",
      hook: "「チャイナシンバル」という名前の由来そのものになった、本場中国のメーカーの話。",
      image: "wuhan_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "中国・武漢を拠点とするシンバルメーカー。中国の伝統的な銅鑼(どら)・シンバル製造の系譜を持ち、いわゆる「チャイナシンバル」(反り返った縁を持つ、耳障りで攻撃的な響きを持つ特殊なシンバル)の本場として知られる。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "縁が反り返った独特の形状により、通常のクラッシュシンバルとは全く異なる、耳をつんざくような荒々しい響きを生む。ロック/メタルのアクセントとして効果的に使われることが多い。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/wuhan_cymbal.jpg",
          imageCredit: '写真: Andrewa (en.wikipedia) / <a href="https://commons.wikimedia.org/wiki/File:Aachinatypes.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY-SA 3.0)',
          paragraphs: [
            "<strong>各種チャイナシンバル</strong>(1枚数千円〜1万円台) — 非常に手頃な価格帯。",
            "他社ブランド向けにOEM(相手先ブランドでの製造)供給を行うことも多く、有名ブランドの廉価チャイナラインの中身がWuhan製というケースも珍しくない。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "非常に手頃な価格帯で「チャイナシンバルの本場の音」を提供していることから、他のシンバルメーカーがWuhan製のチャイナシンバルを自社ブランドとして販売するOEM供給元としての役割も大きい。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Zildjian・Sabian等が展開するチャイナシンバルの多くも、製法・音響的な源流をたどるとWuhanのような中国の伝統的製法に行き着くとされ、ジャンルそのものの故郷として位置づけられる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "「チャイナシンバル」という名称自体、この中国由来の伝統的な形状・音響特性に由来しており、Wuhanはその「本家」を名乗れる数少ないメーカーの一つ。",
          ],
        },
      ],
      quiz: [
        { q: "Wuhanの拠点はどこか?", choices: ["中国・武漢", "トルコ・イスタンブール", "アメリカ", "ドイツ"], answer: 0, explain: "中国・武漢を拠点とするシンバルメーカーである。" },
        { q: "「チャイナシンバル」の特徴として正しいのは?", choices: ["縁が反り返った、荒々しい響きを持つ形状", "極端に静かな音", "電子回路の内蔵", "同軸構造"], answer: 0, explain: "反り返った縁による耳をつんざくような荒々しい響きが特徴。" },
        { q: "Wuhanが果たしている役割として正しいのは?", choices: ["他社ブランドへのOEM供給元", "電子ドラム専業メーカー", "ギター専業メーカー", "アコースティック専業メーカー"], answer: 0, explain: "他のシンバルメーカー向けにOEM供給を行うことが多い。" },
        { q: "チャイナシンバルが効果的に使われるジャンルは?", choices: ["ロック/メタルのアクセント", "クラシックのみ", "雅楽専業", "アンビエント専業のみ"], answer: 0, explain: "荒々しい響きがロック/メタルのアクセントとして活用される。" },
        { q: "「チャイナシンバル」という名称の由来は?", choices: ["中国由来の伝統的な形状・音響特性", "アメリカでの命名", "トルコでの命名", "特に意味のない造語"], answer: 0, explain: "中国の伝統的なシンバル・銅鑼の製法に由来する名称とされる。" },
      ],
    },
    {
      id: "dream_cymbals",
      order: 70,
      title: "Dream Cymbals & Gongs",
      category: "シンバル",
      hook: "老舗が独占していた「手打ちシンバル」の世界に、カナダの新興ブランドが手頃な価格で切り込んだ話。",
      image: "dream_cymbals_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "2005年頃、カナダで設立された比較的新しいシンバル/ゴング(銅鑼)メーカー。老舗に比べ後発ながら、手打ち製法によるシンバルを比較的手頃な価格で提供することで急速に評価を高めた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的な手打ち工程を踏襲しつつ、価格競争力のある生産体制を確立している。ゴング(銅鑼)のラインナップの豊富さも大きな特徴で、シンバル以外の音響効果を求める奏者にも支持されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Blissシリーズ</strong>(1〜2万円台) — 手打ちシンバル。",
            "<strong>Energyシリーズ</strong>(1〜2万円台) — 手打ちシンバル。",
            "<strong>各種ゴング(銅鑼)</strong>(数万円〜)",
            "老舗の同グレード品と比べ2〜3割ほど手頃な価格設定が多い。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "老舗ブランド(Zildjian、Sabian、Meinl等)に比べ後発でありながら、「手打ち品質を手頃な価格で」というポジショニングで着実に市場を開拓してきた新興ブランドの成功例とされる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Soultone等と並ぶ、価格競争力のある新興手打ちシンバルブランドの代表格。予算を抑えつつ量産品以上の質感を求める層に支持されている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "ゴング(銅鑼)の専門性の高さは、映画音楽・オーケストラ録音などシンバル以外の音響効果を求める現場でも評価されている。",
          ],
        },
      ],
      quiz: [
        { q: "Dream Cymbals & Gongsの創業国はどこか?", choices: ["カナダ", "トルコ", "イタリア", "中国"], answer: 0, explain: "2005年頃、カナダで設立された比較的新しいブランド。" },
        { q: "Dream Cymbalsが評価されているポイントは?", choices: ["手打ち品質を手頃な価格で実現していること", "世界最高価格帯であること", "電子回路の内蔵", "同軸構造の採用"], answer: 0, explain: "手打ち製法を比較的手頃な価格で提供することで評価を高めた。" },
        { q: "Dream Cymbalsが専門性を持つ製品は?", choices: ["ゴング(銅鑼)", "電子ドラム", "アコースティックギター", "フレットレスベース"], answer: 0, explain: "ゴングのラインナップの豊富さが大きな特徴になっている。" },
        { q: "Dream Cymbalsのような新興ブランドが市場に持ち込んだのは?", choices: ["価格競争力のある手打ちシンバル", "電子ドラムの標準化", "アコースティックギターの標準化", "フロイドローズブリッジ"], answer: 0, explain: "老舗に比べ手頃な価格で手打ち品質を提供する路線を確立した。" },
        { q: "Dream Cymbalsと似た路線の新興ブランドは?", choices: ["Soultone", "UFIP", "Sonor", "Premier"], answer: 0, explain: "Soultoneも同様に価格競争力のある新興手打ちシンバルブランド。" },
      ],
    },
    {
      id: "soultone",
      order: 71,
      title: "Soultone",
      category: "シンバル",
      hook: "老舗の牙城に、アメリカの新興ブランドが「豊富な選択肢」で挑んだ話。",
      image: "soultone_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "アメリカで設立された比較的新しいシンバルブランド。老舗の一枚看板的なライン展開とは異なり、非常に多岐にわたるシリーズ展開で幅広いニーズに応えようとしている。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的な手打ち製法を採り入れたシリーズから、モダンで扱いやすいシリーズまで幅広く展開し、ジャンルを問わず選択肢を提供している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Custom Brilliantシリーズ</strong>(1万円台) — 明るい響き。",
            "<strong>Vintage Old Schoolシリーズ</strong>(1〜2万円台) — ヴィンテージ寄りの暗さ。",
            "非常に多数のラインを1〜2万円台中心に展開している。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "多くのプロツアーミュージシャンとの契約を通じて、老舗に劣らない品質を主張しつつ、価格競争力のあるポジショニングで市場に食い込んでいる。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Dream Cymbalsと並ぶ、価格競争力のあるアメリカ発の新興シンバルブランドの代表格。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "老舗ブランドが伝統・歴史を売りにするのに対し、Soultoneのような新興ブランドは「豊富な選択肢とコストパフォーマンス」を武器に市場開拓を進めている。",
          ],
        },
      ],
      quiz: [
        { q: "Soultoneの特徴として正しいのは?", choices: ["非常に多岐にわたるシリーズ展開", "1シリーズのみの一枚看板展開", "電子ドラム専業", "アコースティックギター専業"], answer: 0, explain: "老舗とは異なる幅広いシリーズ展開でニーズに応えている。" },
        { q: "Soultoneが武器にしているとされるのは?", choices: ["豊富な選択肢とコストパフォーマンス", "世界最古の歴史", "電子回路の内蔵", "同軸スピーカー技術"], answer: 0, explain: "老舗の歴史に対し、選択肢の豊富さと価格競争力で対抗している。" },
        { q: "Soultoneの創業国はどこか?", choices: ["アメリカ", "トルコ", "ドイツ", "イタリア"], answer: 0, explain: "アメリカで設立された比較的新しいシンバルブランド。" },
        { q: "Soultoneと並ぶ新興シンバルブランドは?", choices: ["Dream Cymbals & Gongs", "UFIP", "Sonor", "Premier"], answer: 0, explain: "Dream Cymbalsも同様に価格競争力のある新興ブランドとして知られる。" },
        { q: "Soultoneのライン展開の特徴は?", choices: ["伝統的手打ちからモダンまで幅広い", "全てモダンなラインのみ", "全て伝統的手打ちのみ", "電子シンバルのみ"], answer: 0, explain: "手打ち系からモダン系まで幅広いラインを展開している。" },
      ],
    },
    {
      id: "stagg",
      order: 72,
      title: "Stagg",
      category: "シンバル",
      hook: "ベルギーの楽器商社が、「まず1セット揃える」ための入門シンバルを世界中に届けている話。",
      image: "stagg_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "ベルギーを拠点とする楽器総合商社が展開するブランド。シンバルだけでなくギター・ドラム・アクセサリー類まで幅広い楽器を扱う、入門〜普及帯中心のブランド展開が特徴。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "上位ブランドのような伝統的手打ち製法にはこだわらず、量産による低価格化を優先した設計。初心者が「まず一式揃える」ための現実的な選択肢として展開されている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          image: "products/stagg_cymbal.jpg",
          imageCredit: '写真: bigdrumthump.com from Santa Monica, United States / <a href="https://commons.wikimedia.org/wiki/File:Stagg_cymbals.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC BY 2.0)',
          paragraphs: [
            "<strong>SHシリーズ</strong>(4点セットで1〜2万円台) — 普及帯シンバルセット。",
            "単品バラ売りよりもセット販売が中心で、初めてドラムセットを一式揃える初心者向けに最適化されている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "総合楽器商社としての大量調達・流通網を活かし、非常に手頃な価格帯で製品を提供している。プロ向けというより教育・入門市場への浸透を重視したビジネスモデル。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Zildjian・Sabianのような伝統派とは全く異なる市場セグメント(入門・普及帯)を担っており、直接競合するというより棲み分けている関係にある。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "多くのドラム初心者にとって、最初に触れるシンバルがStaggのような普及帯ブランドであることは珍しくなく、上位ブランドへのステップアップの入口としての役割を果たしている。",
          ],
        },
      ],
      quiz: [
        { q: "Staggの拠点はどこか?", choices: ["ベルギー", "トルコ", "アメリカ", "日本"], answer: 0, explain: "ベルギーを拠点とする楽器総合商社が展開するブランド。" },
        { q: "Staggが扱う製品範囲として正しいのは?", choices: ["シンバルに加えギター・ドラムなど幅広い楽器", "シンバル専業のみ", "電子ドラム専業", "アコースティックギター専業"], answer: 0, explain: "幅広い楽器を扱う総合商社としてのブランド展開が特徴。" },
        { q: "Staggが重視しているとされる市場は?", choices: ["教育・入門市場", "超高級ハイエンド市場", "映画音楽専業市場", "放送局専業市場"], answer: 0, explain: "プロ向けというより入門者の「まず一式揃える」需要を重視している。" },
        { q: "StaggとZildjian/Sabianの関係として正しいのは?", choices: ["異なる市場セグメントで棲み分けている", "全く同じ価格帯で直接競合している", "Staggが親会社である", "StaggがZildjianの子会社である"], answer: 0, explain: "入門・普及帯とハイエンド帯で棲み分けている関係にある。" },
        { q: "Staggが多くの初心者にとって果たす役割は?", choices: ["上位ブランドへのステップアップの入口", "プロ専用の最終目標", "電子ドラムへの入口", "アコースティックギターへの入口"], answer: 0, explain: "最初に触れるブランドとして、後の上位ブランドへの入口になっている。" },
      ],
    },
    {
      id: "trx_cymbals",
      order: 73,
      title: "TRX Cymbals",
      category: "シンバル",
      hook: "大手ブランドの技術者たちが独立し、「現代的な精密さ」で伝統に挑んだ話。",
      image: "trx_cymbals_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "大手シンバルメーカーでの豊富な設計経験を持つ技術者Mark Loveらによって設立された比較的新しいブランド。伝統的な手打ちの神秘性よりも、現代的な精密設計・複数回の旋盤加工(マルチレイジング)技術を重視するアプローチを取る。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "独自の複雑な旋盤加工パターンにより、明瞭さと複雑さを両立したモダンなサウンドを追求している。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>MDTシリーズ</strong>(2〜4万円台) — マルチレイジング加工。",
            "<strong>DSKシリーズ</strong>(2〜4万円台) — よりモダンな響き。",
            "少量生産のため流通量は限られるが、精密な旋盤加工へのこだわりがマニアの間で評価されている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "大手ブランド出身者による技術力を武器に、少量生産・高付加価値のニッチブランドとして展開している。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "「伝統(トルコ式手打ち)」対「精密工学(Paiste的アプローチ)」という対立軸の中で、TRXはより現代的・実験的な精密工学路線を代表するブランドとされる。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "大手ブランドの技術者が独立して自身のブランドを興すという流れは、シンバル業界においてもギター/ベース業界(SuhrやTobias等)と同様に見られる現象である。",
          ],
        },
      ],
      quiz: [
        { q: "TRX Cymbalsを設立した人物の経歴は?", choices: ["大手シンバルメーカーでの設計経験を持つ技術者", "レコード会社の経営者", "ドラム教室の講師", "楽器店の店主"], answer: 0, explain: "Mark Loveら、大手ブランド出身の技術者によって設立された。" },
        { q: "TRXが重視するアプローチは?", choices: ["現代的な精密設計・複数回の旋盤加工", "伝統的な手打ちの神秘性のみ", "電子回路の内蔵", "木製シンバルの開発"], answer: 0, explain: "精密なマルチレイジング技術を重視するモダンなアプローチを取る。" },
        { q: "TRXが代表する業界内の立ち位置は?", choices: ["現代的・実験的な精密工学路線", "トルコ式伝統派", "入門・普及帯専業", "電子ドラム専業"], answer: 0, explain: "伝統とは異なる、精密工学重視の路線を代表するブランドとされる。" },
        { q: "TRXと似た成り立ちを持つギター業界のブランドは?", choices: ["Suhr", "Martin", "Gibson", "Fender"], answer: 0, explain: "大手出身の技術者が独立して興したという成り立ちが共通している。" },
        { q: "TRXの製品ラインとして正しいのは?", choices: ["MDTシリーズ", "2002シリーズ", "Byzanceシリーズ", "Aシリーズ"], answer: 0, explain: "MDTシリーズ・DSKシリーズなどを展開している。" },
      ],
    },
    {
      id: "diril",
      order: 74,
      title: "Diril",
      category: "シンバル",
      hook: "家族経営のまま、トルコの伝統技術を守り続ける中小メーカーの話。",
      image: "diril_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "トルコの家族経営によるシンバルメーカー。Istanbul Agop/Mehmet、Bosphorusらと同様、イスタンブールを中心とした伝統的な手打ちシンバル製造の系譜に連なるブランドの一つ。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的な暗く複雑な響きに加え、ロック/メタル系にも対応できるカッティングパワー(音の抜けの良さ)を兼ね備えたモデルを展開している点が特徴とされる。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Traditionalシリーズ</strong>(1〜2万円台) — 伝統的な暗い響き。",
            "<strong>Rockシリーズ</strong>(1〜2万円台) — ロック/メタル向けにカッティングパワーを強化。",
            "家族経営らしく生産量は限られ、専門店経由での取り扱いが中心。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "小規模な家族経営を維持しながら、伝統的な製法と現代的なジャンルへの対応を両立させることでニッチな市場を確保している。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "トルコ系伝統派の中では比較的中小規模だが、メタル/ロック系ドラマーからも注目される個性的なポジションを築いている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "トルコには家族経営の中小シンバル工房が複数存在し、それぞれが独自の配合・製法を代々受け継いでいるとされ、業界全体としての多様性を支えている。",
          ],
        },
      ],
      quiz: [
        { q: "Dirilの経営形態として正しいのは?", choices: ["トルコの家族経営", "多国籍企業の一部門", "上場企業", "国営企業"], answer: 0, explain: "トルコの家族経営によるシンバルメーカーである。" },
        { q: "Dirilが兼ね備えているとされる特徴は?", choices: ["伝統的な響きとロック/メタル向けカッティングパワー", "電子回路の内蔵のみ", "極端な低価格のみ", "木製シンバルのみ"], answer: 0, explain: "伝統的な暗い響きとメタル系にも対応するカッティングパワーを両立している。" },
        { q: "Dirilと同じ系譜のトルコ系ブランドは?", choices: ["Istanbul Agop", "Paiste", "Meinl", "Yamaha"], answer: 0, explain: "Istanbul Agop/Mehmet、Bosphorusと同じ伝統の系譜に連なる。" },
        { q: "トルコの中小シンバル工房の特徴として正しいのは?", choices: ["独自の配合・製法を代々受け継いでいる", "全て同一の製法に統一されている", "全て電子化されている", "海外資本にすべて買収されている"], answer: 0, explain: "各工房が独自の配合・製法を代々受け継ぎ、業界の多様性を支えている。" },
        { q: "Dirilが注目されている層は?", choices: ["メタル/ロック系ドラマー", "クラシック専業奏者のみ", "電子音楽専業者のみ", "雅楽奏者のみ"], answer: 0, explain: "伝統的な響きとカッティングパワーの両立がメタル系にも評価されている。" },
      ],
    },
    {
      id: "amedia",
      order: 75,
      title: "Amedia",
      category: "シンバル",
      hook: "トルコ伝統シンバルの世界に、もう一社「現代の名乗り」を上げたブランドの話。",
      image: "amedia_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          paragraphs: [
            "トルコの比較的新しいシンバルメーカー。Istanbul Agop/Mehmet、Bosphorus、Dirilら先行するイスタンブール系ブランドに続く形で、伝統的な手打ち製法を土台にブランドを確立してきた。",
          ],
        },
        {
          heading: "音の特徴",
          paragraphs: [
            "伝統的な暗く複雑な響きを土台にしながら、比較的モダンでバランスの取れたサウンドも展開し、幅広いジャンルに対応できるラインナップを揃えている。",
          ],
        },
        {
          heading: "代表製品ラインナップ",
          paragraphs: [
            "<strong>Renaissanceシリーズ</strong>(1〜2万円台) — バランスの取れたモダンな響き。",
            "<strong>Legendシリーズ</strong>(1〜2万円台) — より伝統寄りの暗さ。",
            "他のトルコ系ブランドと同様、価格の割に上質という評価で徐々にシェアを広げている。",
          ],
        },
        {
          heading: "お金の話",
          paragraphs: [
            "先行するトルコ系ブランドに比べ後発ながら、品質対価格のバランスの良さで徐々に評価を高めてきた比較的新しいブランドの一つ。",
          ],
        },
        {
          heading: "業界内でのポジション",
          paragraphs: [
            "Diril同様、トルコ系伝統派の中では中堅〜新興の位置づけにあり、Istanbul Agop/Mehmetという2大ブランドに次ぐ選択肢として認知され始めている。",
          ],
        },
        {
          heading: "豆知識",
          paragraphs: [
            "トルコのシンバル製造業は一つの巨大企業に集約されておらず、Istanbul Agop/Mehmet/Bosphorus/Diril/Amediaなど、複数のブランドが並び立つ独特の産業構造を持ち続けている。",
          ],
        },
      ],
      quiz: [
        { q: "Amediaの創業国はどこか?", choices: ["トルコ", "アメリカ", "ドイツ", "イタリア"], answer: 0, explain: "トルコの比較的新しいシンバルメーカーである。" },
        { q: "Amediaが評価されている点は?", choices: ["品質対価格のバランスの良さ", "世界最高価格帯であること", "電子回路の内蔵", "同軸構造の採用"], answer: 0, explain: "先行ブランドに比べ後発ながら、価格対品質で評価を高めてきた。" },
        { q: "Amediaと同じくトルコ系伝統派とされるブランドではないものは?", choices: ["Paiste", "Diril", "Bosphorus", "Istanbul Mehmet"], answer: 0, explain: "Paisteはスイス系ブランドであり、トルコ系伝統派には含まれない。" },
        { q: "トルコのシンバル製造業の産業構造として正しいのは?", choices: ["複数のブランドが並び立つ構造", "1社による完全独占", "全て電子化されている", "海外資本のみで運営されている"], answer: 0, explain: "Istanbul Agop、Bosphorus、Diril、Amedia等が並び立つ構造を持つ。" },
        { q: "Amediaの代表シリーズは?", choices: ["Renaissanceシリーズ", "2002シリーズ", "Byzanceシリーズ", "Aシリーズ"], answer: 0, explain: "Renaissanceシリーズ、Legendシリーズなどを展開している。" },
      ],
    },
  ],
};
