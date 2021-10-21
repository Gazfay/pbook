import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import navigationStyles from './styles/navigationStyles';
import { StackParamList, TabStackParamList } from './types/navigationTypes';

import SignInScreen from './screens/Public/SignIn';
import SignUpScreen from './screens/Public/SignUp';

import ReportsScreen from './screens/Private/Reports';
import SettingsScreen from './screens/Private/Settings';
import AnalyticsScreen from './screens/Private/Analytics';

import PaymentDetailsScreen from './screens/Private/Settings/PaymentDetails';

import AddReport from './screens/Private/Reports/AddReport';

import TabBar from './components/common/TabBar';
import AddButton from './components/reports/AddButton';

import getHeaderTitle from './tools/getHeaderTitle';

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //initialRouteName="AddReport"
        screenOptions={{ ...navigationStyles }}
      >
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerTitle: 'Sign Up' }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Main"
          options={({ route, navigation }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => {
              let routeName = getHeaderTitle(route);
              if (routeName !== 'Reports') return null;
              return <AddButton navigation={navigation} />;
            },
          })}
          component={MainScreen}
        />
        <Stack.Screen
          name="PaymentDetails"
          options={({ route }) => ({
            title: route.params.title,
          })}
          component={PaymentDetailsScreen}
        />
        <Stack.Screen
          name="AddReport"
          component={AddReport}
          options={() => ({ title: 'Add Report' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
