const initState = {
  safeSpots: [
    { name: "Maya's", address: "1 LMU Drive" },
    { name: "Campus", address: "1 LMU Drive" },
    { name: "Lauren and Shanaya's", address: "1 LMU Drive" },
  ],
};

const safeSpotsReducer = (state = initState, action) => {
  console.log(action);
  if (action.type == "DELETE_SAFE_SPOT") {
    let newSafeSpots = state.safeSpots.filter((safeSpot) => {
      return action.id !== safeSpot.id;
    });
    return {
      ...state,
      safeSpots: newSafeSpots,
    };
  } else {
    return state;
  }
  // if (action.type == "ADD_SAFE_SPOT") {
  //   let newSafeSpots = state.safeSpots.push(action.payload);
  //   return {
  //     ...state,
  //     safeSpots: newSafeSpots,
  //   };
  // }
  // return state;
};

export default safeSpotsReducer;
