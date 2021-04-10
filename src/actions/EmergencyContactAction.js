// TODO: Create action for ADD_EMERGENCY_CONTACT

export const deleteEmergencyContact = (id) => {
  return {
    type: "DELETE_EMERGENCY_CONTACT",
    payload: {
      name: id.name,
      number: id.number,
    },
  };
};

export const editEmergencyContact = (id) => {
  return {
    type: "EDIT_EMERGENCY_CONTACT",
    payload: {
      name: id.name,
      number: id.number,
    },
  };
};
