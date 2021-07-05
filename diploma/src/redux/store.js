import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { costReducer } from "./reducers/costReducer";
import { costSaga } from "./reducers/sagas";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  costReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

window.store = store;

sagaMiddleWare.run(costSaga);
