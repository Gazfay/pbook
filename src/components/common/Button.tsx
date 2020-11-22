import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IButton {
  onPress(): void;
  text: string;
  style?: object;
}

const Button = ({ onPress, text, style }: IButton) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#474d84',
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: RFValue(11),
    letterSpacing: 0.5,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
