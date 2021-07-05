import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCbz6dRINIsJR7ilBlAhSN3i-DIHGAr-vg",
    authDomain: "ds-pam1-cristiano.firebaseapp.com",
    databaseURL: "https://ds-pam1-cristiano-default-rtdb.firebaseio.com",
    projectId: "ds-pam1-cristiano",
    storageBucket: "ds-pam1-cristiano.appspot.com",
    messagingSenderId: "1086416263326",
    appId: "1:1086416263326:web:78ff240f072f71df46838f",
    measurementId: "G-45K05Q2ZWN"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;
