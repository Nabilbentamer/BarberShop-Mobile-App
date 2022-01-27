import React from "react";
import { TextInput, View, Text } from "react-native";

import Input from "../../components/Input";

import * as S from "./style";

const Login = () => {
  return (
    <S.Container>
      <S.MainTitle>Welcome</S.MainTitle>
      <S.MainTitle>Back</S.MainTitle>

      <S.SubTitle>Sign in to Continue</S.SubTitle>

      <S.InputArea>
        <Input placeholder="Enter your Email adresse" IconName="mail" />
        <Input placeholder="Enter your password" IconName="lock" />
      </S.InputArea>

      <S.textContainer>
        <Text>Remember me</Text>
        <Text>Forgot Password ? </Text>
      </S.textContainer>

      <S.SigninButton onPress={() => navigation.navigate("Signup")}>
        <S.SignInText>Sign in</S.SignInText>
      </S.SigninButton>

      <S.SignFbButton onPress={() => navigation.navigate("Login")}>
        <S.SignFbText>Sign in With Facebook </S.SignFbText>
      </S.SignFbButton>

      <View>
        <Text>Don't Have an Account ? Sign up </Text>
      </View>
    </S.Container>
  );
};

export default Login;
