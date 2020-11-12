import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const GOOGLE_MAPS_APIKEY = 'AIzaSyDXj6OqzRzxbs2nFT5V6N67Tf3QsPY69nY';
const origin = {latitude: 37.3318456, longitude: -122.0296002};

const styles = StyleSheet.create({
    versionBox: {
      position: 'absolute',
      bottom: 50,
      right: 50,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    versionText: {
      padding: 4,
      backgroundColor: '#FFF',
      color: '#000',
    },
  });

  const MapContainer = (props) => {
    console.log(`PROPS: ${props}`);
    const [coordinates, setCoordinates] = useState([]);
    const [mapUIView, setMapUIView] = useState(null);
    
    const onMapPress = (e) => {
      setCoordinates([
        ...coordinates,
        e.nativeEvent.coordinate,
      ]);
    };
  
    const onReady = (result) => {
      mapUIView.fitToCoordinates(result.coordinates, {
        edgePadding: {
          right: (width / 10),
          bottom: (height / 10),
          left: (width / 10),
          top: (height / 10),
        },
      });
    };
  
    const onError = (errorMessage) => {
      console.log(errorMessage); // eslint-disable-line no-console
    };
  
      return(
          <View style={StyleSheet.absoluteFill}>
              <MapView initialRegion={{
                  latitude: 37.771707,
                  longitude: -122.4053769,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0922,
              }}
              style={StyleSheet.absoluteFill}
              ref={c => setMapUIView(c)} // eslint-disable-line react/jsx-no-bind
              onPress={onMapPress}>
              <MapViewDirections
                  origin={origin}
                  destination={props.directions}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={3}
                  strokeColor="hotpink"
              />
              </MapView>
          </View>
      );
};

const mapStateToProps = (state) => {
  return {
    directions: state.directions,
  };
};
export default connect(mapStateToProps)(MapContainer);