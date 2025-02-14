import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#FFFFFF',
                },
                headerBackButtonDisplayMode: 'minimal',
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
