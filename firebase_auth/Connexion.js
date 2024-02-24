import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";

const Connexion = (data) => {
 try {
    
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
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

export default Connexion;