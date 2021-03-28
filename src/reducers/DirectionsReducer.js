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
  route: [],
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
