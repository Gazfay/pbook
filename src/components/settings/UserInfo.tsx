import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IUserInfoProps {}

const UserInfo = ({}: IUserInfoProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View>
        <Text style={styles.label}>Eduard Dunda</Text>
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
    paddingVertical: 12,
    marginBottom: 18,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(13),
    color: '#fff',
  },
});

export default UserInfo;
