import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from "react-native-responsive-fontsize";

import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

import { DefaultNavigationProps } from '../../types/navigationTypes';

interface SignInProps {
  navigation: DefaultNavigationProps<'SignIn'>;
}

const SignIn = ({ navigation }: SignInProps) => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  

  return (
    <Screen>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View>
          <Text style={styles.title}>PBook</Text>
          <Icon name="book" size={100} style={styles.logo} color="#fff" />
        </View>
        <View style={styles.actionBar}>
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
            text={'SIGN-IN'}
            onPress={() => {}}
          />
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.signUpText}>SIGN-UP</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Righteous-Regular',
    fontSize: RFValue(50),
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  actionBar: {
    marginTop: '25%',
    paddingHorizontal: 36,
  },
  signUpButton: {
    marginTop: 30,
  },
  signUpText: {
    fontFamily: 'Roboto-Medium',
    fontSize: RFValue(11),
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
  },
  logo: {
    textAlign: 'center',
  },
});

export default SignIn;
