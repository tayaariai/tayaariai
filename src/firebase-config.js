
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApuxL6vidPQJfXBvHRwWrpv-ol1NXhxO0",
  authDomain: "tayaariai-7a91d.firebaseapp.com",
  projectId: "tayaariai-7a91d",
  storageBucket: "tayaariai-7a91d.firebasestorage.app",
  messagingSenderId: "144237945270",
  appId: "1:144237945270:web:6d3d405ac37fa9f0936117",
  measurementId: "G-NZ279G91BB"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
