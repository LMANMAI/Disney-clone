import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwD2LMJtWgt-Y2-C7UKEZ5hrPmNHa8bbg",
  authDomain: "disney-clone-3aec6.firebaseapp.com",
  projectId: "disney-clone-3aec6",
  storageBucket: "disney-clone-3aec6.appspot.com",
  messagingSenderId: "761551625553",
  appId: "1:761551625553:web:9844cca3df6baac4c0c770",
  measurementId: "G-3Y30EWPWZ3",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

setPersistence(auth, browserLocalPersistence);

export {
  auth,
  storage,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
export default db;
