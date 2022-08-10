import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "urql";
import { client } from "./urql/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
