// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB9VNoPpk_syjd3zx44fhb3uQ4bCf4SX0",
  authDomain: "tesk-management-web-app.firebaseapp.com",
  projectId: "tesk-management-web-app",
  storageBucket: "tesk-management-web-app.appspot.com",
  messagingSenderId: "651749146033",
  appId: "1:651749146033:web:38035039f81afdad73d190",
  measurementId: "G-Q1L5VZ36RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);