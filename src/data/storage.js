const K = {
  USERS:            'sb_users',
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
};

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

async function hashPassword(password) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(password)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function readUsers() {
  try { return JSON.parse(localStorage.getItem(K.USERS) || '[]'); }
  catch { return []; }
}
function writeUsers(users) {
  localStorage.setItem(K.USERS, JSON.stringify(users));
}

export function getUserByUsername(username) {
  return readUsers().find(u => u.username.toLowerCase() === username.toLowerCase()) ?? null;
}
export function getUserById(id) {
  return readUsers().find(u => u.id === id) ?? null;
}

export async function createUser({ username, password, avatar }) {
  const users = readUsers();
  if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('Username already taken.');
  }
  const user = {
    id: uid(),
    username,
    passwordHash: await hashPassword(password),
    avatar,
    createdAt: new Date().toISOString(),
  };
  writeUsers([...users, user]);
  return user;
}

export async function updateUser(id, updates) {
  const users = readUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) throw new Error('User not found.');

  if (updates.username) {
    const clash = users.find(
      u => u.username.toLowerCase() === updates.username.toLowerCase() && u.id !== id
    );
    if (clash) throw new Error('Username already taken.');
  }

  const merged = { ...users[idx], ...updates };
  if (updates.password) {
    merged.passwordHash = await hashPassword(updates.password);
    delete merged.password;
  }
  delete updates.password;
  users[idx] = merged;
  writeUsers(users);
  return merged;
}

export async function verifyLogin(username, password) {
  const user = getUserByUsername(username);
  if (!user) throw new Error('Username not found.');
  const hash = await hashPassword(password);
  if (hash !== user.passwordHash) throw new Error('Incorrect password.');
  return user;
}

export function getSession() {
  try { return JSON.parse(localStorage.getItem(K.SESSION) || 'null'); }
  catch { return null; }
}
export function saveSession(userId) {
  localStorage.setItem(K.SESSION, JSON.stringify({ userId }));
}
export function clearSession() {
  localStorage.removeItem(K.SESSION);
}

export function getMatches(userId) {
  try { return JSON.parse(localStorage.getItem(K.matches(userId)) || '[]'); }
  catch { return []; }
}

export function deleteMatch(userId, matchId) {
  localStorage.setItem(K.matches(userId), JSON.stringify(getMatches(userId).filter(m => m.id !== matchId)));
}

export function clearMatches(userId) {
  localStorage.setItem(K.matches(userId), JSON.stringify([]));
}

export function addMatch(userId, data) {
  const matches = getMatches(userId);
  const m = { ...data, id: uid(), timestamp: new Date().toISOString() };
  localStorage.setItem(K.matches(userId), JSON.stringify([m, ...matches]));
  return m;
}

export function updateMatch(userId, matchId, data) {
  const matches = getMatches(userId);
  const idx = matches.findIndex(m => m.id === matchId);
  if (idx === -1) return null;
  matches[idx] = { ...matches[idx], ...data, editedAt: new Date().toISOString() };
  localStorage.setItem(K.matches(userId), JSON.stringify(matches));
  return matches[idx];
}

export function searchUsers(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return readUsers()
    .filter(u => u.username.toLowerCase().includes(q))
    .map(({ passwordHash, ...safe }) => safe);
}

export function getFriendRequests(userId) {
  try { return JSON.parse(localStorage.getItem(K.friendReqsIn(userId)) || '[]'); }
  catch { return []; }
}

export function getOutboundRequests(userId) {
  try { return JSON.parse(localStorage.getItem(K.friendReqsOut(userId)) || '[]'); }
  catch { return []; }
}

export function sendFriendRequest(fromUserId, toUserId) {
  if (fromUserId === toUserId) return;
  if (getFriends(fromUserId).includes(toUserId)) return;
  const inbound = getFriendRequests(toUserId);
  if (inbound.some(r => r.fromId === fromUserId)) return;
  const fromUser = getUserById(fromUserId);
  if (!fromUser) return;
  localStorage.setItem(
    K.friendReqsIn(toUserId),
    JSON.stringify([...inbound, { fromId: fromUserId, fromUsername: fromUser.username, fromAvatar: fromUser.avatar, sentAt: new Date().toISOString() }])
  );
  const outbound = getOutboundRequests(fromUserId);
  if (!outbound.includes(toUserId)) {
    localStorage.setItem(K.friendReqsOut(fromUserId), JSON.stringify([...outbound, toUserId]));
  }
}

