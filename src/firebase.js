import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBZOWpTrrIg9W6ZVD2I_8t-PN0zqTJA654",
  authDomain: "wattube08.firebaseapp.com",
  projectId: "wattube08",
  storageBucket: "wattube08.appspot.com",
  messagingSenderId: "10471655782",
  appId: "1:10471655782:web:497514e0ec0ffeb4fa20a7",
});

export const auth = app.auth();
export default app;
