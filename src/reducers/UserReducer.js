const initState = {
    username: "default", 
    password: "default", 
    email: "default@gmail.com", 
    phoneNumber: "1234567890",
    openBusinesses: true, 
    policeStations: true, 
    busyAreas: true, 
    emergencyContact: [
        {name: "default", phoneNumber: "1234567890"}
    ], 
    safeSpots: [
        "default safe spot"
    ]
  };
  
  const userReducer = (state = initState, action) => {
    if (action.type == "POPULATE_USER_DATA") {
      let username = state.username;
      username = action.payload
      return {
        ...state,
        username: username,
      };
    } else {
        return state;
    }
  };
  export default userReducer;