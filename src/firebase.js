import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyAJABm28xguky4-5OWndS4Rxzsik59_two",
    authDomain: "airbnb-clone-1904e.firebaseapp.com",
    projectId: "airbnb-clone-1904e",
    storageBucket: "airbnb-clone-1904e.appspot.com",
    messagingSenderId: "811395945549",
    appId: "1:811395945549:web:cf8c8380e2a0a033aa3804"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { db, auth, storage, signOut };