import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 90px 30px;
  background-color: white;
  flex: 1;
`;

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  position: absolute;
  right: 20px;
  top: 20%;
`;
export const MainTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: gray;
  margin-top: 10px;
`;

export const InputArea = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const SigninButton = styled.TouchableOpacity`
  background: #232129;
  border-color: #232129;
  border-radius: 5px;
  border-width: 2px;
  height: 40px;
  margin-bottom: 8px;
  padding: 2px 16px;
  width: 100%;
  align-items: center;
`;

export const SignInText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const SignFbButton = styled.TouchableOpacity`
  background: white;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 15px;
  align-items: center;
  margin-top: 15px;
`;

export const SignFbText = styled.Text`
  color: black;
  font-size: 15px;
`;
export const textContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;
