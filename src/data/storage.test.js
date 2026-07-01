import { describe, it, expect, beforeEach } from 'vitest';
import {
  createUser, getUserByUsername, getUserById, updateUser, verifyLogin, searchUsers,
  getSession, saveSession, clearSession,
  getMatches, addMatch, updateMatch, deleteMatch, clearMatches,
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
});

describe('users / auth', () => {
  it('creates a user with a hashed password (not the plaintext)', async () => {
    const user = await createUser({ username: 'Tracer', password: 'blink123', avatar: 'tracer.png' });
    expect(user.username).toBe('Tracer');
    expect(user.passwordHash).toBeTypeOf('string');
    expect(user.passwordHash).not.toBe('blink123');
    expect(user.id).toBeTypeOf('string');
  });

  it('looks users up by username case-insensitively', async () => {
    await createUser({ username: 'Tracer', password: 'blink123', avatar: 'a.png' });
    expect(getUserByUsername('tracer')?.username).toBe('Tracer');
    expect(getUserByUsername('TRACER')?.username).toBe('Tracer');
    expect(getUserByUsername('nobody')).toBeNull();
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

  it('updateUser re-hashes a new password and never stores the plaintext field', async () => {
    const created = await createUser({ username: 'Ana', password: 'nano123', avatar: 'a.png' });
    const updated = await updateUser(created.id, { password: 'nano456' });
    expect(updated.password).toBeUndefined();
    expect(updated.passwordHash).not.toBe(created.passwordHash);
    await expect(verifyLogin('Ana', 'nano456')).resolves.toBeTruthy();
    await expect(verifyLogin('Ana', 'nano123')).rejects.toThrow();
  });

  it('updateUser rejects renaming to a username already taken by someone else', async () => {
    await createUser({ username: 'Widow', password: 'p1', avatar: 'w.png' });
    const other = await createUser({ username: 'Sombra', password: 'p2', avatar: 's.png' });
    await expect(updateUser(other.id, { username: 'widow' })).rejects.toThrow('Username already taken.');
  });

  it('searchUsers matches by substring and never leaks passwordHash', async () => {
    await createUser({ username: 'Junkrat', password: 'p1', avatar: 'j.png' });
    await createUser({ username: 'Roadhog', password: 'p2', avatar: 'r.png' });
    const results = searchUsers('junk');
    expect(results).toHaveLength(1);
    expect(results[0].username).toBe('Junkrat');
    expect(results[0].passwordHash).toBeUndefined();
    expect(searchUsers('')).toEqual([]);
  });

  it('getUserById finds the created user', async () => {
    const created = await createUser({ username: 'Mercy', password: 'p1', avatar: 'm.png' });
    expect(getUserById(created.id)?.username).toBe('Mercy');
    expect(getUserById('missing-id')).toBeNull();
  });
});

describe('session', () => {
  it('saves, reads, and clears the session', () => {
    expect(getSession()).toBeNull();
    saveSession('user-123');
    expect(getSession()).toEqual({ userId: 'user-123' });
    clearSession();
    expect(getSession()).toBeNull();
  });
});

describe('matches', () => {
  it('adds matches newest-first and reads them back', () => {
    expect(getMatches('u1')).toEqual([]);
    const first = addMatch('u1', { result: 'Win', role: 'Tank' });
    const second = addMatch('u1', { result: 'Loss', role: 'Tank' });
    const matches = getMatches('u1');
    expect(matches).toHaveLength(2);
    expect(matches[0].id).toBe(second.id); // newest first
    expect(matches[1].id).toBe(first.id);
  });

  it('updates and deletes a specific match without touching others', () => {
    const a = addMatch('u1', { result: 'Win' });
    const b = addMatch('u1', { result: 'Loss' });
    updateMatch('u1', a.id, { result: 'Draw' });
    expect(getMatches('u1').find(m => m.id === a.id).result).toBe('Draw');

    deleteMatch('u1', b.id);
    const remaining = getMatches('u1');
    expect(remaining).toHaveLength(1);
    expect(remaining[0].id).toBe(a.id);
  });

  it('updateMatch on a missing id is a no-op that returns null', () => {
    addMatch('u1', { result: 'Win' });
    expect(updateMatch('u1', 'nonexistent', { result: 'Loss' })).toBeNull();
    expect(getMatches('u1')).toHaveLength(1);
  });

  it('clearMatches empties only that user\'s matches', () => {
    addMatch('u1', { result: 'Win' });
    addMatch('u2', { result: 'Win' });
    clearMatches('u1');
    expect(getMatches('u1')).toEqual([]);
    expect(getMatches('u2')).toHaveLength(1);
  });

  it('scopes matches per user', () => {
    addMatch('u1', { result: 'Win' });
    expect(getMatches('u2')).toEqual([]);
  });
});

describe('friends and friend requests', () => {
  it('silently no-ops if the sender is not a real, stored user', () => {
    sendFriendRequest('u1', 'u2'); // neither id corresponds to a createUser() record
    expect(getFriendRequests('u2')).toHaveLength(0);
  });

  it('full request → accept flow adds each user to the other\'s friend list', async () => {
    const alice = await createUser({ username: 'Alice', password: 'p', avatar: 'a.png' });
    const bob = await createUser({ username: 'Bob', password: 'p', avatar: 'b.png' });

    sendFriendRequest(alice.id, bob.id);
    expect(getFriendRequests(bob.id)).toHaveLength(1);
    expect(getFriendRequests(bob.id)[0].fromUsername).toBe('Alice');
    expect(getOutboundRequests(alice.id)).toEqual([bob.id]);

    acceptFriendRequest(bob.id, alice.id);
    expect(getFriends(bob.id)).toContain(alice.id);
    expect(getFriends(alice.id)).toContain(bob.id);
    expect(getFriendRequests(bob.id)).toHaveLength(0);
    expect(getOutboundRequests(alice.id)).toHaveLength(0);
  });

  it('does not let a user send a request to themself', () => {
    sendFriendRequest('u1', 'u1');
    expect(getFriendRequests('u1')).toHaveLength(0);
  });

  it('does not duplicate a request that is already pending', async () => {
    const alice = await createUser({ username: 'Alice2', password: 'p', avatar: 'a.png' });
    sendFriendRequest(alice.id, 'u2');
    sendFriendRequest(alice.id, 'u2');
    expect(getFriendRequests('u2')).toHaveLength(1);
  });

  it('does not send a request to an existing friend', async () => {
    const alice = await createUser({ username: 'Alice3', password: 'p', avatar: 'a.png' });
    addFriend(alice.id, 'u2');
    sendFriendRequest(alice.id, 'u2');
    expect(getFriendRequests('u2')).toHaveLength(0);
  });

  it('declineFriendRequest and cancelFriendRequest both clear the pending pair', async () => {
    const alice = await createUser({ username: 'Alice4', password: 'p', avatar: 'a.png' });
    sendFriendRequest(alice.id, 'u2');
    declineFriendRequest('u2', alice.id);
    expect(getFriendRequests('u2')).toHaveLength(0);
    expect(getOutboundRequests(alice.id)).toHaveLength(0);

    sendFriendRequest(alice.id, 'u3');
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
