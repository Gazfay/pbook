import React from 'react';
import { StyleSheet, View } from 'react-native';

const ReportDevider = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 2,
    marginBottom: 10,
    marginHorizontal: 8,
  },
});

export default ReportDevider;
