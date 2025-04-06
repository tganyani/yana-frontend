import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#232323" }, // Change stack background color
          headerTitle: "",
          headerStyle: { backgroundColor: "#232323" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="welcome2" options={{ headerShown: false }} />
        <Stack.Screen name="welcome3" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/loginmethod"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/verifyemail"
          options={{
            headerLeft: () => (
               <Ionicons name="chevron-back" onPress={()=>router.push("/(auth)/register")} size={34} color="white" />
            ),
          }}
        />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/resetpassword"
          // options={{
          //   headerLeft: () => (
          //       <Ionicons name="chevron-back" onPress={()=>router.push("/(auth)/resetpassword")} size={34} color="white" />
          //   ),
          // }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
