/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import {
  VideoProvider,
  AuthProvider,
  ToastProvider,
  ScrollToTopProvider,
} from "./context";

// Call make Server

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <AuthProvider>
          <ToastProvider>
            <ScrollToTopProvider>
              <App />
            </ScrollToTopProvider>
          </ToastProvider>
        </AuthProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
