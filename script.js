const TEAMS = [
  "ONIC",
  "TEAM LIQUID ID",
  "DEWA UNITED",
  "GEEK FAM",
  "BIGETRON BY VIT",
  "ALTER EGO ESPORTS",
  "EVOS",
  "NAVI",
  "RRQ",
];
const LOGOS = {
  ONIC: "logo/onic.png",
  "TEAM LIQUID ID": "logo/tlid.png",
  "DEWA UNITED": "logo/dewa.png",
  "GEEK FAM": "logo/geek.png",
  "ALTER EGO ESPORTS": "logo/ae.png",
  EVOS: "logo/evos.png",
  NAVI: "logo/navi.png",
  RRQ: "logo/rrq.png",
  "BIGETRON BY VIT": "logo/btr.png",
};
function logo(t) {
  return LOGOS[t] || "";
}

const DEFAULT = [
  { week: "Week 1", day: "Day 1", A: "BIGETRON BY VIT", B: "ALTER EGO ESPORTS", aScore: 2, bScore: 1 },
  { week: "Week 1", day: "Day 1", A: "NAVI", B: "RRQ", aScore: 2, bScore: 0 },
  { week: "Week 1", day: "Day 2", A: "EVOS", B: "GEEK FAM", aScore: 2, bScore: 0 },
  { week: "Week 1", day: "Day 2", A: "ALTER EGO ESPORTS", B: "ONIC", aScore: 0, bScore: 2 },
  { week: "Week 1", day: "Day 2", A: "TEAM LIQUID ID", B: "NAVI", aScore: 2, bScore: 1 },
  { week: "Week 1", day: "Day 3", A: "DEWA UNITED", B: "BIGETRON BY VIT", aScore: 2, bScore: 0 },
  { week: "Week 1", day: "Day 3", A: "EVOS", B: "TEAM LIQUID ID", aScore: 0, bScore: 2 },
  { week: "Week 1", day: "Day 3", A: "RRQ", B: "ONIC", aScore: 0, bScore: 2 },
  { week: "Week 2", day: "Day 1", A: "ONIC", B: "GEEK FAM", aScore: 2, bScore: 0 },
  { week: "Week 2", day: "Day 1", A: "DEWA UNITED", B: "NAVI", aScore: 2, bScore: 0 },
  { week: "Week 2", day: "Day 2", A: "GEEK FAM", B: "BIGETRON BY VIT", aScore: 2, bScore: 0 },
  { week: "Week 2", day: "Day 2", A: "ALTER EGO ESPORTS", B: "EVOS", aScore: 2, bScore: 1 },
  { week: "Week 2", day: "Day 3", A: "TEAM LIQUID ID", B: "DEWA UNITED", aScore: 2, bScore: 1 },
  { week: "Week 2", day: "Day 3", A: "NAVI", B: "ALTER EGO ESPORTS", aScore: 1, bScore: 2 },
  { week: "Week 2", day: "Day 3", A: "RRQ", B: "TEAM LIQUID ID", aScore: 0, bScore: 2 },
  { week: "Week 2", day: "Day 3", A: "BIGETRON BY VIT", B: "EVOS", aScore: 2, bScore: 1 },
  { week: "Week 3", day: "Day 1", A: "ONIC", B: "DEWA UNITED", aScore: 2, bScore: 1 },
  { week: "Week 3", day: "Day 1", A: "NAVI", B: "EVOS", aScore: 0, bScore: 2 },
  { week: "Week 3", day: "Day 2", A: "TEAM LIQUID ID", B: "GEEK FAM", aScore: 0, bScore: 2 },
  { week: "Week 3", day: "Day 2", A: "ONIC", B: "BIGETRON BY VIT", aScore: 1, bScore: 2 },
  { week: "Week 3", day: "Day 3", A: "RRQ", B: "ALTER EGO ESPORTS", aScore: 1, bScore: 2 },
  { week: "Week 3", day: "Day 3", A: "BIGETRON BY VIT", B: "NAVI", aScore: 1, bScore: 2 },
  { week: "Week 3", day: "Day 3", A: "GEEK FAM", B: "RRQ", aScore: 2, bScore: 1 },
  { week: "Week 3", day: "Day 3", A: "ALTER EGO ESPORTS", B: "DEWA UNITED", aScore: 0, bScore: 2 },
  { week: "Week 4", day: "Day 1", A: "NAVI", B: "ONIC", aScore: 0, bScore: 2 },
  { week: "Week 4", day: "Day 1", A: "EVOS", B: "DEWA UNITED", aScore: 2, bScore: 0 },
  { week: "Week 4", day: "Day 2", A: "TEAM LIQUID ID", B: "BIGETRON BY VIT", aScore: 1, bScore: 2 },
  { week: "Week 4", day: "Day 2", A: "RRQ", B: "EVOS", aScore: 0, bScore: 2 },
  { week: "Week 4", day: "Day 2", A: "GEEK FAM", B: "ALTER EGO ESPORTS", aScore: 1, bScore: 2 },
  { week: "Week 4", day: "Day 3", A: "ONIC", B: "TEAM LIQUID ID", aScore: 2, bScore: 0 },
  { week: "Week 4", day: "Day 3", A: "BIGETRON BY VIT", B: "RRQ", aScore: 2, bScore: 1 },
  { week: "Week 4", day: "Day 3", A: "DEWA UNITED", B: "GEEK FAM", aScore: 2, bScore: 0 },
  { week: "Week 5", day: "Day 1", A: "GEEK FAM", B: "NAVI", aScore: 0, bScore: 2 },
  { week: "Week 5", day: "Day 1", A: "EVOS", B: "ONIC", aScore: 0, bScore: 2 },
  { week: "Week 5", day: "Day 2", A: "DEWA UNITED", B: "RRQ", aScore: 0, bScore: 0 },
  { week: "Week 5", day: "Day 2", A: "ALTER EGO ESPORTS", B: "TEAM LIQUID ID", aScore: 0, bScore: 0 },
  { week: "Week 5", day: "Day 2", A: "EVOS", B: "BIGETRON BY VIT", aScore: 0, bScore: 0 },
  { week: "Week 5", day: "Day 3", A: "ALTER EGO ESPORTS", B: "NAVI", aScore: 0, bScore: 0 },
  { week: "Week 5", day: "Day 3", A: "GEEK FAM", B: "ONIC", aScore: 0, bScore: 0 },
  { week: "Week 5", day: "Day 3", A: "DEWA UNITED", B: "TEAM LIQUID ID", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 1", A: "NAVI", B: "DEWA UNITED", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 1", A: "ALTER EGO ESPORTS", B: "GEEK FAM", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 2", A: "EVOS", B: "ALTER EGO ESPORTS", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 2", A: "TEAM LIQUID ID", B: "ONIC", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 2", A: "RRQ", B: "BIGETRON BY VIT", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 3", A: "NAVI", B: "TEAM LIQUID ID", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 3", A: "RRQ", B: "ONIC", aScore: 0, bScore: 0 },
  { week: "Week 6", day: "Day 3", A: "GEEK FAM", B: "EVOS", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 1", A: "GEEK FAM", B: "DEWA UNITED", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 1", A: "BIGETRON BY VIT", B: "TEAM LIQUID ID", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 2", A: "DEWA UNITED", B: "ALTER EGO ESPORTS", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 2", A: "EVOS", B: "RRQ", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 2", A: "ONIC", B: "NAVI", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 3", A: "RRQ", B: "GEEK FAM", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 3", A: "NAVI", B: "BIGETRON BY VIT", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 3", A: "TEAM LIQUID ID", B: "EVOS", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 1", A: "BIGETRON BY VIT", B: "GEEK FAM", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 1", A: "DEWA UNITED", B: "ONIC", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 2", A: "EVOS", B: "NAVI", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 2", A: "TEAM LIQUID ID", B: "RRQ", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 2", A: "ONIC", B: "ALTER EGO ESPORTS", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 3", A: "DEWA UNITED", B: "EVOS", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 3", A: "ALTER EGO ESPORTS", B: "BIGETRON BY VIT", aScore: 0, bScore: 0 },
  { week: "Week 8", day: "Day 3", A: "RRQ", B: "NAVI", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 1", A: "BIGETRON BY VIT", B: "DEWA UNITED", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 1", A: "TEAM LIQUID ID", B: "ALTER EGO ESPORTS", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 2", A: "GEEK FAM", B: "TEAM LIQUID ID", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 2", A: "ALTER EGO ESPORTS", B: "RRQ", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 2", A: "BIGETRON BY VIT", B: "ONIC", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 3", A: "RRQ", B: "DEWA UNITED", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 3", A: "ONIC", B: "EVOS", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 3", A: "NAVI", B: "GEEK FAM", aScore: 0, bScore: 0 },
];

let schedule = [];
let activeWeek = "ALL";
let activeTeam = "ALL";

function getCurrentWeekAuto() {
  const startDate = new Date("2026-03-27");
  const now = new Date();

  const diff = now - startDate;
  const weekNumber = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;

  return "Week " + Math.min(Math.max(weekNumber, 1), 9);
}

const CURRENT_WEEK = getCurrentWeekAuto();

let playoffScores = {
  m1: null, m2: null, m3: null, m4: null,
  m5: null, m6: null, m7: null, m8: null,
};

function loadPlayoffScores() {
  try {
    const s = localStorage.getItem("mpl_playoff_v1");
    if (s) playoffScores = JSON.parse(s);
  } catch (e) {}
}

function savePlayoffScores() {
  try {
    localStorage.setItem("mpl_playoff_v1", JSON.stringify(playoffScores));
  } catch (e) {}
}

const SIM_RESULTS = [[2, 0], [2, 1], [1, 2], [0, 2]];
let simMode = "Now";

function simCopyStats(s) {
  const c = {};
  for (const t in s) c[t] = { ...s[t] };
  return c;
}

function runSimulation(mode) {
  const N = 10000;
  const counters = {};
  TEAMS.forEach((t) => { counters[t] = { playoff: 0, upper: 0, lower: 0, elim: 0 }; });
  const pending = schedule.filter((m) => m.aScore === 0 && m.bScore === 0);
  for (let i = 0; i < N; i++) {
    const base = computeStats();
    const s = simCopyStats(base);
    for (const pm of pending) {
      const r = SIM_RESULTS[Math.floor(Math.random() * SIM_RESULTS.length)];
      if (!s[pm.A] || !s[pm.B]) continue;
      s[pm.A].gw += r[0]; s[pm.A].gl += r[1];
      s[pm.B].gw += r[1]; s[pm.B].gl += r[0];
      if (r[0] > r[1]) { s[pm.A].win++; s[pm.A].mp++; s[pm.B].lose++; }
      else              { s[pm.B].win++; s[pm.B].mp++; s[pm.A].lose++; }
      s[pm.A].ng = s[pm.A].gw - s[pm.A].gl;
      s[pm.B].ng = s[pm.B].gw - s[pm.B].gl;
    }
    const ranked = sorted(s);
    ranked.forEach((t, idx) => {
      const rank = idx + 1;
      if (rank <= 6) counters[t.name].playoff++;
      if (rank <= 2) counters[t.name].upper++;
      if (rank >= 3 && rank <= 6) counters[t.name].lower++;
      if (rank >= 7) counters[t.name].elim++;
    });
  }
  return { counters, N };
}

function barColor(p) {
  if (p >= 70) return "#6fcf3a";
  if (p >= 40) return "#ffff47";
  if (p >= 20) return "#ff6a00";
  return "#e06060";
}

function renderChance() {
  const tbody = document.getElementById("chanceBody");
  if (!tbody) return;
  const { counters, N } = runSimulation(simMode);
  const arr = TEAMS.map((t) => ({ name: t, ...counters[t] }));
  arr.sort((a, b) => {
    if (b.playoff !== a.playoff) return b.playoff - a.playoff;
    if (b.upper !== a.upper) return b.upper - a.upper;
    return b.lower - a.lower;
  });
  tbody.innerHTML = arr.map((t, i) => {
    const rank = i + 1;
    const rc = rank === 1 ? "r1" : rank === 2 ? "r2" : rank === 3 ? "r3" : "";
    const rowCls = rank <= 6 ? "top-row" : "bot-row";
    const p = (v) => (v / N) * 100;
    const bar = (v, col) =>
      `<div class="chance-bar-wrap">
        <div class="chance-bar-bg"><div class="chance-bar-fill" style="width:${p(v)}%;background:${col}"></div></div>
        <span class="chance-pct" style="color:${col}">${p(v).toFixed(2)}%</span>
      </div>`;
    return `<tr class="${rowCls}">
      <td><span class="rank-cell ${rc}">${rank}</span></td>
      <td><div class="team-cell-inner"><img src="${logo(t.name)}" onerror="this.style.display='none'"><span class="team-name-s">${t.name}</span></div></td>
      <td>${bar(t.playoff, barColor(p(t.playoff)))}</td>
      <td>${bar(t.upper, "#6fcf3a")}</td>
      <td>${bar(t.lower, "#60aaee")}</td>
      <td>${bar(t.elim, "#e06060")}</td>
    </tr>`;
  }).join("");
}

function loadSchedule() {
  try {
    const s = localStorage.getItem("mpl_sched_v2");
    if (s) { schedule = JSON.parse(s); return; }
  } catch (e) {}
  schedule = JSON.parse(JSON.stringify(DEFAULT));
}

function saveSchedule() {
  try { localStorage.setItem("mpl_sched_v2", JSON.stringify(schedule)); } catch (e) {}
}

function computeStats() {
  const s = {};
  TEAMS.forEach((t) => { s[t] = { name: t, win: 0, lose: 0, gw: 0, gl: 0 }; });
  for (const m of schedule) {
    if (m.aScore === 0 && m.bScore === 0) continue;
    const a = s[m.A], b = s[m.B];
    if (!a || !b) continue;
    a.gw += m.aScore; a.gl += m.bScore;
    b.gw += m.bScore; b.gl += m.aScore;
    if (m.aScore > m.bScore) { a.win++; b.lose++; }
    else { b.win++; a.lose++; }
  }
  for (const t in s) { s[t].mp = s[t].win; s[t].ng = s[t].gw - s[t].gl; }
  return s;
}

function h2h(a, b) {
  let aw = 0, bw = 0;
  for (const m of schedule) {
    if ((m.A === a && m.B === b) || (m.A === b && m.B === a)) {
      const isA = m.A === a;
      const sa = isA ? m.aScore : m.bScore, sb = isA ? m.bScore : m.aScore;
      if (sa > sb) aw++; else if (sb > sa) bw++;
    }
  }
  return aw > bw ? -1 : bw > aw ? 1 : 0;
}

function sorted(stats) {
  return Object.values(stats).sort((a, b) => {
    if (a.mp !== b.mp) return b.mp - a.mp;
    if (a.win !== b.win) return b.win - a.win;
    if (a.ng !== b.ng) return b.ng - a.ng;
    if (a.gw !== b.gw) return b.gw - a.gw;
    const h = h2h(a.name, b.name);
    if (h !== 0) return h;
    return a.name.localeCompare(b.name);
  });
}

function renderWeekNav() {
  const weeks = [...new Set(DEFAULT.map((m) => m.week))].sort(
    (a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1])
  );
  const nav = document.getElementById("weekNav");
  let html = `<button class="week-dot-btn${activeWeek === "ALL" ? " active" : ""}" onclick="setWeek('ALL')">
    <span class="wlabel">ALL</span><span class="wdot"></span>
  </button>`;
  weeks.forEach((w) => {
    html += `<div class="week-connector"></div>`;
    html += `<button class="week-dot-btn${w === activeWeek ? " active" : ""} ${w === CURRENT_WEEK ? "nav-current" : ""}" onclick="setWeek('${w}')">
      <span class="wlabel">${w}${w === CURRENT_WEEK ? '<span class="nav-current-badge">NOW</span>' : ""}</span>
      <span class="wdot"></span>
    </button>`;
  });
  nav.innerHTML = html;
}

function setWeek(w) {
  activeWeek = w;
  renderWeekNav();
  renderSchedule();
}
function renderSchedule() {
  const matches = schedule
    .map((m, i) => ({ ...m, i }))
    .filter((m) =>
      (activeWeek === "ALL" || m.week === activeWeek) &&
      (activeTeam === "ALL" || m.A === activeTeam || m.B === activeTeam)
    );
  const dayOrder = { "Day 1": 1, "Day 2": 2, "Day 3": 3 };
  let html = "";

  const buildDays = (list) => {
    const dayMap = new Map();
    list.forEach((m) => { if (!dayMap.has(m.day)) dayMap.set(m.day, []); dayMap.get(m.day).push(m); });
    return [...dayMap.keys()].sort((a, b) => (dayOrder[a] || 0) - (dayOrder[b] || 0)).map((day) => {
      let s = `<div class="day-section"><div class="day-header"><div class="day-label">${day}</div></div>`;
      dayMap.get(day).forEach((m) => { s += matchCard(m); });
      return s + `</div>`;
    }).join("");
  };

  if (activeWeek === "ALL") {
    const weekMap = new Map();
    matches.forEach((m) => { if (!weekMap.has(m.week)) weekMap.set(m.week, []); weekMap.get(m.week).push(m); });
    [...weekMap.keys()].sort((a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1])).forEach((week) => {
      html += `<div class="week-group-label ${week === CURRENT_WEEK ? "current-week" : ""}">
        ${week}${week === CURRENT_WEEK ? '<span class="current-badge">NOW</span>' : ""}
      </div>`;
      html += buildDays(weekMap.get(week));
    });
  } else {
    html += `<div class="week-group-label ${activeWeek === CURRENT_WEEK ? "current-week" : ""}">
      ${activeWeek}${activeWeek === CURRENT_WEEK ? '<span class="current-badge">CURRENT</span>' : ""}
    </div>`;
    html += buildDays(matches);
  }

  document.getElementById("schedContent").innerHTML = html;
  document.querySelectorAll(".score-sel").forEach((sel) => {
    sel.addEventListener("change", () => {
      const idx = parseInt(sel.dataset.idx);
      const [a, b] = sel.value.split("-").map(Number);
      schedule[idx].aScore = a;
      schedule[idx].bScore = b;
      saveSchedule();
      renderStandings();
      renderChance();
      renderPlayoffBracket();
    });
  });
}

