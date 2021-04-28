import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { colors } from "../styles/colors.js";
import Icon from "react-native-vector-icons/Ionicons";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import AlongRoute from "./AlongRoute";
import { ScrollView } from "react-native-gesture-handler";
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const SearchPageModal = (props) => {
  const durationString = props.route.route.routes[0].legs[0].duration.text;
  const durationNum = parseInt(durationString.match(/\d+/g)[0]);

  const distance = props.route.route.routes[0].legs[0].distance.text;

  const eta = new Date();
  eta.setMinutes(eta.getMinutes() + durationNum);
  const splitEta = eta.toLocaleTimeString("en-US").split(/:| /);
  let [fontsLoaded] = useFonts({
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return props.route.route.routes.length !== 0 ? (
      <ScrollView>
        <View style={styles.centeredView}>
          <View>
            <View>
              <Text style={styles.textStyle}>
                To {props.route.route.routes[0].legs[0].end_address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={styles.textStyle}
              >{`${durationString} (${distance})`}</Text>
              <Text
                style={styles.textStyle}
              >{`ETA: ${splitEta[0]}:${splitEta[1]} ${splitEta[3]}`}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {props.route.displayRoute ? null : (
              <View style={styles.buttons}>
                <Button
                  style={styles.buttons}
                  title="Start Route"
                  onPress={() => props.displayRoute(true)}
                ></Button>
              </View>
            )}
            <View style={styles.buttons}>
              <Button
                title="Cancel"
                onPress={() => {
                  props.updateCurrentRoute([]);
                  props.displayRoute(false);
                }}
              ></Button>
            </View>
          </View>
          <AlongRoute />
        </View>
      </ScrollView>
    ) : null;
  }
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 23,
    fontSize: 20,
    fontFamily: "Quicksand_700Bold",
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentRoute: (route) => {
      dispatch({ type: "UPDATE_CURRENT_ROUTE", payload: route });
    },
    displayRoute: (bool) => {
      dispatch({ type: "DISPLAY_ROUTE", payload: bool });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
    route: state.directions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageModal);
