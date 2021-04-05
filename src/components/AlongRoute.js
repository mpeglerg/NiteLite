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
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
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
  buttons: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    borderRadius: 50,
    height: 45,
    width: "45%",
    margin: 10,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
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
    marginHorizontal: 15,
  },
  valueText: {
    fontSize: 20,
  },
});
export default AlongRoute;
