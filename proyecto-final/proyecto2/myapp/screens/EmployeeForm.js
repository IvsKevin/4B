import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { React, useState } from 'react'

import Layout from '../components/Layout';
import { saveUser } from '../api';

const EmployeeForm = ({ navigation }) => {
    const [employee, setEmployee] = useState({
        nickname: '',
        email: '',
        password: '',
        category: 'C',
        accessCode: '1234567891',
    });

    const handleChange = (name, value) => setEmployee({ ...employee, [name]: value });

    const handleSubmit = () => {
        saveUser(user);
        navigation.navigate('HomeScreen');
    }

    return (
        <Layout>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Nombre del empleado: </Text>

                <TextInput style={styles.input}
                    onChangeText={(text) => handleChange('nickname', text)}
                    placeholderTextColor={'#808080'}
                    placeholder='Escribe un nombre'>
                </TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Apellido paterno del empleado: </Text>

                <TextInput style={styles.input}
                    onChangeText={(text) => handleChange('email', text)}
                    placeholderTextColor={'#808080'}
                    placeholder='Escribe el apellido paterno'>
                </TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Apellido materno del empleado: </Text>

                <TextInput style={styles.input}
                    onChangeText={(text) => handleChange('password', text)}
                    placeholderTextColor={'#808080'}
                    placeholder='Escribe el apellido materno'>
                </TextInput>
            </View>

            <Pressable style={styles.inputSubmit} onPress={handleSubmit}>
                <Text style={{ color: '#ffffff', fontSize: 20 }}>Crear nuevo empleado</Text>
            </Pressable>
        </Layout>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'left'
    },
    inputTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#ffffff'
    },
    inputSubmit: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#10ac84",
        borderColor: "#ffffff",
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        borderColor: "#10ac84",
        borderWidth: 1,
        fontSize: 15,
        color: '#ffffff'
    }
})

export default EmployeeForm