export function acceptFriendRequest(userId, fromUserId) {
  addFriend(userId, fromUserId);
  addFriend(fromUserId, userId);
  localStorage.setItem(K.friendReqsIn(userId),  JSON.stringify(getFriendRequests(userId).filter(r => r.fromId !== fromUserId)));
  localStorage.setItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== userId)));
}

export function cancelFriendRequest(fromUserId, toUserId) {
  localStorage.setItem(K.friendReqsIn(toUserId),   JSON.stringify(getFriendRequests(toUserId).filter(r => r.fromId !== fromUserId)));
  localStorage.setItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== toUserId)));
}

export function declineFriendRequest(userId, fromUserId) {
  localStorage.setItem(K.friendReqsIn(userId),  JSON.stringify(getFriendRequests(userId).filter(r => r.fromId !== fromUserId)));
  localStorage.setItem(K.friendReqsOut(fromUserId), JSON.stringify(getOutboundRequests(fromUserId).filter(id => id !== userId)));
}

export function getFriends(userId) {
  try { return JSON.parse(localStorage.getItem(K.friends(userId)) || '[]'); }
  catch { return []; }
}

export function addFriend(userId, friendId) {
  const list = getFriends(userId);
  if (!list.includes(friendId)) {
    localStorage.setItem(K.friends(userId), JSON.stringify([...list, friendId]));
  }
}

export function removeFriend(userId, friendId) {
  const list = getFriends(userId).filter(id => id !== friendId);
  localStorage.setItem(K.friends(userId), JSON.stringify(list));
}

// ── Direct Messaging ─────────────────────────────────────────────────────────

export function getDMMessages(userId, friendId) {
  try { return JSON.parse(localStorage.getItem(K.dm(userId, friendId)) || '[]'); }
  catch { return []; }
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
  localStorage.setItem(key, JSON.stringify([...msgs, msg]));
  const unread = getDMUnread(toId);
  const ck = K.dm(fromId, toId);
  unread[ck] = (unread[ck] || 0) + 1;
  localStorage.setItem(K.dmUnread(toId), JSON.stringify(unread));
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
  localStorage.setItem(key, JSON.stringify(msgs));
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
  localStorage.setItem(key, JSON.stringify(msgs));
}

export function markDMRead(userId, friendId) {
  const ck = K.dm(userId, friendId);
  const unread = getDMUnread(userId);
  delete unread[ck];
  localStorage.setItem(K.dmUnread(userId), JSON.stringify(unread));
  const msgs = getDMMessages(userId, friendId);
  const now = new Date().toISOString();
  let changed = false;
  msgs.forEach(m => { if (m.fromId !== userId && !m.readAt) { m.readAt = now; changed = true; } });
  if (changed) localStorage.setItem(ck, JSON.stringify(msgs));
}

export function getDMUnread(userId) {
  try { return JSON.parse(localStorage.getItem(K.dmUnread(userId)) || '{}'); }
  catch { return {}; }
}

export function getTotalDMUnread(userId) {
  if (!userId) return 0;
  return Object.values(getDMUnread(userId)).reduce((a, b) => a + b, 0);
}

// ── End Direct Messaging ─────────────────────────────────────────────────────

// ── Custom Calendar Events ────────────────────────────────────────────────────

export function getCustomEvents(userId) {
  try { return JSON.parse(localStorage.getItem(K.customEvents(userId)) || '[]'); }
  catch { return []; }
}

export function addCustomEvent(userId, data) {
  const events = getCustomEvents(userId);
  const event = { ...data, id: uid(), createdAt: new Date().toISOString() };
  localStorage.setItem(K.customEvents(userId), JSON.stringify([...events, event]));
  return event;
}

export function updateCustomEvent(userId, eventId, data) {
  const events = getCustomEvents(userId);
  const idx = events.findIndex(e => e.id === eventId);
  if (idx === -1) return null;
  events[idx] = { ...events[idx], ...data, updatedAt: new Date().toISOString() };
  localStorage.setItem(K.customEvents(userId), JSON.stringify(events));
  return events[idx];
}

