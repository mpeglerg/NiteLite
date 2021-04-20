import React, { useState } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors.js";
import SoundPlayer from "react-native-sound-player";
// import Sound from "react-native-sound";



const AudioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sound 1: Type</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          playSound1();
        }}
      >
        <Text style={styles.signUpText}>Play Audio</Text>
      </TouchableOpacity>

      <Text>Sound 2: Type</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => {
          playSound2();
        }}
      >
        <Text style={styles.signUpText}>Play Audio</Text>
      </TouchableOpacity>
    </View>
  );
};

//TODO: combine into 1 function
function playSound1() {
  // try {
  //   // play the file tone.mp3
  //   SoundPlayer.playSoundFile("../sounds/sound1", "mp3");
  // } catch (e) {
  //   console.log(`cannot play the sound file`, e);
  // }
}

function playSound2() {
  // try {
  //   // play the file tone.mp3
  //   SoundPlayer.playSoundFile("../sounds/sound2", "mp3");
  // } catch (e) {
  //   console.log(`cannot play the sound file`, e);
  // }
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
