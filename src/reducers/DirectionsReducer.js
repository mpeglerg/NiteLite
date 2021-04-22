const initState = {
  currentLocation: {
    latitude: 0,
    longitude: 0,
  },
  directions: [
    {
      origin: "Twitter HQ, Market Street, San Francisco, CA, USA",
      destination: "Apple Park Visitor Center",
    },
  ],
  route: [
    // {
    // "steps": [ {
    //   "travel_mode": "DRIVING",
    //   "start_location": {
    //     "lat": 41.8507300,
    //     "lng": -87.6512600
    //   },
    //   "end_location": {
    //     "lat": 41.8525800,
    //     "lng": -87.6514100
    //   },
    //   "polyline": {
    //     "points": "a~l~Fjk~uOwHJy@P"
    //   },
    //   "duration": {
    //     "value": 19,
    //     "text": "1 min"
    //   },
    //   "html_instructions": "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eS Morgan St\u003c/b\u003e toward \u003cb\u003eW Cermak Rd\u003c/b\u003e",
    //   "distance": {
    //     "value": 207,
    //     "text": "0.1 mi"
    //   }
    //   }]
    // },
    // {
    //   "steps": [ {
    //     "travel_mode": "DRIVING",
    //     "start_location": {
    //       "lat": 41.8507300,
    //       "lng": -87.6512600
    //     },
    //     "end_location": {
    //       "lat": 41.8525800,
    //       "lng": -87.6514100
    //     },
    //     "polyline": {
    //       "points": "a~l~Fjk~uOwHJy@P"
    //     },
    //     "duration": {
    //       "value": 19,
    //       "text": "1 min"
    //     },
    //     "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eS Panay Way\u003c/b\u003e",
    //     "distance": {
    //       "value": 207,
    //       "text": "0.5 mi"
    //     }
    //   }]
    // },
    // {
    //   "steps": [ {
    //     "travel_mode": "DRIVING",
    //     "start_location": {
    //       "lat": 41.8507300,
    //       "lng": -87.6512600
    //     },
    //     "end_location": {
    //       "lat": 41.8525800,
    //       "lng": -87.6514100
    //     },
    //     "polyline": {
    //       "points": "a~l~Fjk~uOwHJy@P"
    //     },
    //     "duration": {
    //       "value": 19,
    //       "text": "1 min"
    //     },
    //     "html_instructions": "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eS Panay Way\u003c/b\u003e",
    //     "distance": {
    //       "value": 207,
    //       "text": "800 feet"
    //     }
    //   }]
    // }
  ]
};

const directionsReducer = (state = initState, action) => {
  if (action.type == "UPDATE_DIRECTIONS") {
    let newDirections = state.directions;
    /* TODO: does directions need to be an array or will it 
    always be structured as a single origin and destination? 
    Could alternately just be 
      directions: {
        origin: "Twitter HQ, Market Street, San Francisco, CA, USA",
        destination: "Apple Park Visitor Center",
      },
    if it will never have more than one origin and dest.
    */
    newDirections[0].destination = action.payload;
    return {
      ...state,
      directions: newDirections,
    };
  } else if (action.type == "UPDATE_CURRENT_ROUTE") {
    let newRoute = action.payload;
    return {
      ...state,
      route: newRoute,
    };
  } else if (action.type == "UPDATE_CURRENT_LOCATION") {
    let currentLocation = state.currentLocation;
    currentLocation = action.payload;
    return {
      ...state,
      currentLocation: currentLocation,
    };
  } else {
    return state;
  }
};
export default directionsReducer;
