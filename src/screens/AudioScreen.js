import React from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors.js";
import { Audio } from 'expo-av';

const  AudioScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>Sound 1: Type</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() =>{
          playSound()
        }}
      >
        <Text style={styles.signUpText}>Play Audio</Text>
      </TouchableOpacity>

      <Text>Sound 2: Type</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          playSound();
        }}
      >
        <Text style={styles.signUpText}>Play Audio</Text>
      </TouchableOpacity>
    </View>
  );
};

async function playSound() {
  Audio.setAudioModeAsync({playsInSilentModeIOS: true, allowsRecordingIOS: false, staysActiveInBackground: true});
  const sound = new Audio.Sound();
  try{
    await sound.loadAsync(require('../sounds/sound1.mp3'));
    await sound.playAsync(); 
    await sound.unloadAsync();

  } catch(error){
    console.log("Something went wrong.");
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  signUpButton: {
    elevation: 8,
    backgroundColor: "#072DC2",
    paddingVertical: 15,
    paddingHorizontal: 90,
    marginTop: 80,
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  signUpButton: {
    elevation: 8,
    backgroundColor: "#072DC2",
    paddingVertical: 15,
    paddingHorizontal: 90,
    marginTop: 80,
  },
  centeredView: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    // backgroundColor: "blue",
    borderRadius: 20,
    width: "100%",
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttons: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    borderRadius: 50,
    height: 60,
    width: 60,
    margin: 10,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    // fontWeight: "bold"
  },
});

export default AudioScreen;