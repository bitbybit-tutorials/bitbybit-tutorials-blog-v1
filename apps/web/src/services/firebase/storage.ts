import { ref, getStorage, getDownloadURL } from "firebase/storage";

// Create a storage reference from our storage service
export const getStorageImageRef = (path: string) => ref(getStorage(), path);

// Download image
export const getImageUrl = async (storageRef): Promise<string | any> => {
  try {
    return await getDownloadURL(storageRef);
  } catch (error: any) {
    console.log(error);
    switch (error.code) {
      case "storage/object-not-found":
        // File does not exist
        return error;
        break;
      case "storage/unauthorized":
        // User does not have permission to access the object
        return error;
        break;
      case "storage/cancelled":
        // User cancelled the upload
        return error;
        break;
      // ...
      case "storage/unknown":
        // Unknown error occurred, inspect the server response
        return error;
        break;
    }
  }
};
