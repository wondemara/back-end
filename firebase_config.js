// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEgpqchKLiPw1HHwST71fS_UxiX1qFujo",
  authDomain: "dormz-4f49c.firebaseapp.com",
  projectId: "dormz-4f49c",
  storageBucket: "dormz-4f49c.appspot.com",
  messagingSenderId:"541611354535",
  appId: "1:541611354535:web:569b068b8c2b48cbfd6e82",
  measurementId: "G-W11D7W601Q"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
 export const storage = getStorage(app);