import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import 'react-native-reanimated';


LogBox.ignoreAllLogs()
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    InterLight: require('../assets/fonts/InterLight.ttf'),
    InterRegular: require('../assets/fonts/InterRegular.ttf'),
    InterMedium: require('../assets/fonts/InterMedium.ttf'),
    InterBold: require('../assets/fonts/InterBold.ttf'),
    InterBlack: require('../assets/fonts/InterBlack.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown:false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
