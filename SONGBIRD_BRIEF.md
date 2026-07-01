# SONGBIRD — Project Brief

Unofficial Overwatch 2 companion web app. Not affiliated with Blizzard.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Language | JavaScript (no TypeScript) |
| Styling | Single flat `src/index.css` — no CSS modules, no Tailwind |
| Routing | Custom `activePage` state in `App.jsx` (no React Router used despite BrowserRouter wrapper in `main.jsx`) |

---

## Project Structure

```
src/
├── App.jsx                        # Root — routing via activePage state
├── main.jsx                       # Entry — wraps App in BrowserRouter (unused) + AuthProvider
├── index.css                      # All styles in one flat file
├── assets/
│   ├── logo.png
│   ├── heroes/                    # 52 hero portrait PNGs
│   ├── avatars/                   # 6 custom SVG avatars (wizard, robot, cat, knight, scientist, dragon)
│   ├── ui-guides/                 # gameplay-hud-guide.png, scoreboard-guide.png
│   └── competitive/               # competitive-overview.png, competitive-hero-skill-rating.png,
│                                  # competitive-modifiers.png, competitive-drives.png
├── contexts/
│   └── AuthContext.jsx            # Auth state + login/logout/register logic
├── components/
│   ├── HeroCard.jsx               # Single card in the hero grid
│   ├── HeroGrid.jsx               # Grid of HeroCard components
│   ├── HeroSearch.jsx             # Search input
│   ├── RoleFilter.jsx             # Tank / Damage / Support filter buttons
│   ├── HeroProfile.jsx            # Full hero modal + inline CounterWatch popup
│   ├── RandomHeroSelector.jsx     # Random hero roller
│   ├── CounterWatch.jsx           # Counter matchup tool + TipBanner
│   ├── MapsPage.jsx               # Map picks derived from hero data
│   ├── TeamComps.jsx              # 5-slot team builder + synergy detection
│   ├── CompetitiveGuide.jsx       # Ranked system explainer with image guides
│   ├── CustomGames.jsx            # Custom game browser with copy-code button
│   ├── TermsPage.jsx              # Overwatch glossary / terms & phrases
│   ├── UIGuide.jsx                # HUD and scoreboard visual guides
│   ├── AuthPage.jsx               # Login + register modal + avatar picker + confirmation step
│   ├── UserProfile.jsx            # Profile page — stats, hero breakdown, edit mode, friend system
│   ├── WinLossTracker.jsx         # Match logger with SVG graph and history list
│   ├── HeroStats.jsx              # Hero stats grid calculated from match history
│   ├── DirectMessages.jsx         # DM panel — conversation list, chat, emoji picker, reactions
│   └── EventsPage.jsx             # Event tracker — calendar view, list view, custom events
└── data/
    ├── heroes.json                # Source of truth — all 52 heroes, ~3200+ lines
    ├── heroes.js                  # Thin adapter: adds .image URLs
    ├── maps.json                  # 29 maps with name, type, location fields
    ├── events.json                # Official OW2 events with start/end dates and source URLs
    ├── tips.js                    # 34 sourced CounterWatch tips (cycles in TipBanner)
    ├── customGames.js             # Curated custom game modes with workshop codes
    ├── terms.js                   # Overwatch glossary entries
    ├── subroles.js                # Subrole definitions (Dive Tank, Poke Support, etc.)
    ├── heroSubroles.js            # Maps hero name → subrole
    ├── compStyles.js              # Composition archetype definitions
    ├── uiGuides.js                # Metadata for UI guide images
    ├── profanity.js               # Profanity filter for username registration
    └── storage.js                 # All localStorage helpers (auth, matches, friends, DMs, events)
```

---

## Routing

Single-page app. `activePage` state in `App.jsx` drives rendering inside `<main>`.

**Nav items (always visible):**
`Home | Events | Competitive Guide | UI Guide | Heroes | Randomiser | CounterWatch | Team Comps | Maps | Custom Games | Terms & Phrases | Win Tracker | Patch Notes ↗`

**Auth-protected pages (require login, show AuthModal if not signed in):**
`Win Tracker | Hero Stats | My Profile`

- **Patch Notes** opens `overwatch.blizzard.com/en-us/news/patch-notes/` in a new tab — does NOT change `activePage`.
- **Hero Stats** and **My Profile** are not in the main nav — accessed via the user menu dropdown or from the Win Tracker/Profile pages.

---

## Design System

```
Colors:
  --bg:      #06070a
  --panel:   #141821
  --panel2:  #1b202b
  --orange:  #ff9c00   ← primary accent
  --orange2: #ffb733
  --white:   #f4f4f4
  --grey:    #9da6b5
  --border:  #2a313f
  --tank:    #ff9c00
  --damage:  #ff4c4c
  --support: #26d07c

Fonts: Black Ops One (display headings), Rajdhani 400–700 (body text)

Key patterns:
  - Panel cards:     background linear-gradient(160deg, #181d27, #101319)
  - Left-border accents: 3–6px solid, colour = role or semantic intent
  - Role colouring:  .tank / .damage / .support classes
  - Hover glow:      box-shadow 0 0 Xpx rgba(255,156,0,.Y)
  - Page fade:       @keyframes pageFade — keyed on activePage via div.page-fade
  - Eyebrow labels:  .eyebrow — orange, uppercase, letter-spaced
  - Auth modals:     .auth-modal-overlay + .auth-modal-panel, z-index 100
  - Notification panel: .notif-panel — same overlay system as auth modal
```

---

## Auth System

Local-only accounts — no backend, no network requests. Everything in `localStorage`.

| Key | Contents |
|---|---|
| `sb_users` | JSON array of all user objects |
| `sb_session` | `{ userId }` of the currently logged-in user |
| `sb_matches_{userId}` | Array of logged match objects |
| `sb_friends_{userId}` | Array of friend user IDs |
| `sb_friendreqs_in_{userId}` | Inbound friend requests |
| `sb_friendreqs_out_{userId}` | Outbound friend requests |
| `sb_dm_{idA}__{idB}` | DM message array for a conversation (IDs sorted) |
| `sb_dm_unread_{userId}` | Map of conversation key → unread count |
| `sb_custom_events_{userId}` | User's personal calendar events |
| `sb_notif_{userId}` | Tracks which browser notifications have already fired |

**Password hashing:** SHA-256 via Web Crypto API (`crypto.subtle.digest`).

**User object shape:**
```json
{
  "id": "uuid",
  "username": "PlayerName",
  "passwordHash": "sha256hex",
  "avatar": "wizard",
  "createdAt": "ISO string"
}
```

**Avatars:** 6 choices — `wizard`, `robot`, `cat`, `knight`, `scientist`, `dragon`. SVG files in `src/assets/avatars/`. All original designs, no copyrighted characters. `getAvatarSrc(key)` exported from `AuthPage.jsx`.

**`AuthContext.jsx`** provides `{ currentUser, ready, login, logout, register }` to the whole app via `<AuthProvider>`.

---

## Social Features

### Friend System
- **Send request** — from UserProfile search panel; writes to recipient's `sb_friendreqs_in_*` and sender's `sb_friendreqs_out_*`
- **Accept / Decline** — via the bell (🔔) notification panel in the header top-left; fires `sb-friends-updated` custom event
- **Friends List** — accessible from the user menu dropdown; shows all friends with a "View Profile" button that navigates to their profile
- **Remove Friend** — available from within a friend's profile view

### Direct Messages
- Full conversation UI in a slide-in panel (`DirectMessages.jsx`)
- Message features: send, delete (unsent messages disappear; read messages show "deleted" state), emoji reactions, emoji picker with category tabs and search
- Unread badge on the DM button in the header (Recall-style clock icon)
- `sb-dm-updated` custom event keeps unread count in sync

