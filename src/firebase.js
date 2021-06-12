import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyBgd_LD8X_b6pLuVIOebPlwZnPWnDaE_-s",
  authDomain: "auth-development-42e35.firebaseapp.com",
  projectId: "auth-development-42e35",
  storageBucket: "auth-development-42e35.appspot.com",
  messagingSenderId: "528975674245",
  appId: "1:528975674245:web:5e14d07626d2ca1b4162ec",
});

export const auth = app.auth();
export default app;
