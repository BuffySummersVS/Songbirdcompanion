package songbird.app;

import android.os.Build;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            // Android 12+'s default SplashScreenView exit is a baked-in icon
            // zoom-and-fade that Capacitor's SplashScreen.hide() JS API can't
            // tune or suppress (its fadeOutDuration option is a documented
            // no-op on this code path). Taking over removal here and calling
            // remove() with no animation of our own turns that zoom into a
            // plain instant cut into the web content underneath, which
            // already matches the splash's background/logo.
            getSplashScreen().setOnExitAnimationListener(splashScreenView -> splashScreenView.remove());
        }
        super.onCreate(savedInstanceState);
    }
}
