import React, { useState } from "react";
import { StyleSheet, View, Button, Text,TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { verifyLogin } from "../../firebase/firebase.util";
import CheckBox from "../components/CheckBox";
import {colors} from "../styles/colors.js"


const EditProfileScreen = ({ navigation }) => {
  const [returningUserName, setReturningUserName] = useState("curr_username");
  const [returningUserPassword, setReturningUserPassword] = useState("curr_password");
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState("");
  const [policeStations, setPoliceStations] = useState("");
  const [busySidewalks, setBusySidewalks] = useState("");
  const [name, setName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  /*
   - populate username with username, option to change?
   - password is like ., have a button to click to view the password/update
   - checkboxes populated with preferences, same with safe spots and emergency contact
   - figure out correct styles
   - keep an object, update it with the new traits and write to firebase
   - currently not attached to any account, mock data 
  */

  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <Text>UserName</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => {
          setReturningUserName(text);
        }}
        value={returningUserName}
      />
       <Text>Password</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => {
          setReturningUserPassword(text);
        }}
        value={returningUserPassword}
      />
      
      {/* <Text>Account</Text> */}
      <Text style={styles.header}>Route Preferences</Text>
      <View style={styles.check}>
        <CheckBox
          onChange={(e) => {
            setOpenBusinesses(e);
          }}
          value={openBusinesses}
        />
        <Text style={styles.checkOptions}>Open Businesses</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          onChange={(e) => {
            setPoliceStations(e);
          }}
          value={policeStations}
        />
        <Text style={styles.checkOptions}>Police Stations</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          onChange={(e) => {
            setBusySidewalks(e);
          }}
          value={busySidewalks}
        />
        <Text style={styles.checkOptions}>Busy Sidewalks</Text>
      </View>

      <Text style={styles.taskText}>
        Safe Spots
      </Text>
      <TextInput
        style={{
          height: 40,
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"Enter safe spots..."}
        onChangeText={(text) => {
          setSafePlaceInput(text);
        }}
        value={safePlaceInput}
      />

      <Text style={styles.header}>
        Emergency Contact:
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
      <TouchableOpacity style={styles.signUpButton} onPress={() => {
          objectifyAndNav(navigation, object, name, contactPhone);
        }}>
        <Text style={styles.signUpText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

function verifyCredentials(navigation, username, password) {
  return;
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   padding: 35,
  //   backgroundColor: "#fff",
  // },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: colors.backgroundColor,
  //     textAlign: "center",
  //     alignItems: "center",
  //   },
  //   header: {
  //     fontSize: 22,
  //     padding: 10,
  //     textAlign: "center",
  //     marginTop: 20,
  //     marginHorizontal: 18,
  //     color: "#fff",
  //     fontWeight: "bold",
  //     lineHeight: 34,
  //     marginBottom: 20,
  
  //     textShadowOffset: { width: 2, height: 2 },
  //     textShadowRadius: 8,
  //     textShadowColor: '#F2EB46',
  //   },
  //   taskText: {
  //     fontSize: 16,
  //     paddingVertical: 12,
  //     paddingHorizontal: 20,
  //     // textAlign: "left",
  //     lineHeight: 24,
  //     marginTop: 15,
  //     color: "#fff",
  //   },
  //   signUpText: {
  //     fontSize: 15,
  //     fontWeight: "bold",
  //     textAlign: "center",
  //     textAlignVertical: "center" ,
  //     alignSelf: "center",
  //     color: "#fff",
  //     textTransform: "uppercase",
  //   },
    signUpButton: {
      elevation: 8,
      backgroundColor: "#072DC2",
      paddingVertical: 15,
      paddingHorizontal: 90,
      marginTop: 80
    }
  
});

export default EditProfileScreen;
