import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Heading,
  Text,
  FormControl,
  Input,
  Button,
  Toast,
} from 'native-base';
import React, { useState } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { gql, useMutation } from '@apollo/client';

const NUEVO_PROYECTO = gql`
  mutation nuevoProyecto($input: ProyectoInput) {
    nuevoProyecto(input: $input) {
      nombre
      id
    }
  }
`;

export const NuevoProyecto = () => {
  const [nombreProyecto, setNombreProyecto] = useState<string>('');
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [nuevoProyecto] = useMutation(NUEVO_PROYECTO);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (nombreProyecto === '') {
      setMensaje('El nombre del proyecto es obligatorio');
    }

    try {
      await nuevoProyecto({
        variables: {
          input: {
            nombre: nombreProyecto,
          },
        },
      });

      navigation.navigate('Proyectos' as never);
      setMensaje('Proyecto creado correctamente');
    } catch (error) {
      console.log({ error });
    }
  };

  const mostrarAlerta = () => {
    Toast.show({
      description: mensaje,
    });
    setMensaje(null);
  };

  return (
    <Box style={[globalStyles.contenedor, { backgroundColor: '#0300ce' }]}>
      <Box style={globalStyles.contenido} w="full">
        <Heading style={globalStyles.titulo}>NuevoProyecto</Heading>
        <FormControl isRequired>
          <Input
            placeholder="Nombre del proyecto"
            style={globalStyles.input}
            value={nombreProyecto}
            onChangeText={texto => setNombreProyecto(texto)}
          />
        </FormControl>
        <Button style={globalStyles.boton} onPress={handleSubmit}>
          <Text style={globalStyles.botonTexto}>Crear Proyecto</Text>
        </Button>
      </Box>
      {mensaje && mostrarAlerta()}
    </Box>
  );
};
