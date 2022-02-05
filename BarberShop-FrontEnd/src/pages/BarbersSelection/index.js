import React from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

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

export default (props) => {
  const { barbers, addresse, name } = props.route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ padding: 18, backgroundColor: "white", flex: 1 }}>
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
        {barbers.map((result, index) => (
          <TouchableOpacity
            style={styles.barberContainer}
            key={index}
            onPress={() =>
              navigation.navigate("BarberProfile", {
                barber_info: result,
                addresse: addresse,
                name: name,
              })
            }
          >
            <Image
              source={{
                uri: result.photo,
              }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                fontFamily: "sans-serif-medium",
              }}
            >
              {result.name}
            </Text>
            <Text style={{ fontSize: 10, color: "gray", marginTop: 4 }}>
              Available Today
            </Text>
            <Divider width={9}></Divider>
            <Text style={{ fontSize: 16, color: "#41729F", marginTop: 20 }}>
              About {result.name}
            </Text>
          </TouchableOpacity>
        ))}
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
    borderWidth: 0.5,
    flexBasis: "45%",
    justifyContent: "center",
    margin: 5,
  },
});
