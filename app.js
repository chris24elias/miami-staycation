/* ===========================================================
   Donna's Miami Staycation
   Everything you'd want to tweak lives in CONFIG below 👇
   =========================================================== */

const CONFIG = {
  name: "Donna",
  note: "48 hours of us, the beach, and way too much matcha 💛",
  kicker: "🌴 Miami Beach · May 29–31 🌴",

  // Countdown target — checkout. (year, monthIndex, day, hour, min)
  // monthIndex is 0-based, so 4 = May.
  checkout: new Date(2026, 4, 31, 11, 0, 0),

  categories: [
    {
      title: "Relax & Pamper",
      emoji: "💆‍♀️",
      items: [
        { id: "pool",    label: "Sit by the pool", emoji: "🏝️" },
        { id: "massage", label: "Massage",          emoji: "💆‍♀️" },
        { id: "facial",  label: "Facial",           emoji: "✨" },
        { id: "spa",     label: "Spa day",          emoji: "🧖‍♀️" },
      ],
    },
    {
      title: "Active",
      emoji: "🏖️",
      items: [
        { id: "beach",   label: "Beach day",            emoji: "🏖️" },
        { id: "blading", label: "Rollerblading",        emoji: "🛼" },
        { id: "tennis",  label: "Tennis / Pickleball",  emoji: "🎾" },
      ],
    },
    {
      title: "Treats",
      emoji: "🍵",
      items: [
        { id: "matcha", label: "Matcha", place: "Aura Matcha",        emoji: "🍵" },
        { id: "coffee", label: "Coffee run",                          emoji: "☕" },
        { id: "dinner", label: "Dinner", place: "Cactus Club Cafe",   emoji: "🍽️" },
      ],
    },
    {
      title: "Experiences",
      emoji: "🎭",
      items: [
        { id: "faena", label: "A show", place: "Faena Theater", emoji: "🎭" },
      ],
    },
  ],

  // Shown once every box is ticked
  finale: "That's the whole list, my love 💛 Thank you for the best 48 hours — here's to a million more weekends just like this.",

  // Progress hints (by fraction done)
  hints: [
    { at: 0.0,  text: "Tap a card once you've done it ✨" },
    { at: 0.15, text: "Off to a great start, let's go 🌅" },
    { at: 0.4,  text: "Look at you two go 🌊" },
    { at: 0.7,  text: "So much paradise, so little time 🌴" },
    { at: 0.9,  text: "Almost the whole list — finish strong! 💪" },
  ],
};

/* ----------------------------------------------------------- */

const STORAGE_KEY = "donna-miami-staycation-v1";
const PALETTE = ["#ff6f91", "#ffd66b", "#2ec4b6", "#ffb38a", "#ff8fb1", "#ffffff"];

const allItems = CONFIG.categories.flatMap((c) => c.items);
const total = allItems.length;

let state = loadState();

// --- element refs ---
const $ = (id) => document.getElementById(id);
const topbarFill = $("topbarFill");
const topbarLabel = $("topbarLabel");
const progressFill = $("progressFill");
const progressLabel = $("progressLabel");
const progressHint = $("progressHint");
const activitiesEl = $("activities");
const finaleEl = $("finale");
const reveal = $("reveal");

let revealTimer = null;

// --- persistence ---
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* private mode / storage full — fail quietly */
  }
}
function doneCount() {
  return allItems.filter((it) => state[it.id]).length;
}

// --- build the page ---
function hydrateHero() {
  $("heroKicker").textContent = CONFIG.kicker;
  $("heroTitle").innerHTML = `Hi ${CONFIG.name} <span class="hero__heart">💛</span>`;
  $("heroNote").textContent = CONFIG.note;
  $("finaleText").textContent = CONFIG.finale;
}

function buildActivities() {
  let index = 0;
  CONFIG.categories.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "category";

    const head = document.createElement("div");
    head.className = "category__head";
    head.innerHTML = `<span aria-hidden="true" style="font-size:1.4rem">${cat.emoji}</span>
                      <h2 class="category__title">${cat.title}</h2>`;
    section.appendChild(head);

    const wrap = document.createElement("div");
    wrap.className = "category__items";
    cat.items.forEach((item) => wrap.appendChild(makeCard(item, index++)));
    section.appendChild(wrap);

    activitiesEl.appendChild(section);
  });
}

function makeCard(item, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card" + (state[item.id] ? " card--done" : "");
  card.dataset.id = item.id;
  card.style.animationDelay = `${Math.min(index * 55, 600)}ms`;
  card.setAttribute("aria-pressed", String(!!state[item.id]));
  card.innerHTML = `
    <span class="card__check" aria-hidden="true"></span>
    <span class="card__emoji" aria-hidden="true">${item.emoji}</span>
    <span class="card__body">
      <span class="card__label">${item.label}</span>
      ${item.place ? `<span class="card__place">📍 ${item.place}</span>` : ""}
    </span>`;
  card.addEventListener("click", () => toggle(item, card));
  return card;
}

