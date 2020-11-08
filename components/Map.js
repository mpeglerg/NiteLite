import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDXj6OqzRzxbs2nFT5V6N67Tf3QsPY69nY';

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

class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          coordinates: [
            "Twitter HQ, Market Street, San Francisco, CA, USA",
            "Apple Park Visitor Center",
          ],
        };
    
        this.mapView = null;
      }
    
      onMapPress = (e) => {
        this.setState({
          coordinates: [
            ...this.state.coordinates,
            e.nativeEvent.coordinate,
          ],
        });
      }
    
      onReady = (result) => {
        this.mapView.fitToCoordinates(result.coordinates, {
          edgePadding: {
            right: (width / 10),
            bottom: (height / 10),
            left: (width / 10),
            top: (height / 10),
          },
        });
      }
    
      onError = (errorMessage) => {
        console.log(errorMessage); // eslint-disable-line no-console
      }
    
    render() {
        return(
            <View style={StyleSheet.absoluteFill}>
                <MapView initialRegion={{
                    latitude: 37.771707,
                    longitude: -122.4053769,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0922,
                }}
                style={StyleSheet.absoluteFill}
                ref={c => this.mapView = c} // eslint-disable-line react/jsx-no-bind
                onPress={this.onMapPress}>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
                </MapView>
            </View>
        );
    }
}
export default MapContainer;