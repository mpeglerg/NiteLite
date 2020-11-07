import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { View, Text, Button } from "react-native";

const SafeSpot = ({ props }) => {
  return (
    <View style={{ borderWidth: "1px" }}>
      <Icon
        size={30}
        color={"#211f30"}
        name={"check-box" /* find icon name*/}
      />
      <Text>{props.name}</Text>
      <Button title="edit" />
      <Button title="X" />
      <Text>{props.address}</Text>
      <Button title="edit" />
      <Button title="X" />
    </View>
  );
};

export default SafeSpot;
