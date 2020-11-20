import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "../components/CheckBox";


const SafetyQuizScreen = ({navigation}) => {
  let object = navigation.getParam('object','missing');
  const [safePlaceInput, setSafePlaceInput] = useState("");
  const [openBusinesses, setOpenBusinesses] = useState("");
  const [policeStations, setPoliceStations] = useState("");
  const [busySidewalks, setBusySidewalks] = useState("");

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
        {objectifyAndNav(navigation, object, busySidewalks, openBusinesses, policeStations, safePlaceInput);}}>
        </Button>
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
