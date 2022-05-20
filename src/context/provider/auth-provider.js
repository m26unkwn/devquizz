/** @format */
import { firebaseAuth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

import { createContext, useReducer, useContext } from "react";
import authReducer from "../reducer/auth-reducer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

  const getUserLogin = async (email, password) => {
    try {
      let response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      authDispatch({
        type: "ADD_AUTH_DATA",
        payload: {
          token: response.user.accessToken,
          userData: response.user.providerData[0],
        },
      });
      console.log(response.user.providerData[0]);
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserSignup = async (email, password) => {
    try {
      let response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      authDispatch({
        type: "ADD_AUTH_DATA",
        payload: {
          token: response.user.accessToken,
          userData: response.user.providerData[0],
        },
      });
      toast.success("Signup Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

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
        getUserLogin,
        getUserSignup,
        logoutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
