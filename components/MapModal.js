import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { getDirections, getWalkScore } from "../data/api-placeholder";
import ModalSearchBar from "./ModalSearchBar";

const MapModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Click to Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Click to Open</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginTop: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 110,
    // margin: 0,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
