import React from "react";
import { View, Button } from "react-native";

const AudioButton = ({ props }) => {
  return (
    <View>
      {/* <Button title="Log Out" onPresss={() => props.navigate("Log In")}></Button> */}
      <Button title="Sounds"></Button>
    </View>
  );
};

export default AudioButton;
