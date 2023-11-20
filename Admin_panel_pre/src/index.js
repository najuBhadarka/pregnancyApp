import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//router
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

//store
import Store from "./redux";
import { injectStore } from "./utils/api";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
injectStore(Store);
