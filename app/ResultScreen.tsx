import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles';
import { firestore } from '../services/firebase';
import { collection, getDocs, query, where, QuerySnapshot, DocumentData } from 'firebase/firestore';

type LoadingBayInfo = {
  id: string;
  name: string;
  location?: string;
  openingTime?: string;
  restrictions?: string;
  what3words?: string;
  directions?: string;
  town?: string;
};

const ResultScreen = () => {
  const [loadingBays, setLoadingBays] = useState<LoadingBayInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { shopName = '', town = '' } = useLocalSearchParams();

  useEffect(() => {
    const fetchFilteredLoadingBays = async () => {
      try {
        const shopNameStr = String(shopName).trim();
        const townStr = String(town).trim();

        if (!shopNameStr || !townStr) {
          Alert.alert('Input Error', 'Invalid search parameters.');
          setIsLoading(false);
          return;
        }

        // Normalize the inputs to lowercase
        const normalizedShopName = shopNameStr.toLowerCase();
        const normalizedTown = townStr.toLowerCase();

        // Firestore query
        const baysQuery = query(
          collection(firestore, 'loadingBays'),
          where('nameLower', '==', normalizedShopName),
          where('townLower', '==', normalizedTown)
        );

        // Get docs from the query and cast to LoadingBayInfo[]
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(baysQuery);
        const baysData: LoadingBayInfo[] = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Access the document ID
          ...doc.data() as LoadingBayInfo, // Cast the document data to LoadingBayInfo
        }));
        
        setLoadingBays(baysData);
      } catch (error) {
        console.error('Error fetching loading bays:', error);
        Alert.alert('Error', 'Failed to load data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilteredLoadingBays();
  }, [shopName, town]);

  const handleNavigation = (what3words: string) => {
    if (what3words) {
      const url = `https://what3words.com/${what3words}`;
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Unable to open the What3words link.');
      });
    } else {
      Alert.alert('Error', 'Invalid what3words link.');
    }
  };

  function handleSaveLoadingBay(arg0: LoadingBayInfo) {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.commonHeader}>
        <Text style={styles.commonHeaderTitle}>Loading Bay Locator</Text>
      </View>

      {/* Content */}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#3A6BD8" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image source={require('../assets/images/loading-bay.jpg')} style={styles.homeImage} />
          {loadingBays.length > 0 ? (
            loadingBays.map((item) => (
              <View key={item.id}>
                <View style={styles.resultCard}>
                  <Text style={styles.resultInfoLabel}>What3words for Loading Bay is:</Text>
                  <TouchableOpacity onPress={() => handleNavigation(item.what3words || '')}>
                    <Text style={styles.resultLinkText}>{item.what3words || 'N/A'}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.resultCard}>
                  <Text style={styles.resultInfoLabel}>Opening Time:</Text>
                  <Text style={styles.resultInfoText}>{item.openingTime || 'Not provided'}</Text>
                </View>
                <View style={styles.resultCard}>
                  <Text style={styles.resultInfoLabel}>Restrictions:</Text>
                  <Text style={styles.resultInfoText}>{item.restrictions || 'None'}</Text>
                </View>
                <View style={styles.resultCard}>
                  <Text style={styles.resultInfoLabel}>Location:</Text>
                  <Text style={styles.resultInfoText}>{item.location || 'Not specified'}</Text>
                </View>
                <View style={styles.resultCard}>
                  <Text style={styles.resultInfoLabel}>Directions:</Text>
                  <Text style={styles.resultInfoText}>{item.directions || 'No directions provided'}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.infoTextCenter}>
              No results found for "{shopName}" in "{town}".
            </Text>
          )}
        </ScrollView>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="home-outline" size={24} color="#7f8c8d" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="search-outline" size={24} color="#7f8c8d" />
          <Text style={styles.footerText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => {
            if (loadingBays.length > 0) handleSaveLoadingBay(loadingBays[0]);
          }}
        >
          <Ionicons name="bookmark" size={24} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/(tabs)/profile')}>
          <Ionicons name="person-outline" size={24} color="#7f8c8d" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>

        {/* Add the Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/(auth)/LoginScreen')}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
