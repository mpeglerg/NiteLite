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
} else {
  firebase.app(); // if already initialized, use that one
}
// Get a reference to the database service
export const database = firebase.database();
export function registerNewUser(object) {
  console.log("OBJECT", object);
  let phoneNumber = object.phoneNumber;
  let email = object.email;
  let username = object.username;
  // addNumber(phoneNumber, username);
  // addEmail(email, username);
  // let emergencyContact = [
  //   object.emergencyNumber[0].name,
  //   object.emergencyNumber[1].number,
  // ];
  console.log("DATABASE SET", {
    name: username,
    email: email,
    password: object.password,
    phoneNumber: phoneNumber,
    crimeRates: object.crimeRates,
    walkScore: object.walkScore,
    lighting: object.lighting,
    construction: object.construction,
    safeLocations: object.safeSpots,
    emergencyNumber: object.emergencyNumber,
  });

  database.ref("users/" + username).set({
    name: username,
    email: email,
    password: object.password,
    phoneNumber: phoneNumber,
    crimeRates: object.crimeRates,
    walkScore: object.walkScore,
    lighting: object.lighting,
    construction: object.construction,
    safeLocations: object.safeSpots,
    emergencyNumber: object.emergencyNumber,
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

export async function verifyLogin(username, password) {
  var ref = await firebase.database().ref("users/" + username);
  let retVal = 0;
  return ref.once("value").then(function (snapshot) {
    var dbUsername = snapshot.child("name").val();
    var dbPassword = snapshot.child("password").val();
    if (username === dbUsername && password === dbPassword) {
      // case: auth granted
      retVal = 1;
    } else if (dbUsername == null) {
      // case: username not found
      retVal = 2;
    } else {
      // case: incorrect password
      retVal = 3;
    }
    return retVal;
  });
}

export async function verifyUsername(username) {
  var ref = await firebase.database().ref("users/" + username);
  let taken = false;
  return ref.once("value").then(function (snapshot) {
    var dbUsername = snapshot.child("name").val();
    if (dbUsername != null) {
      // case: no username found
      taken = true;
    }
    return taken;
  });
}
// TODO: instead of verifying with information in firebase, can we set it up with Google Accounts?
export async function verifyEmail(email) {
  var emailMod = email.replace(/[.]/g, "");
  var ref = await firebase.database().ref("users/emails/" + emailMod);
  let retVal = "";
  return ref.once("value").then(function (snapshot) {
    var username = snapshot.child("username").val();
    if (username != null) {
      // case: email in use
      retVal = username;
    }
    return retVal;
  });
}
// TODO: if changing verification to Google Accounts, do we need the user phone number?
export async function verifyPhone(phoneNumber) {
  var ref = await firebase.database().ref("users/numbers/" + phoneNumber);
  let retVal = "";
  return ref.once("value").then(function (snapshot) {
    var username = snapshot.child("username").val();
    if (username != null) {
      // case: phone number in use
      retVal = username;
    }
    return retVal;
  });
}

export async function loadUserData(userName) {
  var ref = await firebase.database().ref("users/" + userName);
  return ref.once("value").then(function (snapshot) {
    var crimeRates = snapshot.child("crimeRates").val();
    var construction = snapshot.child("construction").val();
    var lighting = snapshot.child("lighting").val();
    var walkScore = snapshot.child("walkScore").val();
    var emergencyNumber = snapshot.child("emergencyNumber").val();
    var safeLocations = snapshot.child("safeLocations").val();
    let userData = {
      construction,
      crimeRates,
      lighting,
      walkScore,
      emergencyNumber,
      safeLocations,
    };
    return userData;
  });
}

export async function addRecentRoute(username, destination) {
  let ref = await firebase.database().ref("users/" + username);
  let allDestinations = [destination];
  await ref.once("value").then(function (snapshot) {
    let previousDestinations = snapshot.child("recentRoutes").val();
    console.log("previous destinations: ", previousDestinations);
    if (previousDestinations == null) {
      allDestinations[0] = destination;
    } else {
      previousDestinations.push(destination);
      allDestinations = previousDestinations;
    }
    console.log("all destinations: ", allDestinations);

    var updates = {};
    updates["users/" + username + "/recentRoutes"] = allDestinations;
    return firebase.database().ref().update(updates);
  });
}

export async function loadRecentRoutes(userName) {
  let ref = await firebase.database().ref("users/" + userName);

  return ref.once("value").then(function (snapshot) {
    let recents = snapshot.child("recentRoutes").val();
    if (recents == null) {
      return [];
    }
    return recents.length > 5
      ? recents.slice(recents.length - 5, recents.length).reverse()
      : recents.reverse();
  });
}

export async function addSafeSpot(username, safeSpot) {
  let ref = await firebase.database().ref("users/" + username);
  let allSafeSpots = [];
  await ref.once("value").then(function (snapshot) {
    let previousSafeSpots = snapshot.child("safeLocations").val();
    if (previousSafeSpots == null) {
      allSafeSpots[0] = safeSpot;
    } else {
      previousSafeSpots.push(safeSpot);
      allSafeSpots = previousSafeSpots;
    }
    var updates = {};
    updates["users/" + username + "/safeLocations"] = allSafeSpots;
    return firebase.database().ref().update(updates);
  });
}

export async function deleteSafeSpot(username, safeSpot) {
  let ref = await firebase.database().ref("users/" + username);
  await ref.once("value").then(function (snapshot) {
    let previousSafeSpots = snapshot.child("safeLocations").val();
    let newSafeSpots = previousSafeSpots.filter((spot) => {
      return safeSpot.name !== spot.name;
      //  && safeSpot.address !== spot.address;
    });

    var updates = {};
    updates["users/" + username + "/safeLocations"] = newSafeSpots;
    return firebase.database().ref().update(updates);
  });
}

export async function editSafeSpot(username, originalSafeSpot, newSafeSpot) {
  let ref = await firebase.database().ref("users/" + username);
  await ref.once("value").then(function (snapshot) {
    let previousSafeSpots = snapshot.child("safeLocations").val();
    let newSafeSpots = previousSafeSpots.map((safeSpot) => {
      return safeSpot.name === originalSafeSpot.name
        ? {
            name: newSafeSpot.name !== "" ? newSafeSpot.name : safeSpot.name,
            address:
              newSafeSpot.address !== ""
                ? newSafeSpot.address
                : safeSpot.address,
          }
        : safeSpot;
    });
    console.log("newSafeSpots", newSafeSpots);
    var updates = {};
    updates["users/" + username + "/safeLocations"] = newSafeSpots;
    return firebase.database().ref().update(updates);
  });
}
export default firebase;
