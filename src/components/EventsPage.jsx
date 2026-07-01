import { useState, useMemo, useEffect, useCallback } from "react";
import { Drama } from "lucide-react";
import eventsData from "../data/events.json";
import { useAuth } from "../contexts/AuthContext";
import {
  getCustomEvents, addCustomEvent, updateCustomEvent, deleteCustomEvent,
} from "../data/storage";

const TODAY = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();
const FAR_FUTURE = new Date(9999, 0, 1);

const CATEGORY_COLORS = {
  "Season":        "#F59E0B",
  "Crossover":     "#8B5CF6",
  "Holiday":       "#38BDF8",
  "Anniversary":   "#EF4444",
  "Collection":    "#10B981",
  "Limited Event": "#FACC15",
  "Personal":      "#EC4899",
};

const CUSTOM_PALETTE = [
  "#ec4899","#f97316","#eab308","#22c55e",
  "#06b6d4","#6366f1","#a855f7","#ef4444",
];

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

function getDayGlow(dayEvts) {
  if (!dayEvts.length) return null;
  const sorted = [...dayEvts].sort((a, b) =>
    CATEGORY_PRIORITY.indexOf(a.category) - CATEGORY_PRIORITY.indexOf(b.category)
  );
  return CATEGORY_GLOW[sorted[0].category] ?? null;
}

function getSeasonalClass(dayEvts) {
  for (const ev of dayEvts) {
    const theme = SEASONAL_THEMES.find(t => t.match.test(ev.title));
    if (theme) return theme.className;
  }
  return null;
}

// Star positions/colours/delays for the "evc-day--sparkle" tiles (Dec 31 +
// May 4) — rendered as actual ✦ glyphs (see JSX below) rather than baked
// into the tile's own background, so each star can twinkle independently.
const SPARKLE_STARS = [
  { top: "18%", left: "20%", color: "#f472b6", delay: "0s"    },
  { top: "12%", left: "68%", color: "#facc15", delay: ".3s"   },
  { top: "50%", left: "40%", color: "#38bdf8", delay: ".6s"   },
  { top: "58%", left: "80%", color: "#4ade80", delay: ".9s"   },
  { top: "72%", left: "15%", color: "#c084fc", delay: "1.2s"  },
  { top: "78%", left: "58%", color: "#f87171", delay: "1.5s"  },
];

// Falling-heart positions/colours/timing for the "evc-day--valentine" tile
// (Feb 14) — rendered as actual ♥ glyphs (see JSX below), each looping a
// slow top-to-bottom drift independently.
const VALENTINE_HEARTS = [
  { left: "10%", color: "#f472b6", delay: "0s",  duration: "9s"   },
  { left: "28%", color: "#ffffff", delay: "2s",  duration: "10s"  },
  { left: "48%", color: "#f9a8d4", delay: "4s",  duration: "8.5s" },
  { left: "66%", color: "#ffffff", delay: "1s",  duration: "9.5s" },
  { left: "84%", color: "#f472b6", delay: "3s",  duration: "10.5s"},
];

