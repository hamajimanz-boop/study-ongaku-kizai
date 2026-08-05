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
function getGenreForCourse(courseId) {
  return genres().find((g) => g.courseIds.includes(courseId)) || null;
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
  if (streak >= 7) return { title: `${streak}日連続、絶好調です🔥`, sub: "この調子でどんどん積み上げていきましょう。" };
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
    .filter((x) => x.pct < 100)
    .sort((a, b) => (b.started - a.started) || (b.pct - a.pct))
    .slice(0, 3);

  const tileHtml = courseTiles
    .map(
      (x) => `
      <div class="tile" style="background:${x.course.color}">
        <div class="tile-top">
          <span class="tile-icon">${(x.genre && x.genre.icon) || "🎧"}</span>
          <h3>${x.course.title}</h3>
        </div>
        <p>${x.started ? "学習中" : "まだ始めていません"}</p>
        <div class="bar-track"><div class="bar-fill" style="width:${x.pct}%"></div></div>
        <div class="tile-foot">
          <span class="tile-pct">${x.pct}% 完了</span>
          <a class="tile-btn" href="#/course/${x.course.id}">${x.started ? "続ける →" : "始める →"}</a>
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
        <span class="mini-badge-icon">${b.icon}</span>
        <span>${b.title}</span>
      </div>`
    )
    .join("");

  const genreCards = genres()
    .map((g) => {
      const gCourses = coursesInGenre(g.id);
      let mastered = 0;
      let total = 0;
      gCourses.forEach((course) => {
        const { realUnits, masteredCount } = courseProgress(course, state);
        total += realUnits.length;
        mastered += masteredCount;
      });
      const pct = total ? Math.round((mastered / total) * 100) : 0;
      const activeCount = gCourses.filter((c) => c.active).length;
      return `
      <a class="genre-card" href="#/genre/${g.id}">
        <div class="genre-card-head">
          <span class="genre-icon" style="--genre-color:${g.color}">${g.icon}</span>
          <div class="genre-card-titles">
            <h3>${g.title}</h3>
            <p class="genre-desc">${g.description}</p>
          </div>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${g.color}"></div></div>
        <div class="genre-card-foot">
          <span>${gCourses.length}コース(${activeCount}アクティブ)</span>
          <span>${mastered} / ${total} 単元 定着</span>
        </div>
      </a>`;
    })
    .join("");

  const dueHtml = dueItems.length
    ? dueItems
        .map(
          (x) => `
      <a class="task-row" href="#/quiz/${x.course.id}/${x.unit.id}">
        <span class="task-tag" style="background:${x.course.color}">🔁 復習</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title}</small></span>
        <span class="task-arrow">テストを受ける →</span>
      </a>`
        )
        .join("")
    : `<p class="empty">今日の復習はありません。新しい単元に進みましょう。</p>`;

  const newHtml = nextNewItems.length
    ? nextNewItems
        .map(
          (x) => `
      <a class="task-row" href="#/lesson/${x.course.id}/${x.unit.id}">
        <span class="task-tag" style="background:${x.course.color}">✨ 新規</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title} / #${String(x.unit.order).padStart(2, "0")}</small></span>
        <span class="task-arrow">教材を読む →</span>
      </a>`
        )
        .join("")
    : "";

  root.innerHTML = `
    <header class="topbar">
      <h1>🎛 音楽機材の教養</h1>
      <nav><a href="#/progress">📊 進捗・実績</a> <a href="#/glossary">📖 音響用語辞典</a></nav>
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
          <span class="hero-chip">🔥 連続 ${streak}日</span>
          <span class="hero-chip">🏆 定着 ${totalMastered}/${totalRealUnits}単元</span>
          ${dueItems.length ? `<span class="hero-chip">🔁 復習待ち ${dueItems.length}件</span>` : ""}
        </div>
      </div>
    </div>

    ${tileHtml ? `
    <section class="section">
      <h2>アクティブなコース</h2>
      <div class="tile-grid">${tileHtml}</div>
    </section>` : ""}

    <div class="home-columns">
      <section class="section" style="margin-bottom:0">
        <h2>今日やること <small>${today}</small></h2>
        <div class="task-list">${dueHtml}${newHtml}</div>
      </section>
      <div class="side-card">
        <h2 style="margin:0 0 4px">🏅 実績</h2>
        <p class="lead" style="margin:0 0 10px;font-size:12.5px">${earnedBadges.length} / ${allBadges.length} 個の称号を獲得</p>
        <div class="mini-badge-row">${miniBadgeHtml}</div>
        <div class="side-card-foot"><a href="#/progress">すべての実績を見る →</a></div>
      </div>
    </div>

    <section class="section">
      <h2>ジャンルから選ぶ</h2>
      <div class="genre-grid">${genreCards}</div>
    </section>
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
  const genre = getGenreForCourse(courseId);
  const backHref = genre ? `#/genre/${genre.id}` : "#/";
  const backLabel = genre ? `${genre.icon} ${genre.title}` : "ホーム";

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
        ? `<a class="unit-row" href="#/lesson/${courseId}/${u.id}">${inner}</a>`
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
      const sectionHtml = `
      <div class="lesson-section">
        <h3>${s.heading}</h3>
        ${s.image ? `<img class="lesson-image" src="images/${s.image}" alt="${s.heading}">` : ""}
        ${s.imageCredit ? `<p class="image-credit">${s.imageCredit}</p>` : ""}
        ${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}
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
      <div class="hook-box">💭 ${unit.hook}</div>
      ${unit.image ? `<img class="lesson-image lesson-image-hero" src="images/${unit.image}" alt="${unit.title}">` : ""}
      ${sectionsHtml}
      ${furtherLearningHtml(unit)}
      <a class="btn btn-primary" href="#/quiz/${courseId}/${unitId}">クイズに挑戦する →</a>
    </article>
  `;

  wireCheckpoints();
}

