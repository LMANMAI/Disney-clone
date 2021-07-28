import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAwD2LMJtWgt-Y2-C7UKEZ5hrPmNHa8bbg",
  authDomain: "disney-clone-3aec6.firebaseapp.com",
  projectId: "disney-clone-3aec6",
  storageBucket: "disney-clone-3aec6.appspot.com",
  messagingSenderId: "761551625553",
  appId: "1:761551625553:web:9844cca3df6baac4c0c770",
  measurementId: "G-3Y30EWPWZ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
