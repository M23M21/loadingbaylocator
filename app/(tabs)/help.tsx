import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/globalStyles';

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.commonHeader}>
        <Text style={styles.commonHeaderTitle}>Help</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I find a loading bay?</Text>
          <Text style={styles.faqAnswer}>
            Use the search function and enter the name of warehouse / shop and the town / postcode.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Can I save my favorite loading bays?</Text>
          <Text style={styles.faqAnswer}>
            Yes, you can save loading bays by tapping the bookmark icon on the loading bay details screen.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
