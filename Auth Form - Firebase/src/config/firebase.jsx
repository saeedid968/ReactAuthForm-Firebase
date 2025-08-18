import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCOP5YFCH6QyJ_dgTxabpglQ_98aOTsRQE",
  authDomain: "react-js-auth-300ee.firebaseapp.com",
  projectId: "react-js-auth-300ee",
  storageBucket: "react-js-auth-300ee.firebasestorage.app",
  messagingSenderId: "774509920478",
  appId: "1:774509920478:web:951b9697d19241d1fac24f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();