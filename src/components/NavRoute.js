import * as React from "react";
import { StyleSheet, View } from "react-native";
import MapboxNavigation from "@homee/react-native-mapbox-navigation";

const NavRoute = () => {
  return (
    <View style={styles.container}>
      <MapboxNavigation
        origin={[-97.760288, 30.273566]}
        destination={[-97.918842, 30.494466]}
        shouldSimulateRoute={true}
        onProgressChange={(event) => {
          const { latitude, longitude } = event.nativeEvent;
        }}
        onError={(event) => {
          const { message } = event.nativeEvent;
        }}
        onCancelNavigation={() => {
          // User tapped the "X" cancel button in the nav UI
          // or canceled via the OS system tray on android.
          // Do whatever you need to here.
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavRoute;
