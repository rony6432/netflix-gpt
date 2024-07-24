// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCop28IOt6dhgY8qp1Ec_kixA8P770CJUY",
  authDomain: "netflix-4f1e5.firebaseapp.com",
  projectId: "netflix-4f1e5",
  storageBucket: "netflix-4f1e5.appspot.com",
  messagingSenderId: "498152262351",
  appId: "1:498152262351:web:54079b2d919d0348ec45ba",
  measurementId: "G-4J8LJL07V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();