import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import MapModal from "../components/MapModal";
import MapView from "react-native-maps";
import MapContainer from "../components/Map";
import BottomSheet from "reanimated-bottom-sheet";
import { colors } from "../styles/colors.js";
import SearchPageModal from "../components/SearchPageModal";

const renderContent = () => (
  <View
    style={{
      // backgroundColor: "#05054D",
      backgroundColor: colors.backgroundColor,
      padding: 16,
      height: 450,
    }}
  >
    {/* <SearchPageModal></SearchPageModal> */}
    <MapModal></MapModal>
  </View>
);

const HomeScreen = ({ navigation }) => {
  let username = navigation.getParam("text", "sample");
  const sheetRef = useState(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
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
        <MapContainer />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[500, 300, 100]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    directions: state.directions,
  };
};
export default connect(mapStateToProps, null)(HomeScreen);
