// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClz-FxZi9QxpHLFLT1audZEjsO5LwTUZ4",
  authDomain: "fir-auth-5fc7b.firebaseapp.com",
  projectId: "fir-auth-5fc7b",
  storageBucket: "fir-auth-5fc7b.firebasestorage.app",
  messagingSenderId: "935130441435",
  appId: "1:935130441435:web:06f923fdb76edf57de4efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;