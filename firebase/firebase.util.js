// import * as firebase from 'firebase';
// import 'firebase/database';


// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORA_BUCKET,
//     messagingSenderId: process.env.MESSAGE_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASURE_ID
// };

// firebase.initializeApp(firebaseConfig);

//  // Get a reference to the database service
//  export const database = firebase.database();
//  // test add something to firebase db
//  export function writeUserData(email = "llindse3.lion.lmu.edu", name  = "Lauren") {
//      database.ref('users/' + name).set({
//      email: email,
//    });
//    console.log("here");
//  }

// export default firebase

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
 // test add something to firebase db
 export function writeUserData(email = "llindse3.lion.lmu.edu", name  = "Lauren") {
     database.ref('users/' + name).set({
     email: email,
   });
   console.log("here");
 }

export default firebase