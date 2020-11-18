export const updateDirections = (destination) => {
    return {
      type: "UPDATE_DIRECTIONS",
      payload: destination,
    };
  };