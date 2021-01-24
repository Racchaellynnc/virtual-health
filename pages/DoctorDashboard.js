import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function DoctorDashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.getStarted}>Welcome User</Text>
            <View style={styles.new}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Compose</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#23a4e4',
    },
    new: {
        flexGrow: 1,
        marginLeft: -200,
        marginVertical: -30,
    },
    getStarted: {
        marginTop: 75,
        marginBottom: 35,
        fontSize: 25,
        color: 'white',
    },
    button: {
        backgroundColor: '#003399',
        width: 120,
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        paddingHorizontal: 20,
    },
});