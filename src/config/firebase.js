// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDXv3riaPdSabGJfzC9NHa-vpFwM5ij5AI",
  authDomain: "prova1mobile.firebaseapp.com",
  projectId: "prova1mobile",
  storageBucket: "prova1mobile.appspot.com",
  messagingSenderId: "441343810809",
  appId: "1:441343810809:web:1192d2ddb9a09f8fd4d628",
  measurementId: "G-4NSSTKH4TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;
