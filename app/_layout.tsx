import { Stack } from 'expo-router';
import { AuthProvider } from '../AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="SignupScreen" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="PasswordResetScreen" options={{ title: 'Reset Password' }} />
      <Stack.Screen name="ResultScreen" options={{ title: 'Result' }} />
      <Stack.Screen name="EditProfileScreen" options={{ title: 'Edit Profile' }} />
    </Stack>
    </AuthProvider>
  );
}
