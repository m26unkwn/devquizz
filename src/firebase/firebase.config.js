import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  get,
  ref as realTimeDBRef,
  child,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firebaseRealtimeDB = getDatabase(app);

export { app, firebaseAuth, firebaseRealtimeDB, realTimeDBRef, get, child };
