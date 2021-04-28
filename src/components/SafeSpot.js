import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import { AppLoading } from "expo";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { colors } from "../styles/colors.js";
import { connect } from "react-redux";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { deleteSafeSpot, editSafeSpot } from "../../firebase/firebase.util.js";

const SafeSpot = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState("");
  const [newContactName, setNewContactName] = React.useState("");
  let [fontsLoaded] = useFonts({
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          borderWidth: "1px",
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 15,
        }}>
        <Text style={styles.infoTextName}>{props.name}</Text>
        <Text style={styles.infoTextAddress}>{props.address}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => {
              props.deleteSafeSpot(props.name);
              console.log("PASSED TO DELETED SAFE SPOT", {
                name: props.name,
                address: props.address,
                username: props.username,
              });
              deleteSafeSpot(props.user, {
                name: props.name,
                address: props.address,
              });
            }}>
            <Text>Delete</Text>
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
                <Text style={styles.modalText}>Current Name: {props.name}</Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "90%",
                    backgroundColor: "white",
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                    marginBottom: 30,
                  }}
                  placeholder={"Enter contact name"}
                  onChangeText={(text) => {
                    setNewContactName(text);
                  }}
                  value={newContactName}
                />
                {/* TODO: Create a styles.textInput below (Line 101) and replace with style={{styles.textInput}} */}
                <Text style={styles.modalText}>
                  Current Address: {props.address}
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    width: "90%",
                    backgroundColor: "white",
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                    marginBottom: 30,
                  }}
                  keyboardType="name-phone-pad"
                  placeholder={"Enter street address"}
                  onChangeText={(text) => {
                    setNewPhoneNumber(text);
                    props.performQuery;
                  }}
                  value={newPhoneNumber}
                  autoCompleteType="street-address"
                />
                {/* TODO: Same as above */}
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#30C5F4" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    props.editSafeSpot({
                      name: newContactName,
                      address: newPhoneNumber,
                      oldName: props.name,
                    });
                    editSafeSpot(
                      props.user,
                      { name: props.name, address: props.address },
                      { name: newContactName, address: newPhoneNumber }
                    );
                  }}>
                  <Text style={styles.textStyle}>Save Changes</Text>
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
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 2,
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
    fontFamily: "Quicksand_700Bold",
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
  infoTextAddress: {
    fontSize: 16,
    padding: 4,
    fontFamily: "Quicksand_600SemiBold",
    marginLeft: 15,
    marginBottom: 10,
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
