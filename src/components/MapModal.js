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
        <View style={styles.textStyle}>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "#30C5F4",
            borderWidth: 3,
            borderRadius: 50,
            height: 60,
            width: 60,
            padding: 14,
            margin: 10,
          }}>
          <Text>17</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "#30C5F4",
            borderWidth: 3,
            borderRadius: 50,
            height: 60,
            width: 60,
            padding: 14,
            margin: 10,
          }}>
          <Text>2</Text>
        </View>
<<<<<<< HEAD
        </View>
      </View>
=======
        <RouteDirections />
      </ScrollView>
>>>>>>> 8d7893027d68b784669b141308951aaa0812d136
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
<<<<<<< HEAD
    textAlign: "center",
=======
>>>>>>> 8d7893027d68b784669b141308951aaa0812d136
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
});

export default MapModal;
