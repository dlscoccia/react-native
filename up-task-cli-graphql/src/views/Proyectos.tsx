import React from 'react';
import { Box, Button, Divider, FlatList, Heading, Text } from 'native-base';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { StyleSheet } from 'react-native';

const OBTENER_PROYECTOS = gql`
  query obtenerProyectos {
    obtenerProyectos {
      id
      nombre
    }
  }
`;

interface Item {
  id: string;
  nombre: string;
}

export default function Proyectos() {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);

  return (
    <Box
      style={[globalStyles.contenedor, { backgroundColor: '#030196' }]}
      w="full">
      <Button
        style={[globalStyles.boton, { marginTop: 30 }]}
        onPress={() => navigation.navigate('NuevoProyecto' as never)}>
        <Text style={globalStyles.botonTexto}>Nuevo Proyecto</Text>
      </Button>
      <Heading size="md" style={globalStyles.subtitulo}>
        Selecciona un proyecto
      </Heading>
      <Box style={styles['contenido-lista']}>
        <FlatList
          data={data?.obtenerProyectos ?? []}
          renderItem={({ item }: { item: Item }) => (
            <Text
              key={item.id}
              style={styles.item}
              // onPress={() => navigation.navigate('Proyecto' as never)}
            >
              {item.nombre}
            </Text>
          )}
          ItemSeparatorComponent={() => <Divider />}></FlatList>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  'contenido-lista': {
    width: '90%',
    backgroundColor: '#fffbfb',
    paddingHorizontal: '2.5%',
    borderRadius: 10,
  },
  item: {
    marginVertical: 5,
    fontSize: 20,
    padding: 5,
  },
});
