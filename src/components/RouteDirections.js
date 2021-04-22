import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Swiper from 'react-native-swiper'

const RouteDirections = (props) => {
  // if(props.route.route.length === 0) return null


  const routeSteps = props.route.route.routes[0].legs[0].steps.map((step) => {
    return( 
    <View style={styles.slide1}>
      <Text style={styles.text}>
        {step.distance.text ? step.distance.text : null}
      </Text>
      <Text style={styles.text}>
        {/* TODO: fix regex for <b> tags */}
        {step.html_instructions ? step.html_instructions.replace(/(<[^>]*>)/, "") : null}
      </Text>
    </View>
    );
  })

  // console.log(props.route.route.routes[0])
  return (
    props.route.route.length !== 0 && props.route.route.routes[0].length !== 0 ? 
    <View style={styles.container}>
      <Swiper key={props.route.route.routes[0].legs[0].steps.length} style={styles.wrapper} showsButtons={true} height={200}>
      {props.route.route.routes[0].legs[0].steps.map((step) => {<View style={styles.slide1}>
        {console.log(step.html_instructions)}
      <Text style={styles.text}>
        {step.distance.text ? step.distance.text : null}
      </Text>
      <Text style={styles.text}>
        {/* TODO: fix regex for <b> tags */}
        {step.html_instructions ? step.html_instructions : null}
        {/* {step.html_instructions ? step.html_instructions.replace(/(<[^>]*>)/, "") : null} */}
      </Text>
    </View>})}
    {/* {routeSteps} */}
      </Swiper>
    </View> : null
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
