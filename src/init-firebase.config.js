
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAzDYRGac7u6G6VD2wXM-qWPTi4HvylMxE",
    authDomain: "project-safex.firebaseapp.com",
    projectId: "project-safex",
    storageBucket: "project-safex.appspot.com",
    messagingSenderId: "476753398153",
    appId: "1:476753398153:web:c43272657dddb9f1733958",
    measurementId: "G-3FEEH4KE2Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, db, provider }