import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { serverName } from '../assets/constants'

export default function DoctorChat() {
    const [text, setText] = useState('')
    const [messages, setMessage] = useState([])
    const [render,forceRender] = useState(0)
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (!timer) {
            setTimer(setTimeout(() => {
                forceRender(Math.random())
                clearTimeout(timer)
                setTimer(null)
            }, 5000))
        }
    }, [timer])
    
    useEffect(() => {
        const getData  = async () => {

            let doctorMessages = await fetch(`${serverName}/usergetmessages`)
                .then(res => res.toJSON())

            let userResponses = await fetch(`${servername}/doctorviewresponses`)
                .then(res => res.toJSON())

            let sortedMessages = doctorMessages
                .concat(userResponses)
                .sort((a, b) => new Date(b.date) - new Date(a.date))   

            setMessages(sortedMessages)
        
        }

        getData()

    },[render])

    return (
        <View style={styles.container}>
           {messages.map(message => (
               <View>
                   <Text>{message.message}</Text>
                   <Text>{message.name}</Text>
               </View>
           )) }
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