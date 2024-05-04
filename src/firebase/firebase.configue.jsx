// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy0KO0jocxxhJCtyf0afeHSey4b0XS0mw",
  authDomain: "news-dragon-client-e9a48.firebaseapp.com",
  projectId: "news-dragon-client-e9a48",
  storageBucket: "news-dragon-client-e9a48.appspot.com",
  messagingSenderId: "248300960088",
  appId: "1:248300960088:web:f26666786bcb365b770d2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;