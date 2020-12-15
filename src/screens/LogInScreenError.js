import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { verifyLogin } from "../../firebase/firebase.util";

const LogInScreenError = ({ navigation }) => {
  const [returningUserName, setReturningUserName] = useState("");
  const [returningUserPassword, setReturningUserPassword] = useState("");
  let textFromError = navigation.getParam("text", "");

  return (
    <View style={styles.container}>
      <Text>{textFromError}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Username"
        onChangeText={(text) => {
          setReturningUserName(text);
        }}
        value={returningUserName}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        onChangeText={(text) => {
          setReturningUserPassword(text);
        }}
        value={returningUserPassword}
      />
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
        onPress={() => navigation.navigate("SignUp")}
      ></Button>
    </View>
  );
};

function verifyCredentials(navigation, username, password) {
  console.log("THIS IS THE PASSWORD", password);
  let outputVal = verifyLogin(username, password);
  // sleep(3000);
  console.log("output val ", outputVal);

  // toss an error if missing password
  if (username === "") {
    // "Missing username. Please input or sign up if you are a new user."
    // return and start over
    navigation.navigate("LogIn", {
      text: "Missing username. Please input or sign up if you are a new user.",
    });
  } else if (password === "") {
    // "Missing password. Please input or sign up if you are a new user."
    // return and start over
    navigation.navigate("LogIn", {
      text: "Missing password. Please input or sign up if you are a new user.",
    });
  } else if (outputVal == 0) {
    // "Incorrect password. Try again"
    navigation.navigate("LogIn", { text: "Incorrect password. Try again." });
  } else if (outputVal == 1) {
    // "Username not found. Try again."
    navigation.navigate("LogIn", { text: "Username not found. Try again." });
  } else {
    // output val == 2
    // works, sign in and nav to home page
    navigation.navigate("Home", { text: object.get("name") });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default LogInScreenError;
