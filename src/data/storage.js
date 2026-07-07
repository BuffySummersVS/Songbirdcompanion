import { toast } from '../utils/toast.js';
import { supabase } from '../lib/supabaseClient.js';

const K = {
  SESSION:          'sb_session',
  matches:          (uid) => `sb_matches_${uid}`,
  friends:          (uid) => `sb_friends_${uid}`,
  friendReqsIn:     (uid) => `sb_friendreqs_in_${uid}`,
  friendReqsOut:    (uid) => `sb_friendreqs_out_${uid}`,
  dm:               (a, b) => { const s = [a,b].sort(); return `sb_dm_${s[0]}__${s[1]}`; },
  dmUnread:         (uid) => `sb_dm_unread_${uid}`,
  customEvents:     (uid) => `sb_custom_events_${uid}`,
  academyProgress:  (uid) => `sb_academy_${uid}`,
  academyStreak:    (uid) => `sb_academy_streak_${uid}`,
  academyBadges:    (uid) => `sb_academy_badges_${uid}`,
  academyCerts:     (uid) => `sb_academy_certs_${uid}`,
  academyQuizzes:   (uid) => `sb_academy_quiz_${uid}`,
  badgePanelPrefs:  (uid) => `sb_badge_prefs_${uid}`,
  competitiveRanks: (uid) => `sb_competitive_ranks_${uid}`,
  competitiveRanksPrefs: (uid) => `sb_competitive_ranks_prefs_${uid}`,
  mainHeroes:       (uid) => `sb_main_heroes_${uid}`,
  mainHeroesPrefs:  (uid) => `sb_main_heroes_prefs_${uid}`,
  notifSent:        (uid) => `sb_notif_${uid}`,
};

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    toast("Couldn't save — storage is full.");
    return false;
  }
}

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

