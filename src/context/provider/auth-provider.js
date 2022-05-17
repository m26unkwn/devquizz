/** @format */

import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import authReducer from "../reducer/auth-reducer";

const AuthContext = createContext();

const initialAuthState = {
  token: "",
  userDetails: "",
  authError: {
    login: "",
    signup: "",
  },
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const logoutUser = (e, navigate) => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_USER" });

    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
