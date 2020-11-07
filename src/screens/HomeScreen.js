import React from "react";
import { View } from "react-native";
import MapModal from "../../components/MapModal";
import MapView from "react-native-maps";

const HomeScreen = () => {
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
          height: "75%",
          width: "100%",
        }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
      </View>
      <MapModal />
    </View>
  );
};

export default HomeScreen;
