import React, { useState } from "react";
import { Alert, TextInput, View, Text, TouchableOpacity } from "react-native";

import Input from "../../components/Input";
import CheckBox from "react-native-check-box";
import { Icon } from "react-native-elements";

import * as S from "./style";

import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as authAction from "../../redux/actions/AuthActions";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) =>
        dispatch(authAction.loginUser(values))
          .then((result) => {
            if (result.success) {
              navigation.navigate("Main");
            } else {
              Alert.alert(result.message);
            }
          })
          .catch((err) => console.log(err))
      }
    >
      {(props) => (
        <S.Container>
          <S.MainTitle>Welcome</S.MainTitle>
          <S.MainTitle>Back</S.MainTitle>
          <S.UserImage source={require("../../assets/user_haircut.jpg")} />
          <S.SubTitle>Sign in to Continue</S.SubTitle>

          <S.InputArea>
            <Input
              placeholder="Enter your Email adresse"
              IconName="mail"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
            />
            <Text>{props.touched.email && props.errors.email}</Text>
            <Input
              secureTextEntry={true}
              placeholder="Enter your password"
              IconName="lock"
              value={props.values.password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
            />
            <Text>{props.touched.password && props.errors.password}</Text>
          </S.InputArea>

          <S.textContainer>
            <CheckBox
              onClick={() => {
                setChecked(!checked);
              }}
              isChecked={checked}
            ></CheckBox>
            <Text style={{ marginLeft: -50 }}>Remember me</Text>
            <Text
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
                textDecorationColor: "#000",
              }}
            >
              Forgot Password ?{" "}
            </Text>
          </S.textContainer>

          <S.SigninButton
            onPress={() => {
              props.handleSubmit("formik");
            }}
          >
            <S.SignInText>Sign in</S.SignInText>
          </S.SigninButton>

          <S.SignFbButton onPress={() => navigation.navigate("SplashScreen")}>
            <Icon name="facebook" style={{ marginRight: 8 }}></Icon>
            <S.SignFbText>Sign in With Facebook </S.SignFbText>
          </S.SignFbButton>

          <View style={{ marginTop: 10, marginLeft: 4, flexDirection: "row" }}>
            <Text>Don't Have an Account ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </S.Container>
      )}
    </Formik>
  );
};

export default Login;
