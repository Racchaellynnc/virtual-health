import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PatientDashboard() {
    const [message, setMessage] = useState('')

    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interact with Doctor</Text>
            <View style={styles.container}>
                <Text style={styles.question}>Question from Doctor</Text>
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid="rgba(0, 0, 0, 0)" 
                    placeholderTextColor='white'
                    onChangeText={setMessage}
                    />
                    <Text>{message}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text 
                        style={styles.buttonText}
                        onPress={() => {
                            /* 1. Navigate to the Details route with message */
                            navigation.navigate('patient-chat', {
                              message
                            });
                        }}
                    >
                    Submit</Text>
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
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: 'white',
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#003399',
        width: 300,
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginVertical: 60,
        marginBottom: 20,
    },
    question: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginVertical: 30,
        marginBottom: 10,
    }
});
  