### Notifications
- Bell button (top-left of header) shows badge count of pending friend requests
- Notification panel lists each request with Accept / Decline buttons
- `refreshRequests()` is called on window focus and on `sb-friends-updated` events

---

## Events Page (`EventsPage.jsx`)

**Two views:** Calendar (default) and List.

**Calendar view:**
- Full month calendar with prev/next month and year navigation, "Today" button
- Events shown as diagonal coloured stripes across their date range
- Logged-in users can click any date cell to add a personal event pre-filled with that date
- Legend at the bottom maps category colours

**List view:**
- Filter tabs: All / Active / Upcoming / Ended
- Each event rendered as a card (`EventCard`) with category pill, status pill, date range, and optional source link
- Clicking a card opens `EventPopup` with full details

**Custom (Personal) Events:**
- Logged-in users can add personal events via "+ Add Event" button or by clicking a calendar date
- Two-step form: fill details → review confirmation screen → save
- Colour picker (8 swatches) for personal event colour
- Edit and delete from the event popup (with delete confirmation step)
- "My Events" chip in the summary bar opens a popup of active/upcoming personal events

**Browser Notifications:**
- Fires a browser notification the day before and day of each personal event (if permission granted)
- "Enable Reminders" banner shown when permission is `default` (not yet decided)
- Notification state stored per-user in `sb_notif_{userId}` to avoid duplicate firing

**Official event data** sourced from Blizzard news posts and the Wikipedia Overwatch seasonal events article. Stored in `src/data/events.json`.

---

## CounterWatch Tip Banner

A cycling tip strip appears directly under the "CounterWatch" h2 heading, above the description text.

- **34 tips** in `src/data/tips.js`, sourced from: overwatch.fandom.com/wiki/Tips, eloking.com, ggrecon.com, screenrant.com, gamespot.com, immortalboost.com, mobalytics.gg, dotesports.com
- No invented or guessed tips — all sourced from published guides
- Auto-cycles every **11 seconds** (`TIP_INTERVAL = 11000`)
- Fade transition (280ms) between tips
- ‹ / › arrow buttons to cycle manually; clicking resets the auto-timer
- Shows current position: `n/34`
- Starts on a random tip each page load

---

## heroes.json — Full Data Structure

52 heroes total. Each hero object shape:

```json
{
  "id": "dva",
  "name": "D.Va",
  "role": "Tank",
  "health": 150,
  "armour": 350,
  "shields": 0,
  "difficulty": 2,
  "movementSpeed": "5.5 m/s",
  "lore": "...",
  "primaryWeapon": {
    "name": "Fusion Cannons",
    "type": "...",
    "damage": "...",
    "cooldown": "...",
    "description": "..."
  },
  "abilities": [
    { "name": "...", "type": "...", "damage": "...", "cooldown": "...", "description": "..." }
  ],
  "ultimate": { "name": "...", "description": "...", "damage": "..." },
  "counters":    ["Hero A", "Hero B"],
  "counteredBy": ["Hero C", "Hero D"],
  "synergies":   ["Hero E", "Hero F"],
  "strongMaps":  ["King's Row", "Dorado"],
  "weakMaps":    ["Circuit Royal", "Havana"],
  "perks": {
    "minor": [
      { "name": "Perk Name", "description": "Full effect text." },
      { "name": "Perk Name", "description": "Full effect text." }
    ],
    "major": [
      { "name": "Perk Name", "description": "Full effect text." },
      { "name": "Perk Name", "description": "Full effect text." }
    ]
  },
  "patchHistory": []
}
```

---

## Hero Roster (52 heroes)

### Tanks (14)
D.Va, Domina, Doomfist, Hazard, Junker Queen, Mauga, Orisa,
Ramattra, Reinhardt, Roadhog, Sigma, Winston, Wrecking Ball, Zarya

