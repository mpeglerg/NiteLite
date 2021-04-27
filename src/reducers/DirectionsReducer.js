const initState = {
  currentLocation: {
    latitude: 0,
    longitude: 0,
  },
  directions: {
      origin: "1 LMU Drive",
      destination: "Apple Park Visitor Center",
  },
  displayRoute: false,
  route: []
};

const directionsReducer = (state = initState, action) => {
  if (action.type == "UPDATE_DIRECTIONS") {
    let newDirections = state.directions;
    newDirections.destination = action.payload;
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
  } else if (action.type == "DISPLAY_ROUTE") {
    let displayBool = action.payload
    return {
      ...state,
      displayRoute: displayBool,
    };
  } else {
    return state;
  }
};
export default directionsReducer;
