import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../pages/SplashScreen/index";
import Login from "../pages/Login/index";
import Signup from "../pages/SignUp/index";
import Main from "../pages/Main/index";
import BarberShopList from "../pages/BarberShopList";
import BarberShopDetails from "../pages/BarberShopDetails";
import BarbersSelection from "../pages/BarbersSelection";
import BarberProfile from "../pages/BarberProfile";
import AppointementBook from "../pages/AppointementBook";
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppointementBook"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="BarberShopList" component={BarberShopList} />
      <Stack.Screen name="BarberShopDetails" component={BarberShopDetails} />
      <Stack.Screen name="BarbersSelection" component={BarbersSelection} />
      <Stack.Screen name="BarberProfile" component={BarberProfile} />
      <Stack.Screen name="AppointementBook" component={AppointementBook} />
    </Stack.Navigator>
  );
};

export default MainStack;
