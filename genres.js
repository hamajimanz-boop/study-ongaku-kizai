/* ジャンル定義 — コースが増えすぎてホーム画面が煩雑にならないよう、
   ホーム→ジャンル→コース→単元、という1階層はさむための分類データ。
   新しいコースを追加した時は、該当するジャンルの courseIds に1行足すだけでよい。 */
window.GENRES = [
  {
    id: "hardware_instruments",
    title: "音響ハードウェア・楽器",
    icon: "🎚️",
    description: "マイク・コンソール・モニタースピーカーなどの音響機材メーカーと、ギター/ベース/ドラム/シンバルなどの楽器メーカーの沿革・お金の話。",
    color: "#2a78d6",
    courseIds: ["hardware_dtm", "instrument_makers"],
  },
  {
    id: "software",
    title: "DAW・ソフトウェア",
    icon: "💻",
    description: "Pro Tools・Logic Pro・Ableton LiveなどのDAWを作る会社と、プラグインメーカーの沿革・ビジネス。",
    color: "#0e7490",
    courseIds: ["daw_software", "plugin_makers"],
  },
  {
    id: "acoustics_theory",
    title: "音響理論・工学",
    icon: "📐",
    description: "部屋の音響(定在波・吸音・拡散)から、聴覚のしくみ・電気の基礎・磁気記録まで、音の物理と工学的な土台。",
    color: "#7a1f3d",
    courseIds: ["studio_acoustics", "sound_engineering_theory"],
  },
  {
    id: "money_business",
    title: "お金・ビジネス",
    icon: "💰",
    description: "個人事業主の簿記・税務・実務と、印税・著作権・レーベル契約など音楽業界特有のお金の話。",
    color: "#2f9e58",
    courseIds: ["kojin_jigyou", "music_business_money"],
  },
];
