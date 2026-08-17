/* 音楽機材の教養 — 学習アプリ本体
   コース(教材+クイズ)は courses/*.js が window.COURSES にデータを登録する。
   進捗は localStorage に保存し、SM-2簡易版の間隔反復で次回復習日を計算する。 */

const STORAGE_KEY = "ongaku_kizai_progress_v1";
const STEPS = [1, 3, 7, 16, 35]; // 復習間隔(日)。この回数を正解し切ったら卒業(mastered)

const root = document.getElementById("app");

// ---------- state ----------
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function addDays(dateStr, n) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}
function unitState(state, courseId, unitId) {
  return (state[courseId] && state[courseId][unitId]) || null;
}
function ensureCourse(state, courseId) {
  if (!state[courseId]) state[courseId] = {};
  return state[courseId];
}

// ---------- course lookup ----------
function getCourse(courseId) {
  return window.COURSES[courseId];
}
function getUnit(courseId, unitId) {
  const c = getCourse(courseId);
  if (!c) return null;
  return c.units.find((u) => u.id === unitId) || null;
}
function courseIds() {
  return Object.keys(window.COURSES).sort((a, b) => window.COURSES[a].order - window.COURSES[b].order);
}

// ---------- genre lookup ----------
function genres() {
  return window.GENRES || [];
}
function getGenre(genreId) {
  return genres().find((g) => g.id === genreId) || null;
}
function coursesInGenre(genreId) {
  const g = getGenre(genreId);
  if (!g) return [];
  return g.courseIds.map((cid) => getCourse(cid)).filter(Boolean);
}

// ---------- routing ----------
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  return parts;
}

function render() {
  const parts = parseHash();
  if (parts.length === 0) return renderHome();
  if (parts[0] === "genre" && parts[1]) return renderGenre(parts[1]);
  if (parts[0] === "course" && parts[1]) return renderCourse(parts[1]);
  if (parts[0] === "lesson" && parts[1] && parts[2]) return renderLesson(parts[1], parts[2]);
  if (parts[0] === "quiz" && parts[1] && parts[2]) return renderQuiz(parts[1], parts[2]);
  if (parts[0] === "patch" && parts[1] && parts[2]) return renderPatch(parts[1], parts[2]);
  if (parts[0] === "case" && parts[1] && parts[2]) return renderCase(parts[1], parts[2]);
  if (parts[0] === "tip" && parts[1] && parts[2]) return renderTip(parts[1], parts[2]);
  if (parts[0] === "progress") return renderProgress();
  if (parts[0] === "glossary") return renderGlossary();
  renderHome();
}

// ---------- helpers: status ----------
function computeStatus(state, courseId, unitId) {
  const us = unitState(state, courseId, unitId);
  if (!us) return "new";
  if (us.status === "mastered") return "mastered";
  if (us.nextReview <= todayStr()) return "due";
  return "learning";
}
const STATUS_LABEL = {
  new: "未着手",
  learning: "学習中",
  due: "復習待ち",
  mastered: "定着済み",
  stub: "準備中",
};
const STATUS_CLASS = {
  new: "badge-muted",
  learning: "badge-blue",
  due: "badge-orange",
  mastered: "badge-aqua",
  stub: "badge-muted",
};

function badge(status) {
  return `<span class="badge ${STATUS_CLASS[status]}">${STATUS_LABEL[status]}</span>`;
}

// ---------- shared: kind-aware routing ----------
// 通常コース(quiz形式)は 教材(lesson)→クイズ(quiz) の2ステップだが、
// kind:"patch"(配線パズル)/kind:"case"(ケーススタディ)は教材とテストが1画面に
// 統合されているため、入口・復習ともに同じURLへ飛ばす。
function entryHref(course, unit) {
  if (course.kind === "patch") return `#/patch/${course.id}/${unit.id}`;
  if (course.kind === "case") return `#/case/${course.id}/${unit.id}`;
  if (course.kind === "tip") return `#/tip/${course.id}/${unit.id}`;
  return `#/lesson/${course.id}/${unit.id}`;
}
function reviewHref(course, unit) {
  if (course.kind === "patch") return `#/patch/${course.id}/${unit.id}`;
  if (course.kind === "case") return `#/case/${course.id}/${unit.id}`;
  if (course.kind === "tip") return `#/tip/${course.id}/${unit.id}`;
  return `#/quiz/${course.id}/${unit.id}`;
}

// ---------- shared: small inline icons (SVG, no emoji) ----------
const ICONS = {
  flame: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12.5 2c.7 3.1-2.2 4.6-3.5 7A7 7 0 1019 13c0-2.4-1.2-3.8-2.3-4.9.4 2.6-1 4-2.3 4-1.6 0-2.4-1.6-1.4-3.7.9-1.9.9-4-.5-6.4z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M17 4V2H7v2H2v3a5 5 0 005 5h.06A6 6 0 0011 17.65V20H8v2h8v-2h-3v-2.35A6 6 0 0016.94 9H17a5 5 0 005-5V4h-5zM4 7V6h3.05A6.9 6.9 0 008 9.8 3 3 0 014 7zm16 0a3 3 0 01-4 2.8A6.9 6.9 0 0016.95 6H20v1z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M4 20V10h4v10H4zm6 0V4h4v16h-4zm6 0v-7h4v7h-4z"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  play: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M8 5.14v13.72c0 .8.87 1.29 1.54.83l10.14-6.86a1 1 0 000-1.66L9.54 4.3A1 1 0 008 5.14z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M6 2h8l6 6v14H6V2zm7 1.5V9h5.5L13 3.5zM8 13h8v1.6H8V13zm0 3.2h8v1.6H8v-1.6zm0-6.4h3v1.6H8V9.8z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M4 4h16v11H8l-4 4V4z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 5V2L7 6l5 4V7a5 5 0 11-4.9 6H5a7 7 0 107-8z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2l1.8 5.7L19.5 9l-5.7 1.8L12 16.5l-1.8-5.7L4.5 9l5.7-1.3L12 2z"/></svg>',
};

