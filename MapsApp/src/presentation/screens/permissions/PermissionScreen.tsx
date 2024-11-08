import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../config/theme/globalStyles';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

export const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={globalStyles.container}>
      <Text>Habilitar ubicación</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={globalStyles.btnPrimaryText}>Habilitar Localización</Text>
      </Pressable>

      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};
