import React from "react";
import { TextInput } from "react-native";

const ModalSearchBar = (props) => {
  const [value, setValue] = React.useState("Search here...");

  return (
    <TextInput
      style={{
        height: 40,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
      }}
      onChangeText={(text) => {
        setValue(text);
        console.log("props", props);
        props.performQuery;
      }}
      value={value}
    />
  );
};

export default ModalSearchBar;
