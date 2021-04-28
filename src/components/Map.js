import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";
import Geocoder from "react-native-geocoding";
import { colors } from "../styles/colors.js";
import safespotMarker from "../images/marker-04-big.png";
import { getDirections } from "../../data/directionsApi";

const GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_API;

const styles = StyleSheet.create({
  walkScoreView: {
    flex: 1,
    width: 150,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
  },
  safeSpotView: {
    flex: 1,
    width: 150,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: colors.tertiaryBlue,
    borderColor: colors.tertiaryBlue,
    borderWidth: 3,
    height: 40,
    width: 150,
    margin: 10,
    justifyContent: "center",
  },
});

const MapContainer = (props) => {
  const [coordinates, setCoordinates] = useState([]);
  const [mapUIView, setMapUIView] = useState(null);
  const [list, setList] = useState([]);
  const [safeSpotCoords, setSafeSpotCoords] = useState([]);
  const [error, setError] = useState(null);
  let markers = []
  let id = 0

  useEffect(() => {
    let mounted = true;
    getSafeSpotCoords();
    return () => (mounted = false);
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        props.updateCurrentLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const getSafeSpotCoords = () => {
    initGeocoder();
    props.safeSpots.safeSpots.forEach((spot) => {
      Geocoder.from(spot.address)
        .then((json) => {
          var location = json.results[0].geometry.location;
          setSafeSpotCoords([
            ...safeSpotCoords,
            {
              longitude: location.lng,
              latitude: location.lat,
            },
          ]);
        })
        .catch((error) => console.warn(error));
    });
  };

  const performQuery = async (destination) => {
    setError(null);
    try {
      const directions = await getDirections({
        origin: `${props.directions.currentLocation.latitude},${props.directions.currentLocation.longitude}`,
        destination: `${destination.latitude},${destination.longitude}`
      });
    props.updateCurrentRoute(directions)
  } catch (error) {
      setError("Sorry, but something went wrong.")
    }
  };

  const directToSafeSpot = (marker) => {
    props.displayRoute(false)
    props.updateDirections(marker)
    performQuery(marker)
  };

  const initGeocoder = () => {
    Geocoder.init(GOOGLE_MAPS_APIKEY);
  };

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
        style={StyleSheet.absoluteFill}
        ref={(c) => setMapUIView(c)} // eslint-disable-line react/jsx-no-bind
        region={{
          latitude: props.directions.currentLocation.latitude,
          longitude: props.directions.currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        }}
        onMapReady={getCurrentLocation}
        onPress={onMapPress}
        // followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        moveOnMarkerPress={true}
      >
        <MapViewDirections
          origin={props.directions.currentLocation}
          destination={props.directions.directions.destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
        <Marker coordinate={props.directions.currentLocation}>
          <Callout style={styles.walkScoreView}>
            <View>
              <Text>{`WalkScore: ${list.walkscore}\n${list.description}`}</Text>
            </View>
          </Callout>
        </Marker>
        {safeSpotCoords.map((marker) => (
          <Marker key={id++} image={safespotMarker} coordinate={marker} ref={ref => {markers[id] = ref}}>
            <Callout
              style={styles.safeSpotView}
              onPress={() => {
                directToSafeSpot(marker)
                markers[id].hideCallout()
              }}
            >
              <Text>{`Route to this location`}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    safeSpots: state.safeSpots,
    route: state.directions,
    directions: state.directions,
    currentLocation: state.currentLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentLocation: (currentLocation) => {
      dispatch({ type: "UPDATE_CURRENT_LOCATION", payload: currentLocation });
    },
    updateDirections: (destination) => {
      dispatch({ type: "UPDATE_DIRECTIONS", payload: destination });
    },
    updateCurrentRoute: (route) => {
      dispatch({ type: "UPDATE_CURRENT_ROUTE", payload: route });
    },
    displayRoute: (bool) => {
      dispatch({ type: "DISPLAY_ROUTE", payload: bool });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
