import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

export const initialiseFirebaseService = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBTPDi5h5HbpvvG3k77fv6RI7NW2U_ws1E",
    authDomain: "bitbybit-tutorials.firebaseapp.com",
    projectId: "bitbybit-tutorials",
    storageBucket: "bitbybit-tutorials.appspot.com",
    messagingSenderId: "481344077079",
    appId: "1:481344077079:web:a9c91a469d459b52824b52",
    measurementId: "G-QX7Z3QTXPH",
  };

  const app = initializeApp(firebaseConfig);

  // const analytics = getAnalytics(app);
  const storage = getStorage(app);

  return {
    // analytics,
    storage,
  };
};
