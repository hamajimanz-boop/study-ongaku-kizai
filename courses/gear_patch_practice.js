/* 実践問題編: デスク配線パズル(kind:"patch") — 全30単元
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
    {
      id: "eurorack_cv_gate",
      order: 21,
      title: "Eurorackモジュラーシンセをパッチする(Doepfer A-155 + A-110 + A-138)",
      category: "配線問題",
      hook: "XLR、TRS、MIDI……信号の種類ごとにコネクタが変わるのがふつうの機材の世界。でもモジュラーシンセは、音程もオン/オフも音そのものも、全部同じ1本のケーブルで送ってしまう。",
      patch: {
        scenario:
          "Eurorackのモジュラーシンセを組む。ステップシーケンサー「Doepfer A-155」のCV OUT(音の高さを電圧で送る出力)を、VCOモジュール「Doepfer A-110」のCV INへ、GATE OUT(音の長さ・オン/オフを送る出力)を、A-110のGATE INへ、それぞれ3.5mmのモジュラーパッチケーブルで接続する。A-110が生成した音声(AUDIO OUT)は、パッシブミキサーモジュール「Doepfer A-138」のIN 1へ、こちらも同じ3.5mmパッチケーブルで接続しよう。",
        equipment: [
          {
            id: "seq",
            label: "Doepfer A-155(ステップシーケンサー)",
            icon: "A-155",
            ports: [
              { id: "cvOut", label: "CV OUT", type: "cv", dir: "out" },
              { id: "gateOut", label: "GATE OUT", type: "cv", dir: "out" },
            ],
          },
          {
            id: "vco",
            label: "Doepfer A-110(VCO)",
            icon: "A-110",
            ports: [
              { id: "cvIn", label: "CV IN", type: "cv", dir: "in" },
              { id: "gateIn", label: "GATE IN", type: "cv", dir: "in" },
              { id: "audioOut", label: "AUDIO OUT", type: "cv", dir: "out" },
            ],
          },
          { id: "mixerMod", label: "Doepfer A-138(パッシブミキサーモジュール)", icon: "A-138", ports: [{ id: "in1", label: "IN 1", type: "cv", dir: "in" }] },
        ],
        cablePalette: ["cv", "trs", "ts", "midi"],
        correctConnections: [
          { from: "seq.cvOut", to: "vco.cvIn", cable: "cv" },
          { from: "seq.gateOut", to: "vco.gateIn", cable: "cv" },
          { from: "vco.audioOut", to: "mixerMod.in1", cable: "cv" },
        ],
        explain:
          "Eurorackのモジュラーシンセでは、音の高さを電圧で表す『CV(Control Voltage)』、音のオン/オフのタイミングを表す『Gate』、そして実際の音声(オーディオ)まで、信号の種類が違っても物理的にはすべて同じ3.5mmモノラルのパッチケーブルでやり取りする——これは、信号の種類ごとにコネクタ形状が変わる(XLR、TRS、MIDIなど)これまでの単元の機材とはまったく違う発想で、モジュラーシンセ特有の『何にでも同じケーブルを挿せてしまう自由さ』の背景になっている。ただし物理的に同じケーブルでも、繋ぐ先のジャックが『CV/Gate入力』を想定しているか『オーディオ入力』を想定しているかで電圧のレンジや扱いが異なるため、どのモジュールのどの端子が何を意味するかを理解していないと、正しく音を作れない。MIDIケーブルは今回のシステムには登場しないが、MIDI-CV変換モジュールを使えば、以前の単元で扱ったMIDIキーボードの演奏データをCV/Gateに変換して、モジュラーシンセを鍵盤で演奏することもできる。",
      },
    },
    {
      id: "field_recorder_live_backup",
      order: 22,
      title: "フィールドレコーダーでライブ本番のバックアップ収録をする(Zoom H8)",
      category: "配線問題",
      hook: "メインの録音システムが本番中に落ちたら?——デジタル卓とは完全に独立した経路で音を残しておく『保険』の配線を体験しよう。",
      patch: {
        scenario:
          "ライブの本番音声を、メインのデジタル卓とは完全に独立した経路でも録音しておきたい。デジタルミキサー「Yamaha CL5」のMAIN OUT(L/R, XLR)を、マルチトラックレコーダー「Zoom H8」のCH1・CH2のXLR入力へ接続し、本体のSDカードへステレオミックスを独立収録する。さらに客席にコンデンサーマイク「Neumann KM 184」を1本立て、その出力をH8のCH3へ接続して、会場の空気感(拍手・歓声・生の反響)も別チャンネルで記録しよう。",
        equipment: [
          {
            id: "mixer",
            label: "Yamaha CL5(デジタルミキサー)",
            icon: "CL5",
            ports: [
              { id: "mainOutL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainOutR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "ambMic", label: "Neumann KM 184(客席アンビエンスマイク)", icon: "KM184", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "recorder",
            label: "Zoom H8(マルチトラックレコーダー)",
            icon: "H8",
            ports: [
              { id: "inL", label: "CH1 IN (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "CH2 IN (XLR)", type: "xlr", dir: "in" },
              { id: "inAmb", label: "CH3 IN (XLR)", type: "xlr", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "usb", "rca"],
        correctConnections: [
          { from: "mixer.mainOutL", to: "recorder.inL", cable: "xlr" },
          { from: "mixer.mainOutR", to: "recorder.inR", cable: "xlr" },
          { from: "ambMic.out", to: "recorder.inAmb", cable: "xlr" },
        ],
        explain:
          "メインのデジタル卓(CL5)からPro Toolsなどの本線に送っている経路とは完全に独立した経路で、Zoom H8のSDカードにも同時に音を残しておくことで、本線側のPCやオーディオI/Fにトラブルが起きても録音データが手元に残る『保険』になる。Zoom H8はXLRのマイク入力を複数備え、乾電池でも動作できる機種が多く、電源トラブルにも強いため、ライブの現場ではこうした独立バックアップ収録の定番として使われる。客席にコンデンサーマイク(KM 184)を1本立ててH8の別チャンネルに録っておくと、あとで会場の空気感をミックスにブレンドできる——本線のミックスとは別に、会場の反響や拍手だけを狙って録る『アンビエンスマイク』の典型的な使い方。",
      },
    },
    {
      id: "streaming_switcher_audio",
      order: 23,
      title: "配信スイッチャーとオーディオミキサーを連携させる(ATEM Mini Extreme ISO)",
      category: "配線問題",
      hook: "映像機材はXLRを持たないことが多い——6.3mmのTRSと3.5mmのミニジャック、コネクタのサイズ違いをどう乗り越えるかを配線しよう。",
      patch: {
        scenario:
          "複数カメラでのライブ配信本番。司会者の音声はアナログミキサー「Yamaha MG12XU」でまとめ、MAIN OUT(TRS)を、ビデオスイッチャー「Blackmagic ATEM Mini Extreme ISO」のMIC/LINE 1(3.5mmステレオ入力)へ、TRS-3.5mm変換ケーブルで接続する。さらにゲスト用のコンパクトなワイヤレスラベリアマイクシステム「Sennheiser XSW-D Lavalier Set」の受信機の出力を、ATEMのMIC/LINE 2へ直接接続しよう。",
        equipment: [
          { id: "mixer", label: "Yamaha MG12XU", icon: "MG12XU", ports: [{ id: "mainOut", label: "MAIN OUT (TRS)", type: "trs", dir: "out" }] },
          { id: "xswReceiver", label: "Sennheiser XSW-D 受信機(ゲスト用)", icon: "XSW-D", ports: [{ id: "out", label: "OUTPUT (3.5mm TRS)", type: "trs", dir: "out" }] },
          {
            id: "switcher",
            label: "Blackmagic ATEM Mini Extreme ISO",
            icon: "ATEM",
            ports: [
              { id: "audioIn1", label: "MIC/LINE 1 (3.5mm)", type: "trs", dir: "in" },
              { id: "audioIn2", label: "MIC/LINE 2 (3.5mm)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "usb", "rca"],
        correctConnections: [
          { from: "mixer.mainOut", to: "switcher.audioIn1", cable: "trs" },
          { from: "xswReceiver.out", to: "switcher.audioIn2", cable: "trs" },
        ],
        explain:
          "ATEM Mini Extreme ISOのようなコンパクトなライブ配信スイッチャーは、映像だけでなく音声も内蔵のFairlightミキサーで扱えるが、入力は3.5mmのステレオミニジャックが基本で、業務用のXLR入力を持たない機種が多い。そのため、アナログミキサーのような6.3mmのTRS出力を持つ機材をつなぐ場合は、TRS-3.5mm変換ケーブルが必要になる。Sennheiser XSW-D Lavalier Setのような近年のコンパクトなワイヤレスシステムは、受信機自体が3.5mmのTRS出力を備え、カメラや配信機材へ直接挿せるよう設計されており、大掛かりな受信機とXLRケーブルを揃えなくても手軽に導入できるのが特徴。複数の音声ソースをまとめる際は、あらかじめミキサー側で音量バランスを整えてからスイッチャーへ送り、スイッチャー側での音声調整は最終的な微調整にとどめるのが実務的。",
      },
    },
    {
      id: "talkback_console_booth",
      order: 24,
      title: "トークバック配線を組む(SSL SiXでブースに指示を送る)",
      category: "配線問題(プロ環境)",
      hook: "『せーの、もう1テイクいきましょう』——演奏中のブースに、音楽そのものとは別の『指示の声』だけを割り込ませる配線を体験しよう。",
      patch: {
        scenario:
          "コントロールルームからボーカルブースへ指示を送りたい。小型アナログミキサー「SSL SiX」の背面にあるTALKBACK MICへ「Audio-Technica AT8531(グースネック型トークバックマイク)」を接続する。SSL SiXのCUE OUT(L/R)からは、ブース内のヘッドホンアンプ「Behringer HA400」へ接続し、演奏者用のヘッドホン「Sony MDR-CD900ST」までつなげよう。TALKトークバックボタンを押している間だけ、エンジニアの声がCUE OUTのミックスに割り込んで演奏者に届く。",
        equipment: [
          { id: "tbMic", label: "Audio-Technica AT8531(トークバックマイク)", icon: "AT8531", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "console",
            label: "SSL SiX",
            icon: "SiX",
            ports: [
              { id: "tbIn", label: "TALKBACK MIC (XLR)", type: "xlr", dir: "in" },
              { id: "cueOutL", label: "CUE OUT L (TRS)", type: "trs", dir: "out" },
              { id: "cueOutR", label: "CUE OUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
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
          { id: "hp", label: "Sony MDR-CD900ST(演奏者用)", icon: "900ST", ports: [{ id: "in", label: "IN (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "midi"],
        correctConnections: [
          { from: "tbMic.out", to: "console.tbIn", cable: "xlr" },
          { from: "console.cueOutL", to: "hpAmp.inL", cable: "trs" },
          { from: "console.cueOutR", to: "hpAmp.inR", cable: "trs" },
          { from: "hpAmp.out", to: "hp.in", cable: "trs" },
        ],
        explain:
          "トークバックとは、コントロールルームからブースの演奏者へ『指示の声』だけを届けるための専用の配信経路。SSL SiXのようにTALKBACK MIC専用のXLR入力(ファンタム電源対応)を持つ機種では、そこに挿したマイクの音は通常のチャンネルとは別扱いになり、TALKボタンを押している間だけCUE OUT(ブースへ送るヘッドホンミックス)に重ねて送られる——ボタンを離せば通常の演奏ミックスに戻る。以前の単元で扱ったAUX/CUE配線が『演奏者に聴かせたい音楽のバランス』を作る配線だったのに対し、トークバックは『エンジニアの声を一時的に割り込ませる』ための別回路である点が違い。ライブ収録や多人数セッションでは、トークバックがないと、指示を出すたびにヘッドホンを外してもらう必要が生じ、テイクとテイクの間のテンポが大きく落ちてしまう。",
      },
    },
    {
      id: "sidechain_ducking_kick_bass",
      order: 25,
      title: "サイドチェイン配線でダッキング効果を作る(dbx 160A)",
      category: "配線問題(プロ環境)",
      hook: "以前の単元で扱ったインサート配線と似ているけれど、今回はもう1本『トリガー用』のケーブルが増える——キックが鳴った瞬間だけベースを引っ込める、EDM定番の配線を体験しよう。",
      patch: {
        scenario:
          "ダンストラックのミックスで、キックが鳴るたびにベースの音量を一瞬引っ込める『サイドチェイン・ダッキング』をハードウェアで作る。パッチベイのCH KICK INSERT SEND(キックchの信号)を、コンプレッサー「dbx 160A」のDETECTOR IN(外部キー入力。コンプが圧縮するかどうかの判断材料にする信号の入り口)へ送る。さらにCH BASS INSERT SENDから、160AのINPUT(実際に圧縮される音声そのものの入り口)へベースの信号を送り、160AのOUTPUTから、CH BASS INSERT RETURNへ処理後の信号を戻そう。",
        equipment: [
          {
            id: "patchbay",
            label: "Neutrik NPPA(TT/バンタムパッチベイ)",
            icon: "PB",
            ports: [
              { id: "kickSend", label: "CH KICK INSERT SEND", type: "trs", dir: "out" },
              { id: "bassSend", label: "CH BASS INSERT SEND", type: "trs", dir: "out" },
              { id: "bassReturn", label: "CH BASS INSERT RETURN", type: "trs", dir: "in" },
            ],
          },
          {
            id: "comp",
            label: "dbx 160A(コンプレッサー)",
            icon: "160A",
            ports: [
              { id: "keyIn", label: "DETECTOR IN(外部キー入力)", type: "trs", dir: "in" },
              { id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" },
              { id: "out", label: "OUTPUT (TRS)", type: "trs", dir: "out" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "ts", "speaker"],
        correctConnections: [
          { from: "patchbay.kickSend", to: "comp.keyIn", cable: "trs" },
          { from: "patchbay.bassSend", to: "comp.in", cable: "trs" },
          { from: "comp.out", to: "patchbay.bassReturn", cable: "trs" },
        ],
        explain:
          "dbx 160AのDETECTOR INにケーブルを挿すと、コンプレッサーは『いつ・どれだけ圧縮するか』の判断材料を、本来のINPUT信号ではなく、DETECTOR INに挿した外部信号(ここではキック)に切り替える——ただし実際に圧縮されて音が変化するのは、あくまでINPUT→OUTPUTを通る信号(ここではベース)。つまりキックが鳴った瞬間だけベースの音量がグッと下がり、キックが鳴りやんだ瞬間にまた元の音量に戻る『ダッキング』が生まれる。これがEDMやハウスでよく聴く『ポンピング』したベースの正体。以前のインサート配線(SEND→機材IN、機材OUT→RETURN)を思い出すと理解しやすく、あれに『別チャンネルからのトリガー用ケーブル(DETECTOR IN)』を1本追加した形と考えるとよい。ソフトウェアのDAWでは同じ効果をサイドチェイン・コンプというプラグイン機能で作るのが一般的だが、原理は今回のハードウェア配線と同じ。",
      },
    },
    {
      id: "mic_splitter_foh_monitor",
      order: 26,
      title: "マイクスプリッターでFOHとモニターに音を分岐する(Radial JS3)",
      category: "配線問題(プロ環境)",
      hook: "1本のマイクの音を、グラウンド(接地)が別々の3つの卓に安全に分けて送るには?——『分岐』の裏にある地味だが重要な配線を体験しよう。",
      patch: {
        scenario:
          "大きめのライブ会場で、ボーカルマイク「Shure SM58」の音を、FOH卓・モニター卓・中継録音システムの3系統に同時に送りたい。マイクをパッシブスプリッター「Radial JS3」のMIC INへ挿し、そこから3方向に分岐する。DIRECT OUT(トランスを通らない直結スルー)はFOH卓「Midas M32」へ、ISO OUT 1(トランスで電気的に絶縁された出力)はモニター卓「Behringer X32」へ、ISO OUT 2(同じくトランス絶縁された出力)は中継録音システム「Sound Devices 970」へ、それぞれ接続しよう。",
        equipment: [
          { id: "mic", label: "Shure SM58(ボーカル用)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "splitter",
            label: "Radial JS3(パッシブマイクスプリッター)",
            icon: "JS3",
            ports: [
              { id: "in", label: "MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "directOut", label: "DIRECT OUT (XLR, 直結スルー)", type: "xlr", dir: "out" },
              { id: "isoOut1", label: "ISO OUT 1 (XLR, トランス絶縁)", type: "xlr", dir: "out" },
              { id: "isoOut2", label: "ISO OUT 2 (XLR, トランス絶縁)", type: "xlr", dir: "out" },
            ],
          },
          { id: "foh", label: "Midas M32(FOH卓)", icon: "M32", ports: [{ id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "mon", label: "Behringer X32(モニター卓)", icon: "X32", ports: [{ id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "broadcast", label: "Sound Devices 970(中継録音システム)", icon: "SD970", ports: [{ id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "speaker", "rca"],
        correctConnections: [
          { from: "mic.out", to: "splitter.in", cable: "xlr" },
          { from: "splitter.directOut", to: "foh.in1", cable: "xlr" },
          { from: "splitter.isoOut1", to: "mon.in1", cable: "xlr" },
          { from: "splitter.isoOut2", to: "broadcast.in1", cable: "xlr" },
        ],
        explain:
          "大規模なライブでは、FOH卓・モニター卓・中継録音システムがそれぞれ別の電源・別の場所に置かれ、微妙に基準となる接地(グラウンド)がずれていることが多い。1本のマイクの信号を電気的にそのまま複数の機材へ分配すると、このグラウンドのずれが原因で『ハムノイズ』が乗るグラウンドループが発生しやすい。Radial JS3のようなスプリッターは、DIRECT OUT(トランスを通らない直結の出力。ファンタム電源をそのまま素通しできるためマイクに一番近いFOH卓へ使うのが基本)と、ISO OUT(トランスによって電気的に絶縁された出力。絶縁されているためグラウンドループが起きにくい)を使い分けることで、複数の卓に安全に同じ音を届けられる。以前の単元で扱ったMADIのようなデジタル多ch伝送とは違い、スプリッターはアナログのまま『同じ信号をそっくりそのまま複製して配る』ための機材という点が特徴。",
      },
    },
    {
      id: "acoustic_piezo_preamp_pa",
      order: 27,
      title: "アコースティックギターのピエゾピックアップをプリアンプ経由でPAに送る(Fishman)",
      category: "配線問題",
      hook: "エレキギターのHi-Z入力とは違うアプローチ——アコースティック専用のプリアンプ1台で、ステージ用アンプとPA用のXLR、2つの出口に音を分ける配線を体験しよう。",
      patch: {
        scenario:
          "弾き語りライブで、サドル下にピエゾピックアップを内蔵したエレアコ「Taylor 214ce」を使う。ギターの出力を、アコースティック専用プリアンプ「Fishman Platinum Pro EQ/DI」のINPUTへ接続する。プリアンプの1/4″ OUTPUTからは、演奏者が自分の音を聴くためのステージ用アンプ「Fishman Loudbox Performer」へ、そしてプリアンプのXLR DI OUTからは、FOHのミキサー「Yamaha MG12XU」のマイク入力へ、それぞれ接続しよう。",
        equipment: [
          { id: "guitar", label: "Taylor 214ce(ピエゾピックアップ内蔵エレアコ)", icon: "214ce", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "preamp",
            label: "Fishman Platinum Pro EQ/DI",
            icon: "PlatinumPro",
            ports: [
              { id: "input", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "ampOut", label: "1/4″ OUTPUT (TS)", type: "ts", dir: "out" },
              { id: "xlrOut", label: "XLR DI OUT", type: "xlr", dir: "out" },
            ],
          },
          { id: "stageAmp", label: "Fishman Loudbox Performer(アコースティックアンプ)", icon: "Loudbox", ports: [{ id: "in", label: "IN (TS)", type: "ts", dir: "in" }] },
          { id: "mixer", label: "Yamaha MG12XU", icon: "MG12XU", ports: [{ id: "ch1In", label: "CH1 MIC IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["ts", "xlr", "trs", "speaker"],
        correctConnections: [
          { from: "guitar.out", to: "preamp.input", cable: "ts" },
          { from: "preamp.ampOut", to: "stageAmp.in", cable: "ts" },
          { from: "preamp.xlrOut", to: "mixer.ch1In", cable: "xlr" },
        ],
        explain:
          "ピエゾピックアップの信号は、エレキギターと同じくハイインピーダンスだが、ピエゾ特有の硬質な音色やハウリング(フィードバック)対策のノッチフィルターなど、アコースティックギター専用のケア(トーンの補正)が必要になる場面が多い。Fishman Platinum Pro EQ/DIのようなアコースティック専用プリアンプは、EQでその音色を整えたうえで、1/4″の非バランス出力(近くのアンプ用、短距離向き)と、トランス絶縁されたバランスのXLR DI出力(長距離をノイズなく引ける、FOH卓向き)の両方を同時に出せる。以前の単元(Hi-Z入力)では『インターフェースのHi-Z入力に直接挿す』手軽な方法を扱ったが、今回のようにライブでステージ用アンプとFOHへ同時に音を送りたい場合は、DIを内蔵した専用プリアンプを使う方が実務的。XLR DI OUTにはたいてい『GROUND LIFT』スイッチが付いており、グラウンドループでハムが出た場合はここで接地を切り離して対処できる。",
      },
    },
    {
      id: "ground_loop_hum_eliminator",
      order: 28,
      title: "ハムノイズを断つ配線(Ebtech Hum Eliminator)",
      category: "配線問題",
      hook: "以前の単元で『GROUND LIFT』というスイッチが出てきたが、今回はスイッチではなく専用の機材そのものを配線に挟んで『ブーン』というノイズを断ち切ろう。",
      patch: {
        scenario:
          "宅録スタジオで、シンセサイザー「Roland Gaia 2」のステレオ出力を、離れた場所に置いたミキサー「Yamaha MG12XU」のSTEREO INへケーブルで送ったところ、電源タップが別系統なせいで『ブーン』というハムノイズ(グラウンドループによる低周波ノイズ)が乗ってしまった。Gaia 2とMG12XUの間に、アイソレーショントランスを内蔵した「Ebtech Hum Eliminator HE-2」を挟んで、ハムノイズを断ち切ろう。",
        equipment: [
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
            id: "humEliminator",
            label: "Ebtech Hum Eliminator HE-2",
            icon: "HE-2",
            ports: [
              { id: "inL", label: "IN L (TRS)", type: "trs", dir: "in" },
              { id: "inR", label: "IN R (TRS)", type: "trs", dir: "in" },
              { id: "outL", label: "OUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "stereoInL", label: "STEREO IN L (TRS)", type: "trs", dir: "in" },
              { id: "stereoInR", label: "STEREO IN R (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "ts", "rca"],
        correctConnections: [
          { from: "synth.outL", to: "humEliminator.inL", cable: "trs" },
          { from: "synth.outR", to: "humEliminator.inR", cable: "trs" },
          { from: "humEliminator.outL", to: "mixer.stereoInL", cable: "trs" },
          { from: "humEliminator.outR", to: "mixer.stereoInR", cable: "trs" },
        ],
        explain:
          "グラウンドループは、2つの機材がそれぞれ別のコンセント(別の電源系統)につながっていて、両者の接地(グラウンド)の電位にわずかな差があるときに、ケーブルのシールド線を伝って微弱な電流がループ状に流れてしまうことで起きる。これが50Hz/60Hzの『ブーン』というハムノイズの主な原因の1つ。Ebtech Hum Eliminatorのような機材は、内部のアイソレーショントランスによって、信号(音声)は電磁誘導で伝えつつ、2つの機材の電気的な接続(直流的なつながり)そのものは切り離す、という仕組みでこのループを断ち切る。よくある誤った対処法に『電源プラグの3番目のアース端子を抜いてしまう』というものがあるが、これは感電などの安全上のリスクを生むため絶対に避けるべきで、Hum Eliminatorのような信号側で絶縁する機材を使うのが正しい対処法。以前の単元で出てきたDIボックスのGROUND LIFTスイッチは1系統・モノラル向けの簡易な対策だったのに対し、今回のような専用機材はステレオのライン信号をまとめて絶縁できる点が違い。",
      },
    },
    {
      id: "patchbay_normalled_multitrack",
      order: 29,
      title: "パッチベイのノーマライズ運用でマルチトラックレコーダーを接続する",
      category: "配線問題(プロ環境)",
      hook: "以前の単元のパッチベイは『何も挿さなければ何も鳴らない』が基本だった。でも実は、ケーブルを挿さなくても自動的につながっている状態も作れる——その自動接続を『上書き』する配線を体験しよう。",
      patch: {
        scenario:
          "アナログマルチトラックレコーダー「Studer A827」のCH3 OUTPUTは、パッチベイの背面で、コンソール「SSL 4000 G+」のCH3 LINE INへあらかじめ配線され、『ノーマライズ』(前面に何もケーブルを挿していない限り、背面同士が自動的につながっている状態)されている。今日はCH3の音だけコンプレッサー「dbx 160A」を通してからコンソールに送りたいので、パッチベイの前面ジャックを使ってこのノーマライズ接続を上書きしよう。パッチベイ前面のTAPE CH3 OUTから160AのINPUTへ、160AのOUTPUTから、パッチベイ前面のCONSOLE CH3 INへ、それぞれケーブルで接続する。",
        equipment: [
          {
            id: "patchbay",
            label: "Neutrik NPPA(TT/バンタムパッチベイ、CH3背面はノーマライズ済み)",
            icon: "PB",
            ports: [
              { id: "tapeCh3Front", label: "前面: TAPE CH3 OUT", type: "trs", dir: "out" },
              { id: "consoleCh3Front", label: "前面: CONSOLE CH3 IN", type: "trs", dir: "in" },
            ],
          },
          {
            id: "comp",
            label: "dbx 160A(コンプレッサー)",
            icon: "160A",
            ports: [
              { id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" },
              { id: "out", label: "OUTPUT (TRS)", type: "trs", dir: "out" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "ts", "digilink"],
        correctConnections: [
          { from: "patchbay.tapeCh3Front", to: "comp.in", cable: "trs" },
          { from: "comp.out", to: "patchbay.consoleCh3Front", cable: "trs" },
        ],
        explain:
          "パッチベイの『ノーマライズ』とは、前面(パッチする側)に何もケーブルを挿していないとき、背面同士があらかじめ内部配線で自動的につながっている状態のこと。テープマシンとコンソールのように『ほとんどの場合いつも同じ組み合わせでつなぐ』機材同士は、あらかじめノーマライズしておくことで、毎日いちいちケーブルを挿さなくても録音・再生ができる。今回のように『今日だけCH3にコンプを挟みたい』という例外的な処理をしたいときだけ、前面ジャックにケーブルを挿す——挿した瞬間、そのチャンネルの自動接続(ノーマライズ)は一時的に無効になり、挿したケーブルの経路が優先される。これは以前の単元で扱った『インサート(SEND/RETURN)』と似た結果を生むが、ノーマライズは『何もしなければ自動でつながっている』こと自体が固有の機能である点が違う。半分だけ自動接続を残す『ハーフノーマライズ』(片方の前面にだけケーブルを挿しても、もう片方は自動接続を保つ設定)を使えるパッチベイもあり、信号を分岐しつつモニターしたい場合などに便利。",
      },
    },
    {
      id: "smartphone_wired_mixer",
      order: 30,
      title: "スマートフォンの音楽を有線でミキサーに接続する(Bluetoothとの使い分け)",
      category: "配線問題",
      hook: "『ワイヤレスの方が楽そう』と思いがちだけど、本番で音が途切れたら大事故——あえて有線を選ぶ理由を配線しながら考えよう。",
      patch: {
        scenario:
          "小さなライブハウスで、開演前のBGMと本番中のSE(効果音)をiPhoneから流したい。Bluetoothスピーカーやレシーバーを使う案も検討したが、無線伝送には数十〜数百ミリ秒の遅延(レイテンシー)や、会場内の他のワイヤレス機材との電波混雑による音切れのリスクがあるため、今回は有線で接続することにした。iPhoneのヘッドホン出力(Lightning→3.5mmステレオミニ変換アダプタ使用)から、ステレオミニ⇄TRS変換ケーブルで、ミキサー「Yamaha MG12XU」のSTEREO IN(L/R)へ接続しよう。",
        equipment: [
          {
            id: "phone",
            label: "iPhone(3.5mmミニ変換アダプタ使用)",
            icon: "iPhone",
            ports: [
              { id: "outL", label: "ヘッドホン出力 L", type: "trs", dir: "out" },
              { id: "outR", label: "ヘッドホン出力 R", type: "trs", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "stereoInL", label: "STEREO IN L (TRS)", type: "trs", dir: "in" },
              { id: "stereoInR", label: "STEREO IN R (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "ts", "usb"],
        correctConnections: [
          { from: "phone.outL", to: "mixer.stereoInL", cable: "trs" },
          { from: "phone.outR", to: "mixer.stereoInR", cable: "trs" },
        ],
        explain:
          "Bluetoothのようなワイヤレス伝送は、音声をいったん圧縮して電波に乗せ、受信側で復号するという処理を挟むため、有線接続に比べてどうしても数十〜数百ミリ秒の遅延(レイテンシー)が生じる。BGMを流すだけなら気にならないことも多いが、映像や進行のキューに合わせてSEを正確なタイミングで鳴らしたいライブ本番では、この遅延や、まれに起きる音切れが致命的なミスにつながりかねない。また、ライブ会場にはワイヤレスマイクやイヤモニなど他の無線機材が多数飛び交っており、電波の混雑によって接続が不安定になるリスクも増える。そのため現場のオペレーションでは、多少ケーブルで縛られても、有線のアナログ接続(または対応していればUSBオーディオでのデジタル接続)を選ぶのが定石。Yamaha MG12XUのUSB端子はパソコンとの録音・再生用として設計されており、スマートフォンから直接音楽を流す用途には使えないため、今回のようにステレオミニ⇄TRSケーブルでSTEREO INへ接続するのが現実的な有線ルートになる。",
      },
    },
    {
      id: "usb_midi_daw_direct",
      order: 31,
      title: "USB-MIDIキーボードをDAWに直結する(Akai MPK Mini mk3)",
      category: "配線問題",
      hook: "以前の単元で扱った5ピンMIDIケーブルとは違い、USB-MIDIキーボードはケーブル1本でPCに挿すだけ——『MIDIのUSB』と『オーディオのUSB』が別物である点も体験しよう。",
      patch: {
        scenario:
          "あなたはUSB-MIDIキーボード「Akai Professional MPK Mini mk3」を使って、DAW上のソフトシンセを弾きたい。以前の単元で使った「Roland A-88MKII」のような5ピンMIDI OUTを持つキーボードとは違い、MPK Miniは背面にMIDI DIN端子を持たず、USBケーブル1本でパソコンと直接つながる『USB-MIDIクラスコンプライアント』機器。演奏音を耳で確認するため、オーディオインターフェース「Steinberg UR22C」のUSBもMacBook Airに接続し、UR22CのPHONES OUTにヘッドホンをつなごう。",
        equipment: [
          { id: "keyboard", label: "Akai Professional MPK Mini mk3(USB-MIDIキーボード)", icon: "MPKmini", ports: [{ id: "usbOut", label: "USB OUT", type: "usb", dir: "out" }] },
          {
            id: "interface",
            label: "Steinberg UR22C",
            icon: "UR22C",
            ports: [
              { id: "usbOut", label: "USB OUT", type: "usb", dir: "out" },
              { id: "hpOut", label: "PHONES OUT", type: "trs", dir: "out" },
            ],
          },
          {
            id: "pc",
            label: "MacBook Air",
            icon: "MacBk",
            ports: [
              { id: "usbIn1", label: "USB-C (キーボード用)", type: "usb", dir: "in" },
              { id: "usbIn2", label: "USB-C (インターフェース用)", type: "usb", dir: "in" },
            ],
          },
          { id: "headphones", label: "Sony MDR-CD900ST", icon: "900ST", ports: [{ id: "in", label: "φ6.3 TRS IN", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["usb", "midi", "trs", "xlr"],
        correctConnections: [
          { from: "keyboard.usbOut", to: "pc.usbIn1", cable: "usb" },
          { from: "interface.usbOut", to: "pc.usbIn2", cable: "usb" },
          { from: "interface.hpOut", to: "headphones.in", cable: "trs" },
        ],
        explain:
          "MPK Miniのような『USB-MIDIクラスコンプライアント』のキーボードは、USBケーブル1本をPCに挿すだけで演奏データ(MIDIメッセージ)を送れる。以前の単元で扱った5ピンのMIDIケーブルは、ハードウェア音源モジュールなどUSB端子を持たない、または昔ながらのDIN規格しか対応していない機材を鳴らす場合に使うもので、今回のようにDAW上のソフトシンセを弾くだけならMIDIケーブルは不要、USBだけで完結する。ここで注意したいのは『MIDIキーボードのUSB』と『オーディオインターフェースのUSB』はまったく別の役割を持つケーブルだという点——前者は演奏データだけを送り、実際に鳴る音(オーディオ信号)はUR22Cのようなインターフェースを経由して初めて耳に届く。1台のPCに複数のUSB機器を挿す場合、それぞれが何を運んでいるケーブルなのかを意識しておくと、トラブル時の切り分けがしやすくなる。",
      },
    },
    {
      id: "amp_fx_loop_insert",
      order: 32,
      title: "マルチエフェクターをギターアンプのFXループに挿す(Boss GT-1000 + Marshall JVM410H)",
      category: "配線問題",
      hook: "以前のミキサーのインサートと同じ発想が、ギターアンプ本体にもある——ディレイやリバーブを『歪みの後段』に挟む配線を体験しよう。",
      patch: {
        scenario:
          "真空管アンプ「Marshall JVM410H」の歪みは気に入っているが、ディレイやリバーブはマルチエフェクター「Boss GT-1000」でかけたい。歪みより前段(足元)にディレイ・リバーブを繋ぐと、音が濁って気持ち悪くなりやすいため、アンプ本体のFXループ(SEND/RETURN)を使う。ギターを「JVM410H」のINPUTへ、JVM410HのFX SENDから、GT-1000のINPUTへ、GT-1000のOUTPUTから、JVM410HのFX RETURNへ、それぞれ接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "amp",
            label: "Marshall JVM410H(ギターアンプヘッド)",
            icon: "JVM410H",
            ports: [
              { id: "guitarIn", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "fxSend", label: "FX SEND (TS)", type: "ts", dir: "out" },
              { id: "fxReturn", label: "FX RETURN (TS)", type: "ts", dir: "in" },
            ],
          },
          {
            id: "multiFx",
            label: "Boss GT-1000(マルチエフェクター)",
            icon: "GT-1000",
            ports: [
              { id: "input", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "output", label: "OUTPUT (TS)", type: "ts", dir: "out" },
            ],
          },
        ],
        cablePalette: ["ts", "trs", "xlr", "speaker"],
        correctConnections: [
          { from: "guitar.out", to: "amp.guitarIn", cable: "ts" },
          { from: "amp.fxSend", to: "multiFx.input", cable: "ts" },
          { from: "multiFx.output", to: "amp.fxReturn", cable: "ts" },
        ],
        explain:
          "ギターアンプの信号経路は『INPUT→プリアンプ(歪みを作る回路)→(FXループ)→パワーアンプ→スピーカー』という順番になっており、FXループのSENDはプリアンプの歪みを通過した後の信号を取り出せる出口、RETURNはそこへ戻す入口。ディレイ・リバーブ・コーラスのような『歪みの後にかけたい』空間系エフェクトは、ギター入力の手前(足元)に繋ぐと歪みで音が潰れて濁ってしまうため、FXループを使うのが定番。逆に歪み系・ワウのような『アンプの歪みと混ざり合ってほしい』エフェクトは、通常通りギターとアンプの間(INPUT手前)に繋ぐ。これは以前の単元で扱ったミキサーのインサート(SEND→機材IN、機材OUT→RETURN)とまったく同じ配線の考え方で、対象がミキサーのチャンネルからギターアンプのプリアンプ〜パワーアンプ間に変わっただけ、と捉えると理解しやすい。",
      },
    },
    {
      id: "turntable_phono_preamp",
      order: 33,
      title: "アナログターンテーブルをフォノプリアンプ経由でPC録音する(Technics SL-1200MK7)",
      category: "配線問題",
      hook: "ターンテーブルの出力をそのままライン入力に挿しても、音が小さくこもって聞こえる——『フォノイコライザー』という補正が必要な理由を配線しながら理解しよう。",
      patch: {
        scenario:
          "実家に眠っていたアナログレコードをデジタル化(録音)したい。ターンテーブル「Technics SL-1200MK7」のカートリッジが拾う信号(フォノレベル。レコード制作時の都合でRIAAカーブという特殊な周波数特性で記録されている)を、そのままオーディオインターフェースのライン入力に挿してしまうと、レベルが小さすぎるうえ低音と高音のバランスもおかしいまま録音されてしまう。SL-1200MK7のOUTPUTを、フォノプリアンプ(フォノイコライザー)「audio-technica AT-PEQ3」のPHONO INへ接続し、そこでRIAAカーブを補正してライン信号に変換したうえで、AT-PEQ3のLINE OUTから、USBオーディオインターフェース「Behringer UCA202」のライン入力へ接続、UCA202のUSB OUTからMacBook Airへ接続しよう。",
        equipment: [
          {
            id: "turntable",
            label: "Technics SL-1200MK7",
            icon: "SL1200",
            ports: [
              { id: "outL", label: "OUTPUT L (RCA)", type: "rca", dir: "out" },
              { id: "outR", label: "OUTPUT R (RCA)", type: "rca", dir: "out" },
            ],
          },
          {
            id: "phonoPre",
            label: "audio-technica AT-PEQ3(フォノプリアンプ)",
            icon: "PEQ3",
            ports: [
              { id: "inL", label: "PHONO IN L (RCA)", type: "rca", dir: "in" },
              { id: "inR", label: "PHONO IN R (RCA)", type: "rca", dir: "in" },
              { id: "outL", label: "LINE OUT L (RCA)", type: "rca", dir: "out" },
              { id: "outR", label: "LINE OUT R (RCA)", type: "rca", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Behringer UCA202",
            icon: "UCA202",
            ports: [
              { id: "inL", label: "LINE IN L (RCA)", type: "rca", dir: "in" },
              { id: "inR", label: "LINE IN R (RCA)", type: "rca", dir: "in" },
              { id: "usbOut", label: "USB OUT", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbIn", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["rca", "trs", "usb", "xlr"],
        correctConnections: [
          { from: "turntable.outL", to: "phonoPre.inL", cable: "rca" },
          { from: "turntable.outR", to: "phonoPre.inR", cable: "rca" },
          { from: "phonoPre.outL", to: "interface.inL", cable: "rca" },
          { from: "phonoPre.outR", to: "interface.inR", cable: "rca" },
          { from: "interface.usbOut", to: "pc.usbIn", cable: "usb" },
        ],
        explain:
          "レコードのカートリッジが拾う信号は非常に微弱なうえ、レコード制作時に録音・再生しやすいよう低音を減らし高音を強調して記録される『RIAAカーブ』という特殊な補正がかけられている。フォノプリアンプ(フォノイコライザー)は、この信号を十分な音量まで増幅しつつ、RIAAカーブを元の周波数バランスに逆補正して『ライン信号』に変換する専用機材。ターンテーブル本体にフォノイコライザーを内蔵し、PHONO/LINE切替スイッチを備える機種もあるが、内蔵していない、またはLINE出力に切り替えていない場合は、外付けのフォノプリアンプを必ず経由させる必要がある。もし補正なしにフォノレベルの信号を直接ライン入力に突っ込むと、音量が小さすぎるうえ低音がスカスカで高音がキンキンした、聴くに堪えない音になってしまう——『同じRCAケーブルでも、挿す場所を間違えると全く違う結果になる』典型例。",
      },
    },
    {
      id: "personal_monitor_p16",
      order: 34,
      title: "Behringer Powerplay P16でパーソナルモニターを組む(デジタルスネーク)",
      category: "配線問題(プロ環境)",
      hook: "以前のAUX SENDは『欲しいバランスを卓側で作って送る』方式だったが、P16は『材料を全員に配って、各奏者が自分でミックスする』方式——発想の違う配線を体験しよう。",
      patch: {
        scenario:
          "バンドのリハーサルスタジオに、パーソナルモニターシステム「Behringer Powerplay P16」を導入する。デジタルミキサー「Behringer X32」の各chの信号を、Ultranet(16ch分の音声をまとめて送れる、見た目はEthernetケーブルの専用伝送)でマスターユニット「P16-M」へ送る。P16-Mから、ドラマーの手元に置くパーソナルミキサー「P16-I」へ、同じくCat5eケーブルで接続する。最後に、P16-IからドラマーのヘッドホンへTRSケーブルで接続しよう。",
        equipment: [
          { id: "x32", label: "Behringer X32(デジタルミキサー)", icon: "X32", ports: [{ id: "ultranetOut", label: "ULTRANET OUT", type: "ethernet", dir: "out" }] },
          {
            id: "p16m",
            label: "Behringer Powerplay P16-M(マスターユニット)",
            icon: "P16-M",
            ports: [
              { id: "ultranetIn", label: "ULTRANET IN", type: "ethernet", dir: "in" },
              { id: "chainOut", label: "CAT5 OUT (次のP16-Iへ)", type: "ethernet", dir: "out" },
            ],
          },
          {
            id: "p16i",
            label: "Behringer Powerplay P16-I(ドラマー用パーソナルミキサー)",
            icon: "P16-I",
            ports: [
              { id: "chainIn", label: "CAT5 IN", type: "ethernet", dir: "in" },
              { id: "hpOut", label: "PHONES OUT", type: "trs", dir: "out" },
            ],
          },
          { id: "headphones", label: "Sony MDR-CD900ST(ドラマー用)", icon: "900ST", ports: [{ id: "in", label: "φ6.3 TRS IN", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["ethernet", "xlr", "trs", "midi"],
        correctConnections: [
          { from: "x32.ultranetOut", to: "p16m.ultranetIn", cable: "ethernet" },
          { from: "p16m.chainOut", to: "p16i.chainIn", cable: "ethernet" },
          { from: "p16i.hpOut", to: "headphones.in", cable: "trs" },
        ],
        explain:
          "Behringer X32のようなデジタルミキサーは『Ultranet』という、見た目はEthernet(Cat5e)ケーブルと同じだが専用プロトコルで16ch分の音声をまとめて送れる出力を持つ。この1本のケーブルをP16-M(マスターユニット)に挿すと、16ch分の音声がすべてP16-Mまで届く。そこから先はCat5eケーブルでP16-I(演奏者ごとの手元パーソナルミキサー)を数珠つなぎ(デイジーチェーン)にでき、各演奏者は届いた16chの中から自分の好きな音量バランスを自分の手元のツマミで作れる——以前の単元で扱ったAUX SEND方式(卓側のエンジニアが各演奏者向けのバランスをあらかじめ作って送る)とは逆に、『材料(16ch全部)を配っておいて、後は各自でミックスしてもらう』という発想の違うシステム。配線するケーブルの本数自体はAUX方式より減らせるうえ、演奏中に本人がリハーサルしながら自分のバランスを調整できる利点があるが、各人が16chすべてを自由に触れてしまうため、勝手にメインボーカルの音量を下げてしまうといった事故を防ぐには、P16-M側で各ユニットの操作範囲を制限しておくことも実務上大切。",
      },
    },
    {
      id: "pedalboard_isolated_power",
      order: 35,
      title: "ペダルボードをアイソレート電源で配線する(Voodoo Lab Pedal Power 2 Plus)",
      category: "配線問題",
      hook: "これまでの単元はすべて『音の通り道』だったが、今回配線するのは音ではなく電気そのもの——デイジーチェーンで繋ぐとノイズが出る理由を体験しよう。",
      patch: {
        scenario:
          "ギターのペダルボードに、コンプレッサー「MXR Dyna Comp」、歪み「Ibanez Tube Screamer」、デジタルディレイ「Boss DD-8」の3台を並べる。3台とも9V駆動だが、アナログ回路のコンプ・歪みに対して、デジタル回路のDD-8は動作中にノイズを発生しやすく、同じ電源から数珠つなぎ(デイジーチェーン)で電気を分けると、そのノイズがアナログ側にも回り込むことがある。そこでアイソレートパワーサプライ「Voodoo Lab Pedal Power 2 Plus」を使い、各ペダルへ独立した(電気的に絶縁された)出力からそれぞれ電源ケーブルを配ろう。",
        equipment: [
          {
            id: "power",
            label: "Voodoo Lab Pedal Power 2 Plus(アイソレートパワーサプライ)",
            icon: "PP2+",
            ports: [
              { id: "out1", label: "ISOLATED OUT 1", type: "power", dir: "out" },
              { id: "out2", label: "ISOLATED OUT 2", type: "power", dir: "out" },
              { id: "out3", label: "ISOLATED OUT 3", type: "power", dir: "out" },
            ],
          },
          { id: "comp", label: "MXR Dyna Comp(コンプレッサー)", icon: "DynaComp", ports: [{ id: "dcIn", label: "DC 9V IN", type: "power", dir: "in" }] },
          { id: "drive", label: "Ibanez Tube Screamer(歪み)", icon: "TS9", ports: [{ id: "dcIn", label: "DC 9V IN", type: "power", dir: "in" }] },
          { id: "delay", label: "Boss DD-8(デジタルディレイ)", icon: "DD-8", ports: [{ id: "dcIn", label: "DC 9V IN", type: "power", dir: "in" }] },
        ],
        cablePalette: ["power", "trs", "ts", "usb"],
        correctConnections: [
          { from: "power.out1", to: "comp.dcIn", cable: "power" },
          { from: "power.out2", to: "drive.dcIn", cable: "power" },
          { from: "power.out3", to: "delay.dcIn", cable: "power" },
        ],
        explain:
          "1個の9Vアダプターから『デイジーチェーンケーブル』でタコ足のように複数のペダルへ電気を分ける配線方法は手軽だが、すべてのペダルが電気的に同じ1つのグラウンド(接地)を共有してしまう。Boss DD-8のようなデジタル回路のペダルは、内部のクロック(デジタル処理のタイミング信号)由来のノイズを電源ラインに乗せやすく、これが同じデイジーチェーンを共有するアナログペダルにまで回り込んで『ジー』というノイズの原因になることがある。Voodoo Lab Pedal Power 2 Plusのようなアイソレートパワーサプライは、内部に複数の独立したトランス(または絶縁されたDC-DCコンバーター)を持ち、出力ごとに電気的に分離された(アイソレートされた)電源を供給できるため、1台のノイズが他のペダルに回り込むのを防げる。以前の単元で扱ったEbtech Hum Eliminatorが『音声信号ラインのグラウンドループ』を断ち切る機材だったのに対し、今回のアイソレートパワーサプライは『電源ラインのグラウンドループ』を断ち切る機材、という対比で捉えると理解しやすい。",
      },
    },
    {
      id: "stage_piano_sustain_audio",
      order: 36,
      title: "ステージピアノのサスティンペダルとオーディオ出力を正しく配線する(Nord Stage 4)",
      category: "配線問題",
      hook: "どちらも同じ標準フォーンジャックの形をした端子なのに、片方はペダルのオン/オフを伝えるだけ、もう片方は音声そのもの——挿し間違えると音が出ない、あるいはペダルが効かない事故が起きる。",
      patch: {
        scenario:
          "ステージピアノ「Nord Stage 4」を使ってライブに出演する。サスティンペダル「Nord Triple Pedal」を、Nord Stage 4のSUSTAIN PEDAL端子へ接続し、演奏中に足元でペダルを踏めるようにする。さらに、Nord Stage 4のオーディオ出力(OUTPUT L/R)を、ミキサー「Yamaha MG12XU」のライン入力へ接続して、実際の音をPAに送ろう。",
        equipment: [
          { id: "pedal", label: "Nord Triple Pedal(サスティンペダル)", icon: "TriPed", ports: [{ id: "out", label: "PLUG (TRS)", type: "trs", dir: "out" }] },
          {
            id: "piano",
            label: "Nord Stage 4(ステージピアノ)",
            icon: "Stage4",
            ports: [
              { id: "pedalIn", label: "SUSTAIN PEDAL (TRS対応)", type: "trs", dir: "in" },
              { id: "outL", label: "OUTPUT L (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "lineInL", label: "STEREO IN L (TRS)", type: "trs", dir: "in" },
              { id: "lineInR", label: "STEREO IN R (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["ts", "trs", "xlr", "midi"],
        correctConnections: [
          { from: "pedal.out", to: "piano.pedalIn", cable: "trs" },
          { from: "piano.outL", to: "mixer.lineInL", cable: "ts" },
          { from: "piano.outR", to: "mixer.lineInR", cable: "ts" },
        ],
        explain:
          "Nord Stage 4のSUSTAIN PEDAL端子は、単純なオン/オフだけの安価なフットスイッチ(TSプラグ)も、half-pedal(踏み込み具合を連続値で伝える)に対応したNord Triple Pedalのような多機能ペダル(TRSプラグ)も受け付けるよう作られているとされる。Triple Pedalはサスティン・ソステヌート・ソフトという3つのペダルの状態を1本のケーブルでまとめて本体に伝える必要があり、そのためにTRSプラグの2系統の信号線を使っているとされる。一方、Nord Stage 4のオーディオ出力(OUTPUT L/R)は公式スペック上『アンバランス、1/4インチ標準フォーン』と案内されており、実はTRSではなくTSのジャック。つまりペダル側と出力側は同じ『標準フォーンジャックに見える』端子でも中身の信号がまったく別物で、物理的には挿さってしまうため『刺さった=正しい接続』とは限らない典型例になっている。ペダルのケーブルを誤ってOUTPUT側に挿してしまうと、当然ながら踏んでも音の伸びが変化せず『壊れた』と勘違いしてしまうトラブルが実際によくある。買う前に、ペダル端子とオーディオ端子が本体のどこにあるか、取扱説明書やパネル表記(SUSTAIN PEDAL / OUTPUT L, R等)を必ず確認する習慣をつけておこう。",
      },
    },
    {
      id: "guitar_synth_13pin",
      order: 37,
      title: "ギターシンセを13ピンケーブルで配線する(Roland GK-3 + GR-55)",
      category: "配線問題",
      hook: "普通のギターケーブルは6本の弦の音を1本にまとめて送るだけ。でも13ピンケーブルは、弦1本1本の音を別々のまま送ってしまう——その違いを配線で体験しよう。",
      patch: {
        scenario:
          "あなたの「Fender Stratocaster」のブリッジ側には、6本の弦の振動をそれぞれ別々に拾える分割ピックアップ「Roland GK-3」が後付けで装着されている。GK-3の「GK OUT(13ピン)」から、ギターシンセサイザー「Roland GR-55」の「GK IN(13ピン)」へ、専用の13ピンケーブルで接続しよう。さらに、ギター本来の通常ピックアップの音も一緒に鳴らしたいので、ギター本体の「GUITAR OUT(TS)」から、GR-55の「GUITAR IN(TS)」へも接続する。最後に、GR-55のステレオ出力(L/R)を、オーディオインターフェース「Universal Audio Apollo x6」のライン入力へ接続しよう。",
        equipment: [
          {
            id: "guitar",
            label: "Fender Stratocaster(GK-3装着)",
            icon: "Strat+GK3",
            ports: [
              { id: "gkOut", label: "GK OUT (13ピン)", type: "gk13pin", dir: "out" },
              { id: "guitarOut", label: "GUITAR OUT (TS, 通常ピックアップ)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "gr55",
            label: "Roland GR-55(ギターシンセサイザー)",
            icon: "GR-55",
            ports: [
              { id: "gkIn", label: "GK IN (13ピン)", type: "gk13pin", dir: "in" },
              { id: "guitarIn", label: "GUITAR IN (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Universal Audio Apollo x6",
            icon: "ApolloX6",
            ports: [
              { id: "lineIn3", label: "LINE IN 3 (TRS)", type: "trs", dir: "in" },
              { id: "lineIn4", label: "LINE IN 4 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["gk13pin", "ts", "trs", "midi"],
        correctConnections: [
          { from: "guitar.gkOut", to: "gr55.gkIn", cable: "gk13pin" },
          { from: "guitar.guitarOut", to: "gr55.guitarIn", cable: "ts" },
          { from: "gr55.outL", to: "interface.lineIn3", cable: "trs" },
          { from: "gr55.outR", to: "interface.lineIn4", cable: "trs" },
        ],
        explain:
          "ふつうのギターケーブル(TS)は、6本の弦の振動を1つのピックアップでまとめて拾い、1本の音声信号として送る。一方、Roland GK-3のような『分割ピックアップ(ディバイデッド・ピックアップ)』は弦ごとに独立したセンサーを持ち、13ピンケーブル(GKケーブル)で弦1本1本の信号を別々のまま、さらにピックアップを駆動する電源も一緒に送る——これによってGR-55のようなギターシンセサイザーは、弦ごとに音程を検出して個別に音源を鳴らしたり、和音を保ったまま1音だけベンドしたりといった、通常のギターケーブルでは不可能な処理ができる。GK対応の機材の多くは、この13ピンとは別に通常のTS出力も備えており、シンセの音とギター本来のアンプ的な音を混ぜて使えるようになっている——以前の単元(MIDIキーボードと外部音源モジュール)で扱った『MIDIは演奏データ、オーディオケーブルは音そのもの』という区別と同様に、ここでも『弦ごとの生データを送る13ピン』と『音そのものを送るTS/TRS』という役割の異なるケーブルを正しく使い分ける必要がある。",
      },
    },
    {
      id: "ltc_timecode_sync",
      order: 38,
      title: "映像とオーディオをLTCタイムコードで同期する(映画音楽レコーディングセッション)",
      category: "配線問題(プロ環境)",
      hook: "以前の単元で扱ったワードクロックは『デジタル音声のサンプルを揃える時計』だった。今回のLTCタイムコードは、それとは別の『映像の何コマ目かを伝える時計』——似ているようで役割がまったく違う2種類の同期信号を配線しよう。",
      patch: {
        scenario:
          "映画のスコアリング(劇伴)レコーディングセッション。編集済みの映像を再生する「Blackmagic HyperDeck Studio 4K Pro」のLTC OUT(SMPTEタイムコードを音声のような信号として出力する端子)から、シンクロナイザー「Avid Sync HD」のLTC INへ接続する。Sync HDは受け取ったタイムコードをもとに内部で基準クロックを生成し、そのWORD CLOCK OUTから、Pro Tools HDXシステムのインターフェース「Avid HD I/O」のWORD CLOCK INへ接続して、映像のコマ位置とオーディオのサンプルタイミングの両方を1つの基準に揃えよう。",
        equipment: [
          { id: "videoDeck", label: "Blackmagic HyperDeck Studio 4K Pro(映像プレーヤー)", icon: "HyperDeck", ports: [{ id: "ltcOut", label: "LTC OUT (XLR)", type: "ltc", dir: "out" }] },
          {
            id: "syncHD",
            label: "Avid Sync HD(シンクロナイザー)",
            icon: "SyncHD",
            ports: [
              { id: "ltcIn", label: "LTC IN (XLR)", type: "ltc", dir: "in" },
              { id: "wcOut", label: "WORD CLOCK OUT (BNC)", type: "wordclock", dir: "out" },
            ],
          },
          { id: "hdio", label: "Avid HD I/O", icon: "HD I/O", ports: [{ id: "wcIn", label: "WORD CLOCK IN (BNC)", type: "wordclock", dir: "in" }] },
        ],
        cablePalette: ["ltc", "wordclock", "aes", "xlr", "digilink"],
        correctConnections: [
          { from: "videoDeck.ltcOut", to: "syncHD.ltcIn", cable: "ltc" },
          { from: "syncHD.wcOut", to: "hdio.wcIn", cable: "wordclock" },
        ],
        explain:
          "LTC(Longitudinal Time Code)は『何時間何分何秒何コマ目』というSMPTEタイムコードを、音声と同じような波形にエンコードして、通常のオーディオケーブル(ここではXLR)で送れるようにした信号。これをPro Tools側のシンクロナイザーが受け取ることで、DAWの再生位置を映像デッキの再生位置に『追従(チェイス)』させ、映像とオーディオがズレずに再生される。以前の単元(MADI伝送とワードクロック同期)で扱ったワードクロックは、デジタル機材同士がサンプル単位(1秒間に数万回)でタイミングを揃えるための基準信号で、LTCとはまったく別の目的の同期信号——LTCは『映像の何コマ目を再生しているか』というマクロな位置の同期、ワードクロックは『デジタル音声を1サンプルもズレなく記録・再生するため』のミクロな同期、という役割の違いを覚えておくとよい。Avid Sync HDのようなシンクロナイザーは、受け取ったLTCから内部で安定したワードクロックを生成し直してインターフェースへ供給する『両方の同期の橋渡し役』を担っている。この配線を怠ると、長尺の劇伴では時間の経過とともに映像と音楽が少しずつズレていく事故につながる。",
      },
    },
    {
      id: "active_crossover_biamp",
      order: 39,
      title: "アクティブクロスオーバーでバイアンプPAシステムを組む(dbx DriveRack PA2)",
      category: "配線問題(プロ環境)",
      hook: "1台のパワーアンプがフルレンジのスピーカーを丸ごと鳴らしていたこれまでの単元とは違い、ここでは高域と低域を電気的に分けて、別々のアンプ・別々のスピーカーで鳴らす『バイアンプ』を配線しよう。",
      patch: {
        scenario:
          "屋外フェスのステージPAで、ホーンスピーカーとサブウーファーを別々のパワーアンプで駆動する『バイアンプ』構成を組む。ミキサーのMAIN OUTから、スピーカーマネジメントプロセッサー「dbx DriveRack PA2」のINPUTへ接続する。DriveRack PA2はここで2-WAY(高域/低域)のアクティブクロスオーバーとして設定してあり、HIGH OUTから高域用パワーアンプ「QSC PLD4.3(#1)」のINへ、LOW OUTから低域用パワーアンプ「QSC PLD4.3(#2)」のINへ、それぞれ接続する。最後に、高域用アンプのOUTからパッシブスピーカー「JBL SRX815」へ、低域用アンプのOUTからパッシブサブウーファー「JBL SRX828S」へ、スピーカーケーブルで接続しよう。",
        equipment: [
          { id: "crossover", label: "dbx DriveRack PA2(スピーカーマネジメントプロセッサー)", icon: "DriveRackPA2", ports: [
            { id: "input", label: "INPUT (XLR)", type: "xlr", dir: "in" },
            { id: "highOut", label: "HIGH OUT (XLR)", type: "xlr", dir: "out" },
            { id: "lowOut", label: "LOW OUT (XLR)", type: "xlr", dir: "out" },
          ] },
          { id: "mixer", label: "Allen & Heath SQ-5(デジタルミキサー)", icon: "SQ-5", ports: [{ id: "mainOut", label: "MAIN OUT (XLR)", type: "xlr", dir: "out" }] },
          { id: "ampHigh", label: "QSC PLD4.3(パワーアンプ #1, 高域用)", icon: "PLD4.3", ports: [
            { id: "in", label: "CH1 IN (XLR)", type: "xlr", dir: "in" },
            { id: "out", label: "CH1 OUT (Speakon)", type: "speaker", dir: "out" },
          ] },
          { id: "ampLow", label: "QSC PLD4.3(パワーアンプ #2, 低域用)", icon: "PLD4.3", ports: [
            { id: "in", label: "CH1 IN (XLR)", type: "xlr", dir: "in" },
            { id: "out", label: "CH1 OUT (Speakon)", type: "speaker", dir: "out" },
          ] },
          { id: "horn", label: "JBL SRX815(パッシブ2-WAYスピーカー、ホーン担当)", icon: "SRX815", ports: [{ id: "in", label: "IN (Speakon)", type: "speaker", dir: "in" }] },
          { id: "sub", label: "JBL SRX828S(パッシブサブウーファー)", icon: "SRX828S", ports: [{ id: "in", label: "IN (Speakon)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["xlr", "speaker", "trs", "ts"],
        correctConnections: [
          { from: "mixer.mainOut", to: "crossover.input", cable: "xlr" },
          { from: "crossover.highOut", to: "ampHigh.in", cable: "xlr" },
          { from: "crossover.lowOut", to: "ampLow.in", cable: "xlr" },
          { from: "ampHigh.out", to: "horn.in", cable: "speaker" },
          { from: "ampLow.out", to: "sub.in", cable: "speaker" },
        ],
        explain:
          "以前の単元(ライブPAの基本配線)で組んだ構成は、1台のパワーアンプがフルレンジのパッシブスピーカーを丸ごと駆動し、スピーカー内部の『パッシブクロスオーバー』(アンプで増幅した後の大きな電力を、内部の部品で高域・低域に分けてツイーターとウーファーに振り分ける回路)が周波数を分けていた。今回のdbx DriveRack PA2のような『アクティブ(電子)クロスオーバー』は、逆にアンプで増幅する前のライン信号の段階で高域・低域を分割し、それぞれ専用のパワーアンプで別々に増幅してから、専用のスピーカー(ホーン用/サブウーファー用)へ送る——この方式を『バイアンプ(2-WAYの場合)』または『マルチアンプ』と呼ぶ。アクティブクロスオーバー方式の利点は、各アンプが受け持つ周波数帯域が狭くなることで、低域のエネルギーが誤ってホーンドライバーに流れ込んで破損させる事故を防ぎやすくなることや、帯域ごとに個別のリミッター・イコライジングでスピーカーを保護しながら音質を追い込めること。DriveRack PA2はこの他にフィードバック(ハウリング)抑制機能も備えており、ライブPA現場ではスピーカー保護とサウンドチューニングの中核を担う機材として使われている。",
      },
    },
    {
      id: "analog_snake_stagebox",
      order: 40,
      title: "アナログスネークでステージとFOHを配線する(Whirlwind M-24/4)",
      category: "配線問題(プロ環境)",
      hook: "以前の単元で扱ったMADIはデジタルで64ch分をまとめる方式だった。今回のアナログスネークは、各chの信号を最後までアナログのまま、1本の太いケーブルの中に何本も束ねて運ぶ——発想の違いを配線で体感しよう。",
      patch: {
        scenario:
          "小〜中規模のライブハウスで、ステージ上の「Shure SM58」(ボーカル)と「Shure SM57」(ギターアンプ)の音を、客席後方のFOHミキサー「Midas M32」まで届けたい。2本のマイクを、ステージ袖に置いたアナログスネークのステージボックス「Whirlwind M-24/4 ステージボックス」のXLR入力へそれぞれ挿し、ステージボックスからSNAKE OUT(内部に24ch分のマイクケーブルを束ねた、1本の太いスネークケーブルの出口)で、FOH側の「Whirlwind M-24/4 FOHボックス」のSNAKE INへ接続する。FOHボックスの個別のXLR出力から、Midas M32のマイク入力へ、それぞれ接続しよう。",
        equipment: [
          { id: "mic1", label: "Shure SM58(ボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "mic2", label: "Shure SM57(ギターアンプ)", icon: "SM57", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "stagebox",
            label: "Whirlwind M-24/4 ステージボックス",
            icon: "M24Stage",
            ports: [
              { id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "CH2 IN (XLR)", type: "xlr", dir: "in" },
              { id: "snakeOut", label: "SNAKE OUT(トランク)", type: "snake", dir: "out" },
            ],
          },
          {
            id: "fohbox",
            label: "Whirlwind M-24/4 FOHボックス",
            icon: "M24FOH",
            ports: [
              { id: "snakeIn", label: "SNAKE IN(トランク)", type: "snake", dir: "in" },
              { id: "out1", label: "CH1 OUT (XLR)", type: "xlr", dir: "out" },
              { id: "out2", label: "CH2 OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "mixer", label: "Midas M32(FOH卓)", icon: "M32", ports: [
            { id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" },
            { id: "in2", label: "CH2 IN (XLR)", type: "xlr", dir: "in" },
          ] },
        ],
        cablePalette: ["xlr", "snake", "madi", "ethernet"],
        correctConnections: [
          { from: "mic1.out", to: "stagebox.in1", cable: "xlr" },
          { from: "mic2.out", to: "stagebox.in2", cable: "xlr" },
          { from: "stagebox.snakeOut", to: "fohbox.snakeIn", cable: "snake" },
          { from: "fohbox.out1", to: "mixer.in1", cable: "xlr" },
          { from: "fohbox.out2", to: "mixer.in2", cable: "xlr" },
        ],
        explain:
          "アナログスネークは、ステージ上の各マイクの信号線を、変換や圧縮を一切せずアナログのまま、1本の太いトランクケーブルの中に何本も束ねて運ぶ仕組み。ステージボックス側の個別XLR入力とFOHボックス側の個別XLR出力は、内部で1本1本独立した銅線として最初から最後までつながっており、デジタル変換のための電源もクロックの同期も不要——電源を入れなくても機能する『受動的(パッシブ)』な機材である点が、以前の単元で扱ったMidas DL32のようなデジタルステージボックス(MADI)との大きな違い。ただしアナログスネークは信号の本数が増えるほどトランクケーブル自体が太く重くなり、伝送距離が延びるほどノイズや信号劣化の影響も受けやすくなる——これに対しMADIのようなデジタル伝送は、1本の細い同軸(または光)ケーブルで64ch分を劣化なく送れる代わりに、電源とデジタル機器同士のクロック同期が必要になる。小規模なライブハウスのch数であれば扱いやすく壊れにくいアナログスネークが今でも根強く使われており、大規模な現場ではデジタルスネークへの置き換えが進んでいる、という使い分けを覚えておくとよい。",
      },
    },
    {
      id: "midi_merge_box",
      order: 41,
      title: "MIDIマージボックスで2台のコントローラーを1台の音源にまとめる(MIDI Solutions MERGER)",
      category: "配線問題",
      hook: "MIDI OUTを2本、1つのMIDI INに直接挿すことはできない——2つの演奏データを1本のケーブルに『合流』させる専用機材を配線しよう。",
      patch: {
        scenario:
          "ウインドシンセサイザー「Roland Aerophone AE-30」でメロディを、MIDIマスターキーボード「Roland A-88MKII」でコードを、同時に演奏して1台の音源モジュール「Roland INTEGRA-7」を鳴らしたい。しかしINTEGRA-7のMIDI INは1つしかなく、2本のMIDIケーブルを同時に挿すことはできない。そこで「MIDI Solutions MERGER」(MIDIマージボックス)のIN Aに「Roland Aerophone AE-30」のMIDI OUTを、IN Bに「Roland A-88MKII」のMIDI OUTを接続し、MERGERのMIDI OUTから、INTEGRA-7のMIDI INへ、2つの演奏データを1本にまとめて送ろう。",
        equipment: [
          { id: "wind", label: "Roland Aerophone AE-30(ウインドシンセサイザー)", icon: "AE-30", ports: [{ id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" }] },
          { id: "keyboard", label: "Roland A-88MKII(MIDIマスターキーボード)", icon: "A-88", ports: [{ id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" }] },
          {
            id: "merger",
            label: "MIDI Solutions MERGER(MIDIマージボックス)",
            icon: "Merger",
            ports: [
              { id: "inA", label: "MIDI IN A", type: "midi", dir: "in" },
              { id: "inB", label: "MIDI IN B", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT(合流後)", type: "midi", dir: "out" },
            ],
          },
          { id: "module", label: "Roland INTEGRA-7(音源モジュール)", icon: "INTGR7", ports: [{ id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" }] },
        ],
        cablePalette: ["midi", "usb", "trs", "xlr"],
        correctConnections: [
          { from: "wind.midiOut", to: "merger.inA", cable: "midi" },
          { from: "keyboard.midiOut", to: "merger.inB", cable: "midi" },
          { from: "merger.midiOut", to: "module.midiIn", cable: "midi" },
        ],
        explain:
          "5ピンMIDIは基本的に『1つのOUTから1つのINへ』という一方向・一対一の通信を前提にした規格で、2本のMIDI OUTケーブルを無理やり1つのMIDI INに挿しても、電気的に信号がぶつかり合い正常に機能しない。以前の単元(MIDIキーボードと外部音源モジュール)で登場した『MIDI THRU』端子は、受け取った1つの演奏データをそのまま複製して別の機材にも送る(1つのソースを複数の音源に分配する)ための端子で、今回のように『複数のソースを1つの音源にまとめたい』場合には使えない。MIDI Solutions MERGERのようなマージボックスは、2系統(またはそれ以上)のMIDIメッセージを、ノートの取りこぼしや文字化けが起きないよう電子的に正しく調停(インターリーブ)しながら1本のMIDIストリームに合流させる専用機材。USB-MIDI接続(以前の単元で扱ったAkai MPK Mini mk3など)であれば、PC・DAW側のソフトウェアが複数のUSB-MIDIデバイスを自動的にマージしてくれることが多いが、今回のようにハードウェア音源モジュール自体にMIDI INが1つしかない場合は、このような物理的なマージボックスが必要になる。",
      },
    },
    {
      id: "ipad_mobile_rig",
      order: 42,
      title: "iPadでモバイル録音リグを組む(iRig Pro Duo I/O + USBハブ)",
      category: "配線問題",
      hook: "iPadの端子は1つしかないのに、オーディオインターフェースとMIDIキーボードを同時に使いたい——『給電付きハブ』を挟む理由を配線しながら理解しよう。",
      patch: {
        scenario:
          "外出先のカフェで、USB-C端子を1つだけ備えた「iPad Pro」を使ってモバイル録音をしたい。オーディオインターフェース「IK Multimedia iRig Pro Duo I/O」と、USB-MIDIキーボード「Akai Professional MPK Mini mk3」を同時に接続するため、給電機能付きのUSB-Cハブ「Anker PowerExpand USBハブ(バスパワード)」を使う。ハブのUPSTREAM OUT(iPad側への出力)を、iPad ProのUSB-C INへ接続する。ハブの空いている2つの入力ポートに、iRig Pro Duo I/OのUSB OUTと、MPK Mini mk3のUSB OUTを、それぞれ接続しよう。",
        equipment: [
          { id: "ipad", label: "iPad Pro(USB-C)", icon: "iPadPro", ports: [{ id: "usbIn", label: "USB-C IN", type: "usb", dir: "in" }] },
          {
            id: "hub",
            label: "Anker PowerExpand USBハブ(バスパワード)",
            icon: "USBHub",
            ports: [
              { id: "upstreamOut", label: "UPSTREAM OUT(iPad側)", type: "usb", dir: "out" },
              { id: "deviceIn1", label: "DEVICE IN 1", type: "usb", dir: "in" },
              { id: "deviceIn2", label: "DEVICE IN 2", type: "usb", dir: "in" },
            ],
          },
          { id: "interface", label: "IK Multimedia iRig Pro Duo I/O", icon: "iRigProDuo", ports: [{ id: "usbOut", label: "USB OUT", type: "usb", dir: "out" }] },
          { id: "keyboard", label: "Akai Professional MPK Mini mk3(USB-MIDIキーボード)", icon: "MPKmini", ports: [{ id: "usbOut", label: "USB OUT", type: "usb", dir: "out" }] },
        ],
        cablePalette: ["usb", "midi", "trs", "lightning"],
        correctConnections: [
          { from: "hub.upstreamOut", to: "ipad.usbIn", cable: "usb" },
          { from: "interface.usbOut", to: "hub.deviceIn1", cable: "usb" },
          { from: "keyboard.usbOut", to: "hub.deviceIn2", cable: "usb" },
        ],
        explain:
          "USB-C端子を備えたiPad Proは、Lightning仕様の旧型iPadで必要だった『Lightning - USB 3カメラアダプタ』なしに、USB-C機器を直接挿せる。ただし端子自体は1つしかないため、オーディオインターフェースとMIDIキーボードを同時に使いたい場合はUSBハブで分岐する必要がある——このとき注意したいのが『給電(セルフパワード/バスパワード対応)』の有無で、給電機能のない安価なハブでは複数のUSB機器を同時に動かすだけの電力が足りず、オーディオインターフェースの音切れやノイズ、機器の認識不良につながりやすい。以前の単元(USB-MIDIキーボードをDAWに直結する)で扱った『MIDIキーボードのUSBとオーディオインターフェースのUSBは別の役割』という原則はここでも変わらず、両方とも同じiPadの1つの端子に集約されるだけで、演奏データとオーディオ信号がそれぞれ独立してやり取りされている点は変わらない。IK Multimedia iRig Pro Duo I/Oのような『iOS対応』を掲げるオーディオインターフェースは、ドライバー不要でOS標準機能だけで認識されるクラスコンプライアント設計になっており、宅録用に買ったUSBオーディオインターフェースをそのままモバイル環境でも使い回せることが多いが、機種によっては消費電流の関係でiOSでの動作が保証されていない場合もあるため、購入前にメーカーのiOS対応表を確認しておくとよい。",
      },
    },
    {
      id: "dante_network_audio_stagebox",
      order: 43,
      title: "Danteネットワークオーディオでステージボックスと録音システムを配線する(Yamaha Rio3224-D2)",
      category: "配線問題(プロ環境)",
      hook: "MADIは専用の同軸ケーブル1本で音声を送ったが、Danteは『ふつうのLANケーブルとネットワークスイッチ』で音声を送る。IT機材みたいな配線を体験しよう。",
      patch: {
        scenario:
          "多目的ホールでのレコーディング。ステージ上の「Yamaha Rio3224-D2」(Dante対応I/Oラック)から、Dante(音声を伝送できるネットワーク規格)対応のネットワークスイッチ「Netgear GS110TP(Dante Certified/QoS対応スイッチ)」を経由して、録音用の「Mac Studio(Dante Virtual Soundcardをインストール済み)」まで音声を送りたい。Rio3224-D2のPRIMARY OUTからスイッチのPORT 1へ、スイッチのPORT 2からMac StudioのETHERNET INへ、それぞれLANケーブルで接続しよう。",
        equipment: [
          { id: "stagebox", label: "Yamaha Rio3224-D2(Dante I/Oラック)", icon: "Rio3224", ports: [{ id: "primaryOut", label: "PRIMARY OUT (Dante, RJ45)", type: "ethernet", dir: "out" }] },
          {
            id: "switch",
            label: "Netgear GS110TP(Dante Certifiedスイッチ)",
            icon: "Switch",
            ports: [
              { id: "port1", label: "PORT 1 (RJ45)", type: "ethernet", dir: "in" },
              { id: "port2", label: "PORT 2 (RJ45)", type: "ethernet", dir: "out" },
            ],
          },
          { id: "mac", label: "Mac Studio(Dante Virtual Soundcard導入済み)", icon: "MacStudio", ports: [{ id: "ethIn", label: "ETHERNET IN (RJ45)", type: "ethernet", dir: "in" }] },
        ],
        cablePalette: ["ethernet", "madi", "wordclock", "usb", "xlr"],
        correctConnections: [
          { from: "stagebox.primaryOut", to: "switch.port1", cable: "ethernet" },
          { from: "switch.port2", to: "mac.ethIn", cable: "ethernet" },
        ],
        explain:
          "Dante(ダンテ)は、音声をIPネットワークのパケットに変換して伝送するデジタルオーディオ規格で、専用ケーブルではなく一般的なCAT5e/CAT6のLANケーブルと、ネットワークスイッチをそのまま流用できるのが最大の特徴。ただし『何でもいいから繋げばいい』わけではなく、音声が途切れないよう、QoS(通信の優先制御)に対応した『Dante Certified』スイッチを使うのが実務上の基本(一般的な安価なスイッチでも小規模なら動くことはあるが、チャンネル数が増えたり他の通信と混在すると音切れのリスクが上がる)。以前の単元で扱ったMADIが『1本のケーブルで機器同士を直結する専用の伝送路』だったのに対し、Danteは『既存のネットワークインフラの上に何百chもの音声を自由にルーティングできる』点が対照的。PC側は物理的な専用インターフェースカードがなくても、Dante Virtual Soundcardのようなソフトウェアがあれば標準のEthernetポートでDanteネットワークに参加できる。",
      },
    },
    {
      id: "vocoder_carrier_modulator",
      order: 44,
      title: "ボコーダーのキャリア/モジュレーター配線をする(Behringer VC340 + アナログシンセ)",
      category: "配線問題",
      hook: "ロボットボイスの正体は『2つの別々の入力』——音程を作る信号と、声の成分を作る信号を、それぞれ違う入力に挿さないと効果は生まれない。",
      patch: {
        scenario:
          "「Behringer VC340」ボコーダーを使って、ロボットのような声のエフェクトを作りたい。アナログシンセ「Roland SE-02」を、音程のもとになる音(キャリア)としてVC340のEXT SYNTH INへ接続する。あなたの声(モジュレーター、声の成分)は「Shure SM58」でVC340のMIC INへ接続する。VC340が作り出したステレオの出力を、ミキサー「Yamaha MG12XU」のCH1・CH2へ送ろう。",
        equipment: [
          { id: "synth", label: "Roland SE-02(アナログシンセ)", icon: "SE-02", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          { id: "mic", label: "Shure SM58", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "vocoder",
            label: "Behringer VC340(ボコーダー)",
            icon: "VC340",
            ports: [
              { id: "carrierIn", label: "EXT SYNTH IN (TS, キャリア入力)", type: "ts", dir: "in" },
              { id: "micIn", label: "MIC IN (XLR, モジュレーター入力)", type: "xlr", dir: "in" },
              { id: "outL", label: "OUTPUT L (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "ch1In", label: "CH1 LINE IN (TS)", type: "ts", dir: "in" },
              { id: "ch2In", label: "CH2 LINE IN (TS)", type: "ts", dir: "in" },
            ],
          },
        ],
        cablePalette: ["ts", "xlr", "trs", "midi"],
        correctConnections: [
          { from: "synth.out", to: "vocoder.carrierIn", cable: "ts" },
          { from: "mic.out", to: "vocoder.micIn", cable: "xlr" },
          { from: "vocoder.outL", to: "mixer.ch1In", cable: "ts" },
          { from: "vocoder.outR", to: "mixer.ch2In", cable: "ts" },
        ],
        explain:
          "ボコーダーは『キャリア(carrier、搬送波)』と『モジュレーター(modulator、変調波)』という性質の違う2つの入力を掛け合わせて音を作る。キャリアはRoland SE-02のような音程のはっきりした持続音(オルガンやシンセの和音がよく使われる)で、これが最終的な『音程・音高』を決める。モジュレーターはマイクに入った自分の声で、これが『あ・い・う』のような子音・母音の成分(フォルマント)を提供する。VC340の内部では声を複数の周波数帯に分析し、その帯域ごとの音量変化をキャリア信号に適用することでロボットボイスが生まれる——マイクをキャリア入力に、シンセをモジュレーター入力に挿し違えると、この効果はまったく発生しない典型的な初心者のミスなので、どちらの入力がどちらの役割かを覚えておくことが重要。",
      },
    },
    {
      id: "midi_clock_sync_sequencer_drum",
      order: 45,
      title: "MIDIクロックでシーケンサーとドラムマシンのテンポを同期する(Elektron Digitakt + Roland TR-8S)",
      category: "配線問題",
      hook: "以前の単元ではMIDIケーブルで『どの鍵盤を弾いたか』という演奏データを送ったが、今回送るのは『テンポの拍』だけ——ノート情報を送らないMIDI配線もある。",
      patch: {
        scenario:
          "「Elektron Digitakt」をマスター(基準となるテンポを発信する側)にして、「Roland TR-8S」をスレーブ(外部からのテンポに合わせる側、あらかじめ本体設定でMIDI Sync=Externalにしておく)にしたい。DigitaktのMIDI OUTから、TR-8SのMIDI INへ接続してテンポ情報(MIDIクロック)を送る。さらに、Digitakt・TR-8Sそれぞれのメイン出力を、ミキサー「Yamaha MG12XU」のCH1・CH2へ送って音を出せるようにしよう。",
        equipment: [
          {
            id: "digitakt",
            label: "Elektron Digitakt(マスターシーケンサー)",
            icon: "Digitakt",
            ports: [
              { id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" },
              { id: "outL", label: "MAIN OUT L (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "MAIN OUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "tr8s",
            label: "Roland TR-8S(リズムマシン)",
            icon: "TR-8S",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "outL", label: "MASTER OUT L (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "MASTER OUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "ch1L", label: "CH1 L IN (TS)", type: "ts", dir: "in" },
              { id: "ch1R", label: "CH1 R IN (TS)", type: "ts", dir: "in" },
              { id: "ch2L", label: "CH2 L IN (TS)", type: "ts", dir: "in" },
              { id: "ch2R", label: "CH2 R IN (TS)", type: "ts", dir: "in" },
            ],
          },
        ],
        cablePalette: ["midi", "ts", "trs", "usb"],
        correctConnections: [
          { from: "digitakt.midiOut", to: "tr8s.midiIn", cable: "midi" },
          { from: "digitakt.outL", to: "mixer.ch1L", cable: "ts" },
          { from: "digitakt.outR", to: "mixer.ch1R", cable: "ts" },
          { from: "tr8s.outL", to: "mixer.ch2L", cable: "ts" },
          { from: "tr8s.outR", to: "mixer.ch2R", cable: "ts" },
        ],
        explain:
          "MIDIケーブルが運べるのは演奏データ(ノートオン/オフ)だけではない。MIDIクロックは『1拍を24分割したタイミングパルス』と『再生の開始・停止』の情報で、これを送ることで複数の機材のテンポをサンプル単位でぴったり揃えられる。ケーブルを挿すだけでなく、受け取る側(ここではTR-8S)の設定を『外部クロック待ち』に切り替えておかないと、機材同士がケーブルで繋がっていても同期しない点に注意——ケーブルは同期の必要条件であって、それだけでは十分条件にならない。以前の『MIDIキーボードと外部音源モジュールを配線する』単元で扱ったMIDIノート情報とは役割がまったく異なり、TR-8S自身が持つパターンはそのまま鳴りつつ、テンポだけがDigitakt側に追従する。なお、MIDIとよく似た5ピンDINコネクタを使う古い規格に『DIN Sync(Roland独自のテンポ同期方式)』があるが、電気的な信号形式がMIDIとは別物で互換性がないため、機材の対応規格を確認せずに繋いでも同期しない。",
      },
    },
    {
      id: "edrum_trigger_module",
      order: 46,
      title: "電子ドラムのトリガー配線とモジュール接続をする(Roland TD-27KV)",
      category: "配線問題",
      hook: "叩く場所の数だけケーブルが増える——電子ドラムは『パッドとモジュールを1対1でつなぐ』配線パズル。",
      patch: {
        scenario:
          "電子ドラムキット「Roland TD-27KV」をセットアップする。キックパッド「KD-200」、スネアパッド「PD-140DS」、タムパッド「PD-120」を、それぞれ専用のトリガーケーブル(TSフォーンケーブル)でドラム音源モジュール「TD-27」のTRIGGER INPUTへ接続する。最後に、TD-27のMASTER OUT(L/R)を、オーディオインターフェース「Focusrite Scarlett 2i2」のライン入力へ送って、PCに録音できるようにしよう。",
        equipment: [
          { id: "kick", label: "Roland KD-200(キックパッド)", icon: "KD-200", ports: [{ id: "out", label: "TRIGGER OUT (TS)", type: "ts", dir: "out" }] },
          { id: "snare", label: "Roland PD-140DS(スネアパッド)", icon: "PD-140DS", ports: [{ id: "out", label: "TRIGGER OUT (TS)", type: "ts", dir: "out" }] },
          { id: "tom", label: "Roland PD-120(タムパッド)", icon: "PD-120", ports: [{ id: "out", label: "TRIGGER OUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "module",
            label: "Roland TD-27(ドラム音源モジュール)",
            icon: "TD-27",
            ports: [
              { id: "kickIn", label: "TRIGGER IN: KICK (TS)", type: "ts", dir: "in" },
              { id: "snareIn", label: "TRIGGER IN: SNARE (TS)", type: "ts", dir: "in" },
              { id: "tomIn", label: "TRIGGER IN: TOM1 (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "MASTER OUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "MASTER OUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 2i2",
            icon: "2i2",
            ports: [
              { id: "lineInL", label: "LINE IN 1 (TRS)", type: "trs", dir: "in" },
              { id: "lineInR", label: "LINE IN 2 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["ts", "trs", "xlr", "midi"],
        correctConnections: [
          { from: "kick.out", to: "module.kickIn", cable: "ts" },
          { from: "snare.out", to: "module.snareIn", cable: "ts" },
          { from: "tom.out", to: "module.tomIn", cable: "ts" },
          { from: "module.outL", to: "interface.lineInL", cable: "trs" },
          { from: "module.outR", to: "interface.lineInR", cable: "trs" },
        ],
        explain:
          "電子ドラムのパッドは、叩いたときの振動をピエゾセンサーなどで電気信号に変換し、一般的なTSフォーン(アンバランス)のトリガーケーブルでモジュールへ送る。生ドラムのマイキング(以前の単元)と違い、パッドの数だけモジュール側にも個別のTRIGGER INPUTがあり、『どのパッドをどの入力に挿したか』をモジュール側の設定でも指定して初めて正しい音色が鳴る(例えばキックのケーブルをスネアの入力に挿すと、キックを踏んだのにスネアの音が鳴ってしまう)。モジュールが内部で生成した音は最終的に『ふつうのオーディオ信号』としてMASTER OUTから出力されるため、そこから先はアコースティック楽器を録音するときと同じように、オーディオケーブルでインターフェースへ送ればよい。",
      },
    },
    {
      id: "reamp_di_recording",
      order: 47,
      title: "リアンプ配線でドライ録音をもう一度アンプに送り直す(Radial ProRMP)",
      category: "配線問題(プロ環境)",
      hook: "録音した『味のない』ドライなギター音を、後からもう一度アンプに送り込んで録り直す——『リアンプ』という一見遠回りなテクニックを配線してみよう。",
      patch: {
        scenario:
          "ギター録音で、まずアンプを通さない『ドライ』な信号をDIボックス経由でそのままインターフェースに録音しておいた(この単元では録音済みとする)。後日、そのドライなトラックをオーディオインターフェース「Universal Audio Apollo x6」のライン出力から、リアンプボックス「Radial ProRMP」のINPUTへ送る。ProRMPは、ライン信号をギターアンプが求めるHi-Z(ハイインピーダンス)の楽器信号に変換してくれる。ProRMPのOUTPUTから、ギターアンプ「Marshall JCM800」のINPUTへ接続し、アンプで鳴らした音を改めてマイクで録り直せるようにしよう。",
        equipment: [
          { id: "interface", label: "Universal Audio Apollo x6", icon: "ApolloX6", ports: [{ id: "lineOut", label: "LINE OUT 1 (TRS, ドライトラック再生)", type: "trs", dir: "out" }] },
          {
            id: "reamp",
            label: "Radial ProRMP(パッシブ・リアンプボックス)",
            icon: "ProRMP",
            ports: [
              { id: "input", label: "INPUT (TRS)", type: "trs", dir: "in" },
              { id: "output", label: "OUTPUT (TS, Hi-Z)", type: "ts", dir: "out" },
            ],
          },
          { id: "amp", label: "Marshall JCM800(ギターアンプヘッド)", icon: "JCM800", ports: [{ id: "input", label: "INPUT (TS)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["trs", "ts", "xlr", "speaker"],
        correctConnections: [
          { from: "interface.lineOut", to: "reamp.input", cable: "trs" },
          { from: "reamp.output", to: "amp.input", cable: "ts" },
        ],
        explain:
          "リアンプ(Re-amping)とは、一度ドライ(アンプを通さない生の音)で録音しておいたギターやベースのトラックを、後からアンプに『再生』として送り込み、マイキングを変えたり別のアンプを試したりしながら好きなだけ録り直せるテクニック。インターフェースのライン出力は電圧が大きく、そのままギターアンプのインプットに挿すと信号が大きすぎたりインピーダンス(電気的な抵抗の性質)が合わず本来の音にならないため、Radial ProRMPのようなリアンプボックスでライン信号をギター本来のHi-Z信号相当に変換する。ProRMPは電源不要の『パッシブ』設計で、内部のトランスによってライン→Hi-Z変換とグラウンドループ(アース回路の電位差によるハムノイズ)の遮断を同時に行う。以前の単元で扱ったDI(楽器信号→ライン信号)とは逆方向の変換を行っている点も合わせて覚えておくとよい。",
      },
    },
  ],
};
