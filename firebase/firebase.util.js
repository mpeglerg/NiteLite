import * as firebase from 'firebase';
import 'firebase/database'
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: "https://nitelite-401.firebaseio.com",
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORA_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURE_ID
};
firebase.initializeApp(firebaseConfig);
 // Get a reference to the database service
 export const database = firebase.database();

 export function registerNewUser(name, email, password, phoneNumber) {
  database.ref('users/' + phoneNumber).set({
    name: name,
    email: email,
    password: password,
    phoneNumber: phoneNumber
});
}

export function setUserPreferences(userKey, busySidewalks, openBusinesses, policeStations) {
  database.ref('users/' + userKey).set({
    busySidewalks: busySidewalks,
    openBusinesses: openBusinesses,
    policeStations: policeStations,
});
}

export function safeSpots(userKey, safeLocations) {
  database.ref('users/' + userKey).set({
    safeLocations: safeLocations,
});
}

export function setEergencyContact(userKey, name, phoneNumber) {
  emergencyContact = [name, phoneNumber]
  database.ref('users/' + userKey).set({
    emergencyNumber: emergencyContact,
});
}
export default firebase