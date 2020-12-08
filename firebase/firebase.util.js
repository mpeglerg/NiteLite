import * as firebase from "firebase";
import "firebase/database";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://nitelite-401.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORA_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURE_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

// Get a reference to the database service
export const database = firebase.database();

export function registerNewUser(object) {
  let emergencyContact = [object.get("eName"), object.get("eNumber")];
  database.ref("users/" + object.get("name")).set({
    name: object.get("name"),
    email: object.get("email"),
    password: object.get("password"),
    phoneNumber: object.get("phoneNumber"),
    busySidewalks: object.get("busySidewalks"),
    openBusinesses: object.get("openBusinesses"),
    policeStations: object.get("policeStations"),
    safeLocations: object.get("safePlaces"),
    emergencyNumber: emergencyContact,
  });
}

export function verifyLogin(username, password){
  var ref = firebase.database().ref("users/" + username);
  let retVal = 0;
  ref.once("value").then(function(snapshot) {
    var dbUsername = snapshot.child("name").val(); 
    var dbPassword = snapshot.child("password").val();
    if(username === dbUsername && password === dbPassword){
      console.log("in if statement");
      retVal = 1;
    }
    console.log("just here");
  });
  return retVal;
}

export default firebase;