function matchCard(m) {
  const cur = `${m.aScore}-${m.bScore}`;
  const opts = [["0-0","0 - 0"],["2-0","2 - 0"],["2-1","2 - 1"],["1-2","1 - 2"],["0-2","0 - 2"]];
  const selOpts = opts.map(([v, l]) => `<option value="${v}"${cur === v ? " selected" : ""}>${l}</option>`).join("");
  return `<div class="match-card">
    <div class="match-teams">
      <div class="team-chip"><img src="${logo(m.A)}" onerror="this.style.display='none'"><span>${m.A}</span></div>
      <span class="vs-badge">VS</span>
      <div class="team-chip"><img src="${logo(m.B)}" onerror="this.style.display='none'"><span>${m.B}</span></div>
    </div>
    <div class="score-wrap"><select class="score-sel" data-idx="${m.i}">${selOpts}</select></div>
  </div>`;
}
function renderStandings() {
  const stats = computeStats();
  const arr = sorted(stats);
  const tbody = document.getElementById("standBody");
  tbody.innerHTML = arr.map((t, i) => {
    const rc = i === 0 ? "r1" : i === 1 ? "r2" : i === 2 ? "r3" : "";
    const rowCls = i < 6 ? "top-row" : "bot-row";
    const ngCls = t.ng >= 0 ? "ng-pos" : "ng-neg";
    const ngStr = t.ng > 0 ? "+" + t.ng : t.ng;
    return `<tr class="${rowCls}">
      <td><span class="rank-cell ${rc}">${i + 1}</span></td>
      <td><div class="team-cell-inner"><img src="${logo(t.name)}" onerror="this.style.display='none'"><span class="team-name-s">${t.name}</span></div></td>
      <td class="mp-val">${t.mp}</td>
      <td>${t.win} - ${t.lose}</td>
      <td class="${ngCls}">${ngStr}</td>
      <td>${t.gw} - ${t.gl}</td>
    </tr>`;
  }).join("");
}
const _logoB64Cache = {};

