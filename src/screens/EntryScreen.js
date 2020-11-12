import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from 'react-navigation';

// openSignUpScreen = () =>
// {
//    this.props.navigation.navigate('Second');
// }

const EntryScreen = ({navigation}) => {
  const [safePlaceInput, setSafePlaceInput] = useState("");
  return (
    <View>
      <Text>Log In</Text>
      <Button title="Log In"></Button>
      <Text>Sign Up</Text> 
      <Button title="Sign Up" onPress={ () => navigation.navigate('Page1')}></Button>
    </View>
  );
};

export default EntryScreen;