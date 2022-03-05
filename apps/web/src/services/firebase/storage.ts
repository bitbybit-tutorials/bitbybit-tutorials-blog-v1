import {
  ref,
  getStorage,
  getDownloadURL,
  StorageReference,
} from "firebase/storage";

import { firebaseApp } from "./initialise-service";

const storage = getStorage(firebaseApp);

// Create a storage reference from our storage service
export const getStorageImageRef = (path: string) => ref(storage, path);

export const getDirectImageUrl = ({
  accessToken,
  bucket = process.env.NEXT_PUBLIC_FIREBASE_DEFAULT_STORAGE_BUCKET,
  folder,
  imageName,
}: {
  accessToken?: string;
  bucket?: string | undefined;
  folder: string;
  imageName: string;
}) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
    `${folder}/${imageName}`
  )}?alt=media${accessToken ? `&token=${accessToken}` : ""}`;
};

export const getSdkImageUrl = async (
  storageRef: StorageReference
): Promise<string | any> => {
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
