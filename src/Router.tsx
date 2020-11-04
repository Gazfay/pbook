import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import navigationStyles from './styles/navigationStyles';

import SginInScreen from './screens/Public/SignIn';

const Stack = createStackNavigator();

const Router: React.FunctionComponent<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...navigationStyles }}>
        <Stack.Screen
          name="SignIn"
          options={{ title: 'Sign In' }}
          component={SginInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
