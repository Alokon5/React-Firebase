// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsgnyoGKagL_cak-S8g-5HJNOWvxhCfNs",
  authDomain: "react-firebase-9ddcb.firebaseapp.com",
  projectId: "react-firebase-9ddcb",
  storageBucket: "react-firebase-9ddcb.appspot.com",
  messagingSenderId: "314679790984",
  appId: "1:314679790984:web:e131973fe4885f3605fe3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 