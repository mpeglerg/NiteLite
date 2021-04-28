import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { registerNewUser } from "../../firebase/firebase.util";
import { colors } from "../styles/colors.js";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_400Regular,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import {
  // Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import owl1 from "./../images/owl1.png";
import owl2 from "./../images/owl2.png";
import { connect } from "react-redux";

// TODO: remove extraneous comments
const EmergencyContacts = (props) => {
  let object = props.navigation.getParam("object", "missing");
  const [name, setName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    CoveredByYourGrace_400Regular,
    Nunito_800ExtraBold,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
    Quicksand_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Who would you like to call during an Emergency?
        </Text>
        <Text style={styles.subtitle}>
          Set up your primary contact now and add more later in your account
          settings
        </Text>
        <Text style={styles.taskText}>Name</Text>
        <TextInput
          style={{
            height: 40,
            width: "75%",
            // backgroundColor: "white",
            // borderRadius: 5,
            borderBottomColor: "white",
            borderBottomWidth: 2,
            // padding: 15,
            color: "white",
          }}
          placeholder={"Police, Campus Security, Roommate..."}
          placeholderTextColor="#A2A2AB"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        {/* TODO: Create style objects for text inputs instead of repeating them for each TextInput object */}
        <Text style={styles.taskText}>Phone number</Text>
        <TextInput
          style={{
            height: 40,
            width: "75%",
            // backgroundColor: "white",
            // borderRadius: 5,
            borderBottomColor: "white",
            borderBottomWidth: 2,
            // padding: 15,
            color: "white",
          }}
          placeholder={"123-456-7890"}
          placeholderTextColor="#A2A2AB"
          onChangeText={(text) => {
            setContactPhone(text);
          }}
          value={contactPhone}
        />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            props.addEmergencyContact({ name: name, number: contactPhone });
            console.log("NEW USER INFO", {
              ...props.user,
              emergencyNumber: props.emergencyContacts.emergencyContacts,
              safeSpots: props.safeSpots.safeSpots,
            });
            registerNewUser({
              ...props.user,
              emergencyNumber: props.emergencyContacts.emergencyContacts,
              safeSpots: props.safeSpots.safeSpots,
            });
            props.navigation.navigate("Home");
          }}>
          <Text style={styles.signUpText}>Complete Profile!</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "flex-end", marginTop: 20 }}>
          <Image source={owl2} style={{ width: 160, height: 140 }}></Image>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
    user: state.emergencyContacts.user,
    safeSpots: state.safeSpots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmergencyContact: (name, number) => {
      dispatch({ type: "ADD_EMERGENCY_CONTACT", id: { name, number } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyContacts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 38,
    marginBottom: 20,
    fontFamily: "Quicksand_600SemiBold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
  },
  taskText: {
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontFamily: "Quicksand_400Regular",
    // fontFamily: "Nunito_400Regular",
    // fontFamily: "Quicksand_500Medium",
    // lineHeight: 24,
    marginTop: 24,
    color: "#fff",
  },
  signUpText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
  signUpButton: {
    elevation: 8,
    backgroundColor: colors.secondaryBlue,
    paddingVertical: 15,
    paddingHorizontal: 90,
    marginTop: 40,
    fontFamily: "Quicksand_700Bold",
  },
  subtitle: {
    color: "white",
    fontFamily: "Quicksand_500Medium",
    textAlign: "center",
    paddingHorizontal: 34,
    marginTop: -13,
  },
});