// Guards against not just malformed JSON but the wrong *shape* coming back
// (e.g. localStorage was hand-edited, or corrupted) — falls back instead of
// letting a later `.someField` access on a stray string/number/null throw.
function safeParse(raw, fallback, isValid) {
  try {
    const parsed = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function safeParseArray(raw, itemIsValid = () => true) {
  return safeParse(raw, [], Array.isArray).filter(itemIsValid);
}

function safeParseObject(raw, fallback = {}) {
  return safeParse(raw, fallback, isPlainObject);
}

function safeParseObjectOrDefault(raw, fallback) {
  const parsed = safeParse(raw, null, v => v === null || isPlainObject(v));
  return parsed || fallback;
}

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Accounts live in Supabase now (see src/lib/supabaseClient.js), not
// localStorage — passwords are hashed server-side (see the register_user /
// verify_login / update_user_profile Postgres functions) and never touch
// this file.

export async function getUserByUsername(username) {
  const { data, error } = await supabase
    .from('public_users')
    .select('*')
    .eq('username', username)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

export async function getUserById(id) {
  if (!id) return null;
  const { data, error } = await supabase
    .from('public_users')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

export async function createUser({ username, password, avatar }) {
  const { data, error } = await supabase
    .rpc('register_user', { p_username: username, p_password: password, p_avatar: avatar })
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateUser(id, updates) {
  const { data, error } = await supabase
    .rpc('update_user_profile', {
      p_user_id: id,
      p_username: updates.username ?? null,
      p_avatar: updates.avatar ?? null,
      p_new_password: updates.password ?? null,
    })
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function verifyLogin(username, password) {
  const { data, error } = await supabase
    .rpc('verify_login', { p_username: username, p_password: password })
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export function getSession() {
  return safeParse(localStorage.getItem(K.SESSION) || 'null', null, v => v === null || isPlainObject(v));
}
export function saveSession(userId) {
  safeSetItem(K.SESSION, JSON.stringify({ userId }));
}
export function clearSession() {
  localStorage.removeItem(K.SESSION);
}

export function getMatches(userId) {
  return safeParseArray(localStorage.getItem(K.matches(userId)) || '[]', isPlainObject);
}

export function deleteMatch(userId, matchId) {
  safeSetItem(K.matches(userId), JSON.stringify(getMatches(userId).filter(m => m.id !== matchId)));
}

export function clearMatches(userId) {
  safeSetItem(K.matches(userId), JSON.stringify([]));
}

export function addMatch(userId, data) {
  const matches = getMatches(userId);
  const m = { ...data, id: uid(), timestamp: new Date().toISOString() };
  safeSetItem(K.matches(userId), JSON.stringify([m, ...matches]));
  return m;
}

export function updateMatch(userId, matchId, data) {
  const matches = getMatches(userId);
  const idx = matches.findIndex(m => m.id === matchId);
  if (idx === -1) return null;
  matches[idx] = { ...matches[idx], ...data, editedAt: new Date().toISOString() };
  safeSetItem(K.matches(userId), JSON.stringify(matches));
  return matches[idx];
}

export async function searchUsers(query) {
  const q = query.trim();
  if (!q) return [];
  const escaped = q.replace(/[%_]/g, m => `\\${m}`);
  const { data, error } = await supabase
    .from('public_users')
    .select('*')
    .ilike('username', `%${escaped}%`)
    .limit(20);
  if (error) throw new Error(error.message);
  return data;
}

export function getFriendRequests(userId) {
  return safeParseArray(localStorage.getItem(K.friendReqsIn(userId)) || '[]', isPlainObject);
}

export function getOutboundRequests(userId) {
  return safeParseArray(localStorage.getItem(K.friendReqsOut(userId)) || '[]', id => typeof id === 'string');
}

export async function sendFriendRequest(fromUserId, toUserId) {
  if (fromUserId === toUserId) return;
  if (getFriends(fromUserId).includes(toUserId)) return;
  const inbound = getFriendRequests(toUserId);
  if (inbound.some(r => r.fromId === fromUserId)) return;
  const fromUser = await getUserById(fromUserId);
  if (!fromUser) return;
  safeSetItem(
    K.friendReqsIn(toUserId),
    JSON.stringify([...inbound, { fromId: fromUserId, fromUsername: fromUser.username, fromAvatar: fromUser.avatar, sentAt: new Date().toISOString() }])
  );
  const outbound = getOutboundRequests(fromUserId);
  if (!outbound.includes(toUserId)) {
    safeSetItem(K.friendReqsOut(fromUserId), JSON.stringify([...outbound, toUserId]));
  }
}

export function acceptFriendRequest(userId, fromUserId) {
  addFriend(userId, fromUserId);
  addFriend(fromUserId, userId);
  safeSetItem(K.friendReqsIn(userId),  JSON.stringify(getFriendRequests(userId).filter(r => r.fromId !== fromUserId)));
  safeSetItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== userId)));
}

export function cancelFriendRequest(fromUserId, toUserId) {
  safeSetItem(K.friendReqsIn(toUserId),   JSON.stringify(getFriendRequests(toUserId).filter(r => r.fromId !== fromUserId)));
  safeSetItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== toUserId)));
}

export function declineFriendRequest(userId, fromUserId) {
  safeSetItem(K.friendReqsIn(userId),  JSON.stringify(getFriendRequests(userId).filter(r => r.fromId !== fromUserId)));
  safeSetItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== userId)));
}

export function getFriends(userId) {
  return safeParseArray(localStorage.getItem(K.friends(userId)) || '[]', id => typeof id === 'string');
}

export function addFriend(userId, friendId) {
  const list = getFriends(userId);
  if (!list.includes(friendId)) {
    safeSetItem(K.friends(userId), JSON.stringify([...list, friendId]));
  }
}

export function removeFriend(userId, friendId) {
  const list = getFriends(userId).filter(id => id !== friendId);
  safeSetItem(K.friends(userId), JSON.stringify(list));
}

// ── Direct Messaging ─────────────────────────────────────────────────────────

export function getDMMessages(userId, friendId) {
  return safeParseArray(localStorage.getItem(K.dm(userId, friendId)) || '[]', isPlainObject);
}

export function sendDM(fromId, toId, text) {
  const key = K.dm(fromId, toId);
  const msgs = getDMMessages(fromId, toId);
  const msg = {
    id: uid(),
    fromId,
    text,
    sentAt: new Date().toISOString(),
    deletedBySender: false,
    deletedByReceiver: false,
    readAt: null,
    reactions: {},
  };
  safeSetItem(key, JSON.stringify([...msgs, msg]));
  const unread = getDMUnread(toId);
  const ck = K.dm(fromId, toId);
  unread[ck] = (unread[ck] || 0) + 1;
  safeSetItem(K.dmUnread(toId), JSON.stringify(unread));
  return msg;
}