// ---------- shared: circular progress ring (SVG) ----------
function ringSvg(pct, size, stroke) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  const center = size / 2;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="${stroke}"></circle>
      <circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="#fff" stroke-width="${stroke}"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        transform="rotate(-90 ${center} ${center})"></circle>
    </svg>`;
}

// ---------- shared: course card ----------
function courseProgress(course, state) {
  const realUnits = course.units.filter((u) => !u.stub);
  let masteredCount = 0;
  let startedCount = 0;
  course.units.forEach((u) => {
    if (u.stub) return;
    const st = computeStatus(state, course.id, u.id);
    if (st === "mastered") masteredCount++;
    if (st !== "new") startedCount++;
  });
  return { realUnits, masteredCount, startedCount };
}

function courseCardHtml(course, state) {
  const { realUnits, masteredCount, startedCount } = courseProgress(course, state);
  const pct = realUnits.length ? Math.round((masteredCount / realUnits.length) * 100) : 0;
  return `
      <a class="course-card" href="#/course/${course.id}">
        <div class="course-card-head">
          <span class="course-dot" style="background:${course.color}; color:${course.color}"></span>
          <h3>${course.title}</h3>
          ${course.active ? '<span class="badge badge-blue">アクティブ</span>' : '<span class="badge badge-muted">一時停止</span>'}
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${course.color}"></div></div>
        <div class="course-card-foot">
          <span>${masteredCount} / ${realUnits.length} 単元 定着</span>
          <span>${startedCount} 単元 着手済み</span>
        </div>
      </a>`;
}

// ---------- HOME ----------
function homeGreeting(streak, dueCount, newCount) {
  if (streak >= 7) return { title: `${streak}日連続、絶好調です`, sub: "この調子でどんどん積み上げていきましょう。" };
  if (streak >= 1) return { title: `${streak}日連続で学習中!`, sub: "今日も1つ進めて、記録を伸ばしましょう。" };
  if (dueCount > 0) return { title: "復習のタイミングです", sub: "忘れる前に思い出すと、記憶がぐっと定着します。" };
  if (newCount > 0) return { title: "新しい単元、始めてみませんか?", sub: "今日の1単元が、教養の積み重ねになります。" };
  return { title: "おかえりなさい", sub: "気になるジャンルから、気軽に学び始めましょう。" };
}

function renderHome() {
  const state = loadState();
  const today = todayStr();

  let dueItems = [];
  let nextNewItems = [];
  let totalRealUnits = 0;
  let totalMastered = 0;
  const studyDays = new Set();

  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    course.units.forEach((u) => {
      if (u.stub) return;
      totalRealUnits++;
      const st = computeStatus(state, cid, u.id);
      if (st === "due") dueItems.push({ course, unit: u });
      if (st === "mastered") totalMastered++;
      const us = unitState(state, cid, u.id);
      (us && us.history ? us.history : []).forEach((h) => studyDays.add(h.date));
    });
    const nextNew = course.units.find((u) => !u.stub && computeStatus(state, cid, u.id) === "new");
    if (nextNew) nextNewItems.push({ course, unit: nextNew });
  });

  const overallPct = totalRealUnits ? Math.round((totalMastered / totalRealUnits) * 100) : 0;
  const streak = computeStudyStreak(studyDays);
  const greeting = homeGreeting(streak, dueItems.length, nextNewItems.length);

  // ---- アクティブなコース(タイル) ----
  // 「アクティブ」の名の通り、実際に着手済み(startedCount>0)のコースだけを表示する。
  // 未着手のコースをここに混ぜると、たまたまorderが若いコースが常に先頭表示され、
  // 「触ってもいないのに目立って表示される」という誤解を招くため表示しない。
  const genreLookup = {};
  genres().forEach((g) => g.courseIds.forEach((cid) => (genreLookup[cid] = g)));
  const courseTiles = courseIds()
    .map((cid) => getCourse(cid))
    .filter((c) => c.active)
    .map((course) => {
      const { realUnits, masteredCount, startedCount } = courseProgress(course, state);
      const pct = realUnits.length ? Math.round((masteredCount / realUnits.length) * 100) : 0;
      return { course, pct, started: startedCount > 0, genre: genreLookup[course.id] };
    })
    .filter((x) => x.started && x.pct < 100)
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 3);

  const tileHtml = courseTiles
    .map(
      (x) => `
      <div class="tile" style="background:${x.course.color}">
        <div class="tile-top">
          <span class="tile-icon">${(x.genre && x.genre.icon) || ""}</span>
          <h3>${x.course.title}</h3>
        </div>
        <p>学習中</p>
        <div class="bar-track"><div class="bar-fill" style="width:${x.pct}%"></div></div>
        <div class="tile-foot">
          <span class="tile-pct">${x.pct}% 完了</span>
          <a class="tile-btn" href="#/course/${x.course.id}">続ける →</a>
        </div>
      </div>`
    )
    .join("");

  // ---- 実績サイドカード(獲得済みバッジを最大6件アイコン表示) ----
  const allBadges = window.getAllBadges ? window.getAllBadges(state) : [];
  const earnedBadges = allBadges.filter((b) => b.earned);
  const lockedBadges = allBadges.filter((b) => !b.earned);
  const sideBadges = earnedBadges.slice(0, 6).concat(lockedBadges.slice(0, Math.max(0, 6 - earnedBadges.length)));
  const miniBadgeHtml = sideBadges
    .map(
      (b) => `
      <div class="mini-badge ${b.earned ? "" : "locked"}" title="${b.desc}">
        <span class="mini-badge-icon">${ICONS.trophy}</span>
        <span>${b.title}</span>
      </div>`
    )
    .join("");

  // ジャンルは「別ページに飛ぶボタン」ではなく、ホーム画面上の見出し+その場でコース一覧、
  // という形にする(クリック1回でコースの中身が見えるように、中間ページを挟まない)。
  const genreSectionsHtml = genres()
    .map((g) => {
      const gCourses = coursesInGenre(g.id);
      const cardsHtml = gCourses.map((course) => courseCardHtml(course, state)).join("");
      return `
      <section class="section genre-block">
        <h2><span class="genre-icon genre-icon-sm" style="--genre-color:${g.color}">${g.icon}</span>${g.title}</h2>
        <p class="lead">${g.description}</p>
        <div class="course-grid">${cardsHtml}</div>
      </section>`;
    })
    .join("");

  const dueHtml = dueItems.length
    ? dueItems
        .map(
          (x) => `
      <a class="task-row" href="${reviewHref(x.course, x.unit)}">
        <span class="task-tag" style="background:${x.course.color}">復習</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title}</small></span>
        <span class="task-arrow">${x.course.kind ? "もう一度挑戦する →" : "テストを受ける →"}</span>
      </a>`
        )
        .join("")
    : `<p class="empty">今日の復習はありません。新しい単元に進みましょう。</p>`;

  const newHtml = nextNewItems.length
    ? nextNewItems
        .map(
          (x) => `
      <a class="task-row" href="${entryHref(x.course, x.unit)}">
        <span class="task-tag" style="background:${x.course.color}">新規</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title} / #${String(x.unit.order).padStart(2, "0")}</small></span>
        <span class="task-arrow">${x.course.kind ? "挑戦する →" : "教材を読む →"}</span>
      </a>`
        )
        .join("")
    : "";

  root.innerHTML = `
    <header class="topbar">
      <h1>音楽機材の教養</h1>
      <nav><a href="#/progress">進捗・実績</a> <a href="#/glossary">音響用語辞典</a></nav>
    </header>

    <div class="hero-banner">
      <div class="hero-ring">
        ${ringSvg(overallPct, 88, 9)}
        <div class="hero-ring-label"><strong>${overallPct}%</strong><span>理解度</span></div>
      </div>
      <div class="hero-body">
        <p class="hero-title">${greeting.title}</p>
        <p class="hero-sub">${greeting.sub}</p>
        <div class="hero-chips">
          <span class="hero-chip">${ICONS.flame} 連続 ${streak}日</span>
          <span class="hero-chip">${ICONS.trophy} 定着 ${totalMastered}/${totalRealUnits}単元</span>
          ${dueItems.length ? `<span class="hero-chip">${ICONS.refresh} 復習待ち ${dueItems.length}件</span>` : ""}
        </div>
      </div>
    </div>

    ${tileHtml ? `
    <section class="section">
      <h2>アクティブなコース</h2>
      <div class="tile-grid">${tileHtml}</div>
    </section>` : ""}

    ${genreSectionsHtml}

    <div class="home-columns">
      <section class="section" style="margin-bottom:0">
        <h2>今日やること <small>${today}</small></h2>
        <div class="task-list">${dueHtml}${newHtml}</div>
      </section>
      <div class="side-card">
        <h2 style="margin:0 0 4px">実績</h2>
        <p class="lead" style="margin:0 0 10px;font-size:12.5px">${earnedBadges.length} / ${allBadges.length} 個の称号を獲得</p>
        <div class="mini-badge-row">${miniBadgeHtml}</div>
        <div class="side-card-foot"><a href="#/progress">すべての実績を見る →</a></div>
      </div>
    </div>
  `;
}

// ---------- GENRE ----------
function renderGenre(genreId) {
  const state = loadState();
  const genre = getGenre(genreId);
  if (!genre) return renderHome();

  const courseCards = coursesInGenre(genreId)
    .map((course) => courseCardHtml(course, state))
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/">← ホーム</a>
      <h1>${genre.icon} ${genre.title}</h1>
    </header>
    <section class="section">
      <p class="lead">${genre.description}</p>
      <div class="course-grid">${courseCards}</div>
    </section>
  `;
}

