// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd0CFWynEgnwP78SdsHNzZYh7L45kbjvI",
  authDomain: "fir-68334.firebaseapp.com",
  projectId: "fir-68334",
  storageBucket: "fir-68334.appspot.com",
  messagingSenderId: "190294236942",
  appId: "1:190294236942:web:3fe0053cf097be40c7415f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);