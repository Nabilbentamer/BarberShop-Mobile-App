import React from "react";
import { View, Text, StatusBar, Alert, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function AppointementBook() {
  return (
    <View style={{ padding: 10 }}>
      <StatusBar
        hidden={true}
        barStyle="dark-content"
        backgroundColor="white"
      ></StatusBar>
      <Text style={{ marginBottom: 25, fontSize: 18, fontFamily: "monospace" }}>
        Choose a Date:{" "}
      </Text>
      <Calendar
        style={{
          height: "70%",
          width: "70%",
          alignSelf: "center",
          marginBottom: -15,
        }}
        onDayPress={(day) => console.log(day)}
      />

      <TimeSlots />
    </View>
  );
}

const TimeSlots = () => {
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
      <Text style={{ padding: 8 }}>Time Slots Available:</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 1 }}>
        {time_slots.map((value) => (
          <TouchableOpacity
            style={{
              padding: 4,
              backgroundColor: "#eee",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 40,
              borderRadius: 8,
              margin: 2,
            }}
          >
            <Text style={{ color: "black" }}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
