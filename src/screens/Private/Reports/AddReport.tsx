import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Screen from '../../../components/common/Screen';
import GasReportCard from '../../../components/reports/reportsSaveCards/GasReportCard';

import { DefaultNavigationProps } from '../../../types/navigationTypes';

interface AddReportProps {
  navigation: DefaultNavigationProps<'AddReport'>;
}

const AddReport = ({ navigation }: AddReportProps) => {
  return (
    <Screen enableOffset={false}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <GasReportCard />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inner: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
  },
});

export default AddReport;
