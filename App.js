import HomeScreen from "./src/components/screens/HomeScreen";
import AccountScreen from "./src/components/screens/AccountScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

const AppDrawer = createDrawerNavigator({
  Home: HomeScreen,
  Account: AccountScreen,
});

const AppModalStack = createStackNavigator({
  NiteLite: AppDrawer,
});

const App = createSwitchNavigator({
  App: {
    screen: AppModalStack,
  },
});
export default createAppContainer(App);
