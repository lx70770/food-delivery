// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, EmailAuthCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as AppleAuthentication from "expo-apple-authentication";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5A4BPrCmL9xc7leFKbXsU-bwtZ_AtwI",
  authDomain: "food-delivery-4947c.firebaseapp.com",
  projectId: "food-delivery-4947c",
  storageBucket: "food-delivery-4947c.appspot.com",
  messagingSenderId: "303423154734",
  appId: "1:303423154734:web:ec1c47555ef0a12d870dbf",
  measurementId: "G-LY341SW48M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const [request, response, promptAsync] = Google.useAuthRequest({
  clientId: "",
});

AppleAuthentication.signInAsync();
