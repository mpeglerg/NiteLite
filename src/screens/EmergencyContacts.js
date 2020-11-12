import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { registerNewUser } from '../../firebase/firebase.util';

const EmergencyContacts = ({navigation}) => {
    let object = navigation.getParam('object','missing');
  const [name, setName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  return (
    <View>
        <Text>Enter who you would like to call during an Emergency.</Text>
        <Text>Name</Text>
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
      <Text>Phone number</Text>
      <TextInput
        style={{
          height: 40,
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 15,
        }}
        placeholder={"1234567890"}
        onChangeText={(text) => {
            setContactPhone(text);
        }}
        value={contactPhone}
      />
      <Button title="Complete Profile" onPress={ () => 
        {objectifyAndNav(navigation, object, name, contactPhone)}}>
        </Button>
    </View>
  );
};

function objectifyAndNav(navigation, object, name, contactPhone){
    // add new items to our object
    object.set("eName", name);
    object.set("eNumber", contactPhone);

    // call firebase function to set all of these items in the object
    registerNewUser(object)
    // navigate to next page
    navigation.navigate('Page4');
  
  }
export default EmergencyContacts;
