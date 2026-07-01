import { useCallback, useEffect, useMemo, useRef, useState, lazy, Suspense } from "react";
import { heroes } from "./data/heroes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { getAvatarSrc } from "./data/avatars";
import { getFriendRequests, acceptFriendRequest, declineFriendRequest, getFriends, getUserById, getTotalDMUnread } from "./data/storage";
import AuthModal from "./components/AuthPage";
import HeroGrid from "./components/HeroGrid";
import HeroSearch from "./components/HeroSearch";
import RoleFilter from "./components/RoleFilter";
import HeroProfile from "./components/HeroProfile";
import RandomHeroSelector from "./components/RandomHeroSelector";
import CounterWatch from "./components/CounterWatch";
import MapsPage from "./components/MapsPage";
import CompetitiveGuide from "./components/CompetitiveGuide";
import CustomGames from "./components/CustomGames";
import TeamComps from "./components/TeamComps";
import TermsPage from "./components/TermsPage";
import UIGuide from "./components/UIGuide";
import UserProfile from "./components/UserProfile";
import WinLossTracker from "./components/WinLossTracker";
import HeroStats from "./components/HeroStats";
import DirectMessages from "./components/DirectMessages";
import EventsPage from "./components/EventsPage";
import ComingSoon from "./components/ComingSoon";
import { SOCIAL_FEATURES_ENABLED } from "./data/featureFlags";
import logo from "./assets/logo.png";
import "./index.css";

const AcademyHub = lazy(() => import("./components/academy/AcademyHub"));

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

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}

