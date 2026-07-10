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
let fakeUserPrefs = {}; // user_id -> { main_heroes, main_heroes_prefs, competitive_ranks, competitive_ranks_prefs, badge_panel_prefs, sent_notifications, easter_eggs }
let fakeCustomEvents = []; // { id, user_id, data, created_at, updated_at, seq }
let fakeCustomEventSeq = 0;
let fakeFriends = []; // { user_id, friend_id }
let fakeFriendRequests = []; // { from_id, to_id, sent_at }
let fakeDMMessages = []; // { id, from_id, to_id, text, sent_at, read_at, deleted_by_sender, deleted_by_receiver, reactions, seq }
let fakeDMMessageSeq = 0;

function fakeToSafe(u) { return { id: u.id, username: u.username, avatar: u.avatar, created_at: u.created_at }; }
function fakeHash(pw) { return `hash:${pw}`; }
function fakeGenId() { return `id-${Math.random().toString(36).slice(2)}`; }
function fakeGenToken() { return `tok-${Math.random().toString(36).slice(2)}`; }

function fakeCheckSession(userId, token) {
  if (!token || !fakeSessions.some(s => s.token === token && s.user_id === userId)) {
    throw new Error('Invalid session.');
  }
}

function fakeCheckFriendOrSelf(viewerId, viewerToken, targetId) {
  fakeCheckSession(viewerId, viewerToken);
  if (viewerId === targetId) return;
  if (!fakeFriends.some(f => f.user_id === viewerId && f.friend_id === targetId)) {
    throw new Error('Not authorized to view this profile.');
  }
}

