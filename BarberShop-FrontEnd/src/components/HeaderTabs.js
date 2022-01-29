import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import styled from "styled-components";

export default function Headertabs() {
  return (
    <View>
      <MainTitle> Choose a barberShop</MainTitle>
      <Container>
        <HeaderButton text="nearby" icon="map-marker" icontype="font-awesome" />
        <HeaderButton text="random" icon="random" icontype="font-awesome" />
      </Container>
    </View>
  );
}
const MainTitle = styled.Text`
  font-size: 24px;
  font-weight: 900;
  margin-left: 20px;
`;
const Container = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-top: 15px;
  margin-left: 20px;
`;

const styles = StyleSheet.create({
  Area: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  icon: {
    marginLeft: 8,
    alignItems: "center",
  },
});

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: "black",
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 30,
      flexDirection: "row",
      marginRight: 5,
      alignItems: "center",
    }}
  >
    <Text
      style={{
        color: "white",
        fontSize: 18,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
    <Icon
      name={props.icon}
      type={props.icontype}
      size={15}
      style={styles.icon}
      color="white"
    ></Icon>
  </TouchableOpacity>
);
