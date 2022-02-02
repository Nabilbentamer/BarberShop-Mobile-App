import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon
        icon="search"
        text="Browse"
        navigate={() => {
          navigation.navigate("Main");
        }}
      />
      <Icon
        icon="heart"
        text="Favorites"
        navigate={() => {
          navigation.navigate("Favorites");
        }}
      />
      <Icon icon="calendar" text="Appointements" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity onPress={props.navigate}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
