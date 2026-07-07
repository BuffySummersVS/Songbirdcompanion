import { useEscapeKey } from "../hooks/useEscapeKey";
import Modal, { ModalHeader } from "./Modal";
import ComingSoon from "./ComingSoon";
import { getAvatarSrc } from "../data/avatars";
import { FRIENDS_ENABLED } from "../data/featureFlags";

export default function FriendsListPanel({ onClose, friendUsers, onViewProfile }) {
  useEscapeKey(onClose);

  return (
    <Modal onClose={onClose}>
      <ModalHeader title="Friends List" onClose={onClose} />

      {!FRIENDS_ENABLED ? (
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
                  onClick={() => onViewProfile(friend.id)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
