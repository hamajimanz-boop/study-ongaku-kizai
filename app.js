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

// ---------- HOME ----------
function renderHome() {
  const state = loadState();
  const today = todayStr();

  let dueItems = [];
  let nextNewItems = [];
  let courseCards = "";

  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    const realUnits = course.units.filter((u) => !u.stub);
    let masteredCount = 0;
    let startedCount = 0;

    course.units.forEach((u) => {
      if (u.stub) return;
      const st = computeStatus(state, cid, u.id);
      if (st === "mastered") masteredCount++;
      if (st !== "new") startedCount++;
      if (st === "due") dueItems.push({ course, unit: u });
    });

    const nextNew = course.units.find((u) => !u.stub && computeStatus(state, cid, u.id) === "new");
    if (nextNew) nextNewItems.push({ course, unit: nextNew });

    const pct = realUnits.length ? Math.round((masteredCount / realUnits.length) * 100) : 0;
    courseCards += `
      <a class="course-card" href="#/course/${cid}">
        <div class="course-card-head">
          <span class="course-dot" style="background:${course.color}"></span>
          <h3>${course.title}</h3>
          ${course.active ? '<span class="badge badge-blue">アクティブ</span>' : '<span class="badge badge-muted">一時停止</span>'}
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${course.color}"></div></div>
        <div class="course-card-foot">
          <span>${masteredCount} / ${realUnits.length} 社 定着</span>
          <span>${startedCount} 社 着手済み</span>
        </div>
      </a>`;
  });

  const dueHtml = dueItems.length
    ? dueItems
        .map(
          (x) => `
      <a class="task-row" href="#/quiz/${x.course.id}/${x.unit.id}">
        <span class="task-tag" style="background:${x.course.color}">復習</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title}</small></span>
        <span class="task-arrow">→ テストを受ける</span>
      </a>`
        )
        .join("")
    : `<p class="empty">今日の復習はありません。新しい単元に進みましょう。</p>`;

  const newHtml = nextNewItems.length
    ? nextNewItems
        .map(
          (x) => `
      <a class="task-row" href="#/lesson/${x.course.id}/${x.unit.id}">
        <span class="task-tag" style="background:${x.course.color}">新規</span>
        <span class="task-title">${x.unit.title}<small>${x.course.title} / #${String(x.unit.order).padStart(2, "0")}</small></span>
        <span class="task-arrow">→ 教材を読む</span>
      </a>`
        )
        .join("")
    : "";

  root.innerHTML = `
    <header class="topbar">
      <h1>🎛 音楽機材の教養</h1>
      <nav><a href="#/progress">進捗・統計</a> <a href="#/glossary">音響用語辞典</a></nav>
    </header>
    <section class="section">
      <h2>今日やること <small>${today}</small></h2>
      <div class="task-list">${dueHtml}${newHtml}</div>
    </section>
    <section class="section">
      <h2>コース</h2>
      <div class="course-grid">${courseCards}</div>
    </section>
  `;
}

// ---------- COURSE ----------
function renderCourse(courseId) {
  const state = loadState();
  const course = getCourse(courseId);
  if (!course) return renderHome();

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
      <a class="back" href="#/">← ホーム</a>
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

  const sectionsHtml = unit.sections
    .map(
      (s) => `
      <div class="lesson-section">
        <h3>${s.heading}</h3>
        ${s.image ? `<img class="lesson-image" src="images/${s.image}" alt="${s.heading}">` : ""}
        ${s.imageCredit ? `<p class="image-credit">${s.imageCredit}</p>` : ""}
        ${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}
      </div>`
    )
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
      <a class="btn btn-primary" href="#/quiz/${courseId}/${unitId}">クイズに挑戦する →</a>
    </article>
  `;
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

// ---------- PROGRESS ----------
function renderProgress() {
  const state = loadState();
  let body = "";

  courseIds().forEach((cid) => {
    const course = getCourse(cid);
    const realUnits = course.units.filter((u) => !u.stub);
    const rows = realUnits
      .map((u) => {
        const us = unitState(state, cid, u.id);
        const st = computeStatus(state, cid, u.id);
        const attempts = us ? us.history.length : 0;
        const lastScore = us && us.history.length ? us.history[us.history.length - 1] : null;
        return `
        <tr>
          <td>${u.title}</td>
          <td>${badge(st)}</td>
          <td>${us ? us.nextReview : "-"}</td>
          <td>${us ? us.reviewCount : 0} 回</td>
          <td>${lastScore ? lastScore.score + "/" + lastScore.total : "-"}</td>
        </tr>`;
      })
      .join("");

    const masteredCount = realUnits.filter((u) => computeStatus(state, cid, u.id) === "mastered").length;
    const pct = realUnits.length ? Math.round((masteredCount / realUnits.length) * 100) : 0;

    body += `
      <div class="section">
        <h2><span class="course-dot" style="background:${course.color}"></span> ${course.title}</h2>
        <div class="bar-track bar-track-lg"><div class="bar-fill" style="width:${pct}%;background:${course.color}"></div></div>
        <p class="lead">${masteredCount} / ${realUnits.length} 社が定着済み(${pct}%)</p>
        <table class="progress-table">
          <thead><tr><th>会社名</th><th>状態</th><th>次回復習日</th><th>復習回数</th><th>直近スコア</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  });

  root.innerHTML = `
    <header class="topbar">
      <a class="back" href="#/">← ホーム</a>
      <h1>進捗・統計</h1>
    </header>
    ${body}
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
