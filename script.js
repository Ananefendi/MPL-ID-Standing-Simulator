// ══════════════════════════════════════════════════════════
//  INTERNATIONALIZATION (i18n)
// ══════════════════════════════════════════════════════════

const LANG_STRINGS = {
  id: {
    // Topbar & Navigation
    regularSeason: "Regular Season",
    tutorial: "Tutorial",
    feedback: "Feedback",
    schedule: "Jadwal",
    standings: "Klasemen",

    // Panel headers
    matchSchedule: "Jadwal Pertandingan",
    allTeams: "Semua Tim",
    saveImage: "Simpan Gambar",
    liveStandings: "Klasemen Sekarang",
    resetToZero: "Reset ke 0-0",
    chancePlayoff: "Peluang Lolos Playoff",

    // Table headers
    team: "Tim",
    matchPts: "Poin Match",
    matchWL: "Match W-L",
    netGame: "Net Game",
    gameWL: "Game W-L",
    playoff16: "Playoff (1-6)",
    upper12: "Upper (1-2)",
    lower36: "Lower (3-6)",
    elim79: "Eliminasi (7-9)",

    // Tutorial
    howToUse: "Cara Penggunaan",
    close: "Tutup",
    tutorialItems: [
      "Ubah skor pertandingan di tab Jadwal",
      "Klasemen akan otomatis berubah sesuai skor",
      "Gunakan filter tim untuk melihat jadwal tim tertentu",
      "Klasemen Sekarang untuk kembali ke klasemen asli",
      "Reset ke 0-0 untuk mengosongkan semua skor",
      "Simpan Gambar untuk menyimpan jadwal sebagai gambar",
    ],

    // Download modal
    downloadSchedule: "Unduh Jadwal",
    chooseType: "Pilih jenis unduhan",
    downloadAllDays: "Unduh Semua Hari",
    allDaysDesc: "1 gambar · semua hari digabung",
    matches: "pertandingan",
    processing: "Memproses...",
    loadingLogos: "Memuat logo...",
    rendering: "Merender gambar...",

    now: "SEKARANG",
    current: "SEKARANG",

    bestOf3: "Best of 3",

    confirmReset: "Reset ke jadwal & skor default?",
    confirmClear: "Kosongkan semua skor (set ke 0-0)?",

    // Error
    errorImage: "Gagal menghasilkan gambar: ",
    noSchedule: "Tidak ada jadwal untuk hari tersebut.",

    // Share image labels
    shareRegularSeason: "Regular Season Standings",
    shareChanceMakePlayoffs: "Peluang Lolos Playoff",
    sharePlayoffZone: "Zona Playoff (1-6)",
    shareEliminated: "Eliminasi (7-9)",
    sharePlayoff: "Playoff 1-6",
    shareUpper: "Upper 1-2",
    shareLower: "Lower 3-6",
    shareElim: "Elim 7-9",
    shareMatchSchedule: "Jadwal Pertandingan",
    shareRegularSeasonLabel: "regular season",
    sharePts: "Pts",
    shareWL: "Match W-L",
    shareNet: "Net",
    shareGameWL: "Game W-L",
    shareTeam: "Tim",
  },
  en: {
    // Topbar & Navigation
    regularSeason: "Regular Season",
    tutorial: "Tutorial",
    feedback: "Feedback",
    schedule: "Schedule",
    standings: "Standings",

    // Panel headers
    matchSchedule: "Match Schedule",
    allTeams: "All Teams",
    saveImage: "Save Image",
    liveStandings: "Live Standings",
    resetToZero: "Reset to 0-0",
    chancePlayoff: "Chance to Make Playoffs",

    // Table headers
    team: "Team",
    matchPts: "Match Pts",
    matchWL: "Match W-L",
    netGame: "Net Game",
    gameWL: "Game W-L",
    playoff16: "Playoff (1-6)",
    upper12: "Upper (1-2)",
    lower36: "Lower (3-6)",
    elim79: "Eliminated (7-9)",

    // Tutorial
    howToUse: "How to Use",
    close: "Close",
    tutorialItems: [
      "Change match scores in the Schedule tab",
      "Standings update automatically based on scores",
      "Use the team filter to view a specific team's schedule",
      "Live Standings to revert to the official standings",
      "Reset to 0-0 to clear all scores",
      "Save Image to download the schedule as an image",
    ],

    // Download modal
    downloadSchedule: "Download Schedule",
    chooseType: "Choose download type",
    downloadAllDays: "Download All Days",
    allDaysDesc: "1 image · all days combined",
    matches: "matches",
    processing: "Processing...",
    loadingLogos: "Loading logos...",
    rendering: "Rendering image...",

    // Week nav
    now: "NOW",
    current: "CURRENT",

    // Match card
    bestOf3: "Best of 3",

    // Confirm dialogs
    confirmReset: "Reset to default schedule & scores?",
    confirmClear: "Clear all scores (set to 0-0)?",

    // Error
    errorImage: "Failed to generate image: ",
    noSchedule: "No schedule found for that day.",

    // Share image labels
    shareRegularSeason: "Regular Season Standings",
    shareChanceMakePlayoffs: "Chance to Make Playoffs",
    sharePlayoffZone: "Playoff Zone (1-6)",
    shareEliminated: "Eliminated (7-9)",
    sharePlayoff: "Playoff 1-6",
    shareUpper: "Upper 1-2",
    shareLower: "Lower 3-6",
    shareElim: "Elim 7-9",
    shareMatchSchedule: "Match Schedule",
    shareRegularSeasonLabel: "regular season",
    sharePts: "Pts",
    shareWL: "W-L",
    shareNet: "Net",
    shareGameWL: "Game W-L",
    shareTeam: "Team",
  },
};

