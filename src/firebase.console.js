import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA16pMDAfrdZxuPSf0cx-9CACBMoXObMEc",
  authDomain: "login-user-e56d1.firebaseapp.com",
  projectId: "login-user-e56d1",
  storageBucket: "login-user-e56d1.appspot.com",
  messagingSenderId: "501901147819",
  appId: "1:501901147819:web:44d24285b3a728d43e01ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;