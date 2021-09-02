import React  from 'react';
import { TextInputProps, Pressable, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { StyleSheet, View, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface IInput extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input = ({
  value,
  onChangeText,
  secureTextEntry = false,
  ...props
}: IInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        keyboardType="number-pad"
        {...props}
      />
      <View style={styles.actionsBar}>
        <FontAwesomeIcon name="times-circle" size={22} color="#fff" />
        <View style={styles.scan}>
          <TouchableOpacity onPress={() => alert('press')}>
            <FontistoIcon name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: RFValue(14),
    color: '#fff',
    backgroundColor: '#040620',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    paddingRight: 85,
  },
  actionsBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
    alignItems: 'center',
  },
  scan: {
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftColor: '#fff',
    borderLeftWidth: 1,
  },
});

export default Input;
