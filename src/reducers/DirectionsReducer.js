const initState = {
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
  } else {
    return state;
  }
};
export default directionsReducer;