const checkpointExplains = {};
function checkpointHtml(q, key) {
  checkpointExplains[key] = q.explain || "";
  const choicesHtml = q.choices
    .map((c, i) => `<button class="checkpoint-choice" data-key="${key}" data-i="${i}" data-answer="${q.answer}">${c}</button>`)
    .join("");
  return `
    <div class="checkpoint" id="cp-${key}">
      <p class="checkpoint-label">🤔 ちょっと確認</p>
      <p class="checkpoint-q">${q.q}</p>
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
}

function furtherLearningHtml(unit) {
  const fl = unit.furtherLearning;
  if (!fl || (!fl.videos?.length && !fl.articles?.length)) return "";
  const videoItems = (fl.videos || [])
    .map((v) => `<li><a href="${v.url}" target="_blank" rel="noopener">▶ ${v.title}</a></li>`)
    .join("");
  const articleItems = (fl.articles || [])
    .map((a) => `<li><a href="${a.url}" target="_blank" rel="noopener">📄 ${a.title}</a></li>`)
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
      <div class="choice-list">${choicesHtml}</div>
      <div class="quiz-feedback" id="feedback"></div>
      <button class="btn btn-primary" id="nextBtn" style="display:none">次へ →</button>
    </section>
  `;

  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => onAnswer(course, unit, q, parseInt(btn.dataset.i, 10)));
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

function drawQuizResult(course, unit) {
  const total = unit.quiz.length;
  const score = quizRuntime.correct;
  const pass = score === total;

  // update spaced-repetition state
  const state = loadState();
  const cState = ensureCourse(state, course.id);
  const today = todayStr();
  let us = cState[unit.id];
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
  cState[unit.id] = us;
  saveState(state);

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/course/${course.id}">← ${course.title}</a>
    </header>
    <section class="section quiz-result">
      <div class="quiz-result-icon">${pass ? "🎉" : "💪"}</div>
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
        <span class="badge-card-icon">${b.icon}</span>
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
        <div class="stat-card"><span class="stat-card-icon">📈</span><strong>${overallPct}%</strong><span>全体の理解度(定着率)</span></div>
        <div class="stat-card"><span class="stat-card-icon">🏆</span><strong>${totalMastered} / ${totalRealUnits}</strong><span>定着済み単元数</span></div>
        <div class="stat-card"><span class="stat-card-icon">📝</span><strong>${totalAttempts}</strong><span>クイズ挑戦回数</span></div>
        <div class="stat-card"><span class="stat-card-icon">🔥</span><strong>${streak}</strong><span>連続学習日数</span></div>
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