// ---------- COURSE ----------
function renderCourse(courseId) {
  const state = loadState();
  const course = getCourse(courseId);
  if (!course) return renderHome();
  const backHref = "#/";
  const backLabel = "ホーム";

  const rows = course.units
    .map((u) => {
      const st = u.stub ? "stub" : computeStatus(state, courseId, u.id);
      const clickable = !u.stub;
      const inner = `
        <span class="unit-order">#${String(u.order).padStart(2, "0")}</span>
        <span class="unit-info">
          <strong>${u.title}</strong>
          <small>${u.category || ""} ${u.hook ? "— " + u.hook : ""}</small>
        </span>
        ${badge(st)}
      `;
      return clickable
        ? `<a class="unit-row" href="${entryHref(course, u)}">${inner}</a>`
        : `<div class="unit-row unit-row-disabled">${inner}</div>`;
    })
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="${backHref}">← ${backLabel}</a>
      <h1>${course.title}</h1>
    </header>
    <section class="section">
      <p class="lead">${course.description || ""}</p>
      <div class="unit-list">${rows}</div>
    </section>
  `;
}

// ---------- LESSON ----------
function renderLesson(courseId, unitId) {
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);
  if (!course || !unit) return renderHome();
  if (!unit.sections) return renderCourse(courseId);

  if (unit.stub) {
    root.innerHTML = `
      <header class="topbar">
        <a class="back" href="#/course/${courseId}">← ${course.title}</a>
      </header>
      <section class="section"><p class="empty">この教材はまだ準備中です。</p></section>`;
    return;
  }

  // 各セクションの合間に、unit.quizの問題を使い回した「ちょっと確認」チェックポイントを挟み込む
  // (本番のクイズ(drawQuiz)から問題を減らすわけではなく、同じ問題を先読みで一度使うことで
  //  「読む→問われる→読む」という対話的なリズムを作る。新しい原稿は一切追加しない)
  const checkpointCount = Math.min(unit.sections.length - 1, unit.quiz.length, 3);
  const checkpointAtSection = {};
  for (let k = 1; k <= checkpointCount; k++) {
    const sectionIdx = Math.max(0, Math.min(unit.sections.length - 1, Math.round((unit.sections.length * k) / (checkpointCount + 1)) - 1));
    const quizIdx = Math.max(0, Math.min(unit.quiz.length - 1, Math.round((unit.quiz.length * k) / (checkpointCount + 1)) - 1));
    checkpointAtSection[sectionIdx] = quizIdx;
  }

  const sectionsHtml = unit.sections
    .map((s, i) => {
      const bodyHtml = s.dialogue ? dialogueHtml(s.dialogue) : s.paragraphs.map((p) => `<p>${p}</p>`).join("");
      const sectionHtml = `
      <div class="lesson-section">
        <h3>${s.heading}</h3>
        ${s.image ? `<img class="lesson-image" src="images/${s.image}" alt="${s.heading}">` : ""}
        ${s.imageCredit ? `<p class="image-credit">${s.imageCredit}</p>` : ""}
        ${bodyHtml}
      </div>`;
      const cpQuizIdx = checkpointAtSection[i];
      return sectionHtml + (cpQuizIdx !== undefined ? checkpointHtml(unit.quiz[cpQuizIdx], `${courseId}-${unitId}-${i}`) : "");
    })
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${courseId}">← ${course.title}</a>
    </header>
    <article class="lesson">
      <p class="unit-eyebrow">#${String(unit.order).padStart(2, "0")} ${unit.category || ""}</p>
      <h1>${unit.title}</h1>
      <div class="hook-box">${unit.hook}</div>
      ${unit.image ? `<img class="lesson-image lesson-image-hero" src="images/${unit.image}" alt="${unit.title}">` : ""}
      ${sectionsHtml}
      ${furtherLearningHtml(unit)}
      <a class="btn btn-primary" href="#/quiz/${courseId}/${unitId}">クイズに挑戦する →</a>
    </article>
  `;

  wireCheckpoints();
}

// ---------- lesson: dialogue-style sections ----------
// sectionのparagraphsの代わりに dialogue: [{who: "sensei"|"mina", text: "..."}] を
// 書くと、対話(チャット吹き出し)形式でレッスンを表示できる(paragraphsとは併用不可、
// どちらか一方を書く)。
const DIALOGUE_PERSONS = {
  sensei: { name: "先生", initial: "先" },
  mina: { name: "ミナ", initial: "ミ" },
};
function dialogueHtml(turns) {
  return `<div class="dialogue-list">${turns
    .map((t) => {
      const p = DIALOGUE_PERSONS[t.who] || DIALOGUE_PERSONS.sensei;
      return `
      <div class="dialogue-turn ${t.who}">
        <span class="dialogue-avatar">${p.initial}</span>
        <div class="dialogue-bubble">
          <span class="dialogue-name">${p.name}</span>
          <p class="dialogue-text">${t.text}</p>
        </div>
      </div>`;
    })
    .join("")}</div>`;
}