function imgToBase64(src) {
  if (!src) return Promise.resolve("");
  if (_logoB64Cache[src]) return Promise.resolve(_logoB64Cache[src]);

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width  = img.naturalWidth  || 64;
        c.height = img.naturalHeight || 64;
        c.getContext("2d").drawImage(img, 0, 0);
        const b64 = c.toDataURL("image/png");
        _logoB64Cache[src] = b64;
        resolve(b64);
      } catch (e) {
        resolve("");
      }
    };
    img.onerror = () => resolve("");
    img.src = src + (src.includes("?") ? "&" : "?") + "_cb=" + Date.now();
  });
}

async function preloadLogos(teamList) {
  const entries = await Promise.all(
    teamList.map(async (t) => [t, await imgToBase64(logo(t))])
  );
  return Object.fromEntries(entries);
}

function getShareData() {
  const stats = computeStats();
  const arr = sorted(stats);
  const { counters, N } = runSimulation("current");
  const chanceArr = TEAMS.map((t) => ({ name: t, ...counters[t] }));
  chanceArr.sort((a, b) => {
    if (b.playoff !== a.playoff) return b.playoff - a.playoff;
    if (b.upper !== a.upper) return b.upper - a.upper;
    return b.lower - a.lower;
  });
  return { standings: arr, chances: chanceArr, N };
}

