import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { styles } from '../../styles/globalStyles';
import * as EmailValidator from 'email-validator';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    let isValid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setFullNameError('');

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    }

    if (!fullName) {
      setFullNameError('Full name is required.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Validate email
    if (!EmailValidator.validate(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        name: fullName,
        email: email,
      });

      alert('Account created successfully');
      router.replace('/(tabs)/home'); // Navigate to home page
    } catch (error: any) {
      console.error('Signup Error:', error);
      let errorMessage = 'An unexpected error occurred';

      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters.';
      } else {
        errorMessage = error.message;
      }

      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
      <TextInput
        style={styles.authInput}
        placeholder="Enter email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.authInput}
        placeholder="Enter password (min 6 characters)..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TextInput
        style={styles.authInput}
        placeholder="Enter full name..."
        value={fullName}
        onChangeText={setFullName}
      />
      {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}

      <TouchableOpacity style={styles.authButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/(auth)/LoginScreen')}>
        <Text style={styles.authLinkText}>ALREADY HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
