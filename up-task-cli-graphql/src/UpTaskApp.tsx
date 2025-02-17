import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './views/Login';
import { CrearCuenta } from './views/CrearCuenta';
import { NativeBaseProvider } from 'native-base';
import Proyectos from './views/Proyectos';
import { NuevoProyecto } from './views/NuevoProyecto';
import { Proyecto } from './views/Proyecto';

export const UpTaskApp = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Proyecto">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Iniciar Sesión', headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta"
              component={CrearCuenta}
              options={{
                title: 'Crear Cuenta',
                headerStyle: {
                  backgroundColor: '#28303b',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Proyectos"
              component={Proyectos}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NuevoProyecto"
              component={NuevoProyecto}
              options={{
                title: 'Nuevo Proyecto',
                headerStyle: {
                  backgroundColor: '#28303b',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            {/*             <Stack.Screen
              name="Proyecto"
              component={Proyecto}
              options={{
                title: 'Ver proyecto',
                headerStyle: {
                  backgroundColor: '#28303b',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};
