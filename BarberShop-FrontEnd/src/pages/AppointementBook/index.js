import React, { useState } from "react";
import { View, Text, StatusBar, Alert, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Modal } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Center, Button } from "native-base";
export default function AppointementBook({ navigation }) {
  return (
    <View style={{ padding: 10 }}>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <Text
        style={{
          marginBottom: 25,
          fontSize: 22,
          fontFamily: "Roboto",
          marginLeft: 8,
        }}
      >
        Choose a Date:
      </Text>
      <Calendar
        initialDate="2022-02-05"
        style={{
          height: "70%",
          width: "70%",
          alignSelf: "center",
          marginBottom: -15,
          backgroundColor: "#eee",
          padding: -8,
          marginTop: -20,
        }}
        onDayPress={(day) => console.log(day)}
      />

      <TimeSlots navigation={navigation} />
    </View>
  );
}

const TimeSlots = (props) => {
  let [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const time_slots = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "14:00",
    "14:30",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];
  return (
    <View>
      <Text style={{ padding: 8, fontFamily: "Roboto", fontSize: 15 }}>
        Time Slots Available:
      </Text>
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
                name="check"
                size={12}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginRight: 5,
                }}
              />
              Appointement Book INFO!{" "}
            </Modal.Header>
            <Modal.Body>
              This Time Slot is not available please choose another one or pick
              another day
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Sure !
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
        {time_slots.map((value, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (value.includes(["4"]) === true) {
                setShowModal(true);
              } else {
                props.navigation.navigate("AppointementCompleted");
              }
            }}
            style={{
              padding: 4,
              backgroundColor:
                value.includes(["4"]) === true ? "black" : "white",

              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 40,
              borderRadius: 8,
              borderWidth: 0.5,
              margin: 2,
            }}
          >
            <Text
              style={{
                color: value.includes(["4"]) === true ? "white" : "black",
              }}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
