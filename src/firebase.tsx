// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0Fgy7sV6sj4ZX73Rv6cLwl7kkTfO13x0",
    authDomain: "eba250.firebaseapp.com",
    projectId: "eba250",
    storageBucket: "eba250.appspot.com",
    messagingSenderId: "281615189635",
    appId: "1:281615189635:web:38dcfd90ceeadd3731bdb6"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };