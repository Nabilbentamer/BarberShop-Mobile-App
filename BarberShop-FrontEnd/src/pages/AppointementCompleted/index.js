import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";

export default function AppointementCompleted({ navigation }) {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 18 }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          your appointment has been confirmed IN :
        </Text>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            borderWidth: 0.8,
            borderColor: "#eee",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 18,
            paddingLeft: 10,
            borderRadius: 15,
          }}
        >
          <View style={{ padding: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 8 }}>
              235th Barber
            </Text>
            <Text style={{ fontSize: 11, maxWidth: 140 }}>
              Ali Abderrazzak Résidence Pavillon
            </Text>
            <Text style={{ fontSize: 11 }}> ⭐244 </Text>
          </View>
          <Image
            source={{
              uri: "https://static.lpnt.fr/images/2017/08/04/9635864lpaw-9641167-jpg_4467945.jpg",
            }}
            style={{ width: 90, height: 100, borderRadius: 10 }}
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            borderWidth: 0.8,
            borderColor: "#eee",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 18,
            paddingLeft: 10,
            borderRadius: 15,
          }}
        >
          <View style={{ padding: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 8 }}>
              Hamid
            </Text>
            <Text style={{ fontSize: 11, maxWidth: 140 }}>
              Service: Men's Haircut
            </Text>
            <Text style={{ fontSize: 11 }}> Price: 35$ </Text>
          </View>
          <Image
            source={{
              uri: "https://i.imgur.com/GDtyJbb.jpg",
            }}
            style={{ width: 90, height: 100, borderRadius: 10 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BarberLocation");
          }}
          style={{
            padding: 18,
            width: "60%",
            backgroundColor: "black",
            marginTop: 28,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Get Directions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
