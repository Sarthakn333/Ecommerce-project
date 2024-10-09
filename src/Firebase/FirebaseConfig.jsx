// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARCWyoUXR6T33OgX4-nD2VRxxAYsjHTc",
  authDomain: "myapp-sarthakn333.firebaseapp.com",
  projectId: "myapp-sarthakn333",
  storageBucket: "myapp-sarthakn333.appspot.com",
  messagingSenderId: "913430708930",
  appId: "1:913430708930:web:e7df46ac72d1103b67b15b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;