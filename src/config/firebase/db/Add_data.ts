import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Add_data = async ({ chemin, data }: { chemin: string; data: any }) => {
  try {
    const docRef = await addDoc(collection(db, chemin), data);
    updateDoc(doc(db, chemin, docRef.id), {
      uidData: docRef.id,
    });
  } catch (error) {}
};

export default Add_data;
