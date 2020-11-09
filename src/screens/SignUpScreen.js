import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { registerNewUser } from '../../firebase/firebase.util';
import { TextInput } from "react-native-gesture-handler";


const SignUpScreen = () => {

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [UserPhoneNumber, setUserPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
         <TextInput
          style={styles.inputStyle}
          placeholder="UserName"
          onChangeText={(text) => { setUserName(text); }}
          value={UserName}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="E-Mail"
          onChangeText={(text) => { setUserEmail(text); }}
          value={UserEmail}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => { setUserPassword(text); }}
          value={UserPassword}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone Number"
          onChangeText={(text) => { setUserPhoneNumber(text); }}
          value={UserPhoneNumber}
        />  

        <Button title="Continue" onPress={ () => 
        {registerNewUser(UserName, UserEmail, UserPassword, UserPhoneNumber);
        navigation.navigate('Page2', { phoneNumber: UserPhoneNumber })}}>
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
  });

export default SignUpScreen;
