import { Sound } from "expo-av/build/Audio";
import React from "react";
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import SoundIcon from "react-native-vector-icons/Entypo";
import { colors } from "../styles/colors.js";

const AudioButton = ({ props }) => {
  return (
    <View>
      <TouchableOpacity title="Sounds" style={styles.button}>
        <SoundIcon size={28} name="sound" color="white" />
      </TouchableOpacity>
    </View>
  );
};

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
    marginTop: 20,
  },
});
