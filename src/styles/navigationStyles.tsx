import { CardStyleInterpolators } from '@react-navigation/stack';

const navigationStyles = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {
    backgroundColor: '#090b21',
    shadowColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default navigationStyles;
