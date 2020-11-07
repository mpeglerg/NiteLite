import React from "react";
import { View, Text, Button } from "react-native";

const EmergencyContact = ({ props }) => {
  return (
    <View style={{ borderWidth: "1px" }}>
      <Text>{props.name}</Text>
      <Button title="edit" />
      <Button title="X" />
    </View>
  );
};

export default EmergencyContact;
