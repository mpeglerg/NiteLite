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
  let phoneNumber = object.get("phoneNumber");
  let email = object.get("email");
  let username = object.get("name");
  addNumber(phoneNumber, username);
  addEmail(email, username);
  let emergencyContact = [object.get("eName"), object.get("eNumber")];
  database.ref("users/" + object.get("name")).set({
    name: username,
    email: email,
    password: object.get("password"),
    phoneNumber: phoneNumber,
    busySidewalks: object.get("busySidewalks"),
    openBusinesses: object.get("openBusinesses"),
    policeStations: object.get("policeStations"),
    safeLocations: object.get("safePlaces"),
    emergencyNumber: emergencyContact,
  });
}


function addNumber(phoneNumber, username) {
  database.ref("users/numbers/" + phoneNumber).set({
    username: username,   
  });
}

function addEmail(email, username) {
  var emailMod = email.replace(/[.]/g, "");
  database.ref("users/emails/" + emailMod).set({
    username: username,
  });
}

export async function verifyLogin(username, password){
  var ref = await firebase.database().ref("users/" + username);
  let retVal = 0;
  return ref.once("value").then(function(snapshot) {
    var dbUsername = snapshot.child("name").val(); 
    var dbPassword = snapshot.child("password").val();
    if(username === dbUsername && password === dbPassword){
      // case: auth granted
      retVal = 1;
    } else if (dbUsername == null){
      // case: username not found
      retVal = 2;
    } else {
      // case: incorrect password
      retVal = 3;
    }
    return retVal;
  });
}

export async function verifyUsername(username){
  var ref = await firebase.database().ref("users/" + username);
  let taken = false;
  return ref.once("value").then(function(snapshot) {
    var dbUsername = snapshot.child("name").val(); 
    if (dbUsername != null){
      // case: no username found
      taken = true;
    } 
    return taken;
  });
}

export async function verifyEmail(email){
  var emailMod = email.replace(/[.]/g, "");
  var ref = await firebase.database().ref("users/emails/" + emailMod);
  let retVal = "";
  return ref.once("value").then(function(snapshot) {
    var username = snapshot.child("username").val(); 
    if (username != null){
      // case: email in use
      retVal = username;
    } 
    return retVal;
  });
}

export async function verifyPhone(phoneNumber){
  var ref = await firebase.database().ref("users/numbers/" + phoneNumber);
  let retVal = "";
  return ref.once("value").then(function(snapshot) {
    var username = snapshot.child("username").val(); 
    if (username != null){
      // case: phone number in use
      retVal = username;
    } 
    return retVal;
  });
}

export default firebase;
