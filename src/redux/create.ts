import { applyMiddleware } from "redux";
import { configureStore } from "@testing-library/react";
import { composeWithDevTools } from "redux-devtools-extension"

const create = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware()))

  return store;
};

export default