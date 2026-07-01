import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  getMatches,
  getFriends, removeFriend,
  sendFriendRequest, cancelFriendRequest, getOutboundRequests,
  searchUsers, getUserById,
  getAcademyProgress,
} from '../data/storage';

function toast(msg) { window.dispatchEvent(new CustomEvent('sb-toast', { detail: { message: msg } })); }
import { containsProfanity } from '../data/profanity';
import { heroes } from '../data/heroes';
import { PasswordInput } from './AuthPage';
import { getAvatarSrc } from '../data/avatars';
import AvatarPicker from './AvatarPicker.jsx';
import { PATHS } from '../data/academy/paths.js';
import { BADGES } from '../data/academy/badges.js';
import { emptyProgress, pathCompletionPercent } from '../academy/engine.js';
import { getHeroMasteryRank } from '../academy/masteryEngine.js';
import { getAcademyBadges, getBadgePanelPrefs, setBadgePanelPrefs } from '../data/storage';
import CompetitiveRanksPanel from './CompetitiveRanksPanel.jsx';
import MainHeroesPanel from './MainHeroesPanel.jsx';

const LearningInsights = lazy(() => import('./academy/LearningInsights.jsx'));

const QUEUES = ['Competitive', 'Quick Play'];

function calcStats(matches) {
  const wins   = matches.filter(m => m.result === 'Win').length;
  const losses = matches.filter(m => m.result === 'Loss').length;
  const total  = wins + losses;
  const winPct = total === 0 ? null : Math.round((wins / total) * 100);
  return { wins, losses, total, winPct };
}

function WinPct({ value }) {
  if (value === null) return <span className="up-stat-value up-stat-na">—</span>;
  const color = value >= 50 ? 'var(--support)' : 'var(--damage)';
  return <span className="up-stat-value" style={{ color }}>{value}%</span>;
}

