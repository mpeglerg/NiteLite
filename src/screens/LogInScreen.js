import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import UserIcon from "react-native-vector-icons/SimpleLineIcons";
import KeyIcon from "react-native-vector-icons/SimpleLineIcons";
import logo from "../images/logo.png";
import {
  Image,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { verifyLogin } from "../../firebase/firebase.util";
// import { color } from "react-native-reanimated";
import { colors } from "../styles/colors.js";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { connect } from "react-redux";

const LogInScreen = (props) => {
  const [returningUserName, setReturningUserName] = useState("");
  const [returningUserPassword, setReturningUserPassword] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 270, height: 270 }}></Image>
        <View style={styles.icon}>
          <UserIcon
            style={styles.logInIcons}
            size={18}
            name="user"
            color="white"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            placeholderTextColor="#A2A2AB"
            onChangeText={(text) => {
              setReturningUserName(text);
            }}
            value={returningUserName}
          />
        </View>
        <View style={styles.icon}>
          <KeyIcon
            style={styles.logInIcons}
            size={18}
            name="key"
            color="white"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="#A2A2AB"
            onChangeText={(text) => {
              setReturningUserPassword(text);
            }}
            value={returningUserPassword}
          />
        </View>

        <TouchableOpacity
          style={styles.logInButtonContainer}
          onPress={() => {
            verifyCredentials(
              props.navigation,
              props.updateUserName,
              props.updatePassword,
              returningUserName,
              returningUserPassword
            );
          }}>
          <Text style={styles.logInButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Sign Up")}>
          <Text style={styles.signUpText1}>Don't Already Have an Account?</Text>
          <Text style={styles.signUpText2}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

async function verifyCredentials(
  navigation,
  updateUserName,
  updatePassword,
  username,
  password
) {
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
  let response = await verifyLogin(username, password);
  if (response == 1) {
    updateUserName(username);
    updatePassword(password);
    navigation.navigate("Home");
  } else if (response == 2) {
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
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    margin: 15,
  },
  inputStyle: {
    width: "100%",
    marginBottom: 5,
    paddingBottom: 10,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Nunito_300Light",
  },
  logInIcons: {
    paddingBottom: 10,
    paddingRight: 10,
  },
  logInButtonContainer: {
    elevation: 8,
    backgroundColor: colors.secondaryBlue,
    paddingVertical: 10,
    paddingHorizontal: 110,
    marginTop: 20,
  },
  logInButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "Nunito_800ExtraBold",
  },
  signUpText1: {
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontFamily: "Nunito_400Regular",
  },
  signUpText2: {
    paddingTop: 2,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontFamily: "Nunito_400Regular",
  },
});

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (id) => {
      console.log("CALLED", id);
      dispatch({ type: "UPDATE_USERNAME", payload: id });
    },
    updatePassword: (id) => {
      dispatch({ type: "UPDATE_PASSWORD", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
