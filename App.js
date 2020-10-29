// import React from "react";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

// const App = createSwitchNavigator({
//   Loading: {
//     screen: Example,
//   },
//   Auth: {
//     screen: Example,
//   },
//   App: {
//     screen: Example,
//   },
// });

// export default createAppContainer(App);

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Example from "./Example";

// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Account: { screen: AccountScreen },
// });
const AppDrawer = createDrawerNavigator({
  Home: Example,
  Account: Example,
  // App,
});

const AppModalStack = createStackNavigator(
  {
    App: AppDrawer,
    Promotion1: {
      screen: Example,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const App = createSwitchNavigator({
  // Login: {
  //   screen: AccountScreen,
  // },
  // Home: {
  //   screen: AccountScreen,
  // },
  App: {
    screen: AppModalStack,
  },
});
export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F04812",
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10,
  },
});
