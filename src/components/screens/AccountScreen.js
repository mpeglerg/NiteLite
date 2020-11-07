import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CheckBox from "../../../components/CheckBox";
import EmergencyContact from "../EmergencyContact";
import SafeSpot from "../SafeSpot";

const AccountScreen = () => {
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
      <SafeSpot props={{ name: "Maya's House" }} />
      <SafeSpot props={{ name: "Campus" }} />
      <Text>Emergency Contacts</Text>
      <EmergencyContact props={{ name: "Lauren" }}></EmergencyContact>
    </ScrollView>
  );
};

export default AccountScreen;