const checkpointExplains = {};
function checkpointHtml(q, key) {
  checkpointExplains[key] = q.explain || "";
  const choicesHtml = q.choices
    .map((c, i) => `<button class="checkpoint-choice" data-key="${key}" data-i="${i}" data-answer="${q.answer}">${c}</button>`)
    .join("");
  return `
    <div class="checkpoint" id="cp-${key}">
      <p class="checkpoint-label">${ICONS.chat} ちょっと確認</p>
      <p class="checkpoint-q">${q.q}</p>
      <button type="button" class="memo-toggle" id="cp-memoToggle-${key}">${ICONS.pencil} 計算メモを開く</button>
      <div class="memo-pad" id="cp-memoPad-${key}" style="display:none">
        <textarea id="cp-memoTextarea-${key}" placeholder="ここに途中の計算式やメモを自由に書けます(採点には使われません)"></textarea>
      </div>
      <div class="checkpoint-choices">${choicesHtml}</div>
      <div class="checkpoint-feedback" id="cp-feedback-${key}"></div>
    </div>`;
}

function wireCheckpoints() {
  document.querySelectorAll(".checkpoint-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const container = document.getElementById(`cp-${key}`);
      if (container.dataset.answered) return;
      container.dataset.answered = "1";
      const chosen = parseInt(btn.dataset.i, 10);
      const answer = parseInt(btn.dataset.answer, 10);
      const correct = chosen === answer;
      container.querySelectorAll(".checkpoint-choice").forEach((b, i) => {
        b.disabled = true;
        if (i === answer) b.classList.add("choice-correct");
        else if (i === chosen) b.classList.add("choice-wrong");
      });
      document.getElementById(`cp-feedback-${key}`).innerHTML = `
        <p class="${correct ? "fb-correct" : "fb-wrong"}">${correct ? "その通り!このまま読み進めましょう。" : "おしい!正解は上でハイライトした選択肢です。"}</p>
        <p class="fb-explain">${checkpointExplains[key] || ""}</p>
      `;
    });
  });
  document.querySelectorAll(".checkpoint .memo-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const pad = toggle.nextElementSibling;
      const isOpen = pad.style.display !== "none";
      pad.style.display = isOpen ? "none" : "block";
      toggle.innerHTML = `${ICONS.pencil} ${isOpen ? "計算メモを開く" : "計算メモを閉じる"}`;
      if (!isOpen) pad.querySelector("textarea").focus();
    });
  });
}

function furtherLearningHtml(unit) {
  const fl = unit.furtherLearning;
  if (!fl || (!fl.videos?.length && !fl.articles?.length)) return "";
  const videoItems = (fl.videos || [])
    .map((v) => `<li><a href="${v.url}" target="_blank" rel="noopener">${ICONS.play} ${v.title}</a></li>`)
    .join("");
  const articleItems = (fl.articles || [])
    .map((a) => `<li><a href="${a.url}" target="_blank" rel="noopener">${ICONS.doc} ${a.title}</a></li>`)
    .join("");
  return `
    <div class="further-learning">
      <h3>さらに学ぶ</h3>
      ${videoItems ? `<p class="further-learning-label">関連動画</p><ul class="further-learning-list">${videoItems}</ul>` : ""}
      ${articleItems ? `<p class="further-learning-label">関連記事</p><ul class="further-learning-list">${articleItems}</ul>` : ""}
    </div>`;
}

// ---------- QUIZ ----------
let quizRuntime = null;

function renderQuiz(courseId, unitId) {
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);
  if (!course || !unit || unit.stub) return renderHome();
  if (!unit.quiz) return renderCourse(courseId);

  if (!quizRuntime || quizRuntime.courseId !== courseId || quizRuntime.unitId !== unitId) {
    quizRuntime = {
      courseId,
      unitId,
      index: 0,
      correct: 0,
      answered: false,
    };
  }
  drawQuiz(course, unit);
}

function drawQuiz(course, unit) {
  const total = unit.quiz.length;
  if (quizRuntime.index >= total) return drawQuizResult(course, unit);

  const q = unit.quiz[quizRuntime.index];
  const choicesHtml = q.choices
    .map(
      (c, i) => `<button class="choice" data-i="${i}">${c}</button>`
    )
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/lesson/${course.id}/${unit.id}">← 教材に戻る</a>
      <span class="progress-indicator">問題 ${quizRuntime.index + 1} / ${total}</span>
    </header>
    <section class="quiz">
      <h2>${unit.title} テスト</h2>
      <p class="quiz-q">${q.q}</p>
      <button type="button" class="memo-toggle" id="memoToggle">${ICONS.pencil} 計算メモを開く</button>
      <div class="memo-pad" id="memoPad" style="display:none">
        <textarea id="memoTextarea" placeholder="ここに途中の計算式やメモを自由に書けます(採点には使われません)"></textarea>
      </div>
      <div class="choice-list">${choicesHtml}</div>
      <div class="quiz-feedback" id="feedback"></div>
      <button class="btn btn-primary" id="nextBtn" style="display:none">次へ →</button>
    </section>
  `;

  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => onAnswer(course, unit, q, parseInt(btn.dataset.i, 10)));
  });

  const memoToggle = document.getElementById("memoToggle");
  const memoPad = document.getElementById("memoPad");
  memoToggle.addEventListener("click", () => {
    const isOpen = memoPad.style.display !== "none";
    memoPad.style.display = isOpen ? "none" : "block";
    memoToggle.innerHTML = `${ICONS.pencil} ${isOpen ? "計算メモを開く" : "計算メモを閉じる"}`;
    if (!isOpen) document.getElementById("memoTextarea").focus();
  });
}

function onAnswer(course, unit, q, chosenIndex) {
  if (quizRuntime.answered) return;
  quizRuntime.answered = true;
  const correct = chosenIndex === q.answer;
  if (correct) quizRuntime.correct++;

  document.querySelectorAll(".choice").forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("choice-correct");
    else if (i === chosenIndex) btn.classList.add("choice-wrong");
  });

  document.getElementById("feedback").innerHTML = `
    <p class="${correct ? "fb-correct" : "fb-wrong"}">${correct ? "正解!" : "不正解"}</p>
    <p class="fb-explain">${q.explain || ""}</p>
  `;
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.style.display = "inline-block";
  nextBtn.addEventListener("click", () => {
    quizRuntime.index++;
    quizRuntime.answered = false;
    drawQuiz(course, unit);
  });
}

// ---------- shared: spaced-repetition progress update ----------
// quiz(選択式)/patch(配線パズル)/case(ケーススタディ)、すべての採点結果は
// この共通関数を通して localStorage の進捗・復習スケジュール・実績(バッジ)に反映する。
function updateUnitProgress(courseId, unitId, score, total) {
  const pass = score === total;
  const state = loadState();
  const cState = ensureCourse(state, courseId);
  const today = todayStr();
  let us = cState[unitId];
  if (!us) {
    us = { status: "learning", learnedAt: today, intervalIdx: 0, nextReview: addDays(today, STEPS[0]), reviewCount: 0, history: [] };
  } else {
    if (pass) {
      us.intervalIdx = Math.min(us.intervalIdx + 1, STEPS.length - 1);
      us.reviewCount += 1;
      us.nextReview = addDays(today, STEPS[us.intervalIdx]);
      if (us.reviewCount >= STEPS.length) us.status = "mastered";
    } else {
      us.intervalIdx = 0;
      us.reviewCount = 0;
      us.status = "learning";
      us.nextReview = addDays(today, STEPS[0]);
    }
  }
  us.history = us.history || [];
  us.history.push({ date: today, score, total });
  cState[unitId] = us;
  saveState(state);
  return { pass, us };
}

function drawQuizResult(course, unit) {
  const total = unit.quiz.length;
  const score = quizRuntime.correct;
  const { pass, us } = updateUnitProgress(course.id, unit.id, score, total);

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${course.id}">← ${course.title}</a>
    </header>
    <section class="section quiz-result">
      <div class="quiz-result-icon ${pass ? "fb-correct" : "fb-wrong"}">${pass ? ICONS.trophy : ICONS.refresh}</div>
      <h2>結果: ${score} / ${total}</h2>
      <p class="${pass ? "fb-correct" : "fb-wrong"}">
        ${pass ? "全問正解!次回の復習は " + us.nextReview + " です。" : "一部間違いあり。次回の復習は " + us.nextReview + "(間隔をリセットしました)"}
      </p>
      <div class="result-actions">
        <a class="btn" href="#/lesson/${course.id}/${unit.id}">教材を読み直す</a>
        <a class="btn btn-primary" href="#/">ホームに戻る</a>
      </div>
    </section>
  `;
  quizRuntime = null;
}

