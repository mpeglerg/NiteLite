import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform, Linking } from "react-native";
import ModalSearchBar from "./ModalSearchBar";
import RouteDirections from "./RouteDirections";
import { ScrollView } from "react-native-gesture-handler";
import {colors} from "../styles/colors.js"
import CallIcon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";

const MapModal = (props) => {
  const [callNumber, setCallNumber] = useState("");

  const triggerCall = () => {
    const formattedNumber = props.emergencyContacts.emergencyContacts[0].number.replace(/-/g, "")

    if(Platform.OS == 'android') {
      setCallNumber(`tel:${formattedNumber}`)
    } else {
      setCallNumber(`telprompt:${formattedNumber}`)
    }
    if(callNumber.length !== 0) {
      Linking.openURL(callNumber)
    }
  }

  // const editProfile = (navigation) => {
  //   // open edit profile page
  //   navigation.navigate("EditProfile");
  // }

  // const openAudios = (navigation) => {
  //   // open audio page
  //   navigation.navigate("Audios");
  // }

  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.modalView}>
        <ModalSearchBar />
        <View style={styles.textStyle}>
          <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttons}
          onPress={triggerCall}>
            <CallIcon size={38} name="md-call" style={{alignSelf: "center"}}/>
            {/* <Text style={styles.buttonText}>Call</Text> */}
          </TouchableOpacity>
          {/* <View style={styles.buttons}>
            <Text style={styles.buttonText}>17</Text>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.buttonText}>2</Text>
          </View> */}
        
          {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttons}
          onPress={editProfile(navigation)}
          title="Edit Profile">
            { <Text style={styles.buttonText}>Edit Profile</Text> }
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttons}
          onPress={openAudios(navigation)}
          title="Audio">
            { <Text style={styles.buttonText}>Audio</Text> }
          </TouchableOpacity> */}

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
    flexDirection: 'row',
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
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "black"
    // fontWeight: "bold"
  }
});

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
  };
};

export default connect(mapStateToProps, null)(MapModal);
