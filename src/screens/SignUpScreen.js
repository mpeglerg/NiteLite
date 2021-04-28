import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  verifyUsername,
  verifyEmail,
  verifyPhone,
} from "../../firebase/firebase.util";
import EmailIcon from "react-native-vector-icons/Fontisto";
import UserIcon from "react-native-vector-icons/SimpleLineIcons";
import KeyIcon from "react-native-vector-icons/SimpleLineIcons";
import PhoneIcon from "react-native-vector-icons/SimpleLineIcons";
import ArrowIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { withOrientation } from "react-navigation";
import { Header } from "react-navigation-stack";
import { colors } from "../styles/colors.js";
import { owl } from "../images/owl2-08.png";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_300Light,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { connect } from "react-redux";

const SignUpScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    CoveredByYourGrace_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.header}>Welcome Owlette!</Text>
          <View style={styles.icon}>
            <UserIcon
              style={styles.SignUpIcons}
              size={18}
              name="user"
              color="white"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="UserName"
              placeholderTextColor="#A2A2AB"
              onChangeText={(text) => {
                setUserName(text);
              }}
              value={userName}
            />
          </View>
          <View style={styles.icon}>
            <EmailIcon
              style={styles.SignUpIcons}
              size={18}
              name="email"
              color="white"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="E-Mail"
              placeholderTextColor="#A2A2AB"
              onChangeText={(text) => {
                setUserEmail(text);
              }}
              value={userEmail}
            />
          </View>
          <View style={styles.icon}>
            <KeyIcon
              style={styles.SignUpIcons}
              size={18}
              name="key"
              color="white"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor="#A2A2AB"
              onChangeText={(text) => {
                setUserPassword(text);
              }}
              value={userPassword}
            />
          </View>
          <View style={styles.icon}>
            <PhoneIcon
              style={styles.SignUpIcons}
              size={18}
              name="phone"
              color="white"
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Phone Number"
              placeholderTextColor="#A2A2AB"
              onChangeText={(text) => {
                setUserPhoneNumber(text);
              }}
              value={userPhoneNumber}
            />
          </View>
          <TouchableOpacity
            style={styles.ContinueContainer}
            onPress={() => {
              {
                props.updateUserName(userName);
                props.updatePassword(userPassword);
                props.updatePhoneNumber(userPhoneNumber);
                props.updateEmail(userEmail);
                objectifyAndNav(
                  props.navigation,
                  userName,
                  userEmail,
                  userPassword,
                  userPhoneNumber
                );
              }
            }}
          >
            <View>
              <Text style={styles.ContinueText}>Continue</Text>
              {/* <ArrowIcon style={styles.SignUpIcons} size={18} name="arrow-right" color="white"/> */}
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
};

async function objectifyAndNav(
  navigation,
  userName,
  userEmail,
  userPassword,
  userPhoneNumber
) {
  if (
    userName.charAt(0) === " " ||
    userName.charAt(userName.length - 1) === " "
  ) {
    alert("Username cannot start or end with a space.");
    return;
  }
  if (
    userPassword.charAt(0) === " " ||
    userPassword.charAt(userPassword.length - 1) === " "
  ) {
    alert("Password cannot start or end with a space.");
    return;
  }
  if (!isStrongPassword(userPassword)) {
    alert(
      "Password is not strong enough. Must include one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
    );
    return;
  }
  var taken = await verifyUsername(userName);
  if (taken) {
    alert("Username already in use. Choose another username.");
    return;
  }
  var emailUsername = await verifyEmail(userEmail);
  var phoneUsername = await verifyPhone(userPhoneNumber);
  if (emailUsername !== "") {
    alert("Email in use. Log in using username: " + emailUsername);
    return;
  }
  if (phoneUsername !== "") {
    alert("Phone number in use. Log in using username: " + phoneUsername);
    return;
  }

  var object = new Map();

  object.set("name", userName);
  object.set("email", userEmail);
  object.set("password", userPassword);
  object.set("phoneNumber", userPhoneNumber);

  navigation.navigate("Safety Preferences", { object: object });
}

function isStrongPassword(password) {
  var hasUpper = false;
  var hasLower = false;
  var hasNumber = false;
  if (password.length < 8) {
    return false;
  }
  for (var i = 0; i < password.length; i++) {
    var char = password.substring(i, i + 1);
    if (!hasLower && char.toUpperCase() !== char) {
      hasLower = true;
    }
    if (!hasUpper && char.toLowerCase() !== char) {
      hasUpper = true;
    }
    if (!hasNumber && char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }
  return hasUpper && hasLower && hasNumber;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 35,
    paddingHorizontal: 35,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  icon: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderBottomWidth: 2,
    margin: 15,
  },
  inputStyle: {
    width: "100%",
    marginBottom: 5,
    paddingBottom: 12,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Nunito_300Light",
  },
  SignUpIcons: {
    paddingBottom: 10,
    paddingRight: 10,
  },
  ContinueContainer: {
    elevation: 8,
    backgroundColor: colors.secondaryBlue,
    paddingVertical: 10,
    paddingHorizontal: 110,
    marginTop: 20,
  },
  ContinueText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Quicksand_700Bold",
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 40,
    fontFamily: "Quicksand_600SemiBold",
    color: "#F0F2D6",
    opacity: 0.9,
    textShadowColor: "#F2EA45",
    textShadowOffset: { width: 1.5, height: 1 },
    textShadowRadius: 12,
    alignSelf: "center",
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
    updateEmail: (id) => {
      console.log("CALLED", id);
      dispatch({ type: "UPDATE_EMAIL", payload: id });
    },
    updatePhoneNumber: (id) => {
      console.log("CALLED", id);
      dispatch({ type: "UPDATE_PHONE_NUMBER", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
