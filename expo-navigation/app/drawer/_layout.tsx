import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0, 0, 0, 0.45)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Drawer.Screen
                name='user/index'
                options={{
                    drawerLabel: 'User',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='person-circle-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name='schedule/index'
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Horarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='calendar-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer>
    );
}
