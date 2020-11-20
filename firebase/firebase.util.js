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
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
export const database = firebase.database();

export function registerNewUser(object) {
  //get the number for ref
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

export async function verifyLogin(username, password) {
  var db = firebase.database().ref("users/" + username);
  db.on("value", function (snapshot) {
    if (snapshot.exists()) {
      console.log("SNAPSHOT", snapshot);
      // console.log("SNAPSHOT", snapshot.val().email);
      if (snapshot.val().password != password) {
        console.log("SHOULD RETURN 0");

        new Promise(function (resolve, reject) {
          console.log("HELLO?");
          resolve(0);
        }).then(function (result) {
          // (**)

          alert(result); // 1
          return result;
        });
        // return 0;
      }
      console.log("SHOULD RETURN 2");

      return new Promise(function (resolve, reject) {
        resolve(2);
      });
    } else {
      console.log("SHOULD RETURN 1");

      return new Promise(function (resolve, reject) {
        resolve(1);
      });
      // return 1;
    }
  });
}

export default firebase;
