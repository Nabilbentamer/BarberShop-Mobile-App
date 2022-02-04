import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabs from "../../components/BottomTabs";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { Favorites_barber } from "../../components/BarberProfileCompo";
import { Favorites } from "../../components/BarberShopItem";

export default ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("BarberShops");

  let [fav, setFav] = useState(Favorites);

  let [favbarber, setFavbarber] = useState(Favorites_barber);
  useEffect(() => {}, [fav]);
  useEffect(() => {}, [favbarber]);

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <HeaderButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            text="BarberShops"
            icon="store"
            icontype="font-awesome"
          />
          <HeaderButton
            text="Barbers"
            icon="account"
            icontype="font-awesome"
            activeTab={activeTab} // initial state is:  nearby
            setActiveTab={setActiveTab} // iniat state : ""
          />
        </Container>
        {activeTab === "BarberShops" ? (
          <>
            {fav.map((favorite, index) => (
              <View
                style={{
                  backgroundColor: "white",
                  padding: 28,
                  width: "90%",
                  marginTop: 18,
                  justifyContent: "center",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      source={{
                        uri: favorite.image_url,
                      }}
                      style={{ width: 81, height: 80, borderRadius: 15 }}
                    />
                  </View>
                  <View style={{ padding: 7, marginLeft: 8 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        fontFamily: "Roboto",
                      }}
                    >
                      {favorite.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        fontFamily: "Roboto",
                        color: "gray",
                        marginTop: 6,
                      }}
                    >
                      Ali Abderrazzak Résidence Pavillon
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        fontFamily: "Roboto",
                        color: "gray",
                        marginTop: 6,
                      }}
                    >
                      ⭐ {favorite.reviews}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 8,
                      width: 120,
                      height: 50,
                      backgroundColor: "white",
                      marginTop: 18,
                      marginRight: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                      borderWidth: 0.2,
                    }}
                  >
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                      Go To Profile
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      let x = fav.filter(
                        (barber) => barber.name != favorite.name
                      );
                      setFav(x);
                      //console.log(x);
                    }}
                    style={{
                      padding: 8,
                      width: 120,
                      height: 50,
                      backgroundColor: "black",
                      marginTop: 18,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      borderRadius: 8,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        ) : (
          <>
            {favbarber.map((favorite, index) => (
              <View
                style={{
                  backgroundColor: "white",
                  padding: 28,
                  width: "90%",
                  marginTop: 18,
                  justifyContent: "center",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      source={{
                        uri: favorite.photo,
                      }}
                      style={{ width: 81, height: 80, borderRadius: 15 }}
                    />
                  </View>
                  <View style={{ padding: 7, marginLeft: 8 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        fontFamily: "Roboto",
                      }}
                    >
                      {favorite.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        fontFamily: "Roboto",
                        color: "gray",
                        marginTop: 6,
                      }}
                    >
                      {favorite.location}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                        fontFamily: "Roboto",
                        color: "gray",
                        marginTop: 6,
                      }}
                    >
                      ⭐ {favorite.rating}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 8,
                      width: 120,
                      height: 50,
                      backgroundColor: "white",
                      marginTop: 18,
                      marginRight: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                      borderWidth: 0.2,
                    }}
                  >
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                      Go To Profile
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      let x = fav.filter(
                        (barber) => barber.name != favorite.name
                      );
                      setFav(x);
                      //console.log(x);
                    }}
                    style={{
                      padding: 8,
                      width: 120,
                      height: 50,
                      backgroundColor: "black",
                      marginTop: 18,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      borderRadius: 8,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </>
  );
};
const MainTitle = styled.Text`
  font-size: 24px;
  font-weight: 900;
  margin-left: 20px;
`;
const Container = styled.View`
  flex-direction: row;
  align-self: flex-start;
  margin-top: 15px;
  margin-left: 20px;
`;

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 30,
      flexDirection: "row",
      marginRight: 5,
      alignItems: "center",
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 18,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
    <MaterialCommunityIcons
      name={props.icon}
      type={props.icontype}
      size={15}
      style={{ marginLeft: 8, alignItems: "center" }}
      color={props.activeTab === props.text ? "white" : "black"}
    ></MaterialCommunityIcons>
  </TouchableOpacity>
);
