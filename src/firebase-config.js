// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-p5dHuxGMTNeU8-oIfBj9qKods5ZUhjQ",
  authDomain: "react-crud-e2194.firebaseapp.com",
  projectId: "react-crud-e2194",
  storageBucket: "react-crud-e2194.appspot.com",
  messagingSenderId: "74839517413",
  appId: "1:74839517413:web:add0b558025fdd8cffcc0c",
  measurementId: "G-TGQJ59HN41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
