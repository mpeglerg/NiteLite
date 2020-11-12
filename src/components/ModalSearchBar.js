import React from "react";
import { TextInput } from "react-native";
import { connect } from "react-redux";

const ModalSearchBar = (props) => {
  const [value, setValue] = React.useState("");

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
  };
};

export default connect(null, mapDispatchToProps)(ModalSearchBar);
