import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/authReducer";
import { costReducer } from "./reducers/costReducer";
import { posterReducer } from "./reducers/posterReducer";
import { songsReducer } from "./reducers/songsReducer";
import { reviewsReducer } from "./reducers/reviewsReducer";
import { mediaReducer } from "./reducers/mediaReducer";
import {
  checkAdminLoginSaga,
  costSaga,
  getOutAdminSaga,
  getReviewsSaga,
  getSongListSaga,
  postersSaga,
  pushPosterSaga,
  pushSongSaga,
  removePosterSaga,
  removeSongSaga,
  sendMailAndCreateUserSaga,
  sendRevieweSaga,
  signInUserSaga,
} from "./reducers/sagas";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    costReducer,
    posterReducer,
    authReducer,
    songsReducer,
    reviewsReducer,
    mediaReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

window.store = store;

sagaMiddleWare.run(costSaga);
sagaMiddleWare.run(postersSaga);
sagaMiddleWare.run(pushPosterSaga);
sagaMiddleWare.run(removePosterSaga);
sagaMiddleWare.run(checkAdminLoginSaga);
sagaMiddleWare.run(getOutAdminSaga);
sagaMiddleWare.run(getSongListSaga);
sagaMiddleWare.run(pushSongSaga);
sagaMiddleWare.run(removeSongSaga);
sagaMiddleWare.run(getReviewsSaga);
sagaMiddleWare.run(sendMailAndCreateUserSaga);
sagaMiddleWare.run(signInUserSaga);
sagaMiddleWare.run(sendRevieweSaga);
