import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MapModal from "../components/MapModal";
// import GoogleApiWrapper from "../components/Map";
import MapContainer from "../components/Map";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
      {/* <GoogleApiWrapper/> */}
      <MapContainer></MapContainer>
      <MapModal />
    </View>
  );
};

export default HomeScreen;
