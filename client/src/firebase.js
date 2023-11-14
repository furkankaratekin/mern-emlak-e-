// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-emlak.firebaseapp.com",
  projectId: "mern-emlak",
  storageBucket: "mern-emlak.appspot.com",
  messagingSenderId: "992114813020",
  appId: "1:992114813020:web:ae842ff04b9491519b1e99",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
