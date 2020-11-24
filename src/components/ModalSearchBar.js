<<<<<<< HEAD
import React from "react";
import { TextInput, StyleSheet, View} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Fontisto';
=======
import React, { useState } from "react";
import { TextInput } from "react-native";
import { connect } from "react-redux";
import { getDirections } from "../../data/api-placeholder";
>>>>>>> 8d7893027d68b784669b141308951aaa0812d136

const ModalSearchBar = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const performQuery = async (event) => {
    setError(null);

    try {
      const directions = await getDirections({});
      props.updateCurrentRoute(directions);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };
  return (
    <View  style={styles.searchSection}>
    <Icon style={styles.searchIcon} size={16} name="search" />
    <TextInput
      style={{
        height: 40,        
      }}
      placeholder={"Search here..."}
      onChangeText={(text) => {
        setValue(text);
      }}
      onSubmitEditing={(event) => {
        performQuery();
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
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
  },
  searchIcon: {
    paddingBottom: 17,
    paddingRight: 10
  },
});

export default connect(null, mapDispatchToProps)(ModalSearchBar);
