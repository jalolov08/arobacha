import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Icon, {Icons} from '../ui/Icon/icon.ui';
import {colors} from '../constants/colors';
import HomeStack from './Stacks/HomeStack';
import FavoritesStack from './Stacks/FavoritesStack';
import CreateAdsStack from './Stacks/CreateAdsStack';
import ChatStack from './Stacks/ChatStack';
import ProfileStack from './Stacks/ProfileStack';
import AuthStack from './Stacks/AuthStack';
import {useAuth} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const {authState} = useAuth();
  const isAuth = authState?.authenticated || false;

  const tabConfigs = [
    {name: 'HomeStack', component: HomeStack, icon: 'home', showLabel: false},
    {
      name: 'ChatStack',
      component: ChatStack,
      icon: 'chatbubbles',
      showLabel: false,
    },
    {
      name: 'CreateAdsStack',
      component: CreateAdsStack,
      icon: 'add',
      showLabel: false,
      customIcon: {
        name: 'add',
        color: colors.white,
        size: 27,
        style: {
          backgroundColor: colors.blue,
          padding: 10,
          borderRadius: 50,
          position: 'absolute',
          top: -16,
        },
      },
    },
    {
      name: 'FavoritesStack',
      component: FavoritesStack,
      icon: 'star',
      showLabel: false,
    },
    {
      name: isAuth ? 'ProfileStack' : 'AuthStack',
      component: isAuth ? ProfileStack : AuthStack,
      icon: 'person-circle-outline',
      showLabel: false,
    },
  ];

  const iconContainerStyle = StyleSheet.create({
    focused: {
      backgroundColor: 'rgba(0, 123, 255, 0.09)',
      borderRadius: 100,
      padding: 8,
    },
  });

  const visibleRoutes = [
    'AdDetails',
    'Category',
    'SelectBrand',
    'SelectModel',
    'SelectCity',
  ];

  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (visibleRoutes.includes(routeName)) {
      return 'none';
    } else {
      return 'flex';
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {tabConfigs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={({route}) => ({
              tabBarShowLabel: tab.showLabel,
              tabBarIcon: ({focused}) => (
                <Icon
                  type={Icons.Ionicons}
                  name={tab.icon}
                  color={focused ? colors.blue : colors.gray}
                  style={focused ? iconContainerStyle.focused : {}}
                  {...tab.customIcon}
                />
              ),
              tabBarStyle:
                tab.name === 'AuthStack'
                  ? {display: 'none'}
                  : {
                      height: 50,
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      right: 16,
                      borderRadius: 10,
                      display: getTabBarVisibility(route),
                    },
            })}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
