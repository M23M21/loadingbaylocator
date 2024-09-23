// Filename: services/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyANg6pLx0zR5Ajg4FFjFDPvaxPNy1O2njU",
  authDomain: "loadinbaylocator.firebaseapp.com",
  projectId: "loadinbaylocator",
  storageBucket: "loadinbaylocator.appspot.com",
  messagingSenderId: "836229091487",
  appId: "1:836229091487:web:45453d6bb97f00ce1892aa",
  measurementId: "G-SRQMY42FM6"
};

const app = initializeApp(firebaseConfig);

// Inițializează auth cu persistență folosind AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const firestore = getFirestore(app);

const handlePasswordReset = (email, router) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('Success: Password reset email sent');
      if (router) router.back(); // Doar dacă router este definit
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
};

export { auth, firestore, handlePasswordReset };