function ProfileStats({ matches, onViewFullStats }) {
  const overall = calcStats(matches);

  const queueStats = QUEUES.map(q => ({
    queue: q,
    ...calcStats(matches.filter(m => (m.queue || m.queueType) === q)),
  }));

  const heroStats = useMemo(() => {
    const map = {};
    matches.forEach(m => {
      if (!map[m.heroId]) map[m.heroId] = { heroId: m.heroId, heroName: m.heroName, wins: 0, losses: 0 };
      if (m.result === 'Win') map[m.heroId].wins++;
      else map[m.heroId].losses++;
    });
    return Object.values(map)
      .map(h => ({ ...h, total: h.wins + h.losses, winPct: Math.round((h.wins / (h.wins + h.losses)) * 100) }))
      .sort((a, b) => b.total - a.total);
  }, [matches]);

  return (
    <>
      <div className="up-stats-overview">
        <div className="up-stat-box stat-glow-white">
          <span className="up-stat-label">Matches Logged</span>
          <span className="up-stat-value">{overall.total}</span>
        </div>
        <div className="up-stat-box stat-glow-green">
          <span className="up-stat-label">Wins</span>
          <span className="up-stat-value" style={{ color: 'var(--support)' }}>{overall.wins}</span>
        </div>
        <div className="up-stat-box stat-glow-red">
          <span className="up-stat-label">Losses</span>
          <span className="up-stat-value" style={{ color: 'var(--damage)' }}>{overall.losses}</span>
        </div>
        <div className="up-stat-box stat-glow-blue">
          <span className="up-stat-label">Win Rate</span>
          {overall.winPct === null
            ? <span className="up-stat-value up-stat-na">—</span>
            : <span className="up-stat-value" style={{ color: '#60a5fa' }}>{overall.winPct}%</span>}
        </div>
      </div>

      <div className="profile-section up-queue-section">
        <h3>Queue Breakdown</h3>
        <div className="up-queue-grid">
          {queueStats.map(q => (
            <div key={q.queue} className="up-queue-card">
              <span className="up-queue-name">{q.queue}</span>
              <div className="up-queue-stats">
                <span><strong>{q.total}</strong> <em>Played</em></span>
                <span style={{ color: 'var(--support)' }}><strong>{q.wins}</strong> <em>W</em></span>
                <span style={{ color: 'var(--damage)' }}><strong>{q.losses}</strong> <em>L</em></span>
                <WinPct value={q.winPct} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-section up-hero-section">
        <div className="up-section-title-row">
          <h3>Hero Win Rates</h3>
          {onViewFullStats && (
            <button type="button" className="up-stats-link-btn" onClick={onViewFullStats}>
              Full Hero Stats →
            </button>
          )}
        </div>
        {heroStats.length === 0 ? (
          <p className="up-empty">No matches logged yet.</p>
        ) : (
          <div className="up-hero-stats-grid">
            {heroStats.map(h => {
              const heroData = heroes.find(hr => hr.id === h.heroId);
              return (
                <div key={h.heroId} className={`up-hero-stat-card ${heroData?.role?.toLowerCase() ?? ''}`}>
                  {heroData && <img src={heroData.image} alt={h.heroName} className="up-hero-stat-portrait" />}
                  <div className="up-hero-stat-info">
                    <span className="up-hero-stat-name">{h.heroName}</span>
                    <span className="up-hero-stat-sub">{h.total} played · {h.wins}W {h.losses}L</span>
                  </div>
                  <WinPct value={h.winPct} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

function FriendProfile({ friendId, onBack }) {
  const friend  = getUserById(friendId);
  const matches = useMemo(() => getMatches(friendId), [friendId]);

  if (!friend) {
    return (
      <div className="up-page">
        <button type="button" className="up-back-btn" onClick={onBack}>← Back to My Profile</button>
        <p className="up-empty">This user could not be found.</p>
      </div>
    );
  }

  return (
    <div className="up-page">
      <button type="button" className="up-back-btn" onClick={onBack}>← Back to My Profile</button>

      <div className="up-header-card">
        <div className="up-avatar-area">
          <div className="up-avatar-wrap">
            <img src={getAvatarSrc(friend.avatar)} alt="Avatar" className="up-avatar" />
          </div>
        </div>
        <div className="up-header-info">
          <div className="up-friend-profile-badge">Friend's Profile</div>
          <h2 className="up-username">{friend.username}</h2>
          <p className="up-joined">
            Member since {new Date(friend.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <div className="up-header-actions">
            <AcademyBadgePanel userId={friend.id} readOnly />
            <CompetitiveRanksPanel userId={friend.id} readOnly />
            <MainHeroesPanel userId={friend.id} readOnly />
          </div>
        </div>
      </div>

      <ProfileStats matches={matches} />
    </div>
  );
}

function HeroMasteryInsights({ userId }) {
  const rawProgress = getAcademyProgress(userId);
  if (!rawProgress) return null;
  const progress = { ...emptyProgress(), ...rawProgress };
  const earnedBadges = getAcademyBadges(userId) || {};

  const heroPaths = PATHS.filter(p => p.category === 'hero-academy' && !p.comingSoon && p.lessons.length > 0);
  if (heroPaths.length === 0) return null;

  const heroProgress = heroPaths.map(p => {
    const pct = pathCompletionPercent(p, progress);
    const rank = getHeroMasteryRank(p, progress, earnedBadges, BADGES);
    const done = p.lessons.filter(id => progress.lessonsCompleted?.includes(id)).length;
    // Approximate recency: index of last completed lesson in lessonsCompleted array
    const lastIdx = p.lessons.reduce((max, lid) => {
      const idx = progress.lessonsCompleted?.lastIndexOf(lid) ?? -1;
      return idx > max ? idx : max;
    }, -1);
    return { path: p, pct, rank, done, total: p.lessons.length, lastIdx };
  });

  const started = heroProgress.filter(h => h.pct > 0);
  const completed = heroProgress.filter(h => progress.pathsCompleted?.includes(h.path.id));
  const totalPct = heroPaths.length > 0
    ? Math.floor(heroProgress.reduce((sum, h) => sum + h.pct, 0) / heroPaths.length)
    : 0;

  const topHeroes = [...started].sort((a, b) => b.pct - a.pct).slice(0, 3);
  const recentHeroes = [...started].sort((a, b) => b.lastIdx - a.lastIdx).slice(0, 2);

  // Featured hero badges (earned, with heroId)
  const heroBadges = BADGES.filter(b => b.heroId && earnedBadges[b.id]);

  if (started.length === 0 && heroBadges.length === 0) return null;

  return (
    <div className="profile-section up-hm-section">
      <h3>Hero Mastery</h3>

      {/* Summary strip */}
      <div className="up-hm-summary">
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{heroPaths.length}</span>
          <span className="up-hm-stat-label">Available</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{started.length}</span>
          <span className="up-hm-stat-label">Started</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{completed.length}</span>
          <span className="up-hm-stat-label">Completed</span>
        </div>
        <div className="up-hm-stat">
          <span className="up-hm-stat-val">{totalPct}%</span>
          <span className="up-hm-stat-label">Avg Progress</span>
        </div>
      </div>

      {/* Top mastered heroes */}
      {topHeroes.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Top Mastered</p>
          <div className="up-hm-hero-list">
            {topHeroes.map(({ path, pct, rank }) => {
              const heroData = heroes.find(h => h.id === path.heroId);
              return (
                <div key={path.id} className="up-hm-hero-row">
                  {heroData && <img src={heroData.image} alt={path.label} className="up-hm-hero-portrait" />}
                  <div className="up-hm-hero-info">
                    <span className="up-hm-hero-name">{path.label}</span>
                    <span className="up-hm-hero-rank" style={{ color: rank.color }}>{rank.rank}</span>
                  </div>
                  <div className="up-hm-hero-bar-wrap">
                    <div className="up-hm-hero-bar">
                      <div className="up-hm-hero-fill" style={{ width: `${pct}%`, background: rank.color }} />
                    </div>
                    <span className="up-hm-hero-pct">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recently progressed */}
      {recentHeroes.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Recently Progressed</p>
          <div className="up-hm-hero-list">
            {recentHeroes.map(({ path, done, total, rank }) => {
              const heroData = heroes.find(h => h.id === path.heroId);
              return (
                <div key={path.id} className="up-hm-hero-row">
                  {heroData && <img src={heroData.image} alt={path.label} className="up-hm-hero-portrait" />}
                  <div className="up-hm-hero-info">
                    <span className="up-hm-hero-name">{path.label}</span>
                    <span className="up-hm-hero-rank" style={{ color: rank.color }}>{rank.rank}</span>
                  </div>
                  <span className="up-hm-hero-lessons">{done}/{total} lessons</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Featured hero badges */}
      {heroBadges.length > 0 && (
        <div className="up-hm-group">
          <p className="up-hm-group-label">Hero Badges Earned</p>
          <div className="up-hm-badges">
            {heroBadges.slice(0, 6).map(b => (
              <div key={b.id} className="up-hm-badge-chip">
                <span className="up-hm-badge-icon">{b.icon}</span>
                <span className="up-hm-badge-name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const BADGE_COLORS = [
  { label: 'Orange', value: '#ff9c00' },
  { label: 'Blue',   value: '#60a5fa' },
  { label: 'Purple', value: '#a78bfa' },
  { label: 'Green',  value: '#4ade80' },
  { label: 'Pink',   value: '#f472b6' },
  { label: 'Red',    value: '#f87171' },
];

function BadgeCustomizeModal({ prefs, allEarned, onSave, onClose }) {
  const [color, setColor] = useState(prefs.color || '#ff9c00');
  const [selected, setSelected] = useState(() => {
    const ids = prefs.selectedBadgeIds?.length > 0
      ? prefs.selectedBadgeIds
      : allEarned.slice(0, 9).map(b => b.id);
    return new Set(ids);
  });

  function toggleBadge(id) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 9) {
        next.add(id);
      } else {
        // At capacity — swap out the oldest selected badge to make room
        const oldest = next.values().next().value;
        next.delete(oldest);
        next.add(id);
      }
      return next;
    });
  }

  function handleSave() {
    onSave({ color, selectedBadgeIds: [...selected] });
    onClose();
  }

  return (
    <div className="bcm-overlay" onClick={onClose}>
      <div className="bcm-panel" onClick={e => e.stopPropagation()}>
        <div className="bcm-header">
          <h3 className="bcm-title">Customise Badge Panel</h3>
          <button type="button" className="bcm-close" onClick={onClose}>✕</button>
        </div>

        <p className="bcm-section-label">Accent Colour</p>
        <div className="bcm-colors">
          {BADGE_COLORS.map(c => (
            <button
              key={c.value}
              type="button"
              className={`bcm-color-swatch${color === c.value ? ' active' : ''}`}
              style={{ background: c.value, boxShadow: color === c.value ? `0 0 0 3px ${hexToRgba(c.value, 0.5)}` : 'none' }}
              onClick={() => setColor(c.value)}
              title={c.label}
            />
          ))}
        </div>

        <p className="bcm-section-label">
          Select Badges to Display <span className="bcm-count-hint">({selected.size} / 9{selected.size >= 9 ? ' — selecting another will swap out the oldest' : ''})</span>
        </p>
        {allEarned.length === 0 ? (
          <p className="bcm-empty">No badges earned yet.</p>
        ) : (
          <div className="bcm-badge-grid">
            {allEarned.map(b => {
              const isSelected = selected.has(b.id);
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`bcm-badge-item${isSelected ? ' selected' : ''}`}
                  style={isSelected ? { borderColor: color, background: hexToRgba(color, 0.12) } : {}}
                  onClick={() => toggleBadge(b.id)}
                >
                  <span className="bcm-badge-icon">{b.icon}</span>
                  <span className="bcm-badge-name">{b.name}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="bcm-actions">
          <button type="button" className="bcm-cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="bcm-save" style={{ background: color }} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

function AcademyBadgePanel({ userId, readOnly = false }) {
  const [prefs, setPrefs] = useState(() => getBadgePanelPrefs(userId));
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const earnedBadges = getAcademyBadges(userId) || {};
  const allEarned = BADGES.filter(b => earnedBadges[b.id]);
  const totalCount = allEarned.length;

  const displayIds = prefs.selectedBadgeIds?.length > 0
    ? prefs.selectedBadgeIds
    : allEarned.slice(0, 9).map(b => b.id);
  const displayed = allEarned.filter(b => displayIds.includes(b.id));

  const color = prefs.color || '#ff9c00';

  function savePrefs(newPrefs) {
    setBadgePanelPrefs(userId, newPrefs);
    setPrefs(newPrefs);
  }

  return (
    <>
      <div
        className="up-badge-panel"
        style={{ background: hexToRgba(color, 0.07), borderColor: hexToRgba(color, 0.3) }}
      >
        <div className="up-badge-panel-header">
          <span className="up-badge-panel-title" style={{ color }}>
            Academy Badges{totalCount > 0 && <span className="up-badge-panel-count"> ({totalCount})</span>}
          </span>
          {!readOnly && (
            <button type="button" className="up-badge-panel-edit-btn" onClick={() => setCustomizeOpen(true)} title="Customise">✏️</button>
          )}
        </div>
        {allEarned.length === 0 ? (
          <p className="up-badge-panel-empty">
            {readOnly ? 'No Academy badges earned yet.' : 'Complete Academy lessons and quizzes to earn badges here.'}
          </p>
        ) : (
          <div className="up-badge-panel-list">
            {displayed.map(b => (
              <div key={b.id} className="up-badge-panel-item">
                <span className="up-badge-panel-icon">{b.icon}</span>
                <span className="up-badge-panel-name" style={{ color }}>{b.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {!readOnly && customizeOpen && (
        <BadgeCustomizeModal
          prefs={prefs}
          allEarned={allEarned}
          onSave={savePrefs}
          onClose={() => setCustomizeOpen(false)}
        />
      )}
    </>
  );
}

export default function UserProfile({ viewingFriendId, setViewingFriendId, onNavigateToStats, onOpenAcademy }) {
  const { currentUser, logout, updateProfile } = useAuth();
  const matches = useMemo(() => getMatches(currentUser.id), [currentUser.id]);

  const [editMode, setEditMode]         = useState(false);
  const [editUsername, setEditUsername] = useState(currentUser.username);
  const [editPassword, setEditPassword] = useState('');
  const [editConfirm, setEditConfirm]   = useState('');
  const [editError, setEditError]       = useState('');
  const [editBusy, setEditBusy]         = useState(false);
  const [editAvatar, setEditAvatar]     = useState(currentUser.avatar);
  const [avatarPickerOpen, setAvatarPickerOpen] = useState(false);

  const [friendIds, setFriendIds]           = useState(() => getFriends(currentUser.id));
  const [sentReqs, setSentReqs]             = useState(() => new Set(getOutboundRequests(currentUser.id)));
  const [friendAddOpen, setFriendAddOpen]   = useState(false);
  const [friendQuery, setFriendQuery]       = useState('');
  const [searchResults, setSearchResults]   = useState([]);
  const [confirmRemoveId, setConfirmRemoveId] = useState(null);
  const [confirmLogout, setConfirmLogout]     = useState(false);

  useEffect(() => {
    if (!friendAddOpen) return;
    function onKey(e) { if (e.key === 'Escape') closeFriendModal(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [friendAddOpen]);

  // Refresh friend list when a request is accepted from the notification panel
  useEffect(() => {
    function onUpdate() {
      setFriendIds(getFriends(currentUser.id));
      setSentReqs(new Set(getOutboundRequests(currentUser.id)));
    }
    window.addEventListener('sb-friends-updated', onUpdate);
    return () => window.removeEventListener('sb-friends-updated', onUpdate);
  }, [currentUser.id]);

  function closeFriendModal() {
    setFriendAddOpen(false);
    setFriendQuery('');
    setSearchResults([]);
  }

  function handleFriendSearch(e) {
    const q = e.target.value;
    setFriendQuery(q);
    setSearchResults(searchUsers(q));
  }

  function handleSendRequest(userId) {
    sendFriendRequest(currentUser.id, userId);
    setSentReqs(s => new Set([...s, userId]));
    toast('Friend request sent!');
  }

  function handleCancelRequest(userId) {
    cancelFriendRequest(currentUser.id, userId);
    setSentReqs(s => { const n = new Set(s); n.delete(userId); return n; });
    toast('Request cancelled');
  }

  function handleRemoveFriend(userId) {
    setConfirmRemoveId(userId);
  }

  function doRemoveFriend(userId) {
    removeFriend(currentUser.id, userId);
    setFriendIds(getFriends(currentUser.id));
    setConfirmRemoveId(null);
    window.dispatchEvent(new CustomEvent('sb-friends-updated'));
    toast('Friend removed');
  }

  async function handleSave() {
    setEditError('');
    const trimmed = editUsername.trim();
    if (!trimmed) { setEditError('Username cannot be empty.'); return; }
    if (trimmed.length < 3 || trimmed.length > 20) { setEditError('Username must be 3–20 characters.'); return; }
    if (containsProfanity(trimmed)) { setEditError('That username contains inappropriate language.'); return; }
    if (editPassword && editPassword.length < 6) { setEditError('Password must be at least 6 characters.'); return; }
    if (editPassword && editPassword !== editConfirm) { setEditError('Passwords do not match.'); return; }

    setEditBusy(true);
    try {
      const updates = { username: trimmed, avatar: editAvatar };
      if (editPassword) updates.password = editPassword;
      await updateProfile(updates);
      setEditMode(false);
      setEditPassword('');
      setEditConfirm('');
      toast('Profile saved!');
    } catch (err) {
      setEditError(err.message);
    } finally {
      setEditBusy(false);
    }
  }

  function cancelEdit() {
    setEditMode(false);
    setEditUsername(currentUser.username);
    setEditPassword('');
    setEditConfirm('');
    setEditError('');
    setEditAvatar(currentUser.avatar);
  }

  const avatarSrc = getAvatarSrc(editMode ? editAvatar : currentUser.avatar);

  if (viewingFriendId) {
    return <FriendProfile friendId={viewingFriendId} onBack={() => setViewingFriendId(null)} />;
  }

  return (
    <div className="up-page">

      {/* ── Profile header ── */}
      <div className="up-header-card">
        <div className="up-avatar-area">
          <div className="up-avatar-wrap">
            <img src={avatarSrc} alt="Avatar" className="up-avatar" />
            {editMode && (
              <button type="button" className="up-avatar-change-btn" onClick={() => setAvatarPickerOpen(true)}>
                Change
              </button>
            )}
          </div>
        </div>

        <div className="up-header-info">
          {editMode ? (
            <div className="up-edit-fields">
              <div className="auth-field">
                <label className="auth-label">Username</label>
                <input
                  className="auth-input"
                  value={editUsername}
                  onChange={e => setEditUsername(e.target.value)}
                  maxLength={20}
                />
                <span className="auth-hint">{editUsername.trim().length}/20</span>
              </div>
              <div className="auth-field">
                <label className="auth-label">New Password <span className="auth-hint">(leave blank to keep current)</span></label>
                <PasswordInput value={editPassword} onChange={e => setEditPassword(e.target.value)} placeholder="New password" autoComplete="new-password" />
              </div>
              <div className="auth-field">
                <label className="auth-label">Confirm New Password</label>
                <PasswordInput value={editConfirm} onChange={e => setEditConfirm(e.target.value)} placeholder="Repeat new password" autoComplete="new-password" />
              </div>
              {editError && <p className="auth-error">{editError}</p>}
              <div className="up-edit-actions">
                <button type="button" className="up-save-btn" onClick={handleSave} disabled={editBusy}>
                  {editBusy ? 'Saving…' : 'Save Changes'}
                </button>
                <button type="button" className="up-cancel-btn" onClick={cancelEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="up-username">{currentUser.username}</h2>
              <p className="up-joined">Member since {new Date(currentUser.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <div className="up-header-actions">
                <button type="button" className="up-edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
                <button type="button" className="up-logout-btn" onClick={() => setConfirmLogout(true)}>Log Out</button>
                <AcademyBadgePanel userId={currentUser.id} />
                <CompetitiveRanksPanel userId={currentUser.id} />
                <MainHeroesPanel userId={currentUser.id} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Stats ── */}
      <ProfileStats matches={matches} onViewFullStats={onNavigateToStats} />

      {/* ── SongBird Academy ── */}
      {onOpenAcademy && (
        <div className="profile-section up-academy-section">
          <div className="up-academy-card">
            <div className="up-academy-icon">🎓</div>
            <div className="up-academy-info">
              <h3 className="up-academy-title">SongBird Academy</h3>
              <p className="up-academy-desc">Learn Overwatch strategy through guided lessons, quizzes, and badges.</p>
            </div>
            <button type="button" className="up-academy-btn" onClick={onOpenAcademy}>
              Open Academy →
            </button>
          </div>
        </div>
      )}

      {/* ── Learning Insights (owner only) ── */}
      {!viewingFriendId && (
        <Suspense fallback={null}>
          <LearningInsights userId={currentUser.id} />
        </Suspense>
      )}
      {!viewingFriendId && <HeroMasteryInsights userId={currentUser.id} />}

      {/* ── Friends ── */}
      <div className="profile-section up-friends-section">
        <div className="up-friends-header">
          <h3>Friends</h3>
          <button type="button" className="up-add-friend-btn" onClick={() => setFriendAddOpen(true)}>
            + Add Friend
          </button>
        </div>

        {friendIds.length === 0 ? (
          <p className="up-empty">No friends added yet. Use the Add Friend button to find other players.</p>
        ) : (
          <div className="up-friends-list">
            {friendIds.map(fid => {
              const friend = getUserById(fid);
              if (!friend) return null;
              return (
                <div key={fid} className="up-friend-row">
                  <img src={getAvatarSrc(friend.avatar)} alt={friend.username} className="up-friend-avatar" />
                  <span className="up-friend-name">{friend.username}</span>
                  <div className="up-friend-row-actions">
                    <button type="button" className="up-view-friend-btn" onClick={() => setViewingFriendId(fid)}>
                      View Profile
                    </button>
                    <button type="button" className="up-remove-friend-btn" onClick={() => handleRemoveFriend(fid)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Avatar picker overlay ── */}
      {avatarPickerOpen && (
        <div className="picker-overlay" onClick={() => setAvatarPickerOpen(false)}>
          <div className="picker-panel" onClick={e => e.stopPropagation()}>
            <h3 className="picker-title">Choose Avatar</h3>
            <AvatarPicker value={editAvatar} onChange={setEditAvatar} onError={setEditError} />
            <button type="button" className="auth-submit-btn" style={{ marginTop: '20px' }} onClick={() => setAvatarPickerOpen(false)}>Done</button>
          </div>
        </div>
      )}

      {/* ── Add Friend modal ── */}
      {friendAddOpen && (
        <div className="auth-modal-overlay" onClick={closeFriendModal}>
          <div className="auth-modal-panel up-friend-modal" onClick={e => e.stopPropagation()}>
            <div className="auth-modal-header">
              <span className="auth-modal-title">Add Friend</span>
              <button type="button" className="auth-modal-close" onClick={closeFriendModal} aria-label="Close">✕</button>
            </div>
            <p className="up-friend-search-hint">Search for players by their username to add them to your friends list.</p>
            <input
              className="auth-input"
              placeholder="Search username…"
              value={friendQuery}
              onChange={handleFriendSearch}
              autoFocus
            />
            <div className="up-friend-results">
              {friendQuery.trim() !== '' && searchResults.length === 0 && (
                <p className="up-friend-no-results">No players found matching "{friendQuery.trim()}".</p>
              )}
              {searchResults.map(user => {
                const isMe     = user.id === currentUser.id;
                const isFriend = friendIds.includes(user.id);
                const isSent   = sentReqs.has(user.id);
                return (
                  <div key={user.id} className="up-friend-result-row">
                    <img src={getAvatarSrc(user.avatar)} alt={user.username} className="up-friend-avatar" />
                    <span className="up-friend-name">{user.username}</span>
                    {isMe ? (
                      <span className="up-friend-tag">That's you</span>
                    ) : isFriend ? (
                      <span className="up-friend-tag up-friend-tag-added">Friends</span>
                    ) : isSent ? (
                      <button type="button" className="up-cancel-req-btn" onClick={() => handleCancelRequest(user.id)}>
                        Cancel Request
                      </button>
                    ) : (
                      <button type="button" className="up-add-btn" onClick={() => handleSendRequest(user.id)}>
                        + Add
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── Confirm logout ── */}
      {confirmLogout && (
        <div className="confirm-overlay" onClick={() => setConfirmLogout(false)}>
          <div className="confirm-panel" onClick={e => e.stopPropagation()}>
            <h3 className="confirm-title">Sign Out</h3>
            <p className="confirm-sub">Are you sure you want to sign out of your account?</p>
            <div className="confirm-actions">
              <button type="button" className="confirm-back-btn" onClick={() => setConfirmLogout(false)}>
                Stay Signed In
              </button>
              <button type="button" className="up-remove-confirm-btn" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirm remove friend ── */}
      {confirmRemoveId && (() => {
        const target = getUserById(confirmRemoveId);
        return (
          <div className="confirm-overlay" onClick={() => setConfirmRemoveId(null)}>
            <div className="confirm-panel" onClick={e => e.stopPropagation()}>
              <h3 className="confirm-title">Remove Friend</h3>
              <p className="confirm-sub">
                Remove <strong>{target?.username ?? 'this player'}</strong> from your friends list?
              </p>
              <div className="confirm-actions">
                <button type="button" className="confirm-back-btn" onClick={() => setConfirmRemoveId(null)}>
                  Cancel
                </button>
                <button type="button" className="up-remove-confirm-btn" onClick={() => doRemoveFriend(confirmRemoveId)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}
