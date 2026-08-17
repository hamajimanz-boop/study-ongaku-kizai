/* ジャンル定義 — コースが増えすぎてホーム画面が煩雑にならないよう、
   ホーム→ジャンル→コース→単元、という1階層はさむための分類データ。
   新しいコースを追加した時は、該当するジャンルの courseIds に1行足すだけでよい。 */
window.GENRES = [
  {
    id: "hardware_instruments",
    title: "機材ブランド・楽器メーカー",
    icon: "HW",
    description: "マイク・コンソール・モニタースピーカーなどの音響機材メーカーと、ギター/ベース/ドラム/シンバルなどの楽器メーカーの沿革・お金の話(各社の歴史・製品ラインナップ)。",
    color: "#2a78d6",
    courseIds: ["hardware_dtm", "instrument_makers"],
  },
  {
    id: "software",
    title: "DAW・ソフトウェア",
    icon: "SW",
    description: "Pro Tools・Logic Pro・Ableton LiveなどのDAWを作る会社と、プラグインメーカーの沿革・ビジネス。",
    color: "#0e7490",
    courseIds: ["daw_software", "plugin_makers"],
  },
  {
    id: "acoustics_theory",
    title: "音響理論・音響概論(物理と工学)",
    icon: "AC",
    description: "「音響概論」にあたる編。部屋の音響(定在波・吸音・拡散・シュレーダー周波数)から、聴覚のしくみ・波動物理・電気の基礎・磁気記録まで、音の物理と工学的な土台をゼロから積み上げる。機材メーカーの話ではなく、音そのものの理論。",
    color: "#7a1f3d",
    courseIds: ["studio_acoustics", "sound_engineering_theory"],
  },
  {
    id: "money_business",
    title: "お金・ビジネス",
    icon: "¥",
    description: "個人事業主の簿記・税務・実務と、印税・著作権・レーベル契約など音楽業界特有のお金の話。",
    color: "#2f9e58",
    courseIds: ["kojin_jigyou", "music_business_money"],
  },
  {
    id: "mix_technique",
    title: "ミックス・マスタリング実践",
    icon: "MX",
    description: "会社の歴史ではなく「今すぐセッションで使える」実践テクニック集。クリップゲインの使い方からLUFSの目標値まで、編集・ミキシング・マスタリングの判断基準と数値目安。",
    color: "#a21caf",
    courseIds: ["mix_mastering_edit"],
  },
  {
    id: "practice_exercises",
    title: "実践問題編(配線パズル・ケーススタディ)",
    icon: "PR",
    description: "「機材が欲しくなって調べた瞬間」がいちばん知識が身につく、という発想の実践編。様々な宅録デスクの配線をドラッグ&ドロップで組み立てる配線パズル、お金の具体的な数字を自分で計算して答え合わせするケーススタディ、ミキシング中の症状に即答するミックス判断クイズを収録。",
    color: "#c2410c",
    courseIds: ["gear_patch_practice", "money_case_studies", "mix_tips_practice"],
  },
];
