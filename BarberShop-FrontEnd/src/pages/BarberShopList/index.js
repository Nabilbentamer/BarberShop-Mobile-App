import React, { useState } from "react";
import Headertabs from "../../components/HeaderTabs";
import SearchBar from "../../components/SearchBar";
import BarberShopItem from "../../components/BarberShopItem";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
export default () => {
  const [activeTab, setActiveTab] = useState("nearby");
  return (
    <SafeAreaView style={styles.Area}>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <View style={{ backgroundColor: "white" }}>
        <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView
        style={{ paddingRight: 10, paddingTop: 10, backgroundColor: "#eee" }}
      >
        <BarberShopItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Area: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
