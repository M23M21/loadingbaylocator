import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/globalStyles'; // Use global styles

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Simulating password reset email sent
    Alert.alert('Success', 'Password reset email sent');
    router.back();
  };

  return (
    <View style={styles.passwordResetContainer}>
      <Text style={styles.passwordResetTitle}>Password Reset</Text>
      <Text style={styles.passwordResetSubtitle}>
        Enter your email address and we'll send you instructions on how to reset your password.
      </Text>
      <TextInput
        style={styles.passwordResetInput}
        placeholder="Enter email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.passwordResetButton} onPress={handlePasswordReset}>
        <Text style={styles.passwordResetButtonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.passwordResetCancelButton} onPress={() => router.back()}>
        <Text style={styles.passwordResetCancelButtonText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetScreen;
