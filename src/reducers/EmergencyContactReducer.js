const initState = {
  emergencyContacts: [
    { name: "Maya", number: "123-456-7890" },
    { name: "Talia", number: "123-456-7890" },
    { name: "Lauren", number: "123-456-7890" },
    { name: "Shanaya", number: "123-456-7890" },
  ],
};

const emergencyContactsReducer = (state = initState, action) => {
  if (action.type == "DELETE_EMERGENCY_CONTACT") {

    console.log("state", state);
    console.log("action", action);
    let newEmergencyContacts = state.emergencyContacts.filter((contact) => {
      return action.id.name !== contact.name;
    });
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else if (action.type == "EDIT_EMERGENCY_CONTACT") {
    console.log("action", action);
    console.log("state", state);
    // .replace()?
    let newEmergencyContacts = state.emergencyContacts.filter((contact) => {
      return action.payload.name !== contact.name;
    });
    newEmergencyContacts.push({
      name: action.payload.name,
      number: action.payload.number,
    });
    return { ...state, emergencyContacts: newEmergencyContacts };
  } else {
    return state;
  }
};

export default emergencyContactsReducer;
