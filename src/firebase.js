import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3w3oVg-alWW8DF8g5TiTVgPhTUU1h6XU",
    authDomain: "dispark-87315.firebaseapp.com",
    projectId: "dispark-87315",
    storageBucket: "dispark-87315.appspot.com",
    messagingSenderId: "1034044287953",
    appId: "1:1034044287953:web:18985ecafd1a201713cef0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider, db }