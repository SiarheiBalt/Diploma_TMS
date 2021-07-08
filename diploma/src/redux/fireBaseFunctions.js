import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

export async function getCostDatabase() {
  const db = await firebase.database().ref("groupCost").once("value");
  const paymentCostDb = await db.val();
  return paymentCostDb;
}

export async function removePosterItemDatabase(id) {
  console.log(id);
  const db = await firebase.database().ref(`posters/${id}`);
  await db.remove();
  // await newPoster.set(arr);
  // let arr = "г. Минск, ул. Интернациональная 25а, Honky Tonk, суббота 10 июля  ";
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
