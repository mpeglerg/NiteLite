import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Linking,
  Share,
  Text,
} from "react-native";
import ModalSearchBar from "./ModalSearchBar";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../styles/colors.js";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import RouteList from "./RouteList";
import { loadRecentRoutes } from "../../firebase/firebase.util";
import { getDirections } from "../../data/directionsApi";

const MapModal = (props) => {
  const [callNumber, setCallNumber] = useState("");
  const [recents, setRecents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRecents() {
      let results = await loadRecentRoutes(
        props.emergencyContacts.user.username
          ? props.emergencyContacts.user.username
          : "Demo401!"
      );
      setRecents(results);
      return;
    }
    loadRecents();
  }, []);

  const performQuery = async (destination) => {
    setError(null);
    console.log("PERFORM QUERY CALLED", {
      origin: `${props.directions.currentLocation.latitude},${props.directions.currentLocation.longitude}`,
      destination: destination,
    });
    try {
      const directions = await getDirections({
        origin: `${props.directions.currentLocation.latitude},${props.directions.currentLocation.longitude}`,
        destination: destination,
      });
      console.log("DIRECTIONS", directions);
      props.updateCurrentRoute(directions);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

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
    <View style={styles.centeredView}>
      <ScrollView style={styles.modalView}>
        <ModalSearchBar />
        {recents.length !== 0 ? (
          <View style={styles.tabs}>
            <Text style={styles.tabsText}>Recents</Text>
          </View>
        ) : (
          <View style={styles.tabs}>
            <Text style={styles.tabsText}>Type in your first destination!</Text>
          </View>
        )}
        <View>
          {recents[0] != null ? (
            <TouchableOpacity
              style={styles.recentContainer}
              onPress={() => {
                console.log("ON PRESSED CALLED");
                performQuery(recents[0]);
              }}
            >
              <Text>{recents[0]}</Text>
            </TouchableOpacity>
          ) : null}
          {recents[1] != null ? (
            <TouchableOpacity style={styles.recentContainer}>
              <Text>{recents[1]}</Text>
            </TouchableOpacity>
          ) : null}
          {recents[2] != null ? (
            <TouchableOpacity style={styles.recentContainer}>
              <Text>{recents[2]}</Text>
            </TouchableOpacity>
          ) : null}
          {recents[3] != null ? (
            <TouchableOpacity style={styles.recentContainer}>
              <Text>{recents[3]}</Text>
            </TouchableOpacity>
          ) : null}
          {recents[4] != null ? (
            <TouchableOpacity style={styles.recentContainer}>
              <Text>{recents[4]}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {/* TODO: make seperate emergency call component */}
        {/* <View style={styles.textStyle}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttons}
            onPress={triggerCall}
          >
            <Icon size={38} name="ios-call" style={{ alignSelf: "center" }} />
          </TouchableOpacity>
        </View> */}
        {/* <RouteList /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  modalView: {
    flex: 1,
    alignSelf: "center",
    margin: 20,
    borderRadius: 20,
    width: "95%",
    elevation: 5,
    marginBottom: 150,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttons: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    borderRadius: 50,
    height: 60,
    width: 60,
    margin: 10,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
  },
  tabsText: {
    color: "white",
    fontWeight: "bold",
  },
  tabs: {
    paddingTop: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  recentContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
    route: state.directions,
    directions: state.directions,
    currentLocation: state.currentLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentRoute: (route) => {
      dispatch({ type: "UPDATE_CURRENT_ROUTE", payload: route });
    },
    displayRoute: (bool) => {
      dispatch({ type: "DISPLAY_ROUTE", payload: bool });
    },
    // updateDirections: (destination) => {
    //   dispatch({ type: "UPDATE_DIRECTIONS", payload: destination });
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapModal);
