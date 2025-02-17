import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  contenido: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitulo: {
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  inputs: {
    gap: 10,
  },
  input: {
    backgroundColor: '#FFF',
    marginVertical: 10,
  },
  boton: {
    backgroundColor: '#28303b',
    marginTop: 20,
  },
  botonTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },
  enlace: {
    color: '#FFF',
    marginTop: 40,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
