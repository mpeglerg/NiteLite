import React, { useState } from "react";
import { TextInput } from "react-native";
import { connect } from "react-redux";
import { getDirections } from "../../data/api-placeholder";

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
    <TextInput
      style={{
        height: 40,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
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

export default connect(null, mapDispatchToProps)(ModalSearchBar);
