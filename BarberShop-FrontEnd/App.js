import React from "react";
import MainStack from "./src/stack/MainStack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/store";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
