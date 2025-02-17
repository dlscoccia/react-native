import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { UpTaskApp } from './src/UpTaskApp';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/config/apollo';

const upTaskApp = () => (
  <ApolloProvider client={client}>
    <UpTaskApp />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => upTaskApp);
