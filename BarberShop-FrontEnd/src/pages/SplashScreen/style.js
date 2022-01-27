import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 16px;
  margin: 64px 8px 24px;
`;

export const SignupButton = styled.TouchableOpacity`
  background: black;
  padding: 10px 20px;
  border-radius: 15px;
  width: 50%;
  align-items: center;
`;
export const SignupText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  background: white;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 15px;
  width: 50%;
  align-items: center;
  margin-top: 15px;
`;

export const LoginText = styled.Text`
  color: black;
  font-size: 20px;
`;
