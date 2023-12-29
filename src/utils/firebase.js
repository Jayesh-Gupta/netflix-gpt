// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIsc3c0VtWQORWVtsgSugXvK6xQ4OWgtc",
  authDomain: "netflix-gpt-2d9cc.firebaseapp.com",
  projectId: "netflix-gpt-2d9cc",
  storageBucket: "netflix-gpt-2d9cc.appspot.com",
  messagingSenderId: "608077484306",
  appId: "1:608077484306:web:6fa93b1abfdcca91c9e3cb",
  measurementId: "G-9JV461PPGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);