let currentLang = "id";

function t(key) {
  return (LANG_STRINGS[currentLang] || LANG_STRINGS["id"])[key] || key;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Update tutorial list dynamically
  const tutList = document.getElementById("tutorialList");
  if (tutList) {
    tutList.innerHTML = t("tutorialItems").map((item) => `<li>${item}</li>`).join("");
  }

  // Update team filter "All" option
  const tf = document.getElementById("teamFilter");
  if (tf && tf.options[0]) {
    tf.options[0].textContent = t("allTeams");
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";
  try { localStorage.setItem("mpl_lang", currentLang); } catch (e) {}
  updateLangButton();
  applyI18n();
  // Re-render dynamic content that contains translated strings
  renderWeekNav();
  renderSchedule();
}

function loadLang() {
  try {
    const saved = localStorage.getItem("mpl_lang");
    if (saved === "en" || saved === "id") currentLang = saved;
  } catch (e) {}
}

function updateLangButton() {
  const flag = document.getElementById("langFlag");
  const label = document.getElementById("langLabel");
  if (currentLang === "id") {
    if (flag) flag.textContent = "🇮🇩";
    if (label) label.textContent = "ID";
  } else {
    if (flag) flag.textContent = "🇬🇧";
    if (label) label.textContent = "EN";
  }
}

// ══════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════

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
function logo(tm) {
  return LOGOS[tm] || "";
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
  { week: "Week 5", day: "Day 2", A: "DEWA UNITED", B: "RRQ", aScore: 2, bScore: 0 },
  { week: "Week 5", day: "Day 2", A: "ALTER EGO ESPORTS", B: "TEAM LIQUID ID", aScore: 1, bScore: 2 },
  { week: "Week 5", day: "Day 2", A: "EVOS", B: "BIGETRON BY VIT", aScore: 0, bScore: 2 },
  { week: "Week 5", day: "Day 3", A: "ALTER EGO ESPORTS", B: "NAVI", aScore: 2, bScore: 1 },
  { week: "Week 5", day: "Day 3", A: "GEEK FAM", B: "ONIC", aScore: 2, bScore: 1 },
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

const SIM_RESULTS = [[2, 0], [2, 1], [1, 2], [0, 2]];
let simMode = "Now";

function simCopyStats(s) {
  const c = {};
  for (const tk in s) c[tk] = { ...s[tk] };
  return c;
}

function runSimulation(mode) {
  const N = 10000;
  const counters = {};
  TEAMS.forEach((tm) => { counters[tm] = { playoff: 0, upper: 0, lower: 0, elim: 0 }; });
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
    ranked.forEach((tm, idx) => {
      const rank = idx + 1;
      if (rank <= 6) counters[tm.name].playoff++;
      if (rank <= 2) counters[tm.name].upper++;
      if (rank >= 3 && rank <= 6) counters[tm.name].lower++;
      if (rank >= 7) counters[tm.name].elim++;
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
  const arr = TEAMS.map((tm) => ({ name: tm, ...counters[tm] }));
  arr.sort((a, b) => {
    if (b.playoff !== a.playoff) return b.playoff - a.playoff;
    if (b.upper !== a.upper) return b.upper - a.upper;
    return b.lower - a.lower;
  });
  tbody.innerHTML = arr.map((tm, i) => {
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
      <td><div class="team-cell-inner"><img src="${logo(tm.name)}" onerror="this.style.display='none'"><span class="team-name-s">${tm.name}</span></div></td>
      <td>${bar(tm.playoff, barColor(p(tm.playoff)))}</td>
      <td>${bar(tm.upper, "#6fcf3a")}</td>
      <td>${bar(tm.lower, "#60aaee")}</td>
      <td>${bar(tm.elim, "#e06060")}</td>
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
  TEAMS.forEach((tm) => { s[tm] = { name: tm, win: 0, lose: 0, gw: 0, gl: 0 }; });
  for (const m of schedule) {
    if (m.aScore === 0 && m.bScore === 0) continue;
    const a = s[m.A], b = s[m.B];
    if (!a || !b) continue;
    a.gw += m.aScore; a.gl += m.bScore;
    b.gw += m.bScore; b.gl += m.aScore;
    if (m.aScore > m.bScore) { a.win++; b.lose++; }
    else { b.win++; a.lose++; }
  }
  for (const tk in s) { s[tk].mp = s[tk].win; s[tk].ng = s[tk].gw - s[tk].gl; }
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
    const wNum = w.split(" ")[1];
    const weekLabel = currentLang === "id" ? `Minggu ${wNum}` : `Week ${wNum}`;
    const isCurrentWeek = w === CURRENT_WEEK;
    const nowBadge = isCurrentWeek
      ? `<span class="nav-current-badge">${t("now")}</span>`
      : "";
    html += `<div class="week-connector"></div>`;
    html += `<button class="week-dot-btn${w === activeWeek ? " active" : ""} ${isCurrentWeek ? "nav-current" : ""}" onclick="setWeek('${w}')">
      <span class="wlabel">${weekLabel}${nowBadge}</span>
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

  const localizeWeek = (w) => {
    if (currentLang === "id") {
      return w.replace("Week ", "Minggu ");
    }
    return w;
  };

  const localizeDay = (d) => {
    if (currentLang === "id") {
      return d.replace("Day ", "Hari ");
    }
    return d;
  };

  const buildDays = (list) => {
    const dayMap = new Map();
    list.forEach((m) => { if (!dayMap.has(m.day)) dayMap.set(m.day, []); dayMap.get(m.day).push(m); });
    return [...dayMap.keys()].sort((a, b) => (dayOrder[a] || 0) - (dayOrder[b] || 0)).map((day) => {
      let s = `<div class="day-section"><div class="day-header"><div class="day-label">${localizeDay(day)}</div></div>`;
      dayMap.get(day).forEach((m) => { s += matchCard(m); });
      return s + `</div>`;
    }).join("");
  };

  if (activeWeek === "ALL") {
    const weekMap = new Map();
    matches.forEach((m) => { if (!weekMap.has(m.week)) weekMap.set(m.week, []); weekMap.get(m.week).push(m); });
    [...weekMap.keys()].sort((a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1])).forEach((week) => {
      const isCurrentWeek = week === CURRENT_WEEK;
      const badge = isCurrentWeek ? `<span class="current-badge">${t("now")}</span>` : "";
      html += `<div class="week-group-label ${isCurrentWeek ? "current-week" : ""}">
        ${localizeWeek(week)}${badge}
      </div>`;
      html += buildDays(weekMap.get(week));
    });
  } else {
    const isCurrentWeek = activeWeek === CURRENT_WEEK;
    const badge = isCurrentWeek ? `<span class="current-badge">${t("current")}</span>` : "";
    html += `<div class="week-group-label ${isCurrentWeek ? "current-week" : ""}">
      ${localizeWeek(activeWeek)}${badge}
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
  tbody.innerHTML = arr.map((tm, i) => {
    const rc = i === 0 ? "r1" : i === 1 ? "r2" : i === 2 ? "r3" : "";
    const rowCls = i < 6 ? "top-row" : "bot-row";
    const ngCls = tm.ng >= 0 ? "ng-pos" : "ng-neg";
    const ngStr = tm.ng > 0 ? "+" + tm.ng : tm.ng;
    return `<tr class="${rowCls}">
      <td><span class="rank-cell ${rc}">${i + 1}</span></td>
      <td><div class="team-cell-inner"><img src="${logo(tm.name)}" onerror="this.style.display='none'"><span class="team-name-s">${tm.name}</span></div></td>
      <td class="mp-val">${tm.mp}</td>
      <td>${tm.win} - ${tm.lose}</td>
      <td class="${ngCls}">${ngStr}</td>
      <td>${tm.gw} - ${tm.gl}</td>
    </tr>`;
  }).join("");
}

// ══════════════════════════════════════════════════════════
//  IMAGE EXPORT HELPERS
// ══════════════════════════════════════════════════════════

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
      } catch (e) { resolve(""); }
    };
    img.onerror = () => resolve("");
    img.src = src + (src.includes("?") ? "&" : "?") + "_cb=" + Date.now();
  });
}

async function preloadLogos(teamList) {
  const entries = await Promise.all(
    teamList.map(async (tm) => [tm, await imgToBase64(logo(tm))])
  );
  return Object.fromEntries(entries);
}

function getShareData() {
  const stats = computeStats();
  const arr = sorted(stats);
  const { counters, N } = runSimulation("current");
  const chanceArr = TEAMS.map((tm) => ({ name: tm, ...counters[tm] }));
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
  const locale = currentLang === "id" ? "id-ID" : "en-GB";
  const dateStr = now.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

  const weekLabel = currentLang === "id"
    ? CURRENT_WEEK.replace("Week ", "Minggu ")
    : CURRENT_WEEK;

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
    const rows = standings.map((tm, i) => {
      const isTop = i < 6;
      const ng = tm.ng > 0 ? "+" + tm.ng : String(tm.ng);
      const ngCol = tm.ng >= 0 ? "#ffa600" : "#e06060";
      const rowBg = isTop ? "rgba(74,222,128,0.06)" : "rgba(192,57,43,0.08)";
      const borderLeft = isTop ? "3px solid rgba(74,222,128,0.3)" : "3px solid rgba(192,57,43,0.3)";
      return `<tr style="background:${rowBg}">
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:4px;font-weight:800;font-size:11px;background:${rankBg(i)};color:${rankColor(i)}">${i + 1}</span>
        </td>
        <td style="padding:9px 8px;text-align:left;border-bottom:1px solid #2e2e2e;border-left:${borderLeft}">
          <div style="display:flex;align-items:center;gap:8px">
            ${logoImg(tm.name, 26)}
            <span style="font-weight:700;font-size:12px;color:#f5f0e8">${tm.name}</span>
          </div>
        </td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;font-weight:800;font-size:15px;color:#ffa600">${tm.mp}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;color:#c8b99a;font-size:12px">${tm.win}-${tm.lose}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;font-weight:700;font-size:12px;color:${ngCol}">${ng}</td>
        <td style="padding:9px 8px;text-align:center;border-bottom:1px solid #2e2e2e;color:#8a7a66;font-size:11px">${tm.gw}-${tm.gl}</td>
      </tr>`;
    }).join("");

    return `
      <div style="width:1200px;height:630px;background:#0d0d0d;display:flex;flex-direction:column;font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;position:relative;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffa600,#ff7b00)"></div>
        <div style="padding:28px 40px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2e2e2e">
          <div>
            <div style="font-size:22px;font-weight:800;color:#f5f0e8;letter-spacing:3px;text-transform:uppercase">MPL Season 17</div>
            <div style="font-size:11px;color:#8a7a66;letter-spacing:2px;margin-top:2px;text-transform:uppercase">${t("shareRegularSeason")}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:#ffa600;font-weight:700;letter-spacing:1px">${weekLabel} · ${dateStr}</div>
            <div style="display:flex;gap:12px;margin-top:8px;justify-content:flex-end">
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#8a7a66"><span style="width:8px;height:8px;border-radius:1px;background:rgba(74,222,128,0.3);display:inline-block"></span>${t("sharePlayoffZone")}</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#8a7a66"><span style="width:8px;height:8px;border-radius:1px;background:rgba(192,57,43,0.3);display:inline-block"></span>${t("shareEliminated")}</div>
            </div>
          </div>
        </div>
        <div style="flex:1;padding:32px 40px 0">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="border-bottom:2px solid #ffa600">
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700;width:44px">#</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">${t("shareTeam")}</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">${t("sharePts")}</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">${t("shareWL")}</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">${t("shareNet")}</th>
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">${t("shareGameWL")}</th>
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
    const rows = chances.map((tm, i) => {
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
            ${logoImg(tm.name, 24)}
            <span style="font-weight:700;font-size:11px;color:#f5f0e8">${tm.name}</span>
          </div>
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(tm.playoff, pNum(tm.playoff) >= 70 ? "#6fcf3a" : pNum(tm.playoff) >= 40 ? "#ffff47" : pNum(tm.playoff) >= 20 ? "#ff6a00" : "#e06060")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(tm.upper, "#6fcf3a")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(tm.lower, "#60aaee")}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #2e2e2e">${miniBar(tm.elim, "#e06060")}</td>
      </tr>`;
    }).join("");

    return `
      <div style="width:1200px;height:630px;background:#0d0d0d;display:flex;flex-direction:column;font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;position:relative;">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffa600,#ff7b00)"></div>
        <div style="padding:28px 40px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2e2e2e">
          <div>
            <div style="font-size:22px;font-weight:800;color:#f5f0e8;letter-spacing:3px;text-transform:uppercase">MPL Season 17</div>
            <div style="font-size:11px;color:#8a7a66;letter-spacing:2px;margin-top:2px;text-transform:uppercase">${t("shareChanceMakePlayoffs")}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:#ffa600;font-weight:700;letter-spacing:1px">${weekLabel} · ${dateStr}</div>
            <div style="display:flex;gap:12px;margin-top:8px;justify-content:flex-end">
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#6fcf3a"><span style="width:10px;height:3px;border-radius:1px;background:#6fcf3a;display:inline-block"></span>${t("sharePlayoff")}</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#6fcf3a"><span style="width:10px;height:3px;border-radius:1px;background:#6fcf3a;display:inline-block"></span>${t("shareUpper")}</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#60aaee"><span style="width:10px;height:3px;border-radius:1px;background:#60aaee;display:inline-block"></span>${t("shareLower")}</div>
              <div style="display:flex;align-items:center;gap:5px;font-size:10px;color:#e06060"><span style="width:10px;height:3px;border-radius:1px;background:#e06060;display:inline-block"></span>${t("shareElim")}</div>
            </div>
          </div>
        </div>
        <div style="flex:1;padding:32px 40px 0">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="border-bottom:2px solid #ffa600">
                <th style="padding:10px 8px;text-align:center;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700;width:40px">#</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#8a7a66;font-weight:700">${t("shareTeam")}</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#ffa600;font-weight:700">${t("playoff16")}</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#6fcf3a;font-weight:700">${t("upper12")}</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#60aaee;font-weight:700">${t("lower36")}</th>
                <th style="padding:10px 8px;text-align:left;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#e06060;font-weight:700">${t("elim79")}</th>
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
  btn.innerHTML = `<span class="dl-spinner"></span> ${t("loadingLogos")}`;
  btn.disabled = true;

  try {
    const html2canvas = window.html2canvas;
    if (!html2canvas) throw new Error("html2canvas not loaded");

    const logoB64 = await preloadLogos(TEAMS);
    btn.innerHTML = `<span class="dl-spinner"></span> ${t("rendering")}`;

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
    alert(t("errorImage") + err.message);
  } finally {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }
}

// ══════════════════════════════════════════════════════════
//  SCHEDULE IMAGE DOWNLOAD
// ══════════════════════════════════════════════════════════

function getSchedWeekForExport() {
  return activeWeek === "ALL" ? CURRENT_WEEK : activeWeek;
}

function getAvailableDaysForWeek(week) {
  const dayOrder = { "Day 1": 1, "Day 2": 2, "Day 3": 3 };
  const days = [...new Set(
    schedule
      .filter(m => m.week === week)
      .map(m => m.day)
  )].sort((a, b) => (dayOrder[a] || 0) - (dayOrder[b] || 0));
  return days;
}

function showSchedDownloadModal() {
  const week = getSchedWeekForExport();
  const days = getAvailableDaysForWeek(week);

  const modal = document.getElementById("schedDlModal");
  const weekLabel = document.getElementById("schedDlWeekLabel");
  const dayBtns = document.getElementById("schedDlDayBtns");

  const localWeek = currentLang === "id" ? week.replace("Week ", "Minggu ") : week;
  weekLabel.textContent = localWeek;

  let html = `<button class="sched-dl-opt-btn" id="schedDlAllDays" onclick="triggerSchedDownload('all')">
    <span class="sched-dl-icon">🗓️</span>
    <span>${t("downloadAllDays")}</span>
    <span class="sched-dl-sub">${t("allDaysDesc")}</span>
  </button>`;

  days.forEach((day) => {
    const daySlug = day.toLowerCase().replace(" ", "");
    const localDay = currentLang === "id" ? day.replace("Day ", "Hari ") : day;
    const matchCount = schedule.filter(m => m.week === week && m.day === day).length;
    html += `<button class="sched-dl-opt-btn" onclick="triggerSchedDownload('${daySlug}')">
      <span class="sched-dl-icon">📅</span>
      <span>${localDay}</span>
      <span class="sched-dl-sub">${matchCount} ${t("matches")}</span>
    </button>`;
  });

  dayBtns.innerHTML = html;
  modal.classList.add("visible");
}

function hideSchedDownloadModal() {
  const modal = document.getElementById("schedDlModal");
  modal.classList.remove("visible");
}

async function triggerSchedDownload(mode) {
  hideSchedDownloadModal();

  const week = getSchedWeekForExport();
  const weekNum = week.split(" ")[1];
  const localWeek = currentLang === "id" ? week.replace("Week ", "Minggu ") : week;
  const isLight = document.documentElement.classList.contains("light");
  const bgColor  = isLight ? "#f2ede4" : "#0d0d0d";
  const bg2Color = isLight ? "#e9e2d7" : "#161616";
  const bg3Color = isLight ? "#e1d9cc" : "#1e1e1e";
  const bg4Color = isLight ? "#d8cfbf" : "#252525";
  const textColor  = isLight ? "#0a0806" : "#f5f0e8";
  const text2Color = isLight ? "#374738" : "#c8b99a";
  const text3Color = isLight ? "#756850" : "#8a7a66";
  const borderColor = isLight ? "#c8bfaf" : "#2e2e2e";
  const border2Color = isLight ? "#b8ad9c" : "#3a3a3a";
  const accentColor = "#ffa600";

  const dayOrder = { "day1": "Day 1", "day2": "Day 2", "day3": "Day 3" };
  let daysToRender = [];
  if (mode === "all") {
    daysToRender = getAvailableDaysForWeek(week);
  } else {
    const dayName = dayOrder[mode];
    if (dayName) daysToRender = [dayName];
  }

  if (daysToRender.length === 0) {
    alert(t("noSchedule"));
    return;
  }

  showSchedDlLoading(true, t("loadingLogos"));

  try {
    const html2canvas = window.html2canvas;
    if (!html2canvas) throw new Error("html2canvas not loaded");

    const logoB64 = await preloadLogos(TEAMS);
    showSchedDlLoading(true, t("rendering"));

    const now = new Date();
    const locale = currentLang === "id" ? "id-ID" : "en-GB";
    const dateStr = now.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

    const logoImg = (teamName, size = 26) => {
      const src = logoB64[teamName];
      if (src) {
        return `<img src="${src}" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:50%;background:${bg4Color};padding:2px;flex-shrink:0;vertical-align:middle">`;
      }
      const initials = teamName.split(" ").map(w => w[0]).slice(0, 2).join("");
      return `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;border-radius:50%;background:${bg4Color};font-size:${Math.round(size * 0.38)}px;font-weight:800;color:${accentColor};flex-shrink:0">${initials}</span>`;
    };

    const scoreLabel = (aScore, bScore) => {
      if (aScore === 0 && bScore === 0) return "— TBD —";
      return `${aScore} - ${bScore}`;
    };

    const scoreColor = (aScore, bScore) => {
      if (aScore === 0 && bScore === 0) return text3Color;
      return accentColor;
    };

    const buildDaySection = (day) => {
      const matches = schedule.filter(m => m.week === week && m.day === day);
      const localDay = currentLang === "id" ? day.replace("Day ", "Hari ") : day;
      const matchRows = matches.map(m => {
        const sc = scoreLabel(m.aScore, m.bScore);
        const scCol = scoreColor(m.aScore, m.bScore);
        const hasResult = !(m.aScore === 0 && m.bScore === 0);
        const aWin = hasResult && m.aScore > m.bScore;
        const bWin = hasResult && m.bScore > m.aScore;

        return `<div style="display:flex;align-items:center;background:${bg3Color};border:1px solid ${borderColor};border-radius:6px;padding:12px 16px;margin-bottom:10px;gap:12px;">
          <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;opacity:${bWin ? '0.55' : '1'}">
            ${logoImg(m.A, 28)}
            <span style="font-weight:800;font-size:13px;color:${textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.A}</span>
            ${aWin ? `<span style="margin-left:auto;font-size:9px;font-weight:800;padding:2px 7px;border-radius:3px;background:rgba(111,207,58,0.15);color:#6fcf3a;border:1px solid rgba(111,207,58,0.3);white-space:nowrap">WIN</span>` : ''}
          </div>
          <div style="flex-shrink:0;text-align:center;min-width:80px;">
            <div style="font-size:15px;font-weight:900;color:${scCol};font-family:monospace;letter-spacing:1px">${sc}</div>
            <div style="font-size:9px;color:${text3Color};letter-spacing:1.5px;text-transform:uppercase;margin-top:2px">${t("bestOf3")}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;justify-content:flex-end;opacity:${aWin ? '0.55' : '1'}">
            ${bWin ? `<span style="margin-right:auto;font-size:9px;font-weight:800;padding:2px 7px;border-radius:3px;background:rgba(111,207,58,0.15);color:#6fcf3a;border:1px solid rgba(111,207,58,0.3);white-space:nowrap">WIN</span>` : ''}
            <span style="font-weight:800;font-size:13px;color:${textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:right">${m.B}</span>
            ${logoImg(m.B, 28)}
          </div>
        </div>`;
      }).join("");

      return `<div style="margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:3px;height:20px;background:${accentColor};border-radius:2px;flex-shrink:0"></div>
          <span style="font-size:11px;font-weight:800;color:${text2Color};letter-spacing:2.5px;text-transform:uppercase">${localDay}</span>
          <div style="flex:1;height:1px;background:${borderColor}"></div>
          <span style="font-size:10px;color:${text3Color};letter-spacing:1px">${matches.length} ${t("matches")}</span>
        </div>
        ${matchRows}
      </div>`;
    };

    const allDaySections = daysToRender.map(buildDaySection).join("");
    const CARD_W = 680;
    const matchCountTotal = daysToRender.reduce((sum, day) => {
      return sum + schedule.filter(m => m.week === week && m.day === day).length;
    }, 0);

    const headerH  = 90;
    const perMatch = 68;
    const dayHeaderH = 44;
    const footerH  = 42;
    const padV     = 32;
    const totalH   = headerH + padV + (daysToRender.length * dayHeaderH) + (matchCountTotal * perMatch) + footerH;

    const schedTitle = currentLang === "id"
      ? `${t("shareMatchSchedule")}${mode !== 'all' ? ` · ${daysToRender[0].replace("Day ", "Hari ")}` : ''}`
      : `${t("shareMatchSchedule")}${mode !== 'all' ? ` · ${daysToRender[0]}` : ''}`;

    const htmlContent = `
      <div style="width:${CARD_W}px;background:${bgColor};font-family:'Segoe UI',system-ui,sans-serif;overflow:hidden;position:relative;border-radius:0;">
        <div style="height:3px;background:linear-gradient(90deg,#ffa600,#ff7b00,#ffa600);width:100%"></div>
        <div style="padding:22px 28px 18px;border-bottom:1px solid ${borderColor};display:flex;align-items:center;justify-content:space-between;background:${bg2Color};">
          <div>
            <div style="font-size:18px;font-weight:800;color:${textColor};letter-spacing:3px;text-transform:uppercase">MPL ID Season 17</div>
            <div style="font-size:10px;color:${accentColor};letter-spacing:2.5px;margin-top:4px;text-transform:uppercase;font-weight:700">
              ${localWeek} · ${schedTitle}
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:10px;color:${text3Color};letter-spacing:1px">${dateStr}</div>
            <div style="margin-top:6px;display:inline-block;padding:3px 10px;border-radius:3px;border:1px solid ${accentColor}44;background:${accentColor}18;font-size:9px;font-weight:800;color:${accentColor};letter-spacing:1.5px;text-transform:uppercase">${t("shareRegularSeasonLabel")}</div>
          </div>
        </div>
        <div style="padding:20px 28px 12px;">
          ${allDaySections}
        </div>
        <div style="padding:10px 28px;border-top:1px solid ${borderColor};display:flex;align-items:center;justify-content:space-between;background:${bg2Color};">
          <div style="font-size:9px;color:${text3Color};letter-spacing:1.5px;text-transform:uppercase">mpl id s17 · ${t("shareRegularSeasonLabel")}</div>
          <div style="font-size:9px;color:${border2Color};letter-spacing:1px">${localWeek}</div>
        </div>
      </div>`;

    const container = document.getElementById("shareExportContainer");
    container.innerHTML = htmlContent;
    container.style.display = "block";

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise(r => setTimeout(r, 120));

    const el = container.firstElementChild;
    const elH = el.scrollHeight || totalH;

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: bgColor,
      width: CARD_W,
      height: elH,
      windowWidth: CARD_W,
      windowHeight: elH,
      logging: false,
      imageTimeout: 0,
    });

    container.style.display = "none";
    container.innerHTML = "";

    let fileName;
    if (mode === "all") {
      fileName = `mpl-week-${weekNum}-schedule.png`;
    } else {
      const dayNum = mode.replace("day", "");
      fileName = `mpl-week-${weekNum}-day-${dayNum}.png`;
    }

    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();

  } catch (err) {
    console.error("Schedule download error:", err);
    alert(t("errorImage") + err.message);
  } finally {
    showSchedDlLoading(false);
  }
}

