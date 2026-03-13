import { Button, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <Button title='Open Details /home/details' onPress={() => router.navigate('/home/details')} />

      <Button title='Open User /user' onPress={() => router.navigate('/user')} />
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
