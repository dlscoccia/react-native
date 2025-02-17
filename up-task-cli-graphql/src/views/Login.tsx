import React, { useState } from 'react';
import {
  Button,
  Text,
  Heading,
  Input,
  FormControl,
  Box,
  Toast,
} from 'native-base';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($input: AutenticarInput!) {
    autenticarUsuario(input: $input) {
      token
    }
  }
`;

export const Login = () => {
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

  const handleSubmit = async () => {
    const { email, password } = usuario;

    if (email === '' || password === '') {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    try {
      const { data } = await autenticarUsuario({
        variables: {
          input: { ...usuario },
        },
      });

      const { token } = data.autenticarUsuario;

      await AsyncStorage.setItem('token', token);

      setUsuario({
        email: '',
        password: '',
      });

      navigation.navigate('Proyectos' as never);
    } catch (error: any) {
      setMensaje(error.message.replace('GrahpQL error: ', ''));
    }
  };

  const mostrarAlerta = () => {
    Toast.show({
      description: mensaje,
    });
    setMensaje(null);
  };

  return (
    <Box
      style={[globalStyles.contenedor, { backgroundColor: '#572dee' }]}
      w="100%">
      <Box w="100%">
        <Heading size="3xl" style={globalStyles.titulo}>
          UpTask
        </Heading>
        <FormControl isRequired style={globalStyles.inputs}>
          <Input
            type="text"
            placeholder="Email"
            style={globalStyles.input}
            value={usuario.email}
            onChangeText={texto =>
              setUsuario({
                ...usuario,
                email: texto,
              })
            }
          />

          <Input
            type="password"
            placeholder="Contraseña"
            style={globalStyles.input}
            value={usuario.password}
            onChangeText={texto =>
              setUsuario({
                ...usuario,
                password: texto,
              })
            }
          />
        </FormControl>
        <Button style={globalStyles.boton} onPress={handleSubmit}>
          <Text style={globalStyles.botonTexto}>Iniciar Sesión</Text>
        </Button>
        <Text
          style={globalStyles.enlace}
          onPress={() => navigation.navigate('CrearCuenta' as never)}>
          Crear Cuenta
        </Text>
        {mensaje && mostrarAlerta()}
      </Box>
    </Box>
  );
};
