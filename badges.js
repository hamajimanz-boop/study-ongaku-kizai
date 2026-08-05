/* 称号(バッジ)定義 — 学習の記録(localStorageの進捗データ)から動的に判定する。
   コース単位・ジャンル単位の称号はwindow.COURSES/window.GENRESから自動生成されるため、
   コースやジャンルが増えても手作業でバッジを追加する必要はない。 */
window.getBadgeStats = function getBadgeStats(state) {
  const courseIdsFn = () => Object.keys(window.COURSES).sort((a, b) => window.COURSES[a].order - window.COURSES[b].order);
  let totalRealUnits = 0;
  let totalMastered = 0;
  let totalAttempts = 0;
  let totalCorrect = 0;
  let totalQuestions = 0;
  let hasPerfect = false;
  let hasComeback = false;
  const studyDays = new Set();

  courseIdsFn().forEach((cid) => {
    const course = window.COURSES[cid];
    const realUnits = course.units.filter((u) => !u.stub);
    totalRealUnits += realUnits.length;
    realUnits.forEach((u) => {
      const us = (state[cid] && state[cid][u.id]) || null;
      if (!us) return;
      if (us.status === "mastered") totalMastered++;
      const history = us.history || [];
      let everFailed = false;
      history.forEach((h) => {
        totalAttempts++;
        totalCorrect += h.score;
        totalQuestions += h.total;
        studyDays.add(h.date);
        if (h.score === h.total) hasPerfect = true;
        if (h.score < h.total) everFailed = true;
      });
      if (everFailed && us.status === "mastered") hasComeback = true;
    });
  });

  return { totalRealUnits, totalMastered, totalAttempts, totalCorrect, totalQuestions, hasPerfect, hasComeback, studyDays };
};

window.getAllBadges = function getAllBadges(state) {
  const stats = window.getBadgeStats(state);
  const badges = [];

  badges.push({
    id: "first_quiz", icon: "🔰", title: "はじめの一歩賞",
    desc: "はじめてクイズに挑戦した",
    earned: stats.totalAttempts >= 1,
  });
  badges.push({
    id: "first_perfect", icon: "💯", title: "パーフェクト賞",
    desc: "クイズで満点を取った",
    earned: stats.hasPerfect,
  });
  badges.push({
    id: "first_mastered", icon: "🌱", title: "定着の芽生え賞",
    desc: "はじめて1つの単元が「定着済み」になった",
    earned: stats.totalMastered >= 1,
  });
  badges.push({
    id: "ten_mastered", icon: "🌳", title: "継続学習者賞",
    desc: "10単元が定着済みになった",
    earned: stats.totalMastered >= 10,
  });
  badges.push({
    id: "thirty_mastered", icon: "🏔️", title: "知識の山賞",
    desc: "30単元が定着済みになった",
    earned: stats.totalMastered >= 30,
  });
  badges.push({
    id: "fifty_mastered", icon: "👑", title: "教養の王賞",
    desc: "50単元が定着済みになった",
    earned: stats.totalMastered >= 50,
  });
  badges.push({
    id: "streak_3", icon: "🔥", title: "3日連続学習賞",
    desc: "異なる3日にクイズへ取り組んだ",
    earned: stats.studyDays.size >= 3,
  });
  badges.push({
    id: "streak_7", icon: "🔥🔥", title: "1週間継続賞",
    desc: "異なる7日にクイズへ取り組んだ",
    earned: stats.studyDays.size >= 7,
  });
  badges.push({
    id: "streak_30", icon: "🔥🔥🔥", title: "習慣化達成賞",
    desc: "異なる30日にクイズへ取り組んだ",
    earned: stats.studyDays.size >= 30,
  });
  badges.push({
    id: "quiz_veteran_20", icon: "📝", title: "クイズ挑戦20回賞",
    desc: "クイズに合計20回挑戦した",
    earned: stats.totalAttempts >= 20,
  });
  badges.push({
    id: "quiz_veteran_100", icon: "📚", title: "クイズ挑戦100回賞",
    desc: "クイズに合計100回挑戦した",
    earned: stats.totalAttempts >= 100,
  });
  badges.push({
    id: "comeback", icon: "🔁", title: "不屈の精神賞",
    desc: "一度間違えた単元を、後で定着済みまで持ち直した",
    earned: stats.hasComeback,
  });
  badges.push({
    id: "hundred_correct", icon: "✅", title: "百問正解賞",
    desc: "クイズで合計100問正解した",
    earned: stats.totalCorrect >= 100,
  });

  // コースごとの「マスター」称号(コースが増えると自動で増える)
  Object.keys(window.COURSES)
    .sort((a, b) => window.COURSES[a].order - window.COURSES[b].order)
    .forEach((cid) => {
      const course = window.COURSES[cid];
      const realUnits = course.units.filter((u) => !u.stub);
      if (!realUnits.length) return;
      const masteredCount = realUnits.filter((u) => {
        const us = state[cid] && state[cid][u.id];
        return us && us.status === "mastered";
      }).length;
      badges.push({
        id: `course_master_${cid}`, icon: "🏆", title: `${course.title} マスター`,
        desc: `このコースの全${realUnits.length}単元を定着させた`,
        earned: masteredCount === realUnits.length,
      });
    });

  // ジャンルごとの「制覇」称号
  (window.GENRES || []).forEach((genre) => {
    const courses = genre.courseIds.map((cid) => window.COURSES[cid]).filter(Boolean);
    let realUnits = 0;
    let mastered = 0;
    courses.forEach((course) => {
      const units = course.units.filter((u) => !u.stub);
      realUnits += units.length;
      mastered += units.filter((u) => {
        const us = state[course.id] && state[course.id][u.id];
        return us && us.status === "mastered";
      }).length;
    });
    if (!realUnits) return;
    badges.push({
      id: `genre_master_${genre.id}`, icon: "🎖️", title: `${genre.icon} ${genre.title} 制覇賞`,
      desc: `このジャンルの全${realUnits}単元を定着させた`,
      earned: mastered === realUnits,
    });
  });

  return badges;
};
