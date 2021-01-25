import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Symptoms() {
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Back, User</Text>
        <Text style={styles.questions}>Do you have any cough, difficulty breathing or chest pain?</Text>   
        <DropDownPicker style={styles.dropdown}
            items={[
                {label: 'Yes', value: 'yes'},
                {label: 'No', value: 'no'},
                {label: 'Some', value: 'some'},
            ]}
            defaultValue='yes'
            containerStyle={{height: 40, width: 300, marginBottom: 30}}
            onChangeItem={item => console.log(item.label, item.value)}
        />  
        <Text style={styles.questions}>Have you been outside the country in the past 30 days?</Text> 
        <DropDownPicker style={styles.dropdown}
            items={[
                {label: 'Yes', value: 'yes'},
                {label: 'No', value: 'no'},
            ]}
            defaultValue='yes'
            containerStyle={{height: 40, width: 300, marginBottom: 30}}
            onChangeItem={item => console.log(item.label, item.value)}
        />   
        <Text style={styles.questions}>Do you have any family member who has Covid-19?</Text> 
        <DropDownPicker style={styles.dropdown}
            items={[
                {label: 'Yes', value: 'yes'},
                {label: 'No', value: 'no'},
                {label: 'Unsure', value: 'unsure'},
            ]}
            defaultValue='yes'
            containerStyle={{height: 40, width: 300, marginBottom: 30}}
            onChangeItem={item => console.log(item.label, item.value)}
        />      
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
    marginVertical: 30,
    marginBottom: 60,
  },
  questions: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    marginTop: -20,
    textAlign: 'center',
    paddingHorizontal: 55,
  },
  button: {
    backgroundColor: '#003399',
    width: 300,
    borderRadius: 25,
    paddingVertical: 10,
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
      textAlign: 'center',
  },
  dropdown: {
    color: 'black',
    backgroundColor: '#23a4e4',
  }
});
