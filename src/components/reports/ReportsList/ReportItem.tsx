import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { RFValue } from 'react-native-responsive-fontsize';

import getIconByEntityType from '../../../tools/getIconByEntityType';

const gas = {
  id: 1,
  type: 'gas',
  title: 'Gas',
  valueType: 'm³',
  value: '142',
  price: '650',
};

const water = {
  id: 2,
  type: 'water',
  title: 'Water',
  valueType: 'm³',
  value: '15',
  price: '250',
};

const electricity = {
  id: 3,
  type: 'electricity',
  title: 'Electricity',
  valueType: 'kW/h',
  value: '160',
  price: '212',
};

const managment = {
  id: 4,
  type: 'managment',
  title: 'Managment',
  valueType: '',
  value: '',
  price: ['400', '25'],
};

const communication = {
  id: 5,
  type: 'communication',
  title: 'Communication',
  valueType: '',
  value: '',
  price: ['130', '150'],
};

const Item = ({ title }) => {
  const renderPrice = item => {
    const { type, price } = item;
    let value = '';
    if (type === 'managment' || type === 'communication') {
      value = price.map((content: string) => `${content} ₴`).join(' / ');
    } else {
      value = `${price} ₴`;
    }
    return <Text style={styles.price}>{value}</Text>;
  }

  const renderLine = item => {
    const { type } = item;
    return (
      <View style={styles.item}>
        <View style={styles.priceHeader}>
          <View style={styles.icon}>
            <Icon name={getIconByEntityType(type)} size={14} color="#fff" />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        {renderPrice(item)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>November</Text>
        <Text style={styles.date}>03.10.2020</Text>
      </View>
      {renderLine(gas)}
      {renderLine(water)}
      {renderLine(electricity)}
      {renderLine(managment)}
      {renderLine(communication)}
      <View style={styles.total}>
        <Text style={styles.totalTitle}>Total:</Text>
        <Text style={styles.totalPrice}>2456 ₴</Text>
      </View>
    </View>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  priceHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
  },
  title: {
    marginLeft: 3,
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(12),
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    alignItems: 'flex-end',
  },
  month: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(13),
    letterSpacing: 0.5,
    color: '#fff',
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(12),
    color: '#fff',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    marginTop: 3,
    paddingTop: 5,
  },
  price: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(12),
    color: '#fff',
  },
  totalTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(12.5),
    color: '#fff',
  },
  totalPrice: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(12),
    color: '#fff',
  },
});

export default Item;
