// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGwT9ZXgD_v8FQQAnj8RMXENwzFWduDI",
  authDomain: "react-cursos-b4981.firebaseapp.com",
  projectId: "react-cursos-b4981",
  storageBucket: "react-cursos-b4981.appspot.com",
  messagingSenderId: "775972054784",
  appId: "1:775972054784:web:de7a36a8ebb314b95fb5e5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);