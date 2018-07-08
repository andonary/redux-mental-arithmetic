import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
