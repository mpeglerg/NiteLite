import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalSearchBar from "./ModalSearchBar";
import RouteDirections from "./RouteDirections";
import { ScrollView } from "react-native-gesture-handler";
import {colors} from "../styles/colors.js"

const MapModal = () => {
  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.modalView}>
        <ModalSearchBar />
        <View style={styles.textStyle}>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>17</Text>
        </View>
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>2</Text>
        </View>
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
    // fontWeight: "bold"
  }
});

export default MapModal;
