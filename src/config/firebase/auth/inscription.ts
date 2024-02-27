import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Ajouter from "../db/Ajouter";

const Inscription = ({ data }: { data: any }) => {
  try {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        Ajouter({data : { data, "uid": userCredential.user.uid }});
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
