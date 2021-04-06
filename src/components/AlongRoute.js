import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../styles/colors.js";
import AlongRouteIcon from "./AlongRouteIcon.js";
import SafetyScoreIcon from "react-native-vector-icons/FontAwesome";
import WalkScoreIcon from "react-native-vector-icons/FontAwesome5";

import { withOrientation } from "react-navigation";

const AlongRoute = () => {
  return (
    <View>
      <Text style={styles.headerText}> Along Route...</Text>
      {/* <AlongRouteIcon /> */}
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={{ marginRight: 20 }}>
          <View style={{ flexDirection: "row" }}>
            {/* <SafetyScoreIcon
              size={22}
              name="heartbeat"
              color="black"
              style={styles.icon}
            /> */}
            <View activeOpacity={0.7} style={styles.iconCircle} />

            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>

            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>

            {/* <WalkScoreIcon
              size={22}
              name="walking"
              color="black"
              style={styles.icon}
            /> */}
            <View activeOpacity={0.7} style={styles.iconCircle} />
            <View style={styles.infoButtons}>
              <Text style={styles.valueText}>Val</Text>
            </View>
          </View>
          <View style={styles.infoTextRow1}>
            <Text style={styles.infoText}>Safety Score</Text>
            <Text style={styles.infoText}>Area Crime Rate</Text>
            <Text style={styles.infoText}>Avg Walkscore</Text>
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
          <View style={styles.infoTextRow2}>
            <Text style={styles.infoText}>Safe Spots</Text>
            <Text style={styles.infoText}>Open Biz</Text>
            <Text style={styles.infoText}>Lighting</Text>
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
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginHorizontal: 2,
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
  icon: {
    left: 50,
    top: 57,
    zIndex: 2,
  },
  infoText: {
    color: "white",
    textAlign: "center",
  },
  infoTextRow1: {
    display: "flex",
    flexDirection: "row",
    //OPTION 1
    // marginHorizontal: 13,
    //OPTION 2
    justifyContent: "space-between",
    paddingLeft: 21,
  },
  infoTextRow2: {
    display: "flex",
    flexDirection: "row",
    //OPTION 1
    // marginHorizontal: 13,
    //OPTION 2
    justifyContent: "space-between",
    justifyContent: "space-around",
    alignContent: "center",
    paddingLeft: 13,
  },
});
export default AlongRoute;
