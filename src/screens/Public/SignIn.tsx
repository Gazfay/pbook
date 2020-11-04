import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../../components/common/Screen';

import { useStore } from '../../stores';
import { observer } from 'mobx-react-lite';

const SignIn: React.FunctionComponent<{}> = observer((data) => {
  const { userStore } = useStore();
  console.log(userStore, data, 'store data');

  const setProfile = () => {
    userStore.setUser({ id: '123', name: 'Edddy' });
  };

  return (
    <Screen enableOffset={false}>
      <Text>SignIn screen</Text>
      <Text>User name: {userStore.user?.name}</Text>
      <Button title="User" onPress={setProfile} />
    </Screen>
  );
});

export default SignIn;