function buildShareHTML(type, logoB64) {
  const { standings, chances, N } = getShareData();
  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const logoImg = (teamName, size = 28) => {
    const src = logoB64[teamName];
    if (src) {
      return `<img src="${src}" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:50%;background:#252525;padding:2px;flex-shrink:0;vertical-align:middle">`;
    }
    const initials = teamName.split(" ").map(w => w[0]).slice(0, 2).join("");
    return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;border-radius:50%;background:#333;font-size:${Math.round(size * 0.38)}px;font-weight:800;color:#ffa600;flex-shrink:0">${initials}</span>`;
  };

  const rankBg = (i) => {
    if (i === 0) return "#e8a020";
    if (i === 1) return "#4a4a4a";
    if (i === 2) return "#3d2a10";
    return "#252525";
  };
  const rankColor = (i) => {
    if (i === 0) return "#1a1000";
    if (i === 1) return "#ddd";
    if (i === 2) return "#c8944a";
    return "#8a7a66";
  };

  if (type === "standings") {
    const rows = standings.map((t, i) => {
      const isTop = i < 6;
      const ng = t.ng > 0 ? "+" + t.ng : String(t.ng);
      const ngCol = t.ng >= 0 ? "#ffa600" : "#e06060";
      const rowBg = isTop ? "rgba(74,222,128,0.06)" : "rgba(192,57,43,0.08)";
      const borderLeft = isTop ? "3px solid rgba(74,222,128,0.3)" : "3px solid rgba(192,57,43,0.3)";
      return `<tr style="background:${rowBg}">
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:4px;font-weight:800;font-size:11px;background:${rankBg(i)};color:${rankColor(i)}">${i + 1}</span>
        </td>
        <td style="padding:9px 8px;text-align:left;border-bottom:1px solid #2e2e2e;border-left:${borderLeft}">
          <div style="display:flex;align-items:center;gap:8px">
            ${logoImg(t.name, 26)}
            <span style="font-weight:700;font-size:12px;color:#f5f0e8">${t.name}</span>
          </div>
        </td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;font-weight:800;font-size:15px;color:#ffa600">${t.mp}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;color:#c8b99a;font-size:12px">${t.win}-${t.lose}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;font-weight:700;font-size:12px;color:${ngCol}">${ng}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;color:#8a7a66;font-size:11px">${t.gw}-${t.gl}</td>
      </tr>`;
    }).join("");

    return `
      <div style="width:1200px;height:630px;background:#0d0d0d;display:flex;flex-direction:column;font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;position:relative;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffa600,#ff7b00)"></div>
        <div style="padding:28px 40px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2e2e2e">
          <div>
            <div style="font-size:22px;font-weight:800;color:#f5f0e8;letter-spacing:3px;text-transform:uppercase">MPL Season 17</div>
            <div style="font-size:11px;color:#8a7a66;letter-spacing:2px;margin-top:2px;text-transform:uppercase">Regular Season Standings</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:#ffa600;font-weight:700;letter-spacing:1px">${CURRENT_WEEK} · ${dateStr}</div>
            <div style="display:flex;gap:12px;margin-top:8px;justify-content:flex-end">
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#8a7a66"><span style="width:8px;height:8px;border-radius:1px;background:rgba(74,222,128,0.3);display:inline-block"></span>Playoff Zone (1-6)</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#8a7a66"><span style="width:8px;height:8px;border-radius:1px;background:rgba(192,57,43,0.3);display:inline-block"></span>Eliminated (7-9)</div>
            </div>
          </div>
        </div>
        <div style="flex:1;padding:32px 40px 0">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="border-bottom:2px solid #ffa600">
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700;width:44px">#</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">Team</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">Pts</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">W-L</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">Net</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">Game W-L</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="padding:12px 40px;border-top:1px solid #2e2e2e;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:10px;color:#555;letter-spacing:1px">mpl id s17</div>
          <div style="font-size:10px;color:#444;letter-spacing:1px"></div>
        </div>
      </div>`;
  }

  if (type === "chances") {
    const rows = chances.map((t, i) => {
      const rank = i + 1;
      const isTop = rank <= 6;
      const rowBg = isTop ? "rgba(74,222,128,0.06)" : "rgba(192,57,43,0.08)";
      const borderLeft = isTop ? "3px solid rgba(74,222,128,0.3)" : "3px solid rgba(192,57,43,0.3)";
      const p = (v) => ((v / N) * 100).toFixed(1);
      const pNum = (v) => (v / N) * 100;

      const miniBar = (val, col) => {
        const pct = Math.min(100, pNum(val));
        return `<div style="display:flex;align-items:center;gap:6px">
          <div style="flex:1;height:6px;border-radius:3px;background:#2e2e2e;overflow:hidden;min-width:60px">
            <div style="width:${pct}%;height:100%;border-radius:3px;background:${col}"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:${col};min-width:42px;text-align:right">${p(val)}%</span>
        </div>`;
      };

      return `<tr style="background:${rowBg}">
        <td style="padding:8px 8px;text-align:center;border-bottom:1px solid #2e2e2e">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:4px;font-weight:800;font-size:10px;background:${rankBg(i)};color:${rankColor(i)}">${rank}</span>
        </td>
        <td style="padding:8px 8px;text-align:left;border-bottom:1px solid #2e2e2e;border-left:${borderLeft}">
          <div style="display:flex;align-items:center;gap:8px">
            ${logoImg(t.name, 24)}
            <span style="font-weight:700;font-size:11px;color:#f5f0e8">${t.name}</span>
          </div>
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(t.playoff, pNum(t.playoff) >= 70 ? "#6fcf3a" : pNum(t.playoff) >= 40 ? "#ffff47" : pNum(t.playoff) >= 20 ? "#ff6a00" : "#e06060")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(t.upper, "#6fcf3a")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(t.lower, "#60aaee")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(t.elim, "#e06060")}</td>
      </tr>`;
    }).join("");

    return `
      <div style="width:1200px;height:630px;background:#0d0d0d;display:flex;flex-direction:column;font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;position:relative;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffa600,#ff7b00)"></div>
        <div style="padding:28px 40px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2e2e2e">
          <div>
            <div style="font-size:22px;font-weight:800;color:#f5f0e8;letter-spacing:3px;text-transform:uppercase">MPL Season 17</div>
            <div style="font-size:11px;color:#8a7a66;letter-spacing:2px;margin-top:2px;text-transform:uppercase">Chance to Make Playoffs</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:#ffa600;font-weight:700;letter-spacing:1px">${CURRENT_WEEK} · ${dateStr}</div>
            <div style="display:flex;gap:12px;margin-top:8px;justify-content:flex-end">
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#6fcf3a"><span style="width:10px;height:3px;border-radius:1px;background:#6fcf3a;display:inline-block"></span>Playoff 1-6</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#6fcf3a"><span style="width:10px;height:3px;border-radius:1px;background:#6fcf3a;display:inline-block"></span>Upper 1-2</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#60aaee"><span style="width:10px;height:3px;border-radius:1px;background:#60aaee;display:inline-block"></span>Lower 3-6</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#e06060"><span style="width:10px;height:3px;border-radius:1px;background:#e06060;display:inline-block"></span>Elim 7-9</div>
            </div>
          </div>
        </div>
        <div style="flex:1;padding:32px 40px 0">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="border-bottom:2px solid #ffa600">
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700;width:40px">#</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">Team</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">Playoff (1-6)</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#6fcf3a;font-weight:700">Upper (1-2)</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#60aaee;font-weight:700">Lower (3-6)</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#e06060;font-weight:700">Eliminasi (7-9)</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div style="padding:12px 40px;border-top:1px solid #2e2e2e;display:flex;align-items:center;justify-content:space-between">
          <div style="font-size:10px;color:#555;letter-spacing:1px">mpl id s17</div>
          <div style="font-size:10px;color:#444;letter-spacing:1px"></div>
        </div>
      </div>`;
  }
}