// ---------- PATCH EXERCISE (配線パズル: ドラッグ&ドロップでケーブルをつなぐ) ----------
// unit.patch = { scenario, equipment:[{id,label,icon,ports:[{id,label,type,dir}]}],
//                cablePalette:["xlr",...], correctConnections:[{from:"equipId.portId",to:"...",cable:"xlr"}], explain }
const CABLE_LABELS = {
  xlr: "XLRケーブル", trs: "TRSフォーン(バランス)", ts: "TSフォーン(アンバランス)",
  usb: "USBケーブル", rca: "RCAケーブル(ピン)", speaker: "スピーカーケーブル",
  midi: "MIDIケーブル", optical: "光デジタル(TOSLINK)", power: "電源ケーブル",
  digilink: "DigiLink(Pro Tools HDX専用)", wordclock: "ワードクロック(BNC)",
  madi: "MADI(同軸/光)", aes: "AES/EBU(デジタル)", ethernet: "Ethernet(Dante等)",
};
const CABLE_COLORS = {
  xlr: "#3a6df0", trs: "#14c39a", ts: "#7c5cff", usb: "#ff7a3d", rca: "#ffb02e",
  speaker: "#ef4459", midi: "#ff5da2", optical: "#0e7490", power: "#55506b",
  digilink: "#1d4ed8", wordclock: "#c026d3", madi: "#b45309", aes: "#0891b2", ethernet: "#059669",
};

let patchRuntime = null;

function renderPatch(courseId, unitId) {
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);
  if (!course || !unit || !unit.patch) return renderHome();
  const p = unit.patch;

  patchRuntime = { courseId, unitId, cables: [], graded: false, armedCable: null, dragging: null, dragPoint: null };

  const equipHtml = p.equipment
    .map(
      (eq) => `
    <div class="patch-equip" data-equip="${eq.id}">
      <div class="patch-equip-head"><span class="patch-equip-icon">${eq.icon || "?"}</span><span>${eq.label}</span></div>
      <div class="patch-equip-ports">
        ${eq.ports
          .map(
            (port) => `
          <div class="patch-port-row patch-port-${port.dir}">
            ${
              port.dir === "in"
                ? patchPortDotHtml(eq.id, port) + `<span class="patch-port-label">${port.label}</span>`
                : `<span class="patch-port-label">${port.label}</span>` + patchPortDotHtml(eq.id, port)
            }
          </div>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("");

  const paletteHtml = p.cablePalette
    .map(
      (ct) => `
    <button type="button" class="cable-chip" data-cable="${ct}" style="--cable-color:${CABLE_COLORS[ct] || "#999"}">
      <span class="cable-chip-dot"></span>${CABLE_LABELS[ct] || ct}
    </button>`
    )
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${courseId}">← ${course.title}</a>
    </header>
    <section class="section patch-page">
      <p class="unit-eyebrow">配線問題 #${String(unit.order).padStart(2, "0")}</p>
      <h1>${unit.title}</h1>
      <div class="hook-box">${p.scenario}</div>

      <p class="patch-instructions">${ICONS.sparkle} 下のケーブルを1本選び、機材の端子(●)からもう一方の端子までドラッグしてつなごう。配線を間違えたら、そのケーブルをクリックすると剪定(削除)できる。</p>

      <div class="patch-palette" id="patchPalette">${paletteHtml}</div>

      <div class="patch-board-wrap">
        <svg class="patch-cables-svg" id="patchSvg"></svg>
        <div class="patch-board" id="patchBoard">${equipHtml}</div>
      </div>

      <div class="patch-actions">
        <button type="button" class="btn btn-primary" id="patchGradeBtn">配線を確認する</button>
        <button type="button" class="btn" id="patchResetBtn">やり直す</button>
      </div>
      <div class="patch-feedback" id="patchFeedback"></div>
    </section>
  `;

  wirePatchBoard(course, unit);
}

function patchPortDotHtml(equipId, port) {
  return `<span class="patch-port" data-equip="${equipId}" data-port="${port.id}" data-dir="${port.dir}" data-type="${port.type}" title="${port.label}"></span>`;
}
function patchPortEl(equipId, portId) {
  return document.querySelector(`.patch-port[data-equip="${CSS.escape(equipId)}"][data-port="${CSS.escape(portId)}"]`);
}
function patchPortCenter(el, wrapRect) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2 - wrapRect.left, y: r.top + r.height / 2 - wrapRect.top };
}
function patchPairKey(a, b) {
  return [a, b].sort().join("|");
}
function patchParsePortKey(s) {
  const i = s.indexOf(".");
  return { equip: s.slice(0, i), port: s.slice(i + 1) };
}

function redrawPatchCables(status) {
  const svg = document.getElementById("patchSvg");
  if (!svg) return;
  const wrap = svg.closest(".patch-board-wrap");
  const wrapRect = wrap.getBoundingClientRect();
  svg.setAttribute("width", wrapRect.width);
  svg.setAttribute("height", wrapRect.height);

  let html = "";
  patchRuntime.cables.forEach((c) => {
    const elA = patchPortEl(c.from.equip, c.from.port);
    const elB = patchPortEl(c.to.equip, c.to.port);
    if (!elA || !elB) return;
    const a = patchPortCenter(elA, wrapRect);
    const b = patchPortCenter(elB, wrapRect);
    const midX = (a.x + b.x) / 2;
    const cls = status ? (status[c.id] === "correct" ? "cable-line-correct" : "cable-line-wrong") : "";
    const color = CABLE_COLORS[c.type] || "#999";
    html += `<path class="cable-line ${cls}" data-cable-id="${c.id}" d="M${a.x},${a.y} C${midX},${a.y} ${midX},${b.y} ${b.x},${b.y}" stroke="${color}" fill="none" stroke-width="4" stroke-linecap="round" />`;
  });

  if (status && status.missing) {
    status.missing.forEach((m) => {
      const elA = patchPortEl(m.from.equip, m.from.port);
      const elB = patchPortEl(m.to.equip, m.to.port);
      if (!elA || !elB) return;
      const a = patchPortCenter(elA, wrapRect);
      const b = patchPortCenter(elB, wrapRect);
      const midX = (a.x + b.x) / 2;
      html += `<path class="cable-line cable-line-missing" d="M${a.x},${a.y} C${midX},${a.y} ${midX},${b.y} ${b.x},${b.y}" stroke="#aaa" fill="none" stroke-width="3" stroke-dasharray="6,6" stroke-linecap="round" />`;
    });
  }

  if (patchRuntime.dragging && patchRuntime.dragPoint) {
    const elA = patchPortEl(patchRuntime.dragging.equip, patchRuntime.dragging.port);
    if (elA) {
      const a = patchPortCenter(elA, wrapRect);
      const b = patchRuntime.dragPoint;
      const midX = (a.x + b.x) / 2;
      html += `<path class="cable-line cable-line-dragging" d="M${a.x},${a.y} C${midX},${a.y} ${midX},${b.y} ${b.x},${b.y}" stroke="${CABLE_COLORS[patchRuntime.armedCable] || "#999"}" fill="none" stroke-width="4" stroke-dasharray="4,4" stroke-linecap="round" />`;
    }
  }

  svg.innerHTML = html;
}