function showSchedDlLoading(show, text = "") {
  const overlay = document.getElementById("schedDlLoadingOverlay");
  const loadText = document.getElementById("schedDlLoadText");
  if (!overlay) return;
  if (show) {
    loadText.textContent = text || t("processing");
    overlay.classList.add("visible");
  } else {
    overlay.classList.remove("visible");
  }
}

function switchTab(tab) {
  document.getElementById("tabSched").classList.toggle("active", tab === "schedule");
  document.getElementById("tabStand").classList.toggle("active", tab === "standings");
  if (window.innerWidth <= 700) {
    document.getElementById("schedulePanel").classList.toggle("hidden", tab !== "schedule");
    document.getElementById("standingsPanel").classList.toggle("hidden", tab !== "standings");
  }
}

let isLight = false;

function applyTheme(light) {
  isLight = light;
  const root = document.documentElement;
  if (light) {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }
  try { localStorage.setItem("mpl_theme", light ? "light" : "dark"); } catch(e) {}
}

function loadTheme() {
  try {
    const saved = localStorage.getItem("mpl_theme");
    if (saved === "light") applyTheme(true);
  } catch(e) {}
}

// ══════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════

function init() {
  loadLang();
  updateLangButton();

  const tf = document.getElementById("teamFilter");
  TEAMS.forEach((tm) => {
    const opt = document.createElement("option");
    opt.value = tm; opt.textContent = tm;
    tf.appendChild(opt);
  });
  tf.addEventListener("change", () => { activeTeam = tf.value; renderSchedule(); });

  loadSchedule();
  loadTheme();
  applyI18n();
  renderWeekNav();
  renderSchedule();
  renderStandings();
  renderChance();

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm(t("confirmReset"))) {
      schedule = JSON.parse(JSON.stringify(DEFAULT));
      saveSchedule();
      renderSchedule();
      renderStandings();
      renderChance();
    }
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    if (confirm(t("confirmClear"))) {
      schedule.forEach((m) => { m.aScore = 0; m.bScore = 0; });
      saveSchedule();
      renderSchedule();
      renderStandings();
      renderChance();
    }
  });

  document.getElementById("dlStandBtn")?.addEventListener("click", () => downloadShareImage("standings"));
  document.getElementById("dlChanceBtn")?.addEventListener("click", () => downloadShareImage("chances"));
  document.getElementById("dlSchedBtn")?.addEventListener("click", () => showSchedDownloadModal());

  document.getElementById("schedDlModal")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("schedDlModal")) hideSchedDownloadModal();
  });
}

if (window.innerWidth <= 700) switchTab("schedule");
init();

function showTutorial() {
  // Ensure tutorial list is rendered in current language
  const tutList = document.getElementById("tutorialList");
  if (tutList) {
    tutList.innerHTML = t("tutorialItems").map((item) => `<li>${item}</li>`).join("");
  }
  document.getElementById("tutorialModal").style.display = "flex";
}

function closeTutorial() {
  document.getElementById("tutorialModal").style.display = "none";
}