async function downloadShareImage(type) {
  const btn = document.getElementById(type === "standings" ? "dlStandBtn" : "dlChanceBtn");
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<span class="dl-spinner"></span> Loading logos...`;
  btn.disabled = true;

  try {
    const html2canvas = window.html2canvas;
    if (!html2canvas) throw new Error("html2canvas not loaded");

    const logoB64 = await preloadLogos(TEAMS);

    btn.innerHTML = `<span class="dl-spinner"></span> Rendering...`;

    const shareHTML = buildShareHTML(type, logoB64);
    const container = document.getElementById("shareExportContainer");
    container.innerHTML = shareHTML;
    container.style.display = "block";
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise(r => setTimeout(r, 100));
    const el = container.firstElementChild;
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#0d0d0d",
      width: 1200,
      height: 630,
      logging: false,
      imageTimeout: 0,
    });
    container.style.display = "none";
    container.innerHTML = "";

    const link = document.createElement("a");
    link.download = `mpl-s17-${type}-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Download error:", err);
    alert("Gagal menghasilkan gambar: " + err.message);
  } finally {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }
}

function getPlayoffSeeds() {
  const stats = computeStats();
  const arr = sorted(stats);
  return arr.map((t) => t.name);
}

function winnerOf(matchKey, teamA, teamB) {
  const sc = playoffScores[matchKey];
  if (!sc) return null;
  if (sc.a > sc.b) return teamA;
  if (sc.b > sc.a) return teamB;
  return null;
}

