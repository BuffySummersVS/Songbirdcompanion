import { useState, useMemo, useEffect, useCallback } from "react";
import { Drama } from "lucide-react";
import eventsData from "../../data/events.json";
import { useAuth } from "../../contexts/AuthContext";
import { useEasterEggs } from "../../contexts/EasterEggContext";
import { useClickTrigger } from "../../hooks/useClickTrigger";
import {
  getCustomEvents, addCustomEvent, updateCustomEvent, deleteCustomEvent,
} from "../../data/storage";
import {
  TODAY, getDayGlow, getSeasonalClass, getSpecialDate,
  parseDate, formatDate, toISO, getStatus, getWeeks, getEventsOnDay,
} from "../../data/calendarHelpers";
import { fireNotifications } from "./notifications";
import { CUSTOM_PALETTE } from "./constants";
import CustomEventForm from "./CustomEventForm";
import MyEventsPopup from "./MyEventsPopup";
import StatusPopup from "./StatusPopup";
import EventCard from "./EventCard";
import EventPopup from "./EventPopup";

const CATEGORY_COLORS = {
  "Season":        "#F59E0B",
  "Crossover":     "#8B5CF6",
  "Holiday":       "#38BDF8",
  "Anniversary":   "#EF4444",
  "Collection":    "#10B981",
  "Limited Event": "#FACC15",
  "Personal":      "#EC4899",
};

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

const MONTHS  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW     = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const FILTERS = ["All","Active","Upcoming","Ended"];
const STATUS_ORDER = { Active: 0, Upcoming: 1, Ended: 2 };

/* ══════════════════════════════════════════════════════════════════════════════
   EventsPage
══════════════════════════════════════════════════════════════════════════════ */

export default function EventsPage() {
  const { currentUser } = useAuth();
  const eggs = useEasterEggs();
  // "Happy Birthday" easter egg — 4 consecutive clicks on the May 4th tile.
  // Guarded so it can't restart itself while its own animation is still
  // playing (only re-armable once EasterEggRoot clears activeEffect).
  const handleBirthdayClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "happybirthday") eggs?.trigger("happybirthday");
    },
  });

  // "Christmas" easter egg — 4 consecutive clicks on the December 25th tile.
  // Same re-trigger guard as above: ignored while its own animation is
  // still playing, re-armed once EasterEggRoot clears activeEffect.
  const handleChristmasClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "christmas") eggs?.trigger("christmas");
    },
  });

  // "Halloween" easter egg — 4 consecutive clicks on the October 31st tile.
  // Same re-trigger guard as above: ignored while its own animation is
  // still playing, re-armed once EasterEggRoot clears activeEffect.
  const handleHalloweenClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "halloween") eggs?.trigger("halloween");
    },
  });

  // "New Years Eve" easter egg — 4 consecutive clicks on the December 31st tile.
  // Same re-trigger guard as above: ignored while its own animation is
  // still playing, re-armed once EasterEggRoot clears activeEffect.
  const handleNewYearsClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "newyears") eggs?.trigger("newyears");
    },
  });

  // "April Fools" easter egg — 4 consecutive clicks on the April 1st tile.
  // Same re-trigger guard as above: ignored while its own animation is
  // still playing, re-armed once EasterEggRoot clears activeEffect.
  const handleAprilFoolsClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "aprilfools") eggs?.trigger("aprilfools");
    },
  });

  // "Valentines" easter egg — 4 consecutive clicks on the February 14th tile.
  // Same re-trigger guard as above: ignored while its own animation is
  // still playing, re-armed once EasterEggRoot clears activeEffect.
  const handleValentinesClick = useClickTrigger({
    times: 4,
    onComplete: () => {
      if (eggs?.activeEffect?.id !== "valentines") eggs?.trigger("valentines");
    },
  });

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
                        onClick={special?.label === "Overwatch Birthday" ? () => {
                          handleBirthdayClick();
                          if (currentUser) openAddOnDate(day);
                        } : special?.label === "Christmas Day" ? () => {
                          handleChristmasClick();
                          if (currentUser) openAddOnDate(day);
                        } : special?.label === "Halloween" ? () => {
                          handleHalloweenClick();
                          if (currentUser) openAddOnDate(day);
                        } : special?.label === "New Years Eve" ? () => {
                          handleNewYearsClick();
                          if (currentUser) openAddOnDate(day);
                        } : special?.label === "April Fools" ? () => {
                          handleAprilFoolsClick();
                          if (currentUser) openAddOnDate(day);
                        } : special?.label === "Valentines" ? () => {
                          handleValentinesClick();
                          if (currentUser) openAddOnDate(day);
                        } : currentUser ? () => openAddOnDate(day) : undefined}
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
