import React from "react";
import MainStack from "./src/stack/MainStack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
