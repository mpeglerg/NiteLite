import React from "react";
import { TextInput } from "react-native";

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
        props.performQuery;
      }}
      value={value}
    />
  );
};

export default ModalSearchBar;
