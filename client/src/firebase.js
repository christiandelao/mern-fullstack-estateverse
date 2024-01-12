// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: "mern-estateverse.firebaseapp.com",
projectId: "mern-estateverse",
storageBucket: "mern-estateverse.appspot.com",
messagingSenderId: "750085010344",
appId: "1:750085010344:web:9c7f0c8bfe6a1a3b53a39d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);