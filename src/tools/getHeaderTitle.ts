import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { StackParamList } from '../types/navigationTypes';

type MainScreenRouteProp = RouteProp<StackParamList, 'Main'>;

function getHeaderTitle(route: MainScreenRouteProp) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Repors';
  return routeName;
}

export default getHeaderTitle;
