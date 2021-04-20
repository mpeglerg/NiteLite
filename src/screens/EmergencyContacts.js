import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { registerNewUser } from "../../firebase/firebase.util";
import EmergencyContact from "../components/EmergencyContact";
import {colors} from "../styles/colors.js"
import { connect } from "react-redux";
import {AppLoading} from "expo"
import { 
  useFonts,
  Nunito_600SemiBold,
  Nunito_400Regular,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'
import { 
  CoveredByYourGrace_400Regular 
} from '@expo-google-fonts/covered-by-your-grace'
import { 
  // Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold 
} from '@expo-google-fonts/quicksand'

const EmergencyContacts = ({ navigation }) => {
  // pull out props from navigation?
  // maybe print this out, idk what the props are
  // let props = navigation[0];
  // navigation = 
  let props = navigation.getParam("props", "missing");
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
      <Text style={styles.header}>
        Who you would like to call during an Emergency?
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
          color: "white"
        }}
        placeholder={"Police, Mom, Roommate..."}
        placeholderTextColor = "#A2A2AB"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
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
          color: "white"
        }}
        placeholder={"123-456-7890"}
        placeholderTextColor = "#A2A2AB"
        onChangeText={(text) => {
          setContactPhone(text);
        }}
        value={contactPhone}
      />
       {props.emergencyContacts.contacts.map((contact) => {
        return (
          <EmergencyContact
            props={{
              name: contact.name,
              number: contact.phoneNumber,
              deleteEmergencyContact: props.deleteEmergencyContact,
              editEmergencyContact: props.editEmergencyContact,
            }}
          />
        );
      })}
      {/* <Button
        title="Complete Profile"
        
      ></Button> */}

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          objectifyAndNav(navigation, props, name, contactPhone);
        }}
      >
        <Text style={styles.signUpText}>Complete Profile!</Text>
      </TouchableOpacity>
    </View>
  );
  }
};

function objectifyAndNav(navigation, props, name, contactPhone) {
  // add new items to our object
  props.set("eName", name);
  props.set("eNumber", contactPhone);

  // call firebase function to set all of these items in the object
  registerNewUser(props);
  // navigate to next page
  navigation.navigate("Home", { text: props.get("name") });
}

const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmergencyContact: (contact) => {
      dispatch({ type: "DELETE_EMERGENCY_CONTACT", id: contact });
    },
    editEmergencyContact: (id) => {
      dispatch({ type: "EDIT_EMERGENCY_CONTACT", payload: id });
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
    fontSize:25,
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
    paddingVertical:8,
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
    fontFamily:"Quicksand_700Bold"
  }
});
