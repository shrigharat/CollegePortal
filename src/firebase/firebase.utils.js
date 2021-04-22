import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAYnwOOnZ1TY2a7ophhwL3uBkaRfwCkesU",
  authDomain: "college-portal-58217.firebaseapp.com",
  projectId: "college-portal-58217",
  storageBucket: "college-portal-58217.appspot.com",
  messagingSenderId: "275734283888",
  appId: "1:275734283888:web:fd4c0898a1fbb1e306d6b5"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storageRef = firebase.storage().ref();