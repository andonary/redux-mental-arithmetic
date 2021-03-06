import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
