import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from 'react-navigation';
// import { TextInput } from "react-native-gesture-handler";

// log in and sign up button page

openSignUpScreen = () =>
{
   this.props.navigation.navigate('Second');
   
}

const EntryScreen = () => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <View>
      <Text>Log In</Text>
      <Button title="Log In"></Button>
      <Text>Sign Up</Text>
      <Button title="Sign Up" onPress = { this.openSignUpScreen } ></Button>
    </View>
  );
};

export default EntryScreen;
