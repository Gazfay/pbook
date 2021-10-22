import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from "react-native-responsive-fontsize";
import { observer } from "mobx-react-lite"

import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

import useStore from '../../stores';

import { DefaultNavigationProps } from '../../types/navigationTypes';

interface SignUpProps {
  navigation: DefaultNavigationProps<'SignUp'>;
}

const SignUp = observer(data => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { userStore } = useStore();

  const signUpUser = () => {
    // if (!isValidEmail(email)) {
    //   console.log('Invalid email');
    //   return;
    // }

    // if (repeatPassword !== password) {
    //   console.log('Password dont match');
    //   return;
    // }

    // userStore.createUser(email, password);
    userStore.setUser({ id: 1, name: '2' });
  };

  const isValidEmail = (_email: string): boolean => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(_email).toLowerCase());
  };

  console.log(userStore, data, 'User store');

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
          <Input
            value={repeatPassword}
            onChangeText={inputPassword => setRepeatPassword(inputPassword)}
            placeholder="Repeat password"
            secureTextEntry={true}
          />
          <Button text={'SIGN-UP'} onPress={signUpUser} />
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
});

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

export default SignUp;
