import React, { useState } from "react";
import { Image, TextInput, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CheckBox from "react-native-check-box";
import Input from "../../components/Input";

import * as S from "./style";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.MainTitle>Welcome</S.MainTitle>
      <S.MainTitle>User</S.MainTitle>
      <S.UserImage source={require("../../assets/user.png")} />
      <S.SubTitle>Sign up to Join</S.SubTitle>

      <S.InputArea>
        <Input placeholder="Name" IconName="person" />
        <Input placeholder="Email" IconName="mail" />
        <Input placeholder="Mobile" IconName="phone" />
        <Input placeholder="Password" IconName="lock" />
      </S.InputArea>

      <S.textContainer>
        <CheckBox
          onClick={() => {
            setChecked(!checked);
          }}
          isChecked={checked}
        ></CheckBox>
        <Text>I agree to the Terms of Service</Text>
      </S.textContainer>

      <S.SigninButton onPress={() => navigation.navigate("Signup")}>
        <S.SignInText>Sign Up</S.SignInText>
      </S.SigninButton>

      <View>
        <Text>Have an Account ? Sign In </Text>
      </View>
    </S.Container>
  );
};

export default SignUp;
