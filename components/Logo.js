import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 320, height: 110 }}
                source={require('../assets/Simpliask.png')}
            />
            <Text style={styles.welcomeText}>Welcome to SimpliAsk</Text>
            <Text style={styles.description}>Your personal virtual health assistant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      marginVertical: 30,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 18,
      marginVertical: 15,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    description: {
      fontSize: 18,  
      marginTop: -15, 
      color: 'rgba(255, 255, 255, 0.7)',
    }
});
  