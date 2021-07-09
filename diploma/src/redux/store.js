import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers/authReducer";
import { costReducer } from "./reducers/costReducer";
import { posterReducer } from "./reducers/posterReducer";
import {
  checkAdminLoginSaga,
  costSaga,
  getOutAdminSaga,
  postersSaga,
  pushPosterSaga,
  removePosterSaga,
} from "./reducers/sagas";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ costReducer, posterReducer, authReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

window.store = store;

sagaMiddleWare.run(costSaga);
sagaMiddleWare.run(postersSaga);
sagaMiddleWare.run(pushPosterSaga);
sagaMiddleWare.run(removePosterSaga);
sagaMiddleWare.run(checkAdminLoginSaga);
sagaMiddleWare.run(getOutAdminSaga);
