import { getSentNotifications, saveSentNotifications } from "../../data/storage";
import { parseDate } from "../../data/calendarHelpers";

export function fireNotifications(userId, customRaw) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  const now   = new Date(); now.setHours(0, 0, 0, 0);
  const tmrw  = new Date(now); tmrw.setDate(tmrw.getDate() + 1);
  const nowMs  = now.getTime();
  const tmrwMs = tmrw.getTime();

  let sent = getSentNotifications(userId);
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

  if (changed) saveSentNotifications(userId, sent);
}
