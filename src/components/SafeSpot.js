import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { connect } from "react-redux";

const SafeSpot = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState("");
  const [newContactName, setNewContactName] = React.useState("");
  return (
    <View style={{ borderWidth: "1px" }}>
      <Icon
        size={30}
        color={"#211f30"}
        name={"check-box" /* find icon name*/}
      />
      <Text>{props.name}</Text>
      <Text>{props.address}</Text>
      <Button title="edit" onPress={() => setModalVisible(!modalVisible)} />
      <Button title="X" onPress={() => props.deleteSafeSpot(props.name)} />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{props.name}</Text>
              <TextInput
                style={{
                  height: 40,
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 15,
                }}
                placeholder={"New contact name"}
                onChangeText={(text) => {
                  setNewContactName(text);
                }}
                value={newContactName}
              />
              <Text>{props.address}</Text>
              <TextInput
                style={{
                  height: 40,
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 15,
                }}
                keyboardType="number-pad"
                placeholder={"New street address"}
                onChangeText={(text) => {
                  setNewPhoneNumber(text);
                  props.performQuery;
                }}
                value={newPhoneNumber}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  props.editSafeSpot({
                    name: "TEST",
                    address: "1 LMU DRIVE???",
                  });
                }}
              >
                <Text style={styles.textStyle}>Save changes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "red" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "60%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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

// const mapStateToProps = () => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSafeSpot: (id) => {
      dispatch({ type: "DELETE_SAFE_SPOT", id: id });
    },
    editSafeSpot: (id) => {
      dispatch({ type: "EDIT_SAFE_SPOT", payload: id });
    },
  };
};

export default connect(null, mapDispatchToProps)(SafeSpot);
