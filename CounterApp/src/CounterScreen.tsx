import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimatyButton } from './presentation/components/shared/PrimatyButton';
import { Button } from 'react-native-paper';
import { globalStyles } from './presentation/theme/global.styles';

export const CounterScreen = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            <Button
                mode="contained"
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}>
                Incrementar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});
