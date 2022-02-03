import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
export let Favorites_barber = [];

export default function BarberProfileCompo(props) {
  //const { test } = props.route.params;
  const INFO = props.route.params.barber_info;
  const name = props.route.params.name;
  const addresse = props.route.params.addresse;
  const image = props.route.params.image;
  const navigation = useNavigation();
  const [heartIcon, setHeartIcon] = useState("heart-outline");

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <Image
        source={{
          uri: "https://townsquare.media/site/942/files/2020/04/RS37761_GettyImages-506514876.jpg?w=980&q=75",
        }}
        style={{ width: "100%", height: 180 }}
      ></Image>

      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: -60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Image
          source={{
            uri: INFO.photo,
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            position: "relative",
            top: -30,
          }}
        />
        <View
          style={{
            marginTop: -15,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            {INFO.name}
          </Text>
          <Text
            style={{
              color: "black",
              marginTop: 4,
              alignSelf: "center",
            }}
          >
            {name}
          </Text>
          <View
            style={{ flexDirection: "row", marginTop: 4, alignSelf: "center" }}
          >
            <MaterialCommunityIcons
              name="map-marker"
              size={12}
              style={{ alignItems: "center", justifyContent: "center" }}
            />
            <Text style={{ fontSize: 12, marginLeft: 8 }}>{INFO.location}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 4,
            }}
          >
            <MaterialCommunityIcons
              name="star"
              size={14}
              style={{
                alignSelf: "center",
                marginRight: 8,
              }}
            ></MaterialCommunityIcons>
            <Text>{INFO.rating}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 18,
          marginTop: -60,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray", borderRadius: 8 }}
            fillColor="green"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Men's Hair cut
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>30min</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>35$</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 18,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray", borderRadius: 8 }}
            fillColor="green"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Beard's Trim
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>30min</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>20$</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 18,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <BouncyCheckbox
            iconStyle={{ borderColor: "lightgray", borderRadius: 8 }}
            fillColor="green"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Men's Hair Oil
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>30min</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>15$</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginRight: 14,
          }}
          onPress={(value) => {
            if (heartIcon === "heart") {
              setHeartIcon("heart-outline");
              Favorites_barber = Favorites_barber.filter(
                (barber) => barber.name != INFO.name
              );
              console.log(Favorites_barber);
            } else {
              setHeartIcon("heart");
              Favorites_barber.push(INFO);
              console.log(Favorites_barber);
            }
          }}
        >
          <MaterialCommunityIcons
            name={heartIcon}
            size={30}
          ></MaterialCommunityIcons>
        </TouchableOpacity>

        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              width: 180,
              heigh: 80,
              borderRadius: 12,
              padding: 12,
            }}
            onPress={() => navigation.navigate("AppointementBook")}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
