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
    {
      id: "immersive_atmos_monitor_setup",
      order: 48,
      title: "イマーシブ(Dolby Atmos)モニタリングのスピーカー配置を配線する",
      category: "配線問題(プロ環境)",
      hook: "L/Rの2本だけでは終わらない——天井のスピーカーまで含めた立体的なモニター環境を、多ch出力インターフェースから配線しよう。",
      patch: {
        scenario:
          "Dolby Atmosでの立体音響(イマーシブオーディオ)ミックスに対応するため、7.1.4ch(床面7ch+LFE1ch+天井4ch)のモニター環境を組む。多ch出力に対応したオーディオインターフェース「Universal Audio Apollo x16」から、床面のフロントL/C/R、サラウンドLs/Rs、リアRls/Rrs、そしてサブウーファー(LFE)、天井に設置した4台のハイトスピーカー(Height L/R、Rear Height L/R)へ、それぞれ個別のライン出力で接続する。今回は代表として、フロントL/C/R、サブウーファー、天井のHeight L/Rの6系統を配線しよう。",
        equipment: [
          {
            id: "interface",
            label: "Universal Audio Apollo x16",
            icon: "ApolloX16",
            ports: [
              { id: "outL", label: "LINE OUT 1 (FRONT L, TRS)", type: "trs", dir: "out" },
              { id: "outC", label: "LINE OUT 2 (CENTER, TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "LINE OUT 3 (FRONT R, TRS)", type: "trs", dir: "out" },
              { id: "outSub", label: "LINE OUT 4 (LFE/SUB, TRS)", type: "trs", dir: "out" },
              { id: "outHL", label: "LINE OUT 5 (HEIGHT L, TRS)", type: "trs", dir: "out" },
              { id: "outHR", label: "LINE OUT 6 (HEIGHT R, TRS)", type: "trs", dir: "out" },
            ],
          },
          { id: "spkL", label: "Genelec 8341(フロントL)", icon: "8341", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkC", label: "Genelec 8341(センター)", icon: "8341", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Genelec 8341(フロントR)", icon: "8341", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "sub", label: "Genelec 7360(サブウーファー)", icon: "7360", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "heightL", label: "Genelec 8330(天井 Height L)", icon: "8330", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "heightR", label: "Genelec 8330(天井 Height R)", icon: "8330", ports: [{ id: "in", label: "IN (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["trs", "xlr", "speaker", "rca"],
        correctConnections: [
          { from: "interface.outL", to: "spkL.in", cable: "trs" },
          { from: "interface.outC", to: "spkC.in", cable: "trs" },
          { from: "interface.outR", to: "spkR.in", cable: "trs" },
          { from: "interface.outSub", to: "sub.in", cable: "trs" },
          { from: "interface.outHL", to: "heightL.in", cable: "trs" },
          { from: "interface.outHR", to: "heightR.in", cable: "trs" },
        ],
        explain:
          "Dolby Atmosのような立体音響(イマーシブオーディオ)のミックスは、これまでの単元で扱ってきたステレオ(L/R)やサラウンド5.1chと違い、天井方向のスピーカー(ハイトチャンネル)を含めた多数のスピーカーを同時にモニターする必要がある。そのぶん、モニターコントローラーやオーディオインターフェースには『チャンネル数の多い出力』が求められ、Apollo x16のような多ch出力対応の機種が使われることが多い。配線自体は1本1本『インターフェースの出力ch』と『対応する位置のスピーカーの入力』をTRSやXLRのライン接続でつなぐだけで、以前の単元(モニターコントローラーで複数スピーカーを切り替える)の考え方の延長線上にある——ただし本数が一気に増えるため、どの出力がどの位置のスピーカーに対応しているかをケーブルにラベルを付けて管理することが実務上重要になる。天井のスピーカーは、設置の都合上イネーブルドスピーカー(Dolby Atmos用に天井方向へ反射音を出す専用モデル)を使うケースもあるが、この単元では直接天井に設置するモデルとして配線した。",
      },
    },
    {
      id: "digital_mixer_usb_multitrack",
      order: 49,
      title: "デジタルミキサーのUSBマルチトラック録音とバーチャルサウンドチェックを配線する(Behringer X32)",
      category: "配線問題(プロ環境)",
      hook: "本番前に『昨日録音した音』を流しながらPA卓のリハーサルができる——USB1本で『全ch録音』と『全ch再生』を同時にこなす配線を体験しよう。",
      patch: {
        scenario:
          "ライブハウスでのPA作業。デジタルミキサー「Behringer X32」の全32chを、内蔵のUSB経由でノートPC(録音用DAWソフトを起動)へ丸ごと録音しつつ、後日そのマルチトラック音源をPCからX32のUSB入力へ送り返して、本番と同じフェーダー操作でリハーサル(バーチャルサウンドチェック)ができるようにしたい。X32のUSB(録音/再生兼用、双方向)から、ノートPCのUSBへ接続しよう。",
        equipment: [
          { id: "mixer", label: "Behringer X32(デジタルミキサー)", icon: "X32", ports: [{ id: "usb", label: "USB AUDIO(32IN/32OUT, 双方向)", type: "usb", dir: "out" }] },
          { id: "pc", label: "ノートPC(DAW起動済み)", icon: "PC", ports: [{ id: "usbIn", label: "USB", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["usb", "ethernet", "xlr", "trs"],
        correctConnections: [{ from: "mixer.usb", to: "pc.usbIn", cable: "usb" }],
        explain:
          "Behringer X32のようなデジタルミキサーは、内蔵のUSBオーディオインターフェース機能によって、32chすべてのマイク入力を個別にUSB1本でPCへ丸ごと録音できる(マルチトラックレコーディング)。さらに同じUSB経路は再生方向にも対応しており、録音した32chの音源をPC側からもう一度X32へ送り返せば、実際のバンドがいなくても『本番と同じチャンネル構成』でフェーダーバランスやエフェクトの作り込みをリハーサルできる——これを『バーチャルサウンドチェック』と呼ぶ。配線自体はUSBケーブル1本だけとシンプルだが、以前の単元で扱ったADAT(8ch単位)やDante(ネットワーク経由)と違い、X32のUSBは『そのミキサー専用の32ch入出力』という位置づけで、他の機種と混在させる規格ではない点に注意。本番当日は、この同じUSB接続を使って全chをバックアップ録音しておくことも一般的で、トラブル対応や後日のミックスにも活用できる。",
      },
    },
    {
      id: "radio_hybrid_mixminus",
      order: 50,
      title: "ラジオ電話出演のミックスマイナス配線を組む(JK Audio Broadcast Host)",
      category: "配線問題(プロ環境)",
      hook: "電話の相手に自分の声をそのまま返すと、コンマ数秒の遅れで自分の声が『こだま』のように聞こえてしまう——それを防ぐ『ミックスマイナス』という考え方を配線しながら理解しよう。",
      patch: {
        scenario:
          "小さなラジオ番組の収録。デジタルミキサー「Behringer XR18」で、パーソナリティ2人のマイクと電話出演者の声をまとめている。あらかじめXR18のAUX SEND 1には、電話出演者のチャンネルだけをミュートし、それ以外の全チャンネル(パーソナリティ2人の声)を送るよう設定済み(これを『N-1(マイナスワン)ミックス』と呼ぶ)。このAUX SEND 1を、電話ハイブリッド「JK Audio Broadcast Host」のSEND IN(電話回線へ送る音の入力)へ接続し、Broadcast HostのOUTPUT(電話回線から届いた、相手の声だけが出てくる出力)を、XR18の空いているチャンネル(CH8)のマイク/ライン入力へ接続して、番組全体の音にミックスしよう。",
        equipment: [
          {
            id: "mixer",
            label: "Behringer XR18(デジタルミキサー)",
            icon: "XR18",
            ports: [
              { id: "auxSend", label: "AUX SEND 1 (XLR)", type: "xlr", dir: "out" },
              { id: "ch8In", label: "CH8 MIC/LINE IN (XLR)", type: "xlr", dir: "in" },
            ],
          },
          {
            id: "hybrid",
            label: "JK Audio Broadcast Host(電話ハイブリッド)",
            icon: "BCHost",
            ports: [
              { id: "sendIn", label: "SEND IN (XLR)", type: "xlr", dir: "in" },
              { id: "out", label: "OUTPUT (XLR, 相手の声のみ)", type: "xlr", dir: "out" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb", "rca"],
        correctConnections: [
          { from: "mixer.auxSend", to: "hybrid.sendIn", cable: "xlr" },
          { from: "hybrid.out", to: "mixer.ch8In", cable: "xlr" },
        ],
        explain:
          "電話ハイブリッドは、1本の電話回線で『こちらの声を送る』『相手の声を受け取る』を同時にこなす機材。もしAUX SEND 1に電話出演者自身のチャンネルまで混ぜて送ってしまうと、相手は自分の声を(電話回線とスタジオ側の遅延を挟んで)少し遅れて聞くことになり、強いエコーやハウリングの原因になる。そこで、送り出すミックスからは電話出演者本人のチャンネルだけを抜いた『ミックスマイナス(N-1ミックス)』を作ってSEND INへ送るのが放送・配信の定石。Broadcast HostのOUTPUTから出てくるのは相手の声だけなので、これを空いているチャンネルに立てれば、パーソナリティ2人の声と電話出演者の声が1つのミックスとしてXR18でまとまり、そのままオンエアや配信に使える。この『自分自身の声だけを抜いて相手に返す』という考え方は、Zoomなどのオンライン会議で相手側にハウリングのある音を返さないための処理にも応用されている。",
      },
    },
    {
      id: "loop_switcher_pedalboard",
      order: 51,
      title: "ループスイッチャーで複数エフェクターを一括切替する(Boss ES-8)",
      category: "配線問題",
      hook: "エフェクター1個ずつを直列につなぐと、足元でバイパスを踏み間違えるだけで音が止まる——『ループスイッチャー』で複数のペダルをワンタッチで一括オン/オフする配線を体験しよう。",
      patch: {
        scenario:
          "ギタリストが、歪み系「Boss DS-1」・モジュレーション系「Boss CE-2W」・ディレイ「Boss DD-8」の3台のペダルを、ループスイッチャー「Boss ES-8」の個別ループに接続して、フットスイッチ1つで好きな組み合わせをオン/オフできるようにしたい。ギターをES-8のINPUTへ、LOOP 1 SEND/RETURNにDS-1、LOOP 2 SEND/RETURNにCE-2W、LOOP 3 SEND/RETURNにDD-8を接続し、最後にES-8のOUTPUTをギターアンプ「Fender '65 Twin Reverb」のINPUTへ送ろう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT", type: "ts", dir: "out" }] },
          {
            id: "switcher",
            label: "Boss ES-8(ループスイッチャー)",
            icon: "ES-8",
            ports: [
              { id: "input", label: "INPUT", type: "ts", dir: "in" },
              { id: "loop1Send", label: "LOOP 1 SEND", type: "ts", dir: "out" },
              { id: "loop1Return", label: "LOOP 1 RETURN", type: "ts", dir: "in" },
              { id: "loop2Send", label: "LOOP 2 SEND", type: "ts", dir: "out" },
              { id: "loop2Return", label: "LOOP 2 RETURN", type: "ts", dir: "in" },
              { id: "loop3Send", label: "LOOP 3 SEND", type: "ts", dir: "out" },
              { id: "loop3Return", label: "LOOP 3 RETURN", type: "ts", dir: "in" },
              { id: "output", label: "OUTPUT", type: "ts", dir: "out" },
            ],
          },
          { id: "drive", label: "Boss DS-1(ディストーション)", icon: "DS-1", ports: [{ id: "in", label: "IN", type: "ts", dir: "in" }, { id: "out", label: "OUT", type: "ts", dir: "out" }] },
          { id: "mod", label: "Boss CE-2W(コーラス)", icon: "CE-2W", ports: [{ id: "in", label: "IN", type: "ts", dir: "in" }, { id: "out", label: "OUT", type: "ts", dir: "out" }] },
          { id: "delay", label: "Boss DD-8(ディレイ)", icon: "DD-8", ports: [{ id: "in", label: "IN", type: "ts", dir: "in" }, { id: "out", label: "OUT", type: "ts", dir: "out" }] },
          { id: "amp", label: "Fender '65 Twin Reverb", icon: "TwinRvb", ports: [{ id: "in", label: "INPUT", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "midi"],
        correctConnections: [
          { from: "guitar.out", to: "switcher.input", cable: "ts" },
          { from: "switcher.loop1Send", to: "drive.in", cable: "ts" },
          { from: "drive.out", to: "switcher.loop1Return", cable: "ts" },
          { from: "switcher.loop2Send", to: "mod.in", cable: "ts" },
          { from: "mod.out", to: "switcher.loop2Return", cable: "ts" },
          { from: "switcher.loop3Send", to: "delay.in", cable: "ts" },
          { from: "delay.out", to: "switcher.loop3Return", cable: "ts" },
          { from: "switcher.output", to: "amp.in", cable: "ts" },
        ],
        explain:
          "ループスイッチャーは、複数のエフェクターをそれぞれ独立した『ループ(SEND/RETURN)』に接続しておき、フットスイッチ1つでそのループを丸ごとオン/オフできる機材。ペダルを1台ずつ直列(シリアル)につなぐ従来のペダルボードだと、足元でバイパスを1つずつ踏み替える必要があり、踏み忘れや誤操作が起きやすいうえ、ケーブルの本数が増えるほど音質劣化(バッファーの重ね掛かりやノイズ)のリスクも上がる。Boss ES-8のようなループスイッチャーなら、あらかじめ『Aメロは歪みだけ』『サビは歪み+ディレイ』のようにパッチ(組み合わせ)を登録しておき、曲中でボタン1つで一括切替できる。ES-8自体はMIDIの送受信にも対応しており、MIDI対応のペダルであれば音色そのものの呼び出しまで同時に自動化できるが、今回のシンプルな構成ではMIDIケーブルは登場しない。",
      },
    },
    {
      id: "midi_thru_daisychain",
      order: 52,
      title: "MIDI THRUで音源モジュールをデイジーチェーン接続する(Roland INTEGRA-7 + JV-1080)",
      category: "配線問題",
      hook: "1本のMIDIケーブルからでも、THRU端子を数珠つなぎにすれば複数の音源を同時に鳴らせる——レイヤーサウンドの裏側にある配線を体験しよう。",
      patch: {
        scenario:
          "MIDIマスターキーボード「Roland A-88MKII」を弾いて、2台の音源モジュール「Roland INTEGRA-7」と「Roland JV-1080」を同時に鳴らし、2つの音色を重ねた『レイヤーサウンド』を作りたい。A-88MKIIのMIDI OUTから、まずINTEGRA-7のMIDI INへ演奏データを送る。INTEGRA-7のMIDI THRU(入ってきたデータをそのまま複製して転送する端子)から、JV-1080のMIDI INへケーブルをつなぎ、1本のキーボードから2台を同時に演奏できるようにしよう。さらに、INTEGRA-7とJV-1080それぞれの音声出力を、ミキサー「Yamaha MG12XU」の空いているチャンネルへ立てて音を混ぜよう。",
        equipment: [
          { id: "keyboard", label: "Roland A-88MKII(MIDIマスターキーボード)", icon: "A-88", ports: [{ id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" }] },
          {
            id: "module1",
            label: "Roland INTEGRA-7(音源モジュール)",
            icon: "INTGR7",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "midiThru", label: "MIDI THRU", type: "midi", dir: "out" },
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "module2",
            label: "Roland JV-1080(音源モジュール)",
            icon: "JV1080",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "ch1In", label: "CH1 LINE IN (TRS)", type: "trs", dir: "in" },
              { id: "ch2In", label: "CH2 LINE IN (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["midi", "trs", "usb", "xlr"],
        correctConnections: [
          { from: "keyboard.midiOut", to: "module1.midiIn", cable: "midi" },
          { from: "module1.midiThru", to: "module2.midiIn", cable: "midi" },
          { from: "module1.outL", to: "mixer.ch1In", cable: "trs" },
          { from: "module2.outL", to: "mixer.ch2In", cable: "trs" },
        ],
        explain:
          "MIDI THRUは『受け取った演奏データを、寸分違わずそのまま複製してもう1つ先に転送する』ための専用端子で、MIDI OUTのように『自分が生成したデータ』を送るわけではない点がポイント。この仕組みを使うと、A-88MKII → INTEGRA-7(MIDI IN)→(MIDI THRU)→ JV-1080(MIDI IN)というように、1本のキーボードの演奏データを複数の音源モジュールへ数珠つなぎ(デイジーチェーン)で分配でき、両方の音源を同時に鳴らして音を重ねる『レイヤーサウンド』が作れる。ただし、あまり多くの機材をTHRUで直列に連結すると、信号が伝わる過程でわずかなタイミングのズレ(ジッター)が蓄積することがあり、実務では以前の単元で登場したMIDI Solutions MERGERのようなマージボックスや、USB-MIDIインターフェースの複数ポート出力を使って、各機材へ直接データを配る設計にすることも多い。",
      },
    },
    {
      id: "guitar_wireless_system",
      order: 53,
      title: "ギター用ワイヤレスシステムを配線する(Shure GLXD16)",
      category: "配線問題",
      hook: "ボーカル用ワイヤレスと同じ『マイク』としてではなく、楽器の信号(Hi-Z)を無線で飛ばす——ギター専用のワイヤレスシステムを配線しよう。",
      patch: {
        scenario:
          "ライブでギタリストがケーブルを気にせずステージを動き回れるように、ワイヤレスシステム「Shure GLXD16」を導入する。ギター「Fender Stratocaster」の出力に、ボディに装着するトランスミッター「GLXD1」を接続し、ペダルボード上に置いたレシーバー「GLXD6」(チューナー機能内蔵、足元で踏んで操作するペダル型)で無線受信する。GLXD6の出力を、ギターアンプ「Marshall JVM410H」のINPUTへ接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT", type: "ts", dir: "out" }] },
          { id: "tx", label: "Shure GLXD1(ボディパック型トランスミッター)", icon: "GLXD1", ports: [{ id: "in", label: "INPUT", type: "ts", dir: "in" }] },
          { id: "rx", label: "Shure GLXD6(ペダル型レシーバー)", icon: "GLXD6", ports: [{ id: "out", label: "OUTPUT", type: "ts", dir: "out" }] },
          { id: "amp", label: "Marshall JVM410H", icon: "JVM410H", ports: [{ id: "in", label: "INPUT", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "usb"],
        correctConnections: [
          { from: "guitar.out", to: "tx.in", cable: "ts" },
          { from: "rx.out", to: "amp.in", cable: "ts" },
        ],
        explain:
          "ボーカル用のワイヤレスシステム(以前の単元で扱ったShure ULXD4Dなど)はマイクからのマイクレベル信号をXLRで扱うのに対し、GLXD16のようなギター用ワイヤレスシステムは、エレキギターのような高インピーダンス(Hi-Z)の楽器信号をそのまま無線化する設計になっている。GLXD1トランスミッターはギターのアウトプットに直接プラグイン(挿し込む)するタイプで、電波を使ってペダルボード上のGLXD6レシーバーへ信号を飛ばす——この間はケーブルではなく無線区間なので、パッチケーブルは登場しない。GLXD6の出力はアンプのHi-Z入力にそのまま送れるよう、ギター本来のインピーダンスに近い特性で出力される点も、通常のDIボックス(インピーダンスをライン/マイクレベルに変換する機材)とは役割が異なる。GLXD6はチューナー機能も内蔵しており、ペダルを踏むとミュートしながらチューニングできるため、ステージ上でケーブルレスかつ音を出さずにチューニングを確認できる実用的なメリットもある。",
      },
    },
    {
      id: "midi_to_cv_gate",
      order: 54,
      title: "DAWのMIDIをCV/Gateに変換してヴィンテージシンセを鳴らす(Kenton Pro-2000 mkII + Roland SH-101)",
      category: "配線問題",
      hook: "MIDI端子を持たないヴィンテージシンセも、変換すればDAWの打ち込みで演奏できる——『MIDI-CVコンバーター』の配線を体験しよう。",
      patch: {
        scenario:
          "MIDI端子を持たない(発売当時、MIDI規格がまだ普及していなかった)ヴィンテージのアナログシンセ「Roland SH-101」を、DAWの打ち込みデータで演奏したい。PC(DAW起動済み)のUSBから、USB-MIDIインターフェース「Roland UM-ONE mk2」を経由してMIDI信号を5ピンDINに変換し、「Kenton Pro-2000 mkII」(MIDI-CV/Gateコンバーター)のMIDI INへ送る。Pro-2000 mkIIが生成したCV(音の高さを表す電圧)とGATE(音の長さ・オン/オフ)を、それぞれSH-101のCV INとGATE INへ接続しよう。",
        equipment: [
          { id: "pc", label: "PC(DAW起動済み)", icon: "PC", ports: [{ id: "usbOut", label: "USB", type: "usb", dir: "out" }] },
          {
            id: "umone",
            label: "Roland UM-ONE mk2(USB-MIDIインターフェース)",
            icon: "UM-ONE",
            ports: [
              { id: "usbIn", label: "USB", type: "usb", dir: "in" },
              { id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" },
            ],
          },
          {
            id: "kenton",
            label: "Kenton Pro-2000 mkII(MIDI-CV/Gateコンバーター)",
            icon: "Pro2000",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "cvOut", label: "CV OUT", type: "cv", dir: "out" },
              { id: "gateOut", label: "GATE OUT", type: "cv", dir: "out" },
            ],
          },
          {
            id: "synth",
            label: "Roland SH-101(ヴィンテージアナログシンセ)",
            icon: "SH-101",
            ports: [
              { id: "cvIn", label: "CV IN", type: "cv", dir: "in" },
              { id: "gateIn", label: "GATE IN", type: "cv", dir: "in" },
            ],
          },
        ],
        cablePalette: ["cv", "midi", "usb", "trs"],
        correctConnections: [
          { from: "pc.usbOut", to: "umone.usbIn", cable: "usb" },
          { from: "umone.midiOut", to: "kenton.midiIn", cable: "midi" },
          { from: "kenton.cvOut", to: "synth.cvIn", cable: "cv" },
          { from: "kenton.gateOut", to: "synth.gateIn", cable: "cv" },
        ],
        explain:
          "Roland SH-101が発売された1980年代前半はまだMIDI規格が存在せず(MIDIの策定は1983年)、シンセ同士やシーケンサーとの同期にはCV(Control Voltage、音の高さを電圧で表す信号)とGATE(音のオン/オフを表す信号)が使われていた。現代のDAWはMIDIでしか演奏データを送れないため、Kenton Pro-2000 mkIIのような『MIDI-CV/Gateコンバーター』を挟み、MIDIのノート情報をCV(ピッチ電圧)とGATE(トリガー)に変換してSH-101へ送ることで、DAWの打ち込みでヴィンテージシンセを演奏できるようになる。PCとPro-2000 mkIIの間にUSB-MIDIインターフェース「UM-ONE mk2」を挟んでいるのは、PCのUSB-MIDIをKenton側の5ピンDIN MIDI INへ変換するため——以前の単元で扱ったEurorackモジュラーのCV/Gateとは別系統の機材同士でも、根っこにある電圧信号の考え方は同じであることがわかる。SH-101のCV/GateはV/oct(1オクターブ=1V)のスケールを採用しているため、Pro-2000 mkII側もV/octスケールに設定しておく必要がある——CV機器同士を組み合わせる際は、電圧のスケール(規格)が合っているかの確認が欠かせない。",
      },
    },
    {
      id: "streaming_game_mic_mixer",
      order: 55,
      title: "実況配信のゲーム音声とマイクをミックスする(TC Helicon GoXLR)",
      category: "配線問題",
      hook: "ゲーム機の音・PCの音・自分の声を、視聴者に聞かせたいバランスでミックスしつつ、自分の耳ではまた別のバランスで聞きたい——配信者向けミキサーならではの配線を体験しよう。",
      patch: {
        scenario:
          "ゲーム実況配信者が、コンデンサーマイク「Shure SM7B」の音声と、ゲーム機「PlayStation 5」の音声を、配信用オーディオインターフェース/ミキサー「TC Helicon GoXLR」でミックスしたい。SM7BをGoXLRのMIC INへ、PS5のヘッドホン出力をGoXLRのGAME INPUTへ接続し、GoXLRからUSBでPCへ送って配信ソフト(OBS等)に音を渡そう。",
        equipment: [
          { id: "mic", label: "Shure SM7B", icon: "SM7B", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "ps5", label: "PlayStation 5", icon: "PS5", ports: [{ id: "audioOut", label: "AUDIO OUT (TRS)", type: "trs", dir: "out" }] },
          {
            id: "goxlr",
            label: "TC Helicon GoXLR",
            icon: "GoXLR",
            ports: [
              { id: "micIn", label: "MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "gameIn", label: "GAME INPUT (TRS)", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "配信用PC", icon: "PC", ports: [{ id: "usbIn", label: "USB", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "ts", "rca"],
        correctConnections: [
          { from: "mic.out", to: "goxlr.micIn", cable: "xlr" },
          { from: "ps5.audioOut", to: "goxlr.gameIn", cable: "trs" },
          { from: "goxlr.usb", to: "pc.usbIn", cable: "usb" },
        ],
        explain:
          "GoXLRのようなブロードキャスト特化型ミキサーは、マイク・ゲーム機・PCの音声(通知音やボイスチャットなど)をそれぞれ別々の入力chとして受け取り、『配信で視聴者に聞かせる音量バランス』と『自分がヘッドホンで聞くバランス(たとえばゲーム音は大きめ、自分の声は小さめ等)』を、電動フェーダーでそれぞれ独立に調整できるのが特徴。マイクはMIDASプリアンプを搭載したXLR入力で受け、コンデンサーマイクを選べば+48Vのファンタム電源も供給できる。ゲーム機やPCの音は、あらかじめ用途別にチャンネルが分かれているため、『実況の声は配信に乗せるが、特定の通知音だけは自分にしか聞こえないようにする』といった、配信者ならではの細かい音量コントロールが1台で完結する。GoXLRからPCへの経路はUSB1本にまとめられ、配信ソフト側では各チャンネルを個別のオーディオデバイスとして認識できるため、マイクの声だけを別トラックで録音しておく、といった使い方もできる。",
      },
    },
    {
      id: "stereo_pair_piano_recording",
      order: 56,
      title: "ステレオペア(ORTF方式)でピアノを録音する(Neumann KM 184 ×2)",
      category: "配線問題",
      hook: "1本のマイクでは奥行きや左右の広がりが録れない——同じモデルのマイクを2本、決まった角度と間隔で立てる『ステレオペア』の配線を体験しよう。",
      patch: {
        scenario:
          "グランドピアノをステレオで録音したい。同一モデルの小型コンデンサーマイク「Neumann KM 184」を2本用意し、カプセル同士の間隔を約17cm、開き角を約110度にした『ORTF方式』で立てる。左右それぞれのKM 184を、8chマイクプリアンプ内蔵インターフェース「Focusrite Scarlett 18i20」のMIC IN 1(L)とMIC IN 2(R)へXLRで接続し、MacBook Airへ録音しよう。",
        equipment: [
          { id: "micL", label: "Neumann KM 184(L)", icon: "KM184", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "micR", label: "Neumann KM 184(R)", icon: "KM184", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20",
            icon: "18i20",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "MIC IN 2 (XLR)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "ts", "rca"],
        correctConnections: [
          { from: "micL.out", to: "interface.in1", cable: "xlr" },
          { from: "micR.out", to: "interface.in2", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "ORTF方式は、2本の単一指向性(カーディオイド)マイクのカプセル同士を約17cm離し、左右に約110度開いて立てるステレオマイキングの定番手法の1つで、フランスの放送局(ORTF)で開発された、人間の耳の間隔・角度に近い設計から、自然な奥行きと左右の広がりが録れるとされる。1本のマイクだけでは、楽器のどの位置の音を拾うかという『点』の情報しか録れないが、同一モデルの2本を正しい間隔・角度で立てることで、低音弦側と高音弦側の音の広がりや、ホールの響きの左右差までステレオ感として記録できる。左右のマイクは必ず同じモデル(今回はKM 184を2本)を使い、左右で特性が揃った状態にすることが重要——片方だけ違うモデルを使うと、左右の音色や感度に差が出て、ステレオイメージが崩れてしまう。XLRケーブルは録音の左右(L/R)を取り違えないよう、インターフェースの入力chとマイクの左右を対応させて挿すのがポイント。",
      },
    },
    {
      id: "analog_summing_mixer",
      order: 57,
      title: "アナログサミングミキサーでDAWのステムを外部ミックスする(Dangerous Music 2-BUS+)",
      category: "配線問題(プロ環境)",
      hook: "DAWの中で全トラックを混ぜる「ITB(イン・ザ・ボックス)ミックス」ではなく、あえて外に出してアナログ回路で混ぜる——ステムをサミングミキサーへ送り、また戻す配線を体験しよう。",
      patch: {
        scenario:
          "ミックスエンジニアが、DAWで作った「ドラム」「ベース/ギター」「ボーカル」の3つのステレオステム(グループにまとめた音)を、アナログのサミングミキサー「Dangerous Music 2-BUS+」で混ぜたい。オーディオインターフェース「Universal Audio Apollo x8」の背面にはDB25コネクタの追加ライン出力があり、DB25-XLRスネークケーブルで3ステレオペア(計6ch)を2-BUS+の入力へ送る。2-BUS+でまとめられたステレオのミックス出力を、Apollo x8のアナログ入力(RETURN)へ戻し、DAWで新しいトラックとして録音し直せるように配線しよう。",
        equipment: [
          {
            id: "interface",
            label: "Universal Audio Apollo x8",
            icon: "ApolloX8",
            ports: [
              { id: "stem1L", label: "STEM OUT 1 L (Drums)", type: "xlr", dir: "out" },
              { id: "stem1R", label: "STEM OUT 1 R (Drums)", type: "xlr", dir: "out" },
              { id: "stem2L", label: "STEM OUT 2 L (Bass/Gt)", type: "xlr", dir: "out" },
              { id: "stem2R", label: "STEM OUT 2 R (Bass/Gt)", type: "xlr", dir: "out" },
              { id: "stem3L", label: "STEM OUT 3 L (Vocals)", type: "xlr", dir: "out" },
              { id: "stem3R", label: "STEM OUT 3 R (Vocals)", type: "xlr", dir: "out" },
              { id: "returnL", label: "RETURN IN L (XLR)", type: "xlr", dir: "in" },
              { id: "returnR", label: "RETURN IN R (XLR)", type: "xlr", dir: "in" },
            ],
          },
          {
            id: "summing",
            label: "Dangerous Music 2-BUS+(アナログサミングミキサー)",
            icon: "2BUS+",
            ports: [
              { id: "in1L", label: "CH1/2 IN L (XLR)", type: "xlr", dir: "in" },
              { id: "in1R", label: "CH1/2 IN R (XLR)", type: "xlr", dir: "in" },
              { id: "in2L", label: "CH3/4 IN L (XLR)", type: "xlr", dir: "in" },
              { id: "in2R", label: "CH3/4 IN R (XLR)", type: "xlr", dir: "in" },
              { id: "in3L", label: "CH5/6 IN L (XLR)", type: "xlr", dir: "in" },
              { id: "in3R", label: "CH5/6 IN R (XLR)", type: "xlr", dir: "in" },
              { id: "mixOutL", label: "STEREO OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mixOutR", label: "STEREO OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "ts", "digilink"],
        correctConnections: [
          { from: "interface.stem1L", to: "summing.in1L", cable: "xlr" },
          { from: "interface.stem1R", to: "summing.in1R", cable: "xlr" },
          { from: "interface.stem2L", to: "summing.in2L", cable: "xlr" },
          { from: "interface.stem2R", to: "summing.in2R", cable: "xlr" },
          { from: "interface.stem3L", to: "summing.in3L", cable: "xlr" },
          { from: "interface.stem3R", to: "summing.in3R", cable: "xlr" },
          { from: "summing.mixOutL", to: "interface.returnL", cable: "xlr" },
          { from: "summing.mixOutR", to: "interface.returnR", cable: "xlr" },
        ],
        explain:
          "Dangerous Music 2-BUS+は最大16ch(8ステレオペア)をアナログ回路で混ぜられるサミングミキサーで、背面はDB25または XLRで入力を受けられる。多くのオーディオインターフェースは追加のライン出力をDB25コネクタでまとめて持っており、DB25-XLRスネークケーブルを使うことで、複数chをまとめて配線できる(1本ずつXLRを挿すより現実的)。DAWの内部(ITB=イン・ザ・ボックス)ですべてを混ぜるミックスと違い、外部のアナログ回路を通すことで、トランス回路や回路自体の非線形な歪みによる質感の変化(倍音の付加など)が加わるとされ、これを好むエンジニアが今でも一定数いる。2-BUS+から出てきたステレオのミックス信号は、そのままではDAWに戻らないため、インターフェースの余っているアナログ入力(RETURN)へ接続し、新しいオーディオトラックとして録音し直す必要がある——「外に出して、混ぜて、また録り直す」という往復の配線がアナログサミングの基本形。",
      },
    },
    {
      id: "monitor_calibration_glm",
      order: 58,
      title: "モニタースピーカー較正用の測定マイクを配線する(Genelec GLM)",
      category: "配線問題(プロ環境)",
      hook: "スピーカーの音そのものではなく「部屋の響き」を測るための配線——測定マイクとネットワークアダプターで、GLMの自動音場補正を組んでみよう。",
      patch: {
        scenario:
          "ミックスルームに「Genelec 8341A」(SAMモニター、L/R2台)を設置し、部屋の音響特性を測定して自動補正する「Genelec GLM」システムを組みたい。PCのUSBから「Genelec GLM Network Adapter」へ接続し、付属の「測定用リファレンスマイク」をアダプターのマイク入力へ挿す。アダプターからEthernetケーブルで8341A(L)へ、8341A(L)のTHRU(スルー)端子から8341A(R)へと、モニター同士をデイジーチェーン(数珠つなぎ)で接続しよう。",
        equipment: [
          { id: "pc", label: "PC(GLMソフトウェア)", icon: "PC", ports: [{ id: "usbOut", label: "USB", type: "usb", dir: "out" }] },
          {
            id: "adapter",
            label: "Genelec GLM Network Adapter",
            icon: "GLM",
            ports: [
              { id: "usbIn", label: "USB IN", type: "usb", dir: "in" },
              { id: "micIn", label: "MIC IN(測定マイク用)", type: "trs", dir: "in" },
              { id: "netOut", label: "NETWORK OUT", type: "ethernet", dir: "out" },
            ],
          },
          { id: "mic", label: "測定用リファレンスマイク(GLM付属)", icon: "RefMic", ports: [{ id: "out", label: "OUT(ミニジャック)", type: "trs", dir: "out" }] },
          {
            id: "monL",
            label: "Genelec 8341A(L, SAMモニター)",
            icon: "8341A",
            ports: [
              { id: "netIn", label: "NETWORK IN", type: "ethernet", dir: "in" },
              { id: "netThru", label: "NETWORK THRU", type: "ethernet", dir: "out" },
            ],
          },
          { id: "monR", label: "Genelec 8341A(R, SAMモニター)", icon: "8341A", ports: [{ id: "netIn", label: "NETWORK IN", type: "ethernet", dir: "in" }] },
        ],
        cablePalette: ["usb", "trs", "ethernet", "xlr", "optical"],
        correctConnections: [
          { from: "pc.usbOut", to: "adapter.usbIn", cable: "usb" },
          { from: "mic.out", to: "adapter.micIn", cable: "trs" },
          { from: "adapter.netOut", to: "monL.netIn", cable: "ethernet" },
          { from: "monL.netThru", to: "monR.netIn", cable: "ethernet" },
        ],
        explain:
          "Genelec GLM(Genelec Loudspeaker Manager)は、SAM(Smart Active Monitor)と呼ばれるDSP内蔵のGenelecモニターを、部屋の音響特性に合わせて自動補正するためのシステム。GLM Network AdapterはPCとUSBで繋がり、付属の測定用リファレンスマイクをミニジャックでアダプターに挿すことで、部屋で実際にテスト信号を鳴らして反射やクセを測定できる。モニター同士はEthernet(Cat5等の一般的なLANケーブル)でIN→THRUとデイジーチェーン接続することで、1本のケーブルを各モニターに個別に配線しなくても、アダプターから順番に数珠つなぎで全台へ制御信号と測定用の信号を送れる。このEthernet配線はあくまで測定・制御(音量やディレイ、周波数補正の調整)のためのネットワークであり、日常のミックス作業で聴く音楽そのものの信号は、別途インターフェースからのAES/EBUやアナログ入力でモニターへ送られる——「音を聴く経路」と「部屋を測って補正する経路」が別系統になっている点が、通常のスピーカー配線との大きな違い。",
      },
    },
    {
      id: "wireless_antenna_combiner",
      order: 59,
      title: "ワイヤレスマイクのアンテナ分配システムを組む(Shure UA844+)",
      category: "配線問題(プロ環境)",
      hook: "ワイヤレス受信機が増えるたびにアンテナも本数を増やしていたら、ステージ裏がアンテナだらけになる——複数の受信機で2本のアンテナを共有する配線を体験しよう。",
      patch: {
        scenario:
          "ライブハウスで、2式のワイヤレスマイク受信機(いずれもダイバーシティ方式でANT A・ANT Bの2系統アンテナ入力を持つ)を同時に使う。受信機ごとに専用アンテナを2本ずつ、計4本立てるのではなく、アクティブアンテナコンバイナー「Shure UA844+」を使って、指向性アンテナ2本(A系統・B系統)からの電波を、内部で増幅・分配して2式の受信機へ届けよう。",
        equipment: [
          { id: "antA", label: "UHFアンテナ A(指向性)", icon: "AntA", ports: [{ id: "out", label: "OUT(BNC)", type: "rf", dir: "out" }] },
          { id: "antB", label: "UHFアンテナ B(指向性)", icon: "AntB", ports: [{ id: "out", label: "OUT(BNC)", type: "rf", dir: "out" }] },
          {
            id: "combiner",
            label: "Shure UA844+(アクティブアンテナコンバイナー)",
            icon: "UA844+",
            ports: [
              { id: "inA", label: "ANT A IN(BNC)", type: "rf", dir: "in" },
              { id: "inB", label: "ANT B IN(BNC)", type: "rf", dir: "in" },
              { id: "outA1", label: "RF OUT 1 – ANT A", type: "rf", dir: "out" },
              { id: "outB1", label: "RF OUT 1 – ANT B", type: "rf", dir: "out" },
              { id: "outA2", label: "RF OUT 2 – ANT A", type: "rf", dir: "out" },
              { id: "outB2", label: "RF OUT 2 – ANT B", type: "rf", dir: "out" },
            ],
          },
          {
            id: "rx1",
            label: "ワイヤレス受信機1(ダイバーシティ)",
            icon: "RX1",
            ports: [
              { id: "antAIn", label: "ANT A IN", type: "rf", dir: "in" },
              { id: "antBIn", label: "ANT B IN", type: "rf", dir: "in" },
            ],
          },
          {
            id: "rx2",
            label: "ワイヤレス受信機2(ダイバーシティ)",
            icon: "RX2",
            ports: [
              { id: "antAIn", label: "ANT A IN", type: "rf", dir: "in" },
              { id: "antBIn", label: "ANT B IN", type: "rf", dir: "in" },
            ],
          },
        ],
        cablePalette: ["rf", "xlr", "trs", "ethernet"],
        correctConnections: [
          { from: "antA.out", to: "combiner.inA", cable: "rf" },
          { from: "antB.out", to: "combiner.inB", cable: "rf" },
          { from: "combiner.outA1", to: "rx1.antAIn", cable: "rf" },
          { from: "combiner.outB1", to: "rx1.antBIn", cable: "rf" },
          { from: "combiner.outA2", to: "rx2.antAIn", cable: "rf" },
          { from: "combiner.outB2", to: "rx2.antBIn", cable: "rf" },
        ],
        explain:
          "ワイヤレスマイクの受信機は、電波の受信を安定させる「ダイバーシティ方式」のため通常ANT A・ANT Bの2系統のアンテナ入力を持つ。受信機の台数が増えるたびにアンテナも2本ずつ増やしていくと、ステージ裏や卓周りがアンテナだらけになり、しかもアンテナ同士が近接して干渉やRF(電波)の飽和を招きやすい。Shure UA844+のようなアクティブアンテナコンバイナー(分配器)は、A系統・B系統それぞれ1本ずつのアンテナで受けた電波を、内部のRFアンプで増幅してから複数の受信機へ分配することで、必要なアンテナの本数を減らしつつ、電波強度も一定に保てる。「アクティブ」という名称の通り、内部に信号を増幅する回路を持つ点が、単に電波を分けるだけの「パッシブ」な分配器との違い——パッシブ型は分配するたびに電波が減衰するのに対し、アクティブ型は増幅で補うため、より多くの受信機に安定して電波を届けられる。UA844+にはさらに「カスケード」ポートがあり、複数台を数珠つなぎにすることで、4台を超える受信機にも対応を拡張できる。",
      },
    },
    {
      id: "ambisonics_vr_mic",
      order: 60,
      title: "360度収録用Ambisonicsマイクを配線する(Sennheiser AMBEO VR Mic)",
      category: "配線問題",
      hook: "1本のマイクなのに、出てくるケーブルは4本——VR動画向けの全方位音声を録るには、4つのカプセルを『順番通りに』つながなければならない。",
      patch: {
        scenario:
          "360度VR動画の撮影にあわせて、全方位の音を1点で収録できる「Sennheiser AMBEO VR Mic」(正四面体状に4つのカプセルを配置したAmbisonicsマイク)を使う。付属のブレイクアウトケーブルで、4つのカプセルそれぞれの出力(CAPSULE 1〜4、番号・色分け済み)が出てくるので、4ch同時録音できるフィールドレコーダー「Zoom F8n」のIN 1〜4へ、番号を対応させて接続しよう。",
        equipment: [
          {
            id: "mic",
            label: "Sennheiser AMBEO VR Mic(4カプセルAmbisonicsマイク)",
            icon: "AMBEO",
            ports: [
              { id: "cap1", label: "CAPSULE 1 OUT (XLR)", type: "xlr", dir: "out" },
              { id: "cap2", label: "CAPSULE 2 OUT (XLR)", type: "xlr", dir: "out" },
              { id: "cap3", label: "CAPSULE 3 OUT (XLR)", type: "xlr", dir: "out" },
              { id: "cap4", label: "CAPSULE 4 OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "recorder",
            label: "Zoom F8n(8chフィールドレコーダー)",
            icon: "F8n",
            ports: [
              { id: "in1", label: "IN 1 (XLR, +48V)", type: "xlr", dir: "in" },
              { id: "in2", label: "IN 2 (XLR, +48V)", type: "xlr", dir: "in" },
              { id: "in3", label: "IN 3 (XLR, +48V)", type: "xlr", dir: "in" },
              { id: "in4", label: "IN 4 (XLR, +48V)", type: "xlr", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "usb", "optical"],
        correctConnections: [
          { from: "mic.cap1", to: "recorder.in1", cable: "xlr" },
          { from: "mic.cap2", to: "recorder.in2", cable: "xlr" },
          { from: "mic.cap3", to: "recorder.in3", cable: "xlr" },
          { from: "mic.cap4", to: "recorder.in4", cable: "xlr" },
        ],
        explain:
          "AMBEO VR Micは正四面体の頂点に4つのカーディオイド(単一指向性)カプセルを配置し、それぞれが独立したコンデンサーカプセルとしてXLR出力を持つ(すべてコンデンサー型なので4ch分すべてに+48Vファンタム電源が必要)。この4chの生の状態を『A-format』と呼び、そのままでは全方位の音声として再生できない——後で専用のA-B変換プラグインを使い、上下・前後・左右の指向性成分に変換する『B-format』というAmbisonics規格の形式にエンコードして、はじめてVRプレイヤー等で360度の音として再生できるようになる。この変換処理は、4つのカプセルの位置関係(1〜4番がどの向きに配置されているか)を前提に計算されるため、録音時にケーブルの番号とレコーダーの入力chの番号を絶対にズラしてはいけない——1番と2番を挿し間違えるだけで、変換後の定位(音の方向)がすべて狂ってしまう。また4ch分の音量(ゲイン)は、変換の精度を保つためレコーダー側で『チャンネルリンク』機能を使い、4ch同時に同じ量だけ調整するのが基本。",
      },
    },
    {
      id: "hdmi_audio_deembed",
      order: 61,
      title: "HDMIから音声だけを抜き出して配信ミキサーに送る(Extron HAE 100 4K Plus)",
      category: "配線問題",
      hook: "最近のゲーム機やPCは、音声も映像もHDMI1本にまとめて出してくる——配信用ミキサーに音だけを渡すには、映像信号から音声を『抜き出す』機材が必要になる。",
      patch: {
        scenario:
          "配信用のPCは、ヘッドホン端子等の別出力を持たず、映像と音声をまとめてHDMI1本で出力する設定にしている。このHDMI出力を、HDMIオーディオデエンベデダー(HDMI信号から音声だけを分離して取り出す機材)「Extron HAE 100 4K Plus」のHDMI INへ入れ、映像はHDMI THRU(スルー)から配信用モニターへそのまま送りつつ、分離したアナログステレオ音声を、配信用ミキサー「Yamaha AG06MK2」のSTEREO IN(RCA、L/R)へ送って、マイクの声とミックスできるようにしよう。",
        equipment: [
          { id: "pc", label: "配信用PC(HDMI出力のみ)", icon: "PC", ports: [{ id: "hdmiOut", label: "HDMI OUT", type: "hdmi", dir: "out" }] },
          {
            id: "extron",
            label: "Extron HAE 100 4K Plus(HDMIオーディオデエンベデダー)",
            icon: "HAE100",
            ports: [
              { id: "hdmiIn", label: "HDMI IN", type: "hdmi", dir: "in" },
              { id: "hdmiThru", label: "HDMI THRU OUT", type: "hdmi", dir: "out" },
              { id: "analogOutL", label: "ANALOG AUDIO OUT L (RCA)", type: "rca", dir: "out" },
              { id: "analogOutR", label: "ANALOG AUDIO OUT R (RCA)", type: "rca", dir: "out" },
              { id: "spdifOut", label: "S/PDIF OUT(同軸/RCA)", type: "rca", dir: "out" },
            ],
          },
          { id: "display", label: "配信用モニター", icon: "Mon", ports: [{ id: "hdmiIn", label: "HDMI IN", type: "hdmi", dir: "in" }] },
          {
            id: "mixer",
            label: "Yamaha AG06MK2",
            icon: "AG06MK2",
            ports: [
              { id: "stereoInL", label: "STEREO IN L (RCA)", type: "rca", dir: "in" },
              { id: "stereoInR", label: "STEREO IN R (RCA)", type: "rca", dir: "in" },
            ],
          },
        ],
        cablePalette: ["hdmi", "rca", "trs", "xlr", "optical"],
        correctConnections: [
          { from: "pc.hdmiOut", to: "extron.hdmiIn", cable: "hdmi" },
          { from: "extron.hdmiThru", to: "display.hdmiIn", cable: "hdmi" },
          { from: "extron.analogOutL", to: "mixer.stereoInL", cable: "rca" },
          { from: "extron.analogOutR", to: "mixer.stereoInR", cable: "rca" },
        ],
        explain:
          "HDMIケーブルは映像と音声の両方をまとめて1本で伝送する規格で、最近のゲーム機・ノートPC・キャプチャー機器は、単体のヘッドホン出力やライン出力を持たず『音声も映像もHDMIから出す』設計になっていることが多い。ところが配信用ミキサーの多くはHDMI入力を持たず、XLRやTRS、RCAといった従来のオーディオ入力しか受け付けないため、そのままでは接続できない。Extron HAE 100 4K Plusのような『HDMIオーディオデエンベデダー(de-embedder=分離器)』は、HDMI信号を一度受け取り、映像はHDMI THRU出力からそのまま次の機器(配信用モニターやキャプチャーカード)へ送りつつ、埋め込まれていた音声だけを分離してアナログ(RCA/TRS)またはS/PDIF(デジタル同軸)として別の出力から取り出せる。今回はYamaha AG06MK2のSTEREO INがRCA仕様のため、アナログ出力を選んで接続するが、もし接続先がAES/EBUやS/PDIF入力を持つデジタルミキサーであれば、S/PDIF OUTを使う場面もある——『デエンベデダー(分離)』の反対にあたる『エンベデダー(音声を映像に埋め込む機材)』も別に存在する点もあわせて覚えておくと理解が深まる。",
      },
    },
    {
      id: "usb_condenser_mic_direct",
      order: 62,
      title: "USBコンデンサーマイクをPCに直結する(Audio-Technica AT2020USB+)",
      category: "配線問題",
      hook: "最初の単元で組んだ『マイク→インターフェース→PC』の3点構成が、実は1本のケーブルで済んでしまう機種もある——USBマイクならではのシンプルな配線を確認しよう。",
      patch: {
        scenario:
          "手軽に配信・宅録を始めたい人向けに、USB接続のコンデンサーマイク「Audio-Technica AT2020USB+」を使う。このマイクは内部にA/Dコンバーター(音をデジタル信号に変換する回路)とUSB電源受電の仕組みを内蔵しており、外部のオーディオインターフェースなしでMacBook AirのUSBポートへ直結できる。さらにマイク本体側面には、遅延のない『ゼロレイテンシーモニタリング』用のヘッドホン端子(3.5mm)があるので、そこにモニターヘッドホンを挿して自分の声を確認できるようにしよう。",
        equipment: [
          {
            id: "mic",
            label: "Audio-Technica AT2020USB+(USBコンデンサーマイク)",
            icon: "AT2020USB+",
            ports: [
              { id: "usbOut", label: "USB OUT", type: "usb", dir: "out" },
              { id: "hpOut", label: "HEADPHONE OUT (3.5mm TRS)", type: "trs", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbIn", label: "USB-C", type: "usb", dir: "in" }] },
          { id: "headphones", label: "モニターヘッドホン", icon: "HP", ports: [{ id: "in", label: "IN (3.5mm TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["usb", "trs", "xlr", "ts"],
        correctConnections: [
          { from: "mic.usbOut", to: "pc.usbIn", cable: "usb" },
          { from: "mic.hpOut", to: "headphones.in", cable: "trs" },
        ],
        explain:
          "最初の単元で扱ったRode NT1のようなXLRコンデンサーマイクは、ファンタム電源(48V)を送りA/D変換も行ってくれる別体のオーディオインターフェースが必須だったが、AT2020USB+のようなUSBマイクは、そのインターフェースの役割(電源供給・プリアンプ・A/D変換)をマイク本体に内蔵しているため、USBケーブル1本でPCと直結できる。手軽さと引き換えに、複数本のマイクを同時に使う多チャンネル録音や、外部マイクプリで音の質感を変えるといった拡張性には乏しく、あくまで1人でのシンプルな宅録・配信向けの構成といえる。マイク本体のヘッドホン端子は、PCやDAWを経由せずマイクが直接拾った音をそのまま返しているため、DAWのバッファー処理による遅延(レイテンシー)を感じずに自分の声をモニターできる『ゼロレイテンシーモニタリング』という仕組みで、配信中の声の遅れによる違和感を防げる。",
      },
    },
    {
      id: "ribbon_mic_cloudlifter",
      order: 63,
      title: "リボンマイクをインラインプリアンプ経由で低ノイズ接続する(Royer R-121 + Cloudlifter CL-1)",
      category: "配線問題",
      hook: "出力が小さすぎて、プリアンプのゲインを目一杯上げてもまだノイズっぽい——リボンマイクにありがちな悩みを、マイクとプリの『間』に挟む機材で解決しよう。",
      patch: {
        scenario:
          "ギターアンプの収録に、出力レベルがとても低いパッシブ型のリボンマイク「Royer R-121」を使う。オーディオインターフェース「Focusrite Scarlett 18i20」のマイクプリアンプだけではゲインが足りずノイズが目立ってしまうため、その間に『インラインマイクプリアンプ(マイクとプリの間に挟んで信号を底上げする機材)』の「Cloudlifter CL-1」を挟んで接続しよう。",
        equipment: [
          { id: "mic", label: "Royer R-121(リボンマイク)", icon: "R-121", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "cloudlifter",
            label: "Cloudlifter CL-1(インラインマイクプリアンプ)",
            icon: "CL-1",
            ports: [
              { id: "in", label: "MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "out", label: "MIC OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20",
            icon: "18i20",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR, +48V)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "ts"],
        correctConnections: [
          { from: "mic.out", to: "cloudlifter.in", cable: "xlr" },
          { from: "cloudlifter.out", to: "interface.in1", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "Royer R-121のようなパッシブ型リボンマイクは、コンデンサーマイクよりずっと出力レベルが低いうえ、電源を必要としない代わりに信号を増幅する仕組みも内蔵していないため、インターフェース側のマイクプリアンプのゲインを目一杯上げてもまだ音が小さく、結果的にノイズだけが目立ってしまいがちになる。かといって、コンデンサーマイク用の+48Vファンタム電源をそのままリボン素子に流してしまうと、断線や損傷につながる危険がある(古いリボンマイクほどこのリスクが高い)。Cloudlifter CL-1のような『インラインマイクプリアンプ(マイクアクティベーター)』は、マイクとインターフェースの間に挟むことで、インターフェース側から送られてくる+48Vファンタム電源を受け取って内部の増幅回路の電源として使いながら、そのファンタム電源自体はマイク側には流さずブロックする——電源はもらうがマイクは守る、という仕組みで、約20〜25dBのクリーンなゲインを追加してからインターフェースへ送り出せる。結果としてインターフェース側のゲインつまみを上げすぎずに済み、ノイズの少ないリボンマイクの音を録れるようになる。",
      },
    },
    {
      id: "bass_di_amp_parallel",
      order: 64,
      title: "ベースをDI+アンプマイクでパラレル録音する(Ampeg SVT-7PRO)",
      category: "配線問題",
      hook: "ベースアンプの背面には、スピーカーを鳴らす出口とは別に『録音用の出口』がもう1つある——DIアウトとマイク、2つの音を同時に録っておく理由を配線しながら理解しよう。",
      patch: {
        scenario:
          "ベーシストが「Fender Jazz Bass」を、真空管プリアンプ搭載のベースアンプヘッド「Ampeg SVT-7PRO」に接続してレコーディングする。SVT-7PROのSPEAKER OUTからは「Ampeg SVT-810E」キャビネットを鳴らし、その正面に「Sennheiser MD 421」を立ててアンプの空気感ごと録る。同時に、SVT-7PRO背面のBALANCED DI OUT(プリアンプ部の信号を直接取り出せるXLR出力)から、キャビネットを通さないクリーンな音も別トラックとして録っておく。どちらも「Focusrite Scarlett 18i20」の別々のXLR入力へ送り、USBでMacBook Airに録音しよう。",
        equipment: [
          { id: "bass", label: "Fender Jazz Bass", icon: "JBass", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "bassAmp",
            label: "Ampeg SVT-7PRO(ベースアンプヘッド)",
            icon: "SVT7PRO",
            ports: [
              { id: "input", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "speakerOut", label: "SPEAKER OUT", type: "speaker", dir: "out" },
              { id: "diOut", label: "BALANCED DI OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "cabinet", label: "Ampeg SVT-810E(キャビネット)", icon: "SVT810E", ports: [{ id: "in", label: "IN (Speaker)", type: "speaker", dir: "in" }] },
          { id: "mic", label: "Sennheiser MD 421(キャビネット用マイク)", icon: "MD421", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20",
            icon: "18i20",
            ports: [
              { id: "in1", label: "MIC IN 1 (XLR, DI用)", type: "xlr", dir: "in" },
              { id: "in2", label: "MIC IN 2 (XLR, アンプマイク用)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Air", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["ts", "speaker", "xlr", "usb", "trs"],
        correctConnections: [
          { from: "bass.out", to: "bassAmp.input", cable: "ts" },
          { from: "bassAmp.speakerOut", to: "cabinet.in", cable: "speaker" },
          { from: "bassAmp.diOut", to: "interface.in1", cable: "xlr" },
          { from: "mic.out", to: "interface.in2", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "SVT-7PROのようなベースアンプヘッドは、ベースを鳴らすためのスピーカー出力(SPEAKER OUT、ここには専用のスピーカーケーブルを使う)とは別に、プリアンプ通過後の信号をXLRのライン信号として直接取り出せる『BALANCED DI OUT』を背面に備えていることが多い。DIアウトは(機種によってはEQを通す前/後を切り替えられ)キャビネットやマイキングの影響を受けない輪郭のはっきりした音が録れる一方、MD 421でキャビネットを実際にマイキングした音は、キャビネットとアンプ本体が持つ低域の鳴り・空気感まで含めて録れる。この2つを別トラックとして同時に(パラレルに)録っておけば、ミックスの段階で両者を混ぜる比率を後から自由に決められる——ライブでのDI音と、リハーサルスタジオでのアンプマイク録りの違いを知っておくと、機材を選ぶときの判断材料になる。",
      },
    },
    {
      id: "keyboard_rig_submixer",
      order: 65,
      title: "複数シンセをキーボードサブミキサーでまとめてFOHへ送る",
      category: "配線問題",
      hook: "ステージ上に鍵盤楽器が2台あっても、FOH(客席側の音響卓)へ送るのはステレオ1系統だけでいい——キーボーディスト自身が自分の音のバランスを作ってから送り出す配線を体験しよう。",
      patch: {
        scenario:
          "キーボーディストがステージに「Nord Stage 4」(ステージピアノ)と「Roland Jupiter-Xm」(シンセサイザー)の2台を並べている。それぞれのステレオ出力を、まず自分の足元に置いた小型ミキサー「Mackie ProFX10v3」に立ち上げて、2台の音量バランスを自分でコントロールできるようにする。ProFX10v3のMAIN OUT(ステレオ)から、FOHのデジタルミキサー「Yamaha CL5」へ、1系統のステレオ信号としてまとめて送ろう。",
        equipment: [
          {
            id: "nord",
            label: "Nord Stage 4",
            icon: "Nord4",
            ports: [
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "jupiter",
            label: "Roland Jupiter-Xm",
            icon: "JupXm",
            ports: [
              { id: "outL", label: "OUTPUT L/MONO (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "subMixer",
            label: "Mackie ProFX10v3(キーボードサブミキサー)",
            icon: "ProFX10",
            ports: [
              { id: "chAL", label: "STEREO CH A IN L (TRS)", type: "trs", dir: "in" },
              { id: "chAR", label: "STEREO CH A IN R (TRS)", type: "trs", dir: "in" },
              { id: "chBL", label: "STEREO CH B IN L (TRS)", type: "trs", dir: "in" },
              { id: "chBR", label: "STEREO CH B IN R (TRS)", type: "trs", dir: "in" },
              { id: "mainOutL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainOutR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "fohMixer",
            label: "Yamaha CL5(FOHデジタルミキサー)",
            icon: "CL5",
            ports: [
              { id: "inL", label: "CH IN L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "CH IN R (XLR)", type: "xlr", dir: "in" },
            ],
          },
        ],
        cablePalette: ["trs", "xlr", "speaker", "usb"],
        correctConnections: [
          { from: "nord.outL", to: "subMixer.chAL", cable: "trs" },
          { from: "nord.outR", to: "subMixer.chAR", cable: "trs" },
          { from: "jupiter.outL", to: "subMixer.chBL", cable: "trs" },
          { from: "jupiter.outR", to: "subMixer.chBR", cable: "trs" },
          { from: "subMixer.mainOutL", to: "fohMixer.inL", cable: "xlr" },
          { from: "subMixer.mainOutR", to: "fohMixer.inR", cable: "xlr" },
        ],
        explain:
          "鍵盤楽器を複数台使うキーボーディストは、1台ずつをそれぞれFOHまでケーブルで引くと配線が増えるだけでなく、曲中に自分でシンセ間の音量バランスを変えたいときにFOHのエンジニアへ逐一頼む必要が出てくる。そこでProFX10v3のような『キーボードサブミキサー』を足元に置き、まず自分の管理下で複数台の音をまとめてから、FOHへはステレオ1系統だけを送り出すのがライブの定番構成——スネークケーブルやFOH側のチャンネル数を節約できるうえ、鍵盤の音色ごとの音量バランスを自分の感覚でリアルタイムに調整できる。以前の単元で扱った『マイクスプリッター』が1つの音を2ヶ所に分岐する(1対2)配線だったのに対し、こちらは複数の音を1つにまとめる(多対1)配線である点が対照的。",
      },
    },
    {
      id: "stage_wedge_monitor_aux",
      order: 66,
      title: "ステージ返しモニター(ウェッジ)をAUXセンドで配線する",
      category: "配線問題",
      hook: "客席に聴こえるバランスと、演奏者が聴きたいバランスは別物——FOHのMAIN OUTとは別の出口『AUXセンド』から、自分専用の返しスピーカーを鳴らす配線を体験しよう。",
      patch: {
        scenario:
          "ライブハウスのステージで、ボーカリストが自分の足元に置いた返しスピーカー(ウェッジ、床に置いて斜め上向きに音を飛ばすステージモニター)「Yamaha S115V」で、自分の声を中心にしたモニターミックスを聴きたい。ミキサー「Yamaha MG12XU」のAUX SEND 2(客席向けのMAIN OUTとは独立した、モニター用の送り出し口)から、モニター専用のパワーアンプ「QSC GX5」の入力へ送り、GX5で増幅した信号をS115Vへ送ろう。",
        equipment: [
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "mainOutL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainOutR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
              { id: "auxSend2", label: "AUX SEND 2 (TRS, モニター用)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "monAmp",
            label: "QSC GX5(モニター用パワーアンプ)",
            icon: "GX5",
            ports: [
              { id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" },
              { id: "out", label: "OUTPUT (Speakon)", type: "speaker", dir: "out" },
            ],
          },
          { id: "wedge", label: "Yamaha S115V(ステージ返しウェッジ, パッシブ)", icon: "S115V", ports: [{ id: "in", label: "IN (Speakon)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "speaker", "xlr"],
        correctConnections: [
          { from: "mixer.auxSend2", to: "monAmp.in", cable: "trs" },
          { from: "monAmp.out", to: "wedge.in", cable: "speaker" },
        ],
        explain:
          "MAIN OUTから作られるのは客席(FOH)向けの完成されたバランスで、そこには演奏者自身の声や楽器が聴きやすい音量で入っているとは限らない。AUX SENDは、各チャンネルから『どれだけの量をこの送り先に分けるか』を個別に設定できる、MAIN OUTとは完全に独立したもう1つのミックス系統で、ここにモニター用のパワーアンプとウェッジスピーカーをつなぐことで、演奏者は客席用とは別の、自分が聴きたい音量バランスを足元から得られる。ウェッジ自体はYamaha HS5のようなパワードモニターと違ってアンプを内蔵しないパッシブ型がほとんどのため、以前の単元で扱ったライブPAの本線と同じく、専用のパワーアンプ(ここではQSC GX5)で増幅してからスピーカーケーブルで送る必要がある。バンドメンバーが増えるほどAUX SENDの系統数も増やし、メンバーごとに違うモニターバランスを作るのがライブ現場の基本。",
      },
    },
    {
      id: "eurorack_audio_interface_io",
      order: 67,
      title: "Eurorackモジュラーとオーディオインターフェースでオーディオを往復させる(Expert Sleepers ES-9)",
      category: "配線問題",
      hook: "以前の単元ではCV/Gateだけをパッチしたが、今回はDAWの『オーディオそのもの』をモジュラーへ送り込み、加工した音をまた録音し直す——モジュラーをDAWの中の1つのエフェクターのように使う配線。",
      patch: {
        scenario:
          "Eurorackモジュラーシンセを、DAWのオーディオエフェクトのように使いたい。USBオーディオインターフェース「Expert Sleepers ES-9」(Eurorackモジュール型で、PCとはUSBで、モジュラー側とは3.5mmケーブルで信号をやり取りする)を使い、DAWで再生したドラムループの音を、ES-9のOUTPUT 1から、フィルターモジュール「Doepfer A-124(ヴィンテージフィルター)」のAUDIO INへ送る。A-124で加工された音は、ES-9のINPUT 1へ戻し、DAW側で新しいトラックとして録音しよう。ES-9自体は、Macとの音声のやり取りをUSBケーブルで行う。",
        equipment: [
          {
            id: "es9",
            label: "Expert Sleepers ES-9(Eurorack用USBオーディオI/F)",
            icon: "ES-9",
            ports: [
              { id: "usb", label: "USB", type: "usb", dir: "out" },
              { id: "out1", label: "OUTPUT 1 (3.5mm)", type: "cv", dir: "out" },
              { id: "in1", label: "INPUT 1 (3.5mm)", type: "cv", dir: "in" },
            ],
          },
          {
            id: "filter",
            label: "Doepfer A-124(Eurorackフィルターモジュール)",
            icon: "A-124",
            ports: [
              { id: "audioIn", label: "AUDIO IN (3.5mm)", type: "cv", dir: "in" },
              { id: "audioOut", label: "AUDIO OUT (3.5mm)", type: "cv", dir: "out" },
            ],
          },
          { id: "mac", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["cv", "usb", "trs", "midi"],
        correctConnections: [
          { from: "es9.usb", to: "mac.usbin", cable: "usb" },
          { from: "es9.out1", to: "filter.audioIn", cable: "cv" },
          { from: "filter.audioOut", to: "es9.in1", cable: "cv" },
        ],
        explain:
          "以前の単元で扱ったEurorackのCV/Gateパッチは『演奏データを電圧に変換してモジュラーを鳴らす』使い方だったが、ES-9のような多チャンネルのオーディオインターフェースをモジュラーに組み込むと、DAWで再生した既存のオーディオ(ドラムループやボーカルなど)を丸ごとモジュラーへ送り込み、Eurorackならではのアナログフィルターや歪み、ディレイなどを通してから、また別トラックとして録音し直すという使い方ができる——モジュラーシンセを『巨大な1つのアウトボード・エフェクター』としてDAWに組み込むイメージ。ES-9の3.5mm端子は物理的にはCV/Gateと同じ規格の端子だが、ここではオーディオ信号(可聴周波数の音声)をやり取りしている点が、以前の単元のCV/Gate配線との違い。ES-9はADAT等のデジタル入出力を持たない機種のため、PCとの接続はUSBのみで行う。",
      },
    },
    {
      id: "vocal_harmonizer_voicelive",
      order: 68,
      title: "ボーカルハーモナイザーをライブのボーカルチェーンに挿す(TC-Helicon VoiceLive 3 Extreme)",
      category: "配線問題",
      hook: "ギターのコードを弾くだけで、ボーカルに自動でハモりが付く——その仕組みは『マイクの音』と『ギターの音』を同じ1台のユニットに両方入れることで成り立っている。",
      patch: {
        scenario:
          "弾き語りのライブで、ボーカルハーモナイザー「TC-Helicon VoiceLive 3 Extreme」を使って、歌に自動でハーモニーを付けたい。ボーカルマイク「Shure SM58」を、VoiceLive 3のMIC IN(XLR/TRSコンボ端子)へ接続する。ハーモニーのキーとコードを自動検出させるため、エレアコ「Taylor 214ce」の出力を、VoiceLive 3のGUITAR IN(TS)へも接続する。VoiceLive 3が生成した『地声+ハーモニー』のステレオMAIN OUT(XLR)を、ミキサー「Yamaha MG12XU」のチャンネル入力(L/R)へ送ろう。",
        equipment: [
          { id: "vocalMic", label: "Shure SM58", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "guitar", label: "Taylor 214ce(エレアコ)", icon: "T214ce", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "harmonizer",
            label: "TC-Helicon VoiceLive 3 Extreme",
            icon: "VL3X",
            ports: [
              { id: "micIn", label: "MIC IN (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "guitarIn", label: "GUITAR IN (TS)", type: "ts", dir: "in" },
              { id: "mainOutL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainOutR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "inL", label: "CH IN L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "CH IN R (XLR)", type: "xlr", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "ts", "trs", "midi"],
        correctConnections: [
          { from: "vocalMic.out", to: "harmonizer.micIn", cable: "xlr" },
          { from: "guitar.out", to: "harmonizer.guitarIn", cable: "ts" },
          { from: "harmonizer.mainOutL", to: "mixer.inL", cable: "xlr" },
          { from: "harmonizer.mainOutR", to: "mixer.inR", cable: "xlr" },
        ],
        explain:
          "VoiceLive 3 Extremeのようなボーカルハーモナイザーは、マイクから入った『声』に対してハーモニーを生成するが、そのハーモニーが正しい音程(コード)になるためには『今どんなコードが鳴っているか』という情報が別途必要になる。そこでGUITAR INにエレアコの出力を接続しておくと、弾いているコードをリアルタイムに解析し、そのコードに沿った自然なハーモニーを声に足してくれる——マイクの音だけでは、ハーモナイザーは『今どのキー・コードで歌えばよいか』を知る手段がない。生成された地声+ハーモニーはステレオのMAIN OUTから出力され、通常のボーカルマイクと同じようにミキサーのチャンネルへXLRで立ち上げる。MIDI INも装備しており、外部のキーボードやMIDIギターからコード情報を送ってハーモニーを制御することもできるが、今回のシナリオでは使わない。",
      },
    },
    {
      id: "silent_disco_fm_transmitter",
      order: 69,
      title: "サイレントディスコ用のFMトランスミッターを配線する",
      category: "配線問題",
      hook: "スピーカーを使わないのに、確かに『鳴っている』——音を電波に乗せて飛ばし、参加者のワイヤレスヘッドホンだけに届けるイベント音響の配線を体験しよう。",
      patch: {
        scenario:
          "住宅街の公園で、深夜のスピーカー使用が制限される『サイレントディスコ』イベントを開く。参加者は音の出ないワイヤレスヘッドホンを着け、選んだチャンネルの電波を受信して音楽を聴く。DJミキサー「Pioneer DJM-A9」のMASTER OUT(XLR)を、チャンネル1用のFMトランスミッター「W Audio SDPROTX」のINPUTへ接続し、赤チャンネルとして電波で飛ばす。同時に、MCがしゃべる実況用のノートPC(3.5mmヘッドホン出力)を、チャンネル2用の2台目のSDPROTXのINPUTへ接続し、青チャンネルとして別電波で飛ばそう。ヘッドホン自体は電波を受信するだけなので、ケーブルでは繋がない。",
        equipment: [
          { id: "djMixer", label: "Pioneer DJM-A9(DJミキサー)", icon: "DJM-A9", ports: [{ id: "masterOut", label: "MASTER OUT (XLR)", type: "xlr", dir: "out" }] },
          { id: "laptop", label: "ノートPC(MC実況用)", icon: "PC", ports: [{ id: "hpOut", label: "ヘッドホン出力 (3.5mm)", type: "trs", dir: "out" }] },
          { id: "tx1", label: "W Audio SDPROTX(赤チャンネル用トランスミッター)", icon: "TX-R", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "tx2", label: "W Audio SDPROTX(青チャンネル用トランスミッター)", icon: "TX-B", ports: [{ id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "rf"],
        correctConnections: [
          { from: "djMixer.masterOut", to: "tx1.in", cable: "xlr" },
          { from: "laptop.hpOut", to: "tx2.in", cable: "trs" },
        ],
        explain:
          "サイレントディスコの仕組みはシンプルで、音源(DJミキサーやPCなど)をFMトランスミッターに有線でつなぎ、トランスミッターがその音声をチャンネルごとに割り当てた電波(UHF帯など)に乗せて送信、参加者のワイヤレスヘッドホンがその電波を直接受信して鳴らす、というもの。この配線問題で有線ケーブルが必要なのは『音源→トランスミッターの入力』までで、そこから先(トランスミッター→ヘッドホン)は電波を使った無線伝送のため、ケーブルは登場しない——これは以前の単元で扱ったワイヤレスマイクシステム(マイク→送信機は無線、受信機→ミキサーは有線)とちょうど逆向きの『有線区間と無線区間』の組み合わせになっている。トランスミッターを2台・2チャンネル用意しているのは、DJの音楽とMCの実況のように、参加者が『赤(音楽)』『青(実況やトークイベント)』を自分のヘッドホンで選んで聴き分けられるようにするため。",
      },
    },
    {
      id: "analog_tape_transfer_sync",
      order: 70,
      title: "アナログマルチトラックテープレコーダーの音源をDAWに取り込む(Tascam 388)",
      category: "配線問題",
      hook: "実家に眠っていた8trのオープンリールテープ。ボタンひとつで配信できる時代の前に録られたこの音を、今のDAWに取り込んで残すための配線を体験しよう。",
      patch: {
        scenario:
          "1980年代に録音された8トラックのオープンリールテープを、ミキサー一体型のアナログマルチトラックレコーダー「Tascam 388」で再生し、DAWにデジタル化(アーカイブ)して残したい。388本体のミックスバスから出る、ステレオでまとめられたバランスXLR出力を、オーディオインターフェース「RME Babyface Pro FS」のライン入力(L/R)へ接続し、USBでMacBook Proに取り込もう。",
        equipment: [
          {
            id: "tape388",
            label: "Tascam 388(アナログマルチトラックレコーダー)",
            icon: "T388",
            ports: [
              { id: "mixOutL", label: "STEREO BUSS OUT L (XLR, +4dBu)", type: "xlr", dir: "out" },
              { id: "mixOutR", label: "STEREO BUSS OUT R (XLR, +4dBu)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "RME Babyface Pro FS",
            icon: "BabyfacePro",
            ports: [
              { id: "lineInL", label: "LINE IN L (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "lineInR", label: "LINE IN R (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "usb", "rca"],
        correctConnections: [
          { from: "tape388.mixOutL", to: "interface.lineInL", cable: "xlr" },
          { from: "tape388.mixOutR", to: "interface.lineInR", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "Tascam 388は8トラックのテープレコーダーと8chミキサーが一体になったヴィンテージ機材で、各トラックを再生しながら内部のミキサーでバランスを取り、ステレオのミックスバスから+4dBu(プロ機材標準のライン信号レベル)のバランスXLR出力で音を送り出せる。この出力をオーディオインターフェースのライン入力にそのまま接続すれば、テープの音をアナログのライン信号としてPCに取り込み、DAW上でデジタルファイル化(アーカイブ)できる——テープが劣化する前に、あるいは再生できる個体が減っていく前に、こうした『テープ→ライン入力→DAW』というシンプルな配線でデジタル化しておくことは、古い音源を残す実務でよく行われる。今回はミックスバスから1本のステレオでまとめて取り込んだが、各トラックを個別にデジタル化したい場合は、388の各chのダイレクトアウトからマルチトラックで取り込む方法もある。",
      },
    },
    {
      id: "outboard_micpre_line_in",
      order: 71,
      title: "アウトボード・マイクプリをオーディオI/Fのライン入力につなぐ(Focusrite ISA One + Apollo Twin X)",
      category: "配線問題",
      hook: "I/Fに内蔵されたマイクプリより『音に色をつけたい』とき、外付けのマイクプリを1台はさむ。ただし、つなぐ先を間違えると音が二重に増幅されて歪んでしまう——マイクの信号を、どこで増幅するかを意識して配線しよう。",
      patch: {
        scenario:
          "ボーカル録りで、外付けのマイクプリアンプ「Focusrite ISA One」を使いたい。コンデンサーマイク「Neumann TLM 103」を、ISA OneのMIC INPUT(XLR)へ接続する。ISA Oneでマイクの微弱な信号をライン信号レベルまで増幅したあとは、リア側のMAIN OUTPUT(XLR)から、オーディオインターフェース「Universal Audio Apollo Twin X USB」のLINE入力(XLR/TRSコンボ端子のうちのXLR側)へ接続しよう。Apollo Twin XとMacBook Proは、USBケーブルで接続する。",
        equipment: [
          { id: "mic", label: "Neumann TLM 103", icon: "TLM103", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "micpre",
            label: "Focusrite ISA One(マイクプリアンプ)",
            icon: "ISA One",
            ports: [
              { id: "micIn", label: "MIC INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "mainOut", label: "MAIN OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Universal Audio Apollo Twin X USB",
            icon: "ApolloTwinX",
            ports: [
              { id: "lineIn", label: "INPUT 1 (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb"],
        correctConnections: [
          { from: "mic.out", to: "micpre.micIn", cable: "xlr" },
          { from: "micpre.mainOut", to: "interface.lineIn", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "マイクの出力はとても小さい信号(マイクレベル)なので、必ずマイクプリアンプで増幅して、ライン信号レベルまで持ち上げる必要がある。ISA OneのようなアウトボードのマイクプリをXLRのMIC INPUTから使う場合、増幅はISA One側で済んでいるため、その出力をオーディオインターフェースにつなぐときは『ライン入力』として受けるのが基本になる。ここで注意したいのは、I/F側の入力を『マイクレベルのままの入力』として使い、しかもゲインを大きく上げてしまうと、すでに増幅された信号をもう一度増幅することになり、歪みやクリップの原因になるということ。実際には、I/Fの入力ゲインを最小近くに絞り、ライン入力(または+48Vファンタム電源をオフにした状態のライン受け)として使う。なお、ISA Oneはマイク入力のほかに、ギターやベース向けのDI入力も装備しているが、今回のシナリオではマイクを使うので、MIC INPUTを使う。",
      },
    },
    {
      id: "kemper_stage_foh_monitor",
      order: 72,
      title: "Kemper Profiler StageをFOHとステージ足元のモニターに分けて出力する",
      category: "配線問題",
      hook: "会場のスピーカーに送る『客席向けの音』と、自分の足元で聴く『演奏者向けの音』は、同じ1台のアンプシミュレーターから、別々の出力端子で取り出せる。どの端子をどこへつなぐか、配線で確かめよう。",
      patch: {
        scenario:
          "ライブハウスで、ギター用のプロファイリングアンプ「Kemper Profiler Stage」(アンプの音をデジタルで再現する足元型の機材)を使う。エレキギター「Gibson Les Paul Standard」を、Kemper Profiler StageのINPUT(TS)へ接続する。客席向けの音は、MAIN OUTPUT(XLR)から、ライブハウスのPA卓「Allen & Heath SQ-5」のマイク入力(XLR)へ送る。演奏者自身が足元で聴くための音は、MONITOR OUTPUT(TS)から、パワードモニター「Yamaha DBR10」のLINE入力(TRSコンボ)へ、それぞれ別の系統で送ろう。",
        equipment: [
          { id: "guitar", label: "Gibson Les Paul Standard", icon: "LesPaul", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "kemper",
            label: "Kemper Profiler Stage",
            icon: "KemperStage",
            ports: [
              { id: "in", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "mainOut", label: "MAIN OUTPUT (XLR)", type: "xlr", dir: "out" },
              { id: "monitorOut", label: "MONITOR OUTPUT (TS)", type: "ts", dir: "out" },
            ],
          },
          { id: "mixer", label: "Allen & Heath SQ-5(FOH卓)", icon: "SQ-5", ports: [{ id: "in1", label: "CH1 IN (XLR)", type: "xlr", dir: "in" }] },
          { id: "wedge", label: "Yamaha DBR10(足元用パワードモニター)", icon: "DBR10", ports: [{ id: "in", label: "LINE IN (TRSコンボ)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "speaker"],
        correctConnections: [
          { from: "guitar.out", to: "kemper.in", cable: "ts" },
          { from: "kemper.mainOut", to: "mixer.in1", cable: "xlr" },
          { from: "kemper.monitorOut", to: "wedge.in", cable: "ts" },
        ],
        explain:
          "Kemper Profiler Stageのようなアンプシミュレーターは、ギターアンプの『音を作る部分』と『それを空気に鳴らすスピーカー』を分けて考えられるのが特徴で、内部で作られた音を、用途の違う複数の端子から同時に取り出せる。MAIN OUTPUTは、PA卓へ送る客席向けの音で、ミキサーのマイク入力にバランスのXLRでつなぐのが基本。一方MONITOR OUTPUTは、自分の足元で聴くための独立した出力で、音量を客席側とは別に調整できるため、客席の音量を変えずに自分の返しの大きさだけを変えられる。この足元用の出力をパワードモニター(アンプ内蔵のスピーカー)につなげば、以前の単元で扱ったQSC GX5のような専用パワーアンプも不要。MONITOR OUTPUTはアンバランスのTS出力とされているため、つなぐケーブルの長さは短めにまとめておくとノイズを拾いにくい。",
      },
    },
    {
      id: "powered_speaker_daisychain",
      order: 73,
      title: "パワードスピーカー2台をMIX OUTで連結する(Yamaha DBR12 ×2)",
      category: "配線問題",
      hook: "ミキサーから左右のスピーカーへ、それぞれ別のケーブルを延々と引き回さなくても、1台目のスピーカーの『出力端子』から2台目へ音を渡せる。パワードスピーカーならではの、すっきりした配線を体験しよう。",
      patch: {
        scenario:
          "小さなライブ会場で、パワードスピーカー「Yamaha DBR12」を2台使い、ステレオではなく同じ音を両側から鳴らす(モノラル)構成にしたい。ミキサー「Yamaha MG12XU」のMAIN OUT(XLR)から、1台目のDBR12のCH1入力(XLR/TRSコンボ)へ接続する。1台目のDBR12の背面にあるMIX OUT(XLR)から、2台目のDBR12のCH1入力(XLR/TRSコンボ)へ接続しよう。DBR12はアンプを内蔵しているため、スピーカーケーブルは使わず、電源ケーブルは今回は配線対象に含めない。",
        equipment: [
          { id: "mixer", label: "Yamaha MG12XU", icon: "MG12XU", ports: [{ id: "mainOut", label: "MAIN OUT (XLR)", type: "xlr", dir: "out" }] },
          {
            id: "spk1",
            label: "Yamaha DBR12(1台目)",
            icon: "DBR12-1",
            ports: [
              { id: "in", label: "CH1 IN (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "mixOut", label: "MIX OUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "spk2", label: "Yamaha DBR12(2台目)", icon: "DBR12-2", ports: [{ id: "in", label: "CH1 IN (XLR/TRSコンボ)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "speaker", "ts"],
        correctConnections: [
          { from: "mixer.mainOut", to: "spk1.in", cable: "xlr" },
          { from: "spk1.mixOut", to: "spk2.in", cable: "xlr" },
        ],
        explain:
          "パワードスピーカーはアンプを内蔵しているので、以前の単元のパッシブスピーカーのようなパワーアンプとスピーカーケーブルは要らず、ミキサーからはXLRやTRSといった『ライン信号用のケーブル』で音を送るだけで鳴らせる。DBR12には、入力した音をそのまま(または2つの入力をミックスして)外へ出す『MIX OUT』端子があり、1台目に入れた音を2台目へ渡す『デイジーチェーン(数珠つなぎ)』ができる。これにより、ミキサーから会場の両端まで2本のケーブルを別々に引き回す必要がなく、ミキサー側の出力端子を1系統で済ませられる。ただし、この連結でつながった2台は基本的に同じ音を鳴らすため、左右で違う音を出すステレオ再生にはならない。左右を分けたいときは、ミキサーのMAIN OUT LとRから、それぞれのスピーカーへ別々のケーブルでつなぐ必要がある。",
      },
    },
    {
      id: "headphone_amp_ha8000_cue",
      order: 74,
      title: "ヘッドホンアンプで演奏者ごとに別のキューミックスを配る(Behringer HA8000)",
      category: "配線問題",
      hook: "ボーカルは自分の声を大きく、ドラマーはクリックを大きく——同じ録音現場でも、聴きたい音のバランスは人それぞれ。人数分の別ミックスを、1台のヘッドホンアンプで配る配線を体験しよう。",
      patch: {
        scenario:
          "バンドの一発録りで、ボーカリストとドラマーに別々のキューミックス(演奏者が聴くためのモニター用ミックス)を送りたい。オーディオインターフェース「MOTU 828es」のLINE OUT 3(TRS)を、ヘッドホンアンプ「Behringer POWERPLAY HA8000」のCH1の入力(TRS)へ、LINE OUT 4(TRS)を、CH2の入力(TRS)へそれぞれ接続する。ヘッドホンはHA8000の各チャンネルのヘッドホン出力(TRS)につなぐ。ボーカリストの「Beyerdynamic DT 770 Pro」を、CH1のヘッドホン出力へ、ドラマーの「Sony MDR-7506」を、CH2のヘッドホン出力へ接続しよう。",
        equipment: [
          {
            id: "interface",
            label: "MOTU 828es",
            icon: "828es",
            ports: [
              { id: "out3", label: "LINE OUT 3 (TRS)", type: "trs", dir: "out" },
              { id: "out4", label: "LINE OUT 4 (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "hpamp",
            label: "Behringer POWERPLAY HA8000",
            icon: "HA8000",
            ports: [
              { id: "in1", label: "CH1 MAIN IN (TRS)", type: "trs", dir: "in" },
              { id: "in2", label: "CH2 MAIN IN (TRS)", type: "trs", dir: "in" },
              { id: "out1", label: "CH1 PHONES (TRS)", type: "trs", dir: "out" },
              { id: "out2", label: "CH2 PHONES (TRS)", type: "trs", dir: "out" },
            ],
          },
          { id: "hpVocal", label: "Beyerdynamic DT 770 Pro(ボーカル用)", icon: "DT770", ports: [{ id: "in", label: "PHONES (TRS)", type: "trs", dir: "in" }] },
          { id: "hpDrum", label: "Sony MDR-7506(ドラム用)", icon: "MDR7506", ports: [{ id: "in", label: "PHONES (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["trs", "ts", "xlr", "speaker"],
        correctConnections: [
          { from: "interface.out3", to: "hpamp.in1", cable: "trs" },
          { from: "interface.out4", to: "hpamp.in2", cable: "trs" },
          { from: "hpamp.out1", to: "hpVocal.in", cable: "trs" },
          { from: "hpamp.out2", to: "hpDrum.in", cable: "trs" },
        ],
        explain:
          "以前の単元でも扱ったキューミックスは、DAWやミキサーで『演奏者が聴くための、客席や録音とは別のバランス』を作って送る仕組み。人数が増えるほど、ヘッドホンを1つずつ直接つなぐのではなく、HA8000のように複数のヘッドホン出力を持つ『ヘッドホンアンプ』を使い、1人ずつに別のミックスを割り当てる運用が現実的になる。HA8000は8つの独立したステレオのチャンネルを備え、各チャンネルがそれぞれ別の入力を受けられるため、オーディオインターフェースの出力を2系統に分ければ、ボーカルとドラムで別のバランスを送り分けられる。各チャンネルにはフロントとリアにヘッドホン出力があるので、同じミックスを複数の人で聴きたいときは、1つのチャンネルに2人分のヘッドホンをつなぐこともできる。ヘッドホンは本来アンプの出力で鳴らすものなので、オーディオインターフェースのLINE OUTを直接ヘッドホンにつなぐのではなく、必ずヘッドホンアンプを間にはさむ。",
      },
    },
    {
      id: "looper_rc505_mixer",
      order: 75,
      title: "ルーパーでボーカルを重ねてミキサーへ送る(Boss RC-505mkII)",
      category: "配線問題",
      hook: "その場で歌を録音して何重にも重ねていく『ループパフォーマンス』。マイクの音は一度ルーパーに入り、重ねた結果だけがミキサーへ出ていく——信号の流れる向きを配線で確かめよう。",
      patch: {
        scenario:
          "ストリートライブで、ルーパー「Boss RC-505mkII」を使い、その場で歌を重ねて演奏する。ボーカルマイク「Shure SM58」を、RC-505mkIIのMIC 1(XLR)へ接続する。ルーパーで加工された音は、MAIN OUT L(TS)とMAIN OUT R(TS)から、ミキサー「Yamaha MG12XU」のライン入力1のL側とR側(TS)へ、それぞれ接続しよう。マイクをミキサーへ直接つなぐ必要はない。",
        equipment: [
          { id: "mic", label: "Shure SM58", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "looper",
            label: "Boss RC-505mkII",
            icon: "RC-505",
            ports: [
              { id: "mic1", label: "MIC 1 (XLR)", type: "xlr", dir: "in" },
              { id: "outL", label: "MAIN OUT L/MONO (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "MAIN OUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "lineL", label: "LINE IN 1 L (TS)", type: "ts", dir: "in" },
              { id: "lineR", label: "LINE IN 1 R (TS)", type: "ts", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "ts", "trs", "midi"],
        correctConnections: [
          { from: "mic.out", to: "looper.mic1", cable: "xlr" },
          { from: "looper.outL", to: "mixer.lineL", cable: "ts" },
          { from: "looper.outR", to: "mixer.lineR", cable: "ts" },
        ],
        explain:
          "RC-505mkIIのようなルーパーは、マイクの音を機械の中に録音し、その録音を繰り返し再生しながら、さらに新しい音を重ねていく。ボーカルの生の声も、ルーパーが再生している重ね録りの音も、すべて『ルーパーを通ったあとの音』としてMAIN OUTから出てくるため、マイクは直接ミキサーへつながず、必ずルーパーに入力して、ルーパーの出力だけをミキサーへ送る配線にする。マイクをミキサーにも直接つなぐと、ルーパーを経由しない声が二重にミックスされ、ルーパーの音量バランスやエフェクトのかかり方をコントロールしづらくなる。RC-505mkIIのMIC入力にはファンタム電源が用意されており、コンデンサーマイクも使えるが、今回のSM58のようなダイナミックマイクではファンタム電源は不要。MAIN OUTのほかにSUB OUTも備えており、たとえばトラックごとに別々のチャンネルへ送り分けたい場合は、そちらを使う。",
      },
    },
    {
      id: "subwoofer_hpf_post_tops",
      order: 76,
      title: "サブウーファーの出力(HPF POST)から左右のトップスピーカーへつなぐ(Yamaha DXS12mkII + DXR12mkII)",
      category: "配線問題",
      hook: "低音だけを専用のサブウーファーに任せると、トップスピーカーは中高音に集中できる。ただし、ミキサーの音を先にトップへ送るか、サブウーファーを経由させるかで、配線の意味が変わる。今回は『サブウーファーを先頭に置く』つなぎ方を体験しよう。",
      patch: {
        scenario:
          "ダンスイベントの会場で、低音を強化するために、サブウーファー「Yamaha DXS12mkII」を1台とトップスピーカー「Yamaha DXR12mkII」を左右に1台ずつ使う。ミキサー「Allen & Heath SQ-5」のMAIN OUT L・Rを、DXS12mkIIのINPUT L・R(XLR)へそれぞれ接続する。DXS12mkIIのOUTPUT L・R(XLR、THROUGH/HPF POSTスイッチをHPF POSTに設定済み)から、左右のDXR12mkIIのINPUT(XLR)へ、それぞれ接続しよう。3台ともアンプを内蔵したパワード型のため、スピーカーケーブルは使わない。",
        equipment: [
          {
            id: "mixer",
            label: "Allen & Heath SQ-5",
            icon: "SQ-5",
            ports: [
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "sub",
            label: "Yamaha DXS12mkII(サブウーファー)",
            icon: "DXS12mkII",
            ports: [
              { id: "inL", label: "INPUT L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "INPUT R (XLR)", type: "xlr", dir: "in" },
              { id: "outL", label: "OUTPUT L (XLR, HPF POST)", type: "xlr", dir: "out" },
              { id: "outR", label: "OUTPUT R (XLR, HPF POST)", type: "xlr", dir: "out" },
            ],
          },
          { id: "topL", label: "Yamaha DXR12mkII(左)", icon: "DXR12-L", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "topR", label: "Yamaha DXR12mkII(右)", icon: "DXR12-R", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "speaker", "ts"],
        correctConnections: [
          { from: "mixer.mainL", to: "sub.inL", cable: "xlr" },
          { from: "mixer.mainR", to: "sub.inR", cable: "xlr" },
          { from: "sub.outL", to: "topL.in", cable: "xlr" },
          { from: "sub.outR", to: "topR.in", cable: "xlr" },
        ],
        explain:
          "DXS12mkIIの背面には、入力用のXLR端子が2つと、出力用のXLR端子が2つある。出力用の端子は、THROUGH/HPF POSTというスイッチで切り替えられ、THROUGHでは入力された信号がそのまま出力され、HPF POSTでは、サブウーファー内蔵のハイパスフィルター(低音をカットするフィルター)を通した信号が出力される。HPF POSTに設定しておけば、サブウーファーが担当する低音は自分で鳴らし、トップスピーカーには低音をカットした中高音だけを送れるため、ミキサーから出ているすべての音をそのままトップへ送る場合と比べ、トップが低音でムダに負荷をかけられずに済む。この配線は、サブウーファーを経由させるため、ミキサーの出力をトップへ直接送るときとは違って、サブウーファーの電源が入っていないとトップにも音が届かない点に注意が必要になる。以前の単元で扱ったdbx DriveRack PA2のようなアクティブクロスオーバーを使う方法と比べると、機材が少なくて済むかわりに、分割の細かい調整はサブウーファー側の機能の範囲に限られる。",
      },
    },
    {
      id: "ms_stereo_recording",
      order: 77,
      title: "M/S方式でアコースティックギターをステレオ録音する(Neumann KM 184 + AKG C414 XLII)",
      category: "配線問題",
      hook: "マイク2本で左右を録るのではなく、『正面の音』と『横の広がり』を別々に録る——あとから広がりの量を自由に調整できる、M/S方式の配線を体験しよう。",
      patch: {
        scenario:
          "アコースティックギターの弾き語り作品で、あとからステレオの広がりを調整できるように、M/S方式(Mid/Side方式。正面を向けたマイクと、真横を向けた8の字型のマイクを組み合わせる録音方法)で録音したい。正面(Mid)用には単一指向性のコンデンサーマイク「Neumann KM 184」を、横(Side)用には指向性を切り替えられるコンデンサーマイク「AKG C414 XLII」を8の字(双指向性)に設定して使う。KM 184をオーディオインターフェース「RME Babyface Pro FS」のMIC 1(XLR)へ、C414 XLIIをMIC 2(XLR)へ接続し、Babyface Pro FSとMacBook ProはUSBケーブルで接続しよう。2本ともコンデンサーマイクなので、Babyface Pro FS側で両方の入力に+48Vファンタム電源を入れる。",
        equipment: [
          { id: "micMid", label: "Neumann KM 184(Mid:正面用)", icon: "KM184", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "micSide", label: "AKG C414 XLII(Side:8の字に設定)", icon: "C414", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "RME Babyface Pro FS",
            icon: "Babyface",
            ports: [
              { id: "mic1", label: "MIC 1 (XLR)", type: "xlr", dir: "in" },
              { id: "mic2", label: "MIC 2 (XLR)", type: "xlr", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb"],
        correctConnections: [
          { from: "micMid.out", to: "interface.mic1", cable: "xlr" },
          { from: "micSide.out", to: "interface.mic2", cable: "xlr" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "配線そのものはマイク2本をXLRケーブルで別々の入力につなぐだけだが、M/S方式では『どちらのマイクがどちらの入力か』が後の作業に直結する。Mid(正面)のマイクは音源をまっすぐ狙い、Side(横)のマイクは8の字の指向性を左右に向けて、Midと同じ位置(カプセル同士をできるだけ近づけ、上下に重ねるのが一般的)に置く。録音した2つの信号は、そのままでは左右のステレオにならないため、DAWで『デコード(左右の音に変換する処理)』をする。手作業で行う場合は、Sideのトラックを複製して片方の極性(位相)を反転し、元のSideを左、反転したSideを右に振り切り、Midを中央に置く。こうすると、左=Mid+Side、右=Mid−Sideとなり、ステレオの音像ができる。Sideトラックの音量を上げれば広がりが増え、下げれば狭くなり、Sideを消せば完全なモノラルになるため、モノラル再生でも音が痩せにくいのがM/S方式の大きな利点。デコード用のプラグイン(M/Sデコーダー)を使えば、この処理を1つのプラグインで済ませることもできる。",
      },
    },
    {
      id: "talkbox_speaker_level",
      order: 78,
      title: "トークボックスをギターアンプとキャビネットの間に挟む(Dunlop HT1 Heil Talk Box)",
      category: "配線問題",
      hook: "ギターが『しゃべる』ように聞こえるトークボックス。実はエフェクターのように足元のケーブルの途中に挟むのではなく、アンプの『スピーカー出力』という大きな電力の流れに割り込ませる機材だ。",
      patch: {
        scenario:
          "ライブで、ギターの音を口の形で変化させるトークボックス「Dunlop HT1 Heil Talk Box」を使いたい。HT1は内部に小さなスピーカー(ドライバー)を持ち、そこから出た音をチューブで口元へ送る仕組みで、アンプのスピーカー出力で直接鳴らすタイプの機材。ギター「Fender Stratocaster」をアンプヘッド「Marshall DSL20HR」のINPUT(TS)へ接続する。DSL20HRのSPEAKER OUTPUTから、HT1のINPUT(アンプのスピーカー出力を受ける端子)へ、HT1のOUTPUTから8Ωのギター用スピーカーキャビネットのINPUTへ、それぞれスピーカーケーブルで接続する。口元で形を変えた音は、ボーカル用マイク「Shure SM58」で拾って、ミキサー「Yamaha MG12XU」のCH1 MIC INPUT(XLR)へ接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "amp",
            label: "Marshall DSL20HR(アンプヘッド)",
            icon: "DSL20HR",
            ports: [
              { id: "in", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "spkOut", label: "SPEAKER OUTPUT", type: "speaker", dir: "out" },
            ],
          },
          {
            id: "talkbox",
            label: "Dunlop HT1 Heil Talk Box",
            icon: "HT1",
            ports: [
              { id: "in", label: "INPUT(アンプのスピーカー出力から)", type: "speaker", dir: "in" },
              { id: "out", label: "OUTPUT(スピーカーへ)", type: "speaker", dir: "out" },
            ],
          },
          { id: "cab", label: "ギター用スピーカーキャビネット(8Ω)", icon: "CAB", ports: [{ id: "in", label: "INPUT", type: "speaker", dir: "in" }] },
          { id: "mic", label: "Shure SM58(トークボックスの音を拾う)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "mixer", label: "Yamaha MG12XU", icon: "MG12XU", ports: [{ id: "mic1", label: "CH1 MIC INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["ts", "speaker", "xlr", "trs"],
        correctConnections: [
          { from: "guitar.out", to: "amp.in", cable: "ts" },
          { from: "amp.spkOut", to: "talkbox.in", cable: "speaker" },
          { from: "talkbox.out", to: "cab.in", cable: "speaker" },
          { from: "mic.out", to: "mixer.mic1", cable: "xlr" },
        ],
        explain:
          "HT1のような昔ながらのトークボックスは、自分では音を増幅する仕組み(アンプ)を持たず、ギターアンプが本来スピーカーを鳴らすために出している大きな電力で、内部のドライバーを鳴らしている。そのため、アンプのSPEAKER OUTPUTとHT1の間、HT1とキャビネットの間は、ギター用のシールドケーブル(TS)ではなく、太い導線のスピーカーケーブルでつなぐ必要がある。メーカーの説明書でも、ギター用ケーブルではなく頑丈なスピーカーケーブルを使うよう注意されている。HT1のフットスイッチをオフにすると、音はそのままキャビネットへ素通りし、オンにするとドライバー側へ切り替わって、チューブを通って口元に届く。口の形で音色を変えた結果はそのままでは客席に届かないため、ボーカルマイクで拾ってPAへ送るのが基本。また、HT1には扱える電力の上限(説明書では最大100W、連続50W RMS)があるため、大出力のアンプにつなぐとドライバーを壊すおそれがある。今回は20Wのアンプを選んでいるが、実際に使うときはアンプの出力と、キャビネットのインピーダンス(Ω)が合っているかを必ず確認しよう。なお、トークボックスには、HT1のようにアンプのスピーカー出力で鳴らすタイプのほかに、小さなアンプを内蔵していて、ギターから直接つなげるタイプも販売されている。",
      },
    },
    {
      id: "backing_track_click_split",
      order: 79,
      title: "同期演奏のオケとクリックを分けて出力する(Scarlett 4i4 + Radial ProD2 + Behringer P1)",
      category: "配線問題",
      hook: "パソコンから流すオケ(伴奏音源)はお客さんに聴かせたいが、テンポを刻むクリック音は絶対に客席へ漏らしたくない。同じパソコンから出る2種類の音を、出口から分けて配線しよう。",
      patch: {
        scenario:
          "バンドのライブで、ドラマーがクリック(テンポを示すメトロノーム音)を聴きながら、パソコンで再生するオケ(シンセやコーラスなどの伴奏音源)と合わせて演奏する『同期演奏』をする。MacBook Pro(Ableton Live起動済み)とオーディオインターフェース「Focusrite Scarlett 4i4(第4世代)」をUSBケーブルで接続する。オケはLINE OUTPUT 1・2から出して、ステレオのパッシブDI「Radial ProD2」のCH1・CH2 INPUTへTSケーブルで接続し、ProD2のCH1・CH2 XLR OUTPUTを、FOH(客席側のミキサー)へ送るステージボックスのCH15・CH16(XLR)へ接続する。クリックはLINE OUTPUT 3だけに出すようにDAWで設定済み。LINE OUTPUT 3から、ドラマーの足元に置くイヤモニ用アンプ「Behringer POWERPLAY P1」のINPUT 1(XLR)へ、片側がTRS・片側がXLRのバランスケーブルで接続しよう。P1のPHONES出力にはドラマーのイヤホンが接続済みとする。",
        equipment: [
          { id: "pc", label: "MacBook Pro(Ableton Live)", icon: "MacBk", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4(第4世代)",
            icon: "4i4",
            ports: [
              { id: "usbin", label: "USB", type: "usb", dir: "in" },
              { id: "out1", label: "LINE OUTPUT 1 (TRS)", type: "trs", dir: "out" },
              { id: "out2", label: "LINE OUTPUT 2 (TRS)", type: "trs", dir: "out" },
              { id: "out3", label: "LINE OUTPUT 3 (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "di",
            label: "Radial ProD2(ステレオDI)",
            icon: "ProD2",
            ports: [
              { id: "in1", label: "CH1 INPUT (1/4\")", type: "ts", dir: "in" },
              { id: "in2", label: "CH2 INPUT (1/4\")", type: "ts", dir: "in" },
              { id: "xlr1", label: "CH1 OUTPUT (XLR)", type: "xlr", dir: "out" },
              { id: "xlr2", label: "CH2 OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "stagebox",
            label: "ステージボックス(FOHへ)",
            icon: "BOX",
            ports: [
              { id: "ch15", label: "CH15 IN (XLR)", type: "xlr", dir: "in" },
              { id: "ch16", label: "CH16 IN (XLR)", type: "xlr", dir: "in" },
            ],
          },
          { id: "iem", label: "Behringer POWERPLAY P1(ドラマー用)", icon: "P1", ports: [{ id: "in1", label: "INPUT 1 (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["usb", "ts", "trs", "xlr", "speaker"],
        correctConnections: [
          { from: "pc.usb", to: "interface.usbin", cable: "usb" },
          { from: "interface.out1", to: "di.in1", cable: "ts" },
          { from: "interface.out2", to: "di.in2", cable: "ts" },
          { from: "di.xlr1", to: "stagebox.ch15", cable: "xlr" },
          { from: "di.xlr2", to: "stagebox.ch16", cable: "xlr" },
          { from: "interface.out3", to: "iem.in1", cable: "trs" },
        ],
        explain:
          "同期演奏で一番大事なのは、クリックとオケを『別々の出力』から出すこと。オケとクリックを同じ出力に混ぜてしまうと、FOHのエンジニアがクリックだけを消すことができず、客席にメトロノーム音が漏れてしまう。そこでDAW側で、オケはLINE OUTPUT 1・2(ステレオ)、クリックはLINE OUTPUT 3、というように出口を分けておき、配線でも行き先を分ける。オケをステージボックスへ送るときにDIをはさむのは、パソコン周りの機材とPA側の機材の電源の違いから生じるハムノイズ(ブーンという低いノイズ)を、ProD2のグラウンドリフトスイッチなどで対策しやすくするためと、長いケーブルでも音が劣化しにくいXLRのバランス信号に変換するため。ProD2はトランスを使ったパッシブ型なので、電源やファンタム電源は必要ない。クリックはドラマーの耳にだけ届けばよいので、ステージボックスには送らず、足元のイヤモニ用アンプP1へ直接送る。P1は2つの入力を混ぜられるため、INPUT 2にモニター卓から送られるバンドの音を入れれば、クリックとバンドの音のバランスをドラマーが手元で調整できる。Scarlett 4i4(第4世代)のLINE OUTPUT 3・4は、本体の大きな音量ノブではなく専用ソフトのFocusrite Control 2側で音量を設定する仕様とされているため、本番前にクリックの音量を必ず確認しておこう。",
      },
    },
    {
      id: "mixer_to_camera_line",
      order: 80,
      title: "ミキサーの音をビデオカメラに直接録る(Yamaha MG12XU → Sony FX3のXLRハンドル)",
      category: "配線問題",
      hook: "ライブ動画の音がスカスカなのは、カメラ内蔵マイクで会場の反響ごと拾っているから。ミキサーで整えたラインの音をカメラに直接入れれば、映像と音が最初からぴったり合った素材になる。ただし、カメラ側の『入力の種類』の設定を間違えると、音が割れてしまう。",
      patch: {
        scenario:
          "カフェでの弾き語りライブを、シネマカメラ「Sony FX3」で撮影する。ボーカルマイク「Shure SM58」は、会場のミキサー「Yamaha MG12XU」のCH1 MIC INPUT(XLR)へ接続する。ミキサーで整えた音は、ST OUT L(XLR)からFX3に付属するXLRハンドルユニットのINPUT1(XLR/TRSコンボ)へ、ST OUT R(XLR)からINPUT2(XLR/TRSコンボ)へ、それぞれ接続しよう。ハンドルユニットのINPUT1・INPUT2の切り替えスイッチは、どちらも『LINE』に設定する。",
        equipment: [
          { id: "mic", label: "Shure SM58", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Yamaha MG12XU",
            icon: "MG12XU",
            ports: [
              { id: "mic1", label: "CH1 MIC INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "stL", label: "ST OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "stR", label: "ST OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "camera",
            label: "Sony FX3(XLRハンドルユニット装着)",
            icon: "FX3",
            ports: [
              { id: "in1", label: "INPUT1 (XLR/TRSコンボ・LINE設定)", type: "xlr", dir: "in" },
              { id: "in2", label: "INPUT2 (XLR/TRSコンボ・LINE設定)", type: "xlr", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "ts", "rca"],
        correctConnections: [
          { from: "mic.out", to: "mixer.mic1", cable: "xlr" },
          { from: "mixer.stL", to: "camera.in1", cable: "xlr" },
          { from: "mixer.stR", to: "camera.in2", cable: "xlr" },
        ],
        explain:
          "FX3のXLRハンドルユニットには、INPUT1・INPUT2それぞれに『LINE/MIC/MIC+48V』の切り替えスイッチがある。LINEはミキサーなどの外部機器向け、MICはダイナミックマイクや電池で動くマイク向け、MIC+48Vはファンタム電源が必要なコンデンサーマイク向けの設定。ミキサーのST OUTから出る音は、すでに十分な大きさまで増幅された『ライン信号』なので、カメラ側をMICにしたままだと、もう一度大きく増幅されて音が割れてしまう。必ずLINEに合わせよう。また、MIC+48Vの位置のままケーブルを抜き差しすると大きなノイズや故障の原因になるとメーカーも注意しているため、配線の前にスイッチを切り替えておくのが安全。ミキサーから直接音を取ると、会場の反響や客席のざわめきが少ないクリアな音になる一方、拍手や会場の空気感は入りにくい。実際の現場では、カメラ本体のマイクやもう1台の録音機で会場の雰囲気(アンビエンス)も別に録っておき、編集でミキサーの音と混ぜることも多い。",
      },
    },
    {
      id: "tracking_chain_1073_la2a",
      order: 81,
      title: "マイクプリ→コンプの「かけ録り」チェーンを組む(AMS Neve 1073N + Teletronix LA-2A)",
      category: "配線問題",
      hook: "コンプはミックスのときに挿すもの——とは限らない。録音の段階でアナログのコンプを通し、その音ごと録ってしまう『かけ録り』。機材を通る順番を間違えると、狙った音にならない。",
      patch: {
        scenario:
          "ボーカル録りで、マイクプリアンプ「AMS Neve 1073N」で増幅した声を、真空管のコンプレッサー「Universal Audio Teletronix LA-2A Classic Leveler」に通してから録音したい(かけ録り)。コンデンサーマイク「Neumann U 87 Ai」を、1073NのMIC/LINE INPUT(XLR/TRSコンボのXLR側)へ接続する。1073NのOUTPUT(XLR)から、LA-2AのINPUT(XLR)へ接続する。LA-2AのOUTPUT(XLR)から、オーディオインターフェース「MOTU 828es」のLINE IN 3(TRS)へ、片側がXLR・片側がTRSのバランスケーブルで接続する。828esとMacBook ProはUSBケーブルで接続しよう。",
        equipment: [
          { id: "mic", label: "Neumann U 87 Ai", icon: "U87Ai", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "pre",
            label: "AMS Neve 1073N(マイクプリ/EQ)",
            icon: "1073N",
            ports: [
              { id: "micIn", label: "MIC/LINE INPUT (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "out", label: "OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "comp",
            label: "UA Teletronix LA-2A Classic Leveler",
            icon: "LA-2A",
            ports: [
              { id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "out", label: "OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "MOTU 828es",
            icon: "828es",
            ports: [
              { id: "line3", label: "LINE IN 3 (TRS)", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb"],
        correctConnections: [
          { from: "mic.out", to: "pre.micIn", cable: "xlr" },
          { from: "pre.out", to: "comp.in", cable: "xlr" },
          { from: "comp.out", to: "interface.line3", cable: "trs" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "マイクの信号はとても小さいので、まずマイクプリ(1073N)でライン信号の大きさまで増幅してから、コンプ(LA-2A)へ送る。順番を逆にして、マイクを直接LA-2Aにつないでも、LA-2Aはライン信号を受ける前提の機材なので、ほとんど圧縮がかからないうえに音も小さすぎて使えない。1073Nを先に置くことで、EQで声の色づけをしたうえで、LA-2Aで音量のばらつきをなだらかに整えた音を録音できる。LA-2Aの出力もすでにライン信号なので、828es側はマイクプリを通らないLINE IN(TRS)で受けるのが正しい。ここでマイク入力につないでゲインを上げると、増幅が二重になり歪みやノイズの原因になる。かけ録りの最大の注意点は『録ったあとでコンプのかかり方を戻せない』こと。圧縮をかけすぎた音はミックスで元に戻せないため、録音時は控えめなかけ方にとどめ、足りない分はミックスで補うのが一般的な考え方とされる。",
      },
    },
    {
      id: "mono_synth_stereo_reverb_pedal",
      order: 82,
      title: "モノラルのシンセをステレオのリバーブペダルで広げて録る(Korg monologue + Strymon BigSky)",
      category: "配線問題",
      hook: "シンセ本体の出力は1本(モノラル)なのに、録音すると左右に広がる響きになる——その秘密は、1つの入力から2つの出力を作り出す『モノラル入力・ステレオ出力』のペダルにある。",
      patch: {
        scenario:
          "モノフォニック(同時に1音だけ鳴るタイプ)のアナログシンセ「Korg monologue」の音に、広がりのあるリバーブをかけて録音したい。monologueのOUTPUT(モノラル、TS)を、リバーブペダル「Strymon BigSky」のLEFT IN(TS)へ接続する。BigSkyはモノラル入力・ステレオ出力として使い、LEFT OUT(TS)をオーディオインターフェース「Focusrite Scarlett 4i4(第4世代)」のLINE INPUT 3へ、RIGHT OUT(TS)をLINE INPUT 4へ、それぞれ接続しよう。Scarlett 4i4とMacBook ProはUSBケーブルで接続する。",
        equipment: [
          { id: "synth", label: "Korg monologue", icon: "monologue", ports: [{ id: "out", label: "OUTPUT (TS・モノラル)", type: "ts", dir: "out" }] },
          {
            id: "reverb",
            label: "Strymon BigSky(リバーブペダル)",
            icon: "BigSky",
            ports: [
              { id: "inL", label: "LEFT IN (TS)", type: "ts", dir: "in" },
              { id: "inR", label: "RIGHT IN (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "LEFT OUT (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "RIGHT OUT (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4(第4世代)",
            icon: "4i4",
            ports: [
              { id: "line3", label: "LINE INPUT 3", type: "trs", dir: "in" },
              { id: "line4", label: "LINE INPUT 4", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "usb", "midi"],
        correctConnections: [
          { from: "synth.out", to: "reverb.inL", cable: "ts" },
          { from: "reverb.outL", to: "interface.line3", cable: "ts" },
          { from: "reverb.outR", to: "interface.line4", cable: "ts" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "monologueの音声出力はモノラルの1系統だけなので、そのまま録れば左右どちらにも同じ音が出る『点』の音になる。BigSkyはステレオの入出力を持ち、モノラルで入力した場合はLEFT INだけを使う。リバーブの響きは内部で左右に違う成分として作られ、LEFT OUTとRIGHT OUTから別々に出てくるため、2本の出力をオーディオインターフェースの2つの入力にそれぞれつなぎ、DAWでLとRに振り分ければ、響きが左右に広がったステレオの音として録音できる。RIGHT INは、ステレオ出力のシンセやキーボードをつなぐときに使う端子なので、今回は空けておく。BigSkyのようなギター用ペダルは、本来ギターの小さな信号を受ける前提で作られているため、シンセのようなライン信号を入れると、音が大きすぎて歪むことがある。シンセ側の音量を控えめにして、ペダルの入力で音が割れていないか確認してから録音しよう。また、ステレオで録ったリバーブは、片方のチャンネルだけをミュートしてしまうと響きのバランスが崩れるので、2本のトラックはセットで扱うのが基本。",
      },
    },
    {
      id: "analog_mastering_chain_print",
      order: 83,
      title: "アナログのマスタリングチェーンで2ミックスを処理して録り直す(Manley Massive Passive + SSL Fusion)",
      category: "配線問題",
      hook: "DAWから出した2ミックス(左右2chにまとめた完成ミックス)を、アナログのEQとコンプに通して、もう一度DAWに録り直す。出口から入口へ戻る『一周』の配線を、左右の取り違えなく組めるか?",
      patch: {
        scenario:
          "マスタリング作業で、DAWの2ミックスをアナログ機材に通して音を仕上げ、その結果を録り直したい(プリント)。AD/DAコンバーター「RME ADI-2 Pro FS R」とMacBook ProはUSBケーブルで接続する。ADI-2 Pro FS RのLINE OUT L・R(XLR)から、ステレオのEQ「Manley Massive Passive」のCH1 INPUT(XLR)・CH2 INPUT(XLR)へ接続する(CH1を左、CH2を右として扱う)。Massive PassiveのCH1 OUTPUT・CH2 OUTPUT(XLR)から、ステレオのアナログプロセッサー「SSL Fusion」のINPUT L・R(XLR)へ接続する。FusionのOUTPUT L・R(XLR)から、ADI-2 Pro FS RのLINE IN 1・2(XLR/TRSコンボ)へ接続して、DAWで録音しよう。",
        equipment: [
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "out" }] },
          {
            id: "conv",
            label: "RME ADI-2 Pro FS R(AD/DAコンバーター)",
            icon: "ADI-2 Pro",
            ports: [
              { id: "usbin", label: "USB", type: "usb", dir: "in" },
              { id: "outL", label: "LINE OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "outR", label: "LINE OUT R (XLR)", type: "xlr", dir: "out" },
              { id: "in1", label: "LINE IN 1 (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "in2", label: "LINE IN 2 (XLR/TRSコンボ)", type: "xlr", dir: "in" },
            ],
          },
          {
            id: "eq",
            label: "Manley Massive Passive(ステレオEQ)",
            icon: "Massive",
            ports: [
              { id: "in1", label: "CH1 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "CH2 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "out1", label: "CH1 OUTPUT (XLR)", type: "xlr", dir: "out" },
              { id: "out2", label: "CH2 OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "fusion",
            label: "SSL Fusion",
            icon: "Fusion",
            ports: [
              { id: "inL", label: "INPUT L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "INPUT R (XLR)", type: "xlr", dir: "in" },
              { id: "outL", label: "OUTPUT L (XLR)", type: "xlr", dir: "out" },
              { id: "outR", label: "OUTPUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb", "aes"],
        correctConnections: [
          { from: "pc.usb", to: "conv.usbin", cable: "usb" },
          { from: "conv.outL", to: "eq.in1", cable: "xlr" },
          { from: "conv.outR", to: "eq.in2", cable: "xlr" },
          { from: "eq.out1", to: "fusion.inL", cable: "xlr" },
          { from: "eq.out2", to: "fusion.inR", cable: "xlr" },
          { from: "fusion.outL", to: "conv.in1", cable: "xlr" },
          { from: "fusion.outR", to: "conv.in2", cable: "xlr" },
        ],
        explain:
          "この配線は、DAWの音をDA(デジタル→アナログ)変換して外へ出し、アナログ機材で処理したあと、AD(アナログ→デジタル)変換してDAWへ戻す『一周』の流れになっている。アナログのマスタリング機材は、左右2chを同じ設定で処理することが前提なので、左はずっと左(CH1・L・IN 1)、右はずっと右(CH2・R・IN 2)という対応を、機材をまたいでも崩さないことが最も大事。途中で左右が入れ替わると、録り直した音の定位が逆になったり、左右で違うかかり方になったりする。Massive PassiveはXLR入出力がプロ用の+4dBuレベルで動作し、出力はトランスでバランスされているため、XLRケーブルでつなぐのが基本。SSL FusionもすべてXLRで入出力するため、XLRケーブルだけで一周を組める。また、DAWから出した音を外部機材に通して戻すと、変換処理と機材の通過で、わずかな時間の遅れ(レイテンシー)が生じる。録り直した音は元のデータより少し後ろにずれるので、曲の頭の位置を合わせ直すか、DAWの遅延補正機能で調整しておこう。",
      },
    },
    {
      id: "drum_machine_parallel_outs",
      order: 84,
      title: "ドラムマシンのパラアウト(個別出力)で楽器ごとに別トラックへ録る(Roland TR-8S + Focusrite Scarlett 18i20)",
      category: "配線問題",
      hook: "キックだけにコンプをかけたいのに、録音した音はドラム全部が1本のステレオに混ざっている——そうならないように、楽器ごとに出口を分ける『パラアウト』配線を組もう。",
      patch: {
        scenario:
          "リズムマシン「Roland TR-8S」で作ったビートを、あとからミックスで個別に音作りできるように録音したい。TR-8S本体の設定で、キックをASSIGNABLE OUT 1、スネアをASSIGNABLE OUT 2に割り当て、それ以外の楽器(ハイハットやクラップなど)はMIX OUTから出す。MIX OUT L/MONO・R(TRS)を、オーディオインターフェース「Focusrite Scarlett 18i20(第3世代)」のINPUT 1・INPUT 2(XLR/TRSコンボ)へ、TRSケーブルで接続する。ASSIGNABLE OUT 1・2(TSフォーン)を、INPUT 3・INPUT 4へTSケーブルで接続する。Scarlett 18i20とMacBook ProはUSBケーブルで接続しよう。",
        equipment: [
          {
            id: "tr8s",
            label: "Roland TR-8S(リズムマシン)",
            icon: "TR-8S",
            ports: [
              { id: "mixL", label: "MIX OUT L/MONO (TRS)", type: "trs", dir: "out" },
              { id: "mixR", label: "MIX OUT R (TRS)", type: "trs", dir: "out" },
              { id: "assign1", label: "ASSIGNABLE OUT 1 (TS)", type: "ts", dir: "out" },
              { id: "assign2", label: "ASSIGNABLE OUT 2 (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 18i20(第3世代)",
            icon: "18i20",
            ports: [
              { id: "in1", label: "INPUT 1 (XLR/TRSコンボ)", type: "trs", dir: "in" },
              { id: "in2", label: "INPUT 2 (XLR/TRSコンボ)", type: "trs", dir: "in" },
              { id: "in3", label: "INPUT 3 (XLR/TRSコンボ)", type: "ts", dir: "in" },
              { id: "in4", label: "INPUT 4 (XLR/TRSコンボ)", type: "ts", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["trs", "ts", "xlr", "usb", "midi"],
        correctConnections: [
          { from: "tr8s.mixL", to: "interface.in1", cable: "trs" },
          { from: "tr8s.mixR", to: "interface.in2", cable: "trs" },
          { from: "tr8s.assign1", to: "interface.in3", cable: "ts" },
          { from: "tr8s.assign2", to: "interface.in4", cable: "ts" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "TR-8Sの背面には、全体の音をまとめて出すMIX OUT(L/R)のほかに、ASSIGNABLE OUT 1〜6という6つの個別出力がある。本体の設定で楽器ごとに出力先を選べるため、キックやスネアのように、あとで別々にEQやコンプをかけたい音だけを個別出力に振り分けておけば、DAWの別トラックとして録音できる。これを『パラアウト(パラレル・アウト)』と呼ぶ。個別出力に割り当てた楽器は、設定によってはMIX OUTから出なくなるので、録音前に各トラックのメーターを見て、音が二重に録られていないか、逆にどこからも出ていない楽器がないかを確認しよう。MIX OUTは左右2本でステレオの1組なので、DAWではINPUT 1・2をステレオトラックとして扱い、ASSIGNABLE OUTはモノラルのトラックとして録るのが基本。なお、ASSIGNABLE OUTは設定を切り替えると、外部のシンセやドラムマシンを鳴らすためのトリガー信号の出力(TRIGGER OUT)としても使える。トリガーに設定したままの出力にはドラムの音が出てこないので、パラアウトで使うときはオーディオ出力の設定になっているかを確認しておこう。",
      },
    },
    {
      id: "aby_box_dual_amp",
      order: 85,
      title: "ABYボックスで2台のギターアンプを切り替え・同時に鳴らす(Radial BigShot ABY)",
      category: "配線問題",
      hook: "クリーンはFender、歪みはVox——2台のアンプを足元で切り替えたり、両方同時に鳴らして厚みを出したりしたい。1本のギター信号を2台に分ける『ABYボックス』の配線を組もう。",
      patch: {
        scenario:
          "ライブで、2台のギターアンプ「Fender '65 Deluxe Reverb」と「Vox AC30C2」を使い分けたい。ギター「Fender Stratocaster」のOUTPUT(TS)を、ABYボックス「Radial BigShot ABY」のINPUT(TS)へ接続する。BigShot ABYのOUTPUT A(TS)をDeluxe ReverbのINPUT(TS)へ、OUTPUT B(TS)をAC30C2のINPUT(TS)へ接続する。BigShot ABYは信号を通すだけならどこからも電源をもらわない(パッシブ)が、どちらのアンプが選ばれているかを示すLEDを光らせるために、9VのDCアダプターを接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          { id: "psu", label: "9V DCアダプター(センターマイナス)", icon: "9V DC", ports: [{ id: "out", label: "DC OUT 9V", type: "power", dir: "out" }] },
          {
            id: "aby",
            label: "Radial BigShot ABY(ABYボックス)",
            icon: "BigShot",
            ports: [
              { id: "in", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "outA", label: "OUTPUT A (TS)", type: "ts", dir: "out" },
              { id: "outB", label: "OUTPUT B (TS・ISOトランス付き)", type: "ts", dir: "out" },
              { id: "dc", label: "9V DC IN", type: "power", dir: "in" },
            ],
          },
          { id: "ampA", label: "Fender '65 Deluxe Reverb", icon: "Deluxe", ports: [{ id: "in", label: "INPUT (TS)", type: "ts", dir: "in" }] },
          { id: "ampB", label: "Vox AC30C2", icon: "AC30", ports: [{ id: "in", label: "INPUT (TS)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "speaker", "power"],
        correctConnections: [
          { from: "guitar.out", to: "aby.in", cable: "ts" },
          { from: "aby.outA", to: "ampA.in", cable: "ts" },
          { from: "aby.outB", to: "ampB.in", cable: "ts" },
          { from: "psu.out", to: "aby.dc", cable: "power" },
        ],
        explain:
          "ABYボックスは、1本のギター信号を『Aだけ』『Bだけ』『AとBの両方(A+B=Y)』に振り分ける切り替え器。BigShot ABYは、信号を増幅したり作り替えたりする回路を通さないパッシブ設計で、ギターの音がそのままアンプへ届くとされる。ただし、2台のアンプを同時に鳴らすと、問題が2つ起こりやすい。1つめはハムノイズ。2台のアンプがそれぞれ別のコンセントからアース(電気の逃げ道)を取っていると、ギターのケーブルを介してアース同士がつながり『グラウンドループ』ができて、ブーンという低いノイズが出ることがある。BigShot ABYはOUTPUT BにISO(アイソレーション)トランスを内蔵しており、スイッチで入れるとB側の電気的なつながりを切って、このノイズを抑えられる。2つめは位相(波の向き)。アンプは回路によって、出てくる音の波の向きが上下逆になっていることがあり、2台を同時に鳴らすと波同士が打ち消し合って、低音が痩せた細い音になる。BigShot ABYにはB側の極性を180度反転させるスイッチがあり、A+Bで鳴らしながら低音がしっかり出るほうに合わせればよい。この極性反転スイッチは、ISOトランスを入れているときにだけ働く点も覚えておこう。なお、A+Bで鳴らすときは2台の音量差がそのまま音のバランスになるので、まず片方ずつ鳴らして、それぞれのアンプのボリュームを揃えてから同時に鳴らすと調整しやすい。",
      },
    },
    {
      id: "usb_midi_host_no_pc",
      order: 86,
      title: "PCなしでUSB-MIDIキーボードからハードシンセを鳴らす(Kenton MIDI USB Host mk3 + Korg minilogue xd)",
      category: "配線問題",
      hook: "USB端子しかないキーボードと、5ピンMIDI端子しかないシンセ。ふつうは間にパソコンを挟むが、ライブの機材を減らしたい——パソコンの代わりを務める『USBホスト』の配線を組もう。",
      patch: {
        scenario:
          "ライブで、USB-MIDIキーボード「Akai Professional MPK Mini mk3」を弾いて、アナログシンセ「Korg minilogue xd」を鳴らしたい。MPK Miniには5ピンのMIDI端子がなく、USBでつなぐしかないが、ステージにパソコンは持ち込みたくない。そこで、MIDIインターフェース「Kenton MIDI USB Host mk3」を使う。MPK MiniのUSB端子を、MIDI USB HostのUSB HOST端子(USB-A)へ接続する。MIDI USB HostのMIDI OUT(5ピンDIN)から、minilogue xdのMIDI INへ接続する。MIDI USB Hostには付属の5V DCアダプターを接続しよう。minilogue xdのOUTPUT L/MONO・R(TS)は、ミキサー「Yamaha MG10XU」のステレオチャンネル5/6のL/MONO・R入力へ接続する。",
        equipment: [
          { id: "keyboard", label: "Akai Professional MPK Mini mk3(USB-MIDIキーボード)", icon: "MPKmini", ports: [{ id: "usbOut", label: "USB", type: "usb", dir: "out" }] },
          { id: "psu", label: "5V DCアダプター(MIDI USB Host付属)", icon: "5V DC", ports: [{ id: "out", label: "DC OUT 5V", type: "power", dir: "out" }] },
          {
            id: "host",
            label: "Kenton MIDI USB Host mk3",
            icon: "USBHost",
            ports: [
              { id: "usbHost", label: "USB HOST (USB-A)", type: "usb", dir: "in" },
              { id: "midiIn", label: "MIDI IN (5ピンDIN)", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT (5ピンDIN)", type: "midi", dir: "out" },
              { id: "dc", label: "5V DC IN", type: "power", dir: "in" },
            ],
          },
          {
            id: "synth",
            label: "Korg minilogue xd",
            icon: "mlogue xd",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "outL", label: "OUTPUT L/MONO (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG10XU",
            icon: "MG10XU",
            ports: [
              { id: "st56L", label: "CH5/6 L/MONO (フォーン)", type: "ts", dir: "in" },
              { id: "st56R", label: "CH5/6 R (フォーン)", type: "ts", dir: "in" },
            ],
          },
        ],
        cablePalette: ["usb", "midi", "ts", "trs", "power"],
        correctConnections: [
          { from: "keyboard.usbOut", to: "host.usbHost", cable: "usb" },
          { from: "host.midiOut", to: "synth.midiIn", cable: "midi" },
          { from: "psu.out", to: "host.dc", cable: "power" },
          { from: "synth.outL", to: "mixer.st56L", cable: "ts" },
          { from: "synth.outR", to: "mixer.st56R", cable: "ts" },
        ],
        explain:
          "USBの世界には『ホスト(親機)』と『デバイス(子機)』の役割分担があり、通信の主導権を握るのはホスト側。USB-MIDIキーボードはデバイスなので、ふだんはホストであるパソコンにつないで初めて演奏データを送れる。キーボード同士やシンセの5ピンMIDI端子に直接つなげないのはこのためで、MIDI USB Hostのような機材が、パソコンの代わりにホスト役を務め、受け取った演奏データを5ピンMIDIに変換して送り出してくれる。キーボード側のUSBは『バスパワー』(USBケーブル経由で電源を受け取る仕組み)で動くことが多く、その電気もMIDI USB Hostが供給するため、MIDI USB Host自体にはDCアダプターでの給電が必要になる。また、つなげるのは特別なドライバーを入れなくても動く『クラスコンプライアント』のUSB機器に限られるとされるので、手持ちのキーボードが対応しているかを事前に確認しておこう。MIDI INは、ほかのMIDI機器の演奏データを合流(マージ)させたいときに使う端子なので、今回は空けておく。minilogue xdはステレオで出力できるため、ミキサーのステレオチャンネルにL・Rそろえてつなぐと、エフェクトの広がりも含めて再現できる。",
      },
    },
    {
      id: "dvs_turntable_serato",
      order: 87,
      title: "DVS(デジタル・バイナル・システム)でレコードを使ってPCの音源を操作する(Technics SL-1200MK7 ×2 + Rane Seventy-Two MKII)",
      category: "配線問題",
      hook: "ターンテーブルに乗っているのは、音楽ではなく『信号』が刻まれた特殊なレコード。針で読み取ったその信号でPCの曲を前後に動かす——レコードの手触りのままデジタル音源を操る『DVS』の配線を組もう。",
      patch: {
        scenario:
          "クラブで、DJソフト「Serato DJ Pro」のDVS機能を使ってプレイしたい。2台のターンテーブル「Technics SL-1200MK7」には、それぞれタイムコード(位置と速度を表す信号)が刻まれたコントロール用レコード「Serato Control Vinyl」を乗せる。1台目のPHONO OUT(RCA)をDJミキサー「Rane Seventy-Two MKII」のCH1 PHONO/LINE入力(RCA)へ、2台目のPHONO OUTをCH2 PHONO/LINE入力(RCA)へ接続する(入力の切り替えスイッチはPHONOにしておく)。Seventy-Two MKIIのUSB 1端子とMacBook ProをUSBケーブルで接続する。Seventy-Two MKIIのMAIN OUT L・R(XLR)を、会場のパワードスピーカー「QSC K12.2」2台のINPUT(XLR/TRSコンボ)へ接続しよう。",
        equipment: [
          { id: "tt1", label: "Technics SL-1200MK7(1台目)", icon: "1200MK7", ports: [{ id: "out", label: "PHONO OUT (RCA)", type: "rca", dir: "out" }] },
          { id: "tt2", label: "Technics SL-1200MK7(2台目)", icon: "1200MK7", ports: [{ id: "out", label: "PHONO OUT (RCA)", type: "rca", dir: "out" }] },
          {
            id: "mixer",
            label: "Rane Seventy-Two MKII(DJミキサー)",
            icon: "Rane72",
            ports: [
              { id: "ch1In", label: "CH1 PHONO/LINE IN (RCA)", type: "rca", dir: "in" },
              { id: "ch2In", label: "CH2 PHONO/LINE IN (RCA)", type: "rca", dir: "in" },
              { id: "usb1", label: "USB 1", type: "usb", dir: "out" },
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(Serato DJ Pro起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
          { id: "spkL", label: "QSC K12.2(左)", icon: "K12.2", ports: [{ id: "in", label: "INPUT (XLR/TRSコンボ)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "QSC K12.2(右)", icon: "K12.2", ports: [{ id: "in", label: "INPUT (XLR/TRSコンボ)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["rca", "usb", "xlr", "trs", "optical"],
        correctConnections: [
          { from: "tt1.out", to: "mixer.ch1In", cable: "rca" },
          { from: "tt2.out", to: "mixer.ch2In", cable: "rca" },
          { from: "mixer.usb1", to: "pc.usbin", cable: "usb" },
          { from: "mixer.mainL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.mainR", to: "spkR.in", cable: "xlr" },
        ],
        explain:
          "DVSでは、ターンテーブルから出てくるのは曲の音ではなく、コントロール用レコードに刻まれたタイムコードの音(ピーという信号音)。ミキサーはそれを内蔵のオーディオインターフェースでデジタル化してUSB経由でPCへ送り、Serato DJ Proが『いまレコードのどの位置を、どの速さで、どちら向きに回しているか』を読み取って、PC内の曲を同じように再生・スクラッチする。PCで鳴らした曲の音は、同じUSBケーブルを通ってミキサーに戻り、各チャンネルのフェーダーやクロスフェーダーを通ってMAIN OUTから出ていく。つまり、ターンテーブル→ミキサー→PC→ミキサー→スピーカーと、USBケーブル1本の中で音が往復している。ターンテーブルの針から出る信号はとても小さいため、ミキサーの入力はPHONO(レコード用の増幅回路を通す設定)にしておく必要がある。LINEのままだと信号が小さすぎて、タイムコードを正しく読み取れないことがある。また、ターンテーブルのRCAケーブルの近くにある細いアース線は、ミキサーのアース端子(GND)にネジで留めておこう。外したままだと、ブーンというハムノイズが乗ったり、タイムコードの読み取りが不安定になったりする原因になる。メインの出力は、会場のスピーカーまで距離があっても雑音に強いXLR(バランス接続)で送るのが基本。",
      },
    },
    {
      id: "volca_sync_chain",
      order: 88,
      title: "Korg volcaシリーズをSYNC端子でつないでテンポを合わせる(volca beats + volca bass)",
      category: "配線問題",
      hook: "MIDI端子にはINしかない小さなシンセ2台。それでも、片方のスタートボタンを押すだけで2台が同じテンポで走り出す——3.5mmのミニケーブル1本で済む『アナログシンク』の配線を組もう。",
      patch: {
        scenario:
          "リズムマシン「Korg volca beats」と、ベースシンセ「Korg volca bass」を同じテンポで同時に再生したい。volca beatsをテンポの基準(マスター)にして、volca beatsのSYNC OUT(3.5mmモノラルミニ)から、volca bassのSYNC IN(3.5mmモノラルミニ)へ、モノラルのミニケーブルで接続する。それぞれの音は、ライン出力を兼ねたヘッドホン端子(3.5mmステレオミニ)から、ミニ→フォーンの変換ケーブルを使って、オーディオインターフェース「Focusrite Scarlett 4i4(第4世代)」のLINE INPUT 3(volca beats)・LINE INPUT 4(volca bass)へ接続する。Scarlett 4i4とMacBook ProはUSBケーブルで接続しよう。",
        equipment: [
          {
            id: "beats",
            label: "Korg volca beats(マスター)",
            icon: "v.beats",
            ports: [
              { id: "syncIn", label: "SYNC IN (3.5mmモノラルミニ)", type: "cv", dir: "in" },
              { id: "syncOut", label: "SYNC OUT (3.5mmモノラルミニ)", type: "cv", dir: "out" },
              { id: "phones", label: "PHONES (3.5mmステレオミニ・ライン出力兼用)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "bass",
            label: "Korg volca bass(スレーブ)",
            icon: "v.bass",
            ports: [
              { id: "syncIn", label: "SYNC IN (3.5mmモノラルミニ)", type: "cv", dir: "in" },
              { id: "syncOut", label: "SYNC OUT (3.5mmモノラルミニ)", type: "cv", dir: "out" },
              { id: "phones", label: "PHONES (3.5mmステレオミニ・ライン出力兼用)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4(第4世代)",
            icon: "4i4",
            ports: [
              { id: "line3", label: "LINE INPUT 3", type: "trs", dir: "in" },
              { id: "line4", label: "LINE INPUT 4", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "MacBook Pro(DAW起動済み)", icon: "MacBk", ports: [{ id: "usbin", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["cv", "ts", "trs", "midi", "usb"],
        correctConnections: [
          { from: "beats.syncOut", to: "bass.syncIn", cable: "cv" },
          { from: "beats.phones", to: "interface.line3", cable: "ts" },
          { from: "bass.phones", to: "interface.line4", cable: "ts" },
          { from: "interface.usb", to: "pc.usbin", cable: "usb" },
        ],
        explain:
          "volcaシリーズのSYNC端子は、MIDIクロックのような細かい情報ではなく、一定の間隔で『トン、トン』と電気のパルス(短い電圧の合図)を送るだけのシンプルな仕組み。スレーブ側はこのパルスが来るたびにシーケンスを先へ進めるので、マスターのテンポを変えるとスレーブも自動的に追従する。SYNC INにケーブルが挿さっていると、スレーブは自分のテンポではなく外からのパルスに従う。つなぐ向きは必ず『マスターのOUT→スレーブのIN』。逆にすると、どちらも相手の合図を待つ形になり、うまく同期しない。ここで使うケーブルは、モジュラーシンセのパッチに使うものと同じ3.5mmのモノラルミニケーブルでよい。ステレオのミニケーブルでは正しく動かないことがあるとされるので注意しよう。音声は、ヘッドホン端子がライン出力を兼ねているため、ここからオーディオインターフェースへ送る。ヘッドホン端子は音量つまみの影響を受けるので、録音前に2台の音量を揃え、オーディオインターフェース側の入力で音が割れていないかを確認しておこう。3台目のvolcaを足したい場合は、volca bassのSYNC OUTから3台目のSYNC INへとつないでいけば、数珠つなぎ(デイジーチェーン)で同期できる。",
      },
    },
    {
      id: "wireless_lav_camera",
      order: 89,
      title: "動画撮影用のワイヤレスピンマイクをカメラにつなぐ(RØDE Wireless PRO + Sony α7 IV)",
      category: "配線問題",
      hook: "カメラ内蔵のマイクでは、少し離れた出演者の声は部屋の響きに埋もれてしまう。服に付ける小さなピンマイクの声を、電波でカメラまで届ける——インタビュー動画の定番配線を組もう。",
      patch: {
        scenario:
          "アーティストのインタビュー動画を、2人の対談形式で撮影したい。ワイヤレスマイク「RØDE Wireless PRO」は、送信機(TX)2台と受信機(RX)1台のセット。出演者それぞれの服に付けるピンマイク(ラベリアマイク)「RØDE Lavalier II」を、TX1・TX2の3.5mm入力(ロック機構付き)へ挿す。TXとRXの間は電波(2.4GHz帯のデジタル無線)で飛ばすので、ケーブルはいらない。RXの3.5mm出力から、ミラーレスカメラ「Sony α7 IV」のMIC端子(3.5mmステレオミニ)へ、3.5mmのミニケーブルで接続する。撮影中に声を確認できるよう、α7 IVのヘッドホン端子(3.5mmステレオミニ)にモニター用ヘッドホン「Sony MDR-7506」を接続しよう。",
        equipment: [
          { id: "lav1", label: "RØDE Lavalier II(出演者A)", icon: "Lav II", ports: [{ id: "out", label: "3.5mm TRS", type: "trs", dir: "out" }] },
          { id: "lav2", label: "RØDE Lavalier II(出演者B)", icon: "Lav II", ports: [{ id: "out", label: "3.5mm TRS", type: "trs", dir: "out" }] },
          { id: "tx1", label: "Wireless PRO 送信機 TX1", icon: "TX1", ports: [{ id: "in", label: "MIC IN (3.5mm・ロック付き)", type: "trs", dir: "in" }] },
          { id: "tx2", label: "Wireless PRO 送信機 TX2", icon: "TX2", ports: [{ id: "in", label: "MIC IN (3.5mm・ロック付き)", type: "trs", dir: "in" }] },
          {
            id: "rx",
            label: "Wireless PRO 受信機 RX(カメラのシューに装着)",
            icon: "RX",
            ports: [{ id: "out", label: "OUTPUT (3.5mm・ヘッドホン出力兼用)", type: "trs", dir: "out" }],
          },
          {
            id: "camera",
            label: "Sony α7 IV",
            icon: "α7 IV",
            ports: [
              { id: "micIn", label: "MIC (3.5mmステレオミニ)", type: "trs", dir: "in" },
              { id: "hpOut", label: "ヘッドホン (3.5mmステレオミニ)", type: "trs", dir: "out" },
            ],
          },
          { id: "headphones", label: "Sony MDR-7506", icon: "7506", ports: [{ id: "in", label: "3.5mmステレオミニ", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["trs", "ts", "xlr", "usb", "hdmi"],
        correctConnections: [
          { from: "lav1.out", to: "tx1.in", cable: "trs" },
          { from: "lav2.out", to: "tx2.in", cable: "trs" },
          { from: "rx.out", to: "camera.micIn", cable: "trs" },
          { from: "camera.hpOut", to: "headphones.in", cable: "trs" },
        ],
        explain:
          "ピンマイクは口元から20cm前後の近い位置で声を拾えるため、カメラが離れていても、部屋の反響や周りの雑音が少ないはっきりした声になる。Wireless PROのRXには、2台のTXの声を1つにまとめて左右両方に出す『マージ(Merged)』と、TX1を左・TX2を右に分けて出す『スプリット(Split)』のモードがある。対談ではスプリットにしておくと、あとから編集でそれぞれの声の音量を別々に調整できる。カメラのMIC端子は、本来カメラ用の小さなマイクを想定した入力なので、カメラ側の録音レベルを上げすぎると、カメラ内部の増幅回路のノイズ(サー音)が目立ちやすい。一般には、RX側の出力をある程度上げて、カメラ側の録音レベルは控えめにするほうがノイズを抑えやすいとされる。撮影前に必ずヘッドホンで、声が割れていないか、ノイズが乗っていないかを確かめよう。RXの3.5mm端子はヘッドホン出力を兼ねているが、今回はカメラへの出力に使っているので、モニターはカメラのヘッドホン端子から行う。こうすると『実際にカメラに録音されている音』を聞けるので、ケーブルの挿し忘れや接触不良にも気づける。また、Wireless PROのTXは本体の内部メモリーにも録音できるので、無線が途切れたときの保険として内部録音もオンにしておくと安心。",
      },
    },
    {
      id: "four_cable_method_hx_stomp",
      order: 90,
      title: "4ケーブルメソッドでマルチエフェクターをアンプの前と後ろに挟む(Line 6 HX Stomp + Marshall JVM410H)",
      category: "配線問題",
      hook: "ワウや歪みペダルはアンプの『前』、ディレイやリバーブはアンプの歪みの『後ろ』——1台のマルチエフェクターで両方をこなすために、4本のケーブルで行って帰って、また行って帰る配線を組もう。",
      patch: {
        scenario:
          "真空管アンプヘッド「Marshall JVM410H」の歪みを活かしつつ、マルチエフェクター「Line 6 HX Stomp」1台で、オーバードライブはアンプの前に、ディレイとリバーブはアンプのFXループ(プリアンプとパワーアンプの間)にかけたい。①ギター「Fender Stratocaster」のOUTPUTを、HX StompのINPUT L/MONOへ接続する。②HX StompのSENDから、JVM410HのINPUTへ接続する。③JVM410HのFX SENDから、HX StompのRETURN L/MONOへ接続する。④HX StompのOUTPUT L/MONOから、JVM410HのFX RETURNへ接続する。JVM410Hのスピーカー出力(16Ω)は、キャビネット「Marshall 1960A」の入力へスピーカーケーブルで接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Stratocaster", icon: "Strat", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "stomp",
            label: "Line 6 HX Stomp(マルチエフェクター)",
            icon: "HXStomp",
            ports: [
              { id: "inL", label: "INPUT L/MONO (TS)", type: "ts", dir: "in" },
              { id: "send", label: "SEND", type: "ts", dir: "out" },
              { id: "returnL", label: "RETURN L/MONO (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "OUTPUT L/MONO (TS)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "amp",
            label: "Marshall JVM410H(ギターアンプヘッド)",
            icon: "JVM410H",
            ports: [
              { id: "guitarIn", label: "INPUT (TS)", type: "ts", dir: "in" },
              { id: "fxSend", label: "FX SEND (TS)", type: "ts", dir: "out" },
              { id: "fxReturn", label: "FX RETURN (TS)", type: "ts", dir: "in" },
              { id: "spkOut", label: "SPEAKER OUT (16Ω)", type: "speaker", dir: "out" },
            ],
          },
          { id: "cab", label: "Marshall 1960A(4×12キャビネット)", icon: "1960A", ports: [{ id: "in", label: "INPUT (16Ω MONO)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "speaker", "xlr", "midi"],
        correctConnections: [
          { from: "guitar.out", to: "stomp.inL", cable: "ts" },
          { from: "stomp.send", to: "amp.guitarIn", cable: "ts" },
          { from: "amp.fxSend", to: "stomp.returnL", cable: "ts" },
          { from: "stomp.outL", to: "amp.fxReturn", cable: "ts" },
          { from: "amp.spkOut", to: "cab.in", cable: "speaker" },
        ],
        explain:
          "4ケーブルメソッド(4CM)は、マルチエフェクターの中の信号の流れを、アンプのプリアンプ部(歪みを作る回路)の前後で2つに分ける配線。HX Stompの中では『INPUT→オーバードライブ→SEND』と『RETURN→ディレイ・リバーブ→OUTPUT』の2つの道を作っておき、SENDから出た音がアンプのプリアンプで歪み、FX SENDから戻ってきた歪んだ音に空間系のエフェクトをかけてから、FX RETURN経由でパワーアンプへ送り込む。ディレイやリバーブを歪みの前にかけると、響きまで一緒に歪んで濁った音になりやすいが、この配線なら残響がきれいなまま残る。HX Stomp側では、エフェクトの並びの途中に『FX Loop』ブロックを置き、そこを境に前段と後段を分ける設定が必要になる。ここで紹介したケーブルの番号①〜④のどこかを取り違えると、音が出なかったり、ハウリングのような発振が起きたりするので、1本ずつ確認しながらつなごう。また、アンプのINPUTはギターと同じ小さな信号、FX SEND/RETURNはアンプによってはもっと大きなライン信号を想定していることがあるため、HX Stompの設定で、SEND/RETURNと出力のレベルを、つなぐ先に合わせて切り替えておく。真空管アンプは、スピーカーをつながずに電源を入れると故障の原因になるため、キャビネットへのスピーカーケーブルは、電源を入れる前に必ず接続しておこう。",
      },
    },
    {
      id: "speaker_impedance_two_cabs",
      order: 91,
      title: "ギターアンプヘッドに2台のキャビネットをつなぐ(スピーカーのインピーダンス合わせ / Marshall JCM800 2203 + 1936 ×2)",
      category: "配線問題",
      hook: "スピーカー出力が2つあるから、キャビネットを2台挿すだけ——その前に、アンプ背面の『Ω(オーム)』のつまみを確認しよう。真空管アンプを長持ちさせる、インピーダンス合わせの配線を組もう。",
      patch: {
        scenario:
          "ライブハウスで、真空管アンプヘッド「Marshall JCM800 2203(100W)」に、2×12インチのキャビネット「Marshall 1936」を2台つないで鳴らしたい。2203の背面には、スピーカー出力(6.3mmフォーン)が2つと、インピーダンス(Ω)の切り替えスイッチ(16Ω / 8Ω / 4Ω)がある。1936はモノラルで使うと8Ωのキャビネット。ギター「Gibson Les Paul Standard」のOUTPUTを、2203のフロントパネルのINPUT(HIGH)へ接続する。2203のスピーカー出力1をキャビネットAのMONO入力へ、スピーカー出力2をキャビネットBのMONO入力へ、スピーカーケーブルで接続しよう(インピーダンススイッチは4Ωに合わせる)。",
        equipment: [
          { id: "guitar", label: "Gibson Les Paul Standard", icon: "LP", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "amp",
            label: "Marshall JCM800 2203(100Wヘッド・インピーダンス 4Ωに設定)",
            icon: "2203",
            ports: [
              { id: "inHigh", label: "INPUT HIGH (TS)", type: "ts", dir: "in" },
              { id: "inLow", label: "INPUT LOW (TS)", type: "ts", dir: "in" },
              { id: "spk1", label: "SPEAKER OUT 1", type: "speaker", dir: "out" },
              { id: "spk2", label: "SPEAKER OUT 2", type: "speaker", dir: "out" },
            ],
          },
          { id: "cabA", label: "Marshall 1936 キャビネットA(MONO 8Ω)", icon: "1936", ports: [{ id: "mono", label: "MONO INPUT (8Ω)", type: "speaker", dir: "in" }] },
          { id: "cabB", label: "Marshall 1936 キャビネットB(MONO 8Ω)", icon: "1936", ports: [{ id: "mono", label: "MONO INPUT (8Ω)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["ts", "speaker", "trs", "xlr"],
        correctConnections: [
          { from: "guitar.out", to: "amp.inHigh", cable: "ts" },
          { from: "amp.spk1", to: "cabA.mono", cable: "speaker" },
          { from: "amp.spk2", to: "cabB.mono", cable: "speaker" },
        ],
        explain:
          "インピーダンス(Ω)は、スピーカーが電気の流れにどれだけ『抵抗』するかを表す数字。真空管アンプは、出力トランス(真空管の出力をスピーカー向けに変換する部品)の設定と、つないだスピーカーのインピーダンスが合っているときに、いちばん安全かつ本来の音で鳴る。2203の2つのスピーカー出力は内部で『並列』につながっているため、8Ωのキャビネットを2台つなぐと、合計は8Ω ÷ 2 = 4Ωになる。だからインピーダンススイッチは4Ωに合わせる。1台だけつなぐなら8Ω、16Ωのキャビネット2台なら8Ωに合わせる、という考え方だ。設定がずれるとアンプに負担がかかり、特に『アンプの設定よりスピーカーのインピーダンスが高い』状態や、スピーカーをつながない状態で音を出すと、出力トランスや真空管を傷める原因になるとされる。また、ここで使うのは楽器用のシールドケーブルではなく、太い線でできたスピーカーケーブル。見た目は同じ6.3mmのフォーンプラグでも、シールドケーブルを代わりに使うと、大きな電流で線が発熱したり、音が細くなったりするので使い分けよう。INPUTのHIGHとLOWは入力の感度の違いで、通常のギターはHIGH、出力の大きなピックアップやエフェクターの影響で歪みすぎる場合はLOWを使う。なお、古い年代の2203には4Ωと8Ωしか選べない個体もあるとされるので、実際の機材では背面の表示を確認しよう。",
      },
    },
    {
      id: "midi_foot_controller_pedals",
      order: 92,
      title: "MIDIフットコントローラーで2台のエフェクターの設定を一度に切り替える(Morningstar MC6 MkII + Strymon TimeLine / BigSky)",
      category: "配線問題",
      hook: "曲のサビでディレイとリバーブの設定を同時に変えたい。でも両足で別々のペダルを踏むのは無理——フットスイッチ1つで2台の『記憶された設定』を呼び出す、MIDIの配線を組もう。",
      patch: {
        scenario:
          "ギタリストの足元で、ディレイ「Strymon TimeLine」とリバーブ「Strymon BigSky」の設定(プリセット)を、MIDIフットコントローラー「Morningstar MC6 MkII」のスイッチ1つで同時に切り替えたい。MIDIは、MC6 MkIIのMIDI OUT(5ピンDIN)からTimeLineのMIDI IN(5ピンDIN)へ接続し、TimeLineのMIDI OUT(THRUとして動作する設定にする)からBigSkyのMIDI IN(5ピンDIN)へ接続する。音の信号は、ギター「Fender Telecaster」のOUTPUTからTimeLineのINPUT L、TimeLineのOUTPUT LからBigSkyのINPUT L、BigSkyのOUTPUT Lからギターアンプ「Fender '65 Deluxe Reverb」のINPUT 1へ、すべてモノラルで接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Telecaster", icon: "Tele", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "mc6",
            label: "Morningstar MC6 MkII(MIDIフットコントローラー)",
            icon: "MC6",
            ports: [
              { id: "midiIn", label: "MIDI IN (5ピンDIN)", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT (5ピンDIN)", type: "midi", dir: "out" },
            ],
          },
          {
            id: "timeline",
            label: "Strymon TimeLine(ディレイ / MIDIチャンネル1)",
            icon: "TimeLine",
            ports: [
              { id: "inL", label: "INPUT L (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "OUTPUT L (TS)", type: "ts", dir: "out" },
              { id: "midiIn", label: "MIDI IN (5ピンDIN)", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT/THRU (5ピンDIN)", type: "midi", dir: "out" },
            ],
          },
          {
            id: "bigsky",
            label: "Strymon BigSky(リバーブ / MIDIチャンネル2)",
            icon: "BigSky",
            ports: [
              { id: "inL", label: "INPUT L (TS)", type: "ts", dir: "in" },
              { id: "outL", label: "OUTPUT L (TS)", type: "ts", dir: "out" },
              { id: "midiIn", label: "MIDI IN (5ピンDIN)", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT/THRU (5ピンDIN)", type: "midi", dir: "out" },
            ],
          },
          { id: "amp", label: "Fender '65 Deluxe Reverb(ギターアンプ)", icon: "Deluxe", ports: [{ id: "in1", label: "INPUT 1 (TS)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "midi", "trs", "usb", "speaker"],
        correctConnections: [
          { from: "mc6.midiOut", to: "timeline.midiIn", cable: "midi" },
          { from: "timeline.midiOut", to: "bigsky.midiIn", cable: "midi" },
          { from: "guitar.out", to: "timeline.inL", cable: "ts" },
          { from: "timeline.outL", to: "bigsky.inL", cable: "ts" },
          { from: "bigsky.outL", to: "amp.in1", cable: "ts" },
        ],
        explain:
          "この配線では、ケーブルが『音の道』と『命令の道』の2系統に分かれている。音の道はギター→ディレイ→リバーブ→アンプとふつうのエフェクターと同じ順番。命令の道はMIDIで、MC6 MkIIのスイッチを踏むと『プログラムチェンジ(=何番の設定を呼び出すかという番号の命令)』が送られる。MIDIには1〜16のチャンネル(=宛先の番号)があり、TimeLineをチャンネル1、BigSkyをチャンネル2に設定しておけば、MC6 MkII側で『スイッチAを踏んだらチャンネル1に5番、チャンネル2に12番』のように、2台に別々の番号を同時に送れる。TimeLineのMIDI OUTは、受け取ったMIDIをそのまま次へ流す『THRU』として働くように設定を切り替えられるため、1本のMIDIの流れで2台を数珠つなぎ(デイジーチェーン)にできる。この設定を忘れると、BigSkyにだけ命令が届かない。MIDIケーブルは音を運ばないので、ここを音のケーブルと取り違えないようにしよう。なお、MC6 MkIIやStrymonの新しいモデルにはTRS端子(6.3mmや3.5mm)でMIDIを送るものもあるが、TRS MIDIは機種によって配線の規格(タイプA/タイプB)が違うことがあるため、使う場合は説明書で対応を確認しよう。MC6 MkIIは9Vの電源アダプターで動かす(必要な電流は説明書で確認する)ため、パワーサプライの空き出力も事前に確保しておく。",
      },
    },
    {
      id: "multiport_midi_interface",
      order: 93,
      title: "マルチポートMIDIインターフェースで複数のハードシンセをDAWから個別に鳴らす(iConnectivity mioXM + Yamaha DX7 + Sequential Prophet-5)",
      category: "配線問題",
      hook: "USB端子のない昔のシンセを何台も、DAWの打ち込みでそれぞれ別のフレーズを鳴らしたい——MIDIの出入り口をいくつも持つ『マルチポートMIDIインターフェース』を中心に、行きと帰りのMIDIを配線しよう。",
      patch: {
        scenario:
          "USB端子を持たないハードウェアシンセ「Yamaha DX7」と「Sequential Prophet-5(Rev4)」を、DAW(Logic Pro)から別々に鳴らしたい。DX7の鍵盤は、DAWへの打ち込み用のキーボードとしても使う。MIDIインターフェース「iConnectivity mioXM」は、5ピンDINのMIDI入出力を4系統ずつ持つ。DX7のMIDI OUTからmioXMのMIDI IN 1へ、mioXMのMIDI OUT 1からDX7のMIDI INへ、mioXMのMIDI OUT 2からProphet-5のMIDI INへ接続する。mioXMはUSBでMac Studioへ接続する。音声は、DX7のOUTPUT(モノラル)をオーディオインターフェース「Focusrite Scarlett 4i4(第4世代)」のLINE INPUT 3へ、Prophet-5のAUDIO OUT(モノラル)をLINE INPUT 4へ接続し、Scarlett 4i4もUSBでMac Studioへ接続しよう。",
        equipment: [
          {
            id: "dx7",
            label: "Yamaha DX7",
            icon: "DX7",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" },
              { id: "out", label: "OUTPUT (モノラル)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "p5",
            label: "Sequential Prophet-5(Rev4)",
            icon: "P-5",
            ports: [
              { id: "midiIn", label: "MIDI IN", type: "midi", dir: "in" },
              { id: "out", label: "AUDIO OUT (モノラル)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "mio",
            label: "iConnectivity mioXM(4×4 MIDIインターフェース)",
            icon: "mioXM",
            ports: [
              { id: "in1", label: "MIDI IN 1 (5ピンDIN)", type: "midi", dir: "in" },
              { id: "in2", label: "MIDI IN 2 (5ピンDIN)", type: "midi", dir: "in" },
              { id: "out1", label: "MIDI OUT 1 (5ピンDIN)", type: "midi", dir: "out" },
              { id: "out2", label: "MIDI OUT 2 (5ピンDIN)", type: "midi", dir: "out" },
              { id: "usb", label: "USB (コンピューター接続)", type: "usb", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4(第4世代)",
            icon: "4i4",
            ports: [
              { id: "line3", label: "LINE INPUT 3", type: "trs", dir: "in" },
              { id: "line4", label: "LINE INPUT 4", type: "trs", dir: "in" },
              { id: "usb", label: "USB", type: "usb", dir: "out" },
            ],
          },
          {
            id: "pc",
            label: "Mac Studio(Logic Pro起動済み)",
            icon: "Mac",
            ports: [
              { id: "usb1", label: "USB-C 1", type: "usb", dir: "in" },
              { id: "usb2", label: "USB-C 2", type: "usb", dir: "in" },
            ],
          },
        ],
        cablePalette: ["midi", "ts", "trs", "usb", "xlr"],
        correctConnections: [
          { from: "dx7.midiOut", to: "mio.in1", cable: "midi" },
          { from: "mio.out1", to: "dx7.midiIn", cable: "midi" },
          { from: "mio.out2", to: "p5.midiIn", cable: "midi" },
          { from: "mio.usb", to: "pc.usb1", cable: "usb" },
          { from: "dx7.out", to: "interface.line3", cable: "ts" },
          { from: "p5.out", to: "interface.line4", cable: "ts" },
          { from: "interface.usb", to: "pc.usb2", cable: "usb" },
        ],
        explain:
          "MIDIの1本のケーブルで送れるのは16チャンネル(=宛先の番号)まで。マルチポートMIDIインターフェースは、その出入り口(ポート)を複数持っているので、DAWからは『OUT 1はDX7用』『OUT 2はProphet-5用』と、ポートごとに別の機材として扱える。シンセ側のMIDIチャンネルが同じ1番のままでも、ポートが分かれていれば混線しないのが大きな利点。DX7はMIDIの入り口と出口を両方つなぐのがポイントで、鍵盤を弾いた情報はMIDI OUT→mioXMのIN 1→DAWへ届いて録音され、DAWで打ち込んだフレーズはmioXMのOUT 1→DX7のMIDI INへ届いて鳴る。Prophet-5は今回は音源として鳴らすだけなので、行きのMIDI INだけでよい。注意したいのは『音が2回鳴る』現象。DX7の鍵盤を弾くと、本体の音源が直接鳴るのに加えて、DAWを経由して戻ってきたMIDIでも鳴ってしまうことがある。シンセ側に『ローカルコントロール(=鍵盤と本体の音源のつながり)』をオフにする設定がある機種ではオフにし、ない機種ではDAW側で、弾いているトラックのMIDIを同じシンセへ送り返さない設定にしよう。また、MIDIケーブルは音を運ばないので、シンセの音はオーディオインターフェースへ別に配線する必要がある。mioXMはUSBクラスコンプライアント(=専用ドライバーなしでコンピューターが認識できる規格)に対応しているとされ、Macにつなぐだけで各ポートが一覧に表示される。",
      },
    },
    {
      id: "hybrid_drum_trigger_spdsx",
      order: 94,
      title: "生ドラムにトリガーを付けてサンプルを重ねるハイブリッドドラムを組む(Roland RT-30K / RT-30HR + SPD-SX PRO)",
      category: "配線問題",
      hook: "生のキックとスネアはそのままに、叩いた瞬間に打ち込みのような重たいサンプルも同時に鳴らしたい——ドラムの胴に取り付ける小さな振動センサーを、サンプリングパッドの外部入力へつなぐ配線を組もう。",
      patch: {
        scenario:
          "ライブで、生ドラムのキックとスネアに、電子音のサンプルを重ねて鳴らしたい。キックのフープ(ヘッドを留める枠)に取り付けたアコースティックドラム用トリガー「Roland RT-30K」の出力を、サンプリングパッド「Roland SPD-SX PRO」のTRIG IN 1/2(6.3mm TRS)へ接続する。スネアに取り付けたデュアルトリガー(ヘッドとリムの2つのセンサーを持つ)「Roland RT-30HR」の出力は、TRIG IN 3/4(6.3mm TRS)へ接続する。どちらのトリガーも付属のTRS(ステレオ)ケーブルを使う。SPD-SX PROのMASTER OUT L/R(バランスTRS)は、デジタルミキサー「Yamaha DM3」のINPUT 15・16(XLR/TRSコンボ)へ、TRSケーブルで接続しよう。",
        equipment: [
          { id: "kickTrig", label: "Roland RT-30K(キック用トリガー)", icon: "RT-30K", ports: [{ id: "out", label: "OUTPUT (6.3mm)", type: "trs", dir: "out" }] },
          { id: "snareTrig", label: "Roland RT-30HR(スネア用デュアルトリガー)", icon: "RT-30HR", ports: [{ id: "out", label: "OUTPUT (6.3mm)", type: "trs", dir: "out" }] },
          {
            id: "spd",
            label: "Roland SPD-SX PRO(サンプリングパッド)",
            icon: "SPD-SX",
            ports: [
              { id: "trig12", label: "TRIG IN 1/2 (TRS)", type: "trs", dir: "in" },
              { id: "trig34", label: "TRIG IN 3/4 (TRS)", type: "trs", dir: "in" },
              { id: "masterL", label: "MASTER OUT L (バランスTRS)", type: "trs", dir: "out" },
              { id: "masterR", label: "MASTER OUT R (バランスTRS)", type: "trs", dir: "out" },
              { id: "midiOut", label: "MIDI OUT", type: "midi", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha DM3(デジタルミキサー)",
            icon: "DM3",
            ports: [
              { id: "in15", label: "INPUT 15 (XLR/TRSコンボ)", type: "trs", dir: "in" },
              { id: "in16", label: "INPUT 16 (XLR/TRSコンボ)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["trs", "ts", "xlr", "midi", "usb"],
        correctConnections: [
          { from: "kickTrig.out", to: "spd.trig12", cable: "trs" },
          { from: "snareTrig.out", to: "spd.trig34", cable: "trs" },
          { from: "spd.masterL", to: "mixer.in15", cable: "trs" },
          { from: "spd.masterR", to: "mixer.in16", cable: "trs" },
        ],
        explain:
          "アコースティックドラム用トリガーは、ヘッドの振動を電気の合図に変えるセンサーで、音そのものを拾うマイクではない。SPD-SX PROは、その合図を受け取った瞬間に、あらかじめ割り当てておいたサンプル(キックの低音の膨らみやスネアのクラップなど)を鳴らす。SPD-SX PROのトリガー入力は『1/2』『3/4』のように2つの番号が1つの端子にまとまっていて、TRSケーブルの先端(チップ)と中間(リング)に別々の合図を通せる。RT-30HRのようなデュアルトリガーは、ヘッドを叩いたときとリム(枠)を叩いたときで別の合図を出すため、ステレオ(TRS)ケーブルで1本の端子につなぐと、2つのセンサーを別々のサンプルに割り当てられる。モノラル(TS)ケーブルを使うと片方の合図しか届かないので、付属のTRSケーブルを使おう。また、シングルのトリガー2つを1つの端子にまとめたい場合は、Y字に分かれたケーブルを使う方法もある。ライブ前には、SPD-SX PRO側で『どれくらいの強さから反応するか(感度)』や『隣のドラムの振動で誤って鳴らないか(クロストーク)』を必ず調整しよう。特にスネアは、キックやタムの振動を拾って勝手に鳴りやすい。MASTER OUTはバランス出力なので、TRSケーブルでミキサーにつなげば長い距離でもノイズに強い。生ドラムのマイクの音とサンプルの音は、ミキサーで別々のチャンネルとして音量を調整できる。",
      },
    },
    {
      id: "ms20_esp_guitar_synth",
      order: 95,
      title: "ギターの音程でシンセを鳴らす(Korg MS-20 miniの外部信号処理部をパッチする)",
      category: "配線問題",
      hook: "ギターで1音弾くと、その音程どおりにアナログシンセが鳴り、ギターの音そのものもシンセのフィルターで唸る——MS-20 miniに内蔵された『外部信号処理部(ESP)』に、パッチケーブル3本をつないでギターシンセにしよう。",
      patch: {
        scenario:
          "セミモジュラー(=最初から配線済みで、パッチケーブルで配線を変えられる)のアナログシンセ「Korg MS-20 mini」を、エレキギター「Fender Jazzmaster」でコントロールしたい。ギターのOUTPUTを、MS-20 miniのESP部のSIGNAL IN(3.5mm)へ、フォーン→ミニの変換ケーブルで接続する。次に、パッチパネルの中で、ESP部のCV OUTをVCO-1+VCO-2のCV IN(音程を決める電圧の入力)へ、ESP部のTRIG OUTをEG1+EG2のTRIG IN(エンベロープを動かし始める合図の入力)へ、ESP部のAMP OUTをVCF部のEXT SIGNAL IN(フィルターへの外部音声入力)へ、3.5mmのパッチケーブルでつなぐ。MS-20 miniのSIGNAL OUTPUT(3.5mmモノラル)は、ミニ→フォーンのケーブルでオーディオインターフェース「Focusrite Scarlett 4i4(第4世代)」のLINE INPUT 3へ接続しよう。",
        equipment: [
          { id: "guitar", label: "Fender Jazzmaster", icon: "JM", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "esp",
            label: "MS-20 mini:ESP部(外部信号処理部)",
            icon: "ESP",
            ports: [
              { id: "signalIn", label: "SIGNAL IN (3.5mm)", type: "ts", dir: "in" },
              { id: "ampOut", label: "AMP OUT", type: "cv", dir: "out" },
              { id: "bpfOut", label: "BPF OUT", type: "cv", dir: "out" },
              { id: "cvOut", label: "CV OUT", type: "cv", dir: "out" },
              { id: "envOut", label: "ENV OUT", type: "cv", dir: "out" },
              { id: "trigOut", label: "TRIG OUT", type: "cv", dir: "out" },
            ],
          },
          {
            id: "synth",
            label: "MS-20 mini:シンセ部(VCO / VCF / EG)",
            icon: "MS-20",
            ports: [
              { id: "vcoCv", label: "VCO-1+VCO-2 CV IN", type: "cv", dir: "in" },
              { id: "egTrig", label: "EG1+EG2 TRIG IN", type: "cv", dir: "in" },
              { id: "vcfExt", label: "VCF EXT SIGNAL IN", type: "cv", dir: "in" },
              { id: "hpfCutoff", label: "HPF CUTOFF FREQ IN", type: "cv", dir: "in" },
              { id: "out", label: "SIGNAL OUTPUT (3.5mmモノラル)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4(第4世代)",
            icon: "4i4",
            ports: [
              { id: "line3", label: "LINE INPUT 3", type: "trs", dir: "in" },
              { id: "line4", label: "LINE INPUT 4", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["cv", "ts", "trs", "midi", "usb"],
        correctConnections: [
          { from: "guitar.out", to: "esp.signalIn", cable: "ts" },
          { from: "esp.cvOut", to: "synth.vcoCv", cable: "cv" },
          { from: "esp.trigOut", to: "synth.egTrig", cable: "cv" },
          { from: "esp.ampOut", to: "synth.vcfExt", cable: "cv" },
          { from: "synth.out", to: "interface.line3", cable: "ts" },
        ],
        explain:
          "ESP(External Signal Processor)は、外から入ってきた音を分析して、シンセを動かすための電圧に変える回路。ギターの音程を読み取って『この高さの音を出せ』という電圧(CV)に変えてCV OUTから出し、ギターを弾いた瞬間には『音を鳴らし始めろ』という合図(トリガー)をTRIG OUTから出す。CV OUTをVCO(音のもとを作る発振器)の音程の入力へ、TRIG OUTをEG(音の立ち上がりや減衰の形を作る回路)の合図の入力へつなぐと、鍵盤の代わりにギターでシンセを演奏できる。さらに、ESPで増幅したギターの音そのもの(AMP OUT)をVCF(音色を削って変えるフィルター)の外部入力に入れると、ギターの音もシンセの音と一緒にフィルターを通るので、両方が混ざった荒々しい音になる。CV OUTやTRIG OUTは『電圧の合図』で、音として聞くための出力ではない。ここをオーディオインターフェースへつないでも、意図した音にはならないので注意しよう。音程の読み取りは、和音ではなく単音で、はっきり弾いたときに安定しやすい。ESP部のつまみで入力の音量やしきい値(=どの大きさから弾いたとみなすか)を調整し、ギター側は音程の基本となる成分が太く出やすいネック側(=指板に近い側)のピックアップを選ぶと、読み取りが安定しやすいとされる。また、MS-20 miniの入出力は3.5mmのミニ端子なので、ギターや録音機材とつなぐときは変換ケーブルが必要になる。",
      },
    },
    {
      id: "stereo_guitar_rig_two_amps",
      order: 96,
      title: "ステレオ出力のリバーブで2台のギターアンプを左右に鳴らす(Strymon BigSky + Fender '65 Twin Reverb + Vox AC30C2)",
      category: "配線問題",
      hook: "リバーブの響きが、ステージの左のアンプから右のアンプへと広がっていく——ギターはモノラルのまま、空間系エフェクトの『ステレオ出力』から2台のアンプに分ける、ステレオリグの配線を組もう。",
      patch: {
        scenario:
          "ギタリストが、リバーブの広がりを活かすために、2台のギターアンプでステレオのリグを組みたい。ギター「Gibson ES-335」のOUTPUTから、オーバードライブ「Ibanez TS9」のINPUTへ、TS9のOUTPUTから、リバーブ「Strymon BigSky」のINPUT L(MONO)へ接続する(ここまではモノラル)。BigSkyは『モノラルで入力し、ステレオで出力する』設定にしておき、OUTPUT Lをギターアンプ「Fender '65 Twin Reverb」のVIBRATOチャンネルのINPUT 1へ、OUTPUT Rをギターアンプ「Vox AC30C2」のTOP BOOSTチャンネルのHI入力へ、それぞれシールドケーブルで接続しよう。",
        equipment: [
          { id: "guitar", label: "Gibson ES-335", icon: "335", ports: [{ id: "out", label: "OUTPUT (TS)", type: "ts", dir: "out" }] },
          {
            id: "od",
            label: "Ibanez TS9(オーバードライブ)",
            icon: "TS9",
            ports: [
              { id: "in", label: "INPUT", type: "ts", dir: "in" },
              { id: "out", label: "OUTPUT", type: "ts", dir: "out" },
            ],
          },
          {
            id: "bigsky",
            label: "Strymon BigSky(リバーブ / モノラル入力・ステレオ出力に設定)",
            icon: "BigSky",
            ports: [
              { id: "inL", label: "INPUT L (MONO)", type: "ts", dir: "in" },
              { id: "inR", label: "INPUT R", type: "ts", dir: "in" },
              { id: "outL", label: "OUTPUT L", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R", type: "ts", dir: "out" },
            ],
          },
          { id: "twin", label: "Fender '65 Twin Reverb(左)", icon: "Twin", ports: [{ id: "in1", label: "VIBRATO INPUT 1 (TS)", type: "ts", dir: "in" }] },
          { id: "ac30", label: "Vox AC30C2(右)", icon: "AC30", ports: [{ id: "hi", label: "TOP BOOST HI (TS)", type: "ts", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "speaker", "xlr", "midi"],
        correctConnections: [
          { from: "guitar.out", to: "od.in", cable: "ts" },
          { from: "od.out", to: "bigsky.inL", cable: "ts" },
          { from: "bigsky.outL", to: "twin.in1", cable: "ts" },
          { from: "bigsky.outR", to: "ac30.hi", cable: "ts" },
        ],
        explain:
          "ギターそのものはモノラルの楽器なので、歪みペダルまではふつうに1本の流れでつなぎ、左右の違いを作れるリバーブやディレイの段階で初めてステレオに分ける。BigSkyのような空間系エフェクトは、左右の出力で響きの返ってくるタイミングや成分を少しずつ変えているため、2台のアンプを離して置くと、音がステージ全体に包み込むように広がる。INPUT R側には何もつながない。BigSky側の設定を『モノラル入力・ステレオ出力』にしておかないと、片側から音が出なかったり、広がりが出なかったりするので、つなぐ前に説明書どおりに設定を確認しよう。音の性格が違う2台(Fenderのクリーンで硬めの音と、Voxの中域が前に出る音)を組み合わせると、左右の音が混ざってより厚みのある音色になる。一方で、2台のアンプはそれぞれ別のコンセントから電源を取るため、電気の通り道が輪のようになってハムノイズ(ブーンという低い雑音)が出ることがある。その場合は、どちらかの経路にアイソレーション(電気的に切り離す)機能付きのボックスを挟むなどの対策がある。また、PAで2台のアンプにマイクを立てる場合、ライブハウスによってはPAがモノラルで客席に出していることもあるので、左右で大きく違う音にしすぎると、片方の音だけが目立ってしまう。事前にPAスタッフと相談しておくと安心。",
      },
    },
    {
      id: "power_sequencer_pa_rack",
      order: 97,
      title: "PAラックの電源を『順番に入る』コンセントへ振り分ける(TASCAM AV-P250S + Crown XLS 2502)",
      category: "配線問題",
      hook: "PAの電源を入れた瞬間、スピーカーから『ボンッ!』という大きな音——その原因は、機材の電源を入れる順番にある。スイッチ1つで正しい順番を自動で守ってくれる、電源の配線を組もう。",
      patch: {
        scenario:
          "小さなイベントスペースのPAラックを、スイッチ1つで安全に電源の入り切りができるようにしたい。パワーディストリビューター「TASCAM AV-P250S」の背面には、電源を入れると TIMING 1 → TIMING 2 → TIMING 3 の順に少しずつ遅れて電気が流れ、切るときは逆の順番で止まる『連動コンセント(SWITCHED)』がある。アナログミキサー「Yamaha MG12XU」の電源ケーブルをTIMING 1へ、グラフィックイコライザー「dbx 231s」の電源ケーブルをTIMING 2へ、パワーアンプ「Crown XLS 2502」の電源ケーブルをTIMING 3へ挿す。音の信号は、MG12XUのSTEREO OUT L/R(XLR)からdbx 231sのCH1/CH2 INPUT(XLR)へ、dbx 231sのCH1/CH2 OUTPUT(XLR)からXLS 2502のCH1/CH2 INPUT(XLR)へ、XLS 2502のCH1/CH2 OUTPUT(Speakon)からパッシブスピーカー「JBL JRX225」の左右へ接続しよう。",
        equipment: [
          {
            id: "power",
            label: "TASCAM AV-P250S(パワーディストリビューター)",
            icon: "AV-P250S",
            ports: [
              { id: "t1", label: "SWITCHED TIMING 1", type: "power", dir: "out" },
              { id: "t2", label: "SWITCHED TIMING 2", type: "power", dir: "out" },
              { id: "t3", label: "SWITCHED TIMING 3", type: "power", dir: "out" },
              { id: "front", label: "UNSWITCHED (前面・非連動)", type: "power", dir: "out" },
            ],
          },
          {
            id: "mixer",
            label: "Yamaha MG12XU(アナログミキサー)",
            icon: "MG12XU",
            ports: [
              { id: "ac", label: "AC IN (電源)", type: "power", dir: "in" },
              { id: "outL", label: "STEREO OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "outR", label: "STEREO OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "eq",
            label: "dbx 231s(2ch グラフィックEQ)",
            icon: "231s",
            ports: [
              { id: "ac", label: "AC IN (電源)", type: "power", dir: "in" },
              { id: "in1", label: "CH1 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "CH2 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "out1", label: "CH1 OUTPUT (XLR)", type: "xlr", dir: "out" },
              { id: "out2", label: "CH2 OUTPUT (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "amp",
            label: "Crown XLS 2502(パワーアンプ)",
            icon: "XLS2502",
            ports: [
              { id: "ac", label: "AC IN (電源)", type: "power", dir: "in" },
              { id: "in1", label: "CH1 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "CH2 INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "out1", label: "CH1 OUTPUT (Speakon)", type: "speaker", dir: "out" },
              { id: "out2", label: "CH2 OUTPUT (Speakon)", type: "speaker", dir: "out" },
            ],
          },
          { id: "spkL", label: "JBL JRX225(左)", icon: "JRX225", ports: [{ id: "in", label: "INPUT (Speakon)", type: "speaker", dir: "in" }] },
          { id: "spkR", label: "JBL JRX225(右)", icon: "JRX225", ports: [{ id: "in", label: "INPUT (Speakon)", type: "speaker", dir: "in" }] },
        ],
        cablePalette: ["power", "xlr", "speaker", "trs", "ts"],
        correctConnections: [
          { from: "power.t1", to: "mixer.ac", cable: "power" },
          { from: "power.t2", to: "eq.ac", cable: "power" },
          { from: "power.t3", to: "amp.ac", cable: "power" },
          { from: "mixer.outL", to: "eq.in1", cable: "xlr" },
          { from: "mixer.outR", to: "eq.in2", cable: "xlr" },
          { from: "eq.out1", to: "amp.in1", cable: "xlr" },
          { from: "eq.out2", to: "amp.in2", cable: "xlr" },
          { from: "amp.out1", to: "spkL.in", cable: "speaker" },
          { from: "amp.out2", to: "spkR.in", cable: "speaker" },
        ],
        explain:
          "PAの電源の基本ルールは『入れるときは音の上流(ミキサー)から順に、パワーアンプは最後』『切るときはパワーアンプを最初に』。ミキサーやイコライザーは、電源が入った瞬間や切れた瞬間に、出力から『ポン』という短い電気の揺れが出ることがある。このときパワーアンプがすでに動いていると、その揺れを大きく増幅してスピーカーへ送ってしまい、『ボンッ!』という大きな音でスピーカーを傷める原因になる。AV-P250Sの連動コンセントは、電源を入れるとTIMING 1→2→3の順に、それぞれ数秒ずつ遅れて電気を流し、切るときは3→2→1の順に止めてくれる。だから、パワーアンプのように最後に入れて最初に切りたい機材をTIMING 3へ、最初に入れたいミキサーをTIMING 1へつなぐ。前面の非連動コンセントは、本体のスイッチに関係なく電気が流れるため、スマートフォンの充電などに使い、PAの機材はつながないようにする。パワーアンプは電源を入れた瞬間に大きな電流が流れやすいので、全部の機材が同時に入るとブレーカーが落ちることもあるが、順番に入れることでこうした負担も分散できる。ただし、1台のパワーディストリビューターで使える電気の量には上限(AV-P250Sは15Aのブレーカー付き)があるため、大きなパワーアンプを何台も使う場合は、機材の消費電力の合計を確認し、必要なら電源を分けよう。",
      },
    },
    {
      id: "api_lunchbox_500_series_chain",
      order: 98,
      title: "500シリーズのラックにマイクプリとEQを入れて直列につなぐ(API 500-6B Lunchbox + API 512c + API 550A)",
      category: "配線問題",
      hook: "小さなモジュールを差し替えて、自分だけのチャンネルストリップを作れる『500シリーズ』。ただしモジュール同士は、ラックに差しただけでは勝手につながらない——マイクプリからEQへ、音の通り道を自分で配線しよう。",
      patch: {
        scenario:
          "自宅スタジオのボーカル録りで、500シリーズ(=幅の細い共通規格のモジュールを、専用ラックに差して使う仕組み)のマイクプリアンプとイコライザーを使いたい。6スロットのラック「API 500-6B Lunchbox」のスロット1にマイクプリアンプ「API 512c」、スロット2に3バンドEQ「API 550A」を差してある。Lunchboxの背面には、スロットごとにINPUT(XLR)とOUTPUT(XLR)が並んでいる。コンデンサーマイク「Neumann TLM 103」をスロット1のINPUTへ、スロット1のOUTPUTをスロット2のINPUTへつないで、マイクプリの後ろにEQが来るようにする。スロット2のOUTPUTからは、片側がXLR・もう片側がTRSフォーンになっているバランスケーブルで、オーディオインターフェース「Universal Audio Apollo x8」のLINE IN 5(TRS)へ接続しよう。スロット3は空きスロットなので使わない。",
        equipment: [
          { id: "mic", label: "Neumann TLM 103", icon: "TLM103", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "rack",
            label: "API 500-6B Lunchbox(500シリーズ用ラック)",
            icon: "Lunchbox",
            ports: [
              { id: "in1", label: "SLOT 1 INPUT (XLR) ※API 512c", type: "xlr", dir: "in" },
              { id: "in2", label: "SLOT 2 INPUT (XLR) ※API 550A", type: "xlr", dir: "in" },
              { id: "in3", label: "SLOT 3 INPUT (XLR) ※空き", type: "xlr", dir: "in" },
              { id: "out1", label: "SLOT 1 OUTPUT (XLR) ※API 512c", type: "xlr", dir: "out" },
              { id: "out2", label: "SLOT 2 OUTPUT (XLR) ※API 550A", type: "xlr", dir: "out" },
              { id: "out3", label: "SLOT 3 OUTPUT (XLR) ※空き", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Universal Audio Apollo x8",
            icon: "Apollo x8",
            ports: [
              { id: "mic1", label: "MIC/LINE IN 1 (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "line5", label: "LINE IN 5 (TRS)", type: "trs", dir: "in" },
              { id: "line6", label: "LINE IN 6 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb"],
        correctConnections: [
          { from: "mic.out", to: "rack.in1", cable: "xlr" },
          { from: "rack.out1", to: "rack.in2", cable: "xlr" },
          { from: "rack.out2", to: "interface.line5", cable: "trs" },
        ],
        explain:
          "500シリーズのラックは、モジュールに電源を配り、背面の端子と各モジュールをつなぐ『入れ物』で、スロット同士の音の通り道は基本的にはつながっていない(1つ目のモジュールの出力が、自動で隣のモジュールに流れるわけではない)。だから、マイクプリ→EQのように直列で使いたいときは、スロット1のOUTPUTからスロット2のINPUTへ、短いXLRケーブルで自分でつなぐ。順番は『まずマイクプリでマイクの小さな信号をラインレベルまで持ち上げ、その後でEQ』が基本。EQはライン信号を扱う前提の機材なので、マイクの信号をそのままEQに入れても、正しく働かない。コンデンサーマイクに必要な+48Vファンタム電源は、Lunchbox本体が電力を供給し、512cの前面の48Vスイッチで入り切りする。512cで増幅した後の信号はすでにラインレベルなので、Apollo x8ではマイクプリが入っているMIC/LINE IN 1のXLR側ではなく、LINE IN 5のようなライン入力で受けよう。マイクプリの入口に再びつなぐと、増幅が二重になり歪みやノイズの原因になる。なお512cの前面には、ギターやベースを直接挿せるHi-Z(=高インピーダンス。楽器の出力に合わせた入力)のフォーン入力もあり、モジュールを並べ替えるだけでチェーンを組み替えられるのが500シリーズの楽しさだ。",
      },
    },
    {
      id: "x32_rack_s16_aes50",
      order: 99,
      title: "デジタルミキサーとステージボックスをLANケーブル1本でつなぐ(Behringer X32 Rack + S16 / AES50)",
      category: "配線問題",
      hook: "ステージから客席の奥のミキサー卓まで、何十本ものケーブルを束ねた太いスネークを引き回すのは大変。ステージ側の箱でマイクの音をデジタルに変えれば、往復の音をLANケーブル1本で運べる——ステージボックスの配線を組もう。",
      patch: {
        scenario:
          "ライブハウスで、客席後方のミキサー席に置いたデジタルミキサー「Behringer X32 Rack」と、ステージ上のステージボックス(=マイクの入力と、スピーカーへの出力をまとめてステージ側に置く箱)「Behringer S16」をつなぎたい。ボーカルの「Shure SM58」をS16のINPUT 1へ、ギターアンプに立てた「Shure SM57」をS16のINPUT 2へ接続する。X32 RackのAES50 Aポートと、S16のAES50 Aポートを、シールド付きのLANケーブル(Cat5e)でつなぐ。ミキサーで作ったメインの左右の音は、S16のOUTPUT 1/2からステージ両脇のパワードスピーカー「Yamaha DBR12」(左右)へ、ボーカル用の返しはS16のOUTPUT 3から足元のパワードモニター「Yamaha DBR10」へ、それぞれXLRで接続しよう。X32 Rack本体のマイク入力は今回は使わない。",
        equipment: [
          { id: "vo", label: "Shure SM58(ボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "gt", label: "Shure SM57(ギターアンプ)", icon: "SM57", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "s16",
            label: "Behringer S16(ステージボックス・ステージ上)",
            icon: "S16",
            ports: [
              { id: "in1", label: "INPUT 1 (XLR)", type: "xlr", dir: "in" },
              { id: "in2", label: "INPUT 2 (XLR)", type: "xlr", dir: "in" },
              { id: "aesA", label: "AES50 A (etherCON)", type: "ethernet", dir: "in" },
              { id: "out1", label: "OUTPUT 1 (XLR)", type: "xlr", dir: "out" },
              { id: "out2", label: "OUTPUT 2 (XLR)", type: "xlr", dir: "out" },
              { id: "out3", label: "OUTPUT 3 (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "x32",
            label: "Behringer X32 Rack(デジタルミキサー・客席後方)",
            icon: "X32 Rack",
            ports: [
              { id: "localIn1", label: "本体 INPUT 1 (XLR)", type: "xlr", dir: "in" },
              { id: "aesA", label: "AES50 A (etherCON)", type: "ethernet", dir: "out" },
              { id: "aesB", label: "AES50 B (etherCON)", type: "ethernet", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha DBR12(左)", icon: "DBR12", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR12(右)", icon: "DBR12", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "wedge", label: "Yamaha DBR10(足元の返し)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "ethernet", "trs", "usb", "speaker"],
        correctConnections: [
          { from: "vo.out", to: "s16.in1", cable: "xlr" },
          { from: "gt.out", to: "s16.in2", cable: "xlr" },
          { from: "x32.aesA", to: "s16.aesA", cable: "ethernet" },
          { from: "s16.out1", to: "spkL.in", cable: "xlr" },
          { from: "s16.out2", to: "spkR.in", cable: "xlr" },
          { from: "s16.out3", to: "wedge.in", cable: "xlr" },
        ],
        explain:
          "S16は、16系統のマイク入力と8系統の出力を持つステージボックスで、マイクの音をステージ上でデジタル信号に変え、AES50(=Behringerやミダスのデジタルミキサーで使われる、音声を双方向に送る規格)でミキサーへ送る。1本のLANケーブルの中を、ステージからミキサーへ向かうマイクの音と、ミキサーからステージへ戻るスピーカー用の音が同時に流れるので、何十本もの線を束ねたアナログスネークの代わりになる。マイクのゲイン(=入力の増幅量)も、ミキサー側から遠隔で調整できる。ケーブルを挿しただけでは音は出ず、X32側のルーティング(=どの入力・出力をどこへ割り当てるかの設定)で、AES50 Aから来る音をチャンネルに、メインとモニターの出力をAES50 A経由でS16の出力1〜3に割り当てる。AES50はLANケーブルと同じ形をしているが、パソコンのネットワークとは仕組みが違うため、間にルーターやスイッチングハブをはさまず機材同士を直接つなぐ。また、ステージの照明や電源ケーブルから来る雑音や、静電気によるトラブルを防ぐため、シールド付きのCat5eケーブルを使うことがメーカーから推奨されている。S16にはAES50 Bポートもあり、ここから2台目のS16へ数珠つなぎにすれば入力をさらに増やせる。",
      },
    },
    {
      id: "mpc_live2_resample_hardsynth",
      order: 100,
      title: "サンプラーからハードシンセを鳴らして、その音をサンプリングする(Akai MPC Live II + Korg minilogue xd)",
      category: "配線問題",
      hook: "パソコンを開かずに、MPCだけでビートを作りたい。MPCで打ち込んだフレーズでハードシンセを鳴らし、その音をそのままMPCに録り込めば、シンセの音もサンプルとして自由に切り貼りできる——『送る線』と『戻す線』の2系統を配線しよう。",
      patch: {
        scenario:
          "スタンドアローン(=パソコンにつながずに単体で動く)のサンプラー「Akai MPC Live II」で作ったシーケンス(=打ち込んだフレーズ)で、アナログシンセ「Korg minilogue xd」を鳴らしたい。MPC Live IIのMIDI OUT 1(5ピンDIN)から、minilogue xdのMIDI IN(5ピンDIN)へMIDIケーブルをつなぐ。minilogue xdのOUTPUT L/MONOとOUTPUT R(TSフォーン)は、MPC Live IIのLINE INPUT L/R(フォーン)へ戻して、シンセの音を録音(サンプリング)できるようにする。MPCで鳴らした全体の音は、MPC Live IIのOUTPUT 1/2(TRS)から、モニタースピーカー「Yamaha HS5」の左右へ接続しよう。背面のPHONO/LINE入力(RCA)はレコードプレーヤー用なので、今回は使わない。",
        equipment: [
          {
            id: "mpc",
            label: "Akai MPC Live II",
            icon: "MPC Live II",
            ports: [
              { id: "midiOut1", label: "MIDI OUT 1 (5ピンDIN)", type: "midi", dir: "out" },
              { id: "midiIn1", label: "MIDI IN 1 (5ピンDIN)", type: "midi", dir: "in" },
              { id: "inL", label: "LINE INPUT L (フォーン)", type: "trs", dir: "in" },
              { id: "inR", label: "LINE INPUT R (フォーン)", type: "trs", dir: "in" },
              { id: "phonoL", label: "PHONO/LINE IN L (RCA)", type: "rca", dir: "in" },
              { id: "out1", label: "OUTPUT 1 (TRS)", type: "trs", dir: "out" },
              { id: "out2", label: "OUTPUT 2 (TRS)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "synth",
            label: "Korg minilogue xd",
            icon: "minilogue xd",
            ports: [
              { id: "midiIn", label: "MIDI IN (5ピンDIN)", type: "midi", dir: "in" },
              { id: "midiOut", label: "MIDI OUT (5ピンDIN)", type: "midi", dir: "out" },
              { id: "outL", label: "OUTPUT L/MONO (TS)", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R (TS)", type: "ts", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha HS5(左)", icon: "HS5", ports: [{ id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" }] },
          { id: "spkR", label: "Yamaha HS5(右)", icon: "HS5", ports: [{ id: "in", label: "INPUT (TRS)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["midi", "ts", "trs", "rca", "usb"],
        correctConnections: [
          { from: "mpc.midiOut1", to: "synth.midiIn", cable: "midi" },
          { from: "synth.outL", to: "mpc.inL", cable: "ts" },
          { from: "synth.outR", to: "mpc.inR", cable: "ts" },
          { from: "mpc.out1", to: "spkL.in", cable: "trs" },
          { from: "mpc.out2", to: "spkR.in", cable: "trs" },
        ],
        explain:
          "MIDIケーブルを流れるのは『どの鍵盤を、どの強さで、いつ押したか』という演奏の指示だけで、音そのものは流れない。だから、MPCからシンセを鳴らすには『MPCのMIDI OUT→シンセのMIDI IN』という指示の線と、『シンセのOUTPUT→MPCのINPUT』という音の線の、2系統の配線が必要になる。MIDIは必ずOUTからINへつなぐのが決まりで、OUT同士・IN同士では何も起きない。MPC側では、シーケンスのトラックをMIDIトラックにして、出力先をMIDI OUT 1と、minilogue xdが受け取る設定にしたMIDIチャンネル(=1本のMIDIケーブルで最大16台を区別するための番号)に合わせる。minilogue xdの出力はアンバランスのTSフォーンだが、MPCのフォーン入力に挿せばそのまま受けられる。シンセの音をMPCに戻しておけば、録音してサンプルにし、刻んだりピッチを変えたりと、MPCならではの加工ができる。録音中に入力の音をスピーカーから聞くには、MPC側の入力モニターの設定を有効にする。背面のRCA入力は、レコードプレーヤーをつなぐことを想定した入力で、PHONOの設定ではレコード針の小さな信号を大きく増幅する。そこにシンセのライン信号を入れると音が大きすぎて歪むので、シンセは素直にフォーンのLINE INPUTで受けよう。",
      },
    },
    {
      id: "radial_sw8_backup_playback",
      order: 101,
      title: "同期演奏のメインPCとバックアップPCを自動で切り替える(Radial SW8-USB)",
      category: "配線問題",
      hook: "本番中に、オケ(=同期演奏で流す伴奏トラック)を再生しているパソコンが突然止まったら、ライブはその場で止まってしまう。同じオケを2台のパソコンで同時に再生し、止まった瞬間に予備の方へ切り替わる仕組みを配線しよう。",
      patch: {
        scenario:
          "同期演奏をするバンドのライブで、オケとクリックを再生するパソコンを2台用意し、万一に備えたい。2台の「MacBook Pro」で同じDAWのセッションを同時に再生し、メイン機をオートスイッチャー兼オーディオインターフェース「Radial SW8-USB」のメインPC用USB端子へ、バックアップ機をバックアップPC用USB端子へ、それぞれUSBケーブルでつなぐ。SW8-USBのOUTPUT 1/2(XLR)にはオケの左右が出てくるので、ステージボックス「Behringer S16」のINPUT 9/10へ送る。OUTPUT 3(XLR)にはクリックだけが出てくるので、ドラマー用のイヤモニアンプ「Behringer P1」のINPUT(XLR/TRSコンボ)へ送ろう。",
        equipment: [
          { id: "macMain", label: "MacBook Pro(メイン機)", icon: "Mac A", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "out" }] },
          { id: "macBackup", label: "MacBook Pro(バックアップ機)", icon: "Mac B", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "out" }] },
          {
            id: "sw8",
            label: "Radial SW8-USB(オートスイッチャー兼オーディオI/F)",
            icon: "SW8-USB",
            ports: [
              { id: "usbMain", label: "USB (メインPC用)", type: "usb", dir: "in" },
              { id: "usbBackup", label: "USB (バックアップPC用)", type: "usb", dir: "in" },
              { id: "out1", label: "OUTPUT 1 (XLR) ※オケL", type: "xlr", dir: "out" },
              { id: "out2", label: "OUTPUT 2 (XLR) ※オケR", type: "xlr", dir: "out" },
              { id: "out3", label: "OUTPUT 3 (XLR) ※クリック", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "s16",
            label: "Behringer S16(ステージボックス)",
            icon: "S16",
            ports: [
              { id: "in9", label: "INPUT 9 (XLR)", type: "xlr", dir: "in" },
              { id: "in10", label: "INPUT 10 (XLR)", type: "xlr", dir: "in" },
            ],
          },
          { id: "p1", label: "Behringer P1(ドラマー用イヤモニアンプ)", icon: "P1", ports: [{ id: "in", label: "INPUT (XLR/TRSコンボ)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["usb", "xlr", "trs", "ts", "ethernet"],
        correctConnections: [
          { from: "macMain.usb", to: "sw8.usbMain", cable: "usb" },
          { from: "macBackup.usb", to: "sw8.usbBackup", cable: "usb" },
          { from: "sw8.out1", to: "s16.in9", cable: "xlr" },
          { from: "sw8.out2", to: "s16.in10", cable: "xlr" },
          { from: "sw8.out3", to: "p1.in", cable: "xlr" },
        ],
        explain:
          "SW8-USBは、2台のパソコンそれぞれからUSBで音を受け取れるオーディオインターフェースで、普段はメイン機の音をOUTPUTへ出している。メイン機の再生が止まったり、USBの音が途切れたりしたことを検知すると、自動でバックアップ機の音に切り替わる(手元のボタンやフットスイッチで手動で切り替えることもできる)。この仕組みが働くには、2台のパソコンが『同じセッションを、同じ位置で、同時に』再生している必要がある。そのため、メイン機から再生・停止の指示を送ってバックアップ機を追いかけさせる設定(MIDIのタイムコードなど)を使うのが一般的だ。出力側は、ミキサーやステージボックスから見ると『いつも同じ1台の機材』なので、パソコンが切り替わってもケーブルを挿し替える必要はない。オケとクリックを別々のOUTPUTに分けておくのは、クリックをお客さんに聞かせず、ドラマーのイヤモニにだけ送るため。XLR出力は、ステージボックスまで長くケーブルを引き回してもノイズを拾いにくいバランス出力になっている。本番前のリハーサルでは、メイン機のUSBケーブルをわざと抜いて、切り替わりの瞬間に音が途切れないかを必ず確かめておこう。",
      },
    },
    {
      id: "mixer_insert_y_cable_comp",
      order: 102,
      title: "アナログミキサーのインサート端子にYケーブルでコンプを挿す(Mackie 1202VLZ4 + dbx 266xs)",
      category: "配線問題",
      hook: "ボーカルの声の大小のムラを、ミキサーのそのチャンネルだけでコンプレッサーに整えてほしい。そのための端子が『INSERT』——1つの穴で『送り』と『戻り』を同時にこなす、少し変わった端子の配線を組もう。",
      patch: {
        scenario:
          "小さなライブバーのPAで、アナログミキサー「Mackie 1202VLZ4」のCH1にボーカルマイク「Shure SM58」をつないでいる。このボーカルにだけ、2chコンプレッサー「dbx 266xs」をかけたい。1202VLZ4のCH1 INSERT端子(TRSフォーン)に、片側がTRSプラグ1本・もう片側がTSプラグ2本に分かれた『インサートケーブル(Yケーブル)』を挿す。Yケーブルの先のうち、TIP側(SEND=ミキサーから送り出す音)のTSプラグをdbx 266xsのCH1 INPUT(フォーン)へ、RING側(RETURN=ミキサーへ戻ってくる音)のTSプラグをdbx 266xsのCH1 OUTPUT(フォーン)へつなぐ。全体の音は、1202VLZ4のMAIN OUT L/R(XLR)からパワードスピーカー「Yamaha DBR10」の左右へ送ろう。",
        equipment: [
          { id: "mic", label: "Shure SM58(ボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Mackie 1202VLZ4(アナログミキサー)",
            icon: "1202VLZ4",
            ports: [
              { id: "mic1", label: "CH1 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "insSend", label: "CH1 INSERT → Yケーブル TIP側(SEND)", type: "ts", dir: "out" },
              { id: "insRet", label: "CH1 INSERT → Yケーブル RING側(RETURN)", type: "ts", dir: "in" },
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "comp",
            label: "dbx 266xs(2ch コンプレッサー/ゲート)",
            icon: "266xs",
            ports: [
              { id: "in1", label: "CH1 INPUT (フォーン)", type: "trs", dir: "in" },
              { id: "out1", label: "CH1 OUTPUT (フォーン)", type: "trs", dir: "out" },
              { id: "in2", label: "CH2 INPUT (フォーン)", type: "trs", dir: "in" },
              { id: "out2", label: "CH2 OUTPUT (フォーン)", type: "trs", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha DBR10(左)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR10(右)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "ts", "trs", "speaker", "rca"],
        correctConnections: [
          { from: "mic.out", to: "mixer.mic1", cable: "xlr" },
          { from: "mixer.insSend", to: "comp.in1", cable: "ts" },
          { from: "comp.out1", to: "mixer.insRet", cable: "ts" },
          { from: "mixer.mainL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.mainR", to: "spkR.in", cable: "xlr" },
        ],
        explain:
          "INSERT(インサート)は、チャンネルの音の通り道の途中に、外の機材を『割り込ませる』ための端子。1202VLZ4のインサートは、1つのTRSジャックの中で、TIP(=プラグの先端)が送り出し、RING(=先端の次の輪の部分)が戻りという役割を分けている。そのため、TRSの1本のプラグが2本のTSプラグに分かれたYケーブルを使い、送り側をコンプの入力へ、戻り側をコンプの出力へつなぐ。送りと戻りを逆に挿すと、音が出なくなったり、コンプがかからなかったりするので、プラグに書かれた印やケーブルの色を確かめよう。インサートにつないだ機材は、そのチャンネルだけにかかる。コンプのように音の大きさそのものを整える機材はインサートで使い、リバーブのように元の音に響きを足す機材はAUXのセンド/リターンで使うのが基本の使い分けだ。また、1202VLZ4のインサートは、チャンネルのイコライザーより手前に入るため、コンプで音量をならしたあとにEQで音色を整える流れになる。なお、Yケーブルの1本は2本の線で送りと戻りを運ぶため、バランス伝送にはならない。ノイズを避けるため、ミキサーとコンプはなるべく短いケーブルでつなごう。",
      },
    },
    {
      id: "moog_dfam_mother32_patch",
      order: 103,
      title: "ドラムシンセのシーケンサーでベースシンセを鳴らす(Moog DFAM + Mother-32)",
      category: "配線問題",
      hook: "DFAMの8ステップのシーケンサーは、自分のドラム音を鳴らすだけでなく、パッチケーブル1本で隣のシンセにも『ここで鳴らせ』『この高さで』と指示を出せる。セミモジュラーシンセ同士のCV/Gate配線を組もう。",
      patch: {
        scenario:
          "アナログのドラムシンセ「Moog DFAM」と、セミモジュラー(=配線しなくても音が出るが、パッチケーブルで内部のつながりを組み替えられる)のシンセ「Moog Mother-32」を並べている。DFAMのシーケンサーに合わせて、Mother-32でベースのフレーズを鳴らしたい。DFAMのパッチベイ(3.5mm)のTRIGGER出力を、Mother-32のGATE入力へ、DFAMのPITCH出力を、Mother-32のVCO 1V/OCT入力へつなぐ。さらに、DFAMのVELOCITY出力をMother-32のVCF CUTOFF入力へつないで、ステップごとに音の明るさが変わるようにする。2台の音は、それぞれのOUTPUT(フォーン)から、オーディオインターフェース「Focusrite Scarlett 4i4」のLINE IN 3とLINE IN 4(TRS)へ送ろう。",
        equipment: [
          {
            id: "dfam",
            label: "Moog DFAM(ドラムシンセ)",
            icon: "DFAM",
            ports: [
              { id: "trigOut", label: "TRIGGER OUT (3.5mm)", type: "cv", dir: "out" },
              { id: "pitchOut", label: "PITCH OUT (3.5mm)", type: "cv", dir: "out" },
              { id: "velOut", label: "VELOCITY OUT (3.5mm)", type: "cv", dir: "out" },
              { id: "vcaEgOut", label: "VCA EG OUT (3.5mm)", type: "cv", dir: "out" },
              { id: "audioOut", label: "OUTPUT (フォーン)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "m32",
            label: "Moog Mother-32(セミモジュラーシンセ)",
            icon: "Mother-32",
            ports: [
              { id: "gateIn", label: "GATE IN (3.5mm)", type: "cv", dir: "in" },
              { id: "vcoIn", label: "VCO 1V/OCT IN (3.5mm)", type: "cv", dir: "in" },
              { id: "cutoffIn", label: "VCF CUTOFF IN (3.5mm)", type: "cv", dir: "in" },
              { id: "mixCvIn", label: "MIX CV IN (3.5mm)", type: "cv", dir: "in" },
              { id: "audioOut", label: "OUTPUT (フォーン)", type: "ts", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Focusrite Scarlett 4i4",
            icon: "4i4",
            ports: [
              { id: "line3", label: "LINE IN 3 (TRS)", type: "trs", dir: "in" },
              { id: "line4", label: "LINE IN 4 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["cv", "ts", "trs", "midi", "usb"],
        correctConnections: [
          { from: "dfam.trigOut", to: "m32.gateIn", cable: "cv" },
          { from: "dfam.pitchOut", to: "m32.vcoIn", cable: "cv" },
          { from: "dfam.velOut", to: "m32.cutoffIn", cable: "cv" },
          { from: "dfam.audioOut", to: "interface.line3", cable: "ts" },
          { from: "m32.audioOut", to: "interface.line4", cable: "ts" },
        ],
        explain:
          "CV(=音の高さや明るさを電圧の大きさで伝える信号)とGate/Trigger(=『今、鳴らせ』という合図の電圧)は、MIDIを使わずにアナログシンセ同士を操るための昔ながらの方法だ。DFAMのシーケンサーは、ステップが進むたびにTRIGGER出力から『鳴らせ』の合図を出し、同時にPITCH出力から、そのステップのPITCHノブで決めた電圧を、VELOCITY出力から、そのステップのVELOCITYノブで決めた電圧を出している。これをMother-32のGATE入力(発音のタイミング)、VCO 1V/OCT入力(1Vで1オクターブ上がる約束の音程入力)、VCF CUTOFF入力(フィルターの開き具合)につなぐことで、DFAMのリズムに合わせてMother-32がフレーズを弾くようになる。ただし、DFAMのPITCHノブは無段階で回せるつまみなので、ドレミの音階にぴったり合うわけではない。耳で聞きながらノブを回して、音程を合わせよう。パッチケーブルは必ず『出力→入力』の向きでつなぐ。出力同士をつなぐと、2つの機材が電圧を押し合って正しく動かないので注意。3.5mmのパッチケーブルは見た目がイヤホンのプラグに似ているが、運んでいるのは音ではなく『指示の電圧』なので、オーディオインターフェースへの音の出力は、別にフォーンのケーブルでつなぐ。",
      },
    },
    {
      id: "ebtech_lls_level_shift_cassette",
      order: 104,
      title: "民生機の-10dBVをプロ機材の+4dBuに合わせる(TASCAM 202MKVII + Ebtech LLS-2-XLR + Manley Variable Mu)",
      category: "配線問題",
      hook: "カセットテープの音をスタジオのコンプに通したら、針がほとんど振れず、音も細い——原因は、家庭用の機材とプロ用の機材で『標準の音の大きさ』が違うことにある。2つの世界の橋渡しをする配線を組もう。",
      patch: {
        scenario:
          "ローファイな質感を出すため、2ミックスを一度カセットテープに録音し、その再生音をスタジオのステレオコンプレッサー「Manley Stereo Variable Mu」に通して、オーディオインターフェース「Universal Audio Apollo x8」に録り込みたい。カセットデッキ「TASCAM 202MKVII」のLINE OUT L/R(RCA)は家庭用機材の標準レベル(-10dBV)なので、そのままでは業務用の標準レベル(+4dBu)を前提としたManleyには小さすぎる。そこで、レベル変換器「Ebtech LLS-2-XLR」を間にはさむ。202MKVIIのLINE OUT L/Rから、RCA-フォーン変換ケーブルでLLS-2-XLRの-10dBV側CH1/CH2(フォーン)へ、LLS-2-XLRの+4dBu側CH1/CH2(XLR)からManleyのINPUT L/R(XLR)へつなぐ。ManleyのOUTPUT L/R(XLR)からは、片側がXLR・もう片側がTRSのバランスケーブルで、Apollo x8のLINE IN 5/6(TRS)へ送ろう。",
        equipment: [
          {
            id: "deck",
            label: "TASCAM 202MKVII(ダブルカセットデッキ)",
            icon: "202MKVII",
            ports: [
              { id: "outL", label: "LINE OUT L (RCA)", type: "rca", dir: "out" },
              { id: "outR", label: "LINE OUT R (RCA)", type: "rca", dir: "out" },
            ],
          },
          {
            id: "lls",
            label: "Ebtech LLS-2-XLR(ラインレベル・シフター)",
            icon: "LLS-2",
            ports: [
              { id: "lo1", label: "-10dBV側 CH1 (フォーン)", type: "trs", dir: "in" },
              { id: "lo2", label: "-10dBV側 CH2 (フォーン)", type: "trs", dir: "in" },
              { id: "hi1", label: "+4dBu側 CH1 (XLR)", type: "xlr", dir: "out" },
              { id: "hi2", label: "+4dBu側 CH2 (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "comp",
            label: "Manley Stereo Variable Mu(真空管コンプレッサー)",
            icon: "Vari-Mu",
            ports: [
              { id: "inL", label: "INPUT L (XLR)", type: "xlr", dir: "in" },
              { id: "inR", label: "INPUT R (XLR)", type: "xlr", dir: "in" },
              { id: "outL", label: "OUTPUT L (XLR)", type: "xlr", dir: "out" },
              { id: "outR", label: "OUTPUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          {
            id: "interface",
            label: "Universal Audio Apollo x8",
            icon: "Apollo x8",
            ports: [
              { id: "line5", label: "LINE IN 5 (TRS)", type: "trs", dir: "in" },
              { id: "line6", label: "LINE IN 6 (TRS)", type: "trs", dir: "in" },
            ],
          },
        ],
        cablePalette: ["rca", "xlr", "trs", "ts", "optical"],
        correctConnections: [
          { from: "deck.outL", to: "lls.lo1", cable: "rca" },
          { from: "deck.outR", to: "lls.lo2", cable: "rca" },
          { from: "lls.hi1", to: "comp.inL", cable: "xlr" },
          { from: "lls.hi2", to: "comp.inR", cable: "xlr" },
          { from: "comp.outL", to: "interface.line5", cable: "trs" },
          { from: "comp.outR", to: "interface.line6", cable: "trs" },
        ],
        explain:
          "オーディオ機材の『標準の音の大きさ』には、家庭用・アマチュア向けの-10dBVと、業務用の+4dBuの2種類がある。dBVとdBuは基準の違う単位だが、電圧に直すと、-10dBVは約0.32V、+4dBuは約1.23Vで、+4dBuのほうがおよそ4倍(約12dB)大きい。そのため、-10dBVの機材をそのまま+4dBuの機材につなぐと音が小さすぎ、コンプのように入力の大きさで効き方が変わる機材では、狙ったかかり方にならない。逆に、+4dBuの出力を-10dBVの入力に入れると、大きすぎて歪みやすい。LLS-2-XLRは、中に入ったトランス(=電気の通り道を磁気でつなぎ、レベルを変えながら信号を受け渡す部品)でこの差を埋める箱で、電源がいらない。さらに、アンバランスのRCA出力をバランスのXLRに変えてくれるので、スタジオの中で長いケーブルを引き回してもノイズを拾いにくくなり、トランスが機材同士の電気的なつながりを切ることで、ハムノイズ(=ブーンという低い雑音)の対策にもなる。なお、このような変換器はライン信号専用なので、マイクやギターを直接つないだり、パワードスピーカーの入力に使ったりするものではない。最近のオーディオインターフェースの中には、入力ごとに-10dBVと+4dBuを切り替えられるものもあるので、変換器を買う前に、つなぐ機材の設定を確認しよう。",
      },
    },
    {
      id: "harmonica_bullet_mic_amp",
      order: 105,
      title: "ブルースハープ用マイクをギターアンプで鳴らしてPAへ送る(Shure 520DX + Fender '59 Bassman LTD)",
      category: "配線問題",
      hook: "ブルースハープの、あの太くてザラッとした音は、マイクをミキサーに直接つないでも出ない。ハープ用マイクをいったんギターアンプで鳴らし、そのアンプの音をマイクで拾ってPAへ送る——ブルースの定番配線を組もう。",
      patch: {
        scenario:
          "ブルースバンドのライブで、ハーモニカ(ブルースハープ)奏者が、ハープ用ダイナミックマイク「Shure 520DX(Green Bullet)」を手に包むように持って吹く。520DXは、本体から伸びるケーブルの先が標準フォーンプラグになったハイインピーダンス(=ギターと同じ、高い抵抗値で信号を出すタイプ)のマイクなので、ミキサーのXLR入力ではなく、真空管ギターアンプ「Fender '59 Bassman LTD」のNORMAL INPUT 1(フォーン)に挿す。アンプのスピーカーの前に「Shure SM57」を立てて、アナログミキサー「Yamaha MG10XU」のCH1 MIC IN(XLR)へ送る。ボーカルの「Shure SM58」はCH2 MIC IN(XLR)へ。全体の音は、MG10XUのSTEREO OUT L/R(XLR)からパワードスピーカー「Yamaha DBR10」の左右へ送ろう。",
        equipment: [
          { id: "harp", label: "Shure 520DX(ハープ用マイク)", icon: "520DX", ports: [{ id: "out", label: "フォーンプラグ(本体ケーブル)", type: "ts", dir: "out" }] },
          {
            id: "amp",
            label: "Fender '59 Bassman LTD(真空管ギターアンプ)",
            icon: "Bassman",
            ports: [
              { id: "brightIn1", label: "BRIGHT INPUT 1 (フォーン)", type: "ts", dir: "in" },
              { id: "brightIn2", label: "BRIGHT INPUT 2 (フォーン)", type: "ts", dir: "in" },
              { id: "normIn1", label: "NORMAL INPUT 1 (フォーン)", type: "ts", dir: "in" },
              { id: "normIn2", label: "NORMAL INPUT 2 (フォーン)", type: "ts", dir: "in" },
            ],
          },
          { id: "ampMic", label: "Shure SM57(アンプ収音用)", icon: "SM57", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "vox", label: "Shure SM58(ボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Yamaha MG10XU(アナログミキサー)",
            icon: "MG10XU",
            ports: [
              { id: "mic1", label: "CH1 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "mic2", label: "CH2 MIC IN (XLR)", type: "xlr", dir: "in" },
              { id: "mainL", label: "STEREO OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "STEREO OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha DBR10(左)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR10(右)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["ts", "xlr", "trs", "speaker", "rca"],
        correctConnections: [
          { from: "harp.out", to: "amp.normIn1", cable: "ts" },
          { from: "ampMic.out", to: "mixer.mic1", cable: "xlr" },
          { from: "vox.out", to: "mixer.mic2", cable: "xlr" },
          { from: "mixer.mainL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.mainR", to: "spkR.in", cable: "xlr" },
        ],
        explain:
          "マイクには、ボーカル用のSM58のように低い抵抗値(ローインピーダンス)でXLRから出すものと、520DXのように高い抵抗値(ハイインピーダンス)でフォーンプラグから出すものがある。520DXは、ギターアンプのような『ハイインピーダンスの入力』につなぐ前提で作られているので、変換プラグでミキサーのマイク入力に挿すと、音が小さく細くなりやすい。ブルースハープのあの歪んだ太い音は、マイクそのものではなく、真空管アンプが少し無理をして鳴ることで生まれる。だから、ハープの音はいったんアンプで鳴らし、その音をSM57で拾ってPAへ送る。Bassmanには4つの入力があり、BRIGHT(=高音を強調するチャンネル)とNORMALの2チャンネルに、それぞれINPUT 1(感度が高い)とINPUT 2(感度が低い)がある。ハープはキンキンしやすいので、今回はNORMALのINPUT 1を使ったが、好みに応じて別の入力を試してもよい。注意したいのはハウリング(=スピーカーの音をマイクがまた拾って、キーンと鳴り続ける現象)。520DXは全方向の音を拾うマイクなので、アンプの真正面に立たない、アンプの音量を上げすぎない、手でマイクをしっかり包む、などで対策しよう。",
      },
    },
    {
      id: "volume_pedal_tuner_out",
      order: 106,
      title: "ボリュームペダルのチューナー出力で、音を出さずにチューニングする(Boss FV-500H + TU-3)",
      category: "配線問題",
      hook: "曲間のチューニングで、チューニング中の音がアンプから鳴ってしまう——ボリュームペダルの『TUNER OUT』を使えば、ペダルを戻すだけで客席に音を出さずにチューナーへ信号を送れる。足元の配線を組もう。",
      patch: {
        scenario:
          "ライブ用の小さなペダルボードを組む。エレキギター「Fender Player Telecaster」の出力を、ハイインピーダンス(=ギターの出力を直接受けるのに向いた、高い抵抗値の入力)のボリュームペダル「Boss FV-500H」のINPUTへ直接つなぐ。FV-500HのOUTPUTからディレイ「Boss DD-8」のINPUT A/MONOへ、DD-8のOUTPUT A/MONOから真空管アンプ「Fender Blues Junior IV」のINPUTへ送る。チューナー「Boss TU-3」は、音の通り道には入れず、FV-500HのTUNER OUTからTU-3のINPUTへつなぐ。電源は、ACアダプター「Boss PSA-100S2」をTU-3のDC INに挿し、TU-3のDC OUTから、別売の分岐ケーブルでDD-8のDC INへ電気を分けよう。",
        equipment: [
          { id: "gtr", label: "Fender Player Telecaster", icon: "Tele", ports: [{ id: "out", label: "OUTPUT (フォーン)", type: "ts", dir: "out" }] },
          {
            id: "vol",
            label: "Boss FV-500H(ボリュームペダル)",
            icon: "FV-500H",
            ports: [
              { id: "in", label: "INPUT (フォーン)", type: "ts", dir: "in" },
              { id: "out", label: "OUTPUT (フォーン)", type: "ts", dir: "out" },
              { id: "tunerOut", label: "TUNER OUT (フォーン)", type: "ts", dir: "out" },
              { id: "exp", label: "EXP (TRSフォーン)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "delay",
            label: "Boss DD-8(デジタルディレイ)",
            icon: "DD-8",
            ports: [
              { id: "in", label: "INPUT A/MONO (フォーン)", type: "ts", dir: "in" },
              { id: "out", label: "OUTPUT A/MONO (フォーン)", type: "ts", dir: "out" },
              { id: "dcIn", label: "DC IN", type: "power", dir: "in" },
            ],
          },
          {
            id: "tuner",
            label: "Boss TU-3(チューナー)",
            icon: "TU-3",
            ports: [
              { id: "in", label: "INPUT (フォーン)", type: "ts", dir: "in" },
              { id: "out", label: "OUTPUT (フォーン)", type: "ts", dir: "out" },
              { id: "dcIn", label: "DC IN", type: "power", dir: "in" },
              { id: "dcOut", label: "DC OUT", type: "power", dir: "out" },
            ],
          },
          { id: "amp", label: "Fender Blues Junior IV(ギターアンプ)", icon: "Blues Jr", ports: [{ id: "in", label: "INPUT (フォーン)", type: "ts", dir: "in" }] },
          { id: "psu", label: "Boss PSA-100S2(ACアダプター)", icon: "PSA", ports: [{ id: "out", label: "DC OUT", type: "power", dir: "out" }] },
        ],
        cablePalette: ["ts", "trs", "power", "xlr", "midi"],
        correctConnections: [
          { from: "gtr.out", to: "vol.in", cable: "ts" },
          { from: "vol.out", to: "delay.in", cable: "ts" },
          { from: "delay.out", to: "amp.in", cable: "ts" },
          { from: "vol.tunerOut", to: "tuner.in", cable: "ts" },
          { from: "psu.out", to: "tuner.dcIn", cable: "power" },
          { from: "tuner.dcOut", to: "delay.dcIn", cable: "power" },
        ],
        explain:
          "FV-500HのTUNER OUTは、ペダルを踏んだ深さで音量を変える前の信号を取り出す端子。取扱説明書では、ミニマム・ボリューム(=ペダルを戻したときの最小音量を決めるつまみ)を0にしておき、ペダルを戻した状態でチューニングすれば、アンプから音を出さずにチューニングできると案内されている。チューナーを音の通り道の途中に入れる方法もあるが、TUNER OUTから分けて取り出せば、チューナーを通らないぶん音の通り道が短くなり、ペダルを戻すだけで『消音+チューニング』ができる。このときTU-3のOUTPUTには何もつながないので、TU-3は『音を見るだけ』の役割になる。FV-500Hはハイインピーダンスで設計されたモデルなので、ギターから直接つなぐのが基本。並び順を『ボリュームペダル→ディレイ』にすると、ペダルを戻してもディレイの残響は自然に消えていき、演奏の終わりがきれいになる。逆に『ディレイ→ボリュームペダル』にすると、ペダルを戻した瞬間に残響もまとめて切れる。EXP端子は、FV-500Hを別の機材のエクスプレッションペダル(=つまみの代わりに足で値を動かすペダル)として使うときの出力で、今回は使わない。TU-3のDC OUTからほかのペダルへ電源を分けるときは、つないだペダルの消費電流の合計が、アダプターの供給できる範囲に収まるか、メーカーの案内で確かめよう。",
      },
    },
    {
      id: "smaart_transfer_function",
      order: 107,
      title: "測定ソフトSmaartでスピーカーの鳴り方を測る(2チャンネル測定 / dbx RTA-M + Scarlett 2i2)",
      category: "配線問題",
      hook: "会場で鳴らしたスピーカーの音が、ミキサーから送った音とどれくらい違って聞こえているのか——測定ソフトは『送った音』と『マイクで拾った音』を見比べてそれを調べる。だから入力が2つ必要になる。測定のための配線を組もう。",
      patch: {
        scenario:
          "ライブハウスのPAを任された。本番前に、測定ソフト「Smaart」を入れたノートPCで、メインスピーカーの鳴り方を測りたい。PCには、オーディオインターフェース「Focusrite Scarlett 2i2」をUSBでつないである。Smaartが出すピンクノイズ(=低音から高音まで、耳で聞いて均等に近いバランスで含んだ『シャー』という測定用の音)を、2i2のOUTPUT L(TRS)からアナログミキサー「Yamaha MG10XU」のCH5/6 L/MONO入力(フォーン)へ送る。MG10XUのSTEREO OUT L(XLR)からパワードスピーカー「Yamaha DBR10」へ。同じSTEREO OUT Lのフォーン端子からは、2i2のINPUT 2(TRS)へ『リファレンス(=比べる元の音)』として送り返す。客席に立てた測定用マイク「dbx RTA-M」は、2i2のINPUT 1(XLR)へつなぎ、48Vファンタム電源を入れよう。",
        equipment: [
          { id: "mic", label: "dbx RTA-M(測定用マイク)", icon: "RTA-M", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "interface",
            label: "Focusrite Scarlett 2i2",
            icon: "2i2",
            ports: [
              { id: "in1", label: "INPUT 1 (XLR/TRSコンボ)", type: "xlr", dir: "in" },
              { id: "in2", label: "INPUT 2 (XLR/TRSコンボ)", type: "trs", dir: "in" },
              { id: "outL", label: "OUTPUT L (TRS)", type: "trs", dir: "out" },
              { id: "outR", label: "OUTPUT R (TRS)", type: "trs", dir: "out" },
              { id: "usb", label: "USB-C", type: "usb", dir: "out" },
            ],
          },
          { id: "pc", label: "ノートPC(Smaart)", icon: "PC", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "in" }] },
          {
            id: "mixer",
            label: "Yamaha MG10XU(アナログミキサー)",
            icon: "MG10XU",
            ports: [
              { id: "st56L", label: "CH5/6 L/MONO (フォーン)", type: "trs", dir: "in" },
              { id: "stOutLxlr", label: "STEREO OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "stOutLph", label: "STEREO OUT L (フォーン)", type: "trs", dir: "out" },
              { id: "stOutRxlr", label: "STEREO OUT R (XLR)", type: "xlr", dir: "out" },
            ],
          },
          { id: "spk", label: "Yamaha DBR10(メインスピーカー)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "ts", "usb", "speaker"],
        correctConnections: [
          { from: "interface.usb", to: "pc.usb", cable: "usb" },
          { from: "interface.outL", to: "mixer.st56L", cable: "trs" },
          { from: "mixer.stOutLxlr", to: "spk.in", cable: "xlr" },
          { from: "mixer.stOutLph", to: "interface.in2", cable: "trs" },
          { from: "mic.out", to: "interface.in1", cable: "xlr" },
        ],
        explain:
          "Smaartのような測定ソフトの代表的な使い方が『伝達関数(トランスファーファンクション)測定』。これは、スピーカーへ送り出した音(リファレンス)と、客席のマイクで拾った音(メジャメント)を同時に録り、2つを見比べることで、『スピーカーと部屋を通ったあいだに、どの高さの音がどれだけ増えたり減ったりしたか』を調べる方法。そのため、オーディオインターフェースには最低2つの入力が必要で、1つは測定用マイク、もう1つはミキサーの出力から分けたリファレンスに使う。MG10XUのSTEREO OUTは、XLRとフォーンの両方の端子から同じ音が出るので、XLRをスピーカーへ、フォーンを2i2へ、と分けて使える。リファレンスをミキサーの出力から取ると、ミキサーのEQやフェーダーの影響は2つの信号に同じように入るので打ち消され、『スピーカーと部屋』の影響だけが見えるようになる。測定用マイクのRTA-Mはコンデンサーマイクで、全方向の音を均等に拾い、周波数ごとの感度のかたよりが小さく作られている。ファンタム電源を忘れると音が入らない。また、2つの信号が届くまでの時間の差(マイクまで音が空気中を進む時間)は、Smaart側の『ディレイ・ファインダー』機能で測って合わせる。右のスピーカーを測るときは、STEREO OUT Rに同じようにつなぎ替えよう。",
      },
    },
    {
      id: "xr18_external_router_ipad",
      order: 108,
      title: "デジタルミキサーを外付けWi-FiルーターにつないでiPadで操作する(Behringer XR18 + TP-Link Archer AX55)",
      category: "配線問題",
      hook: "本番中に、iPadのミキサー画面が急に固まった——お客さんのスマホのWi-Fiで電波が混み合うと、ミキサー内蔵のWi-Fiは不安定になりやすい。ミキサーをLANケーブルで外付けルーターにつなぎ、操作用のネットワークをしっかり作る配線を組もう。",
      patch: {
        scenario:
          "小さなライブバーのPAを、本体に操作画面のないデジタルミキサー「Behringer XR18」で組む。ミキサーの操作は、iPadの無料アプリ「X AIR」で客席から行い、PAブースのノートPC(アプリ「X AIR Edit」)でも同時に操作できるようにしたい。内蔵のWi-Fiではなく、Wi-Fiルーター「TP-Link Archer AX55」を使う。XR18のETHERNET端子(RJ45)から、ルーターのLANポート1へLANケーブルでつなぐ。ノートPCも、ルーターのLANポート2へLANケーブルで有線接続する(iPadはルーターのWi-Fiに無線でつなぐので、ケーブルはいらない)。ボーカルの「Shure SM58」はXR18のINPUT 1(XLR)へ。XR18のMAIN OUT L/R(XLR)からパワードスピーカー「Yamaha DBR10」の左右へ、AUX OUT 1(XLR)からステージの返しモニター「Yamaha DBR10」へ送ろう。",
        equipment: [
          { id: "mic", label: "Shure SM58(ボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Behringer XR18(デジタルミキサー)",
            icon: "XR18",
            ports: [
              { id: "in1", label: "INPUT 1 (XLR/フォーンコンボ)", type: "xlr", dir: "in" },
              { id: "mainL", label: "MAIN OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "mainR", label: "MAIN OUT R (XLR)", type: "xlr", dir: "out" },
              { id: "aux1", label: "AUX OUT 1 (XLR)", type: "xlr", dir: "out" },
              { id: "eth", label: "ETHERNET (RJ45)", type: "ethernet", dir: "out" },
            ],
          },
          {
            id: "router",
            label: "TP-Link Archer AX55(Wi-Fiルーター)",
            icon: "Archer",
            ports: [
              { id: "wan", label: "WANポート(インターネット側)", type: "ethernet", dir: "in" },
              { id: "lan1", label: "LANポート1", type: "ethernet", dir: "in" },
              { id: "lan2", label: "LANポート2", type: "ethernet", dir: "out" },
            ],
          },
          { id: "pc", label: "ノートPC(X AIR Edit)", icon: "PC", ports: [{ id: "eth", label: "LAN端子(RJ45)", type: "ethernet", dir: "in" }] },
          { id: "spkL", label: "Yamaha DBR10(メイン左)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR10(メイン右)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "wedge", label: "Yamaha DBR10(返しモニター)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["ethernet", "xlr", "usb", "trs", "speaker"],
        correctConnections: [
          { from: "mic.out", to: "mixer.in1", cable: "xlr" },
          { from: "mixer.eth", to: "router.lan1", cable: "ethernet" },
          { from: "router.lan2", to: "pc.eth", cable: "ethernet" },
          { from: "mixer.mainL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.mainR", to: "spkR.in", cable: "xlr" },
          { from: "mixer.aux1", to: "wedge.in", cable: "xlr" },
        ],
        explain:
          "XR18のように本体に画面やフェーダーのないデジタルミキサーは、タブレットやPCのアプリが操作パネルになる。そのため、操作をつなぐネットワークが切れると、本番中に音量を変えられなくなる。XR18はWi-Fiの電波を自分で出す機能も持っているが、内蔵のWi-Fiは同時につなげる台数が少なく、お客さんのスマホなどで電波が混み合う会場では不安定になりやすい、という声が多い。そこで、ETHERNET端子を外付けのルーターにつなぎ、ルーターのWi-Fiにタブレットをつなぐのが定番の方法だ。このとき、XR18の背面のスイッチを、内蔵Wi-Fiを使う設定から、外部のネットワークにつなぐ設定に切り替えておく。ルーターのWAN(=インターネット側)ポートは、外のネットワークにつなぐための入り口なので、ミキサーやPCはLANポート側につなぐ。LANケーブルは音を運ぶのではなく、ミキサーの『操作の指示』を運んでいる点に注意しよう(音はXLRで別に送っている)。PAブースのPCを有線でつないでおけば、Wi-Fiが不安定になっても、少なくとも1台は確実に操作を続けられる。電波の混み合いを避けるには、ルーターの設定で5GHz帯(=電子レンジやほかの機器と干渉しにくい電波の帯)を使い、ルーターを客席より高い位置に置くとよい。",
      },
    },
    {
      id: "hearing_loop_driver",
      order: 109,
      title: "補聴器を使うお客さんに音を届けるヒアリングループを配線する(Ampetronic ILD300)",
      category: "配線問題",
      hook: "補聴器をつけたお客さんには、会場のスピーカーの音が、反響やまわりの雑音と混ざって聞き取りにくいことがある。ミキサーの音を『磁気』に変えて、補聴器へ直接届ける——ヒアリングループ(磁気ループ)の配線を組もう。",
      patch: {
        scenario:
          "公民館のホールで、トークと弾き語りのイベントを行う。補聴器を使うお客さんのために、ヒアリングループを用意した。客席の床のまわりを1周するように、ループ線(=電線を輪にして床に敷いたもの)を敷いてある。アナログミキサー「Yamaha MG12XU」には、司会の「Shure SM58」をCH1 MIC INPUT(XLR)、弾き語りのボーカル「Shure SM58」をCH2 MIC INPUT(XLR)につなぐ。会場のスピーカーには、MG12XUのST OUT L/R(XLR)からパワードスピーカー「Yamaha DBR10」の左右へ。ヒアリングループ用には、MG12XUのAUX SEND 2(フォーン)から、ループドライバー(=ループ線に電流を流す専用アンプ)「Ampetronic ILD300」のLINE INPUT(フォーン)へ送り、ILD300のLOOP OUTPUT(着脱式の端子)にループ線の両端をつなごう。",
        equipment: [
          { id: "mc", label: "Shure SM58(司会)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          { id: "vox", label: "Shure SM58(弾き語りボーカル)", icon: "SM58", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Yamaha MG12XU(アナログミキサー)",
            icon: "MG12XU",
            ports: [
              { id: "mic1", label: "CH1 MIC INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "mic2", label: "CH2 MIC INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "stL", label: "ST OUT L (XLR)", type: "xlr", dir: "out" },
              { id: "stR", label: "ST OUT R (XLR)", type: "xlr", dir: "out" },
              { id: "aux2", label: "AUX SEND 2 (フォーン)", type: "trs", dir: "out" },
            ],
          },
          {
            id: "loopDrv",
            label: "Ampetronic ILD300(ループドライバー)",
            icon: "ILD300",
            ports: [
              { id: "micIn", label: "MIC INPUT (XLR)", type: "xlr", dir: "in" },
              { id: "lineIn", label: "LINE INPUT (フォーン)", type: "trs", dir: "in" },
              { id: "loopOut", label: "LOOP OUTPUT (着脱式端子)", type: "speaker", dir: "out" },
            ],
          },
          { id: "loop", label: "ループ線(客席の床を1周)", icon: "LOOP", ports: [{ id: "ends", label: "ループ線の両端", type: "speaker", dir: "in" }] },
          { id: "spkL", label: "Yamaha DBR10(左)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR10(右)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR)", type: "xlr", dir: "in" }] },
        ],
        cablePalette: ["xlr", "trs", "speaker", "ts", "rf"],
        correctConnections: [
          { from: "mc.out", to: "mixer.mic1", cable: "xlr" },
          { from: "vox.out", to: "mixer.mic2", cable: "xlr" },
          { from: "mixer.stL", to: "spkL.in", cable: "xlr" },
          { from: "mixer.stR", to: "spkR.in", cable: "xlr" },
          { from: "mixer.aux2", to: "loopDrv.lineIn", cable: "trs" },
          { from: "loopDrv.loopOut", to: "loop.ends", cable: "speaker" },
        ],
        explain:
          "ヒアリングループは、ループ線に音の信号どおりの電流を流し、輪の内側に磁気の場を作るしくみ。多くの補聴器や人工内耳には、この磁気を受け取るTコイル(=磁気を音に戻す小さな部品)が入っていて、補聴器を『T』の設定に切り替えると、会場の反響やまわりの話し声に邪魔されず、マイクの声を直接聞ける。ループ線は普通のスピーカーと違い、『電圧』ではなく『電流』をきちんと流す必要があるため、一般的なパワーアンプではなく、専用のループドライバーを使うのが基本。ILD300にはマイクを直接つなぐXLR入力もあるが、今回はミキサーでまとめた音を送るので、LINE入力を使う。ミキサーから送るときは、メインのST OUTではなく、AUX SENDのように別に音量バランスを作れる出口を使うと、会場スピーカーの音量を変えても、ループの音量が一緒に変わってしまわない。ループ用のミックスには、言葉や歌がはっきり聞こえるマイクだけを入れ、客席の拍手を拾うマイクや大きすぎる楽器の音は控えめにするのがコツ。ILD300にはヘッドホンでループの音を確かめる端子もあるので、本番前に必ず聞いて確認しよう。会場の入口には、ループが使えることを示すマークや案内を掲示しておくと、お客さんが補聴器の設定を切り替えやすい。",
      },
    },
    {
      id: "online_piano_lesson_ag06",
      order: 110,
      title: "オンラインのピアノレッスンを、声もピアノもきれいに届ける配線(Roland FP-30X + Yamaha AG06MK2)",
      category: "配線問題",
      hook: "ノートPCの内蔵マイクでピアノのレッスンをすると、低音はこもり、強く弾くと音が途切れがち。電子ピアノのライン出力と先生のマイクを小さなミキサーでまとめて、PCへ直接送る——オンラインレッスンの配線を組もう。",
      patch: {
        scenario:
          "あなたは自宅でピアノ教室を開いていて、遠方の生徒さんにはビデオ会議アプリでオンラインレッスンをしている。電子ピアノ「Roland FP-30X」のOUTPUT L/MONO・R(フォーン)から、USBミキサー「Yamaha AG06MK2」のCH3/4 LINE入力 L/MONO・R(フォーン)へつなぐ。説明する声は、コンデンサーマイク「Audio-Technica AT2020」をAG06MK2のCH1(XLR/フォーンのコンボ端子)につなぎ、+48Vのファンタム電源を入れて拾う。AG06MK2のUSB-C端子からノートPCへUSBケーブルでつなぎ、生徒さんの声とピアノは、AG06MK2のPHONES端子(フォーン)に挿したヘッドホン「Sony MDR-7506」で聞こう。",
        equipment: [
          {
            id: "piano",
            label: "Roland FP-30X(電子ピアノ)",
            icon: "FP-30X",
            ports: [
              { id: "outL", label: "OUTPUT L/MONO (フォーン)", type: "ts", dir: "out" },
              { id: "outR", label: "OUTPUT R (フォーン)", type: "ts", dir: "out" },
            ],
          },
          { id: "mic", label: "Audio-Technica AT2020(コンデンサーマイク)", icon: "AT2020", ports: [{ id: "out", label: "XLR OUT", type: "xlr", dir: "out" }] },
          {
            id: "mixer",
            label: "Yamaha AG06MK2(USBミキサー)",
            icon: "AG06MK2",
            ports: [
              { id: "ch1", label: "CH1 MIC/LINE (XLR/フォーンコンボ)", type: "xlr", dir: "in" },
              { id: "ch3", label: "CH3/4 LINE L/MONO (フォーン)", type: "ts", dir: "in" },
              { id: "ch4", label: "CH3/4 LINE R (フォーン)", type: "ts", dir: "in" },
              { id: "ch56L", label: "CH5/6 LINE L (RCA)", type: "rca", dir: "in" },
              { id: "phones", label: "PHONES (ステレオフォーン)", type: "trs", dir: "out" },
              { id: "monOut", label: "MONITOR OUT (フォーン)", type: "trs", dir: "out" },
              { id: "usb", label: "USB-C", type: "usb", dir: "out" },
            ],
          },
          { id: "hp", label: "Sony MDR-7506(ヘッドホン)", icon: "7506", ports: [{ id: "in", label: "ステレオフォーンプラグ", type: "trs", dir: "in" }] },
          { id: "pc", label: "ノートPC(ビデオ会議アプリ)", icon: "PC", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "in" }] },
        ],
        cablePalette: ["ts", "trs", "xlr", "usb", "rca"],
        correctConnections: [
          { from: "piano.outL", to: "mixer.ch3", cable: "ts" },
          { from: "piano.outR", to: "mixer.ch4", cable: "ts" },
          { from: "mic.out", to: "mixer.ch1", cable: "xlr" },
          { from: "mixer.phones", to: "hp.in", cable: "trs" },
          { from: "mixer.usb", to: "pc.usb", cable: "usb" },
        ],
        explain:
          "電子ピアノの音をマイクで拾うと、部屋の響きや電子ピアノのスピーカーのクセも一緒に入ってしまう。ライン出力から直接ミキサーへ送れば、ピアノの音そのものをきれいに届けられる。FP-30XのOUTPUTはL/MONO・Rの2つのフォーン端子なので、AG06MK2のCH3/4のLとRへそれぞれつなぐとステレオになる(L/MONOだけにつなぐとモノラル)。CH5/6のRCA端子もライン入力だが、FP-30Xの端子はフォーンなので、そのまま挿せるCH3/4を使う。AT2020はコンデンサーマイクなので、+48Vのファンタム電源がないと音が出ない。AG06MK2は、マイクとピアノの音をまとめてUSBでPCに送るので、ビデオ会議アプリの入力(マイク)と出力(スピーカー)の両方にAG06MK2を選ぶ。ここで大切なのがLOOPBACK(ループバック=PCから出た音を、もう一度PCへの送り返しに混ぜる機能)の設定。配信でBGMを流すときには便利だが、ビデオ会議では、生徒さんの声がそのまま生徒さんに返ってしまい、こだまのように聞こえる原因になるので、オフにしておく。また、ビデオ会議アプリは、話し声を聞きやすくするために雑音を消したり音量をならしたりする処理を自動でかけるため、ピアノの音が途切れたり小さくなったりしやすい。アプリの設定に、音楽向けに元の音をそのまま送るモードがあれば、オンにしておこう。",
      },
    },
    {
      id: "theater_qlab_multi_output",
      order: 111,
      title: "演劇の効果音を、PCから別々のスピーカーへ出し分ける(QLab + MOTU UltraLite mk5)",
      category: "配線問題",
      hook: "電話の着信音は舞台の上から、雷の低い音は客席の床から——演劇の効果音は『どこから聞こえるか』も演出のうち。効果音ソフトの音を、オーディオインターフェースの別々の出力からそれぞれのスピーカーへ送り分ける配線を組もう。",
      patch: {
        scenario:
          "小劇場の芝居で、あなたは音響オペレーターを担当する。効果音とBGMは、演劇の音出し用ソフト「QLab」を入れた「MacBook Pro」から出す。MacBook ProとオーディオインターフェースMOTU「UltraLite mk5」をUSB-Cケーブルでつなぐ。BGMは客席の左右に置いたパワードスピーカー「Yamaha DBR12」2台から流したいので、UltraLite mk5のLINE OUT 1・2(TRSフォーン)をそれぞれ左右のDBR12の入力へ。電話の着信音やドアのノックなど『舞台の上で鳴っている音』は、舞台奥のセットの陰に置いた「Yamaha DBR10」から鳴らすので、LINE OUT 3をつなぐ。雷や地鳴りの低い音は、客席の床に置いたサブウーファー「Yamaha DXS12mkII」だけから鳴らしたいので、LINE OUT 4をつなごう。スピーカーの入力はどれもXLR/フォーンのコンボ端子で、すべてTRSフォーンケーブルで配線する。",
        equipment: [
          { id: "mac", label: "MacBook Pro(QLab)", icon: "Mac", ports: [{ id: "usb", label: "USB-C", type: "usb", dir: "out" }] },
          {
            id: "motu",
            label: "MOTU UltraLite mk5(オーディオインターフェース)",
            icon: "UL mk5",
            ports: [
              { id: "usb", label: "USB-C", type: "usb", dir: "in" },
              { id: "micIn1", label: "MIC/LINE/INST IN 1 (コンボ)", type: "xlr", dir: "in" },
              { id: "out1", label: "LINE OUT 1 (TRSフォーン)", type: "trs", dir: "out" },
              { id: "out2", label: "LINE OUT 2 (TRSフォーン)", type: "trs", dir: "out" },
              { id: "out3", label: "LINE OUT 3 (TRSフォーン)", type: "trs", dir: "out" },
              { id: "out4", label: "LINE OUT 4 (TRSフォーン)", type: "trs", dir: "out" },
              { id: "out5", label: "LINE OUT 5 (TRSフォーン)", type: "trs", dir: "out" },
              { id: "spdifOut", label: "S/PDIF OUT (RCA)", type: "rca", dir: "out" },
            ],
          },
          { id: "spkL", label: "Yamaha DBR12(客席・左)", icon: "DBR12", ports: [{ id: "in", label: "INPUT (XLR/フォーンコンボ)", type: "trs", dir: "in" }] },
          { id: "spkR", label: "Yamaha DBR12(客席・右)", icon: "DBR12", ports: [{ id: "in", label: "INPUT (XLR/フォーンコンボ)", type: "trs", dir: "in" }] },
          { id: "spkStage", label: "Yamaha DBR10(舞台奥・セットの陰)", icon: "DBR10", ports: [{ id: "in", label: "INPUT (XLR/フォーンコンボ)", type: "trs", dir: "in" }] },
          { id: "sub", label: "Yamaha DXS12mkII(サブウーファー)", icon: "DXS12", ports: [{ id: "in", label: "INPUT (XLR/フォーンコンボ)", type: "trs", dir: "in" }] },
        ],
        cablePalette: ["usb", "trs", "ts", "xlr", "rca"],
        correctConnections: [
          { from: "mac.usb", to: "motu.usb", cable: "usb" },
          { from: "motu.out1", to: "spkL.in", cable: "trs" },
          { from: "motu.out2", to: "spkR.in", cable: "trs" },
          { from: "motu.out3", to: "spkStage.in", cable: "trs" },
          { from: "motu.out4", to: "sub.in", cable: "trs" },
        ],
        explain:
          "QLabは、効果音やBGMを『キュー』(=きっかけごとに用意した再生の単位)として順番に並べ、GOボタンを押すたびに次の音を出していく、演劇やイベントの定番ソフト。キューごとに『どの出力から鳴らすか』を決められるので、BGMのキューはOUT 1・2、着信音のキューはOUT 3、雷のキューはOUT 4、というように割り当てておけば、1台のPCから音の出どころを演出どおりに切り替えられる。役者が受話器を取る芝居なら、客席のスピーカーより舞台奥のスピーカーから鳴ったほうが、本当にその場で電話が鳴っているように聞こえる。サブウーファーに専用の出力を用意しておくと、雷や地鳴りのような低い音だけを足元から響かせ、セリフの邪魔になりやすいBGMの低音は送らない、といった使い分けができる。UltraLite mk5のLINE OUTはバランス出力(=ノイズを打ち消せる3芯の方式)なので、客席の後ろの操作席から舞台まで長く引き回しても、TRSケーブルならノイズが乗りにくい。距離が長いときは、片側がTRS・もう片側がXLRのケーブルで、スピーカー側をXLRにしてもよい。QLabは無料のままでは使える出力チャンネル数などに制限があるとされ、多チャンネルで出し分けるには有料のオーディオライセンスが必要になるので、最新の条件は公式サイトで確認しよう。配線や抜き差しは、スピーカーの電源を切ってから行い、電源を入れるときはPCとインターフェース→スピーカーの順、切るときはその逆にすると、大きな『ボン』という音でスピーカーを傷めずにすむ。",
      },
    },
  ],
};
