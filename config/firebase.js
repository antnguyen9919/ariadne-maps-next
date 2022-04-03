

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdNZGvTD98bVq5PtipZdlyWDSB7BOlqG8",
  authDomain: "ariadne-next.firebaseapp.com",
  projectId: "ariadne-next",
  storageBucket: "ariadne-next.appspot.com",
  messagingSenderId: "267467282176",
  appId: "1:267467282176:web:6be1926a3dc84c8bc905e5",
  measurementId: "G-QR27S70Z49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

 
