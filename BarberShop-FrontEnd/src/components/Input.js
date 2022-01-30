import React from "react";
import styled from "styled-components/native";

import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";

const InputArea = styled.View`
  background: #d3d3d3;
  height: 40px;
  margin-bottom: 8px;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export default ({ IconName, placeholder, value, onChangeText, onBlur }) => {
  return (
    <InputArea>
      <Icon name={IconName} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="white"
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      ></TextInput>
    </InputArea>
  );
};
