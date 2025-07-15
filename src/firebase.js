
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQITkmEggiOPQ6BXDP3WP2WC8mZB0GQo0",
  authDomain: "challenge-d6d3c.firebaseapp.com",
  projectId: "challenge-d6d3c",
  storageBucket: "challenge-d6d3c.firebasestorage.app",
  messagingSenderId: "65737998407",
  appId: "1:65737998407:web:d64392880c3063b8ea7162",
  measurementId: "G-BEC4CX9R20"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth= firebase.auth();
export{db,auth};
