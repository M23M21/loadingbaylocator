import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../AuthContext'; // Ensure correct import path
import { auth, firestore } from '../../services/firebase'; // Ensure correct import path
import { doc, getDoc } from 'firebase/firestore';
import { styles } from '../../styles/globalStyles'; // Ensure correct import path

type UserData = {
  name: string;
  email: string;
};

export default function ProfileScreen() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = doc(firestore, 'users', user.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            const data = userSnapshot.data() as UserData;
            setUserData(data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleEditProfile = () => {
    router.push('/EditProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {userData ? (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {userData.name}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
