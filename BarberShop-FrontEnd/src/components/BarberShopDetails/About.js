import React from "react";
import { Image, View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function about() {
  return (
    <View>
      <BarberShopImage />
      <BarberShopInfo />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text>About</Text>
        <Text>Reviews</Text>
        <Text>Services</Text>
      </View>
    </View>
  );
}

const barber = {
  title: "Lasagna",
  description: "With butter lettuce, tomato and sauce bechamel",
  price: "$13.50",
  image:
    "https://townsquare.media/site/942/files/2020/04/RS37761_GettyImages-506514876.jpg?w=980&q=75",
  average_rating: "4.2",
  rating_number: "420",
};
const BarberShopImage = () => {
  return (
    <Image
      style={{
        height: 200,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      source={{
        uri: barber.image,
      }}
    />
  );
};

const BarberShopInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 28,
        backgroundColor: "#eee",
      }}
    >
      <View>
        <Text style={{ fontSize: 24 }}>{barber.title}</Text>
        <Text style={{ fontSize: 14, width: "70%", color: "gray" }}>
          {barber.description}
        </Text>
      </View>

      <View style={{ alignItems: "center", marginLeft: -28 }}>
        <Text style={{ fontSize: 24, marginLeft: -20, fontWeight: "bold" }}>
          ⭐ {barber.average_rating}
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>
          {barber.rating_number} Vote
        </Text>
      </View>
    </View>
  );
};
