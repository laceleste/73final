import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD7VWIhdkUU8Z87k2khC-EEEfcfRl3Lnak",
  authDomain: "bibliotecaeletronica-84f91.firebaseapp.com",
  projectId: "bibliotecaeletronica-84f91",
  storageBucket: "bibliotecaeletronica-84f91.appspot.com",
  messagingSenderId: "793296521450",
  appId: "1:793296521450:web:30eec8fc1e5eb8f48baf93"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
