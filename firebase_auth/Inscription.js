import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";
import Ajouter from "../firebase_firestore/Ajouter";


const Inscription = (data) => {
    
   try {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
     Ajouter({...data,uid:userCredential.user.uid})
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
   } catch (error) {
    console.log(error);
   }
};

export default Inscription;