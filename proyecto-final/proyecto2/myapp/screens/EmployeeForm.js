import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { saveUser } from '../api';
import { useNavigation } from '@react-navigation/native';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        nickname: '',
        email: '',
        password: '',
        tel: '',
        category: 'C',
        accessCode: '1234567891',
    });

    const handleChange = (name, value) => {
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await saveUser(employee);
            // Limpiar el formulario después de guardar exitosamente
            setEmployee({
                nickname: '',
                email: '',
                password: '',
                tel: '',
                category: 'C',
                accessCode: '1234567891',
            });
            Alert.alert('Éxito', 'El empleado ha sido agregado exitosamente.');
        } catch (error) {
            console.error('Error al guardar el empleado:', error);
            Alert.alert(
                'Error',
                'Hubo un problema al intentar agregar el empleado. Por favor, inténtalo de nuevo más tarde.'
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre del empleado:</Text>
            <TextInput
                style={styles.input}
                value={employee.nickname}
                onChangeText={(text) => handleChange('nickname', text)}
                placeholder="Ingrese el nombre del empleado"
            />
            <Text style={styles.label}>Apellido paterno del empleado:</Text>
            <TextInput
                style={styles.input}
                value={employee.email}
                onChangeText={(text) => handleChange('email', text)}
                placeholder="Ingrese el apellido paterno del empleado"
            />
            <Text style={styles.label}>Apellido materno del empleado:</Text>
            <TextInput
                style={styles.input}
                value={employee.password}
                onChangeText={(text) => handleChange('password', text)}
                placeholder="Ingrese el apellido materno del empleado"
            />
            <Text style={styles.label}>Teléfono:</Text>
            <TextInput
                style={styles.input}
                value={employee.tel}
                onChangeText={(text) => handleChange('tel', text)}
                placeholder="Ingrese el teléfono del empleado"
                keyboardType="numeric"
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Agregar Empleado</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#10ac84',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EmployeeForm;
