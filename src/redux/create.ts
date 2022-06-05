import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    // composeWithDevtools, thunk automatically activate
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    })
    sagaMiddleware.run(rootSaga)

  return store;
};

export default create;