import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface DataInfoLineProps {
  property: string | number;
  value?: string | number;
}

const DataInfoLine = ({ property, value }: DataInfoLineProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{property}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(12.5),
    letterSpacing: 0.5,
    color: '#fff',
    textAlign: 'center',
  },
});

export default DataInfoLine;