### Damage (24)
Anran, Ashe, Bastion, Cassidy, Echo, Emre, Freja, Genji, Hanzo,
Junkrat, Mei, Pharah, Reaper, Shion, Sierra, Sojourn, Soldier: 76,
Sombra, Symmetra, Torbjörn, Tracer, Vendetta, Venture, Widowmaker

### Support (14)
Ana, Baptiste, Brigitte, Illari, Jetpack Cat, Juno, Kiriko,
Lifeweaver, Lúcio, Mercy, Mizuki, Moira, Wuyang, Zenyatta

---

## Perk System

Introduced Season 15. In-match hero levelling unlocks perk choices:

- **Level 2 → Minor Perk** — choose 1 of 2 smaller upgrades
- **Level 3 → Major Perk** — choose 1 of 2 larger, ability-changing upgrades

All 52 heroes have perks fully populated in `heroes.json`.

**Sources used:**
- Classic OW2 heroes: Dexerto (verified Season 3, June 2026)
- Season 1 Conquest heroes (Domina, Anran, Emre, Freja, Shion, Sierra, Vendetta, Mizuki, Jetpack Cat, Wuyang): owperks.com
- Brigitte + Venture (absent from Dexerto at time of writing): owperks.com

---

## Pages Built

### Home
Links section with Official Resources (Blizzard website, X, YouTube), Media Gallery, and Service Status (Downdetector links for Overwatch, Battle.net, Steam).

### Events
Full event tracker — see Events Page section above.

### Competitive Guide (`CompetitiveGuide.jsx`)
Ranked system explainer using four official guide images:
`competitive-overview.png`, `competitive-hero-skill-rating.png`, `competitive-modifiers.png`, `competitive-drives.png`

### UI Guide (`UIGuide.jsx`)
Two annotated screenshots: HUD guide and Scoreboard guide.

### Heroes
Search + role filter → 52-hero grid. Clicking a card opens **HeroProfile modal** showing:
- Stats: Health, Armour, Shields, Difficulty
- Primary Weapon, Abilities, Ultimate
- Perks (Minor Level 2, Major Level 3) in a 2-column card layout
- Inline CounterWatch popup (counters / counteredBy / synergies with portrait chips)

### Randomiser
Party size 1–5, Open Queue / Role Queue toggle → rolls random heroes.

### CounterWatch (`CounterWatch.jsx`)
1. Tip banner directly under heading (auto-cycles every 11s)
2. Searchable hero grid — click to select
3. Modal overlay with three panels: Strong Against / Weak Against / Best Teammates
4. Each entry shows portrait chip + name; Escape key closes

### Team Comps (`TeamComps.jsx`)
- 5 role-locked slots: 1 Tank · 2 Damage · 2 Support
- Picker overlay per slot; already-picked heroes excluded
- Live synergy detection cross-referencing each hero's `synergies[]`
- Detected synergies shown as orange pills

### Maps (`MapsPage.jsx`)
- Data derived at runtime from `strongMaps[]`/`weakMaps[]` across all 52 heroes
- All 29 maps have hero coverage (9 previously empty maps filled in Session 3)
- Alphabetical grid of map cards; searchable by map name
- Hero chips colour-coded by role

### Custom Games (`CustomGames.jsx`)
Curated custom game modes with workshop codes; copy-to-clipboard button per mode.

### Terms & Phrases (`TermsPage.jsx`)
Overwatch glossary — game terms, callout phrases, role jargon.

### Win Tracker (`WinLossTracker.jsx`) — Auth required
- Log matches: result (Win/Loss), hero played, map, queue type, optional notes
- Stats bar: Wins / Losses / Win Rate / Streak
- SVG graph showing recent match history as coloured blocks
- Full match history list with edit and delete per entry

### Hero Stats (`HeroStats.jsx`) — Auth required
Hero stats grid calculated from the user's logged match history.

### My Profile (`UserProfile.jsx`) — Auth required
- Display and edit username, avatar, stats summary
- Hero breakdown showing most-played and best win-rate heroes
- Friend system: search users, send/cancel requests, view friend profiles, remove friends
- Viewing a friend's profile shows their public stats

