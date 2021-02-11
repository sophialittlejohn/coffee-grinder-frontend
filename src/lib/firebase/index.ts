import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3t2CP2MTJ9o7scui8-QVEqdsttMB_-nQ",
  authDomain: "coffee-grindr.firebaseapp.com",
  databaseURL: "https://coffee-grindr.firebaseio.com",
  projectId: "coffee-grindr",
  storageBucket: "coffee-grindr.appspot.com",
  messagingSenderId: "1047443640901",
  appId: "1:1047443640901:web:ddbbda7e11b50f6604c92c",
  measurementId: "G-CTHZ2NBTPJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
