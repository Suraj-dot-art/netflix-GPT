// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB65pACa_ZaMafTNLG4_m7_24SFD5fIBY0",
  authDomain: "netflix-gpt-suraj27.firebaseapp.com",
  projectId: "netflix-gpt-suraj27",
  storageBucket: "netflix-gpt-suraj27.appspot.com",
  messagingSenderId: "191830052545",
  appId: "1:191830052545:web:bf735564df1ca5c8d98e40",
  measurementId: "G-L2NZBDMYDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();