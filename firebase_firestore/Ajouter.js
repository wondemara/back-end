import { doc, setDoc } from "firebase/firestore";


const Ajouter = (data) => {
    try {    
        setDoc(doc(db, "admin", data.uid), data);
    } catch (error) {
       console.log('====================================');
       console.log(error);
       console.log('===================================='); 
    }
};

export default Ajouter;