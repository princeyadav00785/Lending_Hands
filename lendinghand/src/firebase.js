import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTVLa641PuVJxxpITm2O5FRC859-u3XEY",
  authDomain: "lending-hands-63491.firebaseapp.com",
  projectId: "lending-hands-63491",
  storageBucket: "lending-hands-63491.appspot.com",
  messagingSenderId: "753760931567",
  appId: "1:753760931567:web:5c6c68634171613b63d51a",
  measurementId: "G-TXHYF5K8RS",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
