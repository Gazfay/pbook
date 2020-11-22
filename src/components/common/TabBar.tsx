import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const tabs = [
  { key: 'Reports', label: 'Reports', barColor: '#090b21', icon: 'list-alt' },
  {
    key: 'Analytics',
    label: 'Analytics',
    barColor: '#0c1258',
    icon: 'bar-chart',
  },
  {
    key: 'Settings',
    label: 'Settings',
    barColor: '#212875',
    icon: 'player-settings',
  },
];

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { routes, index } = state;
  const activeScreenName = routes[index].name;

  const handleTabPress = useCallback(
    newTab => navigation.navigate(newTab.key),
    [navigation],
  );

  const getIcon = (iconName: string, isActive: boolean) => {
    const hasAwesomeIcon = Icon.hasIcon(iconName);
    let IconProvider = hasAwesomeIcon ? Icon : IconFontisto;
    return (
      <IconProvider
        name={iconName}
        size={20}
        color="#fff"
        style={[styles.icon, !isActive && styles.iconInactive]}
      />
    );
  };

  return (
    <BottomNavigation
      tabs={tabs}
      activeTab={activeScreenName}
      onTabPress={handleTabPress}
      renderTab={({ tab, isActive }) => (
        <FullTab
          isActive={isActive}
          key={tab.key}
          label={tab.label}
          labelStyle={[!isActive && styles.labelInactive]}
          renderIcon={() => getIcon(tab.icon, isActive)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: 6,
  },
  labelInactive: {
    opacity: 0.5,
  },
  iconInactive: {
    opacity: 0.5,
  },
});

export default TabBar;
