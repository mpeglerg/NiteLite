const initState = {
    directions: [
        {origin: '',
        destination: ''}
    ]
  };
  
  const directionsReducer = (state = initState, action) => {
    console.log("action", action);
    if (action.type == "UPDATE_DIRECTIONS") {
      console.log("UPDATE_DIRECTIONS");
      console.log(`ACTION: ${action}`);
  
      let newDirections = action.payload;
      return {
        ...state,
        directions: newDirections,
      };
    } else {
      console.log("ELSE");
      return state;
    }
  };
  
  export default directionsReducer;
  