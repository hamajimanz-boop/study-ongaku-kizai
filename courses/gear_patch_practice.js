/* 実践問題編: デスク配線パズル(kind:"patch") — 全20単元
   「機材が欲しくなって調べる瞬間」を疑似体験する編。すべて実在の機材モデル名で構成し、
   様々な宅録〜プロスタジオのシナリオに対して、正しいケーブルを選び、機材の端子同士を
   ドラッグ&ドロップでつないで配線を完成させる。間違って挿したケーブルはクリックで
   剪定(削除)して組み直せる。
   通常コースと違い sections/quiz ではなく patch:{...} を持つ(app.js の renderPatch が描画)。 */
window.COURSES = window.COURSES || {};
window.COURSES["gear_patch_practice"] = {
  id: "gear_patch_practice",
  title: "デスク配線 実践編(配線パズル)",
  description:
    "「この機材が欲しい」と思って調べているときが、いちばん知識が身につく瞬間。実在の機材モデル名で組んだ様々な宅録〜プロスタジオのデスクを、必要なケーブルを選んでドラッグでつないでみよう。間違えたケーブルはクリックで剪定(削除)して、正しい配線に組み直せる。",
  color: "#c2410c",
  order: 10,
  active: true,
  kind: "patch",
  units: [
    {
      id: "solo_home_desk",
      order: 1,
      title: "宅録弾き語りデスクを配線する(Rode NT1 + Scarlett 2i2)",
      category: "配線問題",
      hook: "定番の組み合わせ、Rode NT1とFocusrite Scarlett 2i2。XLR・TRS・USB、正しい場所に正しいケーブルを挿せるか?",
      patch: {
        scenario:
          "あなたはコンデンサーマイク「Rode NT1」を1本買って、弾き語りの宅録を始めることにした。手元には「Rode NT1」「Focusrite Scarlett 2i2(オーディオインターフェース)」「MacBook Air」「Sony MDR-CD900ST(モニターヘッドホン)」の4つの機材がある。マイクの音をMacBook Airに録音しつつ、自分の声をヘッドホンでモニターできるように配線しよう。",
        equipment: [
          { id: "mic", label: "Rode NT1(コンデンサーマイク)", icon: "NT1", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 2i2",
            icon: "2i2",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR)", type: "xlr", dir: "in" },
              { id: "hpout", label: "PHONES OUT", type: "trs", dir: "out" },
              { id: "usb", label: "USB-C", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
          { id: "headphones", label: "Sony MDR-CD900ST", icon: "900ST", ports: [{ id: "in", label: "φ6.3 TRS IN", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "ts", "rca"],
        correctConnections: [
          { from: "mic.out", to: "interface.in1", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
          { from: "interface.hpout", to: "headphones.in", cable: "trs" },
        ],
        explain:
          "Rode NT1のようなコンデンサーマイクはファンタム電源(48V)を送る必要があり、ノイズにも強いXLR(バランス接続)で送るのが基本。Scarlett 2i2とMacBook Airの間は音声・設定をやり取りするのでUSB-C。Sony MDR-CD900STはプロも使う定番モニターヘッドホンで、6.3mm標準フォーン(TRS)接続。TS(アンバランス楽器ケーブル)やRCA(民生用ピンケーブル)はこの構成には登場しない — 見た目が似ていても用途が違うケーブルを見分けられるかがポイント。",
      },
    },
    {
      id: "monitor_speaker_desk",
      order: 2,
      title: "Yamaha HS5モニタースピーカーを追加配線する",
      category: "配線問題",
      hook: "「HS5を買ったのにスピーカーケーブルで繋いだら音が出ない」——実際によくある落とし穴を先に体験しておこう。",
      patch: {
        scenario:
          "先ほどのScarlett 2i2デスクに、左右1台ずつのYamaha HS5(パワード=アンプ内蔵のモニタースピーカー)を追加した。インターフェースにはモニター出力(L/R)が2系統ある。左右のHS5それぞれに、正しい種類のケーブルで接続しよう。",
        equipment: [
          {
            id: "interface",
            label: "Focusrite Scarlett 2i2",
            icon: "2i2",
            ports: [
              { id: "monL", label: "MONITOR OUT L", type: "trs", dir: "out" },
              { id: "monR", label: "MONITOR OUT R", type: "trs", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha HS5(L)", icon: "HS5", ports: [{ id: "in", label: "LINE IN (TRS)", type: "trs", dir: "in" }] },
          { id: "spkR", label: "Yamaha HS5(R)", icon: "HS5", ports: [{ id: "in", label: "LINE IN (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["trs", "speaker", "rca", "xlr"],
        correctConnections: [
          { from: "interface.monL", to: "spkL.in", cable: "trs" },
          { from: "interface.monR", to: "spkR.in", cable: "trs" },
        ],
        explain:
          "Yamaha HS5はパワードモニターでアンプを内蔵しているので、受け取るのは「ライン信号(小さい電圧の音声信号)」で、背面のTRS/XLR入力へ6.3mm TRSバランス接続で送るのが基本。よくある誤りは「スピーカーケーブル」を使ってしまうこと——あれは裸線やスピコン端子でパッシブスピーカー+外部アンプの大きな電力を送るためのケーブルで、HS5のようなパワードモニターのライン入力には使わない(そもそも端子形状が合わない)。買い物のときに『パワード(アクティブ)』と『パッシブ+外部アンプ』の違いを調べておくと、この間違いを防げる。",
      },
    },
    {
      id: "band_multitrack_desk",
      order: 3,
      title: "バンド一発録りデスクを配線する(SM58 / SM57 / P-Bass / Radial J48)",
      category: "配線問題",
      hook: "ボーカル(SM58)・ベース(Fender P-Bass)・ギターアンプ(SM57)を同時録音。Radial J48は何のために挟むのか、実際に配線しながら体感する。",
      patch: {
        scenario:
          "宅録スタジオで、ボーカル・ベース・ギターアンプの3パートを同時録音する。ボーカルは「Shure SM58」で直接、ギターアンプは「Shure SM57」を立てて録る。ベースは「Fender Precision Bass」のライン出力(TS)しかないので、「Radial J48」(アクティブDIボックス)を経由してインターフェースに送る必要がある。インターフェースは「Focusrite Scarlett 18i20」でXLR入力が3つ以上あり、MacBook AirにはUSBで接続する。",
        equipment: [
          { id: "vocalMic", label: "Shure SM58(ボーカル用)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "bass", label: "Fender Precision Bass", icon: "P-Bass", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "di",
            label: "Radial J48(アクティブDI)",
            icon: "J48",
            ports: [
              { id: "in", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "out", label: "XLR OUT (balanced)", type: "xlr", dir: "out" },
            ],
          },
          { id: "ampMic", label: "Shure SM57(アンプ用)", icon: "SM57", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20",
            icon: "18i20",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "MIC IN 2 (XLR)", type: "xlr", dir: "in" },
              { id: "in3", label: "MIC IN 3 (XLR)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "ts", "usb", "trs", "midi"],
        correctConnections: [
          { from: "vocalMic.out", to: "interface.in1", cable: "xlr" },
          { from: "bass.out", to: "di.in", cable: "ts" },
          { from: "di.out", to: "interface.in2", cable: "xlr" },
          { from: "ampMic.out", to: "interface.in3", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "Fender Precision Bassの出力は不平衡(アンバランス)のTS楽器ケーブルで、そのままインターフェースの遠い入力まで引くとノイズが乗りやすい。Radial J48のようなDIボックス(ダイレクトボックス)を挟むことで、信号をXLRのバランス接続に変換しつつ、インピーダンス(電気的な抵抗の性質)もマイク/ライン入力に合わせて調整できる。SM58(ボーカル向け)とSM57(楽器・アンプ向け)は指向特性やレンジ設計が違う兄弟モデルで、用途に応じて使い分けるのが定番。MIDIケーブルは今回のシナリオでは使わない(MIDIキーボードなどを接続する場合に登場する)。",
      },
    },
    {
      id: "hdx_hdio_basic",
      order: 4,
      title: "Pro Tools HDXシステムの基本配線(HD I/O + Neve 1073 + NS-10M)",
      category: "配線問題(プロ環境)",
      hook: "HDXカードとHD I/Oは、USBではなくDigiLinkという専用デジタルケーブルでつながる。プロの入り口となる基本配線を体験しよう。",
      patch: {
        scenario:
          "プロのレコーディングスタジオで、Pro Tools HDXシステムを組む。Mac Pro内蔵のHDX PCIeカードと、8ch入出力を持つ「Avid HD I/O 8x8x8」を、専用のDigiLinkケーブルで接続する。さらにHD I/Oのアナログ入力に「Neve 1073」マイクプリアンプからのライン出力を、モニター出力(L/R)に「Yamaha NS-10M」スタジオモニター2台を接続しよう。",
        equipment: [
          { id: "mac", label: "Mac Pro(HDXカード内蔵)", icon: "MacPro", ports: [{ id: "digilink", label: "DigiLink OUT", type: "digilink", dir: "out" }] },
          {
            id: "hdio",
            label: "Avid HD I/O 8x8x8",
            icon: "HD I/O",
            ports: [
              { id: "digilinkIn", label: "DigiLink IN", type: "digilink", dir: "in" },
              { id: "ain1", label: "ANALOG IN 1 (XLR)", type: "xlr", dir: "in" },
              { id: "monL", label: "MONITOR OUT L", type: "xlr", dir: "out" },
              { id: "monR", label: "MONITOR OUT R", type: "xlr", dir: "out" },
            ],
          },
          { id: "preamp", label: "Neve 1073(マイクプリアンプ)", icon: "1073", ports: [{ id: "out", label: "LINE OUT (XLR)", type: "xlr", dir: "out" }] },
          { id: "monSpkL", label: "Yamaha NS-10M(L)", icon: "NS10M", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "monSpkR", label: "Yamaha NS-10M(R)", icon: "NS10M", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["digilink", "xlr", "usb", "trs"],
        correctConnections: [
          { from: "mac.digilink", to: "hdio.digilinkIn", cable: "digilink" },
          { from: "preamp.out", to: "hdio.ain1", cable: "xlr" },
          { from: "hdio.monL", to: "monSpkL.in", cable: "xlr" },
          { from: "hdio.monR", to: "monSpkR.in", cable: "xlr" },
        ],
        explain:
          "HDXシステムでは、Mac側のHDXカードとインターフェース(HD I/O・HD OMNI・HD MADI等)の間は、USBオーディオインターフェースのようなUSBケーブルではなく「DigiLink」という専用の高速デジタルケーブルでつながる。これは民生用のインターフェースとプロ機材の大きな違いの1つ。Neve 1073はトランス回路による音の色付けで有名な定番マイクプリで、そこからHD I/Oへはライン信号をXLRバランスで送る。Yamaha NS-10Mは「スタジオの基準」として世界中で使われ続けてきたラフモニターの代名詞的存在。",
      },
    },
    {
      id: "hd_omni_cue_aux",
      order: 5,
      title: "HD OMNIのAUX OUT(キューミックス)を配線する",
      category: "配線問題(プロ環境)",
      hook: "メインのモニターとは別に、ボーカリストにだけ違うバランスのヘッドホンミックスを送りたい——そんな時に使うのがAUX(キュー)出力。",
      patch: {
        scenario:
          "ボーカル録音セッション。エンジニアは「Avid HD OMNI」のMAIN OUTでコントロールルームの「Genelec 8040」モニタースピーカーを鳴らしつつ、ボーカルブースの「Behringer HA400」ヘッドホンアンプには、AUX OUT(キュー出力。メインとは別の独立したバランスを送れる補助出力)を使って伴奏多めの別バランスのミックスを送りたい。HA400の出力を「Sony MDR-CD900ST」につなぐところまで配線しよう。",
        equipment: [
          {
            id: "omni",
            label: "Avid HD OMNI",
            icon: "OMNI",
            ports: [
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
              { id: "auxL", label: "AUX OUT L (TRS)", type: "trs", dir: "out" },
              { id: "auxR", label: "AUX OUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          { id: "monL", label: "Genelec 8040(L)", icon: "8040", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "monR", label: "Genelec 8040(R)", icon: "8040", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          {
            id: "hpAmp",
            label: "Behringer HA400(ヘッドホンアンプ)",
            icon: "HA400",
            ports: [
              { id: "inL", label: "IN L (TRS)", type: "trs", dir: "in" },
              { id: "inR", label: "IN R (TRS)", type: "trs", dir: "in" },
              { id: "out", label: "PHONES OUT", type: "trs", dir: "out" },
            ],
          },
          { id: "vocalHp", label: "Sony MDR-CD900ST(ボーカリスト用)", icon: "900ST", ports: [{ id: "in", label: "IN", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "rca"],
        correctConnections: [
          { from: "omni.mainL", to: "monL.in", cable: "xlr" },
          { from: "omni.mainR", to: "monR.in", cable: "xlr" },
          { from: "omni.auxL", to: "hpAmp.inL", cable: "trs" },
          { from: "omni.auxR", to: "hpAmp.inR", cable: "trs" },
          { from: "hpAmp.out", to: "vocalHp.in", cable: "trs" },
        ],
        explain:
          "HD OMNIのようなプロのインターフェースには「メインの出力(モニター)」と「キュー/AUXの出力(演奏者向けのヘッドホンミックス)」が独立して用意されていることが多い。この2系統を分けられることで、エンジニアがGenelec 8040で聴いているバランスと、演奏者が聴きたいバランス(自分の声を大きめ、クリックを大きめ等)を別々に作れる。Behringer HA400は複数のヘッドホンへ別々の音量で配れる定番の廉価ヘッドホンアンプ。買い物のときに『メインアウトだけの機種か、キュー/AUX出力を独立して持つ機種か』を確認しておくと、録音の現場で困らずに済む。",
      },
    },
    {
      id: "patchbay_outboard_insert",
      order: 6,
      title: "パッチベイでUrei 1176LNをインサートする",
      category: "配線問題(プロ環境)",
      hook: "『チャンネルのインサートポイントに伝説のコンプ、1176を挿す』——実機のパッチベイでは、センドとリターン、2本のケーブルで配線する。",
      patch: {
        scenario:
          "コンソール(またはチャンネルストリップ)のチャンネル1に、外部のハードウェアコンプレッサー「Urei 1176LN」をインサートしたい。パッチベイのCH1 INSERT SEND(このチャンネルの信号がパッチベイに出てくる場所)から、1176LNのINPUTへケーブルを送り、1176LNのOUTPUTから、パッチベイのCH1 INSERT RETURN(コンプ処理後の信号をチャンネルに戻す場所)へケーブルを戻そう。",
        equipment: [
          {
            id: "patchbay",
            label: "Neutrik NPPA(TT/バンタムパッチベイ)",
            icon: "PB",
            ports: [
              { id: "send1", label: "CH1 INSERT SEND", type: "trs", dir: "out" },
              { id: "return1", label: "CH1 INSERT RETURN", type: "trs", dir: "in" },
            ],
          },
          {
            id: "comp",
            label: "Urei 1176LN(FETコンプレッサー)",
            icon: "1176",
            ports: [
              { id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" },
              { id: "out", label: "OUTPUT (TRS)", type: "trs", dir: "out" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "ts"],
        correctConnections: [
          { from: "patchbay.send1", to: "comp.in", cable: "trs" },
          { from: "comp.out", to: "patchbay.return1", cable: "trs" },
        ],
        explain:
          "インサートポイントとは「あるチャンネルの信号を一度外に取り出し(SEND)、外部機器で処理してから、また同じチャンネルに戻す(RETURN)」ための出入り口。パッチベイ上ではこの2つが別々の端子として並んでいるため、SEND→機材のIN、機材のOUT→RETURN、と2本のケーブルで結ぶ。実機の1176LNはモデル・年代によりXLR I/Oのものもあり、その場合はTRS-XLR変換ケーブルが必要になる——『自分の機材同士の端子が合うか』を事前に調べる習慣が、現場での配線ミスを防ぐ。",
      },
    },
    {
      id: "madi_wordclock_sync",
      order: 7,
      title: "MADI伝送とワードクロック同期(Midas DL32 + Antelope Big Ben)",
      category: "配線問題(プロ環境)",
      hook: "32ch超のライブ収録を1本のケーブルで送るMADI。ただしデジタル機材を複数つなぐ時は「基準となる時計」も必要になる。",
      patch: {
        scenario:
          "ライブハウスでの多ch収録。ステージ上のマイクを集約する「Midas DL32」(デジタルステージボックス)から、MADI(同軸)ケーブル1本で「Avid HD MADI」インターフェースまで音声をまとめて伝送する。さらに、マスタークロックジェネレーター「Antelope Audio Big Ben」からHD MADIへワードクロックを送り、全体の基準クロックを合わせよう(ステージボックス側はMADI信号にクロック情報が含まれているため、別途ワードクロックケーブルは不要)。",
        equipment: [
          { id: "stagebox", label: "Midas DL32(デジタルステージボックス)", icon: "DL32", ports: [{ id: "madiOut", label: "MADI OUT (同軸)", type: "madi", dir: "out" }] },
          {
            id: "hdmadi",
            label: "Avid HD MADI",
            icon: "HDMADI",
            ports: [
              { id: "madiIn", label: "MADI IN (同軸)", type: "madi", dir: "in" },
              { id: "wcIn", label: "WORD CLOCK IN (BNC)", type: "wordclock", dir: "in" },
            ],
          },
          { id: "clockGen", label: "Antelope Audio Big Ben(マスタークロック)", icon: "BigBen", ports: [{ id: "wcOut", label: "WORD CLOCK OUT (BNC)", type: "wordclock", dir: "out" }] },
        ],
        cablePalette: ["madi", "wordclock", "aes", "ethernet", "xlr"],
        correctConnections: [
          { from: "stagebox.madiOut", to: "hdmadi.madiIn", cable: "madi" },
          { from: "clockGen.wcOut", to: "hdmadi.wcIn", cable: "wordclock" },
        ],
        explain:
          "MADIは1本の同軸(または光)ケーブルで64ch分の音声をまとめて伝送できる規格で、アナログマルチケーブルの代わりにライブ収録や大規模スタジオで使われる。Midas DL32はライブ音響の現場で広く使われるデジタルステージボックスの代表格。デジタル機材同士は、サンプル単位でタイミングを揃える『ワードクロック』を必ずどれか1台を基準(マスター)にして共有する必要があり、Antelope Audio Big Benはその代表的なマスタークロックジェネレーター。これを忘れると『時々プチっとノイズが入る』典型的な不具合の原因になる。今回はMADI自体にクロック情報が乗っているため、ステージボックス側への個別のワードクロック配線は不要という点も実務上のポイント。",
      },
    },
    {
      id: "monitor_controller_multi",
      order: 8,
      title: "Crane Song Avocet IIで複数スピーカーを切り替える",
      category: "配線問題(プロ環境)",
      hook: "『ラージ/ニアフィールド/サブウーファー』を切り替えながら作業する——プロのコントロールルームの標準装備を配線する。",
      patch: {
        scenario:
          "ミックスルームに、「ATC SCM100ASL Pro」(ラージモニター)1組・「Yamaha NS-10M」(ニアフィールド)1組・「Genelec 7060B」(サブウーファー)1台がある。「RME Fireface UFX+」から出た1系統の出力を「Crane Song Avocet II」(モニターコントローラー)で受け、そこから3つの出力先(ラージ/ニアフィールド/サブウーファー)へ振り分けられるように配線しよう。",
        equipment: [
          {
            id: "interface",
            label: "RME Fireface UFX+",
            icon: "UFX+",
            ports: [
              { id: "outL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "outR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "monctrl",
            label: "Crane Song Avocet II",
            icon: "Avocet",
            ports: [
              { id: "inL", label: "IN L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "IN R (XLR)", type: "xlr", dir: "in" },
              { id: "largeL", label: "SPEAKER A OUT L", type: "xlr", dir: "out" },
              { id: "largeR", label: "SPEAKER A OUT R", type: "xlr", dir: "out" },
              { id: "nearL", label: "SPEAKER B OUT L", type: "xlr", dir: "out" },
              { id: "nearR", label: "SPEAKER B OUT R", type: "xlr", dir: "out" },
              { id: "subOut", label: "SUB OUT", type: "xlr", dir: "out" },
            ],
          },
          { id: "largeSpkL", label: "ATC SCM100ASL Pro(L)", icon: "SCM100", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "largeSpkR", label: "ATC SCM100ASL Pro(R)", icon: "SCM100", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "nearSpkL", label: "Yamaha NS-10M(L)", icon: "NS10M", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "nearSpkR", label: "Yamaha NS-10M(R)", icon: "NS10M", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "sub", label: "Genelec 7060B(サブウーファー)", icon: "7060B", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "speaker", "rca"],
        correctConnections: [
          { from: "interface.outL", to: "monctrl.inL", cable: "xlr" },
          { from: "interface.outR", to: "monctrl.inR", cable: "xlr" },
          { from: "monctrl.largeL", to: "largeSpkL.in", cable: "xlr" },
          { from: "monctrl.largeR", to: "largeSpkR.in", cable: "xlr" },
          { from: "monctrl.nearL", to: "nearSpkL.in", cable: "xlr" },
          { from: "monctrl.nearR", to: "nearSpkR.in", cable: "xlr" },
          { from: "monctrl.subOut", to: "sub.in", cable: "xlr" },
        ],
        explain:
          "Crane Song Avocet IIのようなモニターコントローラーは、1系統の音声を受けて、複数組のスピーカーへのルーティングとボリュームを一元管理するための機材。『ATC SCM100ASL Proで低音の量感を確認 → Yamaha NS-10Mで一般的なリスニング環境に近い聴こえ方を確認 → Genelec 7060Bで超低域を確認』という切り替えは、プロのミックス作業では日常的に行われる。買う前に『何組のスピーカーを切り替えられるか』『サブウーファー出力(ベースマネジメント)があるか』を調べておくと、後から機材が足りなくなる事態を防げる。",
      },
    },
    {
      id: "console_direct_outs",
      order: 9,
      title: "SSL 4000 G+のダイレクトアウトから個別録音する(Neumann U 87 Ai)",
      category: "配線問題(プロ環境)",
      hook: "コンソールのフェーダーを動かしても録音レベルは変わらない——ダイレクトアウトという『そのチャンネル単体だけを取り出す出口』を配線する。",
      patch: {
        scenario:
          "「SSL 4000 G+」コンソールでのレコーディングセッション。「Neumann U 87 Ai」をチャンネル1のマイク入力に立て、そのチャンネルのDIRECT OUT(フェーダーやバスの影響を受けず、そのチャンネル単体の信号だけを取り出せる出力)から、Pro Tools側の「Avid HD I/O」のアナログ入力へ送り、個別トラックとして録音できるようにしよう。",
        equipment: [
          { id: "mic", label: "Neumann U 87 Ai", icon: "U87", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "console",
            label: "SSL 4000 G+ コンソール",
            icon: "SSL4K",
            ports: [
              { id: "micIn1", label: "CH1 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "dout1", label: "CH1 DIRECT OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "hdio", label: "Avid HD I/O", icon: "HD I/O", ports: [{ id: "ain1", label: "ANALOG IN 1 (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "digilink"],
        correctConnections: [
          { from: "mic.out", to: "console.micIn1", cable: "xlr" },
          { from: "console.dout1", to: "hdio.ain1", cable: "xlr" },
        ],
        explain:
          "コンソールの『メインバスOUT』は複数チャンネルをミックスした後の音が出るため、個別トラックとして録音するには向かない。ダイレクトアウトは、フェーダーより手前(またはフェーダー通過後・機種によって設計が違う)でそのチャンネルの信号だけを単独で取り出せる出口で、マルチトラックレコーディングでは各チャンネルのダイレクトアウトをそれぞれ別のインターフェース入力へ送るのが基本形になる。Neumann U 87 Aiは今なお現役の定番大型ダイアフラム・コンデンサーマイクで、SSL 4000 G+は数多くの名盤をミックスしてきた伝説的コンソール。",
      },
    },
    {
      id: "midi_keyboard_module",
      order: 10,
      title: "MIDIキーボードと外部音源モジュールを配線する(Roland A-88MKII + INTEGRA-7)",
      category: "配線問題",
      hook: "MIDIケーブルには音は流れない——鍵盤の演奏データと、実際の音を運ぶオーディオケーブル、2種類の配線をきちんと使い分けよう。",
      patch: {
        scenario:
          "あなたは音源を内蔵しない「Roland A-88MKII」(MIDIマスターキーボード)を弾いて、ラック型の音源モジュール「Roland INTEGRA-7」を鳴らしたい。A-88MKIIのMIDI OUTから、INTEGRA-7のMIDI INへ演奏データを送り、INTEGRA-7が実際に生成した音(ステレオL/R出力)を、オーディオインターフェース「Steinberg UR44」のライン入力へ送って、MacBook Airに録音できるように配線しよう。",
        equipment: [
          { id: "keyboard", label: "Roland A-88MKII(MIDIマスターキーボード)", icon: "A-88", ports: [{ id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" }] },
          {
            id: "module",
            label: "Roland INTEGRA-7(音源モジュール)",
            icon: "INTGR7",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Steinberg UR44",
            icon: "UR44",
            ports: [
              { id: "lineInL", label: "LINE IN 3 L (TRS)", type: "trs", dir: "in" },
              { id: "lineInR", label: "LINE IN 4 R (TRS)", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["midi", "trs", "usb", "xlr", "ts"],
        correctConnections: [
          { from: "keyboard.midiOut", to: "module.midiIn", cable: "midi" },
          { from: "module.outL", to: "interface.lineInL", cable: "trs" },
          { from: "module.outR", to: "interface.lineInR", cable: "trs" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "MIDIケーブルが運ぶのは『どの鍵盤を、どのくらいの強さで、いつ弾いたか』という演奏データ(MIDIメッセージ)であり、音そのものではない。A-88MKIIのように音源を持たない(内蔵音色がない)マスターキーボードは、MIDI OUTから音源モジュールやソフトシンセにMIDI信号を送って初めて音が鳴る仕組み。INTEGRA-7が実際に生成した音(オーディオ信号)は、MIDIケーブルとはまったく別に、通常のオーディオケーブル(ここではTRSのライン出力)でインターフェースへ送る必要がある。『MIDIケーブルを繋いだのに音が出ない』という宅録初心者によくある勘違いは、この『データ』と『音』の違いを混同していることが多い。",
      },
    },
    {
      id: "live_pa_basic",
      order: 11,
      title: "ライブPAの基本配線(ミキサー→パワーアンプ→パッシブスピーカー)",
      category: "配線問題",
      hook: "パワードスピーカーなら1本で済むところを、ライブハウスの標準構成では『ミキサー→パワーアンプ→スピーカー』と2段階に分けて送る。その理由を配線しながら理解しよう。",
      patch: {
        scenario:
          "小さなライブハウスのPAシステムを配線する。アナログミキサー「Yamaha MG12XU」のMAIN OUT(L/R)から、パワーアンプ「Crown XLS 2502」の入力へ送り、アンプで増幅した信号を、アンプ内蔵ではないパッシブスピーカー「JBL JRX225」(左右2台)へ送ろう。",
        equipment: [
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "amp",
            label: "Crown XLS 2502(パワーアンプ)",
            icon: "XLS2502",
            ports: [
              { id: "inL", label: "INPUT L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "INPUT R (XLR)", type: "xlr", dir: "in" },
              { id: "outL", label: "OUTPUT L (Speakon)", type: "speaker", dir: "out" },
              { id: "outR", label: "OUTPUT R (Speakon)", type: "speaker", dir: "out" },
            ],
          },
          { id: "spkL", label: "JBL JRX225(パッシブ, L)", icon: "JRX225", ports: [{ id: "in", label: "IN (Speakon)", type: "speaker", dir: "in" }] },
          { id: "spkR", label: "JBL JRX225(パッシブ, R)", icon: "JRX225", ports: [{ id: "in", label: "IN (Speakon)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["xlr", "speaker", "trs", "ts"],
        correctConnections: [
          { from: "mixer.mainL", to: "amp.inL", cable: "xlr" },
          { from: "mixer.mainR", to: "amp.inR", cable: "xlr" },
          { from: "amp.outL", to: "spkL.in", cable: "speaker" },
          { from: "amp.outR", to: "spkR.in", cable: "speaker" },
        ],
        explain:
          "JBL JRX225のようなパッシブスピーカーはアンプを内蔵していないため、単体では鳴らない。ミキサーのMAIN OUTから出るのは『ライン信号』という小さな電力の音声信号で、そのままではスピーカーを駆動できず、必ずパワーアンプで大きな電力に増幅する必要がある。ミキサー→アンプの区間はXLRのライン信号、アンプ→スピーカーの区間はSpeakon等のスピーカーケーブルで大きな電力を送る、という2種類のケーブルの役割の違いがポイント。Yamaha HS5のようなパワードモニター(アンプ内蔵)は、このアンプの役割をスピーカー自身が内蔵しているため配線がシンプルになる、という対比で覚えておくと理解しやすい。",
      },
    },
    {
      id: "podcast_multi_speaker",
      order: 12,
      title: "2人収録のポッドキャスト配線(RODECaster Pro II + Shure SM7B)",
      category: "配線問題",
      hook: "話者が増えるほど、マイクだけでなくヘッドホンの本数も増える——複数人収録の基本形を配線しよう。",
      patch: {
        scenario:
          "2人の話者でポッドキャストを収録する。オールインワンの音声ミキサー「RODECaster Pro II」に、話者それぞれのダイナミックマイク「Shure SM7B」を接続し、それぞれが自分の声をモニターできるようヘッドホンも1つずつ接続する。RODECaster Pro IIからはUSBでノートPCに繋ぎ、録画・配信ソフトへ音声を送ろう。",
        equipment: [
          { id: "mic1", label: "Shure SM7B(話者A)", icon: "SM7B", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "mic2", label: "Shure SM7B(話者B)", icon: "SM7B", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "caster",
            label: "RODECaster Pro II",
            icon: "RCP2",
            ports: [
              { id: "in1", label: "COMBO INPUT 1 (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "COMBO INPUT 2 (XLR)", type: "xlr", dir: "in" },
              { id: "hp1", label: "HEADPHONE OUT 1 (TRS)", type: "trs", dir: "out" },
              { id: "hp2", label: "HEADPHONE OUT 2 (TRS)", type: "trs", dir: "out" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "hp1", label: "モニターヘッドホン(話者A)", icon: "HP", ports: [{ id: "in", label: "IN (TRS)", type: "trs", dir: "in" }] },
          { id: "hp2", label: "モニターヘッドホン(話者B)", icon: "HP", ports: [{ id: "in", label: "IN (TRS)", type: "trs", dir: "in" }] },
          { id: "pc", label: "ノートPC", icon: "PC", ports: [{ id: "usbin", label: "USB", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "ts", "rca"],
        correctConnections: [
          { from: "mic1.out", to: "caster.in1", cable: "xlr" },
          { from: "mic2.out", to: "caster.in2", cable: "xlr" },
          { from: "caster.hp1", to: "hp1.in", cable: "trs" },
          { from: "caster.hp2", to: "hp2.in", cable: "trs" },
          { from: "caster.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "Shure SM7Bはダイナミックマイクの中でも出力レベルが低く、大きめのゲインを持つマイクプリと相性が良いため、RODECaster Pro IIのような配信用ミキサーによく組み合わされる。複数の話者が同時に収録する場合、それぞれに独立したマイク入力とヘッドホン出力を用意するのが基本形で、これにより各話者は自分のタイミングや声量に合わせて自分専用のモニターバランスを聴きながら話せる。全員分の音はRODECaster Pro IIの内部で1つのステレオ(または複数トラック)にまとめられ、USB1本でPCの配信・録画ソフトへ送られる。",
      },
    },
    {
      id: "reverb_aux_send_return",
      order: 13,
      title: "外部リバーブユニットをAUX SEND/RETURNで配線する(TC Electronic M300)",
      category: "配線問題(プロ環境)",
      hook: "以前の単元で扱った『インサート』と同じくコンプを外部に挟む配線だったが、今度は『センド/リターン』——ドライ音を残したまま、エフェクト音だけを混ぜる配線を体験しよう。",
      patch: {
        scenario:
          "ミキサー「Yamaha MG12XU」に外部のリバーブユニット「TC Electronic M300」を追加する。MG12XUのAUX SEND 1(各chから任意の量だけ分けてもらえる、モノラル1系統の送り出しバス)から、M300のIN 1へ送り、M300が生成したステレオのリバーブ音を、MG12XUのSTEREO IN(L/R、リターン用の入力)へ戻そう。",
        equipment: [
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "auxSend", label: "AUX SEND 1 (TS, モノ)", type: "ts", dir: "out" },
              { id: "retL", label: "STEREO IN 3/4 L (TRS)", type: "trs", dir: "in" },
              { id: "retR", label: "STEREO IN 3/4 R (TRS)", type: "trs", dir: "in" },
            ],
          },
          {
            id: "reverb",
            label: "TC Electronic M300(リバーブユニット)",
            icon: "M300",
            ports: [
              { id: "inL", label: "IN 1 (TRS, モノで受ける)", type: "ts", dir: "in" },
              { id: "outL", label: "OUT 1 L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUT 2 R (TRS)", type: "trs", dir: "out" },
            ],
          },
        ],
        cablePalette: ["ts", "trs", "xlr", "speaker"],
        correctConnections: [
          { from: "mixer.auxSend", to: "reverb.inL", cable: "ts" },
          { from: "reverb.outL", to: "mixer.retL", cable: "trs" },
          { from: "reverb.outR", to: "mixer.retR", cable: "trs" },
        ],
        explain:
          "AUX SENDバスは通常モノラル1系統(各チャンネルからのセンド量を1つに集約したバス)なので、M300のようにステレオ入力を持つ機種でも、実務上はIN 1(L)だけにモノラルで送るのが一般的——M300はそのモノラル入力から左右に広がるステレオのリバーブ音を作り出す。戻りはOUT 1/OUT 2からのステレオ信号を、ミキサーのSTEREO IN(リターン)のL/R両方へ接続する。以前の単元で扱ったインサート(1chの信号を直列に外部機器へ通す配線)との違いは、こちらは『元のドライな音はそのまま残しつつ、センドで分けた分だけをエフェクト処理して並列(パラレル)に足す』という使い方である点。ボーカルやスネアなど、複数のチャンネルから同じリバーブへセンドを送って、1台のユニットを全体で共有できるのもAUX SEND/RETURN方式の利点。",
      },
    },
    {
      id: "drum_multimic_adat",
      order: 14,
      title: "ドラム収録の複数マイキングとADAT拡張配線",
      category: "配線問題(プロ環境)",
      hook: "マイク4本なのに、インターフェースのマイク入力が足りない——そんな時は外部マイクプリを『ADAT』1本でまとめて増設する。",
      patch: {
        scenario:
          "ドラムを4本のマイクで収録する。キック(バスドラム)に「Shure Beta 52A」、スネアに「Shure SM57」、オーバーヘッド左右に「AKG C414」を2本立てる。オーディオインターフェース「Focusrite Scarlett 18i20」の内蔵マイク入力だけでは他の楽器の分の余裕がなくなるため、外部マイクプリ「Behringer ADA8200」の4つのXLR入力に全マイクを立て、ADA8200のADAT OUT(光デジタル、8ch分をまとめて伝送できる)から、18i20背面のADAT INへ送って4ch分を一気に受け取ろう。",
        equipment: [
          { id: "kickMic", label: "Shure Beta 52A(キック用)", icon: "Beta52A", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "snareMic", label: "Shure SM57(スネア用)", icon: "SM57", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "ohL", label: "AKG C414(オーバーヘッドL)", icon: "C414", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "ohR", label: "AKG C414(オーバーヘッドR)", icon: "C414", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "preamp8200",
            label: "Behringer ADA8200(外部マイクプリ)",
            icon: "ADA8200",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "MIC IN 2 (XLR)", type: "xlr", dir: "in" },
              { id: "in3", label: "MIC IN 3 (XLR)", type: "xlr", dir: "in" },
              { id: "in4", label: "MIC IN 4 (XLR)", type: "xlr", dir: "in" },
              { id: "adatOut", label: "ADAT OUT(光)", type: "optical", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20",
            icon: "18i20",
            ports: [
              { id: "adatIn", label: "OPTICAL IN(ADAT)", type: "optical", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "optical", "usb", "trs", "midi"],
        correctConnections: [
          { from: "kickMic.out", to: "preamp8200.in1", cable: "xlr" },
          { from: "snareMic.out", to: "preamp8200.in2", cable: "xlr" },
          { from: "ohL.out", to: "preamp8200.in3", cable: "xlr" },
          { from: "ohR.out", to: "preamp8200.in4", cable: "xlr" },
          { from: "preamp8200.adatOut", to: "interface.adatIn", cable: "optical" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "キック・スネアには近接効果に強く音圧にも耐えるダイナミックマイク(Beta 52A、SM57)、オーバーヘッドには周波数レンジが広く繊細な音を拾えるコンデンサーマイク(C414)を使うのがドラム収録の定番の組み合わせ。ADA8200のような外部マイクプリは、マイク入力が足りないインターフェースの『増設用マイクプリ』として使え、集めた複数chの音を『ADAT(ライトパイプ)』という光デジタル伝送規格1本にまとめて送れる——ADATは見た目もコネクタも家庭用のS/PDIF光(TOSLINK)ケーブルと同じだが、最大8ch分をまとめて送れる点が異なる。Scarlett 18i20のように背面にADAT INを備えたインターフェースなら、この1本のケーブルで一気にチャンネル数を拡張できる。",
      },
    },
    {
      id: "aes_spdif_digital_transfer",
      order: 15,
      title: "マスタリングルームのAES/EBUとS/PDIFを配線する(Prism Sound ADA-8XR)",
      category: "配線問題(プロ環境)",
      hook: "同じ『デジタル伝送』でも、プロ機材同士のAES/EBUと、コンシューマー機器のS/PDIF(同軸)ではコネクタも扱いも違う。マスタリングルームで両方を配線してみよう。",
      patch: {
        scenario:
          "マスタリングルームで、高精度なAD/DAコンバーター「Prism Sound ADA-8XR」を中心に配線する。ADA-8XRのAES/EBU OUTから、Pro Tools HDXシステムの「Avid HD I/O」のAES/EBU INへ、プロ機材同士の標準的なデジタル伝送を行う。さらに、リファレンス用のCDプレーヤー「TASCAM CD-200BT」のS/PDIF OUT(同軸)を、ADA-8XRのS/PDIF INへ繋いで、比較用の音源として読み込めるようにしよう。",
        equipment: [
          {
            id: "converter",
            label: "Prism Sound ADA-8XR(AD/DAコンバーター)",
            icon: "ADA8XR",
            ports: [
              { id: "aesOut", label: "AES/EBU OUT (XLR)", type: "aes", dir: "out" },
              { id: "spdifIn", label: "S/PDIF IN (同軸/RCA)", type: "rca", dir: "in" },
            ],
          },
          { id: "hdio", label: "Avid HD I/O", icon: "HD I/O", ports: [{ id: "aesIn", label: "AES/EBU IN (XLR)", type: "aes", dir: "in" }] },
          { id: "cdPlayer", label: "TASCAM CD-200BT(リファレンスCDプレーヤー)", icon: "CD200BT", ports: [{ id: "spdifOut", label: "S/PDIF OUT (同軸/RCA)", type: "rca", dir: "out" }] },
        ],
        cablePalette: ["aes", "rca", "optical", "xlr", "digilink"],
        correctConnections: [
          { from: "converter.aesOut", to: "hdio.aesIn", cable: "aes" },
          { from: "cdPlayer.spdifOut", to: "converter.spdifIn", cable: "rca" },
        ],
        explain:
          "AES/EBU(AES3とも呼ばれる)は主にプロ機材同士で使われるデジタル伝送規格で、見た目はマイク用のXLRケーブルと同じ3ピンXLRコネクタを使い、1本でステレオ2ch分のデジタル音声を送れる(ただし本来はマイクケーブルと特性インピーダンスが異なる専用ケーブルを使うのが望ましいとされる)。一方S/PDIFはコンシューマー機器で広く普及したデジタル伝送規格で、同軸(見た目はRCAピンケーブルと同じ)または光(TOSLINK)のいずれかで2ch分を伝送する。今回のように、業務用のAES/EBUで基幹の伝送を組みつつ、S/PDIFで手軽にリファレンス音源を読み込む、という組み合わせはマスタリングルームでよくある構成。同じ『デジタル』でもコネクタと電気的な規格が違うため、変換が必要になる場面があることを覚えておこう。",
      },
    },
    {
      id: "guitar_hiz_input",
      order: 16,
      title: "エレキギターを正しい入力(Hi-Z)へ配線する(Fender Stratocaster + Apollo x6)",
      category: "配線問題",
      hook: "ギターとシンセ、どちらもTS/TRSケーブルで挿せてしまうから厄介——でも挿すべき入力は別。インピーダンスの違いを配線で体感しよう。",
      patch: {
        scenario:
          "宅録で「Fender Stratocaster(エレキギター)」と「Roland Gaia 2(シンセサイザー)」を同時に録音したい。オーディオインターフェース「Universal Audio Apollo x6」には、フロントパネルの「Hi-Z(インストゥルメント)入力」と、リアパネルの通常の「ライン入力」がある。ギターはHi-Z入力へ、シンセのステレオ出力(L/R)はライン入力へ、それぞれ正しい場所に配線しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "synth",
            label: "Roland Gaia 2(シンセサイザー)",
            icon: "Gaia2",
            ports: [
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Universal Audio Apollo x6",
            icon: "ApolloX6",
            ports: [
              { id: "hiZ1", label: "フロント Hi-Z INPUT 1 (TS)", type: "ts", dir: "in" },
              { id: "lineIn3", label: "リア LINE IN 3 (TRS)", type: "trs", dir: "in" },
              { id: "lineIn4", label: "リア LINE IN 4 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["ts", "trs", "xlr", "usb"],
        correctConnections: [
          { from: "guitar.out", to: "interface.hiZ1", cable: "ts" },
          { from: "synth.outL", to: "interface.lineIn3", cable: "trs" },
          { from: "synth.outR", to: "interface.lineIn4", cable: "trs" },
        ],
        explain:
          "エレキギターのようなパッシブピックアップの楽器は『ハイインピーダンス(高い電気抵抗の性質)・アンバランス』な信号を出しており、通常のライン入力(ライン機器を前提にした低インピーダンス設計)にそのまま挿すと、インピーダンスの不一致で音がこもったり、レベルが不足したりしやすい。そこで多くのインターフェースはフロントパネルに『Hi-Z(インストゥルメント)』対応の入力を備えており、ギター・ベースはそちらへ挿すのが基本。一方、Roland Gaia 2のようなシンセサイザーはライン出力用に設計された機材なので、通常のライン入力(多くはリアパネルのTRS)へ挿すのが正解。以前の単元で扱ったRadial J48のようなDIボックスは『マイク入力を使ってバランス化・長距離伝送する』ための解決策で、対して今回のHi-Z入力は『インターフェースに1本挿すだけで済ませる』ための、宅録で最も手軽な解決策——同じインピーダンスの問題に対する2つの違うアプローチとして覚えておくとよい。",
      },
    },
    {
      id: "dj_booth_link_master",
      order: 17,
      title: "DJブースを配線する(CDJ-3000 ×2 + DJM-A9 + PAスピーカー)",
      category: "配線問題",
      hook: "『音を運ぶ配線』と『情報を運ぶ配線』が別々に存在する、モダンなDJブースの裏側を配線しよう。",
      patch: {
        scenario:
          "クラブのDJブースを配線する。2台の「Pioneer DJ CDJ-3000」から、DJミキサー「Pioneer DJ DJM-A9」のCH1・CH2ライン入力へ、それぞれ音声(オーディオ)を送る。さらに2台のCDJを「PRO DJ LINK」というLAN(Ethernet)接続でDJM-A9とつなぎ、USBメモリ内の曲データや波形、BPM同期などの情報を共有できるようにする。最後にDJM-A9のMASTER OUT(L/R)から、パワードスピーカー「QSC K12.2」2台へマスター音声を送ろう。",
        equipment: [
          {
            id: "cdj1",
            label: "Pioneer DJ CDJ-3000(#1)",
            icon: "CDJ3000",
            ports: [
              { id: "audioOut", label: "AUDIO OUT (RCA)", type: "rca", dir: "out" },
              { id: "link", label: "LINK (Ethernet)", type: "ethernet", dir: "out" },
            ],
          },
          {
            id: "cdj2",
            label: "Pioneer DJ CDJ-3000(#2)",
            icon: "CDJ3000",
            ports: [
              { id: "audioOut", label: "AUDIO OUT (RCA)", type: "rca", dir: "out" },
              { id: "link", label: "LINK (Ethernet)", type: "ethernet", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Pioneer DJ DJM-A9",
            icon: "DJM-A9",
            ports: [
              { id: "ch1In", label: "CH1 LINE IN (RCA)", type: "rca", dir: "in" },
              { id: "ch2In", label: "CH2 LINE IN (RCA)", type: "rca", dir: "in" },
              { id: "link1", label: "LINK 1 (Ethernet)", type: "ethernet", dir: "in" },
              { id: "link2", label: "LINK 2 (Ethernet)", type: "ethernet", dir: "in" },
              { id: "masterOutL", label: "MASTER 1 OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "masterOutR", label: "MASTER 1 OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "spkL", label: "QSC K12.2(L)", icon: "K12.2", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "QSC K12.2(R)", icon: "K12.2", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["rca", "xlr", "ethernet", "trs", "speaker"],
        correctConnections: [
          { from: "cdj1.audioOut", to: "mixer.ch1In", cable: "rca" },
          { from: "cdj2.audioOut", to: "mixer.ch2In", cable: "rca" },
          { from: "cdj1.link", to: "mixer.link1", cable: "ethernet" },
          { from: "cdj2.link", to: "mixer.link2", cable: "ethernet" },
          { from: "mixer.masterOutL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.masterOutR", to: "spkR.in", cable: "xlr" },
        ],
        explain:
          "CDJ-3000の音そのもの(オーディオ信号)は、いまも変わらずアナログのRCA(ピン)ケーブルでミキサーのライン入力へ送るのが基本。一方、CDJとミキサーを『PRO DJ LINK』と呼ばれるLANケーブル(Ethernetケーブル)で接続すると、音声そのものではなく、USBメモリ内の曲データや波形表示、BPM同期などの情報をやり取りできるようになる——つまり『音を運ぶ配線』と『情報を運ぶ配線』の2系統を、あえて別のケーブルで持っているのがモダンなDJブースの特徴。マスター出力はミキサーからバランス伝送のXLRで、パワードスピーカー(アンプ内蔵)へ直接送る。RCAは民生機器の接続でもおなじみの規格だが、DJ機材ではプロ機材とコンシューマー機材の橋渡し的な立ち位置として今も現役で使われている。",
      },
    },
    {
      id: "wireless_mic_receiver",
      order: 18,
      title: "ワイヤレスマイクシステムを配線する(Shure ULXD4D)",
      category: "配線問題",
      hook: "配線パズルなのに、ケーブルを挿さない区間がある——ワイヤレスマイクの『どこまでが有線で、どこからが無線か』を体験しよう。",
      patch: {
        scenario:
          "屋外イベントで、2人のボーカリストがそれぞれ「Shure ULXD2/SM58」ワイヤレスハンドヘルドマイクを使う。2ch分のデジタルワイヤレス受信機「Shure ULXD4D」のCH1 OUT・CH2 OUTから、ミキサー「Yamaha MG12XU」のCH1・CH2 XLR INへそれぞれ接続し、ミキサーのMAIN OUT(XLR)をパワードスピーカー「Yamaha DZR12」に送ろう。なお、マイク本体(送信機)から受信機までの区間は電波で届くため、この配線問題には登場しない。",
        equipment: [
          {
            id: "receiver",
            label: "Shure ULXD4D(2chワイヤレス受信機)",
            icon: "ULXD4D",
            ports: [
              { id: "out1", label: "CH1 OUT (XLR)", type: "xlr", dir: "out" },
              { id: "out2", label: "CH2 OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "ch1In", label: "CH1 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "ch2In", label: "CH2 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "mainOut", label: "MAIN OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "speaker", label: "Yamaha DZR12(パワードスピーカー)", icon: "DZR12", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "rca", "speaker"],
        correctConnections: [
          { from: "receiver.out1", to: "mixer.ch1In", cable: "xlr" },
          { from: "receiver.out2", to: "mixer.ch2In", cable: "xlr" },
          { from: "mixer.mainOut", to: "speaker.in", cable: "xlr" },
        ],
        explain:
          "Shure ULXD4Dのような受信機のOUTは、ふつうのマイクと同じくXLRでミキサーの入力へ接続する。受信機の出力レベルは『MIC/LINE』を切り替えられる機種が多く、どちらの入力(マイクin/ラインin)に挿すかに合わせて設定を揃える必要がある。送信機(ハンドヘルドマイク)から受信機までの区間は電波(無線)で伝送されており、物理的なケーブルは存在しない——今回の配線パズルで唯一『ケーブルを挿さない区間がある』という点が学びのポイント。ワイヤレスシステムを選ぶ際は、使用できる周波数帯域やチャンネル数、受信機アンテナの設置方法(見通しの確保など)も合わせて確認しておくと、本番での混信・受信トラブルを防ぎやすい。",
      },
    },
    {
      id: "guitar_loadbox_lineout",
      order: 19,
      title: "ギターアンプをロードボックスでライン録りする(Universal Audio OX)",
      category: "配線問題",
      hook: "爆音を出さずにチューブアンプの音を録りたい——スピーカー用のケーブルとライン用のケーブル、挿し間違えるとアンプを壊しかねない配線を丁寧に体験しよう。",
      patch: {
        scenario:
          "自宅で、真空管ギターアンプヘッド「Marshall JCM800」の音をライン録音したい。JCM800のスピーカー出力を、ロードボックス(キャビネットシミュレーター)「Universal Audio OX Amp Top Box」の「FROM AMPLIFIER」端子へスピーカーケーブルで接続する(OXがアンプの負荷を肩代わりする)。OXの「TO SPEAKER」端子から、実機のギターキャビネット「Marshall 1960A」へもスピーカーケーブルで接続し、音量を絞りつつ実機キャビも鳴らせるようにする。最後に、OXの「LINE OUT」から、オーディオインターフェース「Universal Audio Apollo x6」のライン入力へ接続し、キャビシミュレートされたライン信号を録音しよう。",
        equipment: [
          { id: "ampHead", label: "Marshall JCM800(ギターアンプヘッド)", icon: "JCM800", ports: [{ id: "speakerOut", label: "SPEAKER OUT", type: "speaker", dir: "out" }] },
          {
            id: "ox",
            label: "Universal Audio OX Amp Top Box(ロードボックス)",
            icon: "OX",
            ports: [
              { id: "fromAmp", label: "FROM AMPLIFIER", type: "speaker", dir: "in" },
              { id: "toSpeaker", label: "TO SPEAKER", type: "speaker", dir: "out" },
              { id: "lineOut", label: "LINE OUT (TRS)", type: "trs", dir: "out" },
            ],
          },
          { id: "cabinet", label: "Marshall 1960A(ギターキャビネット)", icon: "1960A", ports: [{ id: "in", label: "IN", type: "speaker", dir: "in" }] },
          { id: "interface", label: "Universal Audio Apollo x6", icon: "ApolloX6", ports: [{ id: "lineIn", label: "LINE IN 3 (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["speaker", "trs", "xlr", "ts"],
        correctConnections: [
          { from: "ampHead.speakerOut", to: "ox.fromAmp", cable: "speaker" },
          { from: "ox.toSpeaker", to: "cabinet.in", cable: "speaker" },
          { from: "ox.lineOut", to: "interface.lineIn", cable: "trs" },
        ],
        explain:
          "真空管アンプのヘッドは常にスピーカー(またはそれ相当の負荷)につながっていないと、内部の出力トランスを傷める危険があるため、OXのようなロードボックスはまず『FROM AMPLIFIER』でアンプの負荷を肩代わりする。OXはそのスピーカーレベルの信号をデジタルで解析し、内蔵のキャビネット/マイクのシミュレーションを通したライン信号を『LINE OUT』から出力できる——実際にマイクを立てずに、マイキングした音に近い音をライン録りできるのがロードボックスの利点。『TO SPEAKER』から実機のキャビネットにも音を送れるため、音量を絞りながら生のキャビも同時に鳴らす、という使い方もできる。『FROM AMPLIFIER』『TO SPEAKER』の区間は、ギターアンプの高出力に耐えるスピーカーケーブルを使う必要があり、間違えてTRSのライン用ケーブルなどを挿すと機材を破損するおそれがある点に注意。",
      },
    },
    {
      id: "iem_wireless_monitor",
      order: 20,
      title: "ライブのイヤモニ(IEM)配線を組む(Shure PSM300)",
      category: "配線問題",
      hook: "以前の単元で扱ったAUX SENDが、今度はワイヤレスイヤモニの送信機へつながる——演奏者ごとに違う『パーソナルミックス』を作る配線を体験しよう。",
      patch: {
        scenario:
          "ライブハウスで、ボーカルとギタリストにそれぞれ違うバランスのイヤモニ(インイヤーモニター)を渡したい。ミキサー「Yamaha MG12XU」のAUX SEND 2(ボーカル用ミックス)から、ワイヤレスイヤモニシステム「Shure PSM300」の送信機「P3T」(ボーカル用)のINPUTへ接続する。同様に、AUX SEND 3(ギタリスト用ミックス)から、もう1台のP3T(ギタリスト用)のINPUTへ接続しよう。送信機からボディパック受信機「P3R」・イヤホンまでの区間は電波で届くため、この配線問題には登場しない。",
        equipment: [
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "auxSend2", label: "AUX SEND 2 (TS, ボーカル用)", type: "ts", dir: "out" },
              { id: "auxSend3", label: "AUX SEND 3 (TS, ギタリスト用)", type: "ts", dir: "out" },
            ],
          },
          { id: "tx1", label: "Shure PSM300 送信機 P3T(ボーカル用)", icon: "P3T", ports: [{ id: "input", label: "INPUT (TS/TRS)", type: "ts", dir: "in" }] },
          { id: "tx2", label: "Shure PSM300 送信機 P3T(ギタリスト用)", icon: "P3T", ports: [{ id: "input", label: "INPUT (TS/TRS)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "speaker"],
        correctConnections: [
          { from: "mixer.auxSend2", to: "tx1.input", cable: "ts" },
          { from: "mixer.auxSend3", to: "tx2.input", cable: "ts" },
        ],
        explain:
          "AUX SENDは各チャンネルから独立して送り出せるモノラルの送り出しバスで、演奏者ごとに欲しいバランス(ボーカルは自分の声を大きめ、ギタリストはクリックとガイドを大きめ、など)を個別に作れる『パーソナルモニターミックス』に使われる——これはリバーブの単元で扱ったAUX SEND/RETURNと同じ仕組みを、外部エフェクターではなく人間向けのミックスに応用したもの。Shure PSM300のようなワイヤレスイヤモニシステムでは、ミキサーのAUX SENDから送信機P3TのINPUTまでは通常のケーブル配線だが、そこから先(P3T→受信機P3R→イヤホン)は電波で伝送されるため、物理的なケーブルは存在しない。複数の送信機を同時に使う場合は、それぞれ別の周波数(チャンネル)に設定しないと混信するため、本番前のセッティングが重要になる。",
      },
    },
  ],
};
