import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MapModal from "../components/MapModal";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
      <MapModal />
    </View>
  );
};

export default HomeScreen;
