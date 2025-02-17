import { StyleSheet, Text, View } from 'react-native';

export const ExerciseListItem = ({ item }) => (
    <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
            <Text style={styles.exerciseSubValue}>{item.muscle}</Text> |{' '}
            <Text style={styles.exerciseSubValue}>{item.equipment}</Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({
    exerciseContainer: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        gap: 5,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
    exerciseSubValue: {
        textTransform: 'capitalize',
    },
});
