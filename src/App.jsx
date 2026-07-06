import { useCallback, useEffect, useMemo, useRef, useState, lazy, Suspense } from "react";
import { heroes } from "./data/heroes";
import { PAGE_ROUTES } from "./routes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { EasterEggProvider } from "./contexts/EasterEggContext";
import EasterEggRoot from "./components/easter-eggs/EasterEggRoot";
import { getAvatarSrc } from "./data/avatars";
import { getFriendRequests, acceptFriendRequest, declineFriendRequest, getFriends, getUserById, getTotalDMUnread } from "./data/storage";
import AuthModal from "./components/AuthPage";
import HeroSearch from "./components/HeroSearch";
import RoleFilter from "./components/RoleFilter";
import ComingSoon from "./components/ComingSoon";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AppNav from "./components/AppNav";
import UserMenu from "./components/UserMenu";
import NotificationsPanel from "./components/NotificationsPanel";
import FriendsListPanel from "./components/FriendsListPanel";
import Modal, { ModalHeader } from "./components/Modal";
import { toast } from "./utils/toast";
import { SOCIAL_FEATURES_ENABLED } from "./data/featureFlags";
import logo from "./assets/logo.png";
import "./index.css";
import "./styles/easter-eggs.css";

const HeroGrid = lazy(() => import("./components/HeroGrid"));
const HeroProfile = lazy(() => import("./components/HeroProfile"));
const RandomHeroSelector = lazy(() => import("./components/RandomHeroSelector"));
const CounterWatch = lazy(() => import("./components/CounterWatch"));
const MapsPage = lazy(() => import("./components/MapsPage"));
const CompetitiveGuide = lazy(() => import("./components/CompetitiveGuide"));
const CustomGames = lazy(() => import("./components/CustomGames"));
const TeamComps = lazy(() => import("./components/TeamComps"));
const TermsPage = lazy(() => import("./components/TermsPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const UIGuide = lazy(() => import("./components/UIGuide"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const WinLossTracker = lazy(() => import("./components/WinLossTracker"));
const HeroStats = lazy(() => import("./components/HeroStats"));
const DirectMessages = lazy(() => import("./components/DirectMessages"));
const EventsPage = lazy(() => import("./components/EventsPage"));
const AcademyHub = lazy(() => import("./components/academy/AcademyHub"));
const AcademyBanner = lazy(() => import("./components/AcademyBanner"));
const UpdatesBanner = lazy(() => import("./components/UpdatesBanner"));

function AcademyBannerSlot({ onOpenAcademy }) {
  return (
    <Suspense fallback={<div className="academy-banner-skeleton" />}>
      <AcademyBanner onOpenAcademy={onOpenAcademy} />
    </Suspense>
  );
}

function UpdatesBannerSlot() {
  return (
    <Suspense fallback={<div className="academy-banner-skeleton" />}>
      <UpdatesBanner />
    </Suspense>
  );
}

const PATCH_NOTES_URL = "https://overwatch.blizzard.com/en-us/news/patch-notes/";

const OFFICIAL_LINKS = [
  { title:"Overwatch Website",description:"Official news, hero pages, seasonal events, and game information direct from Blizzard.",url:"https://overwatch.blizzard.com/",label:"Visit Site",theme:"link-blizzard" },
  { title:"Overwatch on X",description:"Live game updates, patch previews, community highlights, and announcements from the official account.",url:"https://x.com/PlayOverwatch",label:"Open X",theme:"link-x" },
  { title:"Overwatch YouTube",description:"Animated shorts, trailers, developer updates, and esports content from the official channel.",url:"https://www.youtube.com/@PlayOverwatch",label:"Open YouTube",theme:"link-youtube" },
];
const MEDIA_LINKS = [
  { title:"Media Gallery",description:"Official Overwatch stories, artwork, cinematic shorts, and behind-the-scenes media from Blizzard.",url:"https://overwatch.blizzard.com/en-us/media/#stories",label:"Browse Gallery",theme:"link-media" },
];
const STATUS_LINKS = [
  { title:"Overwatch Status",description:"Real-time player reports of Overwatch outages, login issues, and lag spikes.",url:"https://downdetector.com/status/overwatch/",label:"Check Status",theme:"link-downdetector" },
  { title:"Battle.net Status",description:"Live reports of Battle.net launcher and authentication outages affecting all Blizzard games.",url:"https://downdetector.com/status/battle-net/",label:"Check Status",theme:"link-downdetector" },
  { title:"Steam Status",description:"Community reports of Steam platform outages, which can affect Overwatch on PC via Steam.",url:"https://downdetector.com/status/steam/",label:"Check Status",theme:"link-downdetector" },
];

const BASE_NAV = [
  "Home","Events","Competitive Guide","UI Guide","Heroes","Randomiser","CounterWatch","Team Comps",
  "Maps","Custom Games","Terms & Phrases","Win Tracker","Patch Notes",
];

const AUTH_PROTECTED = ["Win Tracker", "Hero Stats", "My Profile", "Academy"];

const ROUTE_PAGES = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([page, path]) => [path, page])
);
const pathForPage = (page) => PAGE_ROUTES[page] ?? "/";
const pageFromPath = (pathname) => ROUTE_PAGES[pathname] ?? "Home";

