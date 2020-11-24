import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Fontisto';
import KeyIcon from 'react-native-vector-icons/SimpleLineIcons';
import logo from '../images/NiteLiteLogo.png';
import { Image, StyleSheet, View, Button, Text } from "react-native";
import { verifyLogin } from "../../firebase/firebase.util";

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
        <Icon style={styles.logInIcons} size={18} name="email" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          onChangeText={(text) => {
            setReturningUserName(text);
          }}
          value={returningUserName}
        />
      </View>
      <View  style={styles.icon}>
        <KeyIcon style={styles.logInIcons} size={18} name="key" />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => {
            setReturningUserPassword(text);
          }}
          value={returningUserPassword}
        />
      </View>
      <Button
        title="Log In"
        onPress={() =>
          verifyCredentials(
            navigation,
            returningUserName,
            returningUserPassword
          )
        }
      ></Button>

      <Button
        title="Don't Already Have an Account? Sign Up!"
        onPress={() => navigation.navigate("Page1")}
      ></Button>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 5
    },
    icon: {
      flexDirection: 'row',
      borderColor: "#ccc",
      borderBottomWidth: 1,
      margin: 15
    },
    inputStyle: {
      width: '100%',
      marginBottom: 5,
      paddingBottom: 15,
      alignSelf: "center",
    },
    logInIcons: {
      paddingBottom: 10,
      paddingRight: 10
    },
    button: {
      fontSize: 12
    }
  });
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 35,
//     backgroundColor: "#fff",
//   },
//   inputStyle: {
//     width: "100%",
//     marginBottom: 15,
//     paddingBottom: 15,
//     alignSelf: "center",
//     borderColor: "#ccc",
//     borderBottomWidth: 1,
//   },
// });

export default LogInScreen;
