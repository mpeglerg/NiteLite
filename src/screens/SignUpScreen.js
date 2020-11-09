import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { registerNewUser } from '../../firebase/firebase.util';
import { TextInput } from "react-native-gesture-handler";




const SignUpScreen = () => {

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [UserPhoneNumber, setUserPhoneNumber] = useState("");

  return (
    <View>
         <TextInput
        //   style={styles.inputStyle}
          placeholder="UserName"
          onChangeText={(text) => { setUserName(text); }}
          value={UserName}
        /> 
        <TextInput
        //   style={styles.inputStyle}
          placeholder="E-Mail"
          onChangeText={(text) => { setUserEmail(text); }}
          value={UserEmail}
        /> 
        <TextInput
        //   style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => { setUserPassword(text); }}
          value={UserPassword}
        /> 
        <TextInput
        //   style={styles.inputStyle}
          placeholder="Phone Number"
          onChangeText={(text) => { setUserPhoneNumber(text); }}
          value={UserPhoneNumber}
        />  

      <Button title="Next"
         onPress={() => registerNewUser(UserName, UserEmail, UserPassword, UserPhoneNumber)}>
      </Button>

    </View>
  );
};

export default SignUpScreen;
