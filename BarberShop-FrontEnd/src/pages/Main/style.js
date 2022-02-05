import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  position: absolute;
`;
export const MapIcon = styled.View``;
export const MainTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  padding: 20px 40px 20px 0;
`;

export const subTitle = styled.Text`
  font-size: 15px;
  padding-right: 20px;
  font-family: "sans-serif-medium";
`;

export const LocationButton = styled.TouchableOpacity`
  background: #232129;
  border-color: #232129;
  border-radius: 5px;
  height: 40px;
  padding: 2px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0px;
`;

export const LocationText = styled.Text`
  color: white;
  font-size: 18px;
  margin-left: 10px;
`;
