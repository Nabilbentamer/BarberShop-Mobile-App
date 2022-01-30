import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import styled from "styled-components";

export default function Headertabs(props) {
  return (
    <View>
      <MainTitle> Choose a barberShop</MainTitle>
      <Container>
        <HeaderButton
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
          text="nearby"
          icon="map-marker"
          icontype="font-awesome"
        />
        <HeaderButton
          text="random"
          icon="random"
          icontype="font-awesome"
          activeTab={props.activeTab} // initial state is:  nearby
          setActiveTab={props.setActiveTab} // iniat state : ""
        />
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

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 30,
      flexDirection: "row",
      marginRight: 5,
      alignItems: "center",
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
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
      style={{ marginLeft: 8, alignItems: "center" }}
      color={props.activeTab === props.text ? "white" : "black"}
    ></Icon>
  </TouchableOpacity>
);