function loserOf(matchKey, teamA, teamB) {
  const sc = playoffScores[matchKey];
  if (!sc) return null;
  if (sc.a > sc.b) return teamB;
  if (sc.b > sc.a) return teamA;
  return null;
}

function computePlayoffSlots() {
  const seeds = getPlayoffSeeds();
  const s1 = seeds[0] || null, s2 = seeds[1] || null;
  const s3 = seeds[2] || null, s4 = seeds[3] || null;
  const s5 = seeds[4] || null, s6 = seeds[5] || null;

  const m1A = s3, m1B = s6;
  const winM1 = winnerOf("m1", m1A, m1B);
  const losM1 = loserOf("m1", m1A, m1B);

  const m2A = s4, m2B = s5;
  const winM2 = winnerOf("m2", m2A, m2B);
  const losM2 = loserOf("m2", m2A, m2B);

  const m3A = winM1, m3B = s2;
  const winM3 = winnerOf("m3", m3A, m3B);
  const losM3 = loserOf("m3", m3A, m3B);

  const m4A = winM2, m4B = s1;
  const winM4 = winnerOf("m4", m4A, m4B);
  const losM4 = loserOf("m4", m4A, m4B);

  const m5A = losM3, m5B = losM4;
  const winM5 = winnerOf("m5", m5A, m5B);

  const m6A = winM3, m6B = winM4;
  const winM6 = winnerOf("m6", m6A, m6B);
  const losM6 = loserOf("m6", m6A, m6B);

  const m7A = losM6, m7B = winM5;
  const winM7 = winnerOf("m7", m7A, m7B);

  const m8A = winM6, m8B = winM7;
  const winM8 = winnerOf("m8", m8A, m8B);

  return {
    m1: { A: m1A, B: m1B, label: "M1 · BO5", tag: "LOWER BRACKET", tagColor: "#ffa600" },
    m2: { A: m2A, B: m2B, label: "M2 · BO5", tag: "LOWER BRACKET", tagColor: "#ffa600" },
    m3: { A: m3A, B: m3B, label: "M3 · BO5", tag: "UPPER BRACKET", tagColor: "#ffa600" },
    m4: { A: m4A, B: m4B, label: "M4 · BO5", tag: "UPPER BRACKET", tagColor: "#ffa600" },
    m5: { A: m5A, B: m5B, label: "M5 · BO5", tag: "LOWER ELIM", tagColor: "#ffa600" },
    m6: { A: m6A, B: m6B, label: "M6 · BO5", tag: "UPPER FINAL", tagColor: "#ffa600" },
    m7: { A: m7A, B: m7B, label: "M7 · BO7", tag: "LOWER FINAL", tagColor: "#ffa600" },
    m8: { A: m8A, B: m8B, label: "M8 · BO7", tag: "GRAND FINAL", tagColor: "#ffa600", isGF: true },
    winM8,
  };
}

