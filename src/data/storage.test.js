import { describe, it, expect, beforeEach, vi } from 'vitest';

// storage.js talks to Supabase for accounts/academy data/matches now, not
// localStorage — this is a tiny in-memory stand-in for the `users`/
// `sessions`/`academy_data`/`matches` tables and their Postgres functions,
// mirroring real behavior (case-insensitive username, session gating, error
// messages) closely enough for the tests below without hitting the real
// network/database.
let fakeUsers = [];
let fakeSessions = []; // { token, user_id }
let fakeAcademyData = {}; // user_id -> { progress, streak, badges, certs, quizzes }
let fakeMatches = []; // { id, user_id, data, created_at, edited_at, seq }
let fakeMatchSeq = 0;

function fakeToSafe(u) { return { id: u.id, username: u.username, avatar: u.avatar, created_at: u.created_at }; }
function fakeHash(pw) { return `hash:${pw}`; }
function fakeGenId() { return `id-${Math.random().toString(36).slice(2)}`; }
function fakeGenToken() { return `tok-${Math.random().toString(36).slice(2)}`; }

function fakeCheckSession(userId, token) {
  if (!token || !fakeSessions.some(s => s.token === token && s.user_id === userId)) {
    throw new Error('Invalid session.');
  }
}

function fakeAcademyRow(userId) {
  if (!fakeAcademyData[userId]) {
    fakeAcademyData[userId] = {
      progress: null,
      streak: { currentStreak: 0, longestStreak: 0, lastActiveDate: null },
      badges: {},
      certs: {},
      quizzes: {},
    };
  }
  return fakeAcademyData[userId];
}

class FakeQueryBuilder {
  constructor() { this.eqFilters = []; this.ilikeFilter = null; this.limitN = null; this.singleMode = null; }
  select() { return this; }
  eq(col, val) { this.eqFilters.push([col, val]); return this; }
  ilike(col, pattern) { this.ilikeFilter = [col, pattern]; return this; }
  limit(n) { this.limitN = n; return this; }
  maybeSingle() { this.singleMode = 'maybeSingle'; return this; }
  single() { this.singleMode = 'single'; return this; }
  _run() {
    let rows = fakeUsers.slice();
    for (const [col, val] of this.eqFilters) {
      rows = rows.filter(u => col === 'username' ? u.username.toLowerCase() === String(val).toLowerCase() : u[col] === val);
    }
    if (this.ilikeFilter) {
      const [col, pattern] = this.ilikeFilter;
      const re = new RegExp(`^${pattern.replace(/%/g, '.*')}$`, 'i');
      rows = rows.filter(u => re.test(u[col]));
    }
    if (this.limitN != null) rows = rows.slice(0, this.limitN);
    const safeRows = rows.map(fakeToSafe);
    if (this.singleMode === 'maybeSingle') return { data: safeRows[0] ?? null, error: null };
    if (this.singleMode === 'single') return safeRows[0] ? { data: safeRows[0], error: null } : { data: null, error: { message: 'Not found' } };
    return { data: safeRows, error: null };
  }
  then(resolve, reject) { return Promise.resolve(this._run()).then(resolve, reject); }
}

