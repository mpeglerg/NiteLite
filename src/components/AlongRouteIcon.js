import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";

const AlongRouteIcon = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
      <View style={styles.textStyle}>
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
        <View activeOpacity={0.7} style={styles.buttons} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  modalView: {
    margin: 20,
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
  },
});
export default AlongRouteIcon;
