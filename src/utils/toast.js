export function toast(msg) {
  window.dispatchEvent(new CustomEvent("sb-toast", { detail: { message: msg } }));
}
