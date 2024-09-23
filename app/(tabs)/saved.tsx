import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';

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

export default function SavedScreen() {
  const [savedBays, setSavedBays] = useState<LoadingBayInfo[]>([]);

  useEffect(() => {
    const fetchSavedLoadingBays = async () => {
      try {
        const savedData = await AsyncStorage.getItem('savedLoadingBays');
        const parsedData = savedData ? JSON.parse(savedData) : [];
        setSavedBays(parsedData);
      } catch (error) {
        Alert.alert('Error', 'Failed to load saved loading bays.');
      }
    };

    fetchSavedLoadingBays();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const filteredBays = savedBays.filter((bay) => bay.id !== id);
      await AsyncStorage.setItem('savedLoadingBays', JSON.stringify(filteredBays));
      setSavedBays(filteredBays);
      Alert.alert('Success', 'Loading Bay deleted successfully!');
    } catch (error) {
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
      <Text style={styles.resultInfoLabel}>{item.name}</Text>
      <Text style={styles.resultInfoText}>{item.location || 'Location not specified'}</Text>
      <TouchableOpacity onPress={() => handleWhat3wordsNavigation(item.what3words || '')}>
        <Text style={styles.resultLinkText}>{item.what3words || 'N/A'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ marginTop: 10, alignItems: 'center' }}>
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
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      ) : (
        <Text style={styles.placeholder}>Your saved loading bays will appear here.</Text>
      )}
    </SafeAreaView>
  );
}
