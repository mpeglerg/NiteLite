import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { colors } from "../styles/colors.js";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import AlongRoute from "./AlongRoute";

const SearchPageModal = (props) => {
  return (
    <View style={styles.centeredView}>
      <View>
      <Button style={styles.buttons} title="Cancel Route" onPress={() =>props.updateCurrentRoute([])}></Button>

        <Text style={styles.textStyle}>To 1 LMU Drive, Los Angeles, CA</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 20,
          }}
        >
          <Text style={styles.textStyle}>15 min (5 mi)</Text>
          <Text style={styles.textStyle}>ETA: 3:48pm</Text>
        </View>
      </View>
      <AlongRoute />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={styles.buttons}>
          <Button title="Cancel"></Button>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title="Start Route"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",
    marginTop: 23,
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
});


const mapDispatchToProps = (dispatch) => {
  return {
    updateDirections: (destination) => {
      dispatch({ type: "UPDATE_DIRECTIONS", payload: destination });
    },
    updateCurrentRoute: (route) => {
      dispatch({ type: "UPDATE_CURRENT_ROUTE", payload: route });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    emergencyContacts: state.emergencyContacts,
    route: state.directions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageModal);
