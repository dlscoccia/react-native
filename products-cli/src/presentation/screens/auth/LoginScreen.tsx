import React from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';
import { STAGE } from '@env';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  console.log(STAGE);

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="email-outline" />}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="lock-outline" />}
          />
          <Layout style={{ height: 10 }} />
          <Layout>
            <Button
              accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
              onPress={() => {}}>
              Ingresar
            </Button>
          </Layout>
          <Layout style={{ height: 50 }} />
          <Layout
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>¿No tienes cuenta?</Text>
            <Button
              appearance="ghost"
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text category="h1">Crear una</Text>
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
