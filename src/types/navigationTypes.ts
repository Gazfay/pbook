import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  default: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
  AddReport: {
    title: string;
  };
  PaymentDetails: {
    id: number;
    title?: string;
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