class FakeRpcBuilder {
  constructor(fn, args) { this.fn = fn; this.args = args; }
  single() { return this; }
  catch(onRejected) { return Promise.resolve(this._run()).then(undefined, onRejected); }
  _run() {
    try {
      if (this.fn === 'register_user') {
        const { p_username, p_password, p_avatar } = this.args;
        if (p_username.trim().length < 3) throw new Error('Username must be at least 3 characters.');
        if (fakeUsers.some(u => u.username.toLowerCase() === p_username.toLowerCase())) {
          throw new Error('Username already taken.');
        }
        const row = { id: fakeGenId(), username: p_username, password_hash: fakeHash(p_password), avatar: p_avatar, created_at: new Date().toISOString() };
        fakeUsers.push(row);
        const token = fakeGenToken();
        fakeSessions.push({ token, user_id: row.id });
        return { data: { ...fakeToSafe(row), session_token: token }, error: null };
      }
      if (this.fn === 'verify_login') {
        const { p_username, p_password } = this.args;
        const row = fakeUsers.find(u => u.username.toLowerCase() === p_username.toLowerCase());
        if (!row) throw new Error('Username not found.');
        if (row.password_hash !== fakeHash(p_password)) throw new Error('Incorrect password.');
        const token = fakeGenToken();
        fakeSessions.push({ token, user_id: row.id });
        return { data: { ...fakeToSafe(row), session_token: token }, error: null };
      }
      if (this.fn === 'update_user_profile') {
        const { p_user_id, p_session_token, p_username, p_avatar, p_new_password } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeUsers.find(u => u.id === p_user_id);
        if (!row) throw new Error('User not found.');
        if (p_username != null && p_username.toLowerCase() !== row.username.toLowerCase()
            && fakeUsers.some(u => u.username.toLowerCase() === p_username.toLowerCase() && u.id !== p_user_id)) {
          throw new Error('Username already taken.');
        }
        if (p_username != null) row.username = p_username;
        if (p_avatar != null) row.avatar = p_avatar;
        if (p_new_password != null) row.password_hash = fakeHash(p_new_password);
        return { data: { ...fakeToSafe(row), session_token: p_session_token }, error: null };
      }
      if (this.fn === 'sign_out') {
        const { p_user_id, p_session_token } = this.args;
        fakeSessions = fakeSessions.filter(s => !(s.token === p_session_token && s.user_id === p_user_id));
        return { data: null, error: null };
      }
      if (this.fn === 'get_academy_data') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        return { data: fakeAcademyRow(p_user_id), error: null };
      }
      if (this.fn === 'save_academy_field') {
        const { p_user_id, p_session_token, p_field, p_value } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeAcademyRow(p_user_id)[p_field] = p_value;
        return { data: null, error: null };
      }
      if (this.fn === 'save_quiz_result') {
        const { p_user_id, p_session_token, p_quiz_id, p_result } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeAcademyRow(p_user_id);
        const existing = row.quizzes[p_quiz_id] || { attempts: 0, passed: false, firstAttemptPassed: false };
        const updated = {
          attempts: existing.attempts + 1,
          score: p_result.score,
          passed: existing.passed || p_result.passed,
          firstAttemptPassed: existing.attempts === 0 && p_result.passed,
          lastAttemptAt: new Date().toISOString(),
        };
        row.quizzes[p_quiz_id] = updated;
        return { data: updated, error: null };
      }
      if (this.fn === 'get_matches') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        // Sort by insertion sequence, not the created_at string — two matches
        // added within the same test can share a millisecond-resolution
        // timestamp, which real Postgres timestamptz microsecond precision
        // wouldn't tie on, but JS Date.toISOString() can.
        const rows = fakeMatches
          .filter(m => m.user_id === p_user_id)
          .sort((a, b) => b.seq - a.seq);
        return { data: rows, error: null };
      }
      if (this.fn === 'add_match') {
        const { p_user_id, p_session_token, p_data } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = { id: fakeGenId(), user_id: p_user_id, data: p_data, created_at: new Date().toISOString(), edited_at: null, seq: ++fakeMatchSeq };
        fakeMatches.push(row);
        return { data: row, error: null };
      }
      if (this.fn === 'update_match') {
        const { p_user_id, p_session_token, p_match_id, p_data } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeMatches.find(m => m.id === p_match_id && m.user_id === p_user_id);
        if (!row) return { data: { id: null }, error: null }; // mimics an all-NULL composite row, like the real function
        row.data = { ...row.data, ...p_data };
        row.edited_at = new Date().toISOString();
        return { data: row, error: null };
      }
      if (this.fn === 'delete_match') {
        const { p_user_id, p_session_token, p_match_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeMatches = fakeMatches.filter(m => !(m.id === p_match_id && m.user_id === p_user_id));
        return { data: null, error: null };
      }
      if (this.fn === 'clear_matches') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeMatches = fakeMatches.filter(m => m.user_id !== p_user_id);
        return { data: null, error: null };
      }
      throw new Error(`Unknown rpc: ${this.fn}`);
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }
  then(resolve, reject) { return Promise.resolve(this._run()).then(resolve, reject); }
}

