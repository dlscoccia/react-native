import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer);
    };

    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton
                    color='primary'
                    className='mb-2'
                    onPress={() => router.push('/products')}>
                    Productos
                </CustomButton>
                <CustomButton
                    color='secondary'
                    className='mb-2'
                    onPress={() => router.push('/profile')}>
                    Perfil
                </CustomButton>
                <CustomButton
                    color='tertiary'
                    className='mb-2'
                    onPress={() => router.push('/settings')}>
                    Ajustes
                </CustomButton>
                <Link className='mb-2' href='/products' asChild>
                    <CustomButton variant='text-only'>Productos</CustomButton>
                </Link>

                <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
