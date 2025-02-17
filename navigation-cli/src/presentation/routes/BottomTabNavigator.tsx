import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: globalColors.primary,
      }}>
      <Tab.Screen
        name="Tab 1"
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => (
            <IonIcon name="storefront-outline" size={25} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab 2"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <IonIcon name="key-outline" size={25} color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab 3"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IonIcon name="home-outline" size={25} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
