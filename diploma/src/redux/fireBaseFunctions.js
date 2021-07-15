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

export async function getDatabase(base) {
  const db = await firebase.database().ref(`${base}`).once("value");
  const paymentCostDb = await db.val();
  return paymentCostDb;
}

export async function removeItemDatabase(id, base) {
  const db = await firebase.database().ref(`${base}/${id}`);
  await db.remove();
}

export async function setArrayInDatabase(arr, base) {
  const db = await firebase.database().ref(`${base}`);
  await db.set(arr);
}

export async function addElDatabase(item, base) {
  const db = await firebase.database().ref(`${base}`);
  const newPoster = await db.push(item);
}

export async function readDatabase(base) {
  const db = await await firebase.database().ref(`${base}`).once("value");
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
    console.log(error);
  }
}

export async function signOutAdmin() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
}

export async function checkOutOf() {
  const userCurrent = await firebase.auth().currentUser;
  return userCurrent ? userCurrent : "user out";
}
window.checkOutOf = checkOutOf;

export async function sendSignInLinkToEmail(email) {
  try {
    let actionCodeSettings = {
      url: `http://localhost:3000/put-reviews/finishSignUp?cartId=1234`,

      handleCodeInApp: true,
    };
    window.localStorage.setItem("emailForSignIn", email);
    await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
  } catch (er) {
    console.log(er);
  }
}
export async function singInAfterGetMail() {
  try {
    let storageEmail = window.localStorage.getItem("emailForSignIn");
    await firebase
      .auth()
      .signInWithEmailLink(storageEmail, window.location.href);
    window.localStorage.removeItem("emailForSignIn");
    checkOutOf();
  } catch (er) {
    console.log(er);
  }
}

export async function createUser(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    signOutAdmin();
  } catch (er) {
    console.log(er);
    // ..
  }
}

export async function delleteUser() {
  try {
    const user = await firebase.auth().currentUser;
    await user.delete();
    await checkOutOf();
  } catch (er) {
    console.log(er);
  }
}
