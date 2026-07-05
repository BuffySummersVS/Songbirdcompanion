import { useEffect, useState } from "react";

const QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

function matches() {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches;
}

// True only for large-screen, mouse-driven devices — excludes phones,
// tablets, and touch laptops so easter eggs never surface on mobile.
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}
