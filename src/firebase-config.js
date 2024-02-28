// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJxcXa-aaB0htqHIu-xqhtAj3OL7EvaHc",
  authDomain: "crime-patrol-e8557.firebaseapp.com",
  projectId: "crime-patrol-e8557",
  storageBucket: "crime-patrol-e8557.appspot.com",
  messagingSenderId: "813352277925",
  appId: "1:813352277925:web:becb8010dce8395a98ba4c",
  measurementId: "G-QWFJMZHDXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();