import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/Fontisto';
import UserIcon from 'react-native-vector-icons/SimpleLineIcons';
import KeyIcon from 'react-native-vector-icons/SimpleLineIcons';
import logo from '../images/Logo1-05.png';
import { Image, StyleSheet, View, Button, Text } from "react-native";
import { verifyLogin } from "../../firebase/firebase.util";
import { color } from "react-native-reanimated";
import {colors} from "../styles/colors.js"


const LogInScreen = ({ navigation }) => {
  const [returningUserName, setReturningUserName] = useState("");
  const [returningUserPassword, setReturningUserPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width:270, height:270}}></Image>

      <View  style={styles.icon}>
        <UserIcon style={styles.logInIcons} size={18} name="user" color="white" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          placeholderTextColor = "#A2A2AB"
          onChangeText={(text) => {
            setReturningUserName(text);
          }}
          value={returningUserName}
        />
      </View>
      <View  style={styles.icon}>
        <KeyIcon style={styles.logInIcons} size={18} name="key" color="white"/>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor = "#A2A2AB"
          onChangeText={(text) => {
            setReturningUserPassword(text);
          }}
          value={returningUserPassword}
        />
      </View>

      <TouchableOpacity
        style={styles.logInButtonContainer}
        onPress={() =>
          verifyCredentials(
            navigation,
            returningUserName,
            returningUserPassword
          )
        }
      >
        <Text style={styles.logInButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText1}>Don't Already Have an Account?</Text>
        <Text style={styles.signUpText2}>Sign Up!</Text>
      </TouchableOpacity>
    </View>
  );
};

async function verifyCredentials(navigation, username, password) {
  username = username.trim();
  password = password.trim();
  if (username === "") {
    alert("Missing username. Please input or sign up if you are a new user.");
    return;
  }
  if (password === "") {
    alert("Missing password. Please input or sign up if you are a new user.");
    return;
  }
  let response = await verifyLogin(username, password)
  console.log("response " +  response);
  if (response == 1){
    // poss set state with username here?
    navigation.navigate("Home");
  } else if (response == 2){
    alert("Username not found. Try again.");
  } else {
    alert("Incorrect password. Try again.");
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      // backgroundColor: '#151965',
      // backgroundColor: '#0f4c75',
      // backgroundColor: '#102849',
      // backgroundColor: '#010068',
      backgroundColor: colors.backgroundColor,
      alignItems: 'center',
      // margin: 5
    },
    icon: {
      flexDirection: 'row',
      borderColor: "#ccc",
      borderBottomWidth: 1,
      margin: 15,
    },
    inputStyle: {
      width: '100%',
      marginBottom: 5,
      paddingBottom: 10,
      alignSelf: "center",
      color: "#fff",
    },
    logInIcons: {
      paddingBottom: 10,
      paddingRight: 10
    },
    logInButtonContainer: {
      elevation: 8,
      backgroundColor: colors.secondaryBlue,
      paddingVertical: 12,
      paddingHorizontal: 110,
      marginTop: 20
    },
    logInButtonText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },  
    signUpText1: {
      marginTop: 15,
      fontSize: 15,
      textAlign: "center",
      textAlignVertical: "center" ,
      color: "#fff",
    },
    signUpText2: {
      paddingTop: 5,
      fontSize: 15,
      textAlign: "center",
      textAlignVertical: "center" ,
      color: "#fff",
    },
  });

export default LogInScreen;
