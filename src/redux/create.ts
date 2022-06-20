import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import TokenService from "../services/TokenService";

const create = () => {
  const token = TokenService.get();
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    // composeWithDevtools, thunk automatically activate
    reducer(history),
    {auth: {
      token,
      loading: false,
      error: null;
    }}
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
})
    sagaMiddleware.run(rootSaga)

  return store;
};

export default create;