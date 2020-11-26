export const updateDirections = (destination) => {
  return {
    type: "UPDATE_DIRECTIONS",
    payload: destination,
  };
};

export const updateRoute = (route) => {
  return { type: "UPDATE_CURRENT_ROUTE", payload: route };
};

export const updateCurrentLocation = (currentLocation) => {
  return { type: "UPDATE_CURRENT_LOCATION", payload: currentLocation };
};