export function deleteDM(userId, friendId, messageId) {
  const key = K.dm(userId, friendId);
  const msgs = getDMMessages(userId, friendId);
  const idx = msgs.findIndex(m => m.id === messageId);
  if (idx === -1) return;
  const msg = msgs[idx];
  if (msg.fromId === userId) {
    if (!msg.readAt) {
      msgs.splice(idx, 1);
    } else {
      msgs[idx] = { ...msg, deletedBySender: true, text: '' };
    }
  } else {
    msgs[idx] = { ...msg, deletedByReceiver: true };
  }
  safeSetItem(key, JSON.stringify(msgs));
}

export function reactToDM(userId, friendId, messageId, emoji) {
  const key = K.dm(userId, friendId);
  const msgs = getDMMessages(userId, friendId);
  const idx = msgs.findIndex(m => m.id === messageId);
  if (idx === -1) return;
  if (!msgs[idx].reactions) msgs[idx].reactions = {};
  const users = msgs[idx].reactions[emoji] || [];
  const pos = users.indexOf(userId);
  if (pos === -1) users.push(userId); else users.splice(pos, 1);
  if (users.length === 0) delete msgs[idx].reactions[emoji];
  else msgs[idx].reactions[emoji] = users;
  safeSetItem(key, JSON.stringify(msgs));
}

export function markDMRead(userId, friendId) {
  const ck = K.dm(userId, friendId);
  const unread = getDMUnread(userId);
  delete unread[ck];
  safeSetItem(K.dmUnread(userId), JSON.stringify(unread));
  const msgs = getDMMessages(userId, friendId);
  const now = new Date().toISOString();
  let changed = false;
  msgs.forEach(m => { if (m.fromId !== userId && !m.readAt) { m.readAt = now; changed = true; } });
  if (changed) safeSetItem(ck, JSON.stringify(msgs));
}

export function getDMUnread(userId) {
  return safeParseObject(localStorage.getItem(K.dmUnread(userId)) || '{}');
}

export function getTotalDMUnread(userId) {
  if (!userId) return 0;
  return Object.values(getDMUnread(userId)).reduce((a, b) => a + b, 0);
}

// ── End Direct Messaging ─────────────────────────────────────────────────────

// ── Custom Calendar Events ────────────────────────────────────────────────────

export function getCustomEvents(userId) {
  return safeParseArray(localStorage.getItem(K.customEvents(userId)) || '[]', isPlainObject);
}

export function addCustomEvent(userId, data) {
  const events = getCustomEvents(userId);
  const event = { ...data, id: uid(), createdAt: new Date().toISOString() };
  safeSetItem(K.customEvents(userId), JSON.stringify([...events, event]));
  return event;
}

export function updateCustomEvent(userId, eventId, data) {
  const events = getCustomEvents(userId);
  const idx = events.findIndex(e => e.id === eventId);
  if (idx === -1) return null;
  events[idx] = { ...events[idx], ...data, updatedAt: new Date().toISOString() };
  safeSetItem(K.customEvents(userId), JSON.stringify(events));
  return events[idx];
}

export function deleteCustomEvent(userId, eventId) {
  const events = getCustomEvents(userId).filter(e => e.id !== eventId);
  safeSetItem(K.customEvents(userId), JSON.stringify(events));
}

// ── End Custom Calendar Events ────────────────────────────────────────────────

// ── Event Notifications ───────────────────────────────────────────────────────

export function getSentNotifications(userId) {
  return safeParseObject(localStorage.getItem(K.notifSent(userId)) || '{}');
}

export function saveSentNotifications(userId, sent) {
  safeSetItem(K.notifSent(userId), JSON.stringify(sent));
}

// ── End Custom Calendar Events ────────────────────────────────────────────────

// ── SongBird Academy ──────────────────────────────────────────────────────────

export function getAcademyProgress(userId) {
  return safeParse(localStorage.getItem(K.academyProgress(userId)) || 'null', null, v => v === null || isPlainObject(v));
}

export function saveAcademyProgress(userId, progress) {
  safeSetItem(K.academyProgress(userId), JSON.stringify(progress));
}

export function getAcademyStreak(userId) {
  return safeParseObjectOrDefault(
    localStorage.getItem(K.academyStreak(userId)) || 'null',
    { currentStreak: 0, longestStreak: 0, lastActiveDate: null }
  );
}

export function saveAcademyStreak(userId, streak) {
  safeSetItem(K.academyStreak(userId), JSON.stringify(streak));
}

export function getAcademyBadges(userId) {
  return safeParseObject(localStorage.getItem(K.academyBadges(userId)) || '{}');
}

