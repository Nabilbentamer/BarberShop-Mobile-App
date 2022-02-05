import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export function ChooseButton(props) {
  const navigation = useNavigation();
  const barbers = props.route.params.barbers;
  const addresse = props.route.params.addresse;
  const name = props.route.params.name;
  const image = props.route.params.image;

  return (
    <Container>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.CustomButton}
          onPress={() =>
            navigation.navigate("BarbersSelection", {
              barbers: barbers,
              addresse: addresse,
              name: name,
              image: image,
            })
          }
        >
          <Text style={styles.CustomText}>Pick a professional</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  position: absolute;
  height: 140px;
  bottom: -80px;
  z-index: 999;
`;
const styles = StyleSheet.create({
  ButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
    position: "relative",
  },
  CustomButton: {
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 18,
    width: 180,
    position: "absolute",
  },
  CustomText: {
    color: "white",
  },
});
