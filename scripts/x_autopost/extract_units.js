// courses/*.js (window.COURSES[...] = {...} 形式) を読み込み、
// 投稿ネタとして使える units.json を生成する。
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const COURSES_DIR = path.join(__dirname, "..", "..", "courses");
const OUT_FILE = path.join(__dirname, "units.json");

const files = fs.readdirSync(COURSES_DIR).filter((f) => f.endsWith(".js"));

const sandbox = { window: { COURSES: {} } };
vm.createContext(sandbox);

for (const file of files) {
  const code = fs.readFileSync(path.join(COURSES_DIR, file), "utf8");
  vm.runInContext(code, sandbox, { filename: file });
}

const courses = sandbox.window.COURSES;
const units = [];

for (const courseId of Object.keys(courses)) {
  const course = courses[courseId];
  if (!course.active) continue;
  for (const unit of course.units || []) {
    units.push({
      courseId: course.id,
      courseTitle: course.title,
      courseOrder: course.order,
      unitId: unit.id,
      unitOrder: unit.order,
      title: unit.title,
      category: unit.category,
      hook: unit.hook,
      sections: (unit.sections || []).map((s) => ({
        heading: s.heading,
        dialogue: s.dialogue || null,
        paragraphs: s.paragraphs || null,
      })),
    });
  }
}

units.sort((a, b) => a.courseOrder - b.courseOrder || a.unitOrder - b.unitOrder);

fs.writeFileSync(OUT_FILE, JSON.stringify(units, null, 2), "utf8");
console.log(`${units.length} units extracted -> ${OUT_FILE}`);
