import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { StyleSheet, View, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputProps extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input = ({
  value,
  onChangeText,
  secureTextEntry = false,
  ...props
}: InputProps) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current && secureTextEntry) {
      inputRef.current.setNativeProps({
        style: {
          fontFamily: 'Roboto-Regular',
        },
      });
    }
  }, [secureTextEntry]);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(14),
    color: '#fff',
    backgroundColor: '#040620',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});

export default Input;