### Patch Notes
Nav button opens Blizzard patch notes URL in a new tab. Does not change `activePage`.

---

## Header UI

**Top-left (logged in only):**
- Bell button — opens notification panel with pending friend requests (accept/decline)
- DM button (Recall-style clock icon) — opens DirectMessages panel; shows unread badge

**Top-right:**
- Logged out: "Sign In" button → opens AuthModal
- Logged in: User avatar + username dropdown with: My Profile / Friends List / Sign Out

**Mobile:**
- Hamburger button in the nav bar opens a slide-in mobile nav panel with backdrop

---

## Shared UI Patterns

**`.picker-overlay` + `.picker-panel`** — reused by TeamComps for hero selection modals.

**`.cw-chip`** — portrait + name row for CounterWatch results. Variant via `.strong` / `.weak` / `.synergy`.

**`.auth-modal-overlay`** — reused for auth, notifications, friends list, and DM panels.

**`.notif-panel`** — notification / friends list panel that uses the auth overlay system.

**`.sb-toast`** — small bottom-centre toast notification (e.g. "Friend added!", "Request declined").

**`page-fade`** — CSS fade animation on the `<div key={activePage}>` wrapper in App.jsx.

---

## Data Sources

| Source | Used for |
|---|---|
| Blizzard hero pages | Lore, ability names, hero confirmation |
| Dexerto perk guide (June 2026 / Season 3) | Classic hero perks |
| owperks.com | Conquest Season 1 perks, Brigitte, Venture |
| Community guides (Dexerto, eloking, gamedagger) | Stats — health, cooldowns, damage values |
| owherostats.com + counterwatch.gg (Season 3, June 2026) | Map hero coverage for 9 previously empty maps |
| overwatch.fandom.com/wiki/Tips | CounterWatch tips |
| eloking.com, ggrecon.com, screenrant.com, gamespot.com, immortalboost.com, mobalytics.gg, dotesports.com | CounterWatch tips |
| Blizzard news posts + Wikipedia OW seasonal events article | events.json official event dates |

---

## To-Do List

### Features
- [ ] **StatWatch page** — dedicated stat browser; search + role filter + large stat cards with numeric ability values
- [ ] **CompareHeroes page** — side-by-side hero stat comparison (stubs exist at `src/pages/CompareHeroes/` and `src/pages/StatWatch/` but are not yet wired into App.jsx)
- [ ] **HeroProfile — Patch History** — replace placeholder; render `patchHistory[]` as a dated timeline; populate data for recently changed heroes
- [ ] **Team Comps — curated presets** — "Meta Comps" tab with Dive/Poke/Brawl/Rush presets
- [ ] **Team Comps — counter threats** — after team is filled, show heroes from `counteredBy[]` of picks as threats
- [ ] **CounterWatch — click-through** — clicking a chip hero immediately switches the selection to that hero
- [ ] **Randomiser — exclude list** — let users mark heroes they don't play

### Data
- [ ] Add `gameMode` field to `maps.json` (Escort / Control / Hybrid / Push / Flashpoint / Clash)
- [ ] MapsPage: add game-mode filter tabs once maps.json has the field
- [ ] Populate `patchHistory[]` for heroes with notable recent changes
- [ ] Add `tier` / `metaRating` field per hero (manually curated each season) for a future Tier List page
- [ ] Verify all 52 heroes' perk descriptions are still current

### Polish
- [ ] Mobile layout pass — CounterWatch panels and profile page need tighter spacing on small screens
- [ ] Skeleton loading placeholders for hero portrait images
- [ ] HeroProfile modal — reset scroll position to top on open
- [ ] Add ability keybind labels in HeroProfile (LMB / RMB / Shift / E / Q)

### Technical
- [ ] Consider virtualising the hero grid if performance degrades
- [ ] Set up deployment (Vercel or GitHub Pages)

