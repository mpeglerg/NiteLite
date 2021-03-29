import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SafetyQuizScreen from "./src/screens/SafetyQuizScreen";
import EmergencyContacts from "./src/screens/EmergencyContacts";
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
import directionsReducer from "./src/reducers/DirectionsReducer";

const AppDrawer = createDrawerNavigator({
  Home: HomeScreen,
  Account: AccountScreen
});

const AppModalStack = createStackNavigator({
  // TODO: Refactor stack nav to CreateAccountFlow and MainAppFlow with switch nav
  // NiteLite: AppDrawer,
  // NiteLite: LogInScreen,
  // Account: AccountScreen,
  // SignUp: SignUpScreen, 
  // SafetyPreferences: SafetyQuizScreen,
  // EmergencyContacts: EmergencyContacts,
  Home: HomeScreen
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
  directions: directionsReducer
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
