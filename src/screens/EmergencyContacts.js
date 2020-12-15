import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { registerNewUser } from "../../firebase/firebase.util";
import { colors } from "../styles/colors.js";

const EmergencyContacts = ({ navigation }) => {
  let object = navigation.getParam("object", "missing");
  const [name, setName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Who you would like to call during an Emergency?
      </Text>
      <Text style={styles.taskText}>Name</Text>
      <TextInput
        style={{
          height: 40,
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"Police, Mom, Roommate..."}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <Text style={styles.taskText}>Phone number</Text>
      <TextInput
        style={{
          height: 40,
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"123-456-7890"}
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
  },
  header: {
    fontSize: 22,
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 34,
    marginBottom: 20,

    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    textShadowColor: "#F2EB46",
  },
  taskText: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    // textAlign: "left",
    lineHeight: 24,
    marginTop: 15,
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
    backgroundColor: "#072DC2",
    paddingVertical: 15,
    paddingHorizontal: 90,
    marginTop: 80,
  },
});
