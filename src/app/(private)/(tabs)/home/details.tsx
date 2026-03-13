import { Button, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function Details() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Button title='Back' onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
