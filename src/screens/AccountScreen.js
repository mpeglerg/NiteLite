import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import CheckBox from "../components/CheckBox";
import EmergencyContact from "../components/EmergencyContact";
import SafeSpot from "../components/SafeSpot";

const AccountScreen = (props) => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <ScrollView>
      <Text>Account</Text>
      <Text>User Settings</Text>
      <Text>What makes you feel safe when walking?</Text>
      <View>
        <CheckBox />
        <Text>Open Businesses</Text>
      </View>
      <View>
        <CheckBox />
        <Text>Police Stations</Text>
      </View>
      <View>
        <CheckBox />
        <Text>Busy Sidewalks</Text>
      </View>
      <Text>Safe Spots</Text>
      <TextInput
        style={{
          height: 40,
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"Enter safe spots..."}
        onChangeText={(text) => {
          setSafePlaceInput(text);
        }}
        value={safePlaceInput}
      />
      {props.safeSpots.safeSpots.map((safeSpot) => {
        return (
          <SafeSpot
            props={{
              name: safeSpot.name,
              address: safeSpot.address,
              handleClick: props.deleteSafeSpot,
            }}
          />
        );
      })}
      <Text>Emergency Contacts</Text>
      {/* {console.log("props.emergencyContacts", props.emergencyContacts)} */}
      {props.emergencyContacts.contacts.map((contact) => {
        return (
          <EmergencyContact
            props={{
              name: contact.name,
              number: contact.phoneNumber,
              handleClick: props.deleteEmergencyContact,
            }}
          />
        );
      })}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    emergencyContacts: state.emergencyContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSafeSpot: (id) => {
      dispatch({ type: "DELETE_SAFE_SPOT", id: id });
    },
    deleteEmergencyContact: (contact) => {
      dispatch({ type: "DELETE_EMERGENCY_CONTACT", id: contact });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
