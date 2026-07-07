import { toast } from '../utils/toast.js';
import { supabase } from '../lib/supabaseClient.js';

// Direct Messages are the only domain still backed by localStorage — they
// stay dead code behind SOCIAL_FEATURES_ENABLED (see Phase 1/2/3 notes),
// so there was never a reason to migrate them.
const K = {
  SESSION:  'sb_session',
  dm:       (a, b) => { const s = [a,b].sort(); return `sb_dm_${s[0]}__${s[1]}`; },
  dmUnread: (uid) => `sb_dm_unread_${uid}`,
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

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Accounts live in Supabase now (see src/lib/supabaseClient.js), not
// localStorage — passwords are hashed server-side (see the register_user /
// verify_login / update_user_profile Postgres functions) and never touch
// this file.

// Postgres/supabase-js return snake_case column names (created_at); the rest
// of the app uses camelCase (createdAt), same convention as matchFromRow.
function userFromRow(row) {
  if (!row) return row;
  const { created_at, ...rest } = row;
  return { ...rest, createdAt: created_at };
}

export async function getUserById(id) {
  if (!id) return null;
  const { data, error } = await supabase
    .from('public_users')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return userFromRow(data);
}

export async function createUser({ username, password, avatar }) {
  const { data, error } = await supabase
    .rpc('register_user', { p_username: username, p_password: password, p_avatar: avatar })
    .single();
  if (error) throw new Error(error.message);
  return userFromRow(data);
}

export async function updateUser(id, updates) {
  const { data, error } = await supabase
    .rpc('update_user_profile', {
      p_user_id: id,
      p_session_token: currentSessionToken(),
      p_username: updates.username ?? null,
      p_avatar: updates.avatar ?? null,
      p_new_password: updates.password ?? null,
    })
    .single();
  if (error) throw new Error(error.message);
  return userFromRow(data);
}

export async function verifyLogin(username, password) {
  const { data, error } = await supabase
    .rpc('verify_login', { p_username: username, p_password: password })
    .single();
  if (error) throw new Error(error.message);
  return userFromRow(data);
}

export async function signOut(userId, sessionToken) {
  if (!userId || !sessionToken) return;
  try {
    await supabase.rpc('sign_out', { p_user_id: userId, p_session_token: sessionToken });
  } catch {
    // best-effort server-side session cleanup; local session is cleared regardless
  }
}

export function getSession() {
  return safeParse(localStorage.getItem(K.SESSION) || 'null', null, v => v === null || isPlainObject(v));
}
export function saveSession(userId, sessionToken) {
  safeSetItem(K.SESSION, JSON.stringify({ userId, sessionToken }));
}
export function clearSession() {
  localStorage.removeItem(K.SESSION);
}
function currentSessionToken() {
  return getSession()?.sessionToken ?? null;
}

function matchFromRow(row) {
  return { ...row.data, id: row.id, timestamp: row.created_at, editedAt: row.edited_at ?? undefined };
}

// Routes to the friend-gated variant when viewing someone other than the
// current session's own user, same reasoning as fetchAcademyData above.
export async function getMatches(userId) {
  const session = getSession();
  if (session?.userId === userId) {
    const { data, error } = await supabase
      .rpc('get_matches', { p_user_id: userId, p_session_token: session.sessionToken });
    if (error) throw new Error(error.message);
    return data.map(matchFromRow);
  }
  const { data, error } = await supabase
    .rpc('get_matches_for', { p_viewer_id: session?.userId, p_viewer_token: session?.sessionToken, p_target_id: userId });
  if (error) throw new Error(error.message);
  return data.map(matchFromRow);
}

export async function deleteMatch(userId, matchId) {
  const { error } = await supabase
    .rpc('delete_match', { p_user_id: userId, p_session_token: currentSessionToken(), p_match_id: matchId });
  if (error) throw new Error(error.message);
}

export async function clearMatches(userId) {
  const { error } = await supabase
    .rpc('clear_matches', { p_user_id: userId, p_session_token: currentSessionToken() });
  if (error) throw new Error(error.message);
}

export async function addMatch(userId, data) {
  const { data: row, error } = await supabase
    .rpc('add_match', { p_user_id: userId, p_session_token: currentSessionToken(), p_data: data })
    .single();
  if (error) throw new Error(error.message);
  return matchFromRow(row);
}

export async function updateMatch(userId, matchId, data) {
  const { data: row, error } = await supabase
    .rpc('update_match', { p_user_id: userId, p_session_token: currentSessionToken(), p_match_id: matchId, p_data: data })
    .single();
  if (error) throw new Error(error.message);
  // A PL/pgSQL function declared to return a composite type still returns a
  // single (all-NULL-field) row when its RETURNING clause matched nothing —
  // never a bare null — so check a required field, not row truthiness.
  return row?.id ? matchFromRow(row) : null;
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
  return data.map(userFromRow);
}

function friendRequestFromRow(row) {
  return { fromId: row.from_id, fromUsername: row.from_username, fromAvatar: row.from_avatar, sentAt: row.sent_at };
}

export async function getFriendRequests(userId) {
  const { data, error } = await supabase
    .rpc('get_friend_requests', { p_user_id: userId, p_session_token: currentSessionToken() });
  if (error) throw new Error(error.message);
  return data.map(friendRequestFromRow);
}

export async function getOutboundRequests(userId) {
  const { data, error } = await supabase
    .rpc('get_outbound_requests', { p_user_id: userId, p_session_token: currentSessionToken() });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendFriendRequest(fromUserId, toUserId) {
  const { error } = await supabase
    .rpc('send_friend_request', { p_from_id: fromUserId, p_session_token: currentSessionToken(), p_to_id: toUserId });
  if (error) throw new Error(error.message);
}

export async function acceptFriendRequest(userId, fromUserId) {
  const { error } = await supabase
    .rpc('accept_friend_request', { p_user_id: userId, p_session_token: currentSessionToken(), p_from_id: fromUserId });
  if (error) throw new Error(error.message);
}

export async function cancelFriendRequest(fromUserId, toUserId) {
  const { error } = await supabase
    .rpc('cancel_friend_request', { p_from_id: fromUserId, p_session_token: currentSessionToken(), p_to_id: toUserId });
  if (error) throw new Error(error.message);
}

export async function declineFriendRequest(userId, fromUserId) {
  const { error } = await supabase
    .rpc('decline_friend_request', { p_user_id: userId, p_session_token: currentSessionToken(), p_from_id: fromUserId });
  if (error) throw new Error(error.message);
}

export async function getFriends(userId) {
  const { data, error } = await supabase
    .rpc('get_friends', { p_user_id: userId, p_session_token: currentSessionToken() });
  if (error) throw new Error(error.message);
  return data;
}

export async function removeFriend(userId, friendId) {
  const { error } = await supabase
    .rpc('remove_friend', { p_user_id: userId, p_session_token: currentSessionToken(), p_friend_id: friendId });
  if (error) throw new Error(error.message);
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

function customEventFromRow(row) {
  return { ...row.data, id: row.id, createdAt: row.created_at, updatedAt: row.updated_at ?? undefined };
}

export async function getCustomEvents(userId) {
  const { data, error } = await supabase
    .rpc('get_custom_events', { p_user_id: userId, p_session_token: currentSessionToken() });
  if (error) throw new Error(error.message);
  return data.map(customEventFromRow);
}

export async function addCustomEvent(userId, data) {
  const { data: row, error } = await supabase
    .rpc('add_custom_event', { p_user_id: userId, p_session_token: currentSessionToken(), p_data: data })
    .single();
  if (error) throw new Error(error.message);
  return customEventFromRow(row);
}

export async function updateCustomEvent(userId, eventId, data) {
  const { data: row, error } = await supabase
    .rpc('update_custom_event', { p_user_id: userId, p_session_token: currentSessionToken(), p_event_id: eventId, p_data: data })
    .single();
  if (error) throw new Error(error.message);
  return row?.id ? customEventFromRow(row) : null;
}

export async function deleteCustomEvent(userId, eventId) {
  const { error } = await supabase
    .rpc('delete_custom_event', { p_user_id: userId, p_session_token: currentSessionToken(), p_event_id: eventId });
  if (error) throw new Error(error.message);
}

// ── End Custom Calendar Events ────────────────────────────────────────────────

// ── Event Notifications ───────────────────────────────────────────────────────

export async function getSentNotifications(userId) {
  const row = await fetchUserPrefs(userId);
  return row.sent_notifications ?? {};
}

export async function saveSentNotifications(userId, sent) {
  await saveUserPrefField(userId, 'sentNotifications', sent);
}

// ── End Event Notifications ───────────────────────────────────────────────────

// ── SongBird Academy ──────────────────────────────────────────────────────────

// Routes to the friend-gated variant when viewing someone other than the
// current session's own user — the plain get_academy_data function only
// ever allows reading your own row.
async function fetchAcademyData(userId) {
  const session = getSession();
  if (session?.userId === userId) {
    const { data, error } = await supabase
      .rpc('get_academy_data', { p_user_id: userId, p_session_token: session.sessionToken })
      .single();
    if (error) throw new Error(error.message);
    return data;
  }
  const { data, error } = await supabase
    .rpc('get_academy_data_for', { p_viewer_id: session?.userId, p_viewer_token: session?.sessionToken, p_target_id: userId })
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function saveAcademyField(userId, field, value) {
  const { error } = await supabase
    .rpc('save_academy_field', { p_user_id: userId, p_session_token: currentSessionToken(), p_field: field, p_value: value });
  if (error) throw new Error(error.message);
}

// Fetches progress/streak/badges/certs/quizzes in one round trip — for
// consumers (like AcademyHub) that need all five up front, instead of each
// calling its own getAcademyX() and re-fetching the same underlying row.
export async function getAllAcademyData(userId) {
  const row = await fetchAcademyData(userId);
  return {
    progress: row.progress ?? null,
    streak: row.streak ?? { currentStreak: 0, longestStreak: 0, lastActiveDate: null },
    badges: row.badges ?? {},
    certs: row.certs ?? {},
    quizzes: row.quizzes ?? {},
  };
}

export async function getAcademyProgress(userId) {
  const row = await fetchAcademyData(userId);
  return row.progress ?? null;
}

export async function saveAcademyProgress(userId, progress) {
  await saveAcademyField(userId, 'progress', progress);
}

export async function saveAcademyStreak(userId, streak) {
  await saveAcademyField(userId, 'streak', streak);
}

export async function getAcademyBadges(userId) {
  const row = await fetchAcademyData(userId);
  return row.badges ?? {};
}

export async function saveAcademyBadges(userId, badges) {
  await saveAcademyField(userId, 'badges', badges);
}

// Same friend-or-self routing as fetchAcademyData/getMatches — main heroes,
// competitive ranks, and the badge panel prefs are all shown on a friend's
// read-only profile too (see FriendProfile.jsx).
async function fetchUserPrefs(userId) {
  const session = getSession();
  if (session?.userId === userId) {
    const { data, error } = await supabase
      .rpc('get_user_prefs', { p_user_id: userId, p_session_token: session.sessionToken })
      .single();
    if (error) throw new Error(error.message);
    return data;
  }
  const { data, error } = await supabase
    .rpc('get_user_prefs_for', { p_viewer_id: session?.userId, p_viewer_token: session?.sessionToken, p_target_id: userId })
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function saveUserPrefField(userId, field, value) {
  const { error } = await supabase
    .rpc('save_user_pref_field', { p_user_id: userId, p_session_token: currentSessionToken(), p_field: field, p_value: value });
  if (error) throw new Error(error.message);
}

export async function getCompetitiveRanks(userId) {
  const row = await fetchUserPrefs(userId);
  return row.competitive_ranks;
}

export async function saveCompetitiveRanks(userId, ranks) {
  await saveUserPrefField(userId, 'competitiveRanks', ranks);
}

export async function getCompetitiveRanksPrefs(userId) {
  const row = await fetchUserPrefs(userId);
  return row.competitive_ranks_prefs;
}

export async function setCompetitiveRanksPrefs(userId, prefs) {
  await saveUserPrefField(userId, 'competitiveRanksPrefs', prefs);
}

export async function getMainHeroes(userId) {
  const row = await fetchUserPrefs(userId);
  return row.main_heroes;
}

export async function saveMainHeroes(userId, mainHeroes) {
  await saveUserPrefField(userId, 'mainHeroes', mainHeroes);
}

export async function getMainHeroesPrefs(userId) {
  const row = await fetchUserPrefs(userId);
  return row.main_heroes_prefs;
}

export async function setMainHeroesPrefs(userId, prefs) {
  await saveUserPrefField(userId, 'mainHeroesPrefs', prefs);
}

export async function getBadgePanelPrefs(userId) {
  const row = await fetchUserPrefs(userId);
  return row.badge_panel_prefs;
}

export async function setBadgePanelPrefs(userId, prefs) {
  await saveUserPrefField(userId, 'badgePanelPrefs', prefs);
}

export async function saveAcademyCerts(userId, certs) {
  await saveAcademyField(userId, 'certs', certs);
}

export async function saveQuizResult(userId, quizId, result) {
  const { data, error } = await supabase
    .rpc('save_quiz_result', { p_user_id: userId, p_session_token: currentSessionToken(), p_quiz_id: quizId, p_result: result });
  if (error) throw new Error(error.message);
  return data;
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