// Fixed calendar-date decorations — these specific dates always get a
// themed tile regardless of what events (if any) are active that day, so
// they're keyed off the day's actual month/date rather than event data.
// Takes precedence over the seasonal/category glow when both would apply.
function getSpecialDate(day) {
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

const MONTHS  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW     = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const FILTERS = ["All","Active","Upcoming","Ended"];
const STATUS_ORDER = { Active: 0, Upcoming: 1, Ended: 2 };

/* ── helpers ── */

function parseDate(str) {
  if (!str || str === "Unknown") return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(str) {
  if (!str || str === "Unknown") return "TBA";
  return parseDate(str).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getStatus(event) {
  const start = parseDate(event.startDate);
  const end   = parseDate(event.endDate);
  if (!start || start > TODAY) return "Upcoming";
  if (!end   || end   >= TODAY) return "Active";
  return "Ended";
}

function getWeeks(year, month) {
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

function getEventsOnDay(events, day) {
  const t = day.getTime();
  return events.filter(e => {
    const s  = parseDate(e.startDate);
    const en = parseDate(e.endDate) ?? FAR_FUTURE;
    return s && s.getTime() <= t && en.getTime() >= t;
  });
}

/* ── notification logic (runs outside React render) ── */

function fireNotifications(userId, customRaw) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  const now   = new Date(); now.setHours(0, 0, 0, 0);
  const tmrw  = new Date(now); tmrw.setDate(tmrw.getDate() + 1);
  const nowMs  = now.getTime();
  const tmrwMs = tmrw.getTime();

  const storageKey = `sb_notif_${userId}`;
  let sent;
  try { sent = JSON.parse(localStorage.getItem(storageKey) || "{}"); }
  catch { sent = {}; }

  let changed = false;

  customRaw.forEach(ev => {
    const start = parseDate(ev.startDate);
    if (!start) return;
    const ms = start.getTime();

    if (ms === nowMs) {
      const k = `${ev.id}_dayof_${ev.startDate}`;
      if (!sent[k]) {
        new Notification(`Event today: ${ev.title}`, {
          body: ev.description || "Your personal event is starting today.",
          tag: k,
        });
        sent[k] = true;
        changed = true;
      }
    }

    if (ms === tmrwMs) {
      const k = `${ev.id}_daybefore_${ev.startDate}`;
      if (!sent[k]) {
        new Notification(`Tomorrow: ${ev.title}`, {
          body: ev.description || "Your personal event starts tomorrow.",
          tag: k,
        });
        sent[k] = true;
        changed = true;
      }
    }
  });

  if (changed) localStorage.setItem(storageKey, JSON.stringify(sent));
}

/* ══════════════════════════════════════════════════════════════════════════════
   EventsPage
══════════════════════════════════════════════════════════════════════════════ */

export default function EventsPage() {
  const { currentUser } = useAuth();

  const [view,           setView]          = useState("calendar");
  const [filter,         setFilter]        = useState("All");
  const [calDate,        setCalDate]       = useState(() => new Date(TODAY.getFullYear(), TODAY.getMonth(), 1));
  const [popupEvent,     setPopupEvent]    = useState(null);
  const [statusPopup,    setStatusPopup]   = useState(null);
  const [showCustomPop,  setShowCustomPop] = useState(false);
  const [showForm,       setShowForm]      = useState(false);
  const [editTarget,     setEditTarget]    = useState(null);
  const [formDefaults,   setFormDefaults]  = useState(null);
  const [hoverPreview,   setHoverPreview]  = useState(null);

  // notification permission tracked in state so banner updates reactively
  const [notifPerm, setNotifPerm] = useState(() =>
    "Notification" in window ? Notification.permission : "denied"
  );

  const [customRaw, setCustomRaw] = useState(() =>
    currentUser ? getCustomEvents(currentUser.id) : []
  );

  const officialEvents = useMemo(() =>
    eventsData.map(e => ({ ...e, _status: getStatus(e), isCustom: false })),
  []);

  const customEvents = useMemo(() =>
    customRaw.map(e => ({ ...e, category: "Personal", isCustom: true, _status: getStatus(e) })),
  [customRaw]);

  const events = useMemo(() => [...officialEvents, ...customEvents], [officialEvents, customEvents]);

  const counts = useMemo(() => ({
    Active:   events.filter(e => e._status === "Active").length,
    Upcoming: events.filter(e => e._status === "Upcoming").length,
    Ended:    events.filter(e => e._status === "Ended").length,
  }), [events]);

  const filtered = useMemo(() => {
    const list = filter === "All" ? events : events.filter(e => e._status === filter);
    return [...list].sort((a, b) => {
      const so = STATUS_ORDER[a._status] - STATUS_ORDER[b._status];
      return so !== 0 ? so : parseDate(b.startDate) - parseDate(a.startDate);
    });
  }, [events, filter]);

  const year  = calDate.getFullYear();
  const month = calDate.getMonth();
  const weeks = useMemo(() => getWeeks(year, month), [year, month]);

  /* fire notifications on mount + whenever customRaw changes, then every minute */
  useEffect(() => {
    if (!currentUser || customRaw.length === 0) return;
    fireNotifications(currentUser.id, customRaw);
    const id = setInterval(() => fireNotifications(currentUser.id, customRaw), 60_000);
    return () => clearInterval(id);
  }, [currentUser, customRaw]);

  function go(y, m) { setCalDate(new Date(y, m, 1)); }

  /* ── date-cell click: open form pre-filled with that date ── */
  function openAddOnDate(day) {
    if (!currentUser) return;
    const iso = toISO(day);
    setEditTarget(null);
    setFormDefaults({ startDate: iso, endDate: iso });
    setShowForm(true);
  }

  /* ── toolbar "Add Event" button ── */
  function openAddBlank() {
    setEditTarget(null);
    setFormDefaults(null);
    setShowForm(true);
  }

  /* ── save / delete ── */
  const refreshCustom = useCallback(() => {
    if (currentUser) setCustomRaw(getCustomEvents(currentUser.id));
  }, [currentUser]);

  const handleSave = useCallback((formData) => {
    if (!currentUser) return;
    if (editTarget?.id) {
      updateCustomEvent(currentUser.id, editTarget.id, formData);
    } else {
      addCustomEvent(currentUser.id, formData);
    }
    refreshCustom();
    setShowForm(false);
    setEditTarget(null);
    setFormDefaults(null);
  }, [currentUser, editTarget, refreshCustom]);

  const handleDelete = useCallback((eventId) => {
    if (!currentUser) return;
    deleteCustomEvent(currentUser.id, eventId);
    refreshCustom();
    setPopupEvent(null);
  }, [currentUser, refreshCustom]);

  const openEdit = useCallback((event) => {
    setPopupEvent(null);
    setEditTarget(event);
    setFormDefaults(null);
    setShowForm(true);
  }, []);

  /* ── notification permission ── */
  async function requestPermission() {
    if (!("Notification" in window)) return;
    const perm = await Notification.requestPermission();
    setNotifPerm(perm);
    if (perm === "granted" && currentUser) fireNotifications(currentUser.id, customRaw);
  }

  function getEventColor(event) {
    if (event.isCustom) return event.color ?? CUSTOM_PALETTE[0];
    return CATEGORY_COLORS[event.category] ?? "#9da6b5";
  }

  // Position is captured once on hover-enter (not tracked per-mousemove) and
  // rendered with position:fixed so the preview can escape .evc-day's own
  // overflow:hidden (needed to contain the diagonal stripes) without having
  // to touch that clipping behaviour.
  function handleDayEnter(e, dayEvts) {
    if (!dayEvts.length) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPreview({ evts: dayEvts, top: rect.bottom + 6, left: rect.left });
  }
  function handleDayLeave() {
    setHoverPreview(null);
  }

  const showNotifBanner = currentUser && "Notification" in window && notifPerm === "default";

  return (
    <>
      <div className="control-panel">
        <h2>Event Tracker</h2>
        <p>Active, upcoming, and past Overwatch events — sourced from official Blizzard news posts and updated each season.</p>

        {showNotifBanner && (
          <div className="ev-notif-banner">
            <span className="ev-notif-banner-text">Enable reminders to be notified the day before and day of your personal events</span>
            <button type="button" className="ev-notif-enable-btn" onClick={requestPermission}>
              Enable Reminders
            </button>
          </div>
        )}

        <div className="ev-summary">
          <button type="button" className="ev-chip ev-chip--active"   onClick={() => setStatusPopup("Active")}>{counts.Active} Active</button>
          <button type="button" className="ev-chip ev-chip--upcoming" onClick={() => setStatusPopup("Upcoming")}>{counts.Upcoming} Upcoming</button>
          {currentUser && (
            <button type="button" className="ev-chip ev-chip--add" onClick={() => setShowCustomPop(true)}>My Events</button>
          )}
          <button type="button" className="ev-chip ev-chip--ended"    onClick={() => setStatusPopup("Ended")}>{counts.Ended} Ended</button>
        </div>

        <div className="ev-toolbar">
          <div className="ev-view-tabs">
            <button type="button" className={`ev-view-tab${view === "calendar" ? " active" : ""}`} onClick={() => setView("calendar")}>▦ Calendar</button>
            <button type="button" className={`ev-view-tab${view === "list"     ? " active" : ""}`} onClick={() => setView("list")}>☰ List</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "auto" }}>
            {view === "list" && (
              <div className="ev-filters">
                {FILTERS.map(f => (
                  <button key={f} type="button" className={`ev-filter-btn${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
                ))}
              </div>
            )}
            {currentUser && (
              <button type="button" className="ev-add-btn" onClick={openAddBlank}>+ Add Event</button>
            )}
          </div>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="evc-wrap">
          {/* nav */}
          <div className="evc-nav">
            <div className="evc-nav-left">
              <button type="button" className="evc-nav-btn" onClick={() => go(year - 1, month)} title="Previous year">«</button>
              <button type="button" className="evc-nav-btn" onClick={() => go(year, month - 1)} title="Previous month">‹</button>
            </div>
            <div className="evc-title">
              <span className="evc-month-name">{MONTHS[month]}</span>
              <span className="evc-year">{year}</span>
            </div>
            <div className="evc-nav-right">
              <button type="button" className="evc-nav-btn" onClick={() => go(year, month + 1)} title="Next month">›</button>
              <button type="button" className="evc-nav-btn" onClick={() => go(year + 1, month)} title="Next year">»</button>
              <button type="button" className="evc-today-btn" onClick={() => go(TODAY.getFullYear(), TODAY.getMonth())}>Today</button>
            </div>
          </div>

          {/* day-of-week header */}
          <div className="evc-dow-row">
            {DOW.map(d => <div key={d} className="evc-dow">{d}</div>)}
          </div>

          {currentUser && (
            <div className="evc-add-hint">Click any date to add a personal event</div>
          )}

          {/* weeks */}
          <div className="evc-body">
            {weeks.map((week, wi) => (
              <div key={wi} className="evc-week">
                <div className="evc-day-row">
                  {week.map((day, di) => {
                    const inMonth = day.getMonth() === month;
                    const isToday = day.toDateString() === TODAY.toDateString();
                    const dayEvts = getEventsOnDay(events, day);
                    const special = getSpecialDate(day);
                    const seasonalClass = special ? null : getSeasonalClass(dayEvts);
                    const glowColor = (special || seasonalClass) ? null : getDayGlow(dayEvts);
                    const dayClass = special ? special.className : seasonalClass ? seasonalClass : glowColor ? "evc-day--glow" : "";
                    return (
                      <div
                        key={di}
                        className={`evc-day${!inMonth ? " evc-day--out" : ""}${isToday ? " evc-day--today" : ""}${currentUser ? " evc-day--addable" : ""}${dayClass ? " " + dayClass : ""}`}
                        style={glowColor ? { "--evc-glow": glowColor } : undefined}
                        onClick={currentUser ? () => openAddOnDate(day) : undefined}
                        onKeyDown={currentUser ? (e => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openAddOnDate(day);
                          }
                        }) : undefined}
                        onMouseEnter={e => handleDayEnter(e, dayEvts)}
                        onMouseLeave={handleDayLeave}
                        role={currentUser ? "button" : undefined}
                        tabIndex={currentUser ? 0 : undefined}
                        title={currentUser ? `Add event on ${formatDate(toISO(day))}` : undefined}
                        aria-label={currentUser ? `Add event on ${formatDate(toISO(day))}` : undefined}
                      >
                        <span className="evc-daynum">{day.getDate()}</span>
                        {isToday && <span className="evc-today-badge">Today</span>}
                        {special?.label && <span className="evc-date-badge">{special.label}</span>}
                        {special?.className === "evc-day--sparkle" && SPARKLE_STARS.map((s, si) => (
                          <span
                            key={si}
                            className="evc-sparkle-star"
                            style={{ top: s.top, left: s.left, color: s.color, animationDelay: s.delay }}
                            aria-hidden="true"
                          >
                            ✦
                          </span>
                        ))}
                        {special?.className === "evc-day--valentine" && VALENTINE_HEARTS.map((h, hi) => (
                          <span
                            key={hi}
                            className="evc-heart-fall"
                            style={{ left: h.left, color: h.color, animationDelay: h.delay, animationDuration: h.duration }}
                            aria-hidden="true"
                          >
                            ♥
                          </span>
                        ))}
                        {special?.className === "evc-day--halloween31" && <span className="evc-pumpkin" aria-hidden="true" />}
                        {special?.className === "evc-day--circus" && <Drama className="evc-tent" aria-hidden="true" />}
                        {special?.className === "evc-day--christmas" && (
                          <svg className="evc-tree" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                            <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
                            <path d="M12 22v-3" />
                          </svg>
                        )}
                        {dayEvts.length > 0 && (
                          <div className="evc-stripes-wrap">
                            {dayEvts.map(ev => (
                              <button
                                key={ev.id}
                                type="button"
                                className={`evc-stripe${ev.isCustom ? " evc-stripe--custom" : ""}`}
                                style={{ background: getEventColor(ev) }}
                                onClick={e => { e.stopPropagation(); setPopupEvent(ev); }}
                                title={ev.title}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* legend */}
          <div className="evc-legend">
            {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
              <span key={cat} className="evc-legend-item">
                <span className="evc-legend-dot" style={{ background: color }} />
                {cat}
              </span>
            ))}
          </div>

          {/* hover preview — rendered once, position:fixed so it can escape
              .evc-day's overflow:hidden; pointer-events:none so it never
              intercepts clicks meant for the day cell or its stripes */}
          {hoverPreview && (
            <div className="evc-preview" style={{ top: hoverPreview.top, left: hoverPreview.left }}>
              {hoverPreview.evts.map(ev => (
                <div key={ev.id} className="evc-preview-item">
                  <span className="evc-preview-dot" style={{ background: getEventColor(ev) }} />
                  <div className="evc-preview-text">
                    <span className="evc-preview-name">{ev.title}</span>
                    <span className="evc-preview-meta">{ev.category}</span>
                    <span className="evc-preview-dates">{formatDate(ev.startDate)} – {formatDate(ev.endDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="ev-list">
          {filtered.length === 0
            ? <p className="ev-empty">No events match this filter.</p>
            : filtered.map(event => (
                <EventCard key={event.id} event={event} onOpen={setPopupEvent} getColor={getEventColor} />
              ))
          }
        </div>
      )}

      <p className="ev-disclaimer">
        Official dates sourced from Blizzard news posts and the Wikipedia Overwatch seasonal events article.
        Personal events are stored locally to your account. Reminders fire as browser notifications.
      </p>

      {showCustomPop && (
        <MyEventsPopup
          events={customEvents}
          getColor={getEventColor}
          onClose={() => setShowCustomPop(false)}
          onOpenEvent={e => { setShowCustomPop(false); setPopupEvent(e); }}
          onAdd={() => { setShowCustomPop(false); openAddBlank(); }}
        />
      )}

      {statusPopup && (
        <StatusPopup
          status={statusPopup}
          events={events}
          getColor={getEventColor}
          onClose={() => setStatusPopup(null)}
          onOpenEvent={e => { setStatusPopup(null); setPopupEvent(e); }}
        />
      )}

      {popupEvent && (
        <EventPopup
          event={popupEvent}
          getColor={getEventColor}
          onClose={() => setPopupEvent(null)}
          onEdit={popupEvent.isCustom ? openEdit : null}
          onDelete={popupEvent.isCustom ? handleDelete : null}
        />
      )}

      {showForm && (
        <CustomEventForm
          initial={editTarget}
          defaults={formDefaults}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditTarget(null); setFormDefaults(null); }}
        />
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CustomEventForm
══════════════════════════════════════════════════════════════════════════════ */

function CustomEventForm({ initial, defaults, onSave, onClose }) {
  const isEditing = !!initial?.id;

  const [title,       setTitle] = useState(initial?.title       ?? "");
  const [startDate,   setStart] = useState(initial?.startDate   ?? defaults?.startDate ?? "");
  const [endDate,     setEnd]   = useState(initial?.endDate === "Unknown" ? "" : (initial?.endDate ?? defaults?.endDate ?? ""));
  const [description, setDesc]  = useState(initial?.description ?? "");
  const [color,       setColor] = useState(initial?.color       ?? CUSTOM_PALETTE[0]);
  const [error,       setError] = useState("");
  const [confirming,  setConfirming] = useState(false); // step 2: confirmation screen

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") { if (confirming) setConfirming(false); else onClose(); } }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, confirming]);

  function handleReview(e) {
    e.preventDefault();
    if (!title.trim()) { setError("Title is required."); return; }
    if (!startDate)    { setError("Start date is required."); return; }
    if (endDate && endDate < startDate) { setError("End date must be on or after start date."); return; }
    setError("");
    setConfirming(true);
  }

  function handleConfirm() {
    onSave({ title: title.trim(), startDate, endDate: endDate || startDate, description: description.trim(), color });
  }

  const resolvedEnd = endDate || startDate;

  return (
    <div className="ev-popup-overlay" onClick={confirming ? undefined : onClose}>
      <div className="ev-custom-form" onClick={e => e.stopPropagation()}>

        {/* ── Step 1: form ── */}
        {!confirming && <>
          <div className="ev-custom-form-header">
            <h3 className="ev-custom-form-title">{isEditing ? "Edit Event" : "Add Personal Event"}</h3>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <form style={{ display:"contents" }} onSubmit={handleReview}>
            {/* scrollable fields */}
            <div className="ev-custom-form-body">
              <label className="ev-field-label">
                Title <span className="ev-field-required">*</span>
                <input
                  className="ev-field-input"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Event name"
                  maxLength={80}
                  autoFocus
                />
              </label>

              <div className="ev-field-row">
                <label className="ev-field-label">
                  Start date <span className="ev-field-required">*</span>
                  <input className="ev-field-input" type="date" value={startDate} onChange={e => setStart(e.target.value)} />
                </label>
                <label className="ev-field-label">
                  End date
                  <input className="ev-field-input" type="date" value={endDate} min={startDate} onChange={e => setEnd(e.target.value)} />
                </label>
              </div>

              <label className="ev-field-label">
                Description
                <textarea
                  className="ev-field-input ev-field-textarea"
                  value={description}
                  onChange={e => setDesc(e.target.value)}
                  placeholder="Optional notes…"
                  rows={3}
                  maxLength={300}
                />
              </label>

              <div className="ev-field-label">
                Colour
                <div className="ev-colour-swatches">
                  {CUSTOM_PALETTE.map(c => (
                    <button
                      key={c}
                      type="button"
                      className={`ev-colour-swatch${color === c ? " selected" : ""}`}
                      style={{ background: c }}
                      onClick={() => setColor(c)}
                      aria-label={c}
                    />
                  ))}
                </div>
              </div>

              <div className="ev-notif-hint">
                You'll receive a browser reminder the day before and the day of this event.
              </div>

              {error && <p className="ev-field-error">{error}</p>}
            </div>

            {/* pinned action bar */}
            <div className="ev-custom-form-actions">
              <button type="button" className="ev-form-btn ev-form-btn--cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="ev-form-btn ev-form-btn--save">
                {isEditing ? "Review Changes" : "Review Event"}
              </button>
            </div>
          </form>
        </>}

        {/* ── Step 2: confirmation ── */}
        {confirming && <>
          <div className="ev-custom-form-header">
            <h3 className="ev-custom-form-title">{isEditing ? "Confirm Changes" : "Confirm Event"}</h3>
            <button type="button" className="ev-popup-close" onClick={() => setConfirming(false)} aria-label="Back">✕</button>
          </div>

          {/* scrollable confirmation content */}
          <div className="ev-confirm-body">
            <p className="ev-confirm-prompt">{isEditing ? "Save these changes to your event?" : "Add this event to your calendar?"}</p>

            <div className="ev-confirm-card" style={{ borderLeftColor: color }}>
              <div className="ev-confirm-swatch" style={{ background: color }} />
              <div className="ev-confirm-details">
                <span className="ev-confirm-title">{title}</span>
                <span className="ev-confirm-range">
                  {formatDate(startDate)}
                  {resolvedEnd !== startDate && <> → {formatDate(resolvedEnd)}</>}
                </span>
                {description && <span className="ev-confirm-desc">{description}</span>}
              </div>
            </div>

            <div className="ev-notif-hint">
              A reminder will fire the day before and the day this event starts.
            </div>
          </div>

          {/* pinned action bar */}
          <div className="ev-custom-form-actions">
            <button type="button" className="ev-form-btn ev-form-btn--cancel" onClick={() => setConfirming(false)}>
              ← Go Back
            </button>
            <button type="button" className="ev-form-btn ev-form-btn--save" onClick={handleConfirm}>
              {isEditing ? "Save Changes" : "Confirm & Add"}
            </button>
          </div>
        </>}

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   StatusPopup
══════════════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════════════════════
   MyEventsPopup — active & upcoming personal events only
══════════════════════════════════════════════════════════════════════════════ */

function MyEventsPopup({ events, getColor, onClose, onOpenEvent, onAdd }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const list = events
    .filter(e => e._status === "Active" || e._status === "Upcoming")
    .sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div className="ev-status-popup" onClick={e => e.stopPropagation()}>
        <div className="ev-status-popup-header">
          <div className="ev-status-popup-heading">
            <span className="ev-cat-pill" style={{ color: "#ec4899", borderColor: "rgba(236,72,153,.4)" }}>Personal</span>
            <h3 className="ev-status-popup-title">My Events</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button type="button" className="ev-myevents-add-btn" onClick={onAdd}>+ Add Event</button>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        <div className="ev-status-popup-list">
          {list.length === 0 ? (
            <div className="ev-myevents-empty">
              <p>No active or upcoming personal events.</p>
              <button type="button" className="ev-form-btn ev-form-btn--save" onClick={onAdd}>+ Add your first event</button>
            </div>
          ) : list.map(event => {
            const catColor = getColor(event);
            const statusLabel = event._status;
            return (
              <button key={event.id} type="button" className="ev-status-popup-item" onClick={() => onOpenEvent(event)}>
                <div className="ev-status-popup-accent" style={{ background: catColor }} />
                <div className="ev-status-popup-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                    <span className={`ev-status-pill ev-status-pill--${statusLabel.toLowerCase()}`}>{statusLabel}</span>
                  </div>
                  <span className="ev-status-popup-name">{event.title}</span>
                  <span className="ev-status-popup-range">
                    {formatDate(event.startDate)} → {event.endDate === "Unknown" ? "TBA" : formatDate(event.endDate)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   StatusPopup
══════════════════════════════════════════════════════════════════════════════ */

function StatusPopup({ status, events, getColor, onClose, onOpenEvent }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const list = events
    .filter(e => e._status === status)
    .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div className="ev-status-popup" onClick={e => e.stopPropagation()}>
        <div className="ev-status-popup-header">
          <div className="ev-status-popup-heading">
            <span className={`ev-status-pill ev-status-pill--${status.toLowerCase()}`}>{status}</span>
            <h3 className="ev-status-popup-title">{list.length} {status} Event{list.length !== 1 ? "s" : ""}</h3>
          </div>
          <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="ev-status-popup-list">
          {list.map(event => {
            const catColor = getColor(event);
            return (
              <button key={event.id} type="button" className="ev-status-popup-item" onClick={() => onOpenEvent(event)}>
                <div className="ev-status-popup-accent" style={{ background: catColor }} />
                <div className="ev-status-popup-info">
                  <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66`, alignSelf: "flex-start", marginBottom: "4px" }}>
                    {event.isCustom ? "Personal" : event.category}
                  </span>
                  <span className="ev-status-popup-name">{event.title}</span>
                  <span className="ev-status-popup-range">
                    {formatDate(event.startDate)} → {event.endDate === "Unknown" ? "TBA" : formatDate(event.endDate)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EventCard (list view)
══════════════════════════════════════════════════════════════════════════════ */

function EventCard({ event, onOpen, getColor }) {
  const catColor = getColor(event);
  const s = event._status;
  return (
    <article
      className="ev-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(event)}
      onKeyDown={e => e.key === "Enter" && onOpen(event)}
    >
      <div className="ev-card-accent" style={{ background: catColor }} />
      <div className="ev-card-body">
        <div className="ev-card-head">
          <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66` }}>
            {event.isCustom ? "Personal" : event.category}
          </span>
          <span className={`ev-status-pill ev-status-pill--${s.toLowerCase()}`}>{s}</span>
        </div>
        <h3 className="ev-card-title">{event.title}</h3>
        <p className="ev-card-range">
          <span>{formatDate(event.startDate)}</span>
          <span className="ev-range-arrow">→</span>
          <span>{event.endDate === "Unknown" ? "End date TBA" : formatDate(event.endDate)}</span>
        </p>
        {event.description && <p className="ev-card-desc">{event.description}</p>}
        {!event.isCustom && event.sourceUrl && (
          <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="ev-source-link" onClick={e => e.stopPropagation()}>
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EventPopup (detail)
══════════════════════════════════════════════════════════════════════════════ */

function EventPopup({ event, getColor, onClose, onEdit, onDelete }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const catColor = getColor(event);
  const s = event._status;

  return (
    <div className="ev-popup-overlay" onClick={onClose}>
      <div className="ev-popup" onClick={e => e.stopPropagation()}>
        <div className="ev-popup-topbar" style={{ background: catColor }} />
        <div className="ev-popup-inner">
          <div className="ev-popup-head">
            <div className="ev-popup-pills">
              <span className="ev-cat-pill" style={{ color: catColor, borderColor: `${catColor}66` }}>
                {event.isCustom ? "Personal" : event.category}
              </span>
              <span className={`ev-status-pill ev-status-pill--${s.toLowerCase()}`}>{s}</span>
            </div>
            <button type="button" className="ev-popup-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <h3 className="ev-popup-title">{event.title}</h3>

          <div className="ev-popup-dates">
            <div className="ev-popup-date-block">
              <span className="ev-popup-date-label">Starts</span>
              <span className="ev-popup-date-val">{formatDate(event.startDate)}</span>
            </div>
            <span className="ev-popup-arrow">→</span>
            <div className="ev-popup-date-block">
              <span className="ev-popup-date-label">Ends</span>
              <span className="ev-popup-date-val">{event.endDate === "Unknown" ? "TBA" : formatDate(event.endDate)}</span>
            </div>
          </div>

          {event.description && <p className="ev-popup-desc">{event.description}</p>}

          {!event.isCustom && event.sourceUrl && (
            <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="ev-popup-source">
              View Source ↗
            </a>
          )}

          {event.isCustom && (
            <div className="ev-popup-custom-actions">
              <button type="button" className="ev-popup-edit-btn" onClick={() => onEdit(event)}>Edit</button>
              {confirmDelete ? (
                <div className="ev-popup-delete-confirm">
                  <span>Delete this event?</span>
                  <button type="button" className="ev-popup-delete-btn--yes" onClick={() => onDelete(event.id)}>Yes, delete</button>
                  <button type="button" className="ev-popup-delete-btn--no"  onClick={() => setConfirmDelete(false)}>Cancel</button>
                </div>
              ) : (
                <button type="button" className="ev-popup-delete-btn" onClick={() => setConfirmDelete(true)}>Delete</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
