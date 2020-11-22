import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RouteProp } from '@react-navigation/native';

import Screen from '../../../components/common/Screen';
import Input from '../../../components/common/Input';
import {
  DefaultNavigationProps,
  StackParamList,
} from '../../../types/navigationTypes';

interface IPaymentDetailsProps {
  navigation: DefaultNavigationProps<'PaymentDetails'>;
  route: RouteProp<StackParamList, 'PaymentDetails'>;
}

const PaymentDetails = ({ navigation, route }: IPaymentDetailsProps) => {
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    if (route.params?.payment) {
      setPayment(route.params.payment);
    }
  }, [route]);

  useLayoutEffect(() => {
    const { payment } = route.params;
    const title = payment.prices.filter(item => item.value = "")
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{paddingHorizontal: 20}} onPress={() => {}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Medium',
              fontSize: RFValue(12),
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderPrices = () => {
    return payment?.prices.map((price: any) => {
      return (
        <View key={price.id}>
          <Text style={styles.priceTitle}>{price.title}:</Text>
          <Input
            value={price.value}
            onChangeText={newValue => changePrice(newValue, price.id)}
            placeholder="UAH"
            keyboardType="numeric"
          />
        </View>
      );
    });
  };

  const changePrice = (value: string, priceId: number) => {
    let { prices } = payment;
    const priceIndex = prices.findIndex(item => item.id === priceId);
    if (priceIndex !== -1) {
      prices[priceIndex].value = value;
      let changedPayment = { ...payment };
      changedPayment.prices = [...prices];
      setPayment(changedPayment);
    }
  };

  return (
    <Screen enableOffset={false}>
      <ScrollView>
        <View style={styles.container}>{renderPrices()}</View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  priceTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(12),
    color: '#fff',
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default PaymentDetails;
