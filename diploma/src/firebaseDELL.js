import firebase from "firebase/app";
import "firebase/firestore";

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