function flashPatchHint(msg) {
  const fb = document.getElementById("patchFeedback");
  if (fb) fb.innerHTML = `<p class="fb-wrong">${msg}</p>`;
}

function wirePatchBoard(course, unit) {
  redrawPatchCables(null);

  document.querySelectorAll(".cable-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (patchRuntime.graded) return;
      const already = chip.classList.contains("cable-chip-armed");
      document.querySelectorAll(".cable-chip").forEach((c) => c.classList.remove("cable-chip-armed"));
      patchRuntime.armedCable = already ? null : chip.dataset.cable;
      if (patchRuntime.armedCable) chip.classList.add("cable-chip-armed");
    });
  });

  document.querySelectorAll(".patch-port").forEach((portEl) => {
    portEl.addEventListener("mousedown", (e) => {
      if (patchRuntime.graded) return;
      if (!patchRuntime.armedCable) {
        flashPatchHint("先に上のケーブルを1本選んでください。");
        return;
      }
      e.preventDefault();
      patchRuntime.dragging = { equip: portEl.dataset.equip, port: portEl.dataset.port };
      const board = document.getElementById("patchBoard");
      board.classList.add("patch-board-dragging");

      const onMove = (ev) => {
        const wrap = document.getElementById("patchSvg").closest(".patch-board-wrap");
        const r = wrap.getBoundingClientRect();
        patchRuntime.dragPoint = { x: ev.clientX - r.left, y: ev.clientY - r.top };
        redrawPatchCables(null);
      };
      const onUp = (ev) => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        board.classList.remove("patch-board-dragging");
        const targetPort = ev.target.closest && ev.target.closest(".patch-port");
        patchRuntime.dragPoint = null;
        if (
          targetPort &&
          !(targetPort.dataset.equip === patchRuntime.dragging.equip && targetPort.dataset.port === patchRuntime.dragging.port)
        ) {
          patchRuntime.cables.push({
            id: "c" + Math.random().toString(36).slice(2, 9),
            from: patchRuntime.dragging,
            to: { equip: targetPort.dataset.equip, port: targetPort.dataset.port },
            type: patchRuntime.armedCable,
          });
        }
        patchRuntime.dragging = null;
        redrawPatchCables(null);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  });

  document.getElementById("patchSvg").addEventListener("click", (e) => {
    if (patchRuntime.graded) return;
    const id = e.target.dataset.cableId;
    if (!id) return;
    patchRuntime.cables = patchRuntime.cables.filter((c) => c.id !== id);
    redrawPatchCables(null);
  });

  document.getElementById("patchGradeBtn").addEventListener("click", () => gradePatch(course, unit));
  document.getElementById("patchResetBtn").addEventListener("click", () => renderPatch(course.id, unit.id));
}

function gradePatch(course, unit) {
  const p = unit.patch;
  const expected = p.correctConnections.map((e, i) => ({
    idx: i,
    from: patchParsePortKey(e.from),
    to: patchParsePortKey(e.to),
    type: e.cable,
    key: patchPairKey(e.from, e.to),
  }));

  const status = {};
  const usedExpected = new Set();
  let correctCount = 0;

  patchRuntime.cables.forEach((c) => {
    const key = patchPairKey(`${c.from.equip}.${c.from.port}`, `${c.to.equip}.${c.to.port}`);
    const match = expected.find((e) => !usedExpected.has(e.idx) && e.key === key);
    if (match && match.type === c.type) {
      status[c.id] = "correct";
      usedExpected.add(match.idx);
      correctCount++;
    } else if (match) {
      status[c.id] = "wrong";
      usedExpected.add(match.idx);
    } else {
      status[c.id] = "wrong";
    }
  });

  const missing = expected.filter((e) => !usedExpected.has(e.idx)).map((e) => ({ from: e.from, to: e.to }));
  status.missing = missing;

  const total = expected.length;
  patchRuntime.graded = true;
  redrawPatchCables(status);

  const { pass } = updateUnitProgress(course.id, unit.id, correctCount, total);

  document.getElementById("patchFeedback").innerHTML = `
    <p class="${pass ? "fb-correct" : "fb-wrong"}">結果: ${correctCount} / ${total} 本を正しく接続できました。</p>
    ${missing.length ? `<p class="fb-wrong">未接続・不足: ${missing.length}本(盤面のグレーの点線が正解のルート)</p>` : ""}
    <p class="fb-explain">${p.explain || ""}</p>
    <div class="result-actions">
      <button type="button" class="btn" id="patchRetryBtn">もう一度挑戦する</button>
      <a class="btn btn-primary" href="#/course/${course.id}">${course.title}に戻る</a>
    </div>
  `;
  document.getElementById("patchGradeBtn").disabled = true;
  document.getElementById("patchResetBtn").disabled = true;
  document.getElementById("patchRetryBtn").addEventListener("click", () => renderPatch(course.id, unit.id));
}

// ---------- CASE STUDY (お金などの実践ケーススタディ: 数字を入力して答え合わせ) ----------
// unit.caseStudy = { scenario:[...paragraphs], inputs:[{label,type:"choice"|"number"|"text",choices,answer,tolerance,unit,explain}], explain:[...paragraphs] }
let caseRuntime = null;

function renderCase(courseId, unitId) {
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);
  if (!course || !unit || !unit.caseStudy) return renderHome();
  const cs = unit.caseStudy;

  caseRuntime = { courseId, unitId, graded: false };

  const inputsHtml = cs.inputs
    .map((inp, i) => {
      let fieldHtml = "";
      if (inp.type === "choice") {
        fieldHtml = `<select class="case-input" id="case-input-${i}">
          <option value="">選択してください</option>
          ${inp.choices.map((c, ci) => `<option value="${ci}">${c}</option>`).join("")}
        </select>`;
      } else if (inp.type === "number") {
        fieldHtml = `<input class="case-input" type="number" id="case-input-${i}" placeholder="${inp.placeholder || "数値を入力"}">`;
      } else {
        fieldHtml = `<input class="case-input" type="text" id="case-input-${i}" placeholder="${inp.placeholder || "回答を入力"}">`;
      }
      return `
      <div class="case-input-row">
        <label for="case-input-${i}">${inp.label}${inp.unit ? `(${inp.unit})` : ""}</label>
        ${fieldHtml}
        <div class="case-input-feedback" id="case-feedback-${i}"></div>
      </div>`;
    })
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${courseId}">← ${course.title}</a>
    </header>
    <section class="section case-page">
      <p class="unit-eyebrow">ケーススタディ #${String(unit.order).padStart(2, "0")}</p>
      <h1>${unit.title}</h1>
      <div class="case-scenario">${cs.scenario.map((p) => `<p>${p}</p>`).join("")}</div>
      <form class="case-form" id="caseForm" onsubmit="return false">${inputsHtml}</form>
      <button type="button" class="btn btn-primary" id="caseCheckBtn">答え合わせする</button>
      <div class="case-result" id="caseResult"></div>
    </section>
  `;

  document.getElementById("caseCheckBtn").addEventListener("click", () => gradeCase(course, unit));
}

function formatCaseAnswer(inp) {
  if (inp.type === "choice") return inp.choices[inp.answer];
  if (inp.type === "number") return String(inp.answer) + (inp.unit ? inp.unit : "");
  return Array.isArray(inp.answer) ? inp.answer[0] : inp.answer;
}

function gradeCase(course, unit) {
  const cs = unit.caseStudy;
  let correct = 0;

  cs.inputs.forEach((inp, i) => {
    const el = document.getElementById(`case-input-${i}`);
    const fb = document.getElementById(`case-feedback-${i}`);
    let ok = false;
    if (inp.type === "number") {
      const v = parseFloat(el.value);
      ok = !isNaN(v) && Math.abs(v - inp.answer) <= (inp.tolerance || 0);
    } else if (inp.type === "choice") {
      ok = el.value !== "" && parseInt(el.value, 10) === inp.answer;
    } else {
      const norm = (s) => (s || "").trim();
      const accepted = Array.isArray(inp.answer) ? inp.answer : [inp.answer];
      ok = accepted.some((a) => norm(el.value) === norm(a));
    }
    if (ok) correct++;
    el.classList.remove("case-input-correct", "case-input-wrong");
    el.classList.add(ok ? "case-input-correct" : "case-input-wrong");
    el.disabled = true;
    fb.innerHTML = `
      <p class="${ok ? "fb-correct" : "fb-wrong"}">${ok ? "正解" : "不正解 — 正しい答え: " + formatCaseAnswer(inp)}</p>
      ${inp.explain ? `<p class="fb-explain">${inp.explain}</p>` : ""}`;
  });

  const total = cs.inputs.length;
  caseRuntime.graded = true;
  document.getElementById("caseCheckBtn").disabled = true;
  const { pass } = updateUnitProgress(course.id, unit.id, correct, total);

  document.getElementById("caseResult").innerHTML = `
    <p class="${pass ? "fb-correct" : "fb-wrong"}">結果: ${correct} / ${total} 問正解</p>
    <div class="case-walkthrough">${(cs.explain || []).map((p) => `<p>${p}</p>`).join("")}</div>
    <div class="result-actions">
      <button type="button" class="btn" id="caseRetryBtn">もう一度挑戦する</button>
      <a class="btn btn-primary" href="#/course/${course.id}">${course.title}に戻る</a>
    </div>
  `;
  document.getElementById("caseRetryBtn").addEventListener("click", () => renderCase(course.id, unit.id));
}

// ---------- MIX TIP (即断クイズ: 状況→選択肢→即採点) ----------
// unit.tip = { situation, question, choices:[...], answer, explain, nextStep? }
let tipRuntime = null;

function renderTip(courseId, unitId) {
  const course = getCourse(courseId);
  const unit = getUnit(courseId, unitId);
  if (!course || !unit || !unit.tip) return renderHome();
  const t = unit.tip;

  tipRuntime = { courseId, unitId, graded: false };

  const choicesHtml = t.choices
    .map((c, i) => `<button type="button" class="choice" data-i="${i}">${c}</button>`)
    .join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${courseId}">← ${course.title}</a>
    </header>
    <section class="section tip-page">
      <p class="unit-eyebrow">ミックス判断 #${String(unit.order).padStart(2, "0")}</p>
      <h1>${unit.title}</h1>
      <div class="hook-box">${t.situation}</div>
      <p class="tip-question">${t.question}</p>
      <div class="choice-list">${choicesHtml}</div>
      <div class="tip-feedback" id="tipFeedback"></div>
    </section>
  `;

  document.querySelectorAll(".tip-page .choice").forEach((btn) => {
    btn.addEventListener("click", () => gradeTip(course, unit, parseInt(btn.dataset.i, 10)));
  });
}

