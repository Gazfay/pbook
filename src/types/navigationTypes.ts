import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  default: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
  PaymentDetails: {
    id: Number;
    title: String;
    payment: any;
  };
};

export type TabStackParamList = {
  Reports: undefined;
  Settings: undefined;
  Analytics: undefined;
};

export type DefaultNavigationProps<
  T extends keyof StackParamList
> = StackNavigationProp<StackParamList, T>;

export type DefaultTabNavigationProps<
  T extends keyof TabStackParamList
> = StackNavigationProp<TabStackParamList, T>;
