import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <Stack initialRouteName='(tabs)'>
      <Stack.Screen name='(tabs)' options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name='user' />
    </Stack>
  );
}
