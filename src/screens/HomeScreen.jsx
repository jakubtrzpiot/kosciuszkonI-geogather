import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                title="GeoGather"
                onPress={() => navigation.navigate('Map')}
            >
                <Text style={styles.text}>Map</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.text}>Profile</Text>
            </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
        elevation: 3,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})

export default HomeScreen;