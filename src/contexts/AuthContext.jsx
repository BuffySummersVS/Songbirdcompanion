import { createContext, useContext, useEffect, useState } from 'react';
import {
  getSession, saveSession, clearSession,
  getUserById, createUser, verifyLogin, updateUser, signOut as signOutRemote,
} from '../data/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function loadSession() {
      const session = getSession();
      if (session?.userId) {
        const user = await getUserById(session.userId).catch(() => null);
        if (!cancelled) setCurrentUser(user ?? null);
      }
      if (!cancelled) setReady(true);
    }
    loadSession();
    return () => { cancelled = true; };
  }, []);

  async function login(username, password) {
    const { session_token, ...user } = await verifyLogin(username, password);
    saveSession(user.id, session_token);
    setCurrentUser(user);
    return user;
  }

  async function register(data) {
    const { session_token, ...user } = await createUser(data);
    saveSession(user.id, session_token);
    setCurrentUser(user);
    return user;
  }

  async function logout() {
    const session = getSession();
    if (session?.userId && session?.sessionToken) {
      await signOutRemote(session.userId, session.sessionToken);
    }
    clearSession();
    setCurrentUser(null);
  }

  async function refreshUser() {
    if (!currentUser) return;
    const fresh = await getUserById(currentUser.id);
    setCurrentUser(fresh ?? null);
  }

  async function updateProfile(updates) {
    const { session_token, ...updated } = await updateUser(currentUser.id, updates);
    setCurrentUser(updated);
    return updated;
  }

  return (
    <AuthContext.Provider value={{ currentUser, ready, login, register, logout, updateProfile, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context+hook co-location is intentional
export function useAuth() {
  return useContext(AuthContext);
}
