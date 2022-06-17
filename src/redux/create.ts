import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    // composeWithDevtools, thunk automatically activate
    reducer(history),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
  })
    sagaMiddleware.run(rootSaga)

  return store;
};

export default create;