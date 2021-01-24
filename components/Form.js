import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Form(props) {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid="rgba(0, 0, 0, 0)" 
                placeholder='Full Name'
                placeholderTextColor='white'
                />
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid="rgba(0, 0, 0, 0)" 
                placeholder='Email'
                placeholderTextColor='white'/>
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid="rgba(0, 0, 0, 0)" 
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='white'/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('patient-dashboard')}>
                <Text style={styles.buttonText}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
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
    }
});
  