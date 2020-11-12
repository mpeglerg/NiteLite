import React, { useState } from "react";
import { Image, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Fontisto';
import KeyIcon from 'react-native-vector-icons/SimpleLineIcons';
import logo from '../images/NiteLiteLogo.png';

const LogInScreen = ({navigation}) => {
  const [ReturningUserEmail, setReturningUserEmail] = useState("");
  const [ReturningUserPassword, setReturningUserPassword] = useState("");

  return (
    <View style={styles.container}>
        <Image source={logo} style={{width:250, height:250}}></Image>
        <View  style={styles.icon}>
          <Icon style={styles.logInIcons} size={18} name="email" />
          <TextInput
            style={styles.inputStyle}
            placeholder="E-Mail"
            onChangeText={(text) => { setReturningUserEmail(text); }}
            value={ReturningUserEmail}
          />
        </View>
        <View  style={styles.icon}>
          <KeyIcon style={styles.logInIcons} size={18} name="key" />
          <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={(text) => { setReturningUserPassword(text); }}
          value={ReturningUserPassword}
        />
        </View>
      <Button style={styles.button} title="Log In"></Button>
      <Button style={styles.button} title="Don't Already Have an Account? Sign Up!" onPress={ () => navigation.navigate('Page1')}></Button>

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
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 5
    },
    icon: {
      flexDirection: 'row',
      borderColor: "#ccc",
      borderBottomWidth: 1,
      margin: 15
    },
    inputStyle: {
      width: '100%',
      marginBottom: 5,
      paddingBottom: 15,
      alignSelf: "center",
    },
    logInIcons: {
      paddingBottom: 10,
      paddingRight: 10
    },
    button: {
      fontSize: 12
    }
  });

export default LogInScreen;
