import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from 'react-navigation';

// openSignUpScreen = () =>
// {
//    this.props.navigation.navigate('Page2');
// }

const EntryScreen = () => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <View>
      <Text>Log In</Text>
      <Button title="Log In"><Text>Safe locations!!</Text></Button>
      <Button title="Sign Up" onPress = { this.openSignUpScreen }></Button>
    </View>
  );
};

export default EntryScreen;
