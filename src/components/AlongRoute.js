import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import CrimeRateIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SafeSpotsIcon from "react-native-vector-icons/MaterialIcons";
import SafetyScoreIcon from "react-native-vector-icons/FontAwesome";
import WalkScoreIcon from "react-native-vector-icons/FontAwesome5";
import OpenBizIcon from "react-native-vector-icons/Entypo";
import LightingIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../styles/colors.js";
// import AlongRouteIcon from "./AlongRouteIcon.js";
import { getScore } from "../../data/walkScoreApi";
import { withOrientation } from "react-navigation";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { AppLoading } from "expo";

const AlongRoute = (props) => {
  //TODO: set states to user preferences
  const space = "          ";
  const [crimeRates, setCrimeRates] = useState(false);
  const [walkScore, setWalkScore] = useState(true);
  const [lighting, setLighting] = useState(true);
  const [construction, setConstruction] = useState(true);
  const [error, setError] = useState(
    error !== null ? null : "Sorry, but something went wrong."
  );
  const [walkscore, setWalkscore] = useState(0);

  useEffect(() => {
    async function getWalkScore() {
      try {
        const originScore = await getScore({
          lat: props.directions.currentLocation.latitude,
          lon: props.directions.currentLocation.longitude,
        });
        setWalkscore(originScore.walkscore);
      } catch (error) {
        setError("Sorry, but something went wrong.");
      }
    }
    getWalkScore();
  }, []);
  let [fontsLoaded] = useFonts({
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.headerText}> Along Route...</Text>
        {/* <AlongRouteIcon /> */}
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginLeft: -16,
          }}
        >
          <View style={{ marginRight: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <SafetyScoreIcon
                size={22}
                name="heartbeat"
                color="black"
                style={styles.icon}
              />
              <View activeOpacity={0.7} style={styles.iconCircle} />
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>Val</Text>
              </View>
              {crimeRates?
              <CrimeRateIcon
                size={22}
                name="alert-octagram"
                color="black"
                style={styles.icon}
              />
              : null
              }
              {crimeRates? <View activeOpacity={0.7} style={styles.iconCircle} /> :null}
              {crimeRates?
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>Val</Text>
              </View>
              : null}
              {walkScore?
              <WalkScoreIcon
                size={22}
                name="walking"
                color="black"
                style={styles.icon}
              /> : null}
              {walkScore? <View activeOpacity={0.7} style={styles.iconCircle} /> : null}
              {walkScore? 
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>{walkscore}</Text>
              </View>
              : null}
            </View>
            <View style={styles.infoTextRow1}>
              <Text style={styles.infoText}>Safety Score</Text>
              {crimeRates? <Text style={styles.infoText}>Area Crime Rate</Text> : <Text style={styles.infoText}>{space}</Text>}
              {walkScore? <Text style={styles.infoText}>Avg Walkscore</Text> : null}
            </View>
            <View style={{ flexDirection: "row" }}>
              <SafeSpotsIcon
                size={22}
                name="location-on"
                color="black"
                style={styles.icon}
              />
              <View activeOpacity={0.7} style={styles.iconCircle} />
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>
                  {props.safeSpots.safeSpots.length}
                </Text>
              </View>
              {construction ?
              <OpenBizIcon
                size={22}
                name="shop"
                color="black"
                style={styles.icon}
              />
              : null}
              {construction ? <View activeOpacity={0.7} style={styles.iconCircle} /> : null}
              {construction ?
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>Val</Text>
              </View>
              : null}
              {lighting ?
              <LightingIcon
                size={22}
                name="lightbulb"
                color="black"
                style={styles.icon}
              />
              : null}
              {lighting ? <View activeOpacity={0.7} style={styles.iconCircle} /> : null}
              {lighting ?
              <View style={styles.infoButtons}>
                <Text style={styles.valueText}>{walkscore}</Text>
              </View>
              : null}
            </View>
            <View style={styles.infoTextRow2}>
              <Text style={styles.infoText}>Safe Spots</Text>
              {construction ?<Text style={styles.infoText}>Construction</Text> : <Text style={styles.infoText}>{space}</Text>}
              {lighting ? <Text style={styles.infoText}>Lighting</Text> : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  headerText: {
    marginTop: 25,
    color: "white",
    fontSize: 20,
    fontFamily: "Quicksand_500Medium",
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
    marginHorizontal: -6,
  },
  valueText: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
  },
  iconCircle: {
    backgroundColor: "white",
    borderColor: colors.tertiaryBlue,
    borderWidth: 2,
    borderRadius: 50,
    height: 38,
    width: 38,
    left: 15,
    top: 48,
    zIndex: 1,
  },
  icon: {
    left: 45,
    top: 57,
    zIndex: 2,
  },
  infoText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Quicksand_500Medium",
  },
  infoTextRow1: {
    display: "flex",
    flexDirection: "row",
    //OPTION 1
    // marginHorizontal: 13,
    //OPTION 2
    justifyContent: "flex-start",
    paddingLeft: 30,
  },
  infoTextRow2: {
    // display: "flex",
    // flexDirection: "row",
    // //OPTION 1
    // // marginHorizontal: 13,
    // //OPTION 2
    // // justifyContent: "space-between",
    // justifyContent: "flex-start",
    // // alignContent: "center",
    // // paddingLeft: 25,
    // alignItems: "center",
    // // alignSelf: "center",
    // marginLeft: 30,


    display: "flex",
    flexDirection: "row",
    //OPTION 1
    // marginHorizontal: 13,
    //OPTION 2
    justifyContent: "space-between",
    paddingLeft: 30,
  },
});
const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    directions: state.directions,
    currentLocation: state.currentLocation,
  };
};
export default connect(mapStateToProps, null)(AlongRoute);
