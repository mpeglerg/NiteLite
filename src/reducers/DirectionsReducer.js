const initState = {
  currentLocation: {
    latitude: 0,
    longitude: 0
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
  } else if(action.type == "UPDATE_CURRENT_LOCATION") {
    let currentLocation = state.currentLocation;
    currentLocation = action.payload;
    return {
      ...state,
      currentLocation: currentLocation,
    }
  } else {
    return state;
  }
};
export default directionsReducer;