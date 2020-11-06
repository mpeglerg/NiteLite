import React, { Component, createRef } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"
};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey={"API_KEY_HERE"}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  );
}

export default MapContainer;



// const mapStyles = {
//     width: '100%',
//     height: '100%'
//   };
  
//   export class MapContainer extends Component {
//     render() {
//       return (
//         <Map
//           google={this.props.google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={
//             {
//               lat: -1.2884,
//               lng: 36.8233
//             }
//           }
//         />
//       );
//     }
//   }
  
//   export default GoogleApiWrapper({
//     apiKey: 'API_KEY_HERE' // TODO: remove api key from code
//   })(MapContainer);
  



  // export default GoogleApiWrapper(
  //   (props) => ({
  //     // apiKey: props.apiKey
  //     apiKey: 'API_KEY_HERE'
  //   }
  // ))(MapContainer)

