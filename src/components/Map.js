import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";
import { getScore } from "../../data/walkScoreApi";

const GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_API;

const styles = StyleSheet.create({
    walkScoreView: {
      flex: 1,
      width: 150,
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.7)',
      alignItems: 'center',
    },
  });

  const MapContainer = (props) => {
    const [coordinates, setCoordinates] = useState([]);
    const [mapUIView, setMapUIView] = useState(null);
    const [list, setList] = useState([]);
    
    let currLoc = {
      latitude: 37.771707,
      longitude: -122.4053769
    }

    useEffect(() => {
      findCoordinates()
      let mounted = true;
      getScore(currLoc).then(items => {
        if(mounted) {
          setList(items)
        }
      })
      return() => mounted = false;
    }, [])

    const findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          currLoc = {longitude: position.coords.longitude, latitude: position.coords.latitude}
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      )
    }

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
                origin={props.directions.directions[0].origin}
                destination={props.directions.directions[0].destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="hotpink"
            />
            <Marker coordinate={currLoc}>
              <Callout
                // alphaHitTest
                // tooltip
                // onPress={e => {
                //   if (
                //     e.nativeEvent.action === 'marker-inside-overlay-press' ||
                //     e.nativeEvent.action === 'callout-inside-press'
                //   ) {
                //     return;
                //   }

                //   Alert.alert('callout pressed');
                // }}
                style={styles.walkScoreView}
              >
                <View>
                  <Text>{`WalkScore: ${list.walkscore}\n${list.description}`}</Text>
                </View>
              </Callout>
            </Marker>
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