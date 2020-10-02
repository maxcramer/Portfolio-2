import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC_wuXbHUt36ltVYsSM95gckKKN8vHT2P0",
    authDomain: "funkynana-bf9f1.firebaseapp.com",
    databaseURL: "https://funkynana-bf9f1.firebaseio.com",
    projectId: "funkynana-bf9f1",
    storageBucket: "funkynana-bf9f1.appspot.com",
    messagingSenderId: "66009035565",
    appId: "1:66009035565:web:afeba383873790307659a4",
    measurementId: "G-5FBD780DY7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();