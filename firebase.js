import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAeribBY-B5jR7Y49V_7Ifh5mc4XLX9pgI",
    authDomain: "nitchat-official.firebaseapp.com",
    projectId: "nitchat-official",
    storageBucket: "nitchat-official.appspot.com",
    messagingSenderId: "972733488403",
    appId: "1:972733488403:web:0620c706539e108b26cee6"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db,auth};