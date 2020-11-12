import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { setEmergencyContact } from '../../firebase/firebase.util';

const EmergencyContacts = ({navigation}) => {
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
        {setEmergencyContact(navigation.getParam('phoneNumber','none inputted'), name, contactPhone);
        navigation.navigate('Page4')}}>
        </Button>
    </View>
  );
};

export default EmergencyContacts;
