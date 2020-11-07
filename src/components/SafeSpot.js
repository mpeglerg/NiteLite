import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

const SafeSpot = ({ props }) => {
  return (
    <View style={{ borderWidth: "1px" }}>
      <Icon
        size={30}
        color={"#211f30"}
        name={"check-box" /* find icon name*/}
      />
      <Text>{props.name}</Text>
      <Button title="edit" />
      <Button title="X" onPress={() => props.handleClick(props.name)} />
      <Text>{props.address}</Text>
      <Button title="edit" />
      <Button title="X" />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSafeSpot: (id) => {
      dispatch({ type: "DELETE_SAFE_SPOT", id: id });
    },
  };
};
export default connect(mapDispatchToProps)(SafeSpot);
