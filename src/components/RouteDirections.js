import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Swiper from 'react-native-swiper'

const RouteDirections = (props) => {
  // props.route.route[0].routes[0].legs[0].steps.map((step) => {
  //   console.log(step)
  // })

  // const routeSteps = props.route.route[0].routes[0].legs[0].steps.map((step) => {
  const routeSteps = props.route.route.map((step) => {
    return(
    <View style={styles.slide1}>
      <Text style={styles.text}>
        {/* {step.distance.text ? step.distance.text : null} */}
        {step.steps[0].distance.text ? step.steps[0].distance.text : null}
      </Text>
      <Text style={styles.text}>
        {/* {step.html_instructions ? step.html_instructions : null} */}
        {step.steps[0].html_instructions ? step.steps[0].html_instructions : null}
      </Text>
    </View>
    );
  })

  return (
    <View style={styles.container}>
      <Swiper key={props.route.route[0].steps.length} style={styles.wrapper} showsButtons={true} height={200}>
          {routeSteps}
      </Swiper>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: .25
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) => {
  return {
    route: state.directions,
  };
};
export default connect(mapStateToProps, null)(RouteDirections);
