import React from "react";
import { View, Text } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}>
      <Text>Account</Text>
    </View>
  );
};

export default AccountScreen;