vi.mock('../lib/supabaseClient.js', () => ({
  supabase: {
    from() { return new FakeQueryBuilder(); },
    rpc(fn, args) { return new FakeRpcBuilder(fn, args); },
  },
}));

import {
  createUser, getUserByUsername, getUserById, updateUser, verifyLogin, searchUsers, signOut,
  getSession, saveSession, clearSession,
  getMatches, addMatch, updateMatch, deleteMatch, clearMatches,
  getAcademyProgress, saveAcademyProgress, getAcademyStreak, saveAcademyStreak,
  getAcademyBadges, saveAcademyBadges, getAcademyCerts, saveAcademyCerts,
  getQuizResults, saveQuizResult, getAllAcademyData,
  getFriends, addFriend, removeFriend,
  getFriendRequests, getOutboundRequests, sendFriendRequest, acceptFriendRequest, cancelFriendRequest, declineFriendRequest,
  getDMMessages, sendDM, deleteDM, markDMRead, getTotalDMUnread, reactToDM,
  getCustomEvents, addCustomEvent, updateCustomEvent, deleteCustomEvent,
} from './storage.js';

// Vitest's default environment is plain Node, which has no `localStorage`
// global (unlike jsdom/the browser) — storage.js expects one, so this is a
// minimal in-memory stand-in, reset before every test for isolation.
class MemoryStorage {
  constructor() { this.store = {}; }
  getItem(key) { return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null; }
  setItem(key, value) { this.store[key] = String(value); }
  removeItem(key) { delete this.store[key]; }
  clear() { this.store = {}; }
}

beforeEach(() => {
  globalThis.localStorage = new MemoryStorage();
  fakeUsers = [];
  fakeSessions = [];
  fakeAcademyData = {};
  fakeMatches = [];
  fakeMatchSeq = 0;
});

// Registers a fresh fake user and establishes a local session for them —
// mirrors what AuthContext does after register()/login(), which the
// session-token-gated functions (updateUser, matches, academy data) require.
async function registerAndSignIn(username) {
  const user = await createUser({ username, password: 'testpass1', avatar: 'a.png' });
  saveSession(user.id, user.session_token);
  return user;
}

