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
          dialogue: [
            { who: "mina", text: "Brainworxって「ドイツの町工場」がプラグイン業界を制した、みたいなhookでしたけど?" },
            { who: "sensei", text: "そうなんだ。Brainworxはドイツ・ライヒリンゲン発、Dirk Ulrichらが立ち上げた会社でね。もともとはマスタリングスタジオ兼機材開発会社だったんだ。「bx_」から始まるプラグインは、この会社の自社ブランドだよ。" },
            { who: "mina", text: "Plugin Allianceとは別の会社なんですか?" },
            { who: "sensei", text: "そう、Plugin Allianceは、Brainworxの製品と他の独立系ハードウェアメーカーの製品をまとめて売るための出版社(パブリッシャー)として2011年前後に作られた別会社なんだ。CEOのTorsten Kunkelは自身もエンジニアで、bx_console開発にも関わっているんだよ。" },
            { who: "mina", text: "「ライセンスを集める」というのはどういうことですか?" },
            { who: "sensei", text: "Plugin Allianceは「レコード会社のようなもの」なんだ。elysia、Lindell Audio、SPL、Vertigo Sound、Millennia、Chandler Limited、Shadow Hillsなどは、それぞれ独立したハードウェアメーカーでね。自分では大きな販売網を持たない代わりに、Plugin Allianceと契約してプラグイン化・販売を任せているんだよ。" },
          ],
        },
        {
          heading: "音の特徴: 「TMT」という力技",
          dialogue: [
            { who: "mina", text: "Brainworxの技術的な強みって何なんですか?" },
            { who: "sensei", text: "TMT(Tolerance Modeling Technology)だね。同じハードウェアを何十台も集めて全部測定し、個体差(製造誤差・経年劣化のばらつき)ごとモデリングするという力技をやっているんだ。" },
            { who: "mina", text: "そんなに手間をかける意味があるんですか?" },
            { who: "sensei", text: "あるんだ。だからbx_console SSL 9000 Jのチャンネルごとに微妙にキャラが違う、という「本物っぽさ」が出るんだよ。実機も個体ごとに音が違うから、その差まで再現しているというわけだね。" },
          ],
        },
        {
          heading: "お金の話: iLok不要とセール文化",
          dialogue: [
            { who: "mina", text: "認証方式に何か特徴があるんですか?" },
            { who: "sensei", text: "多くのプラグイン会社が長年iLok(専用USBドングル)による認証を必須にしていた中、Plugin Allianceは自社のオンラインライセンス認証を採用して、iLok不要を売りにしたんだ。" },
            { who: "mina", text: "セールが多いイメージがありますね。" },
            { who: "sensei", text: "そうだね。単品購入と、まとめ買いの大型バンドル、定期購読(サブスク)の選択肢があってね。年に何度も大規模セール(50〜90%オフ)をやることで知られているんだ。" },
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
    {
      id: "slate_digital",
      order: 2,
      title: "Slate Digital",
      category: "プラグインバンドル",
      hook: "ドラム音源屋がサブスク制ミキシングツールの先駆けになり、業界のビジネスモデルを変えた話。",
      image: "slate_digital_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Slate Digitalって最初からミキシングプラグインの会社だったんですか?" },
            { who: "sensei", text: "実は違うんだ。創業者のSteven Slateは、Nirvanaの『Nevermind』に衝撃を受けてドラムサンプル作りを始めた人物でね。2005年にLAに来た頃は、グラミー賞のパーティーに紛れ込んでエンジニアたちに自作のドラムサンプルCDを配って回っていたという逸話が残っているんだ。" },
            { who: "mina", text: "それがどうやって今の会社になったんですか?" },
            { who: "sensei", text: "そのドラムサンプルが評判を呼んで、後に「Trigger」というドラム音源差し替えプラグインを開発したんだ。2009年頃から普及したTriggerのおかげで、ドラムのリプレイス(生ドラムの音を別のサンプル音に置き換える作業)がクリック数回でできるようになったんだよ。Slate Digital自体は2008年、Steven SlateとFabrice Gabrielがロサンゼルスで設立した会社なんだ。" },
          ],
        },
        {
          heading: "サブスクという発明",
          dialogue: [
            { who: "mina", text: "サブスクの先駆けってどういうことですか?" },
            { who: "sensei", text: "Slate Digitalは、自社のアナログモデリング系プラグイン全部を月額定額で使い放題にする「Everything Bundle」という仕組みを、音楽ソフト業界でも早い段階で始めた会社の一つなんだ。月額14.99ドルという価格が当時としては衝撃的だったんだよ。" },
            { who: "mina", text: "今もそのサービスは続いているんですか?" },
            { who: "sensei", text: "続いているよ。今は「Complete Access」というサブスクに名前が変わっていて、Solid State LogicやHarrison Audioなど他社のプラグインも含めて150以上のプラグイン、サンプルライブラリ、Slate Academyという教育コンテンツまでまとめて使えるんだ。" },
          ],
        },
        {
          heading: "お金の話: Audiotonixによる買収",
          dialogue: [
            { who: "mina", text: "今のSlate Digitalはどこの傘下なんですか?" },
            { who: "sensei", text: "2022年10月3日、Audiotonixというグループに買収されたんだ。以前このアプリのDAWソフトウェア編で紹介したHarrison(ミキシングコンソールメーカー)も同じAudiotonixグループの一員だったよね。" },
            { who: "mina", text: "ハードウェアの会社がソフトウェア会社を買収するのは、よくあるパターンなんですね。" },
            { who: "sensei", text: "そうなんだ。コンソールメーカーが自社のグループにプラグイン会社を取り込むことで、ハードとソフトの両方を売れる体制を作る動きが近年目立っているんだよ。" },
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "Virtual Console Collection(VCC)、Virtual Tape Machines(VTM)、FG-X Mastering Processor、Fresh Air、Trigger 2など。ドラム音源(Steven Slate Drums)とミキシングプラグインの両方を手がけている点が同社の特徴。",
          ],
        },
      ],
      quiz: [
        { q: "Slate Digital創業者Steven Slateが最初に評判を得たのは何がきっかけか?", choices: ["自作のドラムサンプル", "マスタリングコンプレッサーの開発", "ギターアンプシミュレーター", "楽譜作成ソフト"], answer: 0, explain: "自作のドラムサンプルをエンジニアに配ったことがキャリアの出発点だった。" },
        { q: "Slate Digitalのドラム音源差し替えプラグインの名称は?", choices: ["Trigger", "Drumagog", "BFD", "Superior Drummer"], answer: 0, explain: "2009年頃から普及したTriggerがドラムリプレイスの定番になった。" },
        { q: "Slate Digitalが早期に導入した月額制の全プラグイン使い放題サービスは?", choices: ["Everything Bundle(現Complete Access)", "Rack Extension", "Max for Live", "AAX Native"], answer: 0, explain: "月額14.99ドルの「Everything Bundle」が現在の「Complete Access」の前身。" },
        { q: "Slate Digitalを2022年に買収した企業グループはどこか?", choices: ["Audiotonix", "Focusrite", "inMusic", "Yamaha"], answer: 0, explain: "Harrison等も傘下に持つAudiotonixグループが2022年にSlate Digitalを買収した。" },
        { q: "Slate Digitalが2社を跨いで手がけている製品ジャンルは?", choices: ["ドラム音源とミキシングプラグイン", "楽譜作成とDAW", "シンセサイザーとアンプシム", "ゲーム音楽と映像編集"], answer: 0, explain: "Steven Slate Drumsのドラム音源とSlate Digitalのミキシングプラグインの両方を手がけている。" },
      ],
    },
    {
      id: "ssl_plugins",
      order: 3,
      title: "SSL",
      category: "コンソールプラグイン",
      hook: "英国の伝説コンソールメーカーが何度も買収され、今もブランドとして生き残っている話。",
      image: "ssl_plugins_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "SSLってもともと何を作っていた会社なんですか?" },
            { who: "sensei", text: "実はパイプオルガンの制御システムから始まった会社なんだ。1969年、イギリス・オックスフォードシャーでColin Sandersが設立したSolid State Logicがそのルーツでね。そこから音楽レコーディング・放送業界向けの大型ミキシングコンソールで、圧倒的な地位を築いていったんだよ。" },
            { who: "mina", text: "何度も買収されたってhookにありましたけど?" },
            { who: "sensei", text: "そうなんだ。1988年にUEIというテクノロジーグループに買収されて、その後Carlton Televisionに、1999年には3iによる買収が行われて、2005年には音楽家のPeter Gabrielと放送起業家のDave Engelkeが資産を取得したんだ。そして2017年12月、Audiotonixグループの傘下に入った。これで実に5回目のオーナー交代だったんだよ。" },
          ],
        },
        {
          heading: "「SSLサウンド」というブランド",
          dialogue: [
            { who: "mina", text: "SSLの音って独特な個性があるんですよね?" },
            { who: "sensei", text: "そうだね。特にバスコンプレッサー(複数トラックをまとめて通す圧縮処理)の音は「SSLサウンド」と呼ばれるほど有名で、パンチがありつつ音圧感のある仕上がりが特徴とされているんだ。ミックスの最終段(マスターバス)に挿すだけで曲がまとまって聴こえる、という評判が定着しているんだよ。" },
            { who: "mina", text: "プラグイン版もその音を再現しているんですか?" },
            { who: "sensei", text: "そう。SSLは実機コンソール(Duality、AWS、X-Rack、Matrix2など)をベースにしたプラグイン群を、サブスクリプション・レンタル購入・買い切りなど複数の課金方式で展開しているんだ。実機の高価さに対して、プラグインなら手頃に「あの音」を体験できるという位置づけだね。" },
          ],
        },
        {
          heading: "お金の話: 非上場のまま生き残る",
          dialogue: [
            { who: "mina", text: "何度も買収されているのに、なぜブランドが消えなかったんですか?" },
            { who: "sensei", text: "SSLというブランド名と技術・特許は一貫して価値があるとみなされ続けてきたからなんだ。オーナーは何度も変わったけど、SSL自体はずっと非上場企業のまま存続しているんだよ。" },
            { who: "mina", text: "Audiotonixってどんな会社なんですか?" },
            { who: "sensei", text: "DiGiCo、Calrec、Allen & Heathといった音響機材ブランドを傘下に持つグループでね。Peter Gabriel自身もAudiotonixへの出資者になったんだ。買収されても、著名アーティストが関わり続けているのは面白いポイントだよね。" },
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "SSL Native Bus Compressor 2、SSL Native Channel Strip 2、X-EQ 2、X-Comp、X-Saturator、Fusion系など。実機同様「バスコンプ」が最も代表的な製品として知られる。",
          ],
        },
      ],
      quiz: [
        { q: "SSL(Solid State Logic)がもともと手がけていた事業は?", choices: ["パイプオルガンの制御システム", "ギターアンプの製造", "楽譜出版", "映画配給"], answer: 0, explain: "1969年創業当初はパイプオルガン用の制御システムを手がける会社だった。" },
        { q: "SSLが2017年に買収されたグループはどこか?", choices: ["Audiotonix", "Yamaha", "Focusrite", "inMusic"], answer: 0, explain: "2017年12月、DiGiCoやCalrecなどを傘下に持つAudiotonixグループに買収された。" },
        { q: "SSLのプラグインで特に有名な製品ジャンルは?", choices: ["バスコンプレッサー", "ピッチ補正", "楽譜作成", "MIDIシーケンサー"], answer: 0, explain: "「SSLサウンド」と呼ばれるバスコンプレッサーの音が特に有名。" },
        { q: "SSLの買収に関わった著名ミュージシャンは誰か?", choices: ["Peter Gabriel", "Steven Slate", "Rupert Neve", "Brian Eno"], answer: 0, explain: "2005年に資産取得に関わり、Audiotonix買収後も出資者になったPeter Gabriel。" },
        { q: "SSLは何回目のオーナー交代でAudiotonix傘下に入ったか?", choices: ["5回目", "1回目", "10回目", "一度も変わっていない"], answer: 0, explain: "1988年のUEI買収以降、2017年のAudiotonix入りまでで5回目のオーナー交代とされる。" },
      ],
    },
    {
      id: "neve_plugins",
      order: 4,
      title: "Neve / AMS Neve",
      category: "コンソールプラグイン",
      hook: "一人の天才技術者(Rupert Neve)の名前が、本人がもう関わっていない会社の看板として今も最高級の代名詞であり続ける理由。",
      image: "neve_plugins_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "Neveって「現代のミキシングコンソールを作った人」なんですよね?" },
            { who: "sensei", text: "そうなんだ。1961年、Rupert Neveがイギリスで設立したNeve Electronicsがルーツで、彼は「近代的なミキシングコンソールの生みの親」とされる人物なんだよ。1992年、AMS(Advanced Music Systems)と合併してAMS Neveという会社になったんだ。" },
            { who: "mina", text: "じゃあ今のAMS NeveにRupert Neve本人が関わっているんですか?" },
            { who: "sensei", text: "実はそうじゃないんだ。Rupert Neveは元の会社を離れた後、2005年に妻のEvelyn NeveやJosh Thomasと一緒に「Rupert Neve Designs」というアメリカの別会社を立ち上げているんだよ。つまりAMS Neveのために彼が新たに設計したものは何もないんだ。名前だけが受け継がれている、と言った方が正確だね。" },
          ],
        },
        {
          heading: "「Neveサウンド」の再現をめぐる争い",
          dialogue: [
            { who: "mina", text: "でもプラグインの世界では「Neve系」ってよく聞きますよね。" },
            { who: "sensei", text: "そうなんだ。特に「1073」という往年のプリアンプ/EQは、暖かく太いサウンドの代名詞として、多くの会社がプラグインでモデリングしているんだよ。ただし、その中でAMS Neveから直接ライセンスを受けているのはUniversal Audio(UAD)だけとされているんだ。" },
            { who: "mina", text: "他の会社のは正式なライセンス品じゃないんですか?" },
            { who: "sensei", text: "SoftubeやWaves(Abbey Road NEVE 1073など)も同様のサウンドを再現したプラグインを出しているけど、UADのように「AMS Neveから直接ライセンスされた回路設計」を謳っているのはUniversal Audio版だけなんだ。他社は独自にサウンドを分析・再現するアプローチを取っていることが多いんだよ。" },
          ],
        },
        {
          heading: "Rupert Neve Designs自身はプラグインを作らない",
          dialogue: [
            { who: "mina", text: "本人の新しい会社、Rupert Neve Designsはプラグインを出さないんですか?" },
            { who: "sensei", text: "自社でプラグインを開発することはしていないんだ。ただ2011年、YamahaがSteinbergのプラットフォーム向けにRupert Neve本人が承認したプラグインを発表していて、これはYamahaのCLシリーズやRivage PM10というデジタルコンソールにも組み込まれているんだよ。" },
            { who: "mina", text: "本人が公認した回路を、他社がデジタルに落とし込んでいるんですね。" },
            { who: "sensei", text: "その通り。ハードウェアの設計を専門とする本人と、それをソフトウェアに変換する専門家が分業しているという構図なんだ。" },
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "「Neve系」を謳うプラグインはUniversal Audio(UAD Neve 1073/1084)、Softube(Trident/Neve系)、Waves(Abbey Road NEVE 1073、Scheps 73)、Brainworx/Plugin Alliance(bx_console等)など多岐にわたる。どのプラグインが公式ライセンス品かは各社の製品説明で確認するのがポイント。",
          ],
        },
      ],
      quiz: [
        { q: "Rupert Neveが1961年に設立した会社は?", choices: ["Neve Electronics", "AMS Neve", "Rupert Neve Designs", "Focusrite"], answer: 0, explain: "Neve Electronicsが1961年設立の最初の会社。AMS Neveは1992年の合併で誕生した。" },
        { q: "AMS Neveは何と何が合併してできた会社か?", choices: ["AMSとNeve Electronics", "SSLとNeve", "FocusriteとNeve", "UniversalとNeve"], answer: 0, explain: "1992年、Advanced Music SystemsとNeve Electronicsの合併で誕生した。" },
        { q: "Rupert Neve本人が2005年に新たに設立した会社は?", choices: ["Rupert Neve Designs", "AMS Neve", "Focusrite", "Universal Audio"], answer: 0, explain: "妻のEvelyn NeveやJosh Thomasと共に2005年にアメリカで設立した。" },
        { q: "Neve 1073のプラグインで、AMS Neveから直接ライセンスを受けているとされるのはどこの製品か?", choices: ["Universal Audio(UAD)", "Waves", "Softube", "iZotope"], answer: 0, explain: "UADのNeve 1073がAMS Neveから直接ライセンスされた回路設計とされる。" },
        { q: "Rupert Neve Designs本人が承認したプラグインを2011年に発表した会社は?", choices: ["Yamaha(Steinberg)", "Avid", "Apple", "Roland"], answer: 0, explain: "YamahaがSteinbergプラットフォーム向けに、本人承認のプラグインを発表した。" },
      ],
    },
    {
      id: "izotope",
      order: 5,
      title: "iZotope",
      category: "マスタリング/AI",
      hook: "大学生が「家で食費と家賃のために」作ったプラグインが、AI/機械学習でマスタリングを自動化する業界標準ソフトになった話。",
      image: "izotope_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "iZotopeってどんな経緯で始まった会社なんですか?" },
            { who: "sensei", text: "2001年、アメリカ・マサチューセッツ州ケンブリッジで、MIT(マサチューセッツ工科大学)の学生だったMark EthierとJeremy Toddが設立した会社なんだ。音楽とコンピューターサイエンスを学んでいた2人が、友人たちと一緒に始めたんだよ。" },
            { who: "mina", text: "最初は何を作っていたんですか?" },
            { who: "sensei", text: "「Vinyl」という、音楽をレコードっぽい音に加工する遊び心のあるプラグインが最初の製品だったんだ。その後、卒業してからOzoneの最初のバージョンを作って、夏の終わりにリリースしたんだよ。当時は正直、食費と家賃のためにお金が必要だった、という切実な理由もあったそうなんだ。" },
          ],
        },
        {
          heading: "AI・機械学習によるマスタリングの自動化",
          dialogue: [
            { who: "mina", text: "Ozoneってマスタリングの定番ソフトですよね?" },
            { who: "sensei", text: "そうだね。Ozoneは20年以上にわたってマスタリング技術のゴールドスタンダード(業界標準)とされてきたソフトなんだ。もう一つの看板製品RXは、ノイズ除去・音声修復の分野で音楽・TV・映画・ポッドキャストの現場標準になっているよ。" },
            { who: "mina", text: "AIを使っているのが特徴なんですか?" },
            { who: "sensei", text: "そう。iZotopeは機械学習を使った音声処理のパイオニアとして知られていて、「参照トラックの音を分析して自動でマスタリングの提案をする」といった、AIの実用的な活用に早くから力を入れてきた会社なんだ。" },
          ],
        },
        {
          heading: "お金の話: 目まぐるしいグループ再編",
          dialogue: [
            { who: "mina", text: "iZotopeって最近も会社の所属が変わっているんですか?" },
            { who: "sensei", text: "そうなんだ。2021年、iZotopeはNative Instruments(ソフトシンセ・サンプラーで有名な会社)と、投資会社Francisco Partnersの出資で新しいグループを結成したんだ。2023年6月にはそのグループがNative Instrumentsブランドに統合されて、Brainworx・Plugin Allianceも同じグループの一員になったんだよ。" },
            { who: "mina", text: "今はどうなっているんですか?" },
            { who: "sensei", text: "2026年6月、今度はNative Instrumentsグループ自体がinMusicに買収されたんだけど、その際iZotopeだけは切り離されてBoris FX(映像編集エフェクトの会社)に買収されたんだ。つまり同じグループにいたNative InstrumentsとiZotopeが、それぞれ別の会社の傘下に分かれることになったんだよ。" },
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "Ozone(マスタリング)、RX(音声修復・ノイズ除去)、Neutron(ミキシング)、Nectar(ボーカル処理)、VocalSynth、Trash、Iris(サンプリング・シンセ)など。AIアシスト機能(Master Assistant、Mix Assistant等)を各製品で展開している。",
          ],
        },
      ],
      quiz: [
        { q: "iZotopeを2001年に設立したのはどんな人物か?", choices: ["MITの学生Mark EthierとJeremy Todd", "元Nirvanaのエンジニア", "英国の元コンソール技術者", "韓国の音響研究者"], answer: 0, explain: "MITで音楽とコンピューターサイエンスを学んでいたMark EthierとJeremy Toddが設立した。" },
        { q: "iZotopeの最初の製品(遊び心のあるプラグイン)は何か?", choices: ["Vinyl", "Ozone", "RX", "Neutron"], answer: 0, explain: "音をレコードっぽく加工する「Vinyl」が最初の製品だった。" },
        { q: "iZotopeのマスタリング用フラッグシップ製品は?", choices: ["Ozone", "RX", "Nectar", "Trash"], answer: 0, explain: "Ozoneが20年以上マスタリング技術のゴールドスタンダードとされてきた。" },
        { q: "iZotopeが2021年にグループを結成した相手は?", choices: ["Native Instruments", "Universal Audio", "Steinberg", "Avid"], answer: 0, explain: "投資会社Francisco Partnersの出資でNative Instrumentsとグループを結成した。" },
        { q: "2026年6月、iZotopeを買収した会社はどこか?", choices: ["Boris FX", "inMusic", "Yamaha", "Fender"], answer: 0, explain: "Native InstrumentsグループがinMusicに買収される中、iZotopeだけはBoris FXに買収された。" },
      ],
    },
    {
      id: "elysia",
      order: 6,
      title: "elysia",
      category: "ブティックハード系",
      hook: "伝説的な機材を設計した一人のエンジニアが、自分の名前を出さないブランドを立ち上げた話。",
      image: "elysia_card.png",
      sections: [
        {
          heading: "会社の正体・沿革",
          dialogue: [
            { who: "mina", text: "elysiaってどんな会社なんですか?" },
            { who: "sensei", text: "ドイツ・ネッテタール発のブティックハードウェアメーカーでね。2005年、Ruben TilgnerとDominik Klaßenが設立した会社なんだ。「alpha compressor」という機種を作りたいという夢から始まった会社だと語られているよ。" },
            { who: "mina", text: "Ruben Tilgnerさんって、前に聞いたことある名前な気がします。" },
            { who: "sensei", text: "鋭いね。彼は伝説的な機材「SPL Transient Designer」の設計に関わったことで知られるエンジニアなんだ。その後、自分のブランドとしてelysiaを立ち上げたという経緯なんだよ。" },
          ],
        },
        {
          heading: "音の特徴: ディスクリートClass-A回路",
          dialogue: [
            { who: "mina", text: "elysiaの音作りへのこだわりって何ですか?" },
            { who: "sensei", text: "ディスクリート(既製の集積回路ではなく、個別の部品を一つひとつ組み合わせる設計)のClass-A回路にこだわっているんだ。全ての製品を自社工場で設計・組み立て・検査まで一貫して行っているのも特徴だよ。" },
            { who: "mina", text: "他のブティックブランドとは違うんですか?" },
            { who: "sensei", text: "「奇をてらわず、確実な価値と信頼性を届ける」という姿勢を掲げているんだ。派手な機能よりも、音質そのものと品質管理にこだわる職人的なブランドと言えるね。" },
          ],
        },
        {
          heading: "お金の話: Plugin Allianceとの提携",
          dialogue: [
            { who: "mina", text: "elysiaも前に出てきたPlugin Allianceと関係あるんですか?" },
            { who: "sensei", text: "そうなんだ。elysiaは自社で大きな販売網は持たず、Brainworxが運営するPlugin Alliance経由でプラグイン化・販売を行っているんだよ。alpha compressor、museq(EQ)などがプラグイン化されているんだ。" },
            { who: "mina", text: "ハードウェアメーカーがプラグイン販売を他社に任せるのは、この編で何度も出てくるパターンですね。" },
            { who: "sensei", text: "その通り。小規模な工房が自社製品を広く届けるために、販売力のあるパブリッシャーと組むという構図は、ブティックハードウェアメーカーに共通する生存戦略なんだ。" },
          ],
        },
        {
          heading: "あなたの持っているプラグインとの接続",
          paragraphs: [
            "elysia alpha compressor、elysia museq、elysia nvelope、elysia xpressor、elysia karacterなど。実機同様、Plugin Alliance経由でプラグイン版が提供されている。",
          ],
        },
      ],
      quiz: [
        { q: "elysiaが設立されたのはいつ、どこの国か?", choices: ["2005年、ドイツ", "1995年、イギリス", "2010年、アメリカ", "1980年、日本"], answer: 0, explain: "2005年、ドイツ・ネッテタールでRuben TilgnerとDominik Klaßenが設立した。" },
        { q: "elysia創業者Ruben Tilgnerが設計に関わったことで知られる伝説的機材は?", choices: ["SPL Transient Designer", "Neve 1073", "SSLバスコンプ", "LA-2A"], answer: 0, explain: "SPL Transient Designerの設計に関わったエンジニアとして知られる。" },
        { q: "elysiaがこだわっている回路設計は?", choices: ["ディスクリートClass-A回路", "デジタル完全変換", "真空管のみの回路", "IC集積回路のみ"], answer: 0, explain: "個別部品を組み合わせるディスクリートのClass-A回路にこだわっている。" },
        { q: "elysiaが自社製品をプラグイン化・販売する際に提携している会社は?", choices: ["Plugin Alliance", "Waves", "iZotope", "Native Instruments"], answer: 0, explain: "Brainworxが運営するPlugin Alliance経由でプラグイン販売を行っている。" },
        { q: "elysiaの最初の看板製品となったコンプレッサーの名称は?", choices: ["alpha compressor", "museq", "nvelope", "xpressor"], answer: 0, explain: "alpha compressorを作りたいという夢が創業のきっかけだった。" },
      ],
    },
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
