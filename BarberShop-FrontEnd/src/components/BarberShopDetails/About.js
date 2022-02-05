import React from "react";
import { Image, View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function about(props) {
  const { name, image, addresse, review, rating } = props.route.params;
  return (
    <View>
      <BarberShopImage image={image} />
      <BarberShopInfo
        name={name}
        addresse={addresse}
        rating={rating}
        review={review}
      />
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

const BarberShopImage = (props) => {
  return (
    <Image
      style={{
        height: 200,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      source={{
        uri: props.image,
      }}
    />
  );
};

const BarberShopInfo = (props) => {
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
        <Text style={{ fontSize: 24 }}>{props.name}</Text>
        <Text style={{ fontSize: 14, width: "70%", color: "gray" }}>
          {props.addresse}
        </Text>
      </View>

      <View style={{ alignItems: "center", marginLeft: -28 }}>
        <Text style={{ fontSize: 24, marginLeft: -20, fontWeight: "bold" }}>
          ⭐ {props.rating}
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>{props.review} Vote</Text>
      </View>
    </View>
  );
};
