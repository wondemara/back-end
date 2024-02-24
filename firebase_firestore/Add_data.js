import { collection, addDoc ,updateDoc} from "firebase/firestore"; 

const Add_data =async (chemin,data) => {
    try {
        const docRef =await addDoc(collection(db, chemin), data);
        updateDoc(doc(db, chemin, docRef.id), {
            uidData :docRef.id,
          });
    } catch (error) {
        
    }
};

export default Add_data;