import { useRef } from "react";
import { useEasterEggs } from "../contexts/EasterEggContext";

const TARGET = "hazard";

// Drop into any search input's onChange: watches the typed value and fires
// the Hazard mobile easter egg once "hazard" appears in it. `firedRef`
// re-arms once the text no longer matches, so clearing the box and typing
// it again fires it again, but it won't spam-replay while "hazard" stays
// a substring of whatever's still being typed (e.g. "hazardous").
export function useHazardSearchTrigger() {
  const eggs = useEasterEggs();
  const firedRef = useRef(false);

  return function checkHazardTrigger(value) {
    const matched = value.toLowerCase().includes(TARGET);
    if (matched && !firedRef.current) {
      firedRef.current = true;
      eggs?.trigger?.("hazard");
    } else if (!matched) {
      firedRef.current = false;
    }
  };
}
