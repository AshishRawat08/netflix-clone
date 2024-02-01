import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC2uIcdtRSaMNfoW8FLPZyDPS68dpk9Hjk",
  authDomain: "react-netflix-clone-4ed0c.firebaseapp.com",
  projectId: "react-netflix-clone-4ed0c",
  storageBucket: "react-netflix-clone-4ed0c.appspot.com",
  messagingSenderId: "928211322106",
  appId: "1:928211322106:web:d49dc780e01eb15f8b3543",
  measurementId: "G-DWYHLE0MJE",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