export function saveAcademyBadges(userId, badges) {
  safeSetItem(K.academyBadges(userId), JSON.stringify(badges));
}

function emptyCompetitiveRanks() {
  const empty = { rank: '', division: '', badge: '' };
  return { tank: { ...empty }, damage: { ...empty }, support: { ...empty }, openQueue: { ...empty } };
}

export function getCompetitiveRanks(userId) {
  const saved = safeParseObjectOrDefault(localStorage.getItem(K.competitiveRanks(userId)) || 'null', {});
  return { ...emptyCompetitiveRanks(), ...saved };
}

export function saveCompetitiveRanks(userId, ranks) {
  safeSetItem(K.competitiveRanks(userId), JSON.stringify(ranks));
}

export function getCompetitiveRanksPrefs(userId) {
  return safeParseObjectOrDefault(localStorage.getItem(K.competitiveRanksPrefs(userId)) || 'null', { color: '#ff9c00' });
}

export function setCompetitiveRanksPrefs(userId, prefs) {
  safeSetItem(K.competitiveRanksPrefs(userId), JSON.stringify(prefs));
}

export function getMainHeroes(userId) {
  return safeParseArray(localStorage.getItem(K.mainHeroes(userId)) || '[]', isPlainObject);
}

export function saveMainHeroes(userId, mainHeroes) {
  safeSetItem(K.mainHeroes(userId), JSON.stringify(mainHeroes));
}

export function getMainHeroesPrefs(userId) {
  return safeParseObjectOrDefault(localStorage.getItem(K.mainHeroesPrefs(userId)) || 'null', { color: '#ff9c00' });
}

export function setMainHeroesPrefs(userId, prefs) {
  safeSetItem(K.mainHeroesPrefs(userId), JSON.stringify(prefs));
}

export function getBadgePanelPrefs(userId) {
  return safeParseObjectOrDefault(
    localStorage.getItem(K.badgePanelPrefs(userId)) || 'null',
    { color: '#ff9c00', selectedBadgeIds: [] }
  );
}
export function setBadgePanelPrefs(userId, prefs) {
  safeSetItem(K.badgePanelPrefs(userId), JSON.stringify(prefs));
}

export function getAcademyCerts(userId) {
  return safeParseObject(localStorage.getItem(K.academyCerts(userId)) || '{}');
}

export function saveAcademyCerts(userId, certs) {
  safeSetItem(K.academyCerts(userId), JSON.stringify(certs));
}

export function getQuizResults(userId) {
  return safeParseObject(localStorage.getItem(K.academyQuizzes(userId)) || '{}');
}

export function saveQuizResult(userId, quizId, result) {
  const all = getQuizResults(userId);
  const existing = all[quizId] || { attempts: 0, passed: false, firstAttemptPassed: false };
  const updated = {
    ...existing,
    attempts: existing.attempts + 1,
    score: result.score,
    passed: existing.passed || result.passed,
    firstAttemptPassed: existing.attempts === 0 && result.passed,
    lastAttemptAt: new Date().toISOString(),
  };
  all[quizId] = updated;
  safeSetItem(K.academyQuizzes(userId), JSON.stringify(all));
  return updated;
}

// Update the daily tracking block within progress (call after saving progress)
export function updateDailyTracking(progress, today, { xpDelta = 0, lessonCompleted = false, quizPassed = false } = {}) {
  const dayData = progress.dailyGoals?.[today] || { lessonsCompleted: 0, quizzesPassed: 0, xpEarned: 0, bonusAwarded: false };
  const updated = {
    ...dayData,
    lessonsCompleted: dayData.lessonsCompleted + (lessonCompleted ? 1 : 0),
    quizzesPassed: dayData.quizzesPassed + (quizPassed ? 1 : 0),
    xpEarned: dayData.xpEarned + xpDelta,
  };
  const dailyXP = { ...(progress.dailyXP || {}), [today]: ((progress.dailyXP || {})[today] || 0) + xpDelta };
  return {
    ...progress,
    dailyGoals: { ...(progress.dailyGoals || {}), [today]: updated },
    dailyXP,
  };
}

// ── End Academy ───────────────────────────────────────────────────────────────

export function cropImageToSquare(dataUrl) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const size = Math.min(img.width, img.height);
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      canvas.getContext('2d').drawImage(
        img,
        (img.width - size) / 2,
        (img.height - size) / 2,
        size, size, 0, 0, 200, 200
      );
      resolve(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.src = dataUrl;
  });
}
