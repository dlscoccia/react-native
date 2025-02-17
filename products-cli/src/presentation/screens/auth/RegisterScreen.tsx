import React from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../routes/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.3 }}>
          <Text category="h1">Registro</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Nombre completo"
            style={{ marginBottom: 10 }}
            accessoryLeft={<CustomIcon name="person-outline" />}
          />
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
          <Layout style={{ height: 20 }} />
          <Layout
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>¿Ya tienes cuenta?</Text>
            <Button appearance="ghost" onPress={() => navigation.goBack()}>
              <Text category="h1">Iniciar sesión</Text>
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
