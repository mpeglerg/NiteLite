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
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { editEmergencyContact } from "../../firebase/firebase.util";

const EmergencyContact = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState("");
  const [newContactName, setNewContactName] = React.useState("");

  return (
    <View
      style={{
        borderWidth: "1px",
        marginBottom: 15,
        backgroundColor: "white",
        borderRadius: 15,
      }}>
      <Text style={styles.infoTextName}>{props.name}</Text>
      <Text style={styles.infoTextNumber}>{props.number}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{props.name}</Text>
              <TextInput
                style={{
                  height: 40,
                  width: "90%",
                  backgroundColor: "white",
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                  marginBottom: 30,
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
                  borderBottomColor: "black",
                  borderBottomWidth: 2,
                  marginBottom: 30,
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
                style={{ ...styles.openButton, backgroundColor: "#30C5F4" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  editEmergencyContact(
                    props.user,
                    {
                      name: props.name,
                      number: props.number,
                    },
                    {
                      name: newContactName,
                      number: newPhoneNumber,
                    }
                  );
                  props.editEmergencyContact({
                    name: newContactName,
                    number: newPhoneNumber,
                    oldName: props.name,
                  });
                }}>
                <Text style={styles.textStyle}>Save changes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "red" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
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
    width: "90%",
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
    padding: 13,
    elevation: 2,
    marginVertical: 8,
    fontSize: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Quicksand_700Bold",
    fontSize: 16,
  },
  editBtn: {
    borderRadius: 40,
    backgroundColor: "#30C5F4",
    color: "white",
    padding: 12,
    width: 80,
    alignItems: "center",
    fontSize: 16,
    marginLeft: 15,
  },
  cancelBtn: {
    borderRadius: 40,
    backgroundColor: "#F94545",
    color: "white",
    padding: 12,
    width: 100,
    alignItems: "center",
    fontSize: 16,
    marginLeft: 15,
  },
  infoTextName: {
    fontSize: 16,
    padding: 4,
    fontFamily: "Quicksand_700Bold",
    marginLeft: 15,
    marginTop: 10,
  },
  infoTextNumber: {
    fontSize: 16,
    padding: 4,
    fontFamily: "Quicksand_600SemiBold",
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContact);
