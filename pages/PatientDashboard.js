import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PatientDashboard() {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 320, height: 110, marginTop: 50}}
                source={require('../assets/Simpliask.png')}
            />
            <Text style={styles.getStarted}>Welcome User</Text>
            <View style={styles.align}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('symptoms')}>
                    <Text style={styles.buttonText}>Input Symptoms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('assistant')}>
                    <Text style={styles.buttonText}>Talk to Virtual Assistant</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.align}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('check-logs')}>
                    <Text style={styles.buttonText}>Check Logs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('doctor-logs')}>
                    <Text style={styles.buttonText}>Doctor Logs</Text>
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
getStarted: {
    marginTop: 5,
    marginBottom: 35,
    fontSize: 25,
    color: 'white',
},
button: {
    backgroundColor: '#0abab5',
    width: 130,
    borderRadius: 25,
    marginVertical: 20,
    height: 130,   
    marginHorizontal: 20,
},
align: {
    flexDirection: 'row',
},
buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    flexDirection: 'row',
},
});