import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Linking,
  Share,
} from "react-native";
import ModalSearchBar from "./ModalSearchBar";
// import RouteDirections from "./RouteDirections";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../styles/colors.js";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

const MapModal = (props) => {
  const [callNumber, setCallNumber] = useState("");
  // TODO: implement try catch, to account for when a call is unable to be made
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "View my NiteLite walking route:",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.centeredView}>
      {/* TODO: ScrollView is not accounting for the keyboard covering the textboxes upon user input. Need to import built-in React Native Keyboard component instead so screen adjusts accordingly */}
      <ScrollView style={styles.modalView}>
        <ModalSearchBar />
        <View style={styles.textStyle}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttons}
            onPress={triggerCall}
          >
            <Icon size={38} name="ios-call" style={{ alignSelf: "center" }} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttons}
            onPress={onShare}
          >
            <Icon size={38} name="ios-share" style={{ alignSelf: "center" }} />
          </TouchableOpacity>
          {/* <View style={styles.buttons}>
            <Text style={styles.buttonText}>17</Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>2</Text>
          </View> */}
        </View>
        {/* <RouteDirections /> */}
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
    margin: 20,
    // backgroundColor: "blue",
    borderRadius: 20,
    width: "100%",
    elevation: 5,
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
    // fontWeight: "bold"
  },
});

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
  };
};

export default connect(mapStateToProps, null)(MapModal);
