/* ===========================================================
   Donna's Miami Staycation
   Everything you'd want to tweak lives in CONFIG below 👇
   =========================================================== */

const CONFIG = {
  name: "Baby",
  note: "Two days of doing absolutely nothing, together 🌴",
  kicker: "🏨 Eden Roc · Miami Beach · May 29–31",

  intro: {
    title: "Hi Baby 💛",
    note: "No alarms, no rush — just us and the beach for two days. Here's everything I want to do with you. 🌴",
    button: "Let's go 🌴",
  },

  // Countdown target — checkout. (year, monthIndex, day, hour, min)
  // monthIndex is 0-based, so 4 = May.
  checkout: new Date(2026, 4, 31, 11, 0, 0),

  // Evening mode turns on at/after this hour, and off before nightEndHour
  nightStartHour: 19,
  nightEndHour: 6,

  // Cute pup gifs (Pomeranians + Dachshunds) — one shows in the hero, one in the finale
  gifs: [
    "https://media.giphy.com/media/1kK1f4uPB24Kk88ZCX/200.gif",
    "https://media.giphy.com/media/N4nazyg0nwJIF4tGTF/200.gif",
    "https://media.giphy.com/media/J5YdpJb2nv3xrYIAIt/200.gif",
    "https://media.giphy.com/media/2QwqAiIoQYBBTZjHtb/200.gif",
    "https://media.giphy.com/media/RtKgwIKKc2EjEyGla4/200.gif",
  ],

  // Sticker badges she unlocks as she goes
  badges: [
    { id: "start", emoji: "🌟", label: "First Adventure", test: () => doneCount() >= 1 },
    { id: "beach", emoji: "🏖️", label: "Beach Bum", test: () => doneId("beach") },
    { id: "matcha", emoji: "🍵", label: "Matcha Maniac", test: () => doneId("matcha") },
    { id: "pamper", emoji: "🧖‍♀️", label: "Spa Day", test: () => doneId("spa") || doneId("facial") || doneId("massage") },
    { id: "foodie", emoji: "🍽️", label: "Foodie", test: () => doneId("dinner") || doneId("pizza") },
    { id: "owl", emoji: "🦉", label: "Night Owl", test: () => ["rollerdisco", "poolparty", "comedy", "movie", "faena"].some(doneId) },
    { id: "half", emoji: "💞", label: "Halfway", test: () => doneCount() >= Math.ceil(total / 2) },
    { id: "champ", emoji: "🏆", label: "All In", test: () => total > 0 && doneCount() === total },
  ],

  // Sweet one-liners for the "press for a compliment" button — edit freely 💛
  compliments: [
    "You're my favorite person — in Miami or anywhere. 💛",
    "I'd pick you in every lifetime, Baby.",
    "You make 84°F feel even warmer. 😏",
    "Prettier than a Miami sunset, and that's saying a lot. 🌅",
    "I still get butterflies. Every single time.",
    "You + me is my favorite plan.",
    "Sweeter than every matcha on this list. 🍵",
    "Lucky doesn't even cover how I feel about you.",
    "Your smile is the best view this whole weekend.",
    "Two days with you beats anything else in the world.",
    "You're the reason I'm always grinning at my phone.",
    "Beautiful inside and out — and you have no clue how much.",
    "Home is wherever you are. 🏝️",
    "You're my best adventure, Baby.",
    "Even doing absolutely nothing is perfect with you. 🌴",
    "I fall for you a little more every day.",
    "You make ordinary moments feel like a vacation.",
    "Cutest girl on South Beach. Hands down.",
    "If loving you were a checklist, I'd check every box forever. 💛",
    "You're so easy to love it's almost unfair.",
    "My favorite hello and my hardest goodbye.",
    "Being next to you is my favorite place to be.",
    "I just really, really love you. Obviously. 💛",
    "Thank you for being mine this weekend — and every one after. 💛",
  ],

  // Day-by-day plan (easy to edit as you go)
  itinerary: [
    {
      day: "Friday",
      date: "May 29",
      emoji: "🌆",
      entries: [
        { time: "6:00pm", title: "Arrive & settle in", note: "check in, unpack, breathe 🧳" },
        {
          time: "9:30pm",
          title: "Dinner",
          note: "Macchialina 🍝 (handmade pasta · South Beach)",
          place: "Macchialina",
          mapsQuery: "Macchialina, 820 Alton Rd, Miami Beach FL",
        },
        {
          time: "after",
          title: "MYKA frozen yogurt",
          note: "Greek froyo run 🍦",
          place: "MYKA Greek Frozen Yogurt",
          mapsQuery: "MYKA Greek Frozen Yogurt, Miami Beach FL",
        },
        { time: "nightcap", title: "Drinks", note: "Eden Roc Lobby Bar 🍸 (or Bleau Bar next door)" },
      ],
    },
    {
      day: "Saturday",
      date: "May 30",
      emoji: "☀️",
      entries: [
        { time: "morning", title: "Slow start", note: "matcha + coffee ☕🍵" },
        { time: "midday", title: "Pool & beach", note: "soak up the sun 🏖️" },
        { time: "afternoon", title: "Pamper", note: "massage · facial · spa 🧖‍♀️" },
        {
          time: "5–9pm",
          title: "Roller Disco",
          note: "free, beachside 🪩",
          place: "Miami Beach Bandshell",
          mapsQuery: "Miami Beach Bandshell, 7275 Collins Ave, Miami Beach FL",
        },
        {
          time: "7:30pm",
          title: "Faena Theater",
          note: "an evening show 🎭",
          place: "Faena Theater",
          mapsQuery: "Faena Theater, Miami Beach FL",
        },
        { time: "dinner", title: "Dinner out", note: "Yaya · Casa Tua · Cactus Club 🍽️" },
      ],
    },
    {
      day: "Sunday",
      date: "May 31",
      emoji: "🧳",
      entries: [
        { time: "morning", title: "One more beach moment", note: "coffee + toes in the sand ☕" },
        { time: "before noon", title: "Last matcha to-go", note: "one for the road 🍵" },
        { time: "11:00am", title: "Checkout", note: "until next time, Miami 💛" },
      ],
    },
  ],

  categories: [
    {
      title: "Relax & Pamper",
      emoji: "💆‍♀️",
      items: [
        { id: "pool",    label: "Sit by the pool", emoji: "🏝️" },
        { id: "massage", label: "Massage",          emoji: "💆‍♀️" },
        {
          id: "facial",
          label: "Facial",
          emoji: "✨",
          hint: "glow time ✨",
          options: ["Sana Skin Studio Wynwood"],
        },
        {
          id: "spa",
          label: "Spa day",
          emoji: "🧖‍♀️",
          hint: "pure bliss 🧖‍♀️",
          options: ["K’alma Spa"],
        },
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
        {
          id: "matcha",
          label: "Matcha",
          emoji: "🍵",
          hint: "so many to try 🍵",
          options: [
            "Aura Matcha",
            "Navi Coffee & Flowers",
            "Honey Veil",
            "Baker and Barista",
            "Maman",
            "Facade",
          ],
        },
        {
          id: "coffee",
          label: "Coffee",
          emoji: "☕",
          hint: "one… or all of them ☕",
          options: [
            "Plant The Future Cafe",
            "Surry Hills Coffee",
            "Under The Mango Tree",
            "Cachito Coffee & Bakery",
            "Peche Mignon",
            "Sunshine Cafe",
          ],
        },
        {
          id: "dinner",
          label: "Dinner",
          emoji: "🍽️",
          hint: "where to tonight?",
          options: ["Macchialina", "Cactus Club Cafe", "Yaya", "Fooq's", "Casa Tua", "Esquina Cubana"],
        },
        {
          id: "pizza",
          label: "Pizza",
          emoji: "🍕",
          hint: "🍕 yes please",
          options: ["La Leggenda Pizzeria"],
        },
        {
          id: "dessert",
          label: "Dessert",
          emoji: "🍩",
          hint: "treat yourself 🍩",
          options: ["The Salty", "MYKA Greek Frozen Yogurt", "Pharos Greek Frozen Yogurt"],
        },
      ],
    },
    {
      title: "Experiences",
      emoji: "🎭",
      items: [
        {
          id: "faena",
          label: "A show",
          place: "Faena Theater",
          emoji: "🎭",
          mapsQuery: "Faena Theater, Miami Beach FL",
        },
      ],
    },
    {
      title: "Events this weekend",
      emoji: "🎉",
      items: [
        {
          id: "rollerdisco",
          label: "Roller Disco",
          emoji: "🪩",
          when: "Sat May 30 · 5–9pm",
          place: "Miami Beach Bandshell · free 🎉",
          mapsQuery: "Miami Beach Bandshell, 7275 Collins Ave, Miami Beach FL",
          link: "https://www.miamiandbeaches.com/event/roller-disco/39663",
        },
        {
          id: "poolparty",
          label: "Strawberry Moon Pool Party",
          emoji: "🍓",
          when: "Fri–Sun · 12–6pm",
          place: "Goodtime Hotel · 21+",
          mapsQuery: "Strawberry Moon, Goodtime Hotel, 601 Washington Ave, Miami Beach FL",
          link: "https://www.miamiandbeaches.com/event/strawberry-moon-pool-party/36654",
        },
        {
          id: "comedy",
          label: "Sillies Comedy Show",
          emoji: "🎤",
          when: "Fri May 29 · 8pm",
          place: "South Beach Brewing Co · $5",
          mapsQuery: "South Beach Brewing Company, 210 11th St, Miami Beach FL",
          link: "https://www.miamiandbeaches.com/event/sillies-on-south-beach-comedy-show/36607",
        },
        {
          id: "movie",
          label: "Rooftop Movie Night",
          emoji: "🎬",
          when: "Sat May 30 · 7pm",
          place: "AC Hotel Dadeland · ~35 min 🚗",
          mapsQuery: "AC Hotel Miami Dadeland, 7695 N Kendall Dr, Miami FL",
          link: "https://www.miamiandbeaches.com/event/rooftop-movie-nights-at-the-ac-hotel-miami/38891",
        },
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
let sunsets = [];
const earnedBadges = new Set();
let badgesReady = false;
let wheelRot = 0;
let wheelItems = [];
let spinning = false;
let lastComp = -1;
let audioCtx = null;
let oceanNodes = null;
let soundOn = true;
let loveVal = 0;
let loveTimer = null;
let loveTick = 0;
let discoOn = false;
let discoTimer = null;
let discoTimeout = null;

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
function selected(item) {
  const v = state[item.id];
  return Array.isArray(v) ? v : [];
}
function isDone(item) {
  const v = state[item.id];
  if (item.options) return Array.isArray(v) ? v.length > 0 : v === true;
  return !!v;
}
function doneCount() {
  return allItems.filter(isDone).length;
}
function doneId(id) {
  const it = allItems.find((x) => x.id === id);
  return it ? isDone(it) : false;
}

function mapsUrl(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

function randomGif() {
  const g = CONFIG.gifs || [];
  return g.length ? g[Math.floor(Math.random() * g.length)] : null;
}
function setGif(el, url) {
  if (!el || !url) return;
  el.onload = () => (el.hidden = false);
  el.onerror = () => (el.hidden = true); // broken/blocked gif just hides, never shows a broken icon
  el.src = url;
}

// --- build the page ---
function hydrateHero() {
  $("heroKicker").textContent = CONFIG.kicker;
  $("heroTitle").innerHTML = `Hi ${CONFIG.name} <span class="hero__heart">💛</span>`;
  $("heroNote").textContent = CONFIG.note;
  $("finaleText").textContent = CONFIG.finale;
  setGif($("heroPet"), randomGif());
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

function buildItinerary() {
  const wrap = $("itinerary");
  if (!wrap || !CONFIG.itinerary) return;
  wrap.innerHTML = CONFIG.itinerary
    .map(
      (day) => `
      <div class="itin-day">
        <div class="itin-day__head">
          <span class="itin-day__emoji" aria-hidden="true">${day.emoji}</span>
          <span class="itin-day__name">${day.day}</span>
          <span class="itin-day__date">${day.date}</span>
        </div>
        <div class="itin-list">
          ${day.entries
            .map(
              (e) => `
            <div class="itin-row">
              <span class="itin-time">${e.time}</span>
              <div class="itin-body">
                <span class="itin-title">${e.title}</span>
                ${e.note ? `<span class="itin-note">${e.note}</span>` : ""}
                ${
                  e.mapsQuery || e.place
                    ? `<a class="itin-nav" href="${mapsUrl(e.mapsQuery || e.place + ", Miami, FL")}" target="_blank" rel="noopener">🧭 directions</a>`
                    : ""
                }
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");
}

function makeCard(item, index) {
  if (item.options) return makeOptionCard(item, index);
  if (item.place) return makePlacedCard(item, index);

  const card = document.createElement("button");
  card.type = "button";
  card.className = "card" + (isDone(item) ? " card--done" : "");
  card.dataset.id = item.id;
  card.style.animationDelay = `${Math.min(index * 55, 600)}ms`;
  card.setAttribute("aria-pressed", String(isDone(item)));
  card.innerHTML = `
    <span class="card__check" aria-hidden="true"></span>
    <span class="card__emoji" aria-hidden="true">${item.emoji}</span>
    <span class="card__body">
      <span class="card__label">${item.label}</span>
    </span>`;
  card.addEventListener("click", () => toggle(item, card));
  return card;
}

function makePlacedCard(item, index) {
  const card = document.createElement("div");
  card.className = "card card--placed" + (isDone(item) ? " card--done" : "");
  card.dataset.id = item.id;
  card.style.animationDelay = `${Math.min(index * 55, 600)}ms`;
  const q = item.mapsQuery || `${item.place}, Miami, FL`;
  card.innerHTML = `
    <button type="button" class="card__main" aria-pressed="${isDone(item)}">
      <span class="card__check" aria-hidden="true"></span>
      <span class="card__emoji" aria-hidden="true">${item.emoji}</span>
      <span class="card__body">
        <span class="card__label">${item.label}</span>
        ${item.when ? `<span class="card__place">🗓️ ${item.when}</span>` : ""}
        <span class="card__place">📍 ${item.place}</span>
      </span>
    </button>
    <div class="card__links">
      <a class="card__nav" href="${mapsUrl(q)}" target="_blank" rel="noopener" aria-label="Directions to ${item.label}">🧭 directions</a>
      ${item.link ? `<a class="card__nav" href="${item.link}" target="_blank" rel="noopener" aria-label="Details for ${item.label}">🎟️ details</a>` : ""}
    </div>`;
  card.querySelector(".card__main").addEventListener("click", () => toggle(item, card));
  return card;
}

function makeOptionCard(item, index) {
  const card = document.createElement("div");
  card.className = "card card--options" + (isDone(item) ? " card--done" : "");
  card.dataset.id = item.id;
  card.style.animationDelay = `${Math.min(index * 55, 600)}ms`;
  const sel = selected(item);
  card.innerHTML = `
    <div class="card__head">
      <span class="card__check" aria-hidden="true"></span>
      <span class="card__emoji" aria-hidden="true">${item.emoji}</span>
      <span class="card__body">
        <span class="card__label">${item.label}</span>
        <span class="card__place">${item.hint || "tap a spot"}</span>
      </span>
    </div>
    <div class="chips">
      ${item.options
        .map(
          (o) =>
            `<span class="chip${sel.includes(o) ? " chip--on" : ""}" data-opt="${o}">` +
            `<button type="button" class="chip__pick">📍 ${o}</button>` +
            `<a class="chip__nav" href="${mapsUrl(o + ", Miami, FL")}" target="_blank" rel="noopener" aria-label="Directions to ${o}">🧭</a>` +
            `</span>`
        )
        .join("")}
    </div>`;
  card
    .querySelectorAll(".chip__pick")
    .forEach((pick) =>
      pick.addEventListener("click", () => toggleOption(item, pick.closest(".chip"), card))
    );
  return card;
}

function toggleOption(item, chip, card) {
  const opt = chip.dataset.opt;
  const wasDone = isDone(item);
  const sel = selected(item).slice();
  const i = sel.indexOf(opt);
  const turnedOn = i < 0;
  if (turnedOn) sel.push(opt);
  else sel.splice(i, 1);
  if (sel.length) state[item.id] = sel;
  else delete state[item.id];
  saveState();

  chip.classList.toggle("chip--on", turnedOn);
  const nowDone = isDone(item);
  card.classList.toggle("card--done", nowDone);
  updateProgress();

  if (turnedOn) {
    buzz();
    chime();
    popHearts(chip);
    burstAt(chip);
  }
  if (!wasDone && nowDone && doneCount() === total) showFinale();
  if (wasDone && !nowDone) hideFinale();
}

// --- interaction ---
function toggle(item, card) {
  const nowDone = !state[item.id];
  if (nowDone) state[item.id] = true;
  else delete state[item.id];
  saveState();

  card.classList.toggle("card--done", nowDone);
  (card.querySelector(".card__main") || card).setAttribute("aria-pressed", String(nowDone));
  updateProgress();

  if (nowDone) {
    buzz();
    chime();
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

  renderBadges();
}

function renderBadges() {
  const strip = $("badges");
  if (!strip) return;
  const fresh = [];
  strip.innerHTML = (CONFIG.badges || [])
    .map((b) => {
      const got = !!b.test();
      if (got && !earnedBadges.has(b.id)) {
        earnedBadges.add(b.id);
        if (badgesReady) fresh.push(b);
      }
      return `<div class="badge${got ? " badge--on" : ""}"><span class="badge__emoji">${b.emoji}</span><span class="badge__label">${b.label}</span></div>`;
    })
    .join("");
  if (fresh.length) {
    const b = fresh[fresh.length - 1];
    showReveal(`🏅 ${b.emoji} Sticker unlocked!`, b.label);
  }
}

function hintFor(frac) {
  let text = CONFIG.hints[0].text;
  for (const h of CONFIG.hints) if (frac >= h.at) text = h.text;
  return text;
}

// --- "what should we do next?" ---
function whatsNext() {
  const remaining = allItems.filter((it) => !isDone(it));
  if (remaining.length === 0) {
    showReveal("All done! 🎉", "Time to just relax together 💛");
    burstAt(null);
    return;
  }
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  showReveal(
    `${pick.emoji}  ${pick.label}`,
    pick.options
      ? pick.options.join("  ·  ")
      : pick.place
      ? `📍 ${pick.place}`
      : "let's go do this one 💫"
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

// --- tap-the-pup easter egg ---
function boopPup() {
  const pet = $("heroPet");
  if (!pet || pet.hidden) return;
  popHearts(pet);
  buzz();
  boopSound();
  if (pet.animate) {
    pet.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.16) rotate(-5deg)", offset: 0.35 },
        { transform: "scale(0.95) rotate(3deg)", offset: 0.7 },
        { transform: "scale(1)" },
      ],
      { duration: 450, easing: "ease" }
    );
  }
  const cur = pet.getAttribute("src");
  let next = randomGif();
  for (let i = 0; i < 6 && next === cur; i++) next = randomGif();
  setGif(pet, next);
}

// --- spin-the-wheel ---
function focusCard(item) {
  const card = activitiesEl.querySelector(`[data-id="${item.id}"]`);
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.classList.remove("card--pulse");
  void card.offsetWidth;
  card.classList.add("card--pulse");
  setTimeout(() => card.classList.remove("card--pulse"), 1600);
}
function buildWheel(items) {
  const colors = ["#ff6f91", "#ffd66b", "#2ec4b6", "#ffb38a", "#ff8fb1"];
  const n = Math.max(items.length, 1);
  const seg = 360 / n;
  const stops = items
    .map((_, i) => `${colors[i % colors.length]} ${i * seg}deg ${(i + 1) * seg}deg`)
    .join(", ");
  const wheel = $("wheel");
  wheel.style.transition = "none";
  wheelRot = 0;
  wheel.style.transform = "rotate(0deg)";
  wheel.style.background = items.length ? `conic-gradient(${stops})` : "#ffd66b";
  void wheel.offsetWidth;
  wheel.style.transition = "";
}
function openWheel() {
  wheelItems = allItems.filter((it) => !isDone(it));
  const result = $("wheelResult");
  result.hidden = true;
  result.innerHTML = "";
  if (wheelItems.length === 0) {
    buildWheel(allItems.slice(0, 6));
    result.hidden = false;
    result.innerHTML = `<span class="wheel-result__title">All done! 🎉</span><span>Time to just relax together 💛</span>`;
    $("wheelSpin").disabled = true;
  } else {
    buildWheel(wheelItems);
    $("wheelSpin").disabled = false;
  }
  $("wheelModal").hidden = false;
  document.body.style.overflow = "hidden";
}
function spinWheel() {
  if (spinning || !wheelItems.length) return;
  spinning = true;
  $("wheelSpin").disabled = true;
  $("wheelResult").hidden = true;
  const n = wheelItems.length;
  const seg = 360 / n;
  const pick = Math.floor(Math.random() * n);
  const targetOffset = (360 - (pick + 0.5) * seg) % 360;
  const currentMod = ((wheelRot % 360) + 360) % 360;
  let delta = targetOffset - currentMod;
  if (delta < 0) delta += 360;
  wheelRot += 360 * 5 + delta;
  const wheel = $("wheel");
  wheel.style.transform = `rotate(${wheelRot}deg)`;
  const done = (e) => {
    if (e.propertyName !== "transform") return;
    wheel.removeEventListener("transitionend", done);
    spinning = false;
    revealWheel(wheelItems[pick]);
  };
  wheel.addEventListener("transitionend", done);
}
function revealWheel(item) {
  const r = $("wheelResult");
  const sub = item.options
    ? item.options.join(" · ")
    : item.place
    ? `📍 ${item.place}`
    : "let's go do this one 💫";
  r.innerHTML =
    `<span class="wheel-result__title">${item.emoji} ${item.label}</span><span>${sub}</span>` +
    `<br /><button type="button" class="wheel-spin" id="wheelGo" style="margin-top:14px">Take me there →</button>`;
  r.hidden = false;
  burstAt(null);
  $("wheelGo").addEventListener("click", () => {
    closeWheel();
    focusCard(item);
  });
  $("wheelSpin").disabled = false;
}
function closeWheel() {
  $("wheelModal").hidden = true;
  document.body.style.overflow = "";
}

// --- press for a compliment ---
function pressCompliment() {
  const list = CONFIG.compliments || [];
  if (!list.length) return;
  let i = Math.floor(Math.random() * list.length);
  for (let k = 0; k < 6 && i === lastComp; k++) i = Math.floor(Math.random() * list.length);
  lastComp = i;
  const el = $("complimentText");
  el.textContent = list[i];
  if (el.animate) {
    el.animate(
      [
        { opacity: 0, transform: "translateY(8px) scale(0.98)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 350, easing: "ease" }
    );
  }
  popHearts($("complimentBtn"));
  buzz();
}

// --- sound effects (synthesized — no audio files) ---
function getCtx() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch {
    return null;
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function tone(freq, dur, type, gain, when) {
  const ctx = getCtx();
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type || "sine";
  o.frequency.value = freq;
  o.connect(g);
  g.connect(ctx.destination);
  const t = ctx.currentTime + (when || 0);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain || 0.2, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.start(t);
  o.stop(t + dur + 0.04);
}
function chime() {
  if (!soundOn) return;
  tone(880, 0.18, "sine", 0.18, 0);
  tone(1318, 0.26, "sine", 0.13, 0.07);
}
function boopSound() {
  if (!soundOn) return;
  tone(380, 0.1, "triangle", 0.22, 0);
  tone(540, 0.12, "triangle", 0.16, 0.05);
}
function toggleSound() {
  soundOn = !soundOn;
  const btn = $("soundBtn");
  if (btn) btn.textContent = soundOn ? "🔊 sounds" : "🔇 muted";
  if (soundOn) chime();
}
function toggleOcean() {
  const ctx = getCtx();
  if (!ctx) return;
  const btn = $("oceanBtn");
  if (oceanNodes) {
    const { src, gain, lfo } = oceanNodes;
    gain.gain.cancelScheduledValues(ctx.currentTime);
    gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    setTimeout(() => {
      try { src.stop(); lfo.stop(); } catch {}
    }, 600);
    oceanNodes = null;
    if (btn) btn.textContent = "🌊 waves";
    return;
  }
  const size = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 520;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.9);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.16;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.07;
  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  src.start();
  lfo.start();
  oceanNodes = { src, gain, lfo };
  if (btn) btn.textContent = "🌊 waves ✓";
}

// --- disco / rave mode ---
function discoKick(ctx, t) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.frequency.setValueAtTime(150, t);
  o.frequency.exponentialRampToValueAtTime(50, t + 0.12);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.5, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
  o.connect(g);
  g.connect(ctx.destination);
  o.start(t);
  o.stop(t + 0.2);
}
function discoHat(ctx, t) {
  const n = Math.floor(ctx.sampleRate * 0.05);
  const buf = ctx.createBuffer(1, n, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const hp = ctx.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 7000;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.16, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
  src.connect(hp);
  hp.connect(g);
  g.connect(ctx.destination);
  src.start(t);
  src.stop(t + 0.06);
}
function discoBass(ctx, t, freq) {
  const o = ctx.createOscillator();
  o.type = "sawtooth";
  o.frequency.value = freq;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 700;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
  o.connect(lp);
  lp.connect(g);
  g.connect(ctx.destination);
  o.start(t);
  o.stop(t + 0.25);
}
function startDisco() {
  if (discoOn) return;
  discoOn = true;
  const ov = $("disco");
  if (ov) ov.hidden = false;
  const ctx = getCtx();
  const bpm = 124;
  const beat = 60 / bpm;
  const beats = 14;
  if (ctx && soundOn) {
    const start = ctx.currentTime + 0.06;
    const line = [55, 55, 82.41, 73.42];
    for (let i = 0; i < beats; i++) {
      const t = start + i * beat;
      discoKick(ctx, t);
      discoHat(ctx, t + beat / 2);
      discoBass(ctx, t, line[i % line.length]);
    }
  }
  const colors = ["#ff3d7f", "#ffd23f", "#2ec4b6", "#7a5cff", "#ff8c42", "#26d4ff"];
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (ov && reduce) {
    ov.style.background = "linear-gradient(135deg,#7a5cff,#ff3d7f,#ffd23f)";
  } else if (ov) {
    let b = 0;
    discoTimer = setInterval(() => {
      ov.style.background = colors[b % colors.length];
      if (hasConfetti() && b % 2 === 0) {
        window.confetti({ particleCount: 28, spread: 90, startVelocity: 24, ticks: 60, origin: { y: 0.5 }, colors: PALETTE, zIndex: 210 });
      }
      b++;
    }, beat * 1000); // ~2 strobes/sec — kept gentle on purpose
  }
  discoTimeout = setTimeout(stopDisco, beats * beat * 1000);
}
function stopDisco() {
  discoOn = false;
  if (discoTimer) { clearInterval(discoTimer); discoTimer = null; }
  if (discoTimeout) { clearTimeout(discoTimeout); discoTimeout = null; }
  const ov = $("disco");
  if (ov) { ov.hidden = true; ov.style.background = ""; }
}

// --- love-o-meter ---
function loveVerdictFor(v) {
  if (v >= 1500) return "🤯 the machine exploded — unmeasurable";
  if (v >= 800) return "💥 OFF THE CHARTS — get a room you two";
  if (v >= 400) return "😵‍💫 dangerously, recklessly in love";
  if (v >= 150) return "💞 certified soulmates";
  if (v >= 50) return "💛 deeply, obviously in love";
  return "😏 that's it? hold it longer next time";
}
function loveStart(e) {
  if (e && e.cancelable) e.preventDefault();
  if (loveTimer) return;
  loveVal = 0;
  loveTick = 0;
  $("loveVerdict").textContent = "";
  $("loveFill").classList.remove("over");
  $("lovePad").classList.add("scanning");
  loveTimer = setInterval(() => {
    loveVal += 4 + loveVal * 0.05;
    loveTick++;
    $("loveNum").textContent = Math.round(loveVal) + "%";
    const fill = $("loveFill");
    fill.style.width = Math.min(100, loveVal) + "%";
    if (loveVal > 100) fill.classList.add("over");
    if (loveTick % 7 === 0) popHearts($("lovePad"));
  }, 55);
}
function loveEnd() {
  if (!loveTimer) return;
  clearInterval(loveTimer);
  loveTimer = null;
  $("lovePad").classList.remove("scanning");
  $("loveVerdict").textContent = loveVerdictFor(Math.round(loveVal));
  burstAt($("lovePad"));
  chime();
}

// --- MEGA fireworks finale ---
function megaFireworks() {
  if (!hasConfetti()) return;
  const dur = 4000;
  const end = performance.now() + dur;
  (function frame(now) {
    const left = end - now;
    if (left <= 0) return;
    const count = Math.ceil(55 * (left / dur));
    const base = { startVelocity: 34, spread: 360, ticks: 70, zIndex: 200, colors: PALETTE };
    window.confetti({ ...base, particleCount: count, origin: { x: 0.1 + Math.random() * 0.25, y: Math.random() * 0.45 } });
    window.confetti({ ...base, particleCount: count, origin: { x: 0.65 + Math.random() * 0.25, y: Math.random() * 0.45 } });
    requestAnimationFrame(frame);
  })(performance.now());
}
function screenShake() {
  const m = document.querySelector("main");
  if (!m) return;
  m.classList.remove("shake");
  void m.offsetWidth;
  m.classList.add("shake");
  setTimeout(() => m.classList.remove("shake"), 700);
}
function megaTakeover() {
  const el = $("mega");
  if (!el) return;
  el.hidden = false;
  el.classList.remove("mega--show");
  void el.offsetWidth;
  el.classList.add("mega--show");
  setTimeout(() => {
    el.classList.remove("mega--show");
    el.hidden = true;
  }, 2200);
}

// --- finale ---
function showFinale() {
  finaleEl.classList.add("finale--show");
  finaleEl.setAttribute("aria-hidden", "false");
  setGif($("finalePet"), randomGif());
  finaleEl.scrollIntoView({ behavior: "smooth", block: "center" });
  megaTakeover();
  megaFireworks();
  screenShake();
  chime();
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

// --- golden hour ---
function fmtDur(ms) {
  const m = Math.max(0, Math.floor(ms / 60000));
  const h = Math.floor(m / 60);
  return h > 0 ? `${h}h ${m % 60}m` : `${m % 60}m`;
}
function updateGolden() {
  const el = $("golden");
  if (!el || !sunsets.length) return;
  const now = Date.now();
  const GH = 60 * 60000; // golden hour ≈ the hour before sunset
  for (const s of sunsets) {
    const sunset = s.getTime();
    if (isNaN(sunset)) continue;
    const gStart = sunset - GH;
    if (now < gStart) {
      el.textContent = `🌅 golden hour in ${fmtDur(gStart - now)}`;
      el.hidden = false;
      return;
    }
    if (now < sunset) {
      el.textContent = "🌅✨ golden hour now — go catch the light!";
      el.hidden = false;
      return;
    }
  }
  el.hidden = true;
}

// --- countdown ---
function tickCountdown() {
  updateGolden();
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
  document.querySelectorAll(".card").forEach((c) => c.classList.remove("card--done"));
  document
    .querySelectorAll("button.card, .card__main")
    .forEach((b) => b.setAttribute("aria-pressed", "false"));
  document.querySelectorAll(".chip--on").forEach((ch) => ch.classList.remove("chip--on"));
  hideFinale();
  updateProgress();
}

// --- "open me" intro ---
const INTRO_KEY = "donna-intro-seen-v1";

function hydrateIntro() {
  $("introTitle").textContent = CONFIG.intro.title;
  $("introNote").textContent = CONFIG.intro.note;
  $("introBtn").textContent = CONFIG.intro.button;
}
function showIntro() {
  $("introSealed").hidden = false;
  $("introOpen").hidden = true;
  const intro = $("intro");
  intro.classList.remove("intro--hiding");
  intro.hidden = false;
  document.body.style.overflow = "hidden";
}
function openLetter() {
  $("introSealed").hidden = true;
  $("introOpen").hidden = false;
  burstAt(null);
}
function hideIntro() {
  const intro = $("intro");
  intro.classList.add("intro--hiding");
  document.body.style.overflow = "";
  try {
    localStorage.setItem(INTRO_KEY, "1");
  } catch {
    /* ignore */
  }
  setTimeout(() => (intro.hidden = true), 500);
}

// --- live weather + evening mode ---
function describeWeather(code, isDay) {
  const clear = isDay ? "☀️" : "🌙";
  const pcloud = isDay ? "🌤️" : "☁️";
  const map = {
    0: [clear, "Clear"],
    1: [pcloud, "Mostly clear"],
    2: ["⛅", "Partly cloudy"],
    3: ["☁️", "Overcast"],
    45: ["🌫️", "Foggy"],
    48: ["🌫️", "Foggy"],
    51: ["🌦️", "Light drizzle"],
    53: ["🌦️", "Drizzle"],
    55: ["🌦️", "Drizzle"],
    56: ["🌦️", "Drizzle"],
    57: ["🌦️", "Drizzle"],
    61: ["🌧️", "Light rain"],
    63: ["🌧️", "Rain"],
    65: ["🌧️", "Heavy rain"],
    66: ["🌧️", "Rain"],
    67: ["🌧️", "Rain"],
    71: ["❄️", "Snow"],
    73: ["❄️", "Snow"],
    75: ["❄️", "Snow"],
    77: ["❄️", "Snow"],
    80: ["🌦️", "Showers"],
    81: ["🌦️", "Showers"],
    82: ["⛈️", "Heavy showers"],
    85: ["❄️", "Snow"],
    86: ["❄️", "Snow"],
    95: ["⛈️", "Thunderstorm"],
    96: ["⛈️", "Thunderstorm"],
    99: ["⛈️", "Thunderstorm"],
  };
  const hit = map[code] || ["🌴", "Miami"];
  return { emoji: hit[0], label: hit[1] };
}

function loadWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=25.7907&longitude=-80.13" +
    "&current=temperature_2m,weather_code,is_day" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset" +
    "&temperature_unit=fahrenheit&timezone=America/New_York&forecast_days=3";
  fetch(url)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      if (!d || !d.current) return;
      const c = d.current;
      const w = describeWeather(c.weather_code, c.is_day);
      const el = $("weather");
      el.innerHTML = `${w.emoji} ${Math.round(c.temperature_2m)}°F · ${w.label} <span class="weather__caret" aria-hidden="true">▾</span>`;
      el.hidden = false;
      if (d.daily && d.daily.time) buildForecast(d.daily);
      if (d.daily && d.daily.sunset) {
        sunsets = d.daily.sunset.map((s) => new Date(s));
        updateGolden();
      }
    })
    .catch(() => {
      /* offline / blocked — strip just stays hidden */
    });
}

function buildForecast(daily) {
  const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  $("forecast").innerHTML = daily.time
    .map((t, i) => {
      const [y, mo, dd] = t.split("-").map(Number);
      const label = i === 0 ? "Today" : WD[new Date(y, mo - 1, dd).getDay()];
      const w = describeWeather(daily.weather_code[i], 1);
      const hi = Math.round(daily.temperature_2m_max[i]);
      const lo = Math.round(daily.temperature_2m_min[i]);
      return (
        `<div class="forecast__row">` +
        `<span class="forecast__day">${w.emoji} ${label}</span>` +
        `<span class="forecast__temp">${hi}°<span class="forecast__lo"> ${lo}°</span></span>` +
        `</div>`
      );
    })
    .join("");
}

function buzz() {
  if (navigator.vibrate) navigator.vibrate(12); // Android only; no-ops on iOS Safari
}

function applyTheme() {
  const h = new Date().getHours();
  const night = h >= CONFIG.nightStartHour || h < CONFIG.nightEndHour;
  document.body.classList.toggle("night", night);
}

// --- boot ---
hydrateHero();
hydrateIntro();
buildActivities();
buildItinerary();
updateProgress();
badgesReady = true;
if (doneCount() === total && total > 0) showFinale();

tickCountdown();
setInterval(tickCountdown, 1000);

loadWeather();
applyTheme();
setInterval(applyTheme, 60000);

$("nextBtn").addEventListener("click", openWheel);
$("wheelSpin").addEventListener("click", spinWheel);
$("wheelClose").addEventListener("click", closeWheel);
$("heroPet").addEventListener("click", boopPup);
$("complimentBtn").addEventListener("click", pressCompliment);
$("soundBtn").addEventListener("click", toggleSound);
$("oceanBtn").addEventListener("click", toggleOcean);
$("discoBtn").addEventListener("click", startDisco);
$("disco").addEventListener("click", stopDisco);
$("lovePad").addEventListener("pointerdown", loveStart);
$("lovePad").addEventListener("pointercancel", loveEnd);
document.addEventListener("pointerup", loveEnd);
$("resetBtn").addEventListener("click", resetAll);
$("introSealed").addEventListener("click", openLetter);
$("introBtn").addEventListener("click", hideIntro);
$("introReplay").addEventListener("click", showIntro);
$("weather").addEventListener("click", () => {
  const fc = $("forecast");
  const willOpen = fc.hidden;
  fc.hidden = !willOpen;
  $("weather").setAttribute("aria-expanded", String(willOpen));
});

let introSeen = false;
try {
  introSeen = !!localStorage.getItem(INTRO_KEY);
} catch {
  /* ignore */
}
if (!introSeen) showIntro();

// Register the network-first service worker so the home-screen app always loads the latest.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(() => {});
}
