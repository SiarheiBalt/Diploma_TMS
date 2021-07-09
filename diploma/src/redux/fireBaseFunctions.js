import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseui = require("firebaseui");

export const InitializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBVg8nXDmrZr7925r3Dx-hjedFF2BjXYpk",
    authDomain: "diploma-4c274.firebaseapp.com",
    databaseURL: "https://diploma-4c274-default-rtdb.firebaseio.com",
    projectId: "diploma-4c274",
    storageBucket: "diploma-4c274.appspot.com",
    messagingSenderId: "889247481727",
    appId: "1:889247481727:web:4a58d9149c454f44c4644a",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

export async function getCostDatabase() {
  const db = await firebase.database().ref("groupCost").once("value");
  const paymentCostDb = await db.val();
  return paymentCostDb;
}

export async function removePosterItemDatabase(id) {
  const db = await firebase.database().ref(`posters/${id}`);
  await db.remove();
  // await newPoster.set(arr); ----Set all array in database---
  // await db.child('');
}

export async function addPosterDatabase(item) {
  const db = await firebase.database().ref("posters");
  const newPoster = await db.push(item);
}

export async function readPostersDatabase() {
  const db = await await firebase.database().ref("posters").once("value");
  const responseDb = await db.val();
  return responseDb;
}

export async function initializeAuthAdmin(login, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(`${login}`, `${password}`);

    let authResponse;
    await firebase
      .auth()
      .onAuthStateChanged((user) => user && (authResponse = user.uid));
    return authResponse;
  } catch (error) {
    return error;
  }
}

export async function signOutAdmin() {
  try {
    console.log("signOut");
    await firebase.auth().signOut();
  } catch (err) {
    return err;
  }
}

export async function checkOutOf() {
  const userCurrent = await firebase.auth().currentUser;
  userCurrent ? console.log(userCurrent) : console.log("No user is signed in.");
}