---

## Session Log

### Session 1 (prior)
- React + Vite scaffolded; `heroes.json` created; `heroes.js` adapter written
- `HeroGrid`, `HeroCard`, `HeroSearch`, `RoleFilter` components built
- `HeroProfile` modal built with stats, abilities, ultimate
- `RandomHeroSelector` built
- Home dashboard and nav built
- Initial hero data filled for Tank and Damage roles

### Session 2 (26 June 2026)
- All 11 Support hero stats fully populated; Jetpack Cat, Mizuki, Wuyang confirmed and populated
- All 52 heroes verified — 0 remaining "Soon" placeholders
- All 52 heroes' Minor + Major perks researched and written into `heroes.json`
- **HeroProfile**: Perks section built (2-column card layout, Level 2 Minor / Level 3 Major)
- **CounterWatch page** built — search, hero grid, three result panels
- **Compare page** built — picker overlays, stat table, winner highlighting
- **Maps page** built — derived from hero data
- **Team Comps page** built — role-locked slots, synergy detection
- **Patch Notes** nav button wired to external URL
- `SONGBIRD_BRIEF.md` created

### Session 3 (date unrecorded)
- **Auth system** built: local accounts, SHA-256 hashing, `AuthContext.jsx`, `storage.js`
- **AuthPage.jsx**: login + register modal with avatar picker (6 SVG avatars) and confirmation step
- **UserProfile.jsx**: profile page with stats, hero breakdown, edit mode
- **WinLossTracker.jsx**: match logger with SVG graph and history
- **HeroStats.jsx**: hero stats grid from match history
- **Friends system**: send/accept/decline/cancel/remove, friend requests, friends list panel
- **DirectMessages.jsx**: full DM panel with emoji picker, reactions, delete, unread badge
- **EventsPage.jsx**: calendar + list view, official events, custom personal events, browser notifications
- `events.json` created with official OW2 event data
- `storage.js` created with all localStorage helpers
- **HeroProfile** updated with inline CounterWatch popup
- **Nav** updated: Events, Win Tracker added; auth-protected pages gated behind login
- Header updated: notification bell, DM button, user menu dropdown, friends list
- Mobile hamburger nav and slide-in panel added
- Toast notification system (`sb-toast`, `sb-toast` custom event)
- Map hero data completed for all 29 maps (9 previously empty: Antarctic Peninsula, Blizzard World, Colosseo, Hanaoka, Hollywood, Paraíso, Runasapi, Samoa, Throne of Anubis)
- `profanity.js` filter added for username validation
- `subroles.js`, `heroSubroles.js`, `compStyles.js`, `uiGuides.js`, `terms.js`, `customGames.js` data files added
- **Competitive Guide**, **UI Guide**, **Custom Games**, **Terms & Phrases** pages built
- Stub pages created (not yet wired): `src/pages/CompareHeroes/`, `src/pages/StatWatch/`, `src/pages/PatchNotes/`

### Session 4 (28 June 2026)
- **CounterWatch Tip Banner** built (`TipBanner` component in `CounterWatch.jsx`)
- `src/data/tips.js` created — 34 tips sourced from overwatch.fandom.com, eloking.com, ggrecon.com, screenrant.com, gamespot.com, immortalboost.com, mobalytics.gg, dotesports.com
- Tips cover all roles: D.Va, Genji, Sigma, Ana, Reinhardt, Kiriko, Zenyatta, Baptiste, Lúcio, Zarya, Orisa, Sombra, Roadhog, Cassidy, Tracer, Hanzo, Mercy, Junker Queen, Junkrat, Wrecking Ball, Widowmaker, Winston, Pharah, Soldier: 76
- Banner placed directly under the CounterWatch h2, above the description text
- Auto-cycles every 11 seconds; ‹/› buttons for manual cycling; resets timer on manual click
- Fade transition (280ms); starts on random tip; shows position counter (n/34)
