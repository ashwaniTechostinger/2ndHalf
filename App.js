import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Login from "./screens/Login";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Merriweather-Regular": require("./assets/fonts/Merriweather/Merriweather-Regular.ttf"),
    'BrockScript': require("./assets/fonts/BrockScript.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Login />;
};

const styles = StyleSheet.create({});

export default App;
