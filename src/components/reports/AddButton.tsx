import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { RFValue } from 'react-native-responsive-fontsize';

import { DefaultNavigationProps } from '../../types/navigationTypes';

interface AddButtonProps {
  navigation: DefaultNavigationProps<'AddReport'>;
}

const AddButton = ({ navigation }: AddButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('AddReport')}
    >
      <View style={styles.content}>
        <Text style={styles.add}>Add</Text>
        <Icon name="plus" size={25} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  add: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(12.5),
    color: '#fff',
    marginRight: 3,
  },
});

export default AddButton;
