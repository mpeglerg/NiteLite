const initState = {
  contacts: [
    { name: "Maya", phoneNumber: "123-456-7890" },
    { name: "Talia", phoneNumber: "123-456-7890" },
    { name: "Lauren", phoneNumber: "123-456-7890" },
    { name: "Shanaya", phoneNumber: "123-456-7890" },
  ],
};

const emergencyContactsReducer = (state = initState, action) => {
  console.log("action", action);
  if (action.type == "DELETE_EMERGENCY_CONTACT") {
    console.log("DELETE_EMERGENCY_CONTACT");

    let newEmergencyContacts = state.contacts.map((contact) => {
      console.log("contact", contact);
      return action.id == contact.name;
    });
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else {
    console.log("ELSE");
    return state;
  }
};

export default emergencyContactsReducer;
