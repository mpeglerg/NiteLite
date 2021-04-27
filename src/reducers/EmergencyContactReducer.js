const initState = {
  emergencyContacts: [
    { name: "Maya", number: "123-456-7890" },
    { name: "Talia", number: "123-456-7890" },
    { name: "Lauren", number: "123-456-7890" },
    { name: "Shanaya", number: "123-456-7890" },
  ],
  user: {
    username: "Test",
    password: "TestPassword",
    email: "sample@gmail.com",
    phoneNumber: "1234567890",
    busySidewalks: true,
    openBusinesses: true,
    policeStations: true,
    safeLocations: true,
    emergencyNumber: true,
  },
};

const emergencyContactsReducer = (state = initState, action) => {
  // TODO: Add reducer for ADD_EMERGENCY_CONTACT
  if (action.type == "DELETE_EMERGENCY_CONTACT") {
    let newEmergencyContacts = state.emergencyContacts.filter((contact) => {
      return action.id.name !== contact.name;
    });
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else if (action.type == "EDIT_EMERGENCY_CONTACT") {
    let newEmergencyContacts = state.emergencyContacts.map((contact) => {
      return contact.name === action.payload.oldName
        ? {
            name: action.payload.name ? action.payload.name : contact.name,
            number: action.payload.number
              ? action.payload.number
              : contact.number,
          }
        : contact;
    });
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else if (action.type == "UPDATE_USERNAME") {
    let newUsername = action.payload;
    console.log("UPDATE_USERNAME PAYLOAD", action.payload);
    // newProfile[0].username = action.payload;
    // console.log("state", state);
    console.log("NEW STATE: ", {
      ...state,
      user: { ...state.user, username: newUsername },
    });
    return {
      ...state,
      user: { ...state.user, username: newUsername },
    };
  } else if (action.type == "UPDATE_PASSWORD") {
    let newPassword = action.payload;
    console.log("UPDATE_PASSWORD PAYLOAD", action.payload);
    // newProfile[0].username = action.payload;
    // console.log("state", state);
    console.log("NEW STATE: ", {
      ...state,
      user: { ...state.user, password: newPassword },
    });
    return {
      ...state,
      user: { ...state.user, password: newPassword },
    };
  } else {
    return state;
  }
};

export default emergencyContactsReducer;
