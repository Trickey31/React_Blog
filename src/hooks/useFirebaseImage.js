import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

export default function useFirebaseImage(getValues, setValue) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  if (!getValues || !setValue) return;
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        console.log("Error");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  const handleDeleteImage = () => {
    const storage = getStorage();
    const imageRef = ref(storage, "images/" + getValues("image_name"));
    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        // File deleted successfully
        console.log("Delete image successfully!!");
        setImage("");
        setProgress(0);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
        console.log("Can not delete image");
      });
  };
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
  };
  return {
    image,
    progress,
    handleUploadImage,
    handleDeleteImage,
    handleSelectImage,
  };
}
