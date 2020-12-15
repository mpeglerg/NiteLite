import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import EmailIcon from "react-native-vector-icons/Fontisto";
import UserIcon from "react-native-vector-icons/SimpleLineIcons";
import KeyIcon from "react-native-vector-icons/SimpleLineIcons";
import PhoneIcon from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../styles/colors.js";
import { verifyUsername, verifyPhone, verifyEmail } from "../../firebase/firebase.util.js";

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
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
          objectifyAndNav(
            navigation,
            userName,
            userEmail,
            userPassword,
            userPhoneNumber
          );
        }}
      >
        <View>
          <Text style={styles.ContinueText}>Continue</Text>
          {/* <ArrowIcon style={styles.SignUpIcons} size={18} name="arrow-right" color="white"/> */}
        </View>
      </TouchableOpacity>
    </View>
  );
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
  if(taken){
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
  // add new items to our object
  object.set("name", userName);
  object.set("email", userEmail);
  object.set("password", userPassword);
  object.set("phoneNumber", userPhoneNumber);

  // navigate to next page
  navigation.navigate("SafetyPreferences", { object: object });
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
    borderBottomWidth: 1,
    margin: 15,
  },
  inputStyle: {
    width: "100%",
    marginBottom: 5,
    paddingBottom: 12,
    alignSelf: "center",
    color: "#fff",
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
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 40,

    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
  },
});

export default SignUpScreen;
