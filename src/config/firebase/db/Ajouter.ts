import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Ajouter = ({ data }: { data: any }) => {
    try {    
        setDoc(doc(db, "admin", data.uid), data);
    } catch (error) {
       console.log('====================================');
       console.log(error);
       console.log('===================================='); 
    }
};

export default Ajouter;