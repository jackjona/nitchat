import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC5SKKJ3ZgWTy2LJ4cydgOqebp4oNgRaQ4",
    authDomain: "jackchatapp.firebaseapp.com",
    projectId: "jackchatapp",
    storageBucket: "jackchatapp.appspot.com",
    messagingSenderId: "318273724083",
    appId: "1:318273724083:web:f414b0fae6648ae6fbdac6"
  }).auth();