import React from "react";
import {
  StatusBar,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import About from "../../components/BarberShopDetails/About";
import Reviews from "../../components/BarberShopDetails/Reviews";
import { ChooseButton } from "../../components/BarberShopDetails/ChooseButton";

export default () => {
  return (
    <View>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <About />
      <Reviews />
      <ChooseButton />
    </View>
  );
};
