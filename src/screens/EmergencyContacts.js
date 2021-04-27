import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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

// TODO: remove extraneous comments
const EmergencyContacts = ({ navigation }) => {
  let object = navigation.getParam("object", "missing");
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
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.header}>
            Who would you like to call during an Emergency?
          </Text>
          <Text style={styles.subheader}>
            Set up your primary emergency contact now. Add more contacts through
            your Account Preferences page!
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
              objectifyAndNav(navigation, object, name, contactPhone);
            }}>
            <Text style={styles.signUpText}>Complete Profile!</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end", marginTop: 15 }}>
          <Image source={owl2} style={{ width: 160, height: 140 }}></Image>
        </View>
      </View>
    );
  }
};

function objectifyAndNav(navigation, object, name, contactPhone) {
  // add new items to our object
  object.set("eName", name);
  object.set("eNumber", contactPhone);

  // call firebase function to set all of these items in the object
  registerNewUser(object);
  // navigate to next page
  navigation.navigate("Home", { text: object.get("name") });
}
export default EmergencyContacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    textAlign: "center",
    alignItems: "center",
    // paddingBottom: "10%",
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
  subheader: {
    fontSize: 15,
    textAlign: "center",
    // marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 38,
    // marginBottom: 20,
    fontFamily: "Quicksand_600SemiBold",
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 8,
    // textShadowColor: "#F2EB46",
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
    marginTop: 50,
    fontFamily: "Quicksand_700Bold",
  },
});
