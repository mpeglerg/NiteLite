import * as firebase from 'firebase';
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyA65GZ6-_91zquNZ0i5hU46PXD6l59kEDQ",
    authDomain: "nitelite-401.firebaseapp.com",
    databaseURL: "https://nitelite-401.firebaseio.com",
    projectId: "nitelite-401",
    storageBucket: "nitelite-401.appspot.com",
    messagingSenderId: "694899504318",
    appId: "1:694899504318:web:8d8348606a9faea7011aef",
    measurementId: "G-GNP9CVG6TZ"
};

firebase.initializeApp(firebaseConfig);

 // Get a reference to the database service
 export const database = firebase.database();
 // test add something to firebase db
 export function writeUserData(email = "tbahar@lion.lmu.edu", name  = "Talia") {
     database.ref('users/' + name).set({
     email: email,
   });
   console.log("here");
 }

export default firebase

  