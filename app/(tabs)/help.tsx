import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/globalStyles';  // Use global styles

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Help & Support</Text>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I find a loading bay?</Text>
          <Text style={styles.faqAnswer}>Use the search function or browse by location to find available loading bays.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Can I save my favorite loading bays?</Text>
          <Text style={styles.faqAnswer}>Yes, you can save loading bays by tapping the bookmark icon on the bay details screen.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
