import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import MapModal from "../components/MapModal";
import MapView from "react-native-maps";
import MapContainer from "../components/Map";
import BottomSheet from "reanimated-bottom-sheet";
import { colors } from "../styles/colors.js";
import SearchPageModal from "../components/SearchPageModal";
import RouteDirections from "../components/RouteDirections";
import AudioButton from "../components/AudioButton";
import { loadUserData } from "../../firebase/firebase.util";

const HomeScreen = (props) => {
  const sheetRef = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const result = await loadUserData("Demo401!");
      setUserData(result);
      return;
    }
    loadData();
  }, []);

  const renderContent = () => (
    <View
      style={{
        // backgroundColor: "#05054D",
        backgroundColor: colors.backgroundColor,
        padding: 16,
        height: 500,
      }}>
      {props.route.route.length === 0 ? <MapModal /> : <SearchPageModal />}
    </View>
  );
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
        <View style={{ flex: 10 }}>
          {props.route.displayRoute ? <RouteDirections /> : null}
        </View>
        <View style={{ flex: 20 }}>
          <AudioButton />
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[532, 300, 100]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    route: state.directions,
    userData: state.user,
  };
};
export default connect(mapStateToProps, null)(HomeScreen);
