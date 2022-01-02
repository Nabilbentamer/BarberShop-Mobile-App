import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MainStack from "./src/stack/MainStack";

export default function App() {
  return <MainStack></MainStack>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
