import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from "react-native-responsive-fontsize";

import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

import { DefaultNavigationProps } from '../../types/navigationTypes';

interface ISignUpProps {
  navigation: DefaultNavigationProps<'SignIn'>;
}

const SignIn = ({ navigation }: ISignUpProps) => {
  const [userName, changeUserName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  return (
    <Screen enableOffset={false}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={styles.inner}>
          <Text style={styles.welcomeText}>
            Welcome to PBook{'\n'}Please, fill inputs to continue process.
          </Text>
          <Input
            value={userName}
            onChangeText={inputUserName => changeUserName(inputUserName)}
            placeholder="User Name"
          />
          <Input
            value={email}
            onChangeText={inputEmail => changeEmail(inputEmail)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChangeText={inputPassword => changePassword(inputPassword)}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            text={'SIGN-UP'}
            onPress={() => {}}
          />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  inner: {
    paddingHorizontal: 36,
  },
  welcomeText: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(14),
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30%',
  },
});

export default SignIn;
