import { createContext, useContext, useState } from 'react';
import {
  getSession, saveSession, clearSession,
  getUserById, createUser, verifyLogin, updateUser,
} from '../data/storage';

const AuthContext = createContext(null);

function initialUser() {
  const session = getSession();
  if (session?.userId) {
    return getUserById(session.userId) ?? null;
  }
  return null;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(initialUser);
  const ready = true;

  async function login(username, password) {
    const user = await verifyLogin(username, password);
    saveSession(user.id);
    setCurrentUser(user);
    return user;
  }

  async function register(data) {
    const user = await createUser(data);
    saveSession(user.id);
    setCurrentUser(user);
    return user;
  }

  function logout() {
    clearSession();
    setCurrentUser(null);
  }

  async function refreshUser() {
    if (!currentUser) return;
    const fresh = getUserById(currentUser.id);
    setCurrentUser(fresh ?? null);
  }

  async function updateProfile(updates) {
    const updated = await updateUser(currentUser.id, updates);
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
