import firebase from 'firebase';
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyAwcpknlSQgq_yzgu5bcVWrDyQ0nJ5xdRI",
  authDomain: "accesssystemsfb.firebaseapp.com",
  databaseURL: "https://accesssystemsfb.firebaseio.com",
  projectId: "accesssystemsfb",
  storageBucket: "accesssystemsfb.appspot.com",
  messagingSenderId: "811391154459"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;