function gradeTip(course, unit, chosenIndex) {
  if (tipRuntime.graded) return;
  tipRuntime.graded = true;
  const t = unit.tip;
  const correct = chosenIndex === t.answer;

  document.querySelectorAll(".tip-page .choice").forEach((btn, i) => {
    btn.disabled = true;
    if (i === t.answer) btn.classList.add("choice-correct");
    else if (i === chosenIndex) btn.classList.add("choice-wrong");
  });

  const { pass } = updateUnitProgress(course.id, unit.id, correct ? 1 : 0, 1);

  document.getElementById("tipFeedback").innerHTML = `
    <p class="${pass ? "fb-correct" : "fb-wrong"}">${correct ? "正解!" : "不正解"}</p>
    <p class="fb-explain">${t.explain || ""}</p>
    ${t.nextStep ? `<p class="fb-explain"><strong>次の一手: </strong>${t.nextStep}</p>` : ""}
    <div class="result-actions">
      <button type="button" class="btn" id="tipRetryBtn">もう一度挑戦する</button>
      <a class="btn btn-primary" href="#/course/${course.id}">${course.title}に戻る</a>
    </div>
  `;
  document.getElementById("tipRetryBtn").addEventListener("click", () => renderTip(course.id, unit.id));
}

// ---------- PROGRESS / DASHBOARD ----------
const STEPS_LEN = STEPS.length;
function understandingPct(us) {
  if (!us) return 0;
  if (us.status === "mastered") return 100;
  return Math.min(100, Math.round((us.reviewCount / STEPS_LEN) * 100));
}

