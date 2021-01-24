import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartPage() {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 320, height: 110, marginTop: 200}}
                source={require('../assets/Simpliask.png')}
            />
            <Text style={styles.getStarted}>Get Started Today!</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('doctors-sign-up')}
                style={styles.buttonDoctor}>
                <Text style={styles.buttonText}>As a Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('patient-sign-up')}
                style={styles.buttonPatient}>
                <Text style={styles.buttonText}>As a Patient</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginVertical: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    getStarted: {
        marginVertical: 15,
        fontSize: 16,
        color: 'white',
    },
    buttonDoctor: {
        backgroundColor: '#003399',
        width: 300,
        borderRadius: 25,
        marginVertical: 35,
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    buttonPatient: {
        backgroundColor: '#003399',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    }
});