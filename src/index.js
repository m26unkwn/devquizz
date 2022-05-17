/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  ToastProvider,
  ScrollToTopProvider,
  QuizProvider,
} from "./context";

// Call make Server

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <AuthProvider>
          <ToastProvider>
            <ScrollToTopProvider>
              <App />
            </ScrollToTopProvider>
          </ToastProvider>
        </AuthProvider>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
