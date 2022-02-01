import React from "react";
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

export default function BarberProfile() {
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
          top: -20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            position: "relative",
            top: -30,
          }}
        />
        <View style={{ marginTop: -15, justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Nabil BenTamer
          </Text>
          <Text
            style={{
              color: "black",
              marginTop: 4,
              alignSelf: "center",
            }}
          >
            BarberShop name
          </Text>
          <View
            style={{ flexDirection: "row", marginTop: 4, alignSelf: "center" }}
          >
            <MaterialCommunityIcons
              name="map-marker"
              size={12}
              style={{ alignItems: "center", justifyContent: "center" }}
            />
            <Text style={{ fontSize: 12, marginLeft: 8 }}>Casablanca</Text>
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
            <Text>250</Text>
          </View>
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
              Men's Hair cut
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>45min</Text>
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
              Men's Hair cut
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>45min</Text>
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
              Men's Hair cut
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>45min</Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>35$</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
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
        >
          <MaterialCommunityIcons
            name="heart"
            size={30}
          ></MaterialCommunityIcons>
        </View>

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
          >
            <Text style={{ color: "white", fontSize: 18 }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
