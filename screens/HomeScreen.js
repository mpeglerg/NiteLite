import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuDrawer from "react-native-side-drawer";

const HomeScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    // console.log("open", open);
  };

  const drawerContent = () => {
    return (
      <TouchableOpacity onPress={() => toggleOpen} style={styles.animatedBox}>
        {console.log("drawContent return")}
        {/* {console.log("Navigation: ", navigation)} */}
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <MenuDrawer
        open={open}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}>
        <TouchableOpacity onPress={toggleOpen} style={styles.body}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </MenuDrawer> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

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

export default HomeScreen;
