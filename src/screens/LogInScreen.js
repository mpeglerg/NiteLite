import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LogInScreen = ({navigation}) => {
  const [ReturningUserEmail, setReturningUserEmail] = useState("");
  const [ReturningUserPassword, setReturningUserPassword] = useState("");

  return (
    <View style={styles.container}>
         <TextInput
          style={styles.inputStyle}
          placeholder="E-Mail"
          onChangeText={(text) => { setReturningUserEmail(text); }}
          value={ReturningUserEmail}
        />
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => { setReturningUserPassword(text); }}
          value={ReturningUserPassword}
        />
      <Button title="Log In"></Button>

      <Button title="Don't Already Have an Account? Sign Up!" onPress={ () => navigation.navigate('Page1')}></Button>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
  });

export default LogInScreen;
