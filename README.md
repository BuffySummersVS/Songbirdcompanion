# SongBird

An unofficial companion web app for Overwatch 2 — hero reference, counter-picking, team building, event tracking, and a match/win-rate tracker, wrapped in a dark, animated UI. Not affiliated with or endorsed by Blizzard Entertainment.

## Features

- **Heroes** — searchable, role-filterable grid of all 52 heroes, each with a full profile modal (stats, weapon, abilities, ultimate, perks, lore).
- **CounterWatch** — pick a hero to see who they counter, who counters them, and their best teammates, plus a rotating banner of sourced gameplay tips.
- **Team Comps** — build a 5-role-locked team and get live synergy detection based on each hero's real synergy data.
- **Randomiser** — roll a random hero for yourself or a full party (Open Queue or Role Queue).
- **Maps** — all 29 maps with hero coverage (strong/weak picks) derived from the hero dataset.
- **Events** — a full calendar and list view of official Overwatch seasonal events, with custom personal events, browser reminders, and light seasonal theming (Halloween, Winter Wonderland, Pride Month, and more) on the calendar.
- **Custom Games** — curated workshop game modes with one-click code copying.
- **Competitive Guide / UI Guide / Terms & Phrases** — reference pages for the ranked system, HUD/scoreboard, and Overwatch glossary.
- **Win Tracker & Hero Stats** *(account required)* — log match results and see your win rate, streaks, and per-hero performance over time.
- **SongBird Academy** *(account required)* — a structured lesson/quiz curriculum (fundamentals through advanced macro play) with XP, streaks, badges, and hero-specific mastery tracks.
- **Profiles** *(account required)* — customize your avatar, main heroes, and competitive rank display.

> **Friends and Direct Messages are currently disabled ("Coming Soon").** Accounts are stored locally in each browser with no server, so these features can't sync between two people on separate devices yet — see [Accounts & data](#accounts--data) below.

## Getting started

```bash
npm install
npm run dev       # start the dev server
```

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build locally
npm run lint       # eslint
npm test           # run the test suite once
npm run test:watch # watch mode
```

## Tech stack

- **React 19** + **Vite 8**, plain JavaScript (no TypeScript)
- Single global stylesheet (`src/index.css`) — no CSS modules or Tailwind
- **Vitest** for unit tests
- Client-side only — no backend, no build-time API keys required

## Accounts & data

Accounts are local to your browser: usernames and (hashed) passwords, matches, custom events, Academy progress, and profile settings are all stored in `localStorage`, not on a server. That means:

- Your data stays on your device and isn't sent anywhere.
- It doesn't sync across browsers or devices, and clearing site data or switching browsers will lose it — there's currently no export/backup option.
- Friends and Direct Messages only ever worked if two accounts happened to share the same browser, so they're currently gated behind a `SOCIAL_FEATURES_ENABLED` flag (`src/data/featureFlags.js`) showing a "Coming Soon" placeholder until real cross-device account sync exists.

## Project structure

```
src/
├── App.jsx              # Root component — page routing via activePage state
├── main.jsx              # Entry point, wraps App in an error boundary + AuthProvider
├── index.css              # All application styles
├── contexts/              # AuthContext (login/register/session)
├── components/            # Page and feature components
│   └── academy/           # SongBird Academy lesson/quiz UI
├── academy/                # Academy's pure logic (XP, streaks, recommendations)
└── data/                  # Hero/map/event datasets + localStorage helpers
```

## Disclaimer

SongBird is a fan-made, unofficial project. Overwatch and all associated names, images, and logos are property of Blizzard Entertainment. This project is not affiliated with, endorsed by, or sponsored by Blizzard.
