// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpIt1qkfwQg52nagPtXwbPKsq4zGADedw",
  authDomain: "pallhotellet.firebaseapp.com",
  projectId: "pallhotellet",
  storageBucket: "pallhotellet.appspot.com",
  messagingSenderId: "1081420469486",
  appId: "1:1081420469486:web:296460767e3748a4030fff",
  measurementId: "G-6777097W1H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);