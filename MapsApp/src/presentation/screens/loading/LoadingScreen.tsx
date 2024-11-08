import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../config/theme/globalStyles';

export const LoadingScreen = () => {
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator size={30} color={'#000'} />
    </View>
  );
};
