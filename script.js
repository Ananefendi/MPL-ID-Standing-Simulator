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
  {
    week: "Week 1",
    day: "Day 1",
    A: "BIGETRON BY VIT",
    B: "ALTER EGO ESPORTS",
    aScore: 2,
    bScore: 1,
  },
  { week: "Week 1", day: "Day 1", A: "NAVI", B: "RRQ", aScore: 2, bScore: 0 },
  {
    week: "Week 1",
    day: "Day 2",
    A: "EVOS",
    B: "GEEK FAM",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 1",
    day: "Day 2",
    A: "ALTER EGO ESPORTS",
    B: "ONIC",
    aScore: 0,
    bScore: 2,
  },
  {
    week: "Week 1",
    day: "Day 2",
    A: "TEAM LIQUID ID",
    B: "NAVI",
    aScore: 2,
    bScore: 1,
  },
  {
    week: "Week 1",
    day: "Day 3",
    A: "DEWA UNITED",
    B: "BIGETRON BY VIT",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 1",
    day: "Day 3",
    A: "EVOS",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 2,
  },
  { week: "Week 1", day: "Day 3", A: "RRQ", B: "ONIC", aScore: 0, bScore: 2 },

  {
    week: "Week 2",
    day: "Day 1",
    A: "ONIC",
    B: "GEEK FAM",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 2",
    day: "Day 1",
    A: "DEWA UNITED",
    B: "NAVI",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 2",
    day: "Day 2",
    A: "GEEK FAM",
    B: "BIGETRON BY VIT",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 2",
    day: "Day 2",
    A: "ALTER EGO ESPORTS",
    B: "EVOS",
    aScore: 2,
    bScore: 1,
  },
  {
    week: "Week 2",
    day: "Day 3",
    A: "TEAM LIQUID ID",
    B: "DEWA UNITED",
    aScore: 2,
    bScore: 1,
  },
  {
    week: "Week 2",
    day: "Day 3",
    A: "NAVI",
    B: "ALTER EGO ESPORTS",
    aScore: 1,
    bScore: 2,
  },
  {
    week: "Week 2",
    day: "Day 3",
    A: "RRQ",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 2,
  },
  {
    week: "Week 2",
    day: "Day 3",
    A: "BIGETRON BY VIT",
    B: "EVOS",
    aScore: 2,
    bScore: 1,
  },

  {
    week: "Week 3",
    day: "Day 1",
    A: "ONIC",
    B: "DEWA UNITED",
    aScore: 2,
    bScore: 1,
  },
  { week: "Week 3", day: "Day 1", A: "NAVI", B: "EVOS", aScore: 0, bScore: 2 },
  {
    week: "Week 3",
    day: "Day 2",
    A: "TEAM LIQUID ID",
    B: "GEEK FAM",
    aScore: 0,
    bScore: 2,
  },
  {
    week: "Week 3",
    day: "Day 2",
    A: "ONIC",
    B: "BIGETRON BY VIT",
    aScore: 1,
    bScore: 2,
  },
  {
    week: "Week 3",
    day: "Day 3",
    A: "RRQ",
    B: "ALTER EGO ESPORTS",
    aScore: 1,
    bScore: 2,
  },
  {
    week: "Week 3",
    day: "Day 3",
    A: "BIGETRON BY VIT",
    B: "NAVI",
    aScore: 1,
    bScore: 2,
  },
  {
    week: "Week 3",
    day: "Day 3",
    A: "GEEK FAM",
    B: "RRQ",
    aScore: 2,
    bScore: 1,
  },
  {
    week: "Week 3",
    day: "Day 3",
    A: "ALTER EGO ESPORTS",
    B: "DEWA UNITED",
    aScore: 0,
    bScore: 2,
  },

  { week: "Week 4", day: "Day 1", A: "NAVI", B: "ONIC", aScore: 0, bScore: 2 },
  {
    week: "Week 4",
    day: "Day 1",
    A: "EVOS",
    B: "DEWA UNITED",
    aScore: 2,
    bScore: 0,
  },
  {
    week: "Week 4",
    day: "Day 2",
    A: "TEAM LIQUID ID",
    B: "BIGETRON BY VIT",
    aScore: 1,
    bScore: 2,
  },
  { week: "Week 4", day: "Day 2", A: "RRQ", B: "EVOS", aScore: 0, bScore: 2 },
  {
    week: "Week 4",
    day: "Day 2",
    A: "GEEK FAM",
    B: "ALTER EGO ESPORTS",
    aScore: 1,
    bScore: 2,
  },
  {
    week: "Week 4",
    day: "Day 3",
    A: "ONIC",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 4",
    day: "Day 3",
    A: "BIGETRON BY VIT",
    B: "RRQ",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 4",
    day: "Day 3",
    A: "DEWA UNITED",
    B: "GEEK FAM",
    aScore: 0,
    bScore: 0,
  },

  {
    week: "Week 5",
    day: "Day 1",
    A: "GEEK FAM",
    B: "NAVI",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 5", day: "Day 1", A: "EVOS", B: "ONIC", aScore: 0, bScore: 0 },
  {
    week: "Week 5",
    day: "Day 2",
    A: "DEWA UNITED",
    B: "RRQ",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 5",
    day: "Day 2",
    A: "ALTER EGO ESPORTS",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 5",
    day: "Day 2",
    A: "EVOS",
    B: "BIGETRON BY VIT",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 5",
    day: "Day 3",
    A: "ALTER EGO ESPORTS",
    B: "NAVI",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 5",
    day: "Day 3",
    A: "GEEK FAM",
    B: "ONIC",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 5",
    day: "Day 3",
    A: "DEWA UNITED",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },

  {
    week: "Week 6",
    day: "Day 1",
    A: "NAVI",
    B: "DEWA UNITED",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 6",
    day: "Day 1",
    A: "ALTER EGO ESPORTS",
    B: "GEEK FAM",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 6",
    day: "Day 2",
    A: "EVOS",
    B: "ALTER EGO ESPORTS",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 6",
    day: "Day 2",
    A: "TEAM LIQUID ID",
    B: "ONIC",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 6",
    day: "Day 2",
    A: "RRQ",
    B: "BIGETRON BY VIT",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 6",
    day: "Day 3",
    A: "NAVI",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 6", day: "Day 3", A: "RRQ", B: "ONIC", aScore: 0, bScore: 0 },
  {
    week: "Week 6",
    day: "Day 3",
    A: "GEEK FAM",
    B: "EVOS",
    aScore: 0,
    bScore: 0,
  },

  {
    week: "Week 7",
    day: "Day 1",
    A: "GEEK FAM",
    B: "DEWA UNITED",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 7",
    day: "Day 1",
    A: "BIGETRON BY VIT",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 7",
    day: "Day 2",
    A: "DEWA UNITED",
    B: "ALTER EGO ESPORTS",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 7", day: "Day 2", A: "EVOS", B: "RRQ", aScore: 0, bScore: 0 },
  { week: "Week 7", day: "Day 2", A: "ONIC", B: "NAVI", aScore: 0, bScore: 0 },
  {
    week: "Week 7",
    day: "Day 3",
    A: "RRQ",
    B: "GEEK FAM",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 7",
    day: "Day 3",
    A: "NAVI",
    B: "BIGETRON BY VIT",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 7",
    day: "Day 3",
    A: "TEAM LIQUID ID",
    B: "EVOS",
    aScore: 0,
    bScore: 0,
  },

  {
    week: "Week 8",
    day: "Day 1",
    A: "BIGETRON BY VIT",
    B: "GEEK FAM",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 8",
    day: "Day 1",
    A: "DEWA UNITED",
    B: "ONIC",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 8", day: "Day 2", A: "EVOS", B: "NAVI", aScore: 0, bScore: 0 },
  {
    week: "Week 8",
    day: "Day 2",
    A: "TEAM LIQUID ID",
    B: "RRQ",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 8",
    day: "Day 2",
    A: "ONIC",
    B: "ALTER EGO ESPORTS",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 8",
    day: "Day 3",
    A: "DEWA UNITED",
    B: "EVOS",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 8",
    day: "Day 3",
    A: "ALTER EGO ESPORTS",
    B: "BIGETRON BY VIT",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 8", day: "Day 3", A: "RRQ", B: "NAVI", aScore: 0, bScore: 0 },

  {
    week: "Week 9",
    day: "Day 1",
    A: "BIGETRON BY VIT",
    B: "DEWA UNITED",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 9",
    day: "Day 1",
    A: "TEAM LIQUID ID",
    B: "ALTER EGO ESPORTS",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 9",
    day: "Day 2",
    A: "GEEK FAM",
    B: "TEAM LIQUID ID",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 9",
    day: "Day 2",
    A: "ALTER EGO ESPORTS",
    B: "RRQ",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 9",
    day: "Day 2",
    A: "BIGETRON BY VIT",
    B: "ONIC",
    aScore: 0,
    bScore: 0,
  },
  {
    week: "Week 9",
    day: "Day 3",
    A: "RRQ",
    B: "DEWA UNITED",
    aScore: 0,
    bScore: 0,
  },
  { week: "Week 9", day: "Day 3", A: "ONIC", B: "EVOS", aScore: 0, bScore: 0 },
  { week: "Week 9", day: "Day 3", A: "NAVI", B: "GEEK", aScore: 0, bScore: 0 },
];

let schedule = [];
let activeWeek = "ALL";
let mobileTab = "schedule";
let activeTeam = "ALL";

const CURRENT_WEEK = "Week 4"; // <-- taruh di sini

function loadSchedule() {
  try {
    const s = localStorage.getItem("mpl_sched_v2");
    if (s) {
      schedule = JSON.parse(s);
      return;
    }
  } catch (e) {}
  schedule = JSON.parse(JSON.stringify(DEFAULT));
}
function saveSchedule() {
  try {
    localStorage.setItem("mpl_sched_v2", JSON.stringify(schedule));
  } catch (e) {}
}

function computeStats() {
  const s = {};
  TEAMS.forEach((t) => {
    s[t] = { name: t, win: 0, lose: 0, gw: 0, gl: 0 };
  });
  for (const m of schedule) {
    if (m.aScore === 0 && m.bScore === 0) continue;
    const a = s[m.A],
      b = s[m.B];
    if (!a || !b) continue;
    a.gw += m.aScore;
    a.gl += m.bScore;
    b.gw += m.bScore;
    b.gl += m.aScore;
    if (m.aScore > m.bScore) {
      a.win++;
      b.lose++;
    } else {
      b.win++;
      a.lose++;
    }
  }
  for (const t in s) {
    s[t].mp = s[t].win;
    s[t].ng = s[t].gw - s[t].gl;
  }
  return s;
}
function h2h(a, b) {
  let aw = 0,
    bw = 0;
  for (const m of schedule) {
    if ((m.A === a && m.B === b) || (m.A === b && m.B === a)) {
      const isA = m.A === a;
      const sa = isA ? m.aScore : m.bScore,
        sb = isA ? m.bScore : m.aScore;
      if (sa > sb) aw++;
      else if (sb > sa) bw++;
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
    const weeks = [...new Set(DEFAULT.map(m => m.week))]
        .sort((a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1]));

    const nav = document.getElementById("weekNav");

    let html = `
        <button class="week-dot-btn${activeWeek === "ALL" ? " active" : ""}" 
            onclick="setWeek('ALL')">
            <span class="wlabel">ALL</span>
            <span class="wdot"></span>
        </button>
    `;

    weeks.forEach((w, i) => {
        html += `<div class="week-connector"></div>`;
        html += `
    <button class="week-dot-btn${w === activeWeek ? " active" : ""} ${w === CURRENT_WEEK ? "nav-current" : ""}" 
        onclick="setWeek('${w}')">
        <span class="wlabel">
            ${w}
            ${w === CURRENT_WEEK ? '<span class="nav-current-badge">NOW</span>' : ''}
        </span>
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
        .filter(m =>
            (activeWeek === "ALL" || m.week === activeWeek) &&
            (activeTeam === "ALL" || m.A === activeTeam || m.B === activeTeam)
        );

    const dayOrder = { "Day 1": 1, "Day 2": 2, "Day 3": 3 };

    let html = "";

    // =========================
    // MODE ALL (GROUP PER WEEK)
    // =========================
    if (activeWeek === "ALL") {

        const weekMap = new Map();

        matches.forEach(m => {
            if (!weekMap.has(m.week)) weekMap.set(m.week, []);
            weekMap.get(m.week).push(m);
        });

        const weeks = [...weekMap.keys()]
            .sort((a, b) => parseInt(a.split(" ")[1]) - parseInt(b.split(" ")[1]));

        weeks.forEach(week => {

            html += `
<div class="week-group-label ${week === CURRENT_WEEK ? 'current-week' : ''}">
    ${week}
    ${week === CURRENT_WEEK ? '<span class="current-badge">CURRENT</span>' : ''}
</div>`;

            const dayMap = new Map();

            weekMap.get(week).forEach(m => {
                if (!dayMap.has(m.day)) dayMap.set(m.day, []);
                dayMap.get(m.day).push(m);
            });

            const days = [...dayMap.keys()]
                .sort((a, b) => (dayOrder[a] || 0) - (dayOrder[b] || 0));

            days.forEach(day => {

                html += `
                <div class="day-section">
                    <div class="day-header">
                        <div class="day-label">${day}</div>
                    </div>
                `;

                dayMap.get(day).forEach(m => {

                    const cur = `${m.aScore}-${m.bScore}`;
                    const opts = [
                        ["0-0", "0 - 0"],
                        ["2-0", "2 - 0"],
                        ["2-1", "2 - 1"],
                        ["1-2", "1 - 2"],
                        ["0-2", "0 - 2"]
                    ];

                    const selOpts = opts.map(([v, l]) =>
                        `<option value="${v}"${cur === v ? " selected" : ""}>${l}</option>`
                    ).join("");

                    html += `
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team-chip">
                                <img src="${logo(m.A)}" onerror="this.style.display='none'">
                                <span>${m.A}</span>
                            </div>
                            <span class="vs-badge">VS</span>
                            <div class="team-chip">
                                <img src="${logo(m.B)}" onerror="this.style.display='none'">
                                <span>${m.B}</span>
                            </div>
                        </div>
                        <div class="score-wrap">
                            <select class="score-sel" data-idx="${m.i}">
                                ${selOpts}
                            </select>
                        </div>
                    </div>
                    `;
                });

                html += `</div>`;
            });

        });

    } else {

        // =========================
        // MODE NORMAL (SINGLE WEEK)
        // =========================

        const dayMap = new Map();

        matches.forEach(m => {
            if (!dayMap.has(m.day)) dayMap.set(m.day, []);
            dayMap.get(m.day).push(m);
        });

        const days = [...dayMap.keys()]
            .sort((a, b) => (dayOrder[a] || 0) - (dayOrder[b] || 0));

        html += `
<div class="week-group-label ${activeWeek === CURRENT_WEEK ? 'current-week' : ''}">
    ${activeWeek}
    ${activeWeek === CURRENT_WEEK ? '<span class="current-badge">CURRENT</span>' : ''}
</div>`;

        days.forEach(day => {

            html += `
            <div class="day-section">
                <div class="day-header">
                    <div class="day-label">${day}</div>
                </div>
            `;

            dayMap.get(day).forEach(m => {

                const cur = `${m.aScore}-${m.bScore}`;
                const opts = [
                    ["0-0", "0 - 0"],
                    ["2-0", "2 - 0"],
                    ["2-1", "2 - 1"],
                    ["1-2", "1 - 2"],
                    ["0-2", "0 - 2"]
                ];

                const selOpts = opts.map(([v, l]) =>
                    `<option value="${v}"${cur === v ? " selected" : ""}>${l}</option>`
                ).join("");

                html += `
                <div class="match-card">
                    <div class="match-teams">
                        <div class="team-chip">
                            <img src="${logo(m.A)}" onerror="this.style.display='none'">
                            <span>${m.A}</span>
                        </div>
                        <span class="vs-badge">VS</span>
                        <div class="team-chip">
                            <img src="${logo(m.B)}" onerror="this.style.display='none'">
                            <span>${m.B}</span>
                        </div>
                    </div>
                    <div class="score-wrap">
                        <select class="score-sel" data-idx="${m.i}">
                            ${selOpts}
                        </select>
                    </div>
                </div>
                `;
            });

            html += `</div>`;
        });
    }

    document.getElementById("schedContent").innerHTML = html;

    document.querySelectorAll(".score-sel").forEach(sel => {
        sel.addEventListener("change", () => {
            const idx = parseInt(sel.dataset.idx);
            const [a, b] = sel.value.split("-").map(Number);
            schedule[idx].aScore = a;
            schedule[idx].bScore = b;
            saveSchedule();
            renderStandings();
        });
    });
}

function renderStandings() {
  const stats = computeStats();
  const arr = sorted(stats);
  const tbody = document.getElementById("standBody");
  tbody.innerHTML = arr
    .map((t, i) => {
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
    })
    .join("");
}

function switchTab(tab) {
  mobileTab = tab;
  const sp = document.getElementById("schedulePanel");
  const stp = document.getElementById("standingsPanel");

  document
    .getElementById("tabSched")
    .classList.toggle("active", tab === "schedule");
  document
    .getElementById("tabStand")
    .classList.toggle("active", tab === "standings");

  if (window.innerWidth <= 700) {
    sp.classList.toggle("hidden", tab !== "schedule");
    stp.classList.toggle("hidden", tab !== "standings");
  }
}

function init() {
  const tf = document.getElementById("teamFilter");
  TEAMS.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    tf.appendChild(opt);
  });

  tf.addEventListener("change", () => {
    activeTeam = tf.value;
    renderSchedule();
  });
  loadSchedule();
  renderWeekNav();
  renderSchedule();
  renderStandings();
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("Reset ke jadwal & skor default?")) {
      schedule = JSON.parse(JSON.stringify(DEFAULT));
      saveSchedule();
      renderSchedule();
      renderStandings();
    }
  });
  document.getElementById("clearBtn").addEventListener("click", () => {
    if (confirm("Kosongkan semua skor (set ke 0-0)?")) {
      schedule.forEach((m) => {
        m.aScore = 0;
        m.bScore = 0;
      });
      saveSchedule();
      renderSchedule();
      renderStandings();
    }
  });
}
if (window.innerWidth <= 700) {
  switchTab("schedule");
}
init();
