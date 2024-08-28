// App.js
import React from 'react';
import { ExpoRoot } from 'expo-router';
import { AuthProvider } from './AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <ExpoRoot />
    </AuthProvider>
  );
}