function fakeCheckAreFriends(userId, token, friendId) {
  fakeCheckSession(userId, token);
  if (!fakeFriends.some(f => f.user_id === userId && f.friend_id === friendId)) {
    throw new Error('Not friends with this user.');
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

function fakeUserPrefsRow(userId) {
  if (!fakeUserPrefs[userId]) {
    fakeUserPrefs[userId] = {
      main_heroes: [],
      main_heroes_prefs: { color: '#ff9c00' },
      competitive_ranks: {
        tank: { rank: '', division: '', badge: '' },
        damage: { rank: '', division: '', badge: '' },
        support: { rank: '', division: '', badge: '' },
        openQueue: { rank: '', division: '', badge: '' },
      },
      competitive_ranks_prefs: { color: '#ff9c00' },
      badge_panel_prefs: { color: '#ff9c00', selectedBadgeIds: [] },
      sent_notifications: {},
      easter_eggs: [],
    };
  }
  return fakeUserPrefs[userId];
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
      if (this.fn === 'get_academy_data_for') {
        const { p_viewer_id, p_viewer_token, p_target_id } = this.args;
        fakeCheckFriendOrSelf(p_viewer_id, p_viewer_token, p_target_id);
        return { data: fakeAcademyRow(p_target_id), error: null };
      }
      if (this.fn === 'get_matches_for') {
        const { p_viewer_id, p_viewer_token, p_target_id } = this.args;
        fakeCheckFriendOrSelf(p_viewer_id, p_viewer_token, p_target_id);
        const rows = fakeMatches.filter(m => m.user_id === p_target_id).sort((a, b) => b.seq - a.seq);
        return { data: rows, error: null };
      }
      if (this.fn === 'get_user_prefs') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        return { data: fakeUserPrefsRow(p_user_id), error: null };
      }
      if (this.fn === 'get_user_prefs_for') {
        const { p_viewer_id, p_viewer_token, p_target_id } = this.args;
        fakeCheckFriendOrSelf(p_viewer_id, p_viewer_token, p_target_id);
        return { data: fakeUserPrefsRow(p_target_id), error: null };
      }
      if (this.fn === 'save_user_pref_field') {
        const { p_user_id, p_session_token, p_field, p_value } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const fieldMap = {
          mainHeroes: 'main_heroes',
          mainHeroesPrefs: 'main_heroes_prefs',
          competitiveRanks: 'competitive_ranks',
          competitiveRanksPrefs: 'competitive_ranks_prefs',
          badgePanelPrefs: 'badge_panel_prefs',
          sentNotifications: 'sent_notifications',
          easterEggs: 'easter_eggs',
        };
        const column = fieldMap[p_field];
        if (!column) throw new Error(`Unknown user_prefs field: ${p_field}`);
        fakeUserPrefsRow(p_user_id)[column] = p_value;
        return { data: null, error: null };
      }
      if (this.fn === 'get_custom_events') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const rows = fakeCustomEvents.filter(e => e.user_id === p_user_id).sort((a, b) => a.seq - b.seq);
        return { data: rows, error: null };
      }
      if (this.fn === 'add_custom_event') {
        const { p_user_id, p_session_token, p_data } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = { id: fakeGenId(), user_id: p_user_id, data: p_data, created_at: new Date().toISOString(), updated_at: null, seq: ++fakeCustomEventSeq };
        fakeCustomEvents.push(row);
        return { data: row, error: null };
      }
      if (this.fn === 'update_custom_event') {
        const { p_user_id, p_session_token, p_event_id, p_data } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeCustomEvents.find(e => e.id === p_event_id && e.user_id === p_user_id);
        if (!row) return { data: { id: null }, error: null };
        row.data = { ...row.data, ...p_data };
        row.updated_at = new Date().toISOString();
        return { data: row, error: null };
      }
      if (this.fn === 'delete_custom_event') {
        const { p_user_id, p_session_token, p_event_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeCustomEvents = fakeCustomEvents.filter(e => !(e.id === p_event_id && e.user_id === p_user_id));
        return { data: null, error: null };
      }
      if (this.fn === 'get_friends') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        return { data: fakeFriends.filter(f => f.user_id === p_user_id).map(f => f.friend_id), error: null };
      }
      if (this.fn === 'remove_friend') {
        const { p_user_id, p_session_token, p_friend_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeFriends = fakeFriends.filter(f =>
          !((f.user_id === p_user_id && f.friend_id === p_friend_id) || (f.user_id === p_friend_id && f.friend_id === p_user_id))
        );
        return { data: null, error: null };
      }
      if (this.fn === 'get_friend_requests') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const rows = fakeFriendRequests
          .filter(r => r.to_id === p_user_id)
          .map(r => {
            const u = fakeUsers.find(x => x.id === r.from_id);
            return { from_id: r.from_id, from_username: u?.username, from_avatar: u?.avatar, sent_at: r.sent_at };
          });
        return { data: rows, error: null };
      }
      if (this.fn === 'get_outbound_requests') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        return { data: fakeFriendRequests.filter(r => r.from_id === p_user_id).map(r => r.to_id), error: null };
      }
      if (this.fn === 'send_friend_request') {
        const { p_from_id, p_session_token, p_to_id } = this.args;
        fakeCheckSession(p_from_id, p_session_token);
        if (p_from_id === p_to_id) return { data: null, error: null };
        if (fakeFriends.some(f => f.user_id === p_from_id && f.friend_id === p_to_id)) return { data: null, error: null };
        if (fakeFriendRequests.some(r => r.from_id === p_from_id && r.to_id === p_to_id)) return { data: null, error: null };
        fakeFriendRequests.push({ from_id: p_from_id, to_id: p_to_id, sent_at: new Date().toISOString() });
        return { data: null, error: null };
      }
      if (this.fn === 'accept_friend_request') {
        const { p_user_id, p_session_token, p_from_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        if (!fakeFriends.some(f => f.user_id === p_user_id && f.friend_id === p_from_id)) {
          fakeFriends.push({ user_id: p_user_id, friend_id: p_from_id });
        }
        if (!fakeFriends.some(f => f.user_id === p_from_id && f.friend_id === p_user_id)) {
          fakeFriends.push({ user_id: p_from_id, friend_id: p_user_id });
        }
        fakeFriendRequests = fakeFriendRequests.filter(r => !(r.from_id === p_from_id && r.to_id === p_user_id));
        return { data: null, error: null };
      }
      if (this.fn === 'cancel_friend_request') {
        const { p_from_id, p_session_token, p_to_id } = this.args;
        fakeCheckSession(p_from_id, p_session_token);
        fakeFriendRequests = fakeFriendRequests.filter(r => !(r.from_id === p_from_id && r.to_id === p_to_id));
        return { data: null, error: null };
      }
      if (this.fn === 'decline_friend_request') {
        const { p_user_id, p_session_token, p_from_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        fakeFriendRequests = fakeFriendRequests.filter(r => !(r.from_id === p_from_id && r.to_id === p_user_id));
        return { data: null, error: null };
      }
      if (this.fn === 'get_dm_messages') {
        const { p_user_id, p_session_token, p_friend_id } = this.args;
        fakeCheckAreFriends(p_user_id, p_session_token, p_friend_id);
        const rows = fakeDMMessages
          .filter(m => (m.from_id === p_user_id && m.to_id === p_friend_id) || (m.from_id === p_friend_id && m.to_id === p_user_id))
          .sort((a, b) => a.seq - b.seq);
        return { data: rows, error: null };
      }
      if (this.fn === 'get_dm_conversations') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const friendIds = fakeFriends.filter(f => f.user_id === p_user_id).map(f => f.friend_id);
        const rows = friendIds.map(friendId => {
          const thread = fakeDMMessages
            .filter(m => (m.from_id === p_user_id && m.to_id === friendId) || (m.from_id === friendId && m.to_id === p_user_id))
            .sort((a, b) => b.seq - a.seq);
          const last = thread[0];
          const unread = fakeDMMessages.filter(m =>
            m.from_id === friendId && m.to_id === p_user_id && m.read_at == null && !m.deleted_by_receiver
          ).length;
          return {
            friend_id: friendId,
            last_text: last ? last.text : null,
            last_sent_at: last ? last.sent_at : null,
            last_from_id: last ? last.from_id : null,
            last_deleted_by_sender: last ? last.deleted_by_sender : null,
            unread_count: unread,
          };
        });
        return { data: rows, error: null };
      }
      if (this.fn === 'get_total_dm_unread') {
        const { p_user_id, p_session_token } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const count = fakeDMMessages.filter(m => m.to_id === p_user_id && m.read_at == null && !m.deleted_by_receiver).length;
        return { data: count, error: null };
      }
      if (this.fn === 'send_dm') {
        const { p_user_id, p_session_token, p_friend_id, p_text } = this.args;
        fakeCheckAreFriends(p_user_id, p_session_token, p_friend_id);
        const trimmed = p_text.trim();
        if (!trimmed) throw new Error('Message cannot be empty.');
        const row = {
          id: fakeGenId(), from_id: p_user_id, to_id: p_friend_id, text: trimmed,
          sent_at: new Date().toISOString(), read_at: null,
          deleted_by_sender: false, deleted_by_receiver: false, reactions: {}, seq: ++fakeDMMessageSeq,
        };
        fakeDMMessages.push(row);
        return { data: row, error: null };
      }
      if (this.fn === 'delete_dm') {
        const { p_user_id, p_session_token, p_message_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeDMMessages.find(m => m.id === p_message_id);
        if (!row) return { data: null, error: null };
        if (row.from_id !== p_user_id && row.to_id !== p_user_id) throw new Error('Not authorized to delete this message.');
        if (row.from_id === p_user_id) {
          if (row.read_at == null) {
            fakeDMMessages = fakeDMMessages.filter(m => m.id !== p_message_id);
          } else {
            row.deleted_by_sender = true;
            row.text = '';
          }
        } else {
          row.deleted_by_receiver = true;
        }
        return { data: null, error: null };
      }
      if (this.fn === 'react_to_dm') {
        const { p_user_id, p_session_token, p_message_id, p_emoji } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const row = fakeDMMessages.find(m => m.id === p_message_id);
        if (!row) throw new Error('Message not found.');
        if (row.from_id !== p_user_id && row.to_id !== p_user_id) throw new Error('Not authorized to react to this message.');
        const users = row.reactions[p_emoji] || [];
        const pos = users.indexOf(p_user_id);
        if (pos === -1) users.push(p_user_id); else users.splice(pos, 1);
        if (users.length === 0) delete row.reactions[p_emoji];
        else row.reactions[p_emoji] = users;
        return { data: null, error: null };
      }
      if (this.fn === 'mark_dm_read') {
        const { p_user_id, p_session_token, p_friend_id } = this.args;
        fakeCheckSession(p_user_id, p_session_token);
        const now = new Date().toISOString();
        fakeDMMessages.forEach(m => {
          if (m.from_id === p_friend_id && m.to_id === p_user_id && m.read_at == null) m.read_at = now;
        });
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
  createUser, getUserById, updateUser, verifyLogin, searchUsers, signOut,
  getSession, saveSession, clearSession,
  getMatches, addMatch, updateMatch, deleteMatch, clearMatches,
  getAcademyProgress, saveAcademyProgress, saveAcademyStreak,
  getAcademyBadges, saveAcademyBadges, saveAcademyCerts,
  saveQuizResult, getAllAcademyData,
  getCompetitiveRanks, saveCompetitiveRanks, getCompetitiveRanksPrefs, setCompetitiveRanksPrefs,
  getMainHeroes, saveMainHeroes, getMainHeroesPrefs, setMainHeroesPrefs,
  getBadgePanelPrefs, setBadgePanelPrefs, getSentNotifications, saveSentNotifications,
  getEasterEggsFor, saveEasterEggsFor,
  getFriends, removeFriend,
  getFriendRequests, getOutboundRequests, sendFriendRequest, acceptFriendRequest, cancelFriendRequest, declineFriendRequest,
  getDMMessages, getDMConversations, sendDM, deleteDM, markDMRead, getTotalDMUnread, reactToDM,
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
  fakeUserPrefs = {};
  fakeCustomEvents = [];
  fakeCustomEventSeq = 0;
  fakeFriends = [];
  fakeFriendRequests = [];
  fakeDMMessages = [];
  fakeDMMessageSeq = 0;
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

  it('round-trips an object-shaped avatar ({type,value}) through create, update, and read', async () => {
    const created = await createUser({ username: 'Sombra', password: 'ghost123', avatar: { type: 'hero', value: 'sombra' } });
    expect(created.avatar).toEqual({ type: 'hero', value: 'sombra' });
    expect(await getUserById(created.id)).toMatchObject({ avatar: { type: 'hero', value: 'sombra' } });

    saveSession(created.id, created.session_token);
    const updated = await updateUser(created.id, { avatar: { type: 'hero', value: 'hanzo' } });
    expect(updated.avatar).toEqual({ type: 'hero', value: 'hanzo' });
    expect(await getUserById(created.id)).toMatchObject({ avatar: { type: 'hero', value: 'hanzo' } });
  });

  it('rejects a username shorter than 3 characters', async () => {
    await expect(createUser({ username: 'ab', password: 'blink123', avatar: 'a.png' }))
      .rejects.toThrow('Username must be at least 3 characters.');
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
    expect(await getAcademyBadges(user.id)).toEqual({});
  });

  it('saves and reads back each academy field independently', async () => {
    const user = await registerAndSignIn('AcaUser2');
    await saveAcademyProgress(user.id, { xp: 120, lessonsCompleted: ['b01'] });
    await saveAcademyBadges(user.id, { 'first-lesson': { earnedAt: '2026-07-01' } });

    expect(await getAcademyProgress(user.id)).toEqual({ xp: 120, lessonsCompleted: ['b01'] });
    expect(await getAcademyBadges(user.id)).toEqual({ 'first-lesson': { earnedAt: '2026-07-01' } });
  });

  it('getAllAcademyData fetches every field in one call, defaulting streak/certs/quizzes', async () => {
    const user = await registerAndSignIn('AcaUser3');
    await saveAcademyProgress(user.id, { xp: 50 });
    await saveAcademyBadges(user.id, { badge1: { earnedAt: 'x' } });
    await saveAcademyStreak(user.id, { currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-07-07' });
    await saveAcademyCerts(user.id, { beginner: { issuedAt: '2026-07-05' } });

    const all = await getAllAcademyData(user.id);
    expect(all.progress).toEqual({ xp: 50 });
    expect(all.badges).toEqual({ badge1: { earnedAt: 'x' } });
    expect(all.streak).toEqual({ currentStreak: 3, longestStreak: 5, lastActiveDate: '2026-07-07' });
    expect(all.certs).toEqual({ beginner: { issuedAt: '2026-07-05' } });
    expect(all.quizzes).toEqual({});
  });

  it('saveQuizResult tracks attempts, first-attempt-pass, and pass-ever server-side', async () => {
    const user = await registerAndSignIn('AcaUser4');

    const first = await saveQuizResult(user.id, 'quiz-1', { score: 40, passed: false });
    expect(first).toMatchObject({ attempts: 1, passed: false, firstAttemptPassed: false });

    const second = await saveQuizResult(user.id, 'quiz-1', { score: 100, passed: true });
    expect(second).toMatchObject({ attempts: 2, passed: true, firstAttemptPassed: false });

    expect((await getAllAcademyData(user.id)).quizzes['quiz-1']).toMatchObject({ attempts: 2, passed: true });
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
  it('full request → accept flow adds each user to the other\'s friend list', async () => {
    const alice = await registerAndSignIn('Alice');
    const bob = await createUser({ username: 'Bob', password: 'p', avatar: 'b.png' });

    await sendFriendRequest(alice.id, bob.id);

    saveSession(bob.id, bob.session_token);
    expect(await getFriendRequests(bob.id)).toHaveLength(1);
    expect((await getFriendRequests(bob.id))[0].fromUsername).toBe('Alice');

    saveSession(alice.id, alice.session_token);
    expect(await getOutboundRequests(alice.id)).toEqual([bob.id]);

    saveSession(bob.id, bob.session_token);
    await acceptFriendRequest(bob.id, alice.id);
    expect(await getFriends(bob.id)).toContain(alice.id);
    expect(await getFriendRequests(bob.id)).toHaveLength(0);

    saveSession(alice.id, alice.session_token);
    expect(await getFriends(alice.id)).toContain(bob.id);
    expect(await getOutboundRequests(alice.id)).toHaveLength(0);
  });

  it('does not let a user send a request to themself', async () => {
    const alice = await registerAndSignIn('AliceSelf');
    await sendFriendRequest(alice.id, alice.id);
    expect(await getFriendRequests(alice.id)).toHaveLength(0);
  });

  it('does not duplicate a request that is already pending', async () => {
    const alice = await registerAndSignIn('Alice2');
    const bob = await createUser({ username: 'Bob2', password: 'p', avatar: 'b.png' });
    await sendFriendRequest(alice.id, bob.id);
    await sendFriendRequest(alice.id, bob.id);

    saveSession(bob.id, bob.session_token);
    expect(await getFriendRequests(bob.id)).toHaveLength(1);
  });

  it('does not send a request to an existing friend', async () => {
    const alice = await registerAndSignIn('Alice3');
    const bob = await createUser({ username: 'Bob3', password: 'p', avatar: 'b.png' });

    await sendFriendRequest(alice.id, bob.id);
    saveSession(bob.id, bob.session_token);
    await acceptFriendRequest(bob.id, alice.id); // now friends

    saveSession(alice.id, alice.session_token);
    await sendFriendRequest(alice.id, bob.id); // already friends — should no-op

    saveSession(bob.id, bob.session_token);
    expect(await getFriendRequests(bob.id)).toHaveLength(0);
  });

  it('declineFriendRequest and cancelFriendRequest both clear the pending pair', async () => {
    const alice = await registerAndSignIn('Alice4');
    const bob = await createUser({ username: 'Bob4', password: 'p', avatar: 'b.png' });
    const carol = await createUser({ username: 'Carol4', password: 'p', avatar: 'c.png' });

    await sendFriendRequest(alice.id, bob.id);
    saveSession(bob.id, bob.session_token);
    await declineFriendRequest(bob.id, alice.id);
    expect(await getFriendRequests(bob.id)).toHaveLength(0);

    saveSession(alice.id, alice.session_token);
    expect(await getOutboundRequests(alice.id)).toHaveLength(0);

    await sendFriendRequest(alice.id, carol.id);
    await cancelFriendRequest(alice.id, carol.id);
    expect(await getOutboundRequests(alice.id)).toHaveLength(0);

    saveSession(carol.id, carol.session_token);
    expect(await getFriendRequests(carol.id)).toHaveLength(0);
  });

  it('removeFriend removes the friendship symmetrically, leaving other friendships intact', async () => {
    const alice = await registerAndSignIn('Alice5');
    const bob = await createUser({ username: 'Bob5', password: 'p', avatar: 'b.png' });
    const carol = await createUser({ username: 'Carol5', password: 'p', avatar: 'c.png' });

    await sendFriendRequest(alice.id, bob.id);
    saveSession(bob.id, bob.session_token);
    await acceptFriendRequest(bob.id, alice.id);

    saveSession(alice.id, alice.session_token);
    await sendFriendRequest(alice.id, carol.id);
    saveSession(carol.id, carol.session_token);
    await acceptFriendRequest(carol.id, alice.id);

    saveSession(alice.id, alice.session_token);
    await removeFriend(alice.id, bob.id);
    expect(await getFriends(alice.id)).toEqual([carol.id]);

    // The old localStorage version only removed the relationship on the
    // caller's side — this confirms the real relational model removes it
    // symmetrically instead of leaving a dangling one-sided friendship.
    saveSession(bob.id, bob.session_token);
    expect(await getFriends(bob.id)).toEqual([]);

    saveSession(carol.id, carol.session_token);
    expect(await getFriends(carol.id)).toContain(alice.id);
  });

  it('rejects friend operations without a valid session', async () => {
    const alice = await registerAndSignIn('Alice6');
    clearSession();
    await expect(sendFriendRequest(alice.id, 'whatever')).rejects.toThrow('Invalid session.');
    await expect(getFriends(alice.id)).rejects.toThrow('Invalid session.');
  });
});

describe('direct messages', () => {
  // Friends both ways, mirroring the accept_friend_request flow tested above
  // — DM sending/reading is friend-gated server-side (check_are_friends).
  async function makeFriends(nameA, nameB) {
    const a = await registerAndSignIn(nameA);
    const b = await createUser({ username: nameB, password: 'p', avatar: 'b.png' });
    await sendFriendRequest(a.id, b.id);
    saveSession(b.id, b.session_token);
    await acceptFriendRequest(b.id, a.id);
    return [a, b];
  }

  it('sends a message and increments the recipient\'s unread count, appearing in both the thread and the conversation list', async () => {
    const [alice, bob] = await makeFriends('DMAlice1', 'DMBob1');
    saveSession(alice.id, alice.session_token);
    const msg = await sendDM(alice.id, bob.id, 'hello');
    expect(msg.text).toBe('hello');
    expect(await getDMMessages(alice.id, bob.id)).toHaveLength(1);
    expect(await getTotalDMUnread(alice.id)).toBe(0);

    saveSession(bob.id, bob.session_token);
    expect(await getTotalDMUnread(bob.id)).toBe(1);
    const convos = await getDMConversations(bob.id);
    expect(convos).toEqual([expect.objectContaining({ friendId: alice.id, lastText: 'hello', unreadCount: 1 })]);
  });

  it('markDMRead clears unread and stamps readAt on the other user\'s messages', async () => {
    const [alice, bob] = await makeFriends('DMAlice2', 'DMBob2');
    saveSession(alice.id, alice.session_token);
    await sendDM(alice.id, bob.id, 'hi');

    saveSession(bob.id, bob.session_token);
    await markDMRead(bob.id, alice.id);
    expect(await getTotalDMUnread(bob.id)).toBe(0);
    const msgs = await getDMMessages(bob.id, alice.id);
    expect(msgs[0].readAt).not.toBeNull();
  });

  it('deleting your own unread message removes it outright', async () => {
    const [alice, bob] = await makeFriends('DMAlice3', 'DMBob3');
    saveSession(alice.id, alice.session_token);
    const msg = await sendDM(alice.id, bob.id, 'oops');
    await deleteDM(alice.id, bob.id, msg.id);
    expect(await getDMMessages(alice.id, bob.id)).toHaveLength(0);
  });

  it('deleting your own already-read message soft-deletes it (keeps the row, blanks the text)', async () => {
    const [alice, bob] = await makeFriends('DMAlice4', 'DMBob4');
    saveSession(alice.id, alice.session_token);
    const msg = await sendDM(alice.id, bob.id, 'seen this');

    saveSession(bob.id, bob.session_token);
    await markDMRead(bob.id, alice.id);

    saveSession(alice.id, alice.session_token);
    await deleteDM(alice.id, bob.id, msg.id);
    const msgs = await getDMMessages(alice.id, bob.id);
    expect(msgs).toHaveLength(1);
    expect(msgs[0].deletedBySender).toBe(true);
    expect(msgs[0].text).toBe('');
  });

  it('deleting a message you received only flags it as deleted for you', async () => {
    const [alice, bob] = await makeFriends('DMAlice5', 'DMBob5');
    saveSession(alice.id, alice.session_token);
    const msg = await sendDM(alice.id, bob.id, 'from alice');

    saveSession(bob.id, bob.session_token);
    await deleteDM(bob.id, alice.id, msg.id);
    const msgs = await getDMMessages(bob.id, alice.id);
    expect(msgs[0].deletedByReceiver).toBe(true);
    expect(msgs[0].text).toBe('from alice'); // untouched for the sender's copy
  });

  it('reacting toggles a user in/out of that emoji\'s reaction list', async () => {
    const [alice, bob] = await makeFriends('DMAlice6', 'DMBob6');
    saveSession(alice.id, alice.session_token);
    const msg = await sendDM(alice.id, bob.id, 'gg');

    await reactToDM(alice.id, bob.id, msg.id, '🔥');
    expect((await getDMMessages(alice.id, bob.id))[0].reactions['🔥']).toEqual([alice.id]);

    await reactToDM(alice.id, bob.id, msg.id, '🔥');
    expect((await getDMMessages(alice.id, bob.id))[0].reactions['🔥']).toBeUndefined();
  });

  it('rejects sending or reading messages between users who are not friends', async () => {
    const alice = await registerAndSignIn('DMAlice7');
    const bob = await createUser({ username: 'DMBob7', password: 'p', avatar: 'b.png' });
    await expect(sendDM(alice.id, bob.id, 'hi')).rejects.toThrow('Not friends with this user.');
    await expect(getDMMessages(alice.id, bob.id)).rejects.toThrow('Not friends with this user.');
  });

  it('rejects DM operations without a valid session', async () => {
    const [alice, bob] = await makeFriends('DMAlice8', 'DMBob8');
    clearSession();
    await expect(sendDM(alice.id, bob.id, 'hi')).rejects.toThrow('Invalid session.');
  });
});

describe('custom calendar events', () => {
  it('adds, updates, and deletes a personal event', async () => {
    const user = await registerAndSignIn('EventUser1');
    expect(await getCustomEvents(user.id)).toEqual([]);
    const ev = await addCustomEvent(user.id, { title: 'Scrim night', startDate: '2026-08-01', endDate: '2026-08-01' });
    expect(await getCustomEvents(user.id)).toHaveLength(1);

    const updated = await updateCustomEvent(user.id, ev.id, { title: 'Scrim night (rescheduled)' });
    expect(updated.title).toBe('Scrim night (rescheduled)');
    expect(updated.updatedAt).toBeTypeOf('string');

    await deleteCustomEvent(user.id, ev.id);
    expect(await getCustomEvents(user.id)).toEqual([]);
  });

  it('updateCustomEvent on a missing id is a no-op that returns null', async () => {
    const user = await registerAndSignIn('EventUser2');
    expect(await updateCustomEvent(user.id, 'missing', { title: 'x' })).toBeNull();
  });

  it('scopes custom events per user', async () => {
    const u1 = await registerAndSignIn('EventUser3');
    await addCustomEvent(u1.id, { title: 'Only u1' });

    const u2 = await registerAndSignIn('EventUser4'); // session now belongs to u2
    expect(await getCustomEvents(u2.id)).toEqual([]);
  });

  it('rejects custom event access without a valid session', async () => {
    const user = await registerAndSignIn('EventUser5');
    clearSession();
    await expect(getCustomEvents(user.id)).rejects.toThrow('Invalid session.');
    await expect(addCustomEvent(user.id, { title: 'x' })).rejects.toThrow('Invalid session.');
  });
});

describe('user preferences (main heroes, competitive ranks, badge panel, notifications)', () => {
  it('defaults to the correct blank shape for a brand-new user', async () => {
    const user = await registerAndSignIn('PrefsUser1');
    expect(await getMainHeroes(user.id)).toEqual([]);
    expect(await getMainHeroesPrefs(user.id)).toEqual({ color: '#ff9c00' });
    expect(await getCompetitiveRanks(user.id)).toEqual({
      tank: { rank: '', division: '', badge: '' },
      damage: { rank: '', division: '', badge: '' },
      support: { rank: '', division: '', badge: '' },
      openQueue: { rank: '', division: '', badge: '' },
    });
    expect(await getCompetitiveRanksPrefs(user.id)).toEqual({ color: '#ff9c00' });
    expect(await getBadgePanelPrefs(user.id)).toEqual({ color: '#ff9c00', selectedBadgeIds: [] });
    expect(await getSentNotifications(user.id)).toEqual({});
    expect(await getEasterEggsFor(user.id)).toEqual([]);
  });

  it('saves and reads back each preference field independently', async () => {
    const user = await registerAndSignIn('PrefsUser2');
    await saveMainHeroes(user.id, [{ heroId: 'ana' }]);
    await setMainHeroesPrefs(user.id, { color: '#60a5fa' });
    await saveCompetitiveRanks(user.id, { tank: { rank: 'Diamond', division: '3', badge: '' } });
    await setCompetitiveRanksPrefs(user.id, { color: '#a78bfa' });
    await setBadgePanelPrefs(user.id, { color: '#4ade80', selectedBadgeIds: ['b1'] });
    await saveSentNotifications(user.id, { 'ev1_dayof_2026-08-01': true });
    await saveEasterEggsFor(user.id, ['dva']);

    expect(await getMainHeroes(user.id)).toEqual([{ heroId: 'ana' }]);
    expect(await getMainHeroesPrefs(user.id)).toEqual({ color: '#60a5fa' });
    expect(await getCompetitiveRanks(user.id)).toEqual({ tank: { rank: 'Diamond', division: '3', badge: '' } });
    expect(await getCompetitiveRanksPrefs(user.id)).toEqual({ color: '#a78bfa' });
    expect(await getBadgePanelPrefs(user.id)).toEqual({ color: '#4ade80', selectedBadgeIds: ['b1'] });
    expect(await getSentNotifications(user.id)).toEqual({ 'ev1_dayof_2026-08-01': true });
    expect(await getEasterEggsFor(user.id)).toEqual(['dva']);
  });

  it('rejects preference access without a valid session', async () => {
    const user = await registerAndSignIn('PrefsUser3');
    clearSession();
    await expect(getMainHeroes(user.id)).rejects.toThrow('Invalid session.');
    await expect(saveMainHeroes(user.id, [])).rejects.toThrow('Invalid session.');
  });
});

describe('viewing a friend\'s profile data', () => {
  it('lets a friend read your academy data, matches, and prefs', async () => {
    const alice = await registerAndSignIn('ViewAlice');
    await saveMainHeroes(alice.id, [{ heroId: 'ana' }]);
    await addMatch(alice.id, { result: 'Win' });

    const bob = await createUser({ username: 'ViewBob', password: 'p', avatar: 'b.png' });
    saveSession(bob.id, bob.session_token);

    // Not friends yet — should be rejected.
    await expect(getMainHeroes(alice.id)).rejects.toThrow('Not authorized to view this profile.');

    // Become friends.
    saveSession(alice.id, alice.session_token);
    await sendFriendRequest(alice.id, bob.id);
    saveSession(bob.id, bob.session_token);
    await acceptFriendRequest(bob.id, alice.id);

    // Now Bob can view Alice's data.
    expect(await getMainHeroes(alice.id)).toEqual([{ heroId: 'ana' }]);
    const aliceMatches = await getMatches(alice.id);
    expect(aliceMatches).toHaveLength(1);
    expect(aliceMatches[0].result).toBe('Win');
  });

  it('still rejects a stranger even with a valid session of their own', async () => {
    const alice = await registerAndSignIn('ViewAlice2');
    const stranger = await createUser({ username: 'ViewStranger', password: 'p', avatar: 's.png' });
    saveSession(stranger.id, stranger.session_token);
    await expect(getMainHeroes(alice.id)).rejects.toThrow('Not authorized to view this profile.');
    await expect(getMatches(alice.id)).rejects.toThrow('Not authorized to view this profile.');
  });

  it('lets a friend read your unlocked easter eggs', async () => {
    const alice = await registerAndSignIn('ViewAlice3');
    await saveEasterEggsFor(alice.id, ['dva']);

    const bob = await createUser({ username: 'ViewBob3', password: 'p', avatar: 'b.png' });
    saveSession(bob.id, bob.session_token);

    await expect(getEasterEggsFor(alice.id)).rejects.toThrow('Not authorized to view this profile.');

    saveSession(alice.id, alice.session_token);
    await sendFriendRequest(alice.id, bob.id);
    saveSession(bob.id, bob.session_token);
    await acceptFriendRequest(bob.id, alice.id);

    expect(await getEasterEggsFor(alice.id)).toEqual(['dva']);
  });
});
