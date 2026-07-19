import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

// Recolors the Android status bar to match the app's near-black theme
// (--bg in index.css) instead of the OS default, which otherwise sits
// as a mismatched strip above the WebView. No-op on web.
if (Capacitor.isNativePlatform()) {
  StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
  StatusBar.setBackgroundColor({ color: "#06070a" }).catch(() => {});
}

// Splash screen has launchAutoHide:false (see capacitor.config.json), so it
// stays up until this is called — hideSplashScreen() is invoked from
// main.jsx only after React's first paint has actually landed, so the
// splash's own dark background hands off directly to the app's real dark
// background with nothing white ever showing in between.
export function hideSplashScreen() {
  if (!Capacitor.isNativePlatform()) return;
  SplashScreen.hide({ fadeOutDuration: 220 }).catch(() => {});
}