function pfMatchCard(matchKey, slot) {
  const sc = playoffScores[matchKey];
  const isBO7 = matchKey === "m7" || matchKey === "m8";
  const opts = isBO7
    ? [["tbd","— TBD —"],["4-0","4-0"],["4-1","4-1"],["4-2","4-2"],["4-3","4-3"],["3-4","3-4"],["2-4","2-4"],["1-4","1-4"],["0-4","0-4"]]
    : [["tbd","— TBD —"],["3-0","3-0"],["3-1","3-1"],["3-2","3-2"],["2-3","2-3"],["1-3","1-3"],["0-3","0-3"]];

  const curVal = sc ? `${sc.a}-${sc.b}` : "tbd";
  const selOpts = opts.map(([v, l]) => `<option value="${v}"${curVal === v ? " selected" : ""}>${l}</option>`).join("");

  const aWin = sc && sc.a > sc.b;
  const bWin = sc && sc.b > sc.a;

  const teamRow = (name, score, isWinner) => {
    const winCls = isWinner ? " pfc-winner" : "";
    return `<div class="pfc-team${winCls}">
      <div class="pfc-team-info">
        ${name
          ? `<img src="${logo(name)}" onerror="this.style.display='none'" class="pfc-logo"><span class="pfc-name">${name}</span>`
          : `<span class="pfc-tbd">TBD</span>`
        }
      </div>
      <span class="pfc-score">${score !== undefined ? score : ""}</span>
    </div>`;
  };

  return `<div class="pfc-card ${slot.isGF ? "pfc-gf" : ""}" id="pfc-${matchKey}">
    <div class="pfc-header">
      <span class="pfc-label">${slot.label}</span>
      <span class="pfc-tag" style="color:${slot.tagColor};border-color:${slot.tagColor}44;background:${slot.tagColor}18">${slot.tag}</span>
    </div>
    <div class="pfc-teams">
      ${teamRow(slot.A, sc ? sc.a : undefined, aWin)}
      <div class="pfc-divider"></div>
      ${teamRow(slot.B, sc ? sc.b : undefined, bWin)}
    </div>
    <div class="pfc-ctrl">
      <select class="pfc-sel" data-match="${matchKey}">${selOpts}</select>
    </div>
  </div>`;
}

function drawConnectors(container) {
  const old = container.querySelector(".pfc-svg-overlay");
  if (old) old.remove();

  const wrap = container.querySelector(".pfc-canvas");
  if (!wrap) return;

  const wrapRect = wrap.getBoundingClientRect();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("pfc-svg-overlay");
  svg.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;";

  function drawLine(fromId, toId, color = "#555", fromBottom = false) {
    const from = wrap.querySelector(`#pfc-${fromId}`);
    const to   = wrap.querySelector(`#pfc-${toId}`);
    if (!from || !to) return;

    const fr = from.getBoundingClientRect();
    const tr = to.getBoundingClientRect();
    const wr = wrapRect;

    const x1 = fr.right  - wr.left;
    const y1 = fromBottom
      ? (fr.top - wr.top + fr.height * 0.75)
      : (fr.top - wr.top + fr.height / 2);

    const x2 = tr.left  - wr.left;
    const y2 = tr.top - wr.top + tr.height / 2;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    if (Math.abs(y1 - y2) <= 4) {
      path.setAttribute("d", `M${x1},${y1} H${x2}`);
    } else {
      const midX = (x1 + x2) / 2;
      path.setAttribute("d", `M${x1},${y1} H${midX} V${y2} H${x2}`);
    }

    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
  }

  drawLine("m1", "m3", "#ffa600");
  drawLine("m2", "m4", "#ffa600");
  drawLine("m3", "m6", "#ffa600");
  drawLine("m4", "m6", "#ffa600");
  drawLine("m5", "m7", "#ffa600");
  drawLine("m6", "m8", "#ffa600");
  drawLine("m7", "m8", "#ffa600");

  wrap.appendChild(svg);
}

