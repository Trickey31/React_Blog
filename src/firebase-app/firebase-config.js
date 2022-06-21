import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJD5byx9McONoa8U5S_Jqbs8FNYkIAiho",
  authDomain: "blog-71c32.firebaseapp.com",
  projectId: "blog-71c32",
  storageBucket: "blog-71c32.appspot.com",
  messagingSenderId: "657658330544",
  appId: "1:657658330544:web:5a821c5092335e78e42a75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
