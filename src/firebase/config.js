import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq3RBLgJ6GJtMf19400GtQoXbWcnHOHW4",
  authDomain: "geering-up.firebaseapp.com",
  projectId: "geering-up",
  storageBucket: "geering-up.appspot.com",
  messagingSenderId: "695430483998",
  appId: "1:695430483998:web:af3b57573164c82b619e0f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{projectFirestore, timestamp}
