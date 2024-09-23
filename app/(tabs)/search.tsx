import React from 'react';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Search() {
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      const performSearch = async () => {
        try {
          const shopName = await AsyncStorage.getItem('shopName');
          const location = await AsyncStorage.getItem('location');

          if (!shopName || !location) {
            Alert.alert('Input Error', 'Please enter both shop name and town/postcode.');
            return;
          }

          router.push(`/ResultScreen?shopName=${encodeURIComponent(shopName)}&town=${encodeURIComponent(location)}`);

        } catch (error) {
          console.error('Error performing search:', error);
          Alert.alert('Error', 'Failed to perform the search.');
        }
      };

      performSearch();
    }, [router])
  );

  return null;
}
