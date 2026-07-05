import { createContext, useContext, useCallback, useEffect, useRef, useState } from "react";
import { EASTER_EGGS } from "../data/easterEggs";
import { getUnlockedEasterEggs, unlockEasterEgg, EASTER_EGG_EVENT } from "../data/easterEggStorage";
import { useIsDesktop } from "../hooks/useIsDesktop";

const EasterEggContext = createContext(null);

export function EasterEggProvider({ children }) {
  const isDesktop = useIsDesktop();
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

  const trigger = useCallback((id) => {
    if (!isDesktop) return;
    const egg = EASTER_EGGS.find(e => e.id === id);
    if (!egg) return;

    nonceRef.current += 1;
    setActiveEffect({ id, nonce: nonceRef.current });

    const isNew = unlockEasterEgg(id);
    if (isNew) {
      setToasts(prev => [...prev, { key: nonceRef.current, hero: egg.hero, name: egg.name }]);
    }
  }, [isDesktop]);

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
