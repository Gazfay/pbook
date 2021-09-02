import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Collapsible from 'react-native-collapsible';
import { RFValue } from 'react-native-responsive-fontsize';

import getIconByEntityType from '../../../tools/getIconByEntityType';
import IndicationInput from '../../common/IndicationInput';
import DataInfoLine from '../../common/DataInfoLine';
import ReportDevider from '../../common/ReportDevider';

import { DefaultNavigationProps } from '../../../types/navigationTypes';

interface GasReportCardProps {
}

const GasReportCard = ({ }: GasReportCardProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [indication, setIndication] = useState<string>('');

  const handleChangeIndication = (value: string) => {
    setIndication(value);
  };

  const calculateTotalValue = () => {
    if (!indication || indication < 5678) return 0;
    return `${Number(indication) - 5678}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
        style={styles.header}
      >
        <View style={styles.icon}>
          <Icon name={getIconByEntityType('gas')} size={16} color="#fff" />
        </View>
        <Text style={styles.title}>Gas</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.item}>
          <IndicationInput
            placeholder="Indication"
            value={indication}
            onChangeText={handleChangeIndication}
          />
          <DataInfoLine property="Last indication" value={'5678 m³'} />
          <DataInfoLine
            property="Total value"
            value={`${calculateTotalValue()} m³`}
          />
          <DataInfoLine property="Price 1m³" value={'7.99 ₴'} />
          <ReportDevider />
          <DataInfoLine property="Total sum" value={'3400 ₴'} />
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(9, 11, 33, .6)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  title: {
    marginLeft: 3,
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(13),
    color: '#fff',
  },
  item: {
    paddingTop: 10,
  },
  icon: {
    width: 20,
  },
});

export default GasReportCard;
