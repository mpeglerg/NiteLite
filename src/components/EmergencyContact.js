import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

const EmergencyContact = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState("");
  const [newContactName, setNewContactName] = React.useState("");

  return (
    <View style={{ borderWidth: "1px" }}>
      <Text>{props.name}</Text>
      <Text>{props.number}</Text>
      <Button
        title="edit"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <Button
        title="X"
        onPress={() =>
          props.deleteEmergencyContact({
            name: props.name,
            number: props.number,
          })
        }
      />
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
              <Text>{props.number}</Text>
              <TextInput
                style={{
                  height: 40,
                  width: "90%",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 15,
                }}
                keyboardType="number-pad"
                placeholder={"New phone number"}
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
                  props.editEmergencyContact({
                    name: newContactName,
                    number: newPhoneNumber,
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
const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmergencyContact: (contact) => {
      dispatch({ type: "DELETE_EMERGENCY_CONTACT", id: contact });
    },
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContact);
