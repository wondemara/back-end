
import { storage, ref, uploadBytes } from '../firebase_config';
import Add_data from '../firebase_firestore/Add_data';

const add_image = (data,file) => {
   try {
    const date =Date.now()
    const storageRef = ref(storage, `images/data${date}/image.jpg`);
    uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef)
        .then((url) => {
            Add_data("data",{...data,urlImage:url})
        })
      });
   } catch (error) {
    console.log(error);
   }
};

export default add_image;