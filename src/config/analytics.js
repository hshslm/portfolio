// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAevh9fQGZsXB_55pZX7Yus2UAfFCunXeM",
  authDomain: "portfolio-61f30.firebaseapp.com",
  projectId: "portfolio-61f30",
  storageBucket: "portfolio-61f30.appspot.com",
  messagingSenderId: "387769572583",
  appId: "1:387769572583:web:bcbdfae94bfdf7496f1642",
  measurementId: "G-DJ452M3WNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);