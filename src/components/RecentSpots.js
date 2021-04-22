import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RecentSpots = () => {
  return (
    <View>
      <View style={styles.tabs}>
        <Text style={styles.tabsText}>Recents</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.recentContainer}>
          <Text>Recent #1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentContainer}>
          <Text>Recent #2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentContainer}>
          <Text>Recent #3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentContainer}>
          <Text>Recent #4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentContainer}>
          <Text>Recent #5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsText: {
    color: "white",
    fontWeight: "bold",
  },
  tabs: {
    paddingTop: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  recentContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default RecentSpots;
