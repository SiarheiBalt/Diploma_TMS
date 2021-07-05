import { takeEvery, call, put } from "redux-saga/effects";
import { ACTIONS } from "./constans";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

function* getCostSaga(action) {
  try {
    yield put({ type: ACTIONS.GET_DATA_USERS_COST, costData: action.costData });
    const db = yield call(() =>
      firebase.database().ref("groupCost").once("value")
    );
    const paymentCostDb = yield call(() => db.val());
    yield put({ type: ACTIONS.GET_DATA_DB_COST, paymentCostDb });
    yield put({ type: ACTIONS.SET_BAND_COST });
  } catch (er) {}
}

export function* costSaga() {
  yield takeEvery(ACTIONS.PAYMENT_BAND_COST, getCostSaga);
}
