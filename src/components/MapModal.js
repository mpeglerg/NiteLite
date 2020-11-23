import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalSearchBar from "./ModalSearchBar";
import RouteDirections from "./RouteDirections";
import { ScrollView } from "react-native-gesture-handler";

const MapModal = () => {
  return (
    <View style={styles.centeredView}>
      <ScrollView style={styles.modalView}>
        <ModalSearchBar />
        <View
          style={{
            backgroundColor: "white",
            borderColor: "green",
            borderWidth: 3,
            borderRadius: 50,
            height: 50,
            width: 50,
            padding: 14,
            margin: 10,
          }}>
          <Text>17</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "orange",
            borderWidth: 3,
            borderRadius: 50,
            height: 50,
            width: 50,
            padding: 15,
            margin: 10,
          }}>
          <Text>2</Text>
        </View>
        <RouteDirections />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "blue",
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MapModal;
