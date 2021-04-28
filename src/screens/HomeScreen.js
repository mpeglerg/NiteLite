import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
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
import { loadUserData } from "../../firebase/firebase.util";

const HomeScreen = (props) => {
  const sheetRef = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const result = await loadUserData(
        props.emergencyContacts.user.username
          ? props.emergencyContacts.user.username
          : "Demo401!"
      );
      setUserData(result);
      props.updateConstructionPreferences(result.construction);
      props.updateCrimeRatePreferences(result.crimeRates);
      props.updateStreetlightPreferences(result.lighting);
      props.updateWalkscorePreferences(result.walkScore);
      // check if state.emergency contacts and result.emergency contacts are different, if so need to load into state
      if (
        props.emergencyContacts.emergencyContacts.length !==
        result.emergencyNumber.length
      ) {
        result.emergencyNumber.map((contact) => {
          props.addEmergencyContact(contact);
        });
      }

      if (props.safeSpots.length !== result.safeSpots.length) {
        result.safeSpots.map((safeSpot) => {
          props.addSafeSpot(safeSpot);
        });
      }

      return;
    }
    loadData();
  }, []);

  const renderContent = () => (
    <View
      style={{
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
    emergencyContacts: state.emergencyContacts,
    safeSpots: state.safeSpots.safeSpots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: (id) => {
      dispatch({ type: "UPDATE_EMAIL", payload: id });
    },
    updatePhoneNumber: (id) => {
      dispatch({ type: "UPDATE_PHONE_NUMBER", payload: id });
    },
    addEmergencyContact: (name, number) => {
      dispatch({ type: "ADD_EMERGENCY_CONTACT", id: { name, number } });
    },
    addSafeSpot: (newSafeSpot) => {
      dispatch({ type: "ADD_SAFE_SPOT", payload: newSafeSpot });
    },
    updateConstructionPreferences: (id) => {
      dispatch({ type: "UPDATE_CONSTRUCTION_PREFERENCES", payload: id });
    },
    updateCrimeRatePreferences: (id) => {
      dispatch({ type: "UPDATE_CRIME_RATE_PREFERENCES", payload: id });
    },
    updateWalkscorePreferences: (id) => {
      dispatch({ type: "UPDATE_WALKSCORE_PREFERENCES", payload: id });
    },
    updateStreetlightPreferences: (id) => {
      dispatch({ type: "UPDATE_STREETLIGHT_PREFERENCES", payload: id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
