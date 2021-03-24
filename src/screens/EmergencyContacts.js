import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AppLoading } from "expo";
import { CoveredByYourGrace_400Regular } from "@expo-google-fonts/covered-by-your-grace";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../styles/colors.js";
import { registerNewUser } from "../../firebase/firebase.util";

// TODO: remove extraneous comments
const EmergencyContacts = ({ navigation }) => {
  // [Ian]: I would recommend updating to React Navigation 5.x.x so you can use Hooks and
  //        reduce the ability to run into any deprecating errors.
  let object = navigation.getParam("object", "missing");
  const [name, setName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  // [Ian]: I'm not well versed in this package, but if you find yourself setting fonts
  //        and waiting for loading in your component, I would recommend maybe rendering
  //        it at the top level with your App.js (if possible).
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
        <Text style={styles.header}>
          Who would you like to call during an Emergency?
          {/* TODO: change wording */}
        </Text>
        <Text style={styles.taskText}>Name</Text>
        <TextInput
          // [Ian]: I would try and keep your styling consistent, and add it to
          //        your Stylesheet.
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
          placeholder={"Police, Mom, Roommate..."}
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
        {/* <Button
        title="Complete Profile"
        
      ></Button> */}

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            objectifyAndNav(navigation, object, name, contactPhone);
          }}
        >
          <Text style={styles.signUpText}>Complete Profile!</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

// [Ian]: This function should be moved above the `return` to keep with React convention.
// [Ian]: I would also change the name of the function as it is a bit confusing.
function objectifyAndNav(navigation, object, name, contactPhone) {
  // add new items to our object
  // [Ian]: I would also try to use something more verbose and explicit instead of `object`.
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
    fontSize: 16,
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
    marginTop: 80,
    fontFamily: "Quicksand_700Bold",
  },
});
