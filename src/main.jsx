import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PlayerContextProvider from "./context/playerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </Router>
  </React.StrictMode>
);
