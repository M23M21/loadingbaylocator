import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import { useLocalSearchParams, useRouter, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/globalStyles'; // Import global styles

type LoadingBayInfo = {
  id: string;
  name: string;
  location: string;
  openingTime: string;
  restrictions: string;
  what3words: string;
  directions: string;
};

const ResultScreen = () => {
  const { results } = useLocalSearchParams();
  const parsedResults: LoadingBayInfo[] = typeof results === 'string' ? JSON.parse(results) : [];
  const router = useRouter();

  const handleNavigation = (what3words: string) => {
    const url = `https://what3words.com/${what3words}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>RESULT</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../assets/images/loading-bay.jpg')}
          style={styles.image}
        />
        {parsedResults.map((item) => (
          <React.Fragment key={item.id}>
            <View key={`${item.id}-what3words`} style={styles.card}>
              <Text style={styles.infoLabel}>Loading Bay is:</Text>
              <TouchableOpacity onPress={() => handleNavigation(item.what3words)}>
                <Text style={styles.infoText}>{item.what3words}</Text>
              </TouchableOpacity>
            </View>
            <View key={`${item.id}-openingTime`} style={styles.card}>
              <Text style={styles.infoLabel}>Opening Time:</Text>
              <Text style={styles.infoText}>{item.openingTime}</Text>
            </View>
            <View key={`${item.id}-restrictions`} style={styles.card}>
              <Text style={styles.infoLabel}>Restrictions:</Text>
              <Text style={styles.infoText}>{item.restrictions}</Text>
            </View>
            <View key={`${item.id}-location`} style={styles.card}>
              <Text style={styles.infoLabel}>Location:</Text>
              <Text style={styles.infoText}>{item.location}</Text>
            </View>
            <View key={`${item.id}-directions`} style={styles.card}>
              <Text style={styles.infoLabel}>Directions:</Text>
              <Text style={styles.infoText}>{item.directions}</Text>
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerItem} 
          onPress={() => handleNavigation(parsedResults[0]?.what3words)}
        >
          <Ionicons name="car" size={24} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.footerItem} 
          onPress={() => handleNavigation(parsedResults[0]?.what3words)}
        >
          <Ionicons name="walk" size={24} color="#3498db" />
        </TouchableOpacity>
        <Link href="/(tabs)/home" asChild>
          <TouchableOpacity style={styles.footerItem}>
            <Ionicons name="search" size={24} color="#3498db" />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