describe('users / auth', () => {
  it('creates a user and never returns a password field', async () => {
    const user = await createUser({ username: 'Tracer', password: 'blink123', avatar: 'tracer.png' });
    expect(user.username).toBe('Tracer');
    expect(user.id).toBeTypeOf('string');
    expect(user.password).toBeUndefined();
    expect(user.password_hash).toBeUndefined();
  });

  it('rejects a username shorter than 3 characters', async () => {
    await expect(createUser({ username: 'ab', password: 'blink123', avatar: 'a.png' }))
      .rejects.toThrow('Username must be at least 3 characters.');
  });

  it('looks users up by username case-insensitively', async () => {
    await createUser({ username: 'Tracer', password: 'blink123', avatar: 'a.png' });
    expect((await getUserByUsername('tracer'))?.username).toBe('Tracer');
    expect((await getUserByUsername('TRACER'))?.username).toBe('Tracer');
    expect(await getUserByUsername('nobody')).toBeNull();
  });

  it('rejects creating a duplicate username regardless of case', async () => {
    await createUser({ username: 'Tracer', password: 'blink123', avatar: 'a.png' });
    await expect(createUser({ username: 'tracer', password: 'other', avatar: 'b.png' }))
      .rejects.toThrow('Username already taken.');
  });

  it('verifyLogin succeeds with the right password and fails otherwise', async () => {
    await createUser({ username: 'Reaper', password: 'wraith', avatar: 'r.png' });
    const user = await verifyLogin('Reaper', 'wraith');
    expect(user.username).toBe('Reaper');

    await expect(verifyLogin('Reaper', 'wrong')).rejects.toThrow('Incorrect password.');
    await expect(verifyLogin('Nobody', 'wraith')).rejects.toThrow('Username not found.');
  });

  it('updateUser changes the password without exposing it, and the new password works on next login', async () => {
    const created = await registerAndSignIn('Ana');
    const updated = await updateUser(created.id, { password: 'nano456' });
    expect(updated.password).toBeUndefined();
    await expect(verifyLogin('Ana', 'nano456')).resolves.toBeTruthy();
    await expect(verifyLogin('Ana', 'testpass1')).rejects.toThrow();
  });

  it('updateUser rejects renaming to a username already taken by someone else', async () => {
    await createUser({ username: 'Widow', password: 'p1', avatar: 'w.png' });
    const other = await registerAndSignIn('Sombra');
    await expect(updateUser(other.id, { username: 'widow' })).rejects.toThrow('Username already taken.');
  });

  it('updateUser rejects without a valid session', async () => {
    const created = await createUser({ username: 'Genji', password: 'p1', avatar: 'g.png' });
    clearSession();
    await expect(updateUser(created.id, { avatar: 'new.png' })).rejects.toThrow('Invalid session.');
  });

  it('signOut invalidates the session so protected calls fail afterwards', async () => {
    const user = await registerAndSignIn('Hanzo');
    const session = getSession();
    await signOut(session.userId, session.sessionToken);
    await expect(updateUser(user.id, { avatar: 'new.png' })).rejects.toThrow('Invalid session.');
  });

  it('searchUsers matches by substring and never leaks the password hash', async () => {
    await createUser({ username: 'Junkrat', password: 'p1', avatar: 'j.png' });
    await createUser({ username: 'Roadhog', password: 'p2', avatar: 'r.png' });
    const results = await searchUsers('junk');
    expect(results).toHaveLength(1);
    expect(results[0].username).toBe('Junkrat');
    expect(results[0].password_hash).toBeUndefined();
    await expect(searchUsers('')).resolves.toEqual([]);
  });

  it('getUserById finds the created user', async () => {
    const created = await createUser({ username: 'Mercy', password: 'p1', avatar: 'm.png' });
    expect((await getUserById(created.id))?.username).toBe('Mercy');
    expect(await getUserById('missing-id')).toBeNull();
  });
});

describe('session', () => {
  it('saves, reads, and clears the session, including the session token', () => {
    expect(getSession()).toBeNull();
    saveSession('user-123', 'tok-abc');
    expect(getSession()).toEqual({ userId: 'user-123', sessionToken: 'tok-abc' });
    clearSession();
    expect(getSession()).toBeNull();
  });
});

