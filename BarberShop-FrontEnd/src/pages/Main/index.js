import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import * as S from "./style";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <S.Container>
      <S.MapIcon>
        <Icon
          name="map-marker"
          type="font-awesome"
          size={80}
          color="gray"
          style={styles.icon}
        ></Icon>
      </S.MapIcon>

      <S.MainTitle>Hello, Nice to Meet you !</S.MainTitle>

      <S.subTitle>
        Set your Location to start find barberShop Near You
      </S.subTitle>

      <S.LocationButton>
        <Icon name="location-arrow" type="font-awesome" color="white"></Icon>
        <S.LocationText>Use Current Location</S.LocationText>
      </S.LocationButton>

      <S.subTitle>Or Set your Location manually :</S.subTitle>
      <Searchbar
        style={styles.searchbar}
        placeholder="location"
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
      ></Searchbar>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 18,
    justifyContent: "flex-start",
    position: "relative",
    right: 95,
  },
  searchbar: {
    marginTop: 20,
  },
});
