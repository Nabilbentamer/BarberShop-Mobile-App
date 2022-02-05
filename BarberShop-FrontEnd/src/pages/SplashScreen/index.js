import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StatusBar } from "react-native";

import * as S from "./style";

export default () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <Image source={require("../../assets/barberShop-logo.jpeg")}></Image>
      <View>
        <S.Title>Find the best BarberShop At Your door Step</S.Title>
      </View>
      <S.SignupButton onPress={() => navigation.navigate("Signup")}>
        <S.SignupText>Sign up</S.SignupText>
      </S.SignupButton>
      <S.LoginButton onPress={() => navigation.navigate("Login")}>
        <S.LoginText>Login </S.LoginText>
      </S.LoginButton>
    </S.Container>
  );
};
