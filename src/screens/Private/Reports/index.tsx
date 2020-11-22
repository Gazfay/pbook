import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Screen from '../../../components/common/Screen';
import ReportsList from '../../../components/reports/ReportsList';

import { DefaultTabNavigationProps } from '../../../types/navigationTypes';

interface IReportsProps {
  navigation: DefaultTabNavigationProps<'Reports'>;
}

const Reports = ({ navigation }: IReportsProps) => {
  return (
    <Screen enableOffset={false}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <ReportsList />
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
    flex: 1,
  },
});

export default Reports;
