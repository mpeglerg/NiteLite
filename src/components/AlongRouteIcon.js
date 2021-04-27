import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../styles/colors.js";

const AlongRouteIcon = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={styles.textStyle}>
        <View style={{ flexDirection: "row" }}>
          <View activeOpacity={0.7} style={styles.iconCircle}>
            <Icon
              // style={styles.logInIcons}
              size={18}
              name="heart-pulse"
              // color="white"
            />
          </View>
          <View activeOpacity={0.7} style={styles.iconCircle} />
          <View activeOpacity={0.7} style={styles.iconCircle} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View activeOpacity={0.7} style={styles.iconCircle} />
          <View activeOpacity={0.7} style={styles.iconCircle} />
          <View activeOpacity={0.7} style={styles.iconCircle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconCircle: {
    // display: "flex",
    // flex: 1,
    backgroundColor: "red",
    borderColor: colors.tertiaryBlue,
    borderWidth: 2,
    borderRadius: 50,
    height: 42,
    width: 42,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
  },
});
export default AlongRouteIcon;