export default function App() {
  return (
    <AuthProvider>
      <EasterEggProvider>
        <AppInner />
        <EasterEggRoot />
      </EasterEggProvider>
    </AuthProvider>
  );
}

function AppInner() {
  const { currentUser, ready, logout } = useAuth();
  const [activePage, setActivePage]     = useState(() => pageFromPath(window.location.pathname));
  const [search, setSearch]             = useState("");
  const [filter, setFilter]             = useState("All");
  const [selectedHero, setSelectedHero] = useState(null);
  const [cwHero, setCwHero]             = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pendingPage = useRef(null);
  const [notifOpen, setNotifOpen]         = useState(false);
  const [dmOpen, setDmOpen]               = useState(false);
  const [dmUnread, setDmUnread]           = useState(() => currentUser ? getTotalDMUnread(currentUser.id) : 0);
  const [requests, setRequests]           = useState(() => currentUser ? getFriendRequests(currentUser.id) : []);
  const [userMenuOpen, setUserMenuOpen]     = useState(false);
  const [friendsListOpen, setFriendsListOpen] = useState(false);
  const [navOpen, setNavOpen]               = useState(false);
  const [viewingFriendId, setViewingFriendId] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  const toastTimer  = useRef(null);
  const [academyHeroId, setAcademyHeroId] = useState(null);

  const refreshRequests = useCallback(() => {
    if (currentUser) setRequests(getFriendRequests(currentUser.id));
  }, [currentUser]);

  const refreshDmUnread = useCallback(() => {
    if (currentUser) setDmUnread(getTotalDMUnread(currentUser.id));
  }, [currentUser]);

  useEffect(() => {
    window.addEventListener('focus', refreshRequests);
    window.addEventListener('sb-friends-updated', refreshRequests);
    return () => {
      window.removeEventListener('focus', refreshRequests);
      window.removeEventListener('sb-friends-updated', refreshRequests);
    };
  }, [refreshRequests]);

  useEffect(() => {
    window.addEventListener('sb-dm-updated', refreshDmUnread);
    return () => window.removeEventListener('sb-dm-updated', refreshDmUnread);
  }, [refreshDmUnread]);

  useEffect(() => {
    function onToast(e) {
      clearTimeout(toastTimer.current);
      setToastMsg(e.detail.message);
      toastTimer.current = setTimeout(() => setToastMsg(null), 3000);
    }
    window.addEventListener('sb-toast', onToast);
    return () => { window.removeEventListener('sb-toast', onToast); clearTimeout(toastTimer.current); };
  }, []);

  // Give the very first history entry a page so the initial popstate (mobile
  // back button on the landing page) has something to fall back to.
  useEffect(() => {
    window.history.replaceState({ page: activePage }, "", pathForPage(activePage));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally captures only the initial page, not every activePage change
  }, []);

  // Mirrors navigate()'s guards so the phone/browser back button moves between
  // in-app pages instead of leaving the site entirely.
  useEffect(() => {
    function onPopState(event) {
      const page = event.state?.page ?? pageFromPath(window.location.pathname);
      if (AUTH_PROTECTED.includes(page) && !currentUser) {
        pendingPage.current = page;
        setShowAuthModal(true);
        return;
      }
      if (page !== "My Profile") setViewingFriendId(null);
      setUserMenuOpen(false);
      setNavOpen(false);
      setActivePage(page);
      setSelectedHero(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [currentUser]);

  function handleAccept(fromId) {
    acceptFriendRequest(currentUser.id, fromId);
    refreshRequests();
    window.dispatchEvent(new CustomEvent('sb-friends-updated'));
    toast('Friend added!');
  }

  function handleDecline(fromId) {
    declineFriendRequest(currentUser.id, fromId);
    refreshRequests();
    toast('Request declined');
  }

  const filteredHeroes = useMemo(() =>
    heroes.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" || hero.role === filter;
      return matchesSearch && matchesFilter;
    }), [search, filter]);

  // If user logs out while on a protected page, go home
  const [prevCurrentUser, setPrevCurrentUser] = useState(currentUser);
  if (currentUser !== prevCurrentUser) {
    setPrevCurrentUser(currentUser);
    if (!currentUser && AUTH_PROTECTED.includes(activePage)) {
      setActivePage("Home");
    }
  }

  function navigate(page) {
    if (page === "Patch Notes") {
      window.open(PATCH_NOTES_URL, "_blank", "noopener,noreferrer");
      return;
    }
    if (AUTH_PROTECTED.includes(page) && !currentUser) {
      pendingPage.current = page;
      setShowAuthModal(true);
      return;
    }
    if (page !== "My Profile") setViewingFriendId(null);
    if (page === "CounterWatch") setCwHero(null);
    setUserMenuOpen(false);
    setNavOpen(false);
    setActivePage(page);
    setSelectedHero(null);
    window.history.pushState({ page }, "", pathForPage(page));
  }

  function openInCounterWatch(hero) {
    setCwHero(hero);
    setActivePage("CounterWatch");
    setSelectedHero(null);
    window.history.pushState({ page: "CounterWatch" }, "", pathForPage("CounterWatch"));
  }

  function handleAuthSuccess() {
    setShowAuthModal(false);
    if (pendingPage.current) {
      setActivePage(pendingPage.current);
      window.history.pushState({ page: pendingPage.current }, "", pathForPage(pendingPage.current));
      pendingPage.current = null;
    }
  }

  function closeAuthModal() {
    setShowAuthModal(false);
    pendingPage.current = null;
  }

  if (!ready) return null;

  const navItems = BASE_NAV;

  const avatarSrc = currentUser ? getAvatarSrc(currentUser.avatar) : null;

  return (
    <div className="app">
      <header className="hero-header">

        {/* Top-left button group: Notifications + Direct Messages */}
        {currentUser && (
          <div className="header-btns-left">
            <button
              type="button"
              className="notif-btn"
              onClick={() => { refreshRequests(); setNotifOpen(true); }}
              aria-label="Notifications"
              title="Notifications"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              {SOCIAL_FEATURES_ENABLED && requests.length > 0 && (
                <span className="notif-badge">{requests.length}</span>
              )}
            </button>

            <button
              type="button"
              className={`dm-btn${SOCIAL_FEATURES_ENABLED && dmUnread > 0 ? ' has-unread' : ''}`}
              onClick={() => { refreshDmUnread(); setDmOpen(true); }}
              aria-label="Direct Messages"
              title="Direct Messages"
            >
              {/* Counterclockwise arc with arrowhead — Recall-inspired (time-rewind) */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                <path d="M19 12A7 7 0 1 0 15.5 18" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"/>
                <polyline points="19,16.5 15.5,18 16.5,21.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {SOCIAL_FEATURES_ENABLED && dmUnread > 0 && (
                <span className="notif-badge">{dmUnread}</span>
              )}
            </button>
          </div>
        )}

        {/* User widget / Sign In — top-right */}
        {currentUser ? (
          <UserMenu
            currentUser={currentUser}
            avatarSrc={avatarSrc}
            open={userMenuOpen}
            setOpen={setUserMenuOpen}
            onMyProfile={() => { setUserMenuOpen(false); setViewingFriendId(null); navigate("My Profile"); }}
            onFriendsList={() => { setUserMenuOpen(false); setFriendsListOpen(true); }}
            onContactUs={() => { setUserMenuOpen(false); navigate("Contact"); }}
            onLogout={() => { setUserMenuOpen(false); logout(); }}
          />
        ) : (
          <button
            type="button"
            className="signin-widget"
            onClick={() => setShowAuthModal(true)}
          >
            Sign In
          </button>
        )}

        <div className="app-logo-wrap">
          <img src={logo} alt="SongBird Logo" className="app-logo" />
        </div>
        <p className="eyebrow">Unofficial Companion App for Overwatch</p>
        <h1>SONGBIRD</h1>
        <p className="tagline">Strategy • Stats • Counters • Team Comps</p>
      </header>

      <AppNav
        navItems={navItems}
        activePage={activePage}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        onNavigate={navigate}
      />

      <main className="main-shell">
      <div key={activePage} className="page-fade">
      <Suspense fallback={<div className="aca-loading">Loading…</div>}>

        {activePage === "Home" && (
          <section className="dashboard">
            <UpdatesBannerSlot />
            <div className="links-section">
              <h2 className="links-section-title">
                <span className="links-eyebrow">Blizzard</span>
                Official Resources
              </h2>
              <div className="links-grid">
                {OFFICIAL_LINKS.map(link => (
                  <div className={`link-card ${link.theme}`} key={link.title}>
                    <h3>{link.title}</h3>
                    <p>{link.description}</p>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-card-btn">{link.label} ↗</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="links-section">
              <h2 className="links-section-title">
                <span className="links-eyebrow">Blizzard</span>
                Media Gallery
              </h2>
              <p className="links-section-sub">Stories, artwork, cinematics, and behind-the-scenes content from the official Overwatch media hub.</p>
              <div className="links-grid">
                {MEDIA_LINKS.map(link => (
                  <div className={`link-card ${link.theme}`} key={link.title}>
                    <h3>{link.title}</h3>
                    <p>{link.description}</p>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-card-btn">{link.label} ↗</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="links-section">
              <h2 className="links-section-title">
                <span className="links-eyebrow">Downdetector</span>
                Service Status
              </h2>
              <p className="links-section-sub">Check if Overwatch or its supporting platforms are currently experiencing issues.</p>
              <div className="links-grid">
                {STATUS_LINKS.map(link => (
                  <div className={`link-card status-card ${link.theme}`} key={link.title}>
                    <h3>{link.title}</h3>
                    <p>{link.description}</p>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-card-btn">{link.label} ↗</a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activePage === "Heroes" && (
          <>
            <AcademyBannerSlot onOpenAcademy={() => navigate("Academy")} />
            <section className="control-panel">
              <h2>Hero Search</h2>
              <p>Search instantly or scroll manually through the full roster.</p>
              <HeroSearch search={search} setSearch={setSearch} />
              <RoleFilter filter={filter} setFilter={setFilter} />
            </section>
            <HeroProfile
              hero={selectedHero}
              onClose={() => setSelectedHero(null)}
              onOpenCounterWatch={openInCounterWatch}
              userId={currentUser?.id}
              onOpenHeroAcademy={currentUser ? (heroId) => {
                setSelectedHero(null);
                setAcademyHeroId(heroId);
                navigate("Academy");
              } : null}
            />
            <HeroGrid heroes={filteredHeroes} onSelectHero={setSelectedHero} />
          </>
        )}

        {activePage === "Randomiser"        && <RandomHeroSelector />}
        {activePage === "CounterWatch"      && (
          <>
            <AcademyBannerSlot onOpenAcademy={() => navigate("Academy")} />
            <CounterWatch initialHero={cwHero} />
          </>
        )}
        {activePage === "Team Comps"        && <TeamComps />}
        {activePage === "Maps"              && <MapsPage />}
        {activePage === "Events"            && <EventsPage />}
        {activePage === "Competitive Guide" && <CompetitiveGuide />}
        {activePage === "Custom Games"      && <CustomGames />}
        {activePage === "Terms & Phrases"   && <TermsPage />}
        {activePage === "Contact"           && <ContactPage />}
        {activePage === "UI Guide"          && <UIGuide />}
        {currentUser && activePage === "Win Tracker"  && (
          <>
            <AcademyBannerSlot onOpenAcademy={() => navigate("Academy")} />
            <WinLossTracker />
          </>
        )}
        {currentUser && activePage === "Hero Stats"   && <HeroStats onBack={() => navigate("My Profile")} />}
        {currentUser && activePage === "My Profile"   && <UserProfile viewingFriendId={viewingFriendId} setViewingFriendId={setViewingFriendId} onNavigateToStats={() => navigate("Hero Stats")} onOpenAcademy={() => navigate("Academy")} />}
        {currentUser && activePage === "Academy"      && (
          <Suspense fallback={<div className="aca-loading">Loading Academy…</div>}>
            <AcademyHub onBack={() => navigate("My Profile")} initialHeroId={academyHeroId} onClearInitialHeroId={() => setAcademyHeroId(null)} />
          </Suspense>
        )}

      </Suspense>
      </div>
      </main>

      <AuthModal
        open={showAuthModal}
        onClose={closeAuthModal}
        onSuccess={handleAuthSuccess}
      />

      {/* ── Friends list panel (from header dropdown) ── */}
      {friendsListOpen && (
        <FriendsListPanel
          onClose={() => setFriendsListOpen(false)}
          friendUsers={SOCIAL_FEATURES_ENABLED ? getFriends(currentUser.id).map(id => getUserById(id)).filter(Boolean) : []}
          onViewProfile={(friendId) => {
            setFriendsListOpen(false);
            setViewingFriendId(friendId);
            navigate("My Profile");
          }}
        />
      )}

      {/* ── Notification panel ── */}
      {notifOpen && (
        <NotificationsPanel
          onClose={() => setNotifOpen(false)}
          requests={requests}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}

      {/* ── Direct Messages panel ── */}
      {dmOpen && currentUser && (
        SOCIAL_FEATURES_ENABLED ? (
          <Suspense fallback={null}>
            <DirectMessages onClose={() => { setDmOpen(false); refreshDmUnread(); }} />
          </Suspense>
        ) : (
          <Modal onClose={() => setDmOpen(false)}>
            <ModalHeader title="Direct Messages" onClose={() => setDmOpen(false)} />
            <ComingSoon
              title="Messages — Coming Soon"
              description="Direct Messages will work across devices once SongBird has real account sync. For now this feature is on hold."
            />
          </Modal>
        )
      )}

      {/* ── Toast ── */}
      {toastMsg && <div className="sb-toast">{toastMsg}</div>}

      <ScrollToTopButton />
    </div>
  );
}
