import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';

import Screen from '../../../components/common/Screen';
import PaymentItem from '../../../components/settings/PaymentItem';
import UserInfo from '../../../components/settings/UserInfo';
import SettingTitle from '../../../components/settings/SettingTitle';

import { DefaultTabNavigationProps } from '../../../types/navigationTypes';

interface IReportsProps {
  navigation: DefaultTabNavigationProps<'Settings'>;
}

const gas = {
  id: 1,
  type: 'gas',
  title: 'Gas',
  prices: [{
    id: 0,
    title: 'Price 1m³',
    value: 9.50,
  }, {
    id: 1,
    title: 'Shipment',
    value: 210,
  }]
}

const water = {
  id: 2,
  type: 'water',
  title: 'Water',
  prices: [{
    id: 0,
    title: 'Supply 1m³',
    value: 9.50,
  }, {
    id: 1,
    title: 'Sewerage 1m³',
    value: 6.70,
  }]
}

const electricity = {
  id: 3,
  type: 'electricity',
  title: 'Electricity',
  prices: [{
    id: 0,
    title: 'Before 100 kW/h',
    value: 10.50,
  }, {
    id: 1,
    title: 'After 100 kW/h',
    value: 12.89,
  }]
}

const managment = {
  id: 4,
  type: 'managment',
  title: 'Managment',
  prices: [{
    id: 0,
    title: 'Subscription',
    value: 400.00,
  }, {
    id: 1,
    title: 'Garbage removal',
    value: 20.21,
  }]
}

const communication = {
  id: 5,
  type: 'communication',
  title: 'Communication',
  prices: [{
    id: 0,
    title: 'Internet',
    value: '400.00',
  }, {
    id: 1,
    title: 'Mobile',
    value: '20.21',
  }]
}

const Settings = ({ navigation }: IReportsProps) => {
  const openPaymentDetails = (payment: any) => {
    const { id, title } = payment;
    const params = {
      id,
      title,
      payment,
    };
    navigation.navigate('PaymentDetails', params);
  };

  return (
    <Screen enableOffset={false}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.inner}>
          <SettingTitle title="Profile" />
          <UserInfo />
          <SettingTitle title="Payment values" />
          <PaymentItem
            payment={gas}
            openDetails={(details: any) => {
              console.log(details, 'Details here');
              openPaymentDetails(details);
            }}
          />
          <PaymentItem
            payment={water}
            openDetails={(details: any) => openPaymentDetails(details)}
          />
          <PaymentItem
            payment={electricity}
            openDetails={(details: any) => openPaymentDetails(details)}
          />
          <PaymentItem
            payment={managment}
            openDetails={(details: any) => openPaymentDetails(details)}
          />
          <PaymentItem
            payment={communication}
            openDetails={(details: any) => openPaymentDetails(details)}
          />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  inner: {
    paddingHorizontal: 15,
  },
});

export default Settings;
