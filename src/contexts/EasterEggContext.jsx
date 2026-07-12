import { createContext, useContext, useCallback, useEffect, useRef, useState } from "react";
import { DESKTOP_EASTER_EGGS, MOBILE_EASTER_EGGS } from "../data/easterEggs";
import { getUnlockedEasterEggs, unlockEasterEgg, EASTER_EGG_EVENT } from "../data/easterEggStorage";
import { getEasterEggsFor, saveEasterEggsFor } from "../data/storage";
import { useAuth } from "./AuthContext";
import { useIsDesktop } from "../hooks/useIsDesktop";

const EasterEggContext = createContext(null);

export function EasterEggProvider({ children }) {
  const isDesktop = useIsDesktop();
  const { currentUser } = useAuth();
  const [unlocked, setUnlocked] = useState(() => new Set(getUnlockedEasterEggs()));
  const [activeEffect, setActiveEffect] = useState(null); // { id, nonce }
  const [toasts, setToasts] = useState([]);
  const nonceRef = useRef(0);

  useEffect(() => {
    function onUnlock(e) {
      setUnlocked(prev => new Set(prev).add(e.detail.id));
    }
    window.addEventListener(EASTER_EGG_EVENT, onUnlock);
    return () => window.removeEventListener(EASTER_EGG_EVENT, onUnlock);
  }, []);

  // Merge pre-login anonymous discoveries into the account once per login.
  useEffect(() => {
    if (!currentUser) return;
    let cancelled = false;
    async function syncFromAccount() {
      const remoteIds = await getEasterEggsFor(currentUser.id).catch(() => []);
      if (cancelled) return;
      setUnlocked(prev => {
        const merged = new Set(prev);
        for (const id of remoteIds) merged.add(id);
        if (merged.size > remoteIds.length) {
          saveEasterEggsFor(currentUser.id, [...merged]).catch(() => {});
        }
        return merged;
      });
    }
    syncFromAccount();
    return () => { cancelled = true; };
  }, [currentUser]);

  const trigger = useCallback((id) => {
    const isMobileEgg = MOBILE_EASTER_EGGS.some(e => e.id === id);
    if (isMobileEgg && isDesktop) return; // mobile-exclusive eggs never fire on desktop
    if (!isMobileEgg && !isDesktop) return; // desktop-exclusive eggs never fire on mobile
    const egg = (isMobileEgg ? MOBILE_EASTER_EGGS : DESKTOP_EASTER_EGGS).find(e => e.id === id);
    if (!egg) return;

    nonceRef.current += 1;
    setActiveEffect({ id, nonce: nonceRef.current });

    const isNew = unlockEasterEgg(id);
    if (isNew) {
      setToasts(prev => [...prev, { key: nonceRef.current, hero: egg.hero, name: egg.name }]);
      if (currentUser) {
        saveEasterEggsFor(currentUser.id, [...unlocked, id]).catch(() => {});
      }
    }
  }, [isDesktop, currentUser, unlocked]);

  const dismissToast = useCallback((key) => {
    setToasts(prev => prev.filter(t => t.key !== key));
  }, []);

  const clearEffect = useCallback((nonce) => {
    setActiveEffect(prev => (prev && prev.nonce === nonce ? null : prev));
  }, []);

  return (
    <EasterEggContext.Provider value={{ isDesktop, unlocked, activeEffect, toasts, trigger, dismissToast, clearEffect }}>
      {children}
    </EasterEggContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context+hook co-location is intentional
export function useEasterEggs() {
  return useContext(EasterEggContext);
}
