import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import { ExerciseListItem } from './src/components/ExcerciseListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <ExerciseListItem item={item} />}
                contentContainerStyle={styles.list}
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 50,
    },
    list: {
        gap: 10,
    },
});
