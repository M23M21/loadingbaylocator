import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function SavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saved Loading Bays</Text>
      {/* Add a list or grid of saved loading bays here */}
      <Text style={styles.placeholder}>Your saved loading bays will appear here.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
});