import React from "react";
import { View, Button } from "react-native";

const LogOutButton = ({ props }) => {
  return (
    <View>
      <Button title="Log Out" onPress={() => props.navigate("Log In")}></Button>
    </View>
  );
};

export default LogOutButton;
