import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth0Config from "./auth0Config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Auth0Config>
      <App />
    </Auth0Config>
  </BrowserRouter>
);
