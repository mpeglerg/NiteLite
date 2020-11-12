export const deleteSafeSpot = (id) => {
  return {
    type: "DELETE_SAFE_SPOT",
    id: id,
  };
};

export const addSafeSpot = () => {
  return {
    type: "ADD_SAFE_SPOT",
    payload: {
      name: id.name,
      address: id.address,
    },
  };
};

export const editSafeSpot = (id) => {
  return {
    type: "EDIT_SAFE_SPOT",
    id: id,
  };
};
