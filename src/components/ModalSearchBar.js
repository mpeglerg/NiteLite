import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Fontisto";
import { getDirections } from "../../data/directionsApi";

const ModalSearchBar = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const performQuery = async (event) => {
    setError(null);
    try {
      const directions = await getDirections({
        origin: `${props.directions.currentLocation.latitude},${props.directions.currentLocation.longitude}`,
        destination: event.nativeEvent.text,
      });
      props.updateCurrentRoute(directions);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} size={16} name="search" />
      <TextInput
        style={{
          height: 40,
        }}
        placeholder={"Where to?"}
        onChangeText={(text) => {
          setValue(text);
        }}
        onSubmitEditing={(event) => {
          performQuery(event);
          props.updateDirections(event.nativeEvent.text);
        }}
        value={value}
      />
    </View>
  );
};

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

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  searchIcon: {
    paddingBottom: 17,
    paddingRight: 10,
    marginLeft: 15,
    marginTop: 14,
  },
});

const mapStateToProps = (state) => {
  return {
    directions: state.directions,
    currentLocation: state.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSearchBar);
