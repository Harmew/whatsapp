import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRjb6jpr8NauG-VXDN91ENci_C7SElQ6Y",
  authDomain: "whatsapp-f4ff2.firebaseapp.com",
  projectId: "whatsapp-f4ff2",
  storageBucket: "whatsapp-f4ff2.appspot.com",
  messagingSenderId: "1019373546820",
  appId: "1:1019373546820:web:8f58563aef54956c9abb11",
  measurementId: "G-VFKQRF1CBB",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
