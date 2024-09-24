// File: app/(tabs)/saved.tsx

import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';

type LoadingBayInfo = {
  id: string;
  name: string;
  openingTime?: string;
  restrictions?: string;
  what3words?: string;
  directions?: string;
  town?: string;
};

export default function SavedScreen() {
  const [savedBays, setSavedBays] = useState<LoadingBayInfo[]>([]);
  const router = useRouter();

  // Fetch saved loading bays whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const fetchSavedLoadingBays = async () => {
        try {
          const savedData = await AsyncStorage.getItem('savedLoadingBays');
          console.log('Fetched saved bays:', savedData);
          const parsedData = savedData ? JSON.parse(savedData) : [];
          console.log('Parsed saved bays:', parsedData);
          setSavedBays(parsedData);
        } catch (error) {
          console.error('Error fetching saved loading bays:', error);
          Alert.alert('Error', 'Failed to load saved loading bays.');
        }
      };

      fetchSavedLoadingBays();
    }, [])
  );

  const handleDelete = async (id: string) => {
    try {
      const filteredBays = savedBays.filter((bay) => bay.id !== id);
      console.log('Filtered bays after deletion:', filteredBays);
      await AsyncStorage.setItem('savedLoadingBays', JSON.stringify(filteredBays));
      setSavedBays(filteredBays);
      Alert.alert('Success', 'Loading Bay deleted successfully!');
    } catch (error) {
      console.error('Error deleting loading bay:', error);
      Alert.alert('Error', 'Failed to delete the loading bay.');
    }
  };

  const handleWhat3wordsNavigation = (what3words: string) => {
    if (what3words) {
      const url = `https://what3words.com/${what3words}`;
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Unable to open the What3words link.');
      });
    } else {
      Alert.alert('Error', 'Invalid what3words link.');
    }
  };

  const renderLoadingBay = ({ item }: { item: LoadingBayInfo }) => (
    <View style={styles.resultCard}>
      {/* What3words */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.resultInfoLabel}>What3words for Loading Bay is:</Text>
        <TouchableOpacity onPress={() => handleWhat3wordsNavigation(item.what3words || '')}>
          <Text style={styles.resultLinkText}>{item.what3words || 'N/A'}</Text>
        </TouchableOpacity>
      </View>

      {/* Opening Time */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.resultInfoLabel}>Opening Time:</Text>
        <Text style={styles.resultInfoText}>{item.openingTime || 'Not provided'}</Text>
      </View>

      {/* Restrictions */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.resultInfoLabel}>Restrictions:</Text>
        <Text style={styles.resultInfoText}>{item.restrictions || 'None'}</Text>
      </View>

      {/* Directions */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.resultInfoLabel}>Directions:</Text>
        <Text style={styles.resultInfoText}>{item.directions || 'No directions provided'}</Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash" size={24} color="#e74c3c" />
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.commonHeader}>
        <Text style={styles.commonHeaderTitle}>Saved Loading Bays</Text>
      </View>

      {/* Content */}
      {savedBays.length > 0 ? (
        <FlatList
          data={savedBays}
          renderItem={renderLoadingBay}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContent}
        />
      ) : (
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Text style={styles.placeholder}>Your saved loading bays will appear here.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
