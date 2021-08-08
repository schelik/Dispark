import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPd6ZCEkkODEAWG19GrpbPS3sdQ9syvyM",
    authDomain: "slack-clone-71682.firebaseapp.com",
    projectId: "slack-clone-71682",
    storageBucket: "slack-clone-71682.appspot.com",
    messagingSenderId: "533361541843",
    appId: "1:533361541843:web:ab234e4743acfa23d70a26"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider, db }