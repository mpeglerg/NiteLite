import React from "react";
import { Audio } from "expo-av";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import SoundIcon from "react-native-vector-icons/Entypo";
import { colors } from "../styles/colors.js";

const AudioButton = ({ props }) => {
  return (
    <View>
      <TouchableOpacity
        title="Sounds"
        style={styles.button}
        onPress={playSound}
      >
        <SoundIcon size={28} name="sound" color="white" />
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

export default AudioButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: colors.tertiaryBlue,
    borderColor: colors.backgroundColor,
    borderWidth: 3,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 10,
    // marginTop: 20,
  },
});
