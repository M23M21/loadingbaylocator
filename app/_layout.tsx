// Filename: app/_layout.tsx

import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../AuthContext';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}

function AuthWrapper() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // Afișează un indicator de încărcare în timp ce se verifică starea de autentificare
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3A6BD8" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
