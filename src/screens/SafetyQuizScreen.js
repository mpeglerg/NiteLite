import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "../../../components/CheckBox";
const SafetyQuizScreen = () => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <View>
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
      <Text>Enter the addresses of places you consider "Safe Spots"</Text>
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
      <Text>Set up Emergency Contacts</Text>
      <Button title="Complete profile"></Button>
    </View>
  );
};

export default SafetyQuizScreen;
