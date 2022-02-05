import { Modal } from "native-base";
import { Center, Button } from "native-base";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Icon } from "react-native-elements";
const Example = () => {
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
export default () => {
  return <Example />;
};
