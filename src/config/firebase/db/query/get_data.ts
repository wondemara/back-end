import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const get_data = async ({ chemin }: { chemin: string }) => {
  const data: any = [];

  try {
    const q = await collection(db, chemin);
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });
  } catch (error) {
    console.log(error);
  }
  return data;
};
export default get_data;
