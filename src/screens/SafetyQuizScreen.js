import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "../components/CheckBox";
import AddContactIcon from 'react-native-vector-icons/AntDesign';
import AddContactIcon2 from 'react-native-vector-icons/MaterialIcons';


const SafetyQuizScreen = ({navigation}) => {
  let object = navigation.getParam('object','missing');
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState("");
  const [policeStations, setPoliceStations] = useState("");
  const [busySidewalks, setBusySidewalks] = useState("");

  return (
    <View style={styles.container}>
      {/* <Text>Account</Text> */}
      <Text style={styles.header}>Set Up Your Route Preferences</Text>
      
      <Text style={styles.taskText}>1. What makes you feel safe when walking?</Text>
      <View style={styles.check}>
        <CheckBox 
        onChange={(e) => { setOpenBusinesses(e); }}
        value={openBusinesses}/>
        <Text>Open Businesses</Text>  
      </View>
      <View style={styles.check}>
        <CheckBox  
        onChange={(e) => { setPoliceStations(e); }}
        value={policeStations}/>
        <Text>Police Stations</Text>
      </View>
      <View style={styles.check}>
        <CheckBox  
        onChange={(e) => { setBusySidewalks(e); }}
        value={busySidewalks}/>
        <Text>Busy Sidewalks</Text>
      </View>
      
      <Text style={styles.taskText}>2. Enter the addresses of places you consider "Safe Spots"</Text>
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

     
        <Text style={styles.taskText}>3. Set up Emergency Contacts</Text>
        {/* <View> */}
        <TouchableOpacity onPress={ () => 
        {objectifyAndNav(navigation, object, busySidewalks, openBusinesses, policeStations, safePlaceInput);}}>
        <AddContactIcon2 size={30} name="person-add" color="white"/>
        {/* </View> */}
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up!</Text>
      </TouchableOpacity>
    </View>
  );
};

function objectifyAndNav(navigation, object, busySidewalks, openBusinesses, policeStations, safePlaceInput){
  // add new items to our object
  object.set("busySidewalks", busySidewalks);
  object.set("openBusinesses", openBusinesses);
  object.set("policeStations", policeStations);
  object.set("safePlaces", safePlaceInput);
  console.log("SAFE PLACE: ", safePlaceInput);
  console.log("in the map: ", object.get("safePlaces"));

  // navigate to next page
  navigation.navigate('Page3', { object: object });

}

export default SafetyQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010068',
    textAlign: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    // textTransform: "uppercase",
    padding: 10,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 18,
    // marginVertical: 18,
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 34,

    textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 8,
      textShadowColor: '#F2EB46',
  },
  check: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    padding: 8,
  },
  taskText: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 15,
    color: "#fff",
  },
  signUpText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center" ,
    alignSelf: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
  signUpButton: {
    elevation: 8,
    backgroundColor: "#072DC2",
    paddingVertical: 12,
    paddingHorizontal: 110,
    marginTop: 25
  }
});