export function deleteCustomEvent(userId, eventId) {
  const events = getCustomEvents(userId).filter(e => e.id !== eventId);
  localStorage.setItem(K.customEvents(userId), JSON.stringify(events));
}

// ── End Custom Calendar Events ────────────────────────────────────────────────

// ── SongBird Academy ──────────────────────────────────────────────────────────

export function getAcademyProgress(userId) {
  try { return JSON.parse(localStorage.getItem(K.academyProgress(userId)) || 'null'); }
  catch { return null; }
}

export function saveAcademyProgress(userId, progress) {
  localStorage.setItem(K.academyProgress(userId), JSON.stringify(progress));
}

export function getAcademyStreak(userId) {
  try {
    return JSON.parse(localStorage.getItem(K.academyStreak(userId)) || 'null') ||
      { currentStreak: 0, longestStreak: 0, lastActiveDate: null };
  }
  catch { return { currentStreak: 0, longestStreak: 0, lastActiveDate: null }; }
}

export function saveAcademyStreak(userId, streak) {
  localStorage.setItem(K.academyStreak(userId), JSON.stringify(streak));
}

export function getAcademyBadges(userId) {
  try { return JSON.parse(localStorage.getItem(K.academyBadges(userId)) || '{}'); }
  catch { return {}; }
}

export function saveAcademyBadges(userId, badges) {
  localStorage.setItem(K.academyBadges(userId), JSON.stringify(badges));
}

function emptyCompetitiveRanks() {
  const empty = { rank: '', division: '', badge: '' };
  return { tank: { ...empty }, damage: { ...empty }, support: { ...empty }, openQueue: { ...empty } };
}

export function getCompetitiveRanks(userId) {
  try {
    const saved = JSON.parse(localStorage.getItem(K.competitiveRanks(userId)) || 'null');
    return { ...emptyCompetitiveRanks(), ...saved };
  } catch {
    return emptyCompetitiveRanks();
  }
}

export function saveCompetitiveRanks(userId, ranks) {
  localStorage.setItem(K.competitiveRanks(userId), JSON.stringify(ranks));
}

export function getCompetitiveRanksPrefs(userId) {
  try { return JSON.parse(localStorage.getItem(K.competitiveRanksPrefs(userId)) || 'null') || { color: '#ff9c00' }; }
  catch { return { color: '#ff9c00' }; }
}

export function setCompetitiveRanksPrefs(userId, prefs) {
  localStorage.setItem(K.competitiveRanksPrefs(userId), JSON.stringify(prefs));
}

export function getMainHeroes(userId) {
  try { return JSON.parse(localStorage.getItem(K.mainHeroes(userId)) || '[]'); }
  catch { return []; }
}

export function saveMainHeroes(userId, mainHeroes) {
  localStorage.setItem(K.mainHeroes(userId), JSON.stringify(mainHeroes));
}

export function getMainHeroesPrefs(userId) {
  try { return JSON.parse(localStorage.getItem(K.mainHeroesPrefs(userId)) || 'null') || { color: '#ff9c00' }; }
  catch { return { color: '#ff9c00' }; }
}

export function setMainHeroesPrefs(userId, prefs) {
  localStorage.setItem(K.mainHeroesPrefs(userId), JSON.stringify(prefs));
}

export function getBadgePanelPrefs(userId) {
  try { return JSON.parse(localStorage.getItem(K.badgePanelPrefs(userId)) || 'null') || { color: '#ff9c00', selectedBadgeIds: [] }; }
  catch { return { color: '#ff9c00', selectedBadgeIds: [] }; }
}
export function setBadgePanelPrefs(userId, prefs) {
  localStorage.setItem(K.badgePanelPrefs(userId), JSON.stringify(prefs));
}

export function getAcademyCerts(userId) {
  try { return JSON.parse(localStorage.getItem(K.academyCerts(userId)) || '{}'); }
  catch { return {}; }
}

export function saveAcademyCerts(userId, certs) {
  localStorage.setItem(K.academyCerts(userId), JSON.stringify(certs));
}

export function getQuizResults(userId) {
  try { return JSON.parse(localStorage.getItem(K.academyQuizzes(userId)) || '{}'); }
  catch { return {}; }
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
  localStorage.setItem(K.academyQuizzes(userId), JSON.stringify(all));
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
