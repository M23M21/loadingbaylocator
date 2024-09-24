// Filename: app/(auth)/index.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/globalStyles'; // Asigură-te că calea este corectă

export default function AuthIndex() {
  const router = useRouter();

  const handleSignupPress = () => {
    router.push('/(auth)/SignupScreen'); // Calea corectă
  };

  const handleLoginPress = () => {
    router.push('/(auth)/LoginScreen'); // Calea corectă
  };

  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
      <Text style={styles.homeTitle}>Loading Bay Locator</Text>
      <Image
        source={require('../../assets/images/loading-bay.jpg')}
        style={styles.homeImage}
      />
      <TouchableOpacity style={styles.homeButton} onPress={handleSignupPress}>
        <Text style={styles.homeButtonText}>SIG NUP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeLinkButton} onPress={handleLoginPress}>
        <Text style={styles.homeLinkText}>ALREADY HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
