import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { auth, firestore } from '../services/firebase'; // Ensure the correct path
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { styles } from '../styles/globalStyles'; // Import your global styles

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = doc(firestore, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            const data = userSnapshot.data();
            setName(data.name || ''); // Provide a default empty string if name is undefined
            setEmail(data.email || ''); // Provide a default empty string if email is undefined
          }
        } catch (error: unknown) {
          if (error instanceof Error) {
            Alert.alert('Error', error.message);
          } else {
            Alert.alert('Error', 'An unknown error occurred while fetching data');
          }
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDoc = doc(firestore, 'users', user.uid);
        await updateDoc(userDoc, { name, email });
        Alert.alert('Success', 'Profile updated successfully');
        router.replace('/home'); // Navigate back to the home screen after saving
      } catch (error: unknown) {
        if (error instanceof Error) {
          Alert.alert('Error', error.message);
        } else {
          Alert.alert('Error', 'An unknown error occurred while updating the profile');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
