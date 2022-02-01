import React from "react";
import { Divider } from "react-native-elements";

import {
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import About from "../../components/BarberShopDetails/About";
import Reviews from "../../components/BarberShopDetails/Reviews";

export default () => {
  return (
    <SafeAreaView style={{ padding: 18, backgroundColor: "white" }}>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <Text style={{ fontSize: 24, letterSpacing: 0 }}>
        Choose a professional
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 5,
          marginTop: 15,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity style={styles.barberContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          />
          <Text style={{ fontSize: 16, marginTop: 10 }}>Nabil BenTamer</Text>
          <Text style={{ fontSize: 10, color: "gray", marginTop: 4 }}>
            Available Today
          </Text>
          <Divider width={9}></Divider>
          <Text style={{ fontSize: 16, color: "#41729F", marginTop: 20 }}>
            About Nabil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.barberContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          />
          <Text style={{ fontSize: 16, marginTop: 10 }}>Nabil BenTamer</Text>
          <Text style={{ fontSize: 10, color: "gray", marginTop: 4 }}>
            Available Today
          </Text>
          <Divider width={9}></Divider>
          <Text style={{ fontSize: 16, color: "#41729F", marginTop: 20 }}>
            About Nabil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.barberContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          />
          <Text style={{ fontSize: 16, marginTop: 10 }}>Nabil BenTamer</Text>
          <Text style={{ fontSize: 10, color: "gray", marginTop: 4 }}>
            Available Today
          </Text>
          <Divider width={9}></Divider>
          <Text style={{ fontSize: 16, color: "#41729F", marginTop: 20 }}>
            About Nabil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const barberElement = () => {};

const styles = StyleSheet.create({
  barberContainer: {
    alignItems: "center",
    backgroundColor: "white",
    width: "50%",
    height: 240,
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    flexBasis: "45%",
    justifyContent: "center",
    margin: 5,
  },
});
