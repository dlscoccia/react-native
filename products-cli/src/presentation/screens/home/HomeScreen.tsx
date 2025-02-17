import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
      }}>
      <Text category="h2">HomeScreen</Text>

      <Button accessoryLeft={<Icon name="facebook" />}>Log out</Button>
    </Layout>
  );
};
