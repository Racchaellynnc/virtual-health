import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Assistant() {
  return (
    <View style={styles.container}>
      <Logo/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Voice Assistant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23a4e4',
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#003399',
        width: 300,
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 10,
        marginBottom: 500,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    }
});
