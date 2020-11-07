import HomeScreen from "./src/components/screens/HomeScreen";
import AccountScreen from "./src/components/screens/AccountScreen";
import {
  createAppContainer,
  createSwitchNavigator,
  StackNavigator,
} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer,
} from "react-navigation-redux-helpers";
import React from "react";

const AppDrawer = createDrawerNavigator({
  Home: HomeScreen,
  Account: AccountScreen,
});

const AppModalStack = createStackNavigator({
  NiteLite: AppDrawer,
});

const AppSwitchNavigator = createSwitchNavigator({
  App: {
    screen: AppModalStack,
  },
});

const navigationReducer = createNavigationReducer(AppSwitchNavigator);

const appReducer = combineReducers({
  nav: navigationReducer,
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
