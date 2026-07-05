import { useRef } from "react";

// Fires `onComplete` once `times` clicks land within `windowMs` of each other.
// A pause longer than `windowMs` resets the count, so idle stray clicks
// scattered across a session don't accidentally add up.
export function useClickTrigger({ times, windowMs = 2500, onComplete }) {
  const countRef = useRef(0);
  const lastClickRef = useRef(0);

  return function handleClick(...args) {
    const now = Date.now();
    if (now - lastClickRef.current > windowMs) countRef.current = 0;
    lastClickRef.current = now;
    countRef.current += 1;

    if (countRef.current >= times) {
      countRef.current = 0;
      onComplete(...args);
    }
  };
}
