const initState = {
  emergencyContacts: [],
  user: {
    username: "Test",
    password: "TestPassword",
    email: "sample@gmail.com",
    phoneNumber: "1234567890",
    lighting: false,
    walkScore: false,
    construction: false,
    crimeRates: false,
    safeLocations: "",
  },
};

const emergencyContactsReducer = (state = initState, action) => {
  if (action.type == "ADD_EMERGENCY_CONTACT") {
    let newContactName = action.id.name.name;
    let newContactNumber = action.id.name.number;
    let newEmergencyContacts = [
      ...state.emergencyContacts,
      { name: newContactName, number: newContactNumber },
    ];
    return {
      ...state,
      emergencyContacts: newEmergencyContacts,
    };
  } else if (action.type == "DELETE_EMERGENCY_CONTACT") {
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
    return {
      ...state,
      user: { ...state.user, username: newUsername },
    };
  } else if (action.type == "UPDATE_PASSWORD") {
    let newPassword = action.payload;
    return {
      ...state,
      user: { ...state.user, password: newPassword },
    };
  } else if (action.type == "UPDATE_EMAIL") {
    let newEmail = action.payload;
    return {
      ...state,
      user: { ...state.user, email: newEmail },
    };
  } else if (action.type == "UPDATE_PHONE_NUMBER") {
    let newPhoneNumber = action.payload;
    return {
      ...state,
      user: { ...state.user, phoneNumber: newPhoneNumber },
    };
  } else if (action.type == "UPDATE_CONSTRUCTION_PREFERENCES") {
    let construction = action.payload;
    return {
      ...state,
      user: { ...state.user, construction: construction },
    };
  } else if (action.type == "UPDATE_CRIME_RATE_PREFERENCES") {
    let crimeRate = action.payload;
    return {
      ...state,
      user: { ...state.user, crimeRates: crimeRate },
    };
  } else if (action.type == "UPDATE_WALKSCORE_PREFERENCES") {
    let walkscore = action.payload;
    return {
      ...state,
      user: { ...state.user, walkScore: walkscore },
    };
  } else if (action.type == "UPDATE_STREETLIGHT_PREFERENCES") {
    let streetlight = action.payload;
    return {
      ...state,
      user: { ...state.user, lighting: streetlight },
    };
  } else {
    return state;
  }
};

export default emergencyContactsReducer;
