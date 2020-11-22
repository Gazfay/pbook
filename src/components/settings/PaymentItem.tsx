import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { RFValue } from 'react-native-responsive-fontsize';

import getIconByEntityType from '../../tools/getIconByEntityType';

interface IPaymentItemProps {
  payment: any;
  openDetails: Function;
}

const PaymentItem = ({ payment, openDetails }: IPaymentItemProps) => {
  const renderPrices = () => {
    const { prices } = payment;
    console.log(payment, 'Payment inner');
    return (
      <View style={styles.price}>
        <View style={styles.pricesList}>
          {prices.map((price: any) => (
            <Text style={styles.text} key={price.id}>
              {price.title}:
            </Text>
          ))}
        </View>
        <View style={styles.valuesList}>
          {prices.map((price: any) => (
            <Text style={[styles.text]} key={price.id}>
              {price.value} ₴
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openDetails(payment)}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon
            name={getIconByEntityType(payment.type)}
            size={18}
            color="#fff"
          />
          <Text style={styles.label}>{payment.title}</Text>
        </View>
        <View style={styles.prices}>{renderPrices()}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(9, 11, 33, .6)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingLeft: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(14),
    color: '#fff',
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prices: {
    flexDirection: 'column',
  },
  price: {
    flexDirection: 'row',
  },
  pricesList: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  valuesList: {
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(12.5),
    color: '#fff',
    marginVertical: 2,
  },
});

export default PaymentItem;
