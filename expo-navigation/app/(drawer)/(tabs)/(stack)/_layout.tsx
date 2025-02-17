import React from 'react';
import { router, Stack, useNavigation } from 'expo-router';
import { Text } from 'react-native';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    };

    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerBackButtonDisplayMode: 'minimal',
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        size={20}
                        className='mr-5'
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
                ),
            }}>
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes',
                }}
            />
        </Stack>
    );
};

export default StackLayout;
