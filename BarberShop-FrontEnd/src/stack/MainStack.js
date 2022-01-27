import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../pages/SplashScreen/index";
import Login from "../pages/Login/index";
import Signup from "../pages/SignUp/index";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplaShScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        screenOptions={{ headerShown: true }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        screenOptions={{ headerShown: true }}
      />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default MainStack;
