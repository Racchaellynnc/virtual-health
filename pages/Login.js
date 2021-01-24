import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo/>
      <Form type='Login'/>
      <View style={styles.signUpLink}>
        <Text style={styles.signUpText}>Don't have an account yet?</Text>
        <Text style={styles.signUp} onPress={() => navigation.navigate('Home')}>Sign up here</Text>
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
  signUpLink: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 20,
  },
  signUpText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  signUp: {
    color: 'rgba(200, 200, 200, 0.6)',
    fontSize: 16,
    fontWeight: '500',
  }
});
