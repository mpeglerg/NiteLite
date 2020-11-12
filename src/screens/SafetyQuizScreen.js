import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "../../components/CheckBox";
import { setUserPreferences, safeSpots } from '../../firebase/firebase.util';
// export function setUserPreferences(userKey, busySidewalks, openBusinesses, policeStations) {


const SafetyQuizScreen = ({navigation}) => {
  console.log("navigation", navigation);
  const phoneNumber = navigation.getParam('phoneNumber','none inputted');
  console.log("passed in phone number!!", phoneNumber);
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState("");
  const [policeStations, setPoliceStations] = useState("");
  const [busySidewalks, setBusySidewalks] = useState("");
  // let openBusinesses, policeStations, busySidewalks;

  return (
    <View>
      <Text>Account</Text>
      <Text>User Settings</Text>
      <Text>What makes you feel safe when walking?</Text>
      <View>
        <CheckBox 
        onChange={(e) => { setOpenBusinesses(e); }}
        value={openBusinesses}/>
        <Text>Open Businesses</Text>
        
      </View>
      <View>
        <CheckBox  
        onChange={(e) => { setPoliceStations(e); }}
        value={policeStations}/>
        <Text>Police Stations</Text>
      </View>
      <View>
        <CheckBox  
        onChange={(e) => { setBusySidewalks(e); }}
        value={busySidewalks}/>
        <Text>Busy Sidewalks</Text>
      </View>
      <Text>Enter the addresses of places you consider "Safe Spots"</Text>
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
      <Button title="Set up Emergency Contacts" onPress={ () => 
        {setUserPreferences(navigation.getParam('phoneNumber','none inputted'), busySidewalks, openBusinesses, policeStations);
        safeSpots(navigation.getParam('phoneNumber','none inputted'), safePlaceInput);
        navigation.navigate('Page3', { phoneNumber: phoneNumber })}}>
        </Button>
    </View>
  );
};

export default SafetyQuizScreen;
