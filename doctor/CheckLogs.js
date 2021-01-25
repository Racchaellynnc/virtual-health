import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function CheckLogs() {
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Back, User</Text>
        <View style={styles.logs}>
            <Text style={styles.date}>Date/Time:</Text>  
            <Text style={styles.symptoms}>- You (had no/had/had some) cough, difficulty breathing or chest pain.</Text> 
            <Text style={styles.symptoms}>- You (had not/had) been outside your country in the past 30 days.</Text> 
            <Text style={styles.symptoms}>- You had (no/at least one/unsure) family member who has Covid-19?</Text> 
            <Text style={styles.symptoms}>- Your chances of having Covid-19 were: </Text> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23a4e4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginTop: -200,
    marginBottom: 50,
  },
  date: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
    marginTop: 25,
    paddingHorizontal: 25,
  },
  logs: {
    backgroundColor: 'white',
    width: 325,
  },
  symptoms: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    marginTop: -20,
    paddingHorizontal: 25,
  },
});
