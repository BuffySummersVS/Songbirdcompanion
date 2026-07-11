import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";

// Recolors the Android status bar to match the app's near-black theme
// (--bg in index.css) instead of the OS default, which otherwise sits
// as a mismatched strip above the WebView. No-op on web.
if (Capacitor.isNativePlatform()) {
  StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
  StatusBar.setBackgroundColor({ color: "#06070a" }).catch(() => {});
}
