import { lazy, Suspense, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useEasterEggs } from "../../contexts/EasterEggContext";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import AchievementToastStack from "./AchievementToast";

const EFFECTS = {
  hanzo:      lazy(() => import("./effects/HanzoDragon.jsx")),
  ana:        lazy(() => import("./effects/AnaSleepDart.jsx")),
  torbjorn:   lazy(() => import("./effects/TorbjornLava.jsx")),
  kiriko:     lazy(() => import("./effects/KirikoOfuda.jsx")),
  mercy:      lazy(() => import("./effects/MercyGlow.jsx")),
  reinhardt:  lazy(() => import("./effects/ReinhardtShatter.jsx")),
  junkrat:    lazy(() => import("./effects/JunkratTire.jsx")),
  dva:        lazy(() => import("./effects/DvaUlt.jsx")),
  genji:      lazy(() => import("./effects/GenjiSlash.jsx")),
  sombra:     lazy(() => import("./effects/SombraGlitch.jsx")),
  lucio:      lazy(() => import("./effects/LucioPulse.jsx")),
  widowmaker: lazy(() => import("./effects/WidowmakerShatter.jsx")),
  happybirthday: lazy(() => import("./effects/HappyBirthday.jsx")),
  christmas:  lazy(() => import("./effects/ChristmasSnow.jsx")),
  halloween:  lazy(() => import("./effects/HalloweenSpooky.jsx")),
  newyears:   lazy(() => import("./effects/NewYearsSpark.jsx")),
  aprilfools: lazy(() => import("./effects/AprilFoolsConfetti.jsx")),
  valentines: lazy(() => import("./effects/ValentinesHearts.jsx")),
  lifeweaver: lazy(() => import("./effects/LifeweaverTree.jsx")),
  mizuki: lazy(() => import("./effects/MizukiKasa.jsx")),
  hazard: lazy(() => import("./effects/HazardCrystals.jsx")),
  moira: lazy(() => import("./effects/MoiraBioticBarrage.jsx")),
  mei: lazy(() => import("./effects/MeiSnowballSurprise.jsx")),
  reaper: lazy(() => import("./effects/ReaperWraithForm.jsx")),
};

const SOMBRA_WORD = "sombra";

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

function GlobalKeyTriggers({ trigger }) {
  const bufferRef = useRef("");

  useEffect(() => {
    function onKeyDown(e) {
      if (isTypingTarget(document.activeElement)) return;

      if (e.key.toLowerCase() === "q" && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey) {
        trigger("dva");
      }

      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-SOMBRA_WORD.length);
        if (bufferRef.current === SOMBRA_WORD) {
          bufferRef.current = "";
          trigger("sombra");
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [trigger]);

  return null;
}

export default function EasterEggRoot() {
  const ctx = useEasterEggs();
  const reducedMotion = usePrefersReducedMotion();

  if (!ctx) return null;

  const { isDesktop, activeEffect, toasts, trigger, dismissToast, clearEffect } = ctx;
  const EffectComponent = activeEffect ? EFFECTS[activeEffect.id] : null;

  return createPortal(
    <div className="egg-root">
      {isDesktop && <GlobalKeyTriggers trigger={trigger} />}
      <AchievementToastStack toasts={toasts} onDismiss={dismissToast} />
      {EffectComponent && (
        <Suspense fallback={null}>
          <EffectComponent
            key={activeEffect.nonce}
            reducedMotion={reducedMotion}
            onDone={() => clearEffect(activeEffect.nonce)}
          />
        </Suspense>
      )}
    </div>,
    document.body
  );
}
