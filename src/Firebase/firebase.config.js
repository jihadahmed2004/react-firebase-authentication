// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoeDppeu9gRI_t1CiYHjHhlJCTw7lE0zo",
  authDomain: "user-email-password-auth-3ec12.firebaseapp.com",
  projectId: "user-email-password-auth-3ec12",
  storageBucket: "user-email-password-auth-3ec12.appspot.com",
  messagingSenderId: "329499405637",
  appId: "1:329499405637:web:6ac6727a6f36ae447b622c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;