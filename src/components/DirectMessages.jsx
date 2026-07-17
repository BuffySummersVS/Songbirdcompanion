import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  getFriends, getUserById,
  getDMMessages, getDMConversations, sendDM, deleteDM, reactToDM, markDMRead,
} from '../data/storage';
import { getAvatarSrc } from '../data/avatars';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useAutoFocus } from '../hooks/useAutoFocus';
import { useHazardSearchTrigger } from '../hooks/useHazardSearchTrigger';
import { toast } from '../utils/toast';
import Modal from './Modal';

const POLL_MS = 4000;

const QUICK_REACTS = ['👍', '❤️', '😂', '😱', '🤮'];

const EMOJI_LIB = {
  'Smileys': ['😀','😁','😂','🤣','😃','😄','😅','😆','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😋','😛','😜','🤪','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','😣','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','💀','☠️','👻','👽','🤖','💩'],
  'Hands': ['👍','👎','👌','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','👇','☝️','👋','🖐️','✋','🤚','🖖','🤜','🤛','✊','👊','🤲','👐','🙌','👏','🤝','🙏','✍️','💪','🦾','🦵','🦶','👂','🦻','👀','👁️'],
  'Hearts': ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','🫀','🫶'],
  'Animals': ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🦆','🦅','🦉','🐺','🐴','🦄','🐝','🦋','🐛','🐌','🐞','🐜','🐢','🦎','🐍','🦕','🦖','🦓','🐘','🦒','🦘','🐕','🐈','🦜','🦈','🐬','🐳','🦭','🦧','🦣'],
  'Food': ['🍎','🍊','🍋','🍇','🍓','🫐','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🥑','🍆','🌽','🌶️','🍄','🧀','🥚','🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🌮','🌯','🥗','🍝','🍜','🍲','🍛','🍣','🍱','🍤','🍡','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🍯','☕','🧋','🍵','🍺','🍻','🥂','🍷','🥃','🍹','🧃'],
  'Sports': ['⚽','🏀','🏈','⚾','🎾','🏉','🏐','🎱','🏓','🏸','🥊','🥋','🎽','🏋️','🤸','⛹️','🏊','🚴','🧘','🎿','🏆','🥇','🥈','🥉','🎮','🕹️','🎲','♟️','🎳','🎯','🎰'],
  'Travel': ['🚀','✈️','🛸','🚁','⛵','🚂','🚄','🚌','🚑','🚒','🚓','🚕','🚗','🚙','🛻','🚚','🏎️','🏍️','🛵','🚲','🛴','🛹','🌍','🌎','🌏','🗺️','🏔️','🌋','🏕️','🏖️','🏜️','🏝️','🏙️','🏠','🏡','🏢','🏥','🏦','🏨','🏪','🏰','⛩️','🗼','🗽'],
  'Objects': ['💼','👓','🕶️','🌂','👑','💎','🔮','💡','🔦','🕯️','📱','💻','🖥️','⌨️','🖱️','📺','📻','🎙️','📷','📸','📹','🎥','🔑','🗝️','🚪','🛋️','🛏️','🚿','🧴','🧹','🧺','🧻','🧼','🛒','🔔','🎵','🎶','🎸','🎹','🎺','🎻','🥁','🎤','🎧','📚','✏️','🖊️','📌','📎','🔧','🔨','⚙️','🔬','🔭','💊','🩹','🩺'],
  'Symbols': ['❤️','💯','✅','❌','⚠️','🚫','⛔','🔴','🟠','🟡','🟢','🔵','🟣','⚫','⚪','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','💬','💭','🗯️','♠️','♥️','♦️','♣️','🃏','🔁','🔂','▶️','⏩','⏪','⏫','⏬','⏸️','⏹️','⏮️','⏭️','🔼','🔽','⭐','🌟','✨','💥','🔥','🌈','⚡','❄️','🌊','🌀','🌙','☀️','🌤️','⛅','🌧️','⛈️','🌩️','❓','❗','💢','💬','🆒','🆕','🆓','🔞','🅰️','🅱️'],
};

function fmtTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const diff = Date.now() - d;
  if (diff < 60000) return 'just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
  if (diff < 86400000) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

export default function DirectMessages({ onClose }) {
  const { currentUser } = useAuth();
  const [view, setView] = useState('list');
  const [friendId, setFriendId] = useState(null);
  const [friendUsers, setFriendUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [listLoading, setListLoading] = useState(true);
  const [msgs, setMsgs] = useState([]);
  const [convoLoading, setConvoLoading] = useState(false);
  const [draft, setDraft] = useState('');
  const [reactTarget, setReactTarget] = useState(null);
  const [emojiMode, setEmojiMode] = useState(null); // 'input' | 'react-full' | null
  const [emojiCat, setEmojiCat] = useState('Smileys');
  const [emojiSearch, setEmojiSearch] = useState('');
  const checkHazardTrigger = useHazardSearchTrigger();
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  const loadList = useCallback(async () => {
    try {
      const ids = await getFriends(currentUser.id);
      const users = await Promise.all(ids.map(id => getUserById(id)));
      setFriendUsers(users.filter(Boolean));
      setConversations(await getDMConversations(currentUser.id));
    } catch (e) {
      toast(e.message || "Couldn't load messages.");
    } finally {
      setListLoading(false);
    }
  }, [currentUser.id]);

  const loadMsgs = useCallback(async (fid) => {
    try {
      setMsgs(await getDMMessages(currentUser.id, fid));
    } catch (e) {
      toast(e.message || "Couldn't load messages.");
    } finally {
      setConvoLoading(false);
    }
  }, [currentUser.id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- loadList sets state asynchronously after its awaits, not synchronously in the effect body (same false-positive pattern as App.jsx's refreshFriendUsers)
    loadList();
  }, [loadList]);

  // Polls while the panel is open instead of a live subscription — refreshes
  // whichever view is on screen (list previews/unread, or the open thread).
  useEffect(() => {
    const id = setInterval(() => {
      if (view === 'list') loadList();
      else if (view === 'convo' && friendId) loadMsgs(friendId);
    }, POLL_MS);
    return () => clearInterval(id);
  }, [view, friendId, loadList, loadMsgs]);

  useEffect(() => {
    if (view === 'convo') scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, view]);

  useEscapeKey(() => {
    if (reactTarget) { setReactTarget(null); setEmojiMode(null); }
    else if (emojiMode) setEmojiMode(null);
    else if (view === 'convo') backToList();
    else onClose();
  });

  const emojiSearchInputRef = useRef(null);
  useAutoFocus(emojiSearchInputRef, !!emojiMode);

  async function openConvo(fid) {
    setFriendId(fid);
    setView('convo');
    setConvoLoading(true);
    setMsgs([]);
    await loadMsgs(fid);
    try {
      await markDMRead(currentUser.id, fid);
    } catch (e) {
      toast(e.message || "Couldn't mark messages as read.");
    }
    loadList();
    window.dispatchEvent(new CustomEvent('sb-dm-updated'));
  }

  function backToList() {
    setView('list');
    setFriendId(null);
    setMsgs([]);
    setDraft('');
    setReactTarget(null);
    setEmojiMode(null);
    loadList();
  }

  async function send() {
    const t = draft.trim();
    if (!t || !friendId) return;
    setDraft('');
    inputRef.current.style.height = 'auto';
    try {
      await sendDM(currentUser.id, friendId, t);
      await loadMsgs(friendId);
      window.dispatchEvent(new CustomEvent('sb-dm-updated'));
    } catch (e) {
      toast(e.message || "Couldn't send message.");
    }
    setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 0);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  async function handleDelete(msgId) {
    setReactTarget(null);
    setEmojiMode(null);
    try {
      await deleteDM(currentUser.id, friendId, msgId);
      await loadMsgs(friendId);
    } catch (e) {
      toast(e.message || "Couldn't delete message.");
    }
  }

  async function handleReact(msgId, emoji) {
    setReactTarget(null);
    setEmojiMode(null);
    try {
      await reactToDM(currentUser.id, friendId, msgId, emoji);
      await loadMsgs(friendId);
    } catch (e) {
      toast(e.message || "Couldn't react to message.");
    }
  }

  function insertEmoji(emoji) {
    setDraft(prev => prev + emoji);
    setEmojiMode(null);
    setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 0);
  }

  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 96) + 'px';
  }

  const visibleEmojis = useMemo(() => {
    if (emojiSearch) {
      return Object.values(EMOJI_LIB).flat();
    }
    return EMOJI_LIB[emojiCat] || [];
  }, [emojiCat, emojiSearch]);

  const activeFriend = friendId ? friendUsers.find(f => f.id === friendId) : null;
  const reactMsg = msgs.find(m => m.id === reactTarget);

  return (
    <Modal onClose={onClose} panelClassName="dm-panel">

        {/* ── Header ── */}
        <div className="dm-header">
          {view === 'convo' ? (
            <>
              <button className="dm-back-btn" onClick={backToList} title="Back">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <img src={getAvatarSrc(activeFriend?.avatar)} alt="" className="dm-header-avatar" />
              <span className="dm-header-name">{activeFriend?.username}</span>
            </>
          ) : (
            <span className="dm-header-title">Messages</span>
          )}
          <button className="auth-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* ── Conversation List ── */}
        {view === 'list' && (
          <div className="dm-list">
            {listLoading ? (
              <div className="aca-loading">Loading messages…</div>
            ) : friendUsers.length === 0 ? (
              <div className="dm-empty">
                <p>No friends yet.</p>
                <p>Add friends from My Profile to start messaging.</p>
              </div>
            ) : (
              friendUsers.map(f => {
                const convo = conversations.find(c => c.friendId === f.id);
                const ub = convo?.unreadCount || 0;
                let preview = '';
                if (convo && convo.lastText != null) {
                  if (convo.lastDeletedBySender) preview = 'Message deleted';
                  else preview = (convo.lastFromId === currentUser.id ? 'You: ' : '') + convo.lastText.slice(0, 38);
                }
                return (
                  <button key={f.id} className="dm-list-item" onClick={() => openConvo(f.id)}>
                    <div className="dm-list-avatar-wrap">
                      <img src={getAvatarSrc(f.avatar)} alt={f.username} className="dm-list-avatar" />
                      {ub > 0 && <span className="dm-list-unread">{ub}</span>}
                    </div>
                    <div className="dm-list-info">
                      <strong className="dm-list-name">{f.username}</strong>
                      {preview && <span className="dm-list-preview">{preview}</span>}
                    </div>
                    {convo && <span className="dm-list-time">{fmtTime(convo.lastSentAt)}</span>}
                  </button>
                );
              })
            )}
          </div>
        )}

        {/* ── Conversation View ── */}
        {view === 'convo' && (
          <div className="dm-convo">
            <div className="dm-messages">
              {convoLoading ? (
                <div className="aca-loading">Loading messages…</div>
              ) : msgs.length === 0 && (
                <div className="dm-empty">
                  <p>No messages yet.</p>
                  <p>Send the first message!</p>
                </div>
              )}

              {msgs.map(msg => {
                const isMine = msg.fromId === currentUser.id;
                if (!isMine && msg.deletedByReceiver) return null;
                const isDeleted = msg.deletedBySender;
                const hasReactions = !isDeleted && Object.keys(msg.reactions || {}).length > 0;

                return (
                  <div key={msg.id} className={`dm-msg-row ${isMine ? 'mine' : 'theirs'}`}>
                    {!isMine && (
                      <img src={getAvatarSrc(activeFriend?.avatar)} alt="" className="dm-msg-avatar" />
                    )}
                    <div className="dm-msg-col">
                      <div
                        className={`dm-bubble ${isMine ? 'mine' : 'theirs'}${isDeleted ? ' deleted' : ''}`}
                        onClick={() => {
                          if (isDeleted) return;
                          setReactTarget(prev => prev === msg.id ? null : msg.id);
                          setEmojiMode(null);
                        }}
                        title={isDeleted ? '' : 'Click to react or delete'}
                      >
                        {isDeleted
                          ? <em className="dm-deleted-text">Message deleted</em>
                          : <span>{msg.text}</span>
                        }
                      </div>

                      {hasReactions && (
                        <div className={`dm-reactions ${isMine ? 'mine' : ''}`}>
                          {Object.entries(msg.reactions).map(([emoji, users]) => (
                            <button
                              key={emoji}
                              className={`dm-reaction-chip${users.includes(currentUser.id) ? ' active' : ''}`}
                              onClick={() => handleReact(msg.id, emoji)}
                              title={`${users.length} reaction${users.length !== 1 ? 's' : ''}`}
                            >
                              {emoji} {users.length > 1 && <span>{users.length}</span>}
                            </button>
                          ))}
                        </div>
                      )}

                      <span className={`dm-msg-time ${isMine ? 'mine' : ''}`}>
                        {fmtTime(msg.sentAt)}
                        {isMine && (msg.readAt ? ' ✓✓' : ' ✓')}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div ref={scrollRef} />
            </div>

            {/* ── Emoji picker panel (input mode) ── */}
            {emojiMode === 'input' && (
              <div className="dm-emoji-panel">
                <div className="dm-emoji-panel-top">
                  <input
                    ref={emojiSearchInputRef}
                    className="dm-emoji-search"
                    placeholder="Search emoji…"
                    value={emojiSearch}
                    onChange={e => { setEmojiSearch(e.target.value); checkHazardTrigger(e.target.value); }}
                  />
                </div>
                {!emojiSearch && (
                  <div className="dm-emoji-cats">
                    {Object.keys(EMOJI_LIB).map(cat => (
                      <button
                        key={cat}
                        className={`dm-emoji-cat-btn${emojiCat === cat ? ' active' : ''}`}
                        onClick={() => setEmojiCat(cat)}
                        title={cat}
                      >
                        {EMOJI_LIB[cat][0]}
                      </button>
                    ))}
                  </div>
                )}
                <div className="dm-emoji-grid">
                  {visibleEmojis.map((e, i) => (
                    <button key={i} className="dm-emoji-btn" onClick={() => insertEmoji(e)}>{e}</button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Input row ── */}
            <div className="dm-input-wrap">
              <button
                className={`dm-emoji-toggle${emojiMode === 'input' ? ' active' : ''}`}
                onClick={() => { setEmojiMode(m => m === 'input' ? null : 'input'); setEmojiSearch(''); setEmojiCat('Smileys'); }}
                title="Emoji"
              >
                😊
              </button>
              <textarea
                ref={inputRef}
                className="dm-input"
                value={draft}
                onChange={e => { setDraft(e.target.value); autoResize(e.target); }}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                rows={1}
              />
              <button className="dm-send-btn" onClick={send} disabled={!draft.trim()} title="Send">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ── Reaction picker overlay (inside panel) ── */}
        {reactTarget && reactMsg && (
          <div className="dm-react-overlay" onClick={() => { setReactTarget(null); setEmojiMode(null); }}>
            <div className="dm-react-picker" onClick={e => e.stopPropagation()}>
              {emojiMode === 'react-full' ? (
                <>
                  <div className="dm-emoji-panel-top">
                    <button className="dm-react-back-btn" onClick={() => setEmojiMode(null)}>← Back</button>
                    <input
                      ref={emojiSearchInputRef}
                      className="dm-emoji-search"
                      placeholder="Search emoji…"
                      value={emojiSearch}
                      onChange={e => { setEmojiSearch(e.target.value); checkHazardTrigger(e.target.value); }}
                    />
                  </div>
                  {!emojiSearch && (
                    <div className="dm-emoji-cats">
                      {Object.keys(EMOJI_LIB).map(cat => (
                        <button
                          key={cat}
                          className={`dm-emoji-cat-btn${emojiCat === cat ? ' active' : ''}`}
                          onClick={() => setEmojiCat(cat)}
                          title={cat}
                        >
                          {EMOJI_LIB[cat][0]}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="dm-emoji-grid">
                    {visibleEmojis.map((e, i) => (
                      <button key={i} className="dm-emoji-btn" onClick={() => handleReact(reactTarget, e)}>{e}</button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="dm-react-quick-row">
                  {QUICK_REACTS.map(emoji => {
                    const reacted = (reactMsg.reactions?.[emoji] || []).includes(currentUser.id);
                    return (
                      <button
                        key={emoji}
                        className={`dm-quick-react-btn${reacted ? ' active' : ''}`}
                        onClick={() => handleReact(reactTarget, emoji)}
                        title={emoji}
                      >
                        {emoji}
                      </button>
                    );
                  })}
                  <button
                    className="dm-quick-react-btn plus"
                    onClick={() => { setEmojiMode('react-full'); setEmojiSearch(''); setEmojiCat('Smileys'); }}
                    title="More reactions"
                  >
                    +
                  </button>
                  <button
                    className="dm-quick-react-btn trash"
                    onClick={() => handleDelete(reactTarget)}
                    title={reactMsg.fromId === currentUser.id ? (reactMsg.readAt ? 'Delete (already seen)' : 'Unsend') : 'Delete for me'}
                  >
                    🗑️
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
    </Modal>
  );
}
