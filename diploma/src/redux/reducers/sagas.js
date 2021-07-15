import { takeEvery, call, put, actionChannel } from "redux-saga/effects";
import { ACTIONS } from "./constans";
import {
  addElDatabase,
  checkOutOf,
  getDatabase,
  initializeAuthAdmin,
  readDatabase,
  removeItemDatabase,
  signOutAdmin,
  createUser,
  sendSignInLinkToEmail,
  singInAfterGetMail,
  delleteUser,
} from "../fireBaseFunctions";

function* getCostSaga(action) {
  try {
    yield put({ type: ACTIONS.GET_DATA_USERS_COST, costData: action.costData });
    const paymentCostDb = yield call(() => getDatabase("groupCost"));
    yield put({ type: ACTIONS.GET_DATA_DB_COST, paymentCostDb });
    yield put({ type: ACTIONS.SET_BAND_COST });
  } catch (er) {}
}
export function* costSaga() {
  yield takeEvery(ACTIONS.PAYMENT_BAND_COST, getCostSaga);
}

function* getPostersSaga() {
  try {
    const posters = yield call(() => readDatabase("posters"));
    yield put({ type: ACTIONS.GET_POSTERS_DB_SUCCES, posters: posters });
  } catch (er) {}
}
export function* postersSaga() {
  yield takeEvery(ACTIONS.GET_POSTERS_DB, getPostersSaga);
}

function* pushPoster(action) {
  try {
    yield call(() => addElDatabase(action.text, "posters"));
  } catch (er) {}
}
export function* pushPosterSaga() {
  yield takeEvery(ACTIONS.PUSH_POSTER, pushPoster);
}

function* removePoster(action) {
  try {
    yield call(() => removeItemDatabase(action.id, "posters"));
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

function* getSongList() {
  try {
    const response = yield call(() => getDatabase("songList"));
    yield put({ type: ACTIONS.GET_DATA_DB_SONGS_SUCCES, songs: response });
  } catch (er) {
    console.log(er);
  }
}
export function* getSongListSaga() {
  yield takeEvery(ACTIONS.GET_DATA_DB_SONGS, getSongList);
}

function* pushSong(action) {
  try {
    yield call(() =>
      addElDatabase(action.song.song, `songList/${action.song.selected}`)
    );
  } catch (er) {
    console.log(er);
  }
}
export function* pushSongSaga() {
  yield takeEvery(ACTIONS.PUSH_SONG, pushSong);
}

function* removeSong(actions) {
  console.log(`songList/${actions.song.type}`);
  try {
    yield call(() =>
      removeItemDatabase(actions.song.songId, `songList/${actions.song.type}`)
    );
    yield put({ type: ACTIONS.GET_DATA_DB_SONGS });
  } catch (er) {
    console.log(er);
  }
}
export function* removeSongSaga() {
  yield takeEvery(ACTIONS.REMOVE_SONG, removeSong);
}

function* getReviews() {
  const reviewes = yield call(() => getDatabase("reviewes"));
  yield put({ type: ACTIONS.GET_REVIEWS_SUCCES, reviewes });
}
export function* getReviewsSaga() {
  yield takeEvery(ACTIONS.GET_REVIEWS, getReviews);
}

function* sendMailAndCreateUser(action) {
  yield console.log(action.email);
  yield call(() => createUser(action.email, "123456"));
  yield call(() => sendSignInLinkToEmail(action.email));
}
export function* sendMailAndCreateUserSaga() {
  yield takeEvery(ACTIONS.SEND_EMAIL, sendMailAndCreateUser);
}

function* sendReviewe(action) {
  let obj = yield { name: action.name, text: action.text, time: action.date };
  yield call(() => addElDatabase(obj, "reviewes"));
  yield call(() => delleteUser());
  yield put({ type: ACTIONS.REVIEWE_NOTALLOWED_ACCES });
}
export function* sendRevieweSaga() {
  yield takeEvery(ACTIONS.SEND_REVIEWE, sendReviewe);
}

function* signInUser() {
  yield call(() => singInAfterGetMail());
  const checkUser = yield call(() => checkOutOf());
  yield checkUser === "user out"
    ? put({ type: ACTIONS.REVIEWE_NOTALLOWED_ACCES })
    : put({ type: ACTIONS.REVIEWE_ACCES });
}
export function* signInUserSaga() {
  yield takeEvery(ACTIONS.SIGN_USER, signInUser);
}
