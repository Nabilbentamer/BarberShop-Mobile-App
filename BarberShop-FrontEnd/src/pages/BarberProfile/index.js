import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BarberProfileCompo from "../../components/BarberProfileCompo";
import BottomTabs from "../../components/BottomTabs";
export default function BarberProfile({ route, navigation }) {
  return (
    <>
      <BarberProfileCompo route={route} />
      <BottomTabs navigation={navigation} />
    </>
  );
}
