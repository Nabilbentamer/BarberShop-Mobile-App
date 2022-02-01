import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ChooseButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.CustomButton}
          onPress={() => navigation.navigate("BarbersSelection")}
        >
          <Text style={styles.CustomText}>Pick a professional</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 180,
    zIndex: 999,
  },
  ButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  CustomButton: {
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 18,
    width: 180,
    position: "relative",
  },
  CustomText: {
    color: "white",
  },
});
