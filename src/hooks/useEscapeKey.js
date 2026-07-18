import { useEffect, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

// Every currently-active useEscapeKey caller pushes its close callback here
// while mounted+active, most-recently-opened last. A SINGLE native
// "backButton" listener is registered once for the app's lifetime (below)
// and always dismisses whatever is on top of this stack — that's what makes
// nested modals (e.g. a "why" modal opened on top of a hero-counter modal)
// close innermost-first without each component needing its own "don't close
// me while my child is open" guard.
//
// When the stack is empty (no modal/overlay currently wants back to close
// it), the native listener falls through to window.history.back() instead
// of doing nothing. That fallback is what makes the hardware/gesture back
// button navigate to the previous screen/tab everywhere in the app, the
// same way it does in a normal mobile browser tab — Capacitor has no
// reliable default of its own for this (see the Academy back-button fix),
// so every screen's navigation needs to actually use browser history
// (pushState) for that fallback to land somewhere meaningful.
const stack = [];
let nativeListenerPromise = null;

// Home is the app's root screen — there's nothing "back" to navigate to
// from there, and window.history.back() with no history left behind it
// just does nothing (leaving the user stuck). App.jsx keeps this flag in
// sync with activePage via setIsHomeForBackButton so the listener below
// knows to exit the app instead, matching how the hardware back button
// behaves on a native app's home screen.
let isHome = false;

export function setIsHomeForBackButton(value) {
  isHome = value;
}

function ensureNativeListener() {
  if (nativeListenerPromise || !Capacitor.isNativePlatform()) return;
  nativeListenerPromise = App.addListener("backButton", () => {
    if (stack.length > 0) {
      stack[stack.length - 1]();
    } else if (isHome) {
      App.exitApp();
    } else {
      window.history.back();
    }
  });
}

// Registered once, immediately, at module load — not lazily from inside
// useEscapeKey's effect. The old lazy approach only registered this the
// first time some useEscapeKey(fn, true) call became active (i.e. some
// modal opened), so pressing back on a fresh Home load with nothing open
// yet silently did nothing at all, since the listener didn't exist yet.
ensureNativeListener();

export function useEscapeKey(onEscape, active = true) {
  const callbackRef = useRef(onEscape);

  useEffect(() => {
    callbackRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return;
    function onKey(e) {
      if (e.key === "Escape") callbackRef.current(e);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (!active || !Capacitor.isNativePlatform()) return;
    ensureNativeListener();
    const entry = () => callbackRef.current();
    stack.push(entry);
    return () => {
      const idx = stack.lastIndexOf(entry);
      if (idx !== -1) stack.splice(idx, 1);
    };
  }, [active]);
}
