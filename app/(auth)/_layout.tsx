// Filename: app/(auth)/_layout.tsx

import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> {/* Pagina de pornire pentru autentificare */}
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="SignupScreen" />
      <Stack.Screen name="PasswordResetScreen" />
    </Stack>
  );
}
