const initState = {
    directions: [
        {origin: 'Twitter HQ, Market Street, San Francisco, CA, USA',
        destination: 'Apple Park Visitor Center'}
    ]
  };
  
  const directionsReducer = (state = initState, action) => {
    if (action.type == "UPDATE_DIRECTIONS") {
  
      let newDirections = state.directions;
      newDirections[0].destination = action.payload;
      return {
        ...state,
        directions: newDirections,
      };
    } else {
      return state;
    }
  };
  
  export default directionsReducer;
  