// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwliXtIJDLH1XvKunxeMcjDSIGT5l0DA",
  authDomain: "instagram-2218a.firebaseapp.com",
  projectId: "instagram-2218a",
  storageBucket: "instagram-2218a.appspot.com",
  messagingSenderId: "1002448262107",
  appId: "1:1002448262107:web:7ee50da82d6e0b78c0cdfe"
};

// Initialize Firebase
const app = !getApps().length ?
initializeApp(firebaseConfig)
: getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };