import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const SignUpScreen = ({navigation}) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
         <TextInput
          style={styles.inputStyle}
          placeholder="UserName"
          onChangeText={(text) => { setUserName(text); }}
          value={userName}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="E-Mail"
          onChangeText={(text) => { setUserEmail(text); }}
          value={userEmail}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => { setUserPassword(text); }}
          value={userPassword}
        /> 
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone Number"
          onChangeText={(text) => { setUserPhoneNumber(text); }}
          value={userPhoneNumber}
        />  
        <Button title="Continue" onPress={ () => 
        {objectifyAndNav(navigation, userName, userEmail, userPassword, userPhoneNumber);}}>
        </Button>
    </View>
  );
};

function objectifyAndNav(navigation, userName, userEmail, userPassword, userPhoneNumber){
  let object = new Map();
  // add new items to our object
  object.set("name", userName);
  object.set("email", userEmail);
  object.set("password", userPassword);
  object.set("phoneNumber", userPhoneNumber);

  // navigate to next page
  navigation.navigate('Page2', {object: object});

}

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
  });

export default SignUpScreen;
