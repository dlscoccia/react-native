import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import {
  DrawerActions,
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}></PrimaryButton>

      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}></PrimaryButton>
    </View>
  );
};