function computeStudyStreak(studyDaysSet) {
  // 今日 or 昨日を起点に、連続して学習した日数を数える
  const days = studyDaysSet;
  let streak = 0;
  let cursor = todayStr();
  if (!days.has(cursor)) {
    cursor = addDays(cursor, -1);
    if (!days.has(cursor)) return 0;
  }
  while (days.has(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function badgeGridHtml(state) {
  const badges = window.getAllBadges ? window.getAllBadges(state) : [];
  const earned = badges.filter((b) => b.earned);
  const items = badges
    .map(
      (b) => `
      <div class="badge-card ${b.earned ? "badge-card-earned" : "badge-card-locked"}">
        <span class="badge-card-icon">${ICONS.trophy}</span>
        <div class="badge-card-body">
          <strong>${b.title}</strong>
          <small>${b.desc}</small>
        </div>
      </div>`
    )
    .join("");
  return { html: items, earnedCount: earned.length, totalCount: badges.length };
}

function learningLogHtml(state) {
  const entries = [];
  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    course.units.forEach((u) => {
      const us = unitState(state, cid, u.id);
      if (!us) return;
      (us.history || []).forEach((h) => {
        entries.push({ date: h.date, course, unit: u, score: h.score, total: h.total });
      });
    });
  });
  entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const recent = entries.slice(0, 30);
  if (!recent.length) return `<p class="empty">まだ学習ログがありません。クイズに挑戦すると、ここに記録されていきます。</p>`;
  return `
    <ul class="log-list">
      ${recent
        .map(
          (e) => `
        <li class="log-row">
          <span class="log-date">${e.date}</span>
          <span class="log-desc"><strong>${e.unit.title}</strong><small>${e.course.title}</small></span>
          <span class="log-score ${e.score === e.total ? "fb-correct" : ""}">${e.score} / ${e.total}</span>
        </li>`
        )
        .join("")}
    </ul>`;
}

function renderProgress() {
  const state = loadState();

  // ---- 全体サマリー ----
  let totalRealUnits = 0;
  let totalMastered = 0;
  let totalAttempts = 0;
  const studyDays = new Set();
  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    const realUnits = course.units.filter((u) => !u.stub);
    totalRealUnits += realUnits.length;
    realUnits.forEach((u) => {
      const us = unitState(state, cid, u.id);
      if (!us) return;
      if (us.status === "mastered") totalMastered++;
      (us.history || []).forEach((h) => {
        totalAttempts++;
        studyDays.add(h.date);
      });
    });
  });
  const overallPct = totalRealUnits ? Math.round((totalMastered / totalRealUnits) * 100) : 0;
  const streak = computeStudyStreak(studyDays);
  const { html: badgeHtml, earnedCount, totalCount } = badgeGridHtml(state);

  // ---- コース別テーブル ----
  let courseBody = "";
  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    const realUnits = course.units.filter((u) => !u.stub);
    const rows = realUnits
      .map((u) => {
        const us = unitState(state, cid, u.id);
        const st = computeStatus(state, cid, u.id);
        const lastScore = us && us.history.length ? us.history[us.history.length - 1] : null;
        return `
        <tr>
          <td>${u.title}</td>
          <td>${badge(st)}</td>
          <td>${understandingPct(us)}%</td>
          <td>${us ? us.nextReview : "-"}</td>
          <td>${lastScore ? lastScore.score + "/" + lastScore.total : "-"}</td>
        </tr>`;
      })
      .join("");

    const masteredCount = realUnits.filter((u) => computeStatus(state, cid, u.id) === "mastered").length;
    const pct = realUnits.length ? Math.round((masteredCount / realUnits.length) * 100) : 0;

    courseBody += `
      <div class="section">
        <h2><span class="course-dot" style="background:${course.color}; color:${course.color}"></span> ${course.title}</h2>
        <div class="bar-track bar-track-lg"><div class="bar-fill" style="width:${pct}%;background:${course.color}"></div></div>
        <p class="lead">${masteredCount} / ${realUnits.length} 単元が定着済み(${pct}%)</p>
        <table class="progress-table">
          <thead><tr><th>単元</th><th>状態</th><th>理解度</th><th>次回復習日</th><th>直近スコア</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  });

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/">← ホーム</a>
      <h1>進捗・実績</h1>
    </header>

    <section class="section">
      <h2>全体サマリー</h2>
      <div class="stat-grid">
        <div class="stat-card"><span class="stat-card-icon">${ICONS.chart}</span><strong>${overallPct}%</strong><span>全体の理解度(定着率)</span></div>
        <div class="stat-card"><span class="stat-card-icon">${ICONS.trophy}</span><strong>${totalMastered} / ${totalRealUnits}</strong><span>定着済み単元数</span></div>
        <div class="stat-card"><span class="stat-card-icon">${ICONS.pencil}</span><strong>${totalAttempts}</strong><span>クイズ挑戦回数</span></div>
        <div class="stat-card"><span class="stat-card-icon">${ICONS.flame}</span><strong>${streak}</strong><span>連続学習日数</span></div>
      </div>
      <div class="bar-track bar-track-lg"><div class="bar-fill" style="width:${overallPct}%;background:var(--violet)"></div></div>
    </section>

    <section class="section">
      <h2>称号 <small>${earnedCount} / ${totalCount} 獲得</small></h2>
      <div class="badge-grid">${badgeHtml}</div>
    </section>

    <section class="section">
      <h2>学習ログ <small>直近30件</small></h2>
      ${learningLogHtml(state)}
    </section>

    <section class="section">
      <h2>コース別の詳細</h2>
      ${courseBody}
    </section>
  `;
}

// ---------- GLOSSARY ----------
function renderGlossary() {
  const terms = (window.GLOSSARY || []).map(
    (g) => `
      <div class="glossary-item">
        <h3>${g.term}${g.kana ? `<small> — ${g.kana}</small>` : ""}</h3>
        <p>${g.body}</p>
      </div>`
  ).join("");

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/">← ホーム</a>
      <h1>音響用語ミニ辞典</h1>
    </header>
    <p class="lead">各レッスンに登場する専門用語をまとめた巻末付録。わからない言葉が出てきたらここで確認。</p>
    <div class="glossary-list">${terms}</div>
  `;
}
