import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import EntryScreen from "./src/screens/EntryScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SetSafeLocations from "./src/screens/SetSafeLocations";
import { writeUserData } from './firebase/firebase.util';
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer,
} from "react-navigation-redux-helpers";
import React from "react";
import safeSpotsReducer from "./src/reducers/SafeSpotsReducer";
import emergencyContactsReducer from "./src/reducers/EmergencyContactReducer";
const AppDrawer = createDrawerNavigator({
  Home: HomeScreen,
  Account: AccountScreen
});

const AppModalStack = createStackNavigator({
  // NiteLite: AppDrawer,

  // NiteLite -> Entry -> LogIn or SignUp -> AppDrawer 
  NiteLite: LogInScreen,
  Account: AccountScreen,
  Page1: SignUpScreen,  // SignUp 
  Page2: SetSafeLocations //,
  // Page3: SetEmergencyContacts
  // add 2 more for other pages
});

const AppSwitchNavigator = createSwitchNavigator({
  App: {
    screen: AppModalStack,
  },
});

const navigationReducer = createNavigationReducer(AppSwitchNavigator);

const appReducer = combineReducers({
  nav: navigationReducer,
  safeSpots: safeSpotsReducer,
  emergencyContacts: emergencyContactsReducer,
});

const appMiddleware = createReactNavigationReduxMiddleware(
  (state) => state.nav
);

const AppContainer = createReduxContainer(AppSwitchNavigator, "root");

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

const store = createStore(appReducer, applyMiddleware(appMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
