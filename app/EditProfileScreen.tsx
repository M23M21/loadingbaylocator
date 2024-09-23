import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { firestore } from '../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../AuthContext';
import { styles } from '../styles/globalStyles';

const EditProfileScreen = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        Alert.alert('Error', 'User not logged in.');
        router.replace('/(auth)/LoginScreen');
        return;
      }
      try {
        const userDoc = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          setName(data.name);
          setEmail(data.email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        Alert.alert('Error', 'Failed to load user data.');
      }
    };

    fetchUserData();
  }, [user]);

  const handleSave = async () => {
    if (!user) {
      Alert.alert('Error', 'User not logged in.');
      router.replace('/(auth)/LoginScreen');
      return;
    }
    if (!name || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      const userDoc = doc(firestore, 'users', user.uid);
      await updateDoc(userDoc, {
        name,
        email,
      });
      Alert.alert('Success', 'Profile updated successfully');
      router.replace('/(tabs)/home');
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.commonHeader}>
        <Text style={styles.commonHeaderTitle}>Edit Profile</Text>
      </View>

      {/* Content */}
      <View style={styles.editProfileInfoContainer}>
        <TextInput
          style={styles.editProfileInput}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.editProfileInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.editProfileButton} onPress={handleSave}>
          <Text style={styles.editProfileButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;
