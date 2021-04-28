import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { colors } from "../styles/colors.js";
import Swiper from "react-native-swiper";

const RouteDirections = (props) => {
  return (
    <View style={styles.container}>
      <Swiper
        key={props.route.route.routes[0].legs[0].steps.length}
        style={styles.wrapper}
        showsButtons={true}
        height={150}
      >
        {props.route.route.routes[0].legs[0].steps.map((step) => {
          return (
            <View style={styles.slide1}>
              <Text style={styles.text}>
                {step.distance.text ? step.distance.text : null}
              </Text>
              <Text style={styles.text}>
                {step.html_instructions
                  ? step.html_instructions.replace(/(<([^>]+)>)/gi, "")
                  : null}
              </Text>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -13,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tertiaryBlue,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    flexWrap: "wrap",
  },
});

const mapStateToProps = (state) => {
  return {
    route: state.directions,
  };
};
export default connect(mapStateToProps, null)(RouteDirections);
