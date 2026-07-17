import { useEffect } from "react";

// Like the `autoFocus` JSX prop, but with `preventScroll: true` — plain
// `autoFocus` calls the DOM `.focus()` internally with no way to pass that
// option, which on Android WebView can scroll the focused element's
// container into view in a way overflow-x/y:hidden doesn't block (see
// useFocusTrap.js for the same bug on modal-open focus).
export function useAutoFocus(ref, active = true) {
  useEffect(() => {
    if (!active) return;
    ref.current?.focus({ preventScroll: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps -- ref is stable, intentionally omitted
  }, [active]);
}
