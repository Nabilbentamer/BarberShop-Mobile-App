import React from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";

export default function Reviews() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={{ backgroundColor: "#eee", padding: 18, flexDirection: "row" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Nabil bentamer</Text>
          <View style={{ flexDirection: "row" }}>
            <Stars />
          </View>
          <Text style={{ marginLeft: 8, paddingRight: 18, marginTop: 5 }}>
            Real barbershop,professional work and friendly guys
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#eee", padding: 18, flexDirection: "row" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Nabil bentamer</Text>
          <View style={{ flexDirection: "row" }}>
            <Stars />
          </View>
          <Text style={{ marginLeft: 8, paddingRight: 18, marginTop: 5 }}>
            Real barbershop,professional work and friendly guys
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#eee", padding: 18, flexDirection: "row" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Nabil bentamer</Text>
          <View style={{ flexDirection: "row" }}>
            <Stars />
          </View>
          <Text style={{ marginLeft: 8, paddingRight: 18, marginTop: 5 }}>
            Real barbershop,professional work and friendly guys
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#eee", padding: 18, flexDirection: "row" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>Nabil bentamer</Text>
          <View style={{ flexDirection: "row" }}>
            <Stars />
          </View>
          <Text style={{ marginLeft: 8, paddingRight: 18, marginTop: 5 }}>
            Real barbershop,professional work and friendly guys
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const Stars = () => {
  return (
    <StarRating
      style={{ backgroundColor: "black" }}
      disabled={false}
      maxStars={5}
      rating={4}
      starSize={12}
    />
  );
};
