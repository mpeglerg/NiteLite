import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const RouteDirections = (props) => {
  return (
    <View>
      {props.route.route[0].routes[0].legs.map((routeLeg, index) => {
        return (
          <View>
            <Text>Route Directions</Text>
            <Text>{routeLeg.distance.text}</Text>
            {console.log("routeLeg.distance.text: ", routeLeg.distance.text)}
            <Text>{routeLeg.duration.text}</Text>
          </View>
        );
      })} 
      {props.route.route[0].routes[0].legs[0].steps.map((step, index) => {
        return (
          <View>
            <Text>Step #{index}</Text>

            <Text>{step.distance.text}</Text>
            <Text>{step.duration.text}</Text>
            <Text>
              {step.html_instructions ? step.html_instructions : null}
            </Text>
          </View>
        );
     })}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    route: state.directions,
  };
};
export default connect(mapStateToProps, null)(RouteDirections);
