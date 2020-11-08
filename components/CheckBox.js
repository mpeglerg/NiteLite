import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const CheckBox = () => {
  const [isBusinessesSelected, setBusinessesSelection] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => setSelection(!isSelected)}>
      <Icon
        size={30}
        color={"#211f30"}
        name={isSelected ? "check-box" : "check-box-outline-blank"}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;
