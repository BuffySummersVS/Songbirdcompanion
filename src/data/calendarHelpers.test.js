import { describe, it, expect } from 'vitest';
import {
  TODAY, parseDate, formatDate, toISO, getStatus, getWeeks, getEventsOnDay,
  getDayGlow, getSeasonalClass, getSpecialDate,
} from './calendarHelpers.js';

describe('parseDate / formatDate / toISO', () => {
  it('parses a YYYY-MM-DD string into a local Date at midnight', () => {
    const d = parseDate('2026-03-05');
    expect(d.getFullYear()).toBe(2026);
    expect(d.getMonth()).toBe(2); // 0-indexed: March
    expect(d.getDate()).toBe(5);
  });

  it('treats missing/"Unknown" dates as null', () => {
    expect(parseDate(null)).toBeNull();
    expect(parseDate(undefined)).toBeNull();
    expect(parseDate('Unknown')).toBeNull();
  });

  it('formatDate renders a readable date, and "TBA" for unknown ones', () => {
    expect(formatDate('2026-03-05')).toBe('5 Mar 2026');
    expect(formatDate('Unknown')).toBe('TBA');
    expect(formatDate(null)).toBe('TBA');
  });

  it('toISO round-trips with parseDate', () => {
    const original = '2026-12-25';
    expect(toISO(parseDate(original))).toBe(original);
  });

  it('toISO zero-pads single-digit months and days', () => {
    const d = new Date(2026, 0, 5); // Jan 5
    expect(toISO(d)).toBe('2026-01-05');
  });
});

describe('getStatus', () => {
  function daysFromToday(offset) {
    const d = new Date(TODAY);
    d.setDate(d.getDate() + offset);
    return toISO(d);
  }

  it('is "Upcoming" when the start date is in the future', () => {
    expect(getStatus({ startDate: daysFromToday(5), endDate: daysFromToday(10) })).toBe('Upcoming');
  });

  it('is "Active" when today falls within the start/end range', () => {
    expect(getStatus({ startDate: daysFromToday(-5), endDate: daysFromToday(5) })).toBe('Active');
  });

  it('is "Active" on the exact start and end day boundaries', () => {
    expect(getStatus({ startDate: daysFromToday(0), endDate: daysFromToday(5) })).toBe('Active');
    expect(getStatus({ startDate: daysFromToday(-5), endDate: daysFromToday(0) })).toBe('Active');
  });

  it('is "Active" (ongoing) when there is no end date', () => {
    expect(getStatus({ startDate: daysFromToday(-5), endDate: 'Unknown' })).toBe('Active');
  });

  it('is "Ended" when the end date is in the past', () => {
    expect(getStatus({ startDate: daysFromToday(-10), endDate: daysFromToday(-1) })).toBe('Ended');
  });
});

describe('getWeeks', () => {
  it('returns full 7-day weeks that fully cover the requested month', () => {
    const weeks = getWeeks(2026, 1); // February 2026 (0-indexed month)
    weeks.forEach(week => expect(week).toHaveLength(7));

    const allDays = weeks.flat();
    // every day-of-week column stays consistent (grid never skips a weekday)
    weeks.forEach(week => {
      week.forEach((day, i) => expect(day.getDay()).toBe(i));
    });

    // the actual month's days are all present somewhere in the grid
    const daysInFeb2026 = new Date(2026, 2, 0).getDate();
    for (let d = 1; d <= daysInFeb2026; d++) {
      expect(allDays.some(day => day.getFullYear() === 2026 && day.getMonth() === 1 && day.getDate() === d)).toBe(true);
    }
  });

  it('starts on a Sunday and ends on a Saturday', () => {
    const weeks = getWeeks(2026, 6); // July 2026
    expect(weeks[0][0].getDay()).toBe(0);
    expect(weeks[weeks.length - 1][6].getDay()).toBe(6);
  });
});

