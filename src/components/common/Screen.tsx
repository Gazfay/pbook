import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IScreenProps {
  children: React.ReactNode;
  enableOffset?: Boolean;
}

const Screen = ({ children, enableOffset = true }: IScreenProps) => {
  const gradient = ['#333867', '#17193b'];

  const SafeView = enableOffset ? SafeAreaView : View;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={gradient}
      style={styles.container}
    >
      <SafeView style={styles.container} edges={['top', 'right', 'left']}>
        {children}
      </SafeView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
