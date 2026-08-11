



import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewx-1282b.firebaseapp.com",
  projectId: "interviewx-1282b",
  storageBucket: "interviewx-1282b.firebasestorage.app",
  messagingSenderId: "921789288619",
  appId: "1:921789288619:web:8bfad01edbad12302367ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}