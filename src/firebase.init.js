// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQE-X2Ac6_kBLlX1BFHW2j0i0FCBnixp8",
  authDomain: "router-firebase-integrat-f7d2f.firebaseapp.com",
  projectId: "router-firebase-integrat-f7d2f",
  storageBucket: "router-firebase-integrat-f7d2f.appspot.com",
  messagingSenderId: "1075661566869",
  appId: "1:1075661566869:web:d139e17c96073ba3933c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app