import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { Modal } from "native-base";
import { Center, Button } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar hidden={true}></StatusBar>
      <S.MapIcon>
        <Icon
          name="map-marker"
          type="font-awesome"
          size={80}
          color="black"
          style={styles.icon}
        ></Icon>
      </S.MapIcon>
      <S.MainTitle>Hello, Nice to Meet you !</S.MainTitle>
      <S.subTitle>
        Set your Location to start find barberShop Near You
      </S.subTitle>
      <Center>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          _backdrop={{
            _dark: {
              bg: "coolGray.800",
            },
            bg: "warmGray.50",
          }}
        >
          <Modal.Content maxWidth="350" maxH="212">
            <Modal.CloseButton />
            <Modal.Header style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="map-marker"
                size={12}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginRight: 5,
                }}
              />
              Location Access Permission
            </Modal.Header>
            <Modal.Body>
              We'll use your location to give you access to nearby BarberShops
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Deny
                </Button>
                <Button
                  onPress={() => {
                    navigation.navigate("BarberShopList");
                  }}
                >
                  Allow
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      <S.LocationButton onPress={() => setShowModal(true)}>
        <Icon name="location-arrow" type="font-awesome" color="white"></Icon>
        <S.LocationText>Use Current Location</S.LocationText>
      </S.LocationButton>
      <S.subTitle>Or Set your Location manually :</S.subTitle>
      <Searchbar
        style={styles.searchbar}
        placeholder="Ex: Casablanca"
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
      ></Searchbar>
    </S.Container>
  );
};

const Example = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Button</Button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: "coolGray.800",
          },
          bg: "warmGray.50",
        }}
      >
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="map-marker"
              size={12}
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginRight: 5,
              }}
            />
            Location Access Permission
          </Modal.Header>
          <Modal.Body>
            We'll use your location to give you access to nearby BarberShops
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Deny
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Allow
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
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
