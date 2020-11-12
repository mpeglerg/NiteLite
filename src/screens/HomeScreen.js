import React, { useState } from "react";
import { View } from "react-native";
import MapModal from "../components/MapModal";
import MapContainer from "../components/Map";
import BottomSheet from "reanimated-bottom-sheet";

const renderContent = () => (
  <View
    style={{
      backgroundColor: "#2566E8", // subject to change 
      padding: 16,
      height: 450,
    }}>
    <MapModal></MapModal>
  </View>
);

const HomeScreen = () => {
  const sheetRef = useState(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
      <View
        style={{
          height: "100%",
          width: "100%",
        }}>
          <MapContainer />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 100]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
};

export default HomeScreen;
