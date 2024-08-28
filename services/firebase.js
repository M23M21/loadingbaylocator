// services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // or getDatabase for Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyANg6pLx0zR5Ajg4FFjFDPvaxPNy1O2njU",
  authDomain: "loadinbaylocator.firebaseapp.com",
  projectId: "loadinbaylocator",
  storageBucket: "loadinbaylocator.appspot.com",
  messagingSenderId: "836229091487",
  appId: "1:836229091487:web:45453d6bb97f00ce1892aa",
  measurementId: "G-SRQMY42FM6"
};
import { sendPasswordResetEmail } from 'firebase/auth';

const handlePasswordReset = () => {
  if (!email) {
    Alert.alert('Error', 'Please enter your email address');
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert('Success', 'Password reset email sent');
      router.back();
    })
    .catch((error) => {
      Alert.alert('Error', error.message);
    });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app); // or use getDatabase for Realtime Database

export { auth, firestore };