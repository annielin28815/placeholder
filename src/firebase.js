// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4DHfWmNOo8UASDpfKp4K_zKgJfVrC0mI",
  authDomain: "placeholder-6a15c.firebaseapp.com",
  projectId: "placeholder-6a15c",
  storageBucket: "placeholder-6a15c.appspot.com",
  messagingSenderId: "816560416669",
  appId: "1:816560416669:web:355208c204120ccad3f174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
