import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MapModal from "../components/MapModal";
import MapView from "react-native-maps";
import MapContainer from "../components/Map";
import BottomSheet from "reanimated-bottom-sheet";
import { colors } from "../styles/colors.js";
import SearchPageModal from "../components/SearchPageModal";
import RouteDirections from "../components/RouteDirections";
import AudioButton from "../components/AudioButton";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = (props) => {
  const sheetRef = useState(null);

  const renderContent = () => (
    <View
      style={{
        // backgroundColor: "#05054D",
        backgroundColor: colors.backgroundColor,
        padding: 16,
        height: 500,
      }}
    >
      {props.route.route.length === 0 ? <MapModal /> : <SearchPageModal />}
    </View>
  );

  const [callNumber, setCallNumber] = useState("");

  const triggerCall = () => {
    const formattedNumber = props.emergencyContacts.emergencyContacts[0].number.replace(
      /-/g,
      ""
    );

    if (Platform.OS == "android") {
      setCallNumber(`tel:${formattedNumber}`);
    } else {
      setCallNumber(`telprompt:${formattedNumber}`);
    }
    if (callNumber.length !== 0) {
      Linking.openURL(callNumber);
    }
  };

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
          style={{ flex: 2 }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
        <MapContainer />
        {/* <View style={{ flex: 10 }}>
          {props.route.displayRoute ? <RouteDirections /> : null}
        </View> */}
        <View style={{ flex: 0.75 }}>
          <AudioButton />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: 2,
            backgroundColor: "white",
            borderColor: colors.tertiaryBlue,
            borderWidth: 3,
            borderRadius: 50,
            height: 60,
            width: 60,
            margin: 10,
            justifyContent: "center",
          }}
          // style={styles.buttons}
          onPress={triggerCall}
        >
          <Icon size={38} name="ios-call" style={{ alignSelf: "center" }} />
        </TouchableOpacity>
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
  };
};
export default connect(mapStateToProps, null)(HomeScreen);
