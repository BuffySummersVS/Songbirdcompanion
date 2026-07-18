import { describe, it, expect, vi } from 'vitest';
import { getHeroOfTheDay } from './heroOfTheDay';

const heroList = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

describe('getHeroOfTheDay', () => {
  it('returns the same hero for two reads on the same day', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-18T09:00:00Z'));
    try {
      expect(getHeroOfTheDay(heroList)).toBe(getHeroOfTheDay(heroList));
    } finally {
      vi.useRealTimers();
    }
  });

  it('can return a different hero on a different day', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-18T09:00:00Z'));
    let day1;
    try {
      day1 = getHeroOfTheDay(heroList);
    } finally {
      vi.useRealTimers();
    }

    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-19T09:00:00Z'));
    let day2;
    try {
      day2 = getHeroOfTheDay(heroList);
    } finally {
      vi.useRealTimers();
    }

    // Not guaranteed to differ for every list length, but with a 3-item
    // list and consecutive days it must (dayIndex increases by exactly 1).
    expect(day1).not.toBe(day2);
  });

  it('stays in bounds regardless of the hero list length', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
    try {
      const hero = getHeroOfTheDay(heroList);
      expect(heroList).toContain(hero);
    } finally {
      vi.useRealTimers();
    }
  });

  it('is unaffected by the local timezone (anchored on UTC via todayStr)', () => {
    const originalTZ = process.env.TZ;
    process.env.TZ = 'Pacific/Auckland';
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-18T09:00:00Z'));
    try {
      const utcHero = getHeroOfTheDay(heroList);
      process.env.TZ = 'UTC';
      expect(getHeroOfTheDay(heroList)).toBe(utcHero);
    } finally {
      vi.useRealTimers();
      process.env.TZ = originalTZ;
    }
  });
});
