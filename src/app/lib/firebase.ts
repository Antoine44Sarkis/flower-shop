import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOwB7wM32if722dIWa-xHTAv_B-sN9g_s",
  authDomain: "floremihasroun.firebaseapp.com",
  projectId: "floremihasroun",
  storageBucket: "floremihasroun.firebasestorage.app",
  messagingSenderId: "967008766444",
  appId: "1:967008766444:web:297dfff982da76def398c9",
  measurementId: "G-56B27J6TJ9",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
