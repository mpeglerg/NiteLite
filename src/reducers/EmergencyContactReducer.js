const initState = {
  safeSpots: [
    { name: "Maya", phoneNumber: "123-456-7890" },
    { name: "Talia", phoneNumber: "123-456-7890" },
    { name: "Lauren", phoneNumber: "123-456-7890" },
    { name: "Shanaya", phoneNumber: "123-456-7890" },
  ],
};

const emergencyContactsReducer = (state = initState, action) => {
  console.log(action);
  if (action.type == "DELETE_EMERGENCY_CONTACT") {
    let newEmergencyContacts = state.emergencyContacts.filter((contact) => {
      return action.id !== contact.id;
    });
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else {
    return state;
  }
};

export default emergencyContactsReducer;
