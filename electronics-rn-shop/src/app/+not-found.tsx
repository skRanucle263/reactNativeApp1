import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function NotFoundScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
            <View style={styles.container}>
                <View>
                    <Link href='/' >
                        <FontAwesome
                            name='home'
                            size={30}
                            color='blue'
                        />
                    </Link>
                </View>
                <View style={styles.container}>
                    <Link href='/' >
                        <Text style={styles.linkText}>Go Home</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 20,
        color: 'blue',
    },
});
