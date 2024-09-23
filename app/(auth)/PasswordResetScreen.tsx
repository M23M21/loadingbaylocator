// app/(auth)/PasswordResetScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { styles } from '../../styles/globalStyles';
import { FirebaseError } from 'firebase/app'; // Import corect pentru FirebaseError

const PasswordResetScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent');
      router.replace('/(auth)/LoginScreen'); // Navighează către ecranul de Login
    } catch (error) {
      console.error('Password Reset Error:', error);
      let message = 'An unexpected error occurred.';
      
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            message = 'No user found with this email.';
            break;
          case 'auth/invalid-email':
            message = 'Invalid email address.';
            break;
          default:
            message = error.message;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      Alert.alert('Error', message);
    }
  };

  return (
    <View style={styles.passwordResetContainer}>
      <Text style={styles.passwordResetTitle}>Password Reset</Text>
      <Text style={styles.passwordResetSubtitle}>Enter your email to receive a password reset link.</Text>
      <TextInput
        style={styles.passwordResetInput}
        placeholder="Enter your email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.passwordResetButton} onPress={handlePasswordReset}>
        <Text style={styles.passwordResetButtonText}>Send Reset Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.passwordResetCancelButton} onPress={() => router.replace('/(auth)/LoginScreen')}>
        <Text style={styles.passwordResetCancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetScreen;
