import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const add_image = async (imageFile: File) => {
  try {
    const date = Date.now();
    const storageRef = ref(storage, `images/data${date}/image.jpg`);
    const imageUrl = uploadBytes(storageRef, imageFile).then((snapshot) => {
      const url = getDownloadURL(storageRef).then(async (url) => {
        return url;
      });

      return url;
    });
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

export default add_image;
