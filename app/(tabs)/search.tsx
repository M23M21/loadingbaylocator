import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { firestore } from '../../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { styles } from '../../styles/globalStyles';

type LoadingBayInfo = {
  id: string;
  name: string;
  location: string;
  openingTime: string;
  restrictions: string;
  town: string;
  what3words: string;
  directions: string;
};

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [town, setTown] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const results: LoadingBayInfo[] = [];
      const q = query(
        collection(firestore, 'loadingBays'),
        where('name', '==', searchTerm),
        where('town', '==', town)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as LoadingBayInfo);
      });

      if (results.length > 0) {
        router.push({
          pathname: '/ResultScreen',
          params: { results: JSON.stringify(results) },
        });
      } else {
        alert('No matching loading bays found.');
      }
    } catch (error) {
      console.error('Error searching Firestore:', error);
      alert('An error occurred while searching. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Loading Bay Locator</Text>
      <Image 
        source={require('../../assets/images/loading-bay.jpg')} 
        style={styles.homeImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter shop/warehouse name..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter town name..."
        value={town}
        onChangeText={setTown}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
