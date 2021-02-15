export const updateUsername = (username) => {
  return { type: "UPDATE_USERNAME", payload: username };
};

export const updatePassword = (password) => {
  return { type: "UPDATE_PASSWORD", payload: password };
};

export const updateEmail = (email) => {
  return { type: "UPDATE_EMAIL", payload: email };
};

export const updatePhoneNumber = (phoneNumber) => {
  return { type: "UPDATE_PHONE_NUMBER", payload: phoneNumber };
};

export const updateSidewalks = (sidewalks) => {
  return { type: "UPDATE_SIDEWALKS", payload: sidewalks };
};

export const updateBusinesses = (businesses) => {
  return { type: "UPDATE_BUSINESSES", payload: businesses };
};

export const updatePolice = (police) => {
  return { type: "UPDATE_POLICE", payload: police };
};

export const updateSafeLocations = (safeLocations) => {
  return { type: "UPDATE_SAFE_LOCATIONS", payload: safeLocations };
};

export const updateEmergencyContact = (emergencyContact) => {
  return { type: "UPDATE_EMERGENCY_CONTACT", payload: emergencyContact };
};
