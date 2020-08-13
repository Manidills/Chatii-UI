import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyADzZp3ckCq4uQk3qEV5Bgzj1U2k-1UrtA",
    authDomain: "tinder-clone-f4493.firebaseapp.com",
    databaseURL: "https://tinder-clone-f4493.firebaseio.com",
    projectId: "tinder-clone-f4493",
    storageBucket: "tinder-clone-f4493.appspot.com",
    messagingSenderId: "926492213715",
    appId: "1:926492213715:web:cc1ec3d95cc23324ddef26",
    measurementId: "G-6BB7SG7PRJ",
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;