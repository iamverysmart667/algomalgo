// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT7WM5okRzy6ahaqEpXoBKgfSq7_XW2wg",
  authDomain: "algomalgo-580ce.firebaseapp.com",
  databaseURL: "https://algomalgo-580ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "algomalgo-580ce",
  storageBucket: "algomalgo-580ce.appspot.com",
  messagingSenderId: "230839729588",
  appId: "1:230839729588:web:35bb2ddb5504621551c6e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);