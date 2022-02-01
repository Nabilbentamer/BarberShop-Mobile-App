import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localBarbershops = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
export default () => {
  return (
    <>
      {localBarbershops.map((barbershop, index) => (
        <TouchableOpacity activeOpacity={1} key={index}>
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <BarberShopImage image={barbershop.image_url} />
            <BarberShopInfo
              BarberShopname={barbershop.name}
              rating={barbershop.rating}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const BarberShopImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 30, top: 25 }}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={26}
          backgroundColor="white"
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </>
  );
};

const BarberShopInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {props.BarberShopname}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>25-35 min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 15,
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
