import { View, TouchableOpacity, Linking } from "react-native";
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
import MenuIcon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = (props) => {
  const sheetRef = useState(null);
  const [userData, setUserData] = useState(null);
  const [snapPoint, setSnapPoint] = useState(532);

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
      {props.route.displayRoute ? setSnapPoint(432) : setSnapPoint(432)}
      {props.route.route.length === 0 ? <MapModal /> : <SearchPageModal />}
    </View>
  );

  const [callNumber, setCallNumber] = useState("");

  const triggerCall = () => {
    if (props.emergencyContacts.emergencyContacts.length === 0) {
      return;
    } else {
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
        <View style={{ position: "absolute", left: 0, top: 0 }}>
          {props.route.displayRoute ? (
            <RouteDirections />
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                left: 0,
                top: 10,
                borderRadius: 5,
                backgroundColor: colors.tertiaryBlue,
                borderColor: colors.backgroundColor,
                borderWidth: 3,
                width: 47,
                height: 47,
                marginBottom: 100,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
              // TODO:
              onPress={() => props.navigation.openDrawer()}
            >
              <MenuIcon size={35} color="white" name="menu" />
            </TouchableOpacity>
          )}
        </View>

        <View style={{ position: "absolute", right: 0, bottom: 100 }}>
          <AudioButton />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            position: "absolute",
            right: 0,
            bottom: 80,
            borderRadius: 100,
            backgroundColor: colors.tertiaryBlue,
            borderColor: colors.backgroundColor,
            borderWidth: 3,
            width: 60,
            height: 60,
            marginBottom: 100,
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
          }}
          onPress={triggerCall}
        >
          <Icon
            size={38}
            color="white"
            name="ios-call"
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[snapPoint, 350, 100]}
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
