// TO DO: user real username
const initState = {
  user: {
    username: "Demo401!",
    password: "Demo401!",
    email: "sample@gmail.com",
    phoneNumber: "1234567890",
    busySidewalks: true,
    openBusinesses: true,
    policeStations: true,
    safeLocations: true,
    emergencyNumber: true,
    // busySidewalks: userData.busySidewalks,
    // openBusinesses: userData.openBusinesses,
    // policeStations: userData.policeStations,
    // safeLocations: userData.safeLocations,
    // emergencyNumber: userData.emergencyNumber,
  },
};

const userProfileReducer = (state = initState, action) => {
  // if (action.type == "UPDATE_USERNAME") {
  //   let newUsername = action.payload;
  //   console.log("PAYLOAD", action.payload);
  //   // newProfile[0].username = action.payload;
  //   // console.log("state", state);
  //   return {
  //     ...state,
  //     user: newUsername,
  //   };
  // }
  // else if (action.type == "UPDATE_PASSWORD") {
  //   let newProfile = state.user;
  //   newProfile[0].password = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_EMAIL") {
  //   let newProfile = state.user;
  //   newProfile[0].email = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_PHONE_NUMBER") {
  //   let newProfile = state.user;
  //   newProfile[0].phoneNumber = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_SIDEWALKS") {
  //   let newProfile = state.user;
  //   newProfile[0].busySidewalks = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_BUSINESSES") {
  //   let newProfile = state.user;
  //   newProfile[0].openBusinesses = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_POLICE") {
  //   let newProfile = state.user;
  //   newProfile[0].policeStations = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_SAFE_LOCATIONS") {
  //   let newProfile = state.user;
  //   newProfile[0].safeLocations = action.payload;
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // } else if (action.type == "UPDATE_EMERGENCY_CONTACT") {
  //   let newProfile = state.user;
  //   newProfile[0].emergencyNumber[0][0] = action.payload[0];
  //   newProfile[0].emergencyNumber[0][1] = action.payload[1];
  //   return {
  //     ...state,
  //     user: newProfile,
  //   };
  // }
  // else {
  return state;
  // }
};
export default userProfileReducer;
