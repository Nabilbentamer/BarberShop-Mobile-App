import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { localBarbershops } from "../Services/Barbers";
import { FavoriteBarberShops } from "../Services/FavoriteRestaurant";
export let Favorites = [];
export default ({ navigation }) => {
  return (
    <>
      {localBarbershops.map((barbershop, index) => (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          onPress={() =>
            navigation.navigate("BarberShopDetails", {
              name: barbershop.name,
              image: barbershop.image_url,
              addresse: barbershop.addresse,
              rating: barbershop.rating,
              review: barbershop.reviews,
              user_reviews: barbershop.user_reviews,
              barbers: barbershop.barbers,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <BarberShopImage image={barbershop.image_url} barber={barbershop} />
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
  const [heartIcon, setHeartIcon] = useState("heart-outline");
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", right: 30, top: 25 }}
        onPress={(value) => {
          if (heartIcon === "heart") {
            setHeartIcon("heart-outline");
            Favorites = Favorites.filter(
              (barber) => barber.name != props.barber.name
            );
          } else {
            setHeartIcon("heart");
            Favorites.push(props.barber);
          }
        }}
      >
        <MaterialCommunityIcons
          name={heartIcon}
          size={26}
          selectionColor="white"
          backgroundColor="black"
          color="white"
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
