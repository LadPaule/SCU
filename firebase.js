// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4eL95ti8veB_HzetaTaVxvzFtJ4dX6Jc",
  authDomain: "smile-charity-uganda-website.firebaseapp.com",
  projectId: "smile-charity-uganda-website",
  storageBucket: "smile-charity-uganda-website.appspot.com",
  messagingSenderId: "335294594128",
  appId: "1:335294594128:web:08c342fda2d641ff97a555"
};
// facebook redirect https://smile-charity-uganda-website.firebaseapp.com/__/auth/handler
// Initialize Firebase
const app = initializeApp(firebaseConfig);