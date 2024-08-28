import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/globalStyles';

export default function Index() {
  const router = useRouter();

  const handleSignupPress = () => {
    try {
      router.push('/SignupScreen');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleLoginPress = () => {
    try {
      router.push('/LoginScreen');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Loading Bay Locator</Text>
      <Image 
        source={require('../assets/images/loading-bay.jpg')} 
        style={styles.homeImage}
      />
      <TouchableOpacity style={styles.homeButton} onPress={handleSignupPress}>
        <Text style={styles.homeButtonText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeLinkButton} onPress={handleLoginPress}>
        <Text style={styles.homeLinkText}>ALREADY HAVE AN ACCOUNT?</Text>
      </TouchableOpacity>
    </View>
  );
}
