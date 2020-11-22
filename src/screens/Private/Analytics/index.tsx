import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Screen from '../../../components/common/Screen';
import { DefaultTabNavigationProps } from '../../../types/navigationTypes';

interface IAnalyticsProps {
  navigation: DefaultTabNavigationProps<'Analytics'>;
}

const Analytics = ({ navigation }: IAnalyticsProps) => {
  return (
    <Screen enableOffset={false}>
      <Text style={styles.text}>Coming soon...</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: '20%',
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(14),
    color: '#fff',
    textAlign: 'center',
  },
});

export default Analytics;
