// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKLO8OkbgpoE0mqZsG-Ou5Mt1GMQ6_MXM",
  authDomain: "tella-ng.firebaseapp.com",
  projectId: "tella-ng",
  storageBucket: "tella-ng.firebasestorage.app",
  messagingSenderId: "13902626915",
  appId: "1:13902626915:web:9d5b5b7fd4c5131391b856",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };
