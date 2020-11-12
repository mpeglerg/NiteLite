import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ModalSearchBar from "./ModalSearchBar";

const MapModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    // backgroundColor: "blue",
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
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
