import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";
import AlongRouteIcon from "./AlongRouteIcon.js";

const AlongRoute = () => {
  return (
    <View>
      <Text style={styles.headerText}> Along Route...</Text>
      {/* <AlongRouteIcon /> */}
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ marginRight: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginTop: 25,
    color: "white",
    fontSize: 20,
  },
  infoButtons: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    borderRadius: 50,
    height: 70,
    width: 70,
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginHorizontal: -0.5,
  },
  valueText: {
    fontSize: 20,
  },
  iconCircle: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 2,
    borderRadius: 50,
    height: 38,
    width: 38,
    left: 20,
    top: 48,
    zIndex: 1,
  },
});
export default AlongRoute;
