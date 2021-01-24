import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function Results() {
  return (
    <View style={styles.container}>
        <Text style={styles.results}>Your chances of having Covid-19 are _%. You have (many/some/no) synomptoms which is correlated with Covid-19.</Text>
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
  results: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 60,
  },
});
