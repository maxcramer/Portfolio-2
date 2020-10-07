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
  const db = firebase.firestore();


  export const getPersonalProjects = async () => {
      const {docs} = await db
      .collection('PersonalProjects')
      .get();
      const personalProjects = docs.map(docs => {
          return {
              ...docs.data(),
              _id: docs.id
          }
      })
      return personalProjects
  };

  export const getWorks = async () => {
      const {docs} = await db
      .collection("Work")
      .get();
      const work = docs.map(docs => {
          return {
              ...docs.data(),
              _id: docs.id
          }
      })
      return work
  };

  export const getPositions = async () => {
      const {docs} = await db
      .collection("Positions")
      .orderBy('StartDate', 'desc')
      .get();
      const pos = docs.map(docs => {
        return {
            ...docs.data(),
            _id: docs.id
        }
    })
    return pos
  }