function renderPlayoffBracket() {
  const container = document.getElementById("playoffBracket");
  if (!container) return;

  const slots = computePlayoffSlots();

  const PAD   = 16;
  const GAP   = 20;
  const totalW = container.clientWidth - PAD * 2;

  const COL_W  = Math.floor((totalW - GAP * 3) / 4);

  const C0 = 0;
  const C1 = COL_W + GAP;
  const C2 = (COL_W + GAP) * 2;
  const C3 = (COL_W + GAP) * 3;

  const CARD_H  = 118;
  const ROW1    = 30;
  const ROW2    = 310;
  const ROW_M5  = 490;
  const ROW_M6  = Math.round((ROW1 + ROW2 + CARD_H) / 2 - CARD_H / 2);
  const ROW_M8  = Math.round((ROW_M6 + ROW_M5 + CARD_H) / 2 - CARD_H / 2);

  const positions = {
    m1: { left: C0, top: ROW1   },
    m2: { left: C0, top: ROW2   },
    m3: { left: C1, top: ROW1   },
    m4: { left: C1, top: ROW2   },
    m5: { left: C1, top: ROW_M5 },
    m6: { left: C2, top: ROW_M6 },
    m7: { left: C2, top: ROW_M5 },
    m8: { left: C3, top: ROW_M8 },
  };

  const colLabels = [
    { left: C0, w: COL_W, label: "LOWER BRACKET",          color: "#ffa600" },
    { left: C1, w: COL_W, label: "UPPER BRACKET / LOWER ELIM",   color: "#ffa600" },
    { left: C2, w: COL_W, label: "UPPER FINAL / LOWER FINAL", color: "#ffa600" },
    { left: C3, w: COL_W, label: "GRAND FINAL",            color: "#ffa600" },
  ];

  const CANVAS_W = totalW;
  const CANVAS_H = ROW_M5 + CARD_H + 50;

  let html = `<div class="pfc-canvas" style="position:relative;width:${CANVAS_W}px;height:${CANVAS_H}px;">`;

  colLabels.forEach(({ left, w, label, color }) => {
    html += `<div class="pfc-col-label" style="left:${left}px;width:${w}px;color:${color}">${label}</div>`;
  });

  Object.entries(positions).forEach(([key, pos]) => {
    html += `<div style="position:absolute;left:${pos.left}px;top:${pos.top + 28}px;width:${COL_W}px;">
      ${pfMatchCard(key, slots[key])}
    </div>`;
  });

  html += `</div>`;

  if (slots.winM8) {
    html += `<div class="pfc-champion">
      <div class="pfc-champ-trophy"></div>
      <div>
        <div class="pfc-champ-label">CHAMPION</div>
        <div class="pfc-champ-team">
          <img src="${logo(slots.winM8)}" onerror="this.style.display='none'">
          <span>${slots.winM8}</span>
        </div>
      </div>
    </div>`;
  }

  container.innerHTML = html;

  requestAnimationFrame(() => {
    drawConnectors(container);
  });

  container.querySelectorAll(".pfc-sel").forEach((sel) => {
    sel.addEventListener("change", () => {
      const mk = sel.dataset.match;
      const v = sel.value;
      if (v === "tbd") {
        playoffScores[mk] = null;
      } else {
        const [a, b] = v.split("-").map(Number);
        playoffScores[mk] = { a, b };
      }
      savePlayoffScores();
      renderPlayoffBracket();
    });
  });
}
function switchTab(tab) {
  mobileTab = tab;
  document.getElementById("tabSched").classList.toggle("active", tab === "schedule");
  document.getElementById("tabStand").classList.toggle("active", tab === "standings");
  document.getElementById("tabPlayoff")?.classList.toggle("active", tab === "playoff");
  if (window.innerWidth <= 700) {
    document.getElementById("schedulePanel").classList.toggle("hidden", tab !== "schedule");
    document.getElementById("standingsPanel").classList.toggle("hidden", tab !== "standings");
    document.getElementById("playoffPanel")?.classList.toggle("hidden", tab !== "playoff");
  }
}
let isLight = false;

function applyTheme(light) {
  isLight = light;
  const root = document.documentElement;
  const icon  = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  if (light) {
    root.classList.add("light");
    if (icon)  icon.textContent  = "☀️";
    if (label) label.textContent = "Light";
  } else {
    root.classList.remove("light");
    if (icon)  icon.textContent  = "🌙";
    if (label) label.textContent = "Dark";
  }
  try { localStorage.setItem("mpl_theme", light ? "light" : "dark"); } catch(e) {}
  const container = document.getElementById("playoffBracket");
  if (container) requestAnimationFrame(() => drawConnectors(container));
}

function toggleTheme() {
  applyTheme(!isLight);
}

function loadTheme() {
  try {
    const saved = localStorage.getItem("mpl_theme");
    if (saved === "light") applyTheme(true);
  } catch(e) {}
}


function init() {
  const tf = document.getElementById("teamFilter");
  TEAMS.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t; opt.textContent = t;
    tf.appendChild(opt);
  });
  tf.addEventListener("change", () => { activeTeam = tf.value; renderSchedule(); });

  loadSchedule();
  loadPlayoffScores();
  loadTheme();
  renderWeekNav();
  renderSchedule();
  renderStandings();
  renderChance();
  renderPlayoffBracket();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderPlayoffBracket(), 100);
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("Reset ke jadwal & skor default?")) {
      schedule = JSON.parse(JSON.stringify(DEFAULT));
      saveSchedule();
      renderSchedule();
      renderStandings();
      renderChance();
      renderPlayoffBracket();
    }
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    if (confirm("Kosongkan semua skor (set ke 0-0)?")) {
      schedule.forEach((m) => { m.aScore = 0; m.bScore = 0; });
      saveSchedule();
      renderSchedule();
      renderStandings();
      renderChance();
      renderPlayoffBracket();
    }
  });

  document.getElementById("resetPlayoffBtn")?.addEventListener("click", () => {
    if (confirm("Reset semua skor playoff?")) {
      playoffScores = { m1:null, m2:null, m3:null, m4:null, m5:null, m6:null, m7:null, m8:null };
      savePlayoffScores();
      renderPlayoffBracket();
    }
  });

  document.getElementById("dlStandBtn")?.addEventListener("click", () => downloadShareImage("standings"));
  document.getElementById("dlChanceBtn")?.addEventListener("click", () => downloadShareImage("chances"));
}

if (window.innerWidth <= 700) switchTab("schedule");
init();
function showTutorial(){
  document.getElementById("tutorialModal").style.display = "flex";
}

function closeTutorial(){
  document.getElementById("tutorialModal").style.display = "none";
}
