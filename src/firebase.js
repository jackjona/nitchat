import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB8iOtCICmzeHWCYRqZVx4s6tA6YD3UFQM",
    authDomain: "nitchat-app.firebaseapp.com",
    projectId: "nitchat-app",
    storageBucket: "nitchat-app.appspot.com",
    messagingSenderId: "95557661164",
    appId: "1:95557661164:web:8408688c997673f2e390c9"
  }).auth();