import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ISettingTitleProps {
  title: string;
}

const SettingTitle = ({ title }: ISettingTitleProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(13),
    letterSpacing: 0.5,
    color: '#fff',
    paddingBottom: 8,
  },
});

export default SettingTitle;
