import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../styles/colors.js";
import { Audio } from "expo-av";

const AudioScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttons}
        onPress={playSound}
      >
        <Icon size={38} name="sound" style={{ alignSelf: "center" }} />
      </TouchableOpacity>
    </View>
  );
};

async function playSound() {
  Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
  });
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(require("../sounds/sound1.mp3"));
    await sound.playAsync();
  } catch (error) {
    console.log("Something went wrong.");
  }
}

const styles = StyleSheet.create({
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
});

export default AudioScreen;
