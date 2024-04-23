// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqz7LnPv_pKUlg5mTUXuh7PMYASYU9FQg",
  authDomain: "clone-frontend-f0e56.firebaseapp.com",
  projectId: "clone-frontend-f0e56",
  storageBucket: "clone-frontend-f0e56.appspot.com",
  messagingSenderId: "493361816276",
  appId: "1:493361816276:web:121d6f80f35e77f3009141",
  measurementId: "G-2CQ6QMXXNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
