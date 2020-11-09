import React, { useState } from "react";
import { Text, View, Button } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

const LogInScreen = () => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <View>
      <Text>Email</Text>
      <Button title="LogIn Email"></Button>

      <Text>Password</Text>
      <Button title="LogIn Password"></Button>
    </View>
  );
};

export default LogInScreen;