describe('matches', () => {
  it('adds matches newest-first and reads them back', async () => {
    const user = await registerAndSignIn('MatchUser1');
    expect(await getMatches(user.id)).toEqual([]);
    const first = await addMatch(user.id, { result: 'Win', role: 'Tank' });
    const second = await addMatch(user.id, { result: 'Loss', role: 'Tank' });
    const matches = await getMatches(user.id);
    expect(matches).toHaveLength(2);
    expect(matches[0].id).toBe(second.id); // newest first
    expect(matches[1].id).toBe(first.id);
  });

  it('updates and deletes a specific match without touching others', async () => {
    const user = await registerAndSignIn('MatchUser2');
    const a = await addMatch(user.id, { result: 'Win' });
    const b = await addMatch(user.id, { result: 'Loss' });
    await updateMatch(user.id, a.id, { result: 'Draw' });
    expect((await getMatches(user.id)).find(m => m.id === a.id).result).toBe('Draw');

    await deleteMatch(user.id, b.id);
    const remaining = await getMatches(user.id);
    expect(remaining).toHaveLength(1);
    expect(remaining[0].id).toBe(a.id);
  });

  it('updateMatch on a missing id is a no-op that returns null', async () => {
    const user = await registerAndSignIn('MatchUser3');
    await addMatch(user.id, { result: 'Win' });
    expect(await updateMatch(user.id, 'nonexistent', { result: 'Loss' })).toBeNull();
    expect(await getMatches(user.id)).toHaveLength(1);
  });

  it('clearMatches empties only that user\'s matches', async () => {
    const u1 = await registerAndSignIn('MatchUser4');
    await addMatch(u1.id, { result: 'Win' });

    const u2 = await registerAndSignIn('MatchUser5'); // session now belongs to u2
    await addMatch(u2.id, { result: 'Win' });

    saveSession(u1.id, u1.session_token); // switch back to clear u1's own matches
    await clearMatches(u1.id);
    expect(await getMatches(u1.id)).toEqual([]);

    saveSession(u2.id, u2.session_token);
    expect(await getMatches(u2.id)).toHaveLength(1);
  });

  it('scopes matches per user', async () => {
    const u1 = await registerAndSignIn('MatchUser6');
    await addMatch(u1.id, { result: 'Win' });

    const u2 = await registerAndSignIn('MatchUser7'); // session now belongs to u2
    expect(await getMatches(u2.id)).toEqual([]);
  });

  it('rejects match operations without a valid session for that user', async () => {
    const user = await registerAndSignIn('MatchUser8');
    clearSession();
    await expect(getMatches(user.id)).rejects.toThrow('Invalid session.');
    await expect(addMatch(user.id, { result: 'Win' })).rejects.toThrow('Invalid session.');
  });
});

