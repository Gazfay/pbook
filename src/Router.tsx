import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import navigationStyles from './styles/navigationStyles';
import { StackParamList, TabStackParamList } from './types/navigationTypes';

import SginInScreen from './screens/Public/SignIn';
import SginUpScreen from './screens/Public/SignUp';

import ReportsScreen from './screens/Private/Reports';
import SettingsScreen from './screens/Private/Settings';
import AnalyticsScreen from './screens/Private/Analytics';

import PaymentDetailsScreen from './screens/Private/Settings/PaymentDetails';

import TabBar from './components/common/TabBar';

import getHeaderTitle from './tools/getHeaderTitle';

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const MainScreen: React.FunctionComponent<{}> = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const Router: React.FunctionComponent<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ ...navigationStyles }}
      >
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SginInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerTitle: 'Sign Up' }}
          component={SginUpScreen}
        />
        <Stack.Screen
          name="Main"
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => {
              let routeName = getHeaderTitle(route);
              if (routeName !== 'Reports') return null;
              return (
                <Icon
                  name="plus"
                  size={20}
                  color="#fff"
                />
              );
            },
          })}
          component={MainScreen}
        />
        <Stack.Screen
          name="PaymentDetails"
          options={({ route }) => ({ title: route.params.title })}
          component={PaymentDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
