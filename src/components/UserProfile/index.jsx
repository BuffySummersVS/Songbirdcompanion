import { useEffect, useState, lazy, Suspense } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  getMatches,
  getFriends, removeFriend,
  sendFriendRequest, cancelFriendRequest, getOutboundRequests,
  searchUsers, getUserById,
} from '../../data/storage';

async function resolveFriendUsers(userId) {
  const ids = await getFriends(userId);
  const users = await Promise.all(ids.map(id => getUserById(id)));
  return users.filter(Boolean);
}

import { toast } from '../../utils/toast';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { containsProfanity } from '../../data/profanity';
import { PasswordInput } from '../AuthPage';
import { getAvatarSrc } from '../../data/avatars';
import ComingSoon from '../ComingSoon';
import Modal, { ModalHeader } from '../Modal';
import { FRIENDS_ENABLED } from '../../data/featureFlags';
import AvatarPicker from '../AvatarPicker.jsx';
import CompetitiveRanksPanel from '../CompetitiveRanksPanel.jsx';
import MainHeroesPanel from '../MainHeroesPanel.jsx';
import ProfileStats from './ProfileStats';
import FriendProfile from './FriendProfile';
import HeroMasteryInsights from './HeroMasteryInsights';
import AcademyBadgePanel from './AcademyBadgePanel';
import EasterEggSection from '../easter-eggs/EasterEggSection';

const LearningInsights = lazy(() => import('../academy/LearningInsights.jsx'));

export default function UserProfile({ viewingFriendId, setViewingFriendId, onNavigateToStats, onOpenAcademy }) {
  const { currentUser, logout, updateProfile } = useAuth();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getMatches(currentUser.id).then(m => { if (!cancelled) setMatches(m); });
    return () => { cancelled = true; };
  }, [currentUser.id]);

  const [editMode, setEditMode]         = useState(false);
  const [editUsername, setEditUsername] = useState(currentUser.username);
  const [editPassword, setEditPassword] = useState('');
  const [editConfirm, setEditConfirm]   = useState('');
  const [editError, setEditError]       = useState('');
  const [editBusy, setEditBusy]         = useState(false);
  const [editAvatar, setEditAvatar]     = useState(currentUser.avatar);
  const [avatarPickerOpen, setAvatarPickerOpen] = useState(false);

  const [friendUsers, setFriendUsers]       = useState([]);
  const [sentReqs, setSentReqs]             = useState(new Set());
  const [friendAddOpen, setFriendAddOpen]   = useState(false);
  const [friendQuery, setFriendQuery]       = useState('');
  const [searchResults, setSearchResults]   = useState([]);
  const [confirmRemoveId, setConfirmRemoveId] = useState(null);
  const [confirmLogout, setConfirmLogout]     = useState(false);

  useEscapeKey(() => closeFriendModal(), friendAddOpen);

  // Initial load, and refresh whenever a request is accepted/friend list changes
  // (from this component or from the notification panel elsewhere in the app).
  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      const [users, outbound] = await Promise.all([
        resolveFriendUsers(currentUser.id),
        getOutboundRequests(currentUser.id),
      ]);
      if (cancelled) return;
      setFriendUsers(users);
      setSentReqs(new Set(outbound));
    }
    refresh();
    window.addEventListener('sb-friends-updated', refresh);
    return () => { cancelled = true; window.removeEventListener('sb-friends-updated', refresh); };
  }, [currentUser.id]);

  function closeFriendModal() {
    setFriendAddOpen(false);
    setFriendQuery('');
    setSearchResults([]);
  }

  async function handleFriendSearch(e) {
    const q = e.target.value;
    setFriendQuery(q);
    setSearchResults(await searchUsers(q));
  }

  async function handleSendRequest(userId) {
    await sendFriendRequest(currentUser.id, userId);
    setSentReqs(s => new Set([...s, userId]));
    toast('Friend request sent!');
  }

  async function handleCancelRequest(userId) {
    await cancelFriendRequest(currentUser.id, userId);
    setSentReqs(s => { const n = new Set(s); n.delete(userId); return n; });
    toast('Request cancelled');
  }

  function handleRemoveFriend(userId) {
    setConfirmRemoveId(userId);
  }

  async function doRemoveFriend(userId) {
    await removeFriend(currentUser.id, userId);
    setFriendUsers(await resolveFriendUsers(currentUser.id));
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

      {/* ── Secret Easter Eggs ── */}
      <EasterEggSection />

      {/* ── Friends ── */}
      <div className="profile-section up-friends-section">
        <div className="up-friends-header">
          <h3>Friends</h3>
          {FRIENDS_ENABLED && (
            <button type="button" className="up-add-friend-btn" onClick={() => setFriendAddOpen(true)}>
              + Add Friend
            </button>
          )}
        </div>

        {!FRIENDS_ENABLED ? (
          <ComingSoon
            title="Friends — Coming Soon"
            description="Adding friends will work across devices once SongBird has real account sync. For now this feature is on hold."
          />
        ) : friendUsers.length === 0 ? (
          <p className="up-empty">No friends added yet. Use the Add Friend button to find other players.</p>
        ) : (
          <div className="up-friends-list">
            {friendUsers.map(friend => (
              <div key={friend.id} className="up-friend-row">
                <img src={getAvatarSrc(friend.avatar)} alt={friend.username} className="up-friend-avatar" />
                <span className="up-friend-name">{friend.username}</span>
                <div className="up-friend-row-actions">
                  <button type="button" className="up-view-friend-btn" onClick={() => setViewingFriendId(friend.id)}>
                    View Profile
                  </button>
                  <button type="button" className="up-remove-friend-btn" onClick={() => handleRemoveFriend(friend.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
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
      {FRIENDS_ENABLED && friendAddOpen && (
        <Modal onClose={closeFriendModal} panelClassName="auth-modal-panel up-friend-modal">
          <ModalHeader title="Add Friend" onClose={closeFriendModal} />
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
              const isFriend = friendUsers.some(f => f.id === user.id);
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
        </Modal>
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
        const target = friendUsers.find(f => f.id === confirmRemoveId);
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
