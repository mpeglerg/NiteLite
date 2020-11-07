const initState = {
  safeSpots: [
    { name: "Maya's", address: "1 LMU Drive" },
    { name: "Campus", address: "1 LMU Drive" },
    { name: "Lauren and Shanaya's", address: "1 LMU Drive" },
  ],
};

const safeSpotsReducer = (state = initState, action) => {
  if (action.type == "DELETE_SAFE_SPOT") {
    let newSafeSpots = state.safeSpots.filter((safeSpot) => {
      return action.id !== safeSpot.name;
    });
    return {
      ...state,
      safeSpots: newSafeSpots,
    };
  } else {
    return state;
  }
};

export default safeSpotsReducer;
