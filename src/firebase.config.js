// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCJB88sNuztx98QWUYMwz3pPh5KylXTL-s",
  authDomain: "learnreact-2c6b0.firebaseapp.com",
  projectId: "learnreact-2c6b0",
  storageBucket: "learnreact-2c6b0.appspot.com",
  messagingSenderId: "577326298186",
  appId: "1:577326298186:web:e1651730d9d059c33922b3",
  measurementId: "G-MYEQZWK1B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
