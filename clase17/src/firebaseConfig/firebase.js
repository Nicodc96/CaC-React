// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtwtQZbuifD-XQaPncyikfuiwPZf8k3A",
  authDomain: "cac-23307-ndiaz.firebaseapp.com",
  projectId: "cac-23307-ndiaz",
  storageBucket: "cac-23307-ndiaz.appspot.com",
  messagingSenderId: "1074832897697",
  appId: "1:1074832897697:web:d691bf9e21b49989c6e2e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);