describe('academy data', () => {
  it('defaults to empty/blank academy data for a brand-new user', async () => {
    const user = await registerAndSignIn('AcaUser1');
    expect(await getAcademyProgress(user.id)).toBeNull();
    expect(await getAcademyStreak(user.id)).toEqual({ currentStreak: 0, longestStreak: 0, lastActiveDate: null });
    expect(await getAcademyBadges(user.id)).toEqual({});
    expect(await getAcademyCerts(user.id)).toEqual({});
    expect(await getQuizResults(user.id)).toEqual({});
  });

  it('saves and reads back each academy field independently', async () => {
    const user = await registerAndSignIn('AcaUser2');
    await saveAcademyProgress(user.id, { xp: 120, lessonsCompleted: ['b01'] });
    await saveAcademyStreak(user.id, { currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-07-07' });
    await saveAcademyBadges(user.id, { 'first-lesson': { earnedAt: '2026-07-01' } });
    await saveAcademyCerts(user.id, { beginner: { issuedAt: '2026-07-05' } });

    expect(await getAcademyProgress(user.id)).toEqual({ xp: 120, lessonsCompleted: ['b01'] });
    expect(await getAcademyStreak(user.id)).toEqual({ currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-07-07' });
    expect(await getAcademyBadges(user.id)).toEqual({ 'first-lesson': { earnedAt: '2026-07-01' } });
    expect(await getAcademyCerts(user.id)).toEqual({ beginner: { issuedAt: '2026-07-05' } });
  });

  it('getAllAcademyData fetches every field in one call', async () => {
    const user = await registerAndSignIn('AcaUser3');
    await saveAcademyProgress(user.id, { xp: 50 });
    await saveAcademyBadges(user.id, { badge1: { earnedAt: 'x' } });

    const all = await getAllAcademyData(user.id);
    expect(all.progress).toEqual({ xp: 50 });
    expect(all.badges).toEqual({ badge1: { earnedAt: 'x' } });
    expect(all.streak).toEqual({ currentStreak: 0, longestStreak: 0, lastActiveDate: null });
  });

  it('saveQuizResult tracks attempts, first-attempt-pass, and pass-ever server-side', async () => {
    const user = await registerAndSignIn('AcaUser4');

    const first = await saveQuizResult(user.id, 'quiz-1', { score: 40, passed: false });
    expect(first).toMatchObject({ attempts: 1, passed: false, firstAttemptPassed: false });

    const second = await saveQuizResult(user.id, 'quiz-1', { score: 100, passed: true });
    expect(second).toMatchObject({ attempts: 2, passed: true, firstAttemptPassed: false });

    expect((await getQuizResults(user.id))['quiz-1']).toMatchObject({ attempts: 2, passed: true });
  });

  it('saveQuizResult marks firstAttemptPassed true only on an actual first attempt', async () => {
    const user = await registerAndSignIn('AcaUser5');
    const result = await saveQuizResult(user.id, 'quiz-2', { score: 100, passed: true });
    expect(result).toMatchObject({ attempts: 1, passed: true, firstAttemptPassed: true });
  });

  it('rejects academy data access without a valid session', async () => {
    const user = await registerAndSignIn('AcaUser6');
    clearSession();
    await expect(getAcademyProgress(user.id)).rejects.toThrow('Invalid session.');
    await expect(saveAcademyProgress(user.id, { xp: 1 })).rejects.toThrow('Invalid session.');
  });

  it('scopes academy data per user', async () => {
    const u1 = await registerAndSignIn('AcaUser7');
    await saveAcademyProgress(u1.id, { xp: 999 });

    const u2 = await registerAndSignIn('AcaUser8'); // session now belongs to u2
    expect(await getAcademyProgress(u2.id)).toBeNull();
  });
});

describe('friends and friend requests', () => {
  it('silently no-ops if the sender is not a real, stored user', async () => {
    await sendFriendRequest('u1', 'u2'); // neither id corresponds to a createUser() record
    expect(getFriendRequests('u2')).toHaveLength(0);
  });

  it('full request → accept flow adds each user to the other\'s friend list', async () => {
    const alice = await createUser({ username: 'Alice', password: 'p', avatar: 'a.png' });
    const bob = await createUser({ username: 'Bob', password: 'p', avatar: 'b.png' });

    await sendFriendRequest(alice.id, bob.id);
    expect(getFriendRequests(bob.id)).toHaveLength(1);
    expect(getFriendRequests(bob.id)[0].fromUsername).toBe('Alice');
    expect(getOutboundRequests(alice.id)).toEqual([bob.id]);

    acceptFriendRequest(bob.id, alice.id);
    expect(getFriends(bob.id)).toContain(alice.id);
    expect(getFriends(alice.id)).toContain(bob.id);
    expect(getFriendRequests(bob.id)).toHaveLength(0);
    expect(getOutboundRequests(alice.id)).toHaveLength(0);
  });

  it('does not let a user send a request to themself', async () => {
    await sendFriendRequest('u1', 'u1');
    expect(getFriendRequests('u1')).toHaveLength(0);
  });

  it('does not duplicate a request that is already pending', async () => {
    const alice = await createUser({ username: 'Alice2', password: 'p', avatar: 'a.png' });
    await sendFriendRequest(alice.id, 'u2');
    await sendFriendRequest(alice.id, 'u2');
    expect(getFriendRequests('u2')).toHaveLength(1);
  });

  it('does not send a request to an existing friend', async () => {
    const alice = await createUser({ username: 'Alice3', password: 'p', avatar: 'a.png' });
    addFriend(alice.id, 'u2');
    await sendFriendRequest(alice.id, 'u2');
    expect(getFriendRequests('u2')).toHaveLength(0);
  });

  it('declineFriendRequest and cancelFriendRequest both clear the pending pair', async () => {
    const alice = await createUser({ username: 'Alice4', password: 'p', avatar: 'a.png' });
    await sendFriendRequest(alice.id, 'u2');
    declineFriendRequest('u2', alice.id);
    expect(getFriendRequests('u2')).toHaveLength(0);
    expect(getOutboundRequests(alice.id)).toHaveLength(0);

    await sendFriendRequest(alice.id, 'u3');
    cancelFriendRequest(alice.id, 'u3');
    expect(getFriendRequests('u3')).toHaveLength(0);
    expect(getOutboundRequests(alice.id)).toHaveLength(0);
  });

  it('removeFriend removes only that friendship', () => {
    addFriend('u1', 'u2');
    addFriend('u1', 'u3');
    removeFriend('u1', 'u2');
    expect(getFriends('u1')).toEqual(['u3']);
  });
});

describe('direct messages', () => {
  it('sends a message and increments the recipient\'s unread count', () => {
    const msg = sendDM('u1', 'u2', 'hello');
    expect(getDMMessages('u1', 'u2')).toHaveLength(1);
    expect(msg.text).toBe('hello');
    expect(getTotalDMUnread('u2')).toBe(1);
    expect(getTotalDMUnread('u1')).toBe(0);
  });

  it('markDMRead clears unread and stamps readAt on the other user\'s messages', () => {
    sendDM('u1', 'u2', 'hi');
    markDMRead('u2', 'u1');
    expect(getTotalDMUnread('u2')).toBe(0);
    const msgs = getDMMessages('u2', 'u1');
    expect(msgs[0].readAt).not.toBeNull();
  });

  it('deleting your own unread message removes it outright', () => {
    const msg = sendDM('u1', 'u2', 'oops');
    deleteDM('u1', 'u2', msg.id);
    expect(getDMMessages('u1', 'u2')).toHaveLength(0);
  });

  it('deleting your own already-read message soft-deletes it (keeps the row, blanks the text)', () => {
    const msg = sendDM('u1', 'u2', 'seen this');
    markDMRead('u2', 'u1');
    deleteDM('u1', 'u2', msg.id);
    const msgs = getDMMessages('u1', 'u2');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].deletedBySender).toBe(true);
    expect(msgs[0].text).toBe('');
  });

  it('deleting a message you received only flags it as deleted for you', () => {
    const msg = sendDM('u1', 'u2', 'from u1');
    deleteDM('u2', 'u1', msg.id);
    const msgs = getDMMessages('u2', 'u1');
    expect(msgs[0].deletedByReceiver).toBe(true);
    expect(msgs[0].text).toBe('from u1'); // untouched for the sender's copy
  });

  it('reacting toggles a user in/out of that emoji\'s reaction list', () => {
    const msg = sendDM('u1', 'u2', 'gg');
    reactToDM('u1', 'u2', msg.id, '🔥');
    expect(getDMMessages('u1', 'u2')[0].reactions['🔥']).toEqual(['u1']);

    reactToDM('u1', 'u2', msg.id, '🔥');
    expect(getDMMessages('u1', 'u2')[0].reactions['🔥']).toBeUndefined();
  });
});

describe('custom calendar events', () => {
  it('adds, updates, and deletes a personal event', () => {
    expect(getCustomEvents('u1')).toEqual([]);
    const ev = addCustomEvent('u1', { title: 'Scrim night', startDate: '2026-08-01', endDate: '2026-08-01' });
    expect(getCustomEvents('u1')).toHaveLength(1);

    const updated = updateCustomEvent('u1', ev.id, { title: 'Scrim night (rescheduled)' });
    expect(updated.title).toBe('Scrim night (rescheduled)');
    expect(updated.updatedAt).toBeTypeOf('string');

    deleteCustomEvent('u1', ev.id);
    expect(getCustomEvents('u1')).toEqual([]);
  });

  it('updateCustomEvent on a missing id is a no-op that returns null', () => {
    expect(updateCustomEvent('u1', 'missing', { title: 'x' })).toBeNull();
  });

  it('scopes custom events per user', () => {
    addCustomEvent('u1', { title: 'Only u1' });
    expect(getCustomEvents('u2')).toEqual([]);
  });
});
