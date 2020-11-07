export const deleteSafeSpot = (id) => {
  return {
    type: "DELETE_SAFE_SPOT",
    id: id,
  };
};

export const addSafeSpot = (id) => {
  return {
    type: "ADD_SAFE_SPOT",
    id: id,
  };
};

export const editSafeSpot = (id) => {
  return {
    type: "EDIT_SAFE_SPOT",
    id: id,
  };
};
