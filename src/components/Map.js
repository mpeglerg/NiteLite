import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";

const GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_API;

const styles = StyleSheet.create({
  versionBox: {
    position: "absolute",
    bottom: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  versionText: {
    padding: 4,
    backgroundColor: "#FFF",
    color: "#000",
  },
});

const MapContainer = (props) => {
  const [coordinates, setCoordinates] = useState([]);
  const [mapUIView, setMapUIView] = useState(null);
  const onMapPress = (e) => {
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
  };

  const onReady = (result) => {
    mapUIView.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: width / 10,
        bottom: height / 10,
        left: width / 10,
        top: height / 10,
      },
    });
  };

  const onError = (errorMessage) => {
    console.log(errorMessage); // eslint-disable-line no-console
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <MapView
        initialRegion={{
          latitude: 37.771707,
          longitude: -122.4053769,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        }}
        style={StyleSheet.absoluteFill}
        ref={(c) => setMapUIView(c)} // eslint-disable-line react/jsx-no-bind
        onPress={onMapPress}>
        <MapViewDirections
          origin={props.directions.directions[0].origin}
          destination={props.directions.directions[0].destination}
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
export default connect(mapStateToProps, null)(MapContainer);
