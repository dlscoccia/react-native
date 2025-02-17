import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import React from 'react';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
