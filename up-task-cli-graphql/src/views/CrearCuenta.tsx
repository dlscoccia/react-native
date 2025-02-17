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

const CREAR_CUENTA = gql`
  mutation crearUsuario($input: UsuarioInput!) {
    crearUsuario(input: $input)
  }
`;

export const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
  });
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [crearUsuario] = useMutation(CREAR_CUENTA);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    const { nombre, email, password } = usuario;

    if (nombre === '' || email === '' || password === '') {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres');
    }

    try {
      const { data } = await crearUsuario({
        variables: {
          input: { ...usuario },
        },
      });

      setMensaje(data.crearUsuario);

      setUsuario({
        nombre: '',
        email: '',
        password: '',
      });

      navigation.navigate('Login' as never);
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
            placeholder="Nombre"
            style={globalStyles.input}
            value={usuario.nombre}
            onChangeText={texto => setUsuario({ ...usuario, nombre: texto })}
          />
          <Input
            type="text"
            placeholder="Email"
            style={globalStyles.input}
            value={usuario.email}
            onChangeText={texto => setUsuario({ ...usuario, email: texto })}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            style={globalStyles.input}
            value={usuario.password}
            onChangeText={texto => setUsuario({ ...usuario, password: texto })}
          />
        </FormControl>
        <Button style={globalStyles.boton} onPress={() => handleSubmit()}>
          <Text style={globalStyles.botonTexto}>Crear Cuenta</Text>
        </Button>
        {mensaje && mostrarAlerta()}
      </Box>
    </Box>
  );
};
