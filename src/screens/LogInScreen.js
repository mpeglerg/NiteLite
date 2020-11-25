import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/Fontisto';
import UserIcon from 'react-native-vector-icons/SimpleLineIcons';
import KeyIcon from 'react-native-vector-icons/SimpleLineIcons';
import logo from '../images/NiteLiteLogo.png';
import { Image, StyleSheet, View, Button, Text } from "react-native";
import { verifyLogin } from "../../firebase/firebase.util";
import { color } from "react-native-reanimated";


let textFromError;

const LogInScreen = ({ navigation }) => {
  const [returningUserName, setReturningUserName] = useState("");
  const [returningUserPassword, setReturningUserPassword] = useState("");
  // let textFromError = navigation.getParam('text','');
  // console.log("this is the text from error");
  // console.log(textFromError);

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width:250, height:250}}></Image>

      <Text>{textFromError}</Text>
      <View  style={styles.icon}>
        <UserIcon style={styles.logInIcons} size={18} name="user" color="white" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          placeholderTextColor = "#fff"
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
          placeholderTextColor = "#fff"
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

      <TouchableOpacity onPress={() => navigation.navigate("Page1")}>
        <Text style={styles.signUpText1}>Don't Already Have an Account?</Text>
        <Text style={styles.signUpText2}>Sign Up!</Text>
      </TouchableOpacity>
    </View>
  );
};

async function verifyCredentials(navigation, username, password) {
  // console.log("THIS IS THE PASSWORD", password);
  // let outputVal = await verifyLogin(username, password);
  if (username === "") {
    // "Missing username. Please input or sign up if you are a new user."
    // return and start over
    navigation.navigate("Page5", {
      text: "Missing username. Please input or sign up if you are a new user.",
    });
  }
  if (password === "") {
    // "Missing password. Please input or sign up if you are a new user."
    // return and start over
    navigation.navigate("Page5", {
      text: "Missing password. Please input or sign up if you are a new user.",
    });
  }

  let response = await verifyLogin(username, password); //.then(function (response) {
  if (response == 0) {
    // "Incorrect password. Try again"
    navigation.navigate("Page5", { text: "Incorrect password. Try again." });
  } else if (response == 1) {
    // "Username not found. Try again."
    navigation.navigate("Page5", { text: "Username not found. Try again." });
  } else {
    // response == 2
    // works, sign in and nav to home page
    navigation.navigate("Page4", { text: username });
  }
  // })
  // .catch(function (response) {
  //   console.log("something went wrong", response);
  // });
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#151965',
      backgroundColor: '#0f4c75',
      backgroundColor: '#102849',
      backgroundColor: '#010068',
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
      backgroundColor: "#072DC2",
      // backgroundColor: "#0066E7",
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