describe('getEventsOnDay', () => {
  const events = [
    { id: 'a', startDate: '2026-06-16', endDate: '2026-08-11' },
    { id: 'b', startDate: '2026-07-01', endDate: 'Unknown' }, // no end = still ongoing far into the future
    { id: 'c', startDate: '2026-01-01', endDate: '2026-01-31' }, // already ended by July
  ];

  it('includes events whose range covers the given day, inclusive of both ends', () => {
    const onStart = getEventsOnDay(events, parseDate('2026-06-16'));
    expect(onStart.map(e => e.id)).toContain('a');

    const onEnd = getEventsOnDay(events, parseDate('2026-08-11'));
    expect(onEnd.map(e => e.id)).toContain('a');
  });

  it('excludes events outside their date range', () => {
    const dayIds = getEventsOnDay(events, parseDate('2026-07-15')).map(e => e.id);
    expect(dayIds).not.toContain('c');
  });

  it('treats a missing endDate as never-ending', () => {
    const farOut = getEventsOnDay(events, parseDate('2030-01-01')).map(e => e.id);
    expect(farOut).toContain('b');
  });
});

describe('getDayGlow', () => {
  it('returns null for a day with no events', () => {
    expect(getDayGlow([])).toBeNull();
  });

  it('returns the glow colour for a single event\'s category', () => {
    expect(getDayGlow([{ category: 'Holiday' }])).toBe('56,189,248');
  });

  it('picks the highest-priority category when multiple events overlap', () => {
    // CATEGORY_PRIORITY order is Season, Anniversary, Collection, Holiday, Crossover, Limited Event, Personal
    const glow = getDayGlow([{ category: 'Personal' }, { category: 'Season' }, { category: 'Holiday' }]);
    expect(glow).toBe('245,158,11'); // Season wins
  });

  it('returns null for an unrecognized category', () => {
    expect(getDayGlow([{ category: 'NotARealCategory' }])).toBeNull();
  });
});

describe('getSeasonalClass', () => {
  it('matches a themed title case-insensitively', () => {
    expect(getSeasonalClass([{ title: 'Halloween Terror 2024' }])).toBe('evc-day--halloween');
    expect(getSeasonalClass([{ title: 'winter WONDERLAND spectacular' }])).toBe('evc-day--winter');
  });

  it('returns null when no event title matches a theme', () => {
    expect(getSeasonalClass([{ title: 'Season 3: Into the Tiger\'s Den' }])).toBeNull();
    expect(getSeasonalClass([])).toBeNull();
  });

  it('returns the first matching theme when multiple events are present', () => {
    const result = getSeasonalClass([
      { title: 'Regular Season Event' },
      { title: 'Overwatch 10th Anniversary' },
    ]);
    expect(result).toBe('evc-day--anniversary');
  });
});

describe('getSpecialDate', () => {
  it('flags Valentine\'s Day (Feb 14)', () => {
    expect(getSpecialDate(new Date(2026, 1, 14))).toEqual({ className: 'evc-day--valentine', label: 'Valentines' });
  });

  it('flags April Fools (Apr 1)', () => {
    expect(getSpecialDate(new Date(2026, 3, 1))).toEqual({ className: 'evc-day--circus', label: 'April Fools' });
  });

  it('flags every day in June as Pride, but only labels the 1st', () => {
    expect(getSpecialDate(new Date(2026, 5, 1))).toEqual({ className: 'evc-day--pride', label: 'Pride Month' });
    const midJune = getSpecialDate(new Date(2026, 5, 15));
    expect(midJune.className).toBe('evc-day--pride');
    expect(midJune.label).toBeUndefined();
  });

  it('flags Halloween (Oct 31), Christmas (Dec 25), and New Year\'s Eve (Dec 31)', () => {
    expect(getSpecialDate(new Date(2026, 9, 31))).toEqual({ className: 'evc-day--halloween31', label: 'Halloween' });
    expect(getSpecialDate(new Date(2026, 11, 25))).toEqual({ className: 'evc-day--christmas', label: 'Christmas Day' });
    expect(getSpecialDate(new Date(2026, 11, 31))).toEqual({ className: 'evc-day--sparkle', label: 'New Years Eve' });
  });

  it('flags the Overwatch Birthday (May 4)', () => {
    expect(getSpecialDate(new Date(2026, 4, 4))).toEqual({ className: 'evc-day--sparkle', label: 'Overwatch Birthday' });
  });

  it('returns null for an ordinary date', () => {
    expect(getSpecialDate(new Date(2026, 6, 15))).toBeNull();
  });
});
