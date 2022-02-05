import React, { useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  const origin = { latitude: 33.61087, longitude: -7.50409 };
  const destination = { latitude: 33.5487, longitude: -7.50409 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyD8incqNwibU1dt1EP9H6a5HlY08Oj7n0g";
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 33.61087,
        longitude: -7.50409,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={destination}
        title={"235th Barber"}
        description={"Ali Abderrazzak Résidence Pavillon"}
      />
      <MapView.Marker coordinate={origin} title={"Nabil bentamer"} />

      <MapViewDirections
        lineDashPattern={[2]}
        lineCap="square"
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={4}
        strokeColor="red"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