function AppInner() {
  const { currentUser, ready, logout } = useAuth();
  const [activePage, setActivePage]     = useState("Home");
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
  const userMenuRef  = useRef(null);
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
    if (!notifOpen) return;
    function onKey(e) { if (e.key === 'Escape') setNotifOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [notifOpen]);

  // Close user-menu dropdown on outside click or Escape
  useEffect(() => {
    if (!userMenuOpen) return;
    function onKey(e) { if (e.key === 'Escape') setUserMenuOpen(false); }
    function onMouse(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    }
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onMouse);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onMouse);
    };
  }, [userMenuOpen]);

  useEffect(() => {
    if (!friendsListOpen) return;
    function onKey(e) { if (e.key === 'Escape') setFriendsListOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [friendsListOpen]);

  useEffect(() => {
    if (!navOpen) return;
    function onKey(e) { if (e.key === 'Escape') setNavOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navOpen]);

  useEffect(() => {
    function onToast(e) {
      clearTimeout(toastTimer.current);
      setToastMsg(e.detail.message);
      toastTimer.current = setTimeout(() => setToastMsg(null), 3000);
    }
    window.addEventListener('sb-toast', onToast);
    return () => { window.removeEventListener('sb-toast', onToast); clearTimeout(toastTimer.current); };
  }, []);

  function handleAccept(fromId) {
    acceptFriendRequest(currentUser.id, fromId);
    refreshRequests();
    window.dispatchEvent(new CustomEvent('sb-friends-updated'));
    window.dispatchEvent(new CustomEvent('sb-toast', { detail: { message: 'Friend added!' } }));
  }

  function handleDecline(fromId) {
    declineFriendRequest(currentUser.id, fromId);
    refreshRequests();
    window.dispatchEvent(new CustomEvent('sb-toast', { detail: { message: 'Request declined' } }));
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
  }

  function openInCounterWatch(hero) {
    setCwHero(hero);
    setActivePage("CounterWatch");
    setSelectedHero(null);
  }

  function handleAuthSuccess() {
    setShowAuthModal(false);
    if (pendingPage.current) {
      setActivePage(pendingPage.current);
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
          <div className="user-menu-wrap" ref={userMenuRef}>
            <button
              type="button"
              className={`user-widget${userMenuOpen ? ' active' : ''}`}
              onClick={() => setUserMenuOpen(o => !o)}
              title={`Signed in as ${currentUser.username}`}
              aria-haspopup="true"
              aria-expanded={userMenuOpen}
            >
              <img src={avatarSrc} alt="Your avatar" className="user-widget-avatar" />
              <span className="user-widget-name">{currentUser.username}</span>
              <span className="user-menu-caret" aria-hidden="true">{userMenuOpen ? '▲' : '▼'}</span>
            </button>

            {userMenuOpen && (
              <div className="user-menu-dropdown">
                <button
                  type="button"
                  className="user-menu-item"
                  onClick={() => { setUserMenuOpen(false); setViewingFriendId(null); navigate("My Profile"); }}
                >
                  <span className="user-menu-icon">👤</span>
                  My Profile
                </button>
                <button
                  type="button"
                  className="user-menu-item"
                  onClick={() => { setUserMenuOpen(false); setFriendsListOpen(true); }}
                >
                  <span className="user-menu-icon">👥</span>
                  Friends List
                </button>
                <div className="user-menu-divider" />
                <button
                  type="button"
                  className="user-menu-item user-menu-item--danger"
                  onClick={() => { setUserMenuOpen(false); logout(); }}
                >
                  <span className="user-menu-icon">🚪</span>
                  Sign Out
                </button>
              </div>
            )}
          </div>
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

      <nav className="app-nav">
        {navItems.map(item => (
          <button
            key={item}
            type="button"
            className={`nav-button${activePage === item ? " active" : ""}${item === "Patch Notes" ? " nav-external" : ""}`}
            onClick={() => navigate(item)}
          >
            {item}{item === "Patch Notes" ? " ↗" : ""}
          </button>
        ))}

        {/* Mobile hamburger */}
        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setNavOpen(o => !o)}
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
        >
          {navOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>

        {/* Mobile nav panel + backdrop */}
        {navOpen && (
          <>
            <div className="mobile-nav-backdrop" onClick={() => setNavOpen(false)} />
            <div className="mobile-nav-panel">
              {navItems.map(item => (
                <button
                  key={item}
                  type="button"
                  className={`mobile-nav-item${activePage === item ? " active" : ""}${item === "Patch Notes" ? " nav-external" : ""}`}
                  onClick={() => navigate(item)}
                >
                  {item}{item === "Patch Notes" ? " ↗" : ""}
                </button>
              ))}
            </div>
          </>
        )}
      </nav>

      <main className="main-shell">
      <div key={activePage} className="page-fade">

        {activePage === "Home" && (
          <section className="dashboard">
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
        {activePage === "CounterWatch"      && <CounterWatch initialHero={cwHero} />}
        {activePage === "Team Comps"        && <TeamComps />}
        {activePage === "Maps"              && <MapsPage />}
        {activePage === "Events"            && <EventsPage />}
        {activePage === "Competitive Guide" && <CompetitiveGuide />}
        {activePage === "Custom Games"      && <CustomGames />}
        {activePage === "Terms & Phrases"   && <TermsPage />}
        {activePage === "UI Guide"          && <UIGuide />}
        {currentUser && activePage === "Win Tracker"  && <WinLossTracker />}
        {currentUser && activePage === "Hero Stats"   && <HeroStats onBack={() => navigate("My Profile")} />}
        {currentUser && activePage === "My Profile"   && <UserProfile viewingFriendId={viewingFriendId} setViewingFriendId={setViewingFriendId} onNavigateToStats={() => navigate("Hero Stats")} onOpenAcademy={() => navigate("Academy")} />}
        {currentUser && activePage === "Academy"      && (
          <Suspense fallback={<div className="aca-loading">Loading Academy…</div>}>
            <AcademyHub onBack={() => navigate("My Profile")} initialHeroId={academyHeroId} onClearInitialHeroId={() => setAcademyHeroId(null)} />
          </Suspense>
        )}

      </div>
      </main>

      <AuthModal
        open={showAuthModal}
        onClose={closeAuthModal}
        onSuccess={handleAuthSuccess}
      />

      {/* ── Friends list panel (from header dropdown) ── */}
      {friendsListOpen && (() => {
        const friendUsers = SOCIAL_FEATURES_ENABLED
          ? getFriends(currentUser.id).map(id => getUserById(id)).filter(Boolean)
          : [];
        return (
          <div className="auth-modal-overlay" onClick={() => setFriendsListOpen(false)}>
            <div className="notif-panel" onClick={e => e.stopPropagation()}>
              <div className="auth-modal-header">
                <span className="auth-modal-title">Friends List</span>
                <button type="button" className="auth-modal-close" onClick={() => setFriendsListOpen(false)} aria-label="Close">✕</button>
              </div>

              {!SOCIAL_FEATURES_ENABLED ? (
                <ComingSoon
                  title="Friends — Coming Soon"
                  description="Friends will work across devices once SongBird has real account sync. For now this feature is on hold."
                />
              ) : friendUsers.length === 0 ? (
                <div className="notif-empty">
                  <p>Your friends list is empty.</p>
                  <p>Go to My Profile and use the Add Friend button to find other players.</p>
                </div>
              ) : (
                <div className="notif-list">
                  {friendUsers.map(friend => (
                    <div key={friend.id} className="notif-item">
                      <img src={getAvatarSrc(friend.avatar)} alt={friend.username} className="notif-avatar" />
                      <div className="notif-text">
                        <strong>{friend.username}</strong>
                      </div>
                      <div className="notif-actions">
                        <button
                          type="button"
                          className="notif-accept-btn"
                          onClick={() => {
                            setFriendsListOpen(false);
                            setViewingFriendId(friend.id);
                            navigate("My Profile");
                          }}
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ── Notification panel ── */}
      {notifOpen && (
        <div className="auth-modal-overlay" onClick={() => setNotifOpen(false)}>
          <div className="notif-panel" onClick={e => e.stopPropagation()}>
            <div className="auth-modal-header">
              <span className="auth-modal-title">Notifications</span>
              <button type="button" className="auth-modal-close" onClick={() => setNotifOpen(false)} aria-label="Close">✕</button>
            </div>

            {!SOCIAL_FEATURES_ENABLED ? (
              <ComingSoon
                title="Friend Requests — Coming Soon"
                description="Friend requests will show up here once SongBird has real account sync across devices."
              />
            ) : requests.length === 0 ? (
              <div className="notif-empty">
                <p>No new notifications.</p>
                <p>When someone sends you a friend request it will appear here.</p>
              </div>
            ) : (
              <div className="notif-list">
                {requests.map(req => (
                  <div key={req.fromId} className="notif-item">
                    <img
                      src={getAvatarSrc(req.fromAvatar)}
                      alt={req.fromUsername}
                      className="notif-avatar"
                    />
                    <div className="notif-text">
                      <strong>{req.fromUsername}</strong> wants to be your friend
                    </div>
                    <div className="notif-actions">
                      <button
                        type="button"
                        className="notif-accept-btn"
                        onClick={() => handleAccept(req.fromId)}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="notif-decline-btn"
                        onClick={() => handleDecline(req.fromId)}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Direct Messages panel ── */}
      {dmOpen && currentUser && (
        SOCIAL_FEATURES_ENABLED ? (
          <DirectMessages onClose={() => { setDmOpen(false); refreshDmUnread(); }} />
        ) : (
          <div className="auth-modal-overlay" onClick={() => setDmOpen(false)}>
            <div className="notif-panel" onClick={e => e.stopPropagation()}>
              <div className="auth-modal-header">
                <span className="auth-modal-title">Direct Messages</span>
                <button type="button" className="auth-modal-close" onClick={() => setDmOpen(false)} aria-label="Close">✕</button>
              </div>
              <ComingSoon
                title="Messages — Coming Soon"
                description="Direct Messages will work across devices once SongBird has real account sync. For now this feature is on hold."
              />
            </div>
          </div>
        )
      )}

      {/* ── Toast ── */}
      {toastMsg && <div className="sb-toast">{toastMsg}</div>}
    </div>
  );
}
