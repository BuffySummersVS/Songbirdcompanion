// Pure calendar/date logic used by EventsPage.jsx, kept in its own module
// (rather than exported from the component file) so it stays unit-testable
// and doesn't break Vite Fast Refresh, which requires component files to
// only export components.

export const TODAY = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();
const FAR_FUTURE = new Date(9999, 0, 1);

// Subtle per-tile background glow — a separate palette from CATEGORY_COLORS
// (which drives the stripes/legend and must stay untouched) since the glow
// is a new, softer accent layer keyed to the same categories.
const CATEGORY_GLOW = {
  "Season":        "245,158,11",
  "Anniversary":   "239,68,68",
  "Collection":    "6,182,212",
  "Holiday":       "56,189,248",
  "Crossover":     "139,92,246",
  "Limited Event": "34,197,94",
  "Personal":      "236,72,153",
};
const CATEGORY_PRIORITY = Object.keys(CATEGORY_GLOW);

// Seasonal theming — matched against event titles since the data has no
// dedicated "theme" field; only applied to the specific days those events
// are actually active on.
const SEASONAL_THEMES = [
  { match: /halloween/i,        className: "evc-day--halloween" },
  { match: /winter wonderland/i, className: "evc-day--winter" },
  { match: /anniversary/i,      className: "evc-day--anniversary" },
  { match: /april fools/i,      className: "evc-day--aprilfools" },
  { match: /archives/i,         className: "evc-day--archives" },
  { match: /lunar new year/i,   className: "evc-day--lunar" },
];

export function getDayGlow(dayEvts) {
  if (!dayEvts.length) return null;
  const sorted = [...dayEvts].sort((a, b) =>
    CATEGORY_PRIORITY.indexOf(a.category) - CATEGORY_PRIORITY.indexOf(b.category)
  );
  return CATEGORY_GLOW[sorted[0].category] ?? null;
}

export function getSeasonalClass(dayEvts) {
  for (const ev of dayEvts) {
    const theme = SEASONAL_THEMES.find(t => t.match.test(ev.title));
    if (theme) return theme.className;
  }
  return null;
}

// Fixed calendar-date decorations — these specific dates always get a
// themed tile regardless of what events (if any) are active that day, so
// they're keyed off the day's actual month/date rather than event data.
// Takes precedence over the seasonal/category glow when both would apply.
export function getSpecialDate(day) {
  const m = day.getMonth(); // 0-indexed
  const d = day.getDate();
  if (m === 1  && d === 14) return { className: "evc-day--valentine", label: "Valentines" };     // Feb 14
  if (m === 3  && d === 1)  return { className: "evc-day--circus", label: "April Fools" };      // Apr 1
  if (m === 5)              return { className: "evc-day--pride", label: d === 1 ? "Pride Month" : undefined }; // all of June (Pride Month), label only on the 1st
  if (m === 9  && d === 31) return { className: "evc-day--halloween31", label: "Halloween" };   // Oct 31
  if (m === 11 && d === 25) return { className: "evc-day--christmas", label: "Christmas Day" };  // Dec 25
  if (m === 11 && d === 31) return { className: "evc-day--sparkle", label: "New Years Eve" };    // Dec 31
  if (m === 4  && d === 4)  return { className: "evc-day--sparkle", label: "Overwatch Birthday" }; // May 4
  return null;
}

export function parseDate(str) {
  if (!str || str === "Unknown") return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(str) {
  if (!str || str === "Unknown") return "TBA";
  return parseDate(str).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getStatus(event) {
  const start = parseDate(event.startDate);
  const end   = parseDate(event.endDate);
  if (!start || start > TODAY) return "Upcoming";
  if (!end   || end   >= TODAY) return "Active";
  return "Ended";
}

export function getWeeks(year, month) {
  const first = new Date(year, month, 1);
  const last  = new Date(year, month + 1, 0);
  const start = new Date(first); start.setDate(start.getDate() - start.getDay());
  const end   = new Date(last);  end.setDate(end.getDate() + (6 - end.getDay()));
  const weeks = [];
  const cur = new Date(start);
  while (cur <= end) {
    const week = [];
    for (let i = 0; i < 7; i++) { week.push(new Date(cur)); cur.setDate(cur.getDate() + 1); }
    weeks.push(week);
  }
  return weeks;
}

export function getEventsOnDay(events, day) {
  const t = day.getTime();
  return events.filter(e => {
    const s  = parseDate(e.startDate);
    const en = parseDate(e.endDate) ?? FAR_FUTURE;
    return s && s.getTime() <= t && en.getTime() >= t;
  });
}
