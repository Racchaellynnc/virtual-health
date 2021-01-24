import React from 'react';
import { StyleSheet, Text, View,  ActivityIndicator } from 'react-native';

export default function Animation() {
  return (
    <View style={styles.main}>
        <ActivityIndicator 
            size={70} 
            color="white" 
        />
        <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23a4e4',
        flex: 1,
    },
    main: {
        height: '100%', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 22,
        marginTop: 15,
    },
});

