import React, { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigation/rootNavigation";
import { AppLoading } from "expo";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "poppins-medium": require("./app/assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./app/assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-regular": require("./app/assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
