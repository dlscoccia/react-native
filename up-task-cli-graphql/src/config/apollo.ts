import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const uri =
  Platform.OS === 'ios' ? 'http://localhost:4000/' : 'http://10.0.2.2:4000/';

const httpLink = createHttpLink({
  uri,
});

const setAuthorizationLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

export const client = new ApolloClient({
  link: setAuthorizationLink.concat(httpLink),
  cache: new InMemoryCache(),
});
