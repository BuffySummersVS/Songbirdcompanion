import { useEffect, useState } from 'react';
import { getMatches, getUserById } from '../../data/storage';
import { getAvatarSrc } from '../../data/avatars';
import ProfileStats from './ProfileStats';
import AcademyBadgePanel from './AcademyBadgePanel';
import CompetitiveRanksPanel from '../CompetitiveRanksPanel.jsx';
import MainHeroesPanel from '../MainHeroesPanel.jsx';
import EasterEggSection from '../easter-eggs/EasterEggSection.jsx';

export default function FriendProfile({ friendId, onBack }) {
  const [friend, setFriend] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getUserById(friendId), getMatches(friendId)]).then(([f, m]) => {
      if (cancelled) return;
      setFriend(f);
      setMatches(m);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [friendId]);

  if (loading) return <div className="aca-loading">Loading profile…</div>;

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

      <EasterEggSection userId={friend.id} readOnly />
    </div>
  );
}
