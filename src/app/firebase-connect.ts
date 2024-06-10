// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ecRtIFtLTI_-X_oBVRsdR2clU_Ri-bM",
  authDomain: "rede-social-365b6.firebaseapp.com",
  projectId: "rede-social-365b6",
  storageBucket: "rede-social-365b6.appspot.com",
  messagingSenderId: "622520097726",
  appId: "1:622520097726:web:15c61353c77a6353ad77ef"
};

// Initialize Firebase
export const app_firebase = initializeApp(firebaseConfig);
export const db_firestore = getFirestore(app_firebase);
export const storage_firebase = getStorage(app_firebase, "gs://rede-social-365b6.appspot.com");