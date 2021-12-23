//import firebase from 'firebase';
import { initializeApp } from "firebase/app"
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjoqsrI2TwNuEIZO0lDTgsDy4-GsMVl3o",
    authDomain: "bible-reading-web-app.firebaseapp.com",
    databaseURL: "https://bible-reading-web-app-default-rtdb.firebaseio.com",
    projectId: "bible-reading-web-app",
    storageBucket: "bible-reading-web-app.appspot.com",
    messagingSenderId: "789309343404",
    appId: "1:789309343404:web:ed1eaaad01d275db228109",
    measurementId: "G-KNQE0GRFQL"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  //export const analytics = getAnalytics(app);