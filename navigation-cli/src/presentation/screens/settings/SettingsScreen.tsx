import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>
      <PrimaryButton label="Return" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