// --- interaction ---
function toggle(item, card) {
  const nowDone = !state[item.id];
  if (nowDone) state[item.id] = true;
  else delete state[item.id];
  saveState();

  card.classList.toggle("card--done", nowDone);
  card.setAttribute("aria-pressed", String(nowDone));
  updateProgress();

  if (nowDone) {
    popHearts(card);
    burstAt(card);
    if (doneCount() === total) showFinale();
  } else {
    hideFinale();
  }
}

function updateProgress() {
  const done = doneCount();
  const pct = total ? Math.round((done / total) * 100) : 0;

  topbarFill.style.width = pct + "%";
  topbarLabel.textContent = `${done} / ${total}`;
  progressFill.style.width = pct + "%";
  progressLabel.innerHTML =
    done === total && total > 0
      ? "every single one — done 🎉💛"
      : `${done} of ${total} adventures done 💕`;

  if (done < total) progressHint.textContent = hintFor(done / total);
  else progressHint.textContent = "you did the whole thing 🥹";
}

function hintFor(frac) {
  let text = CONFIG.hints[0].text;
  for (const h of CONFIG.hints) if (frac >= h.at) text = h.text;
  return text;
}

// --- "what should we do next?" ---
function whatsNext() {
  const remaining = allItems.filter((it) => !state[it.id]);
  if (remaining.length === 0) {
    showReveal("All done! 🎉", "Time to just relax together 💛");
    burstAt(null);
    return;
  }
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  showReveal(
    `${pick.emoji}  ${pick.label}`,
    pick.place ? `📍 ${pick.place}` : "let's go do this one 💫"
  );

  const card = activitiesEl.querySelector(`[data-id="${pick.id}"]`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("card--pulse");
    void card.offsetWidth; // restart the animation
    card.classList.add("card--pulse");
    setTimeout(() => card.classList.remove("card--pulse"), 1600);
  }
}

function showReveal(title, sub) {
  $("revealTitle").textContent = title;
  $("revealSub").textContent = sub;
  reveal.classList.add("reveal--show");
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => reveal.classList.remove("reveal--show"), 3200);
}

// --- finale ---
function showFinale() {
  finaleEl.classList.add("finale--show");
  finaleEl.setAttribute("aria-hidden", "false");
  finaleEl.scrollIntoView({ behavior: "smooth", block: "center" });
  bigConfetti();
}
function hideFinale() {
  finaleEl.classList.remove("finale--show");
  finaleEl.setAttribute("aria-hidden", "true");
}

// --- celebration effects ---
function hasConfetti() {
  return typeof window.confetti === "function";
}

function burstAt(el) {
  if (!hasConfetti()) return;
  let origin = { x: 0.5, y: 0.5 };
  if (el) {
    const r = el.getBoundingClientRect();
    origin = {
      x: (r.left + r.width / 2) / window.innerWidth,
      y: (r.top + r.height / 2) / window.innerHeight,
    };
  }
  window.confetti({
    particleCount: 45,
    spread: 60,
    startVelocity: 30,
    scalar: 0.9,
    ticks: 120,
    origin,
    colors: PALETTE,
  });
}

function bigConfetti() {
  if (!hasConfetti()) return;
  window.confetti({ particleCount: 140, spread: 100, origin: { y: 0.4 }, colors: PALETTE });
  const end = performance.now() + 1400;
  (function frame(now) {
    window.confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors: PALETTE });
    window.confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors: PALETTE });
    if (now < end) requestAnimationFrame(frame);
  })(performance.now());
}

function popHearts(el) {
  const r = el.getBoundingClientRect();
  const emojis = ["💛", "💕", "✨", "🌴", "🌅"];
  for (let i = 0; i < 4; i++) {
    const h = document.createElement("span");
    h.className = "heart-float";
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = r.left + r.width * (0.25 + Math.random() * 0.5) + "px";
    h.style.top = r.top + r.height * 0.3 + "px";
    h.style.animationDelay = i * 60 + "ms";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1400);
  }
}

// --- countdown ---
function tickCountdown() {
  const diff = CONFIG.checkout.getTime() - Date.now();
  if (diff <= 0) {
    ["cdDays", "cdHours", "cdMins", "cdSecs"].forEach((id) => ($(id).textContent = "0"));
    $("cdCaption").textContent = "hope it was magical 💛";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  $("cdDays").textContent = days;
  $("cdHours").textContent = String(hours).padStart(2, "0");
  $("cdMins").textContent = String(mins).padStart(2, "0");
  $("cdSecs").textContent = String(secs).padStart(2, "0");
}

// --- reset ---
function resetAll() {
  if (!window.confirm("Clear all your check-offs and start the list fresh?")) return;
  state = {};
  saveState();
  document.querySelectorAll(".card").forEach((c) => {
    c.classList.remove("card--done");
    c.setAttribute("aria-pressed", "false");
  });
  hideFinale();
  updateProgress();
}

// --- boot ---
hydrateHero();
buildActivities();
updateProgress();
if (doneCount() === total && total > 0) showFinale();

tickCountdown();
setInterval(tickCountdown, 1000);

$("nextBtn").addEventListener("click", whatsNext);
$("resetBtn").addEventListener("click", resetAll);
