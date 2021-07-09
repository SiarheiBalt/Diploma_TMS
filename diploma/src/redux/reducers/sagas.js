import { takeEvery, call, put } from "redux-saga/effects";
import { ACTIONS } from "./constans";
import {
  addPosterDatabase,
  checkOutOf,
  getCostDatabase,
  initializeAuthAdmin,
  readPostersDatabase,
  removePosterItemDatabase,
  signOutAdmin,
} from "../fireBaseFunctions";

function* getCostSaga(action) {
  try {
    yield put({ type: ACTIONS.GET_DATA_USERS_COST, costData: action.costData });
    const paymentCostDb = yield call(() => getCostDatabase());
    yield put({ type: ACTIONS.GET_DATA_DB_COST, paymentCostDb });
    yield put({ type: ACTIONS.SET_BAND_COST });
  } catch (er) {}
}
export function* costSaga() {
  yield takeEvery(ACTIONS.PAYMENT_BAND_COST, getCostSaga);
}

function* getPostersSaga() {
  try {
    const posters = yield call(() => readPostersDatabase());
    yield put({ type: ACTIONS.GET_POSTERS_DB_SUCCES, posters: posters });
  } catch (er) {}
}
export function* postersSaga() {
  yield takeEvery(ACTIONS.GET_POSTERS_DB, getPostersSaga);
}

function* pushPoster(action) {
  try {
    yield call(() => addPosterDatabase(action.text));
  } catch (er) {}
}
export function* pushPosterSaga() {
  yield takeEvery(ACTIONS.PUSH_POSTER, pushPoster);
}

function* removePoster(action) {
  try {
    yield call(() => removePosterItemDatabase(action.id));
    yield put({ type: ACTIONS.GET_POSTERS_DB });
  } catch (er) {}
}
export function* removePosterSaga() {
  yield takeEvery(ACTIONS.REMOVE_POSTER, removePoster);
}

function* checkAdminLogin(action) {
  try {
    const responseAuthUid = yield call(() =>
      initializeAuthAdmin(action.login, action.password)
    );
    yield put({
      type: ACTIONS.CHECK_LOGIN_PASSWORD_ADMIN_CUCCES,
      responseAuthUid,
    });
  } catch (er) {}
}
export function* checkAdminLoginSaga() {
  yield takeEvery(ACTIONS.CHECK_LOGIN_PASSWORD_ADMIN, checkAdminLogin);
}

function* getOutAdmin() {
  try {
    yield call(() => signOutAdmin());
    yield put({ type: ACTIONS.SIGN_OUT_ADMIN_SUCCES });
    yield call(() => checkOutOf());
  } catch (er) {
    console.log(er);
  }
}

export function* getOutAdminSaga() {
  yield takeEvery(ACTIONS.SIGN_OUT_ADMIN, getOutAdmin);
}
