import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { saveParking } from '../api';
import { useNavigation } from '@react-navigation/native';


const ParkingForm = () => {

    const [parkingData, setParkingData] = useState({
        name: '',
        location: '',
        capacity: '',
    });

    const handleChange = (name, value) => {
        setParkingData({ ...parkingData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await saveParking(parkingData);
            // Limpiar el formulario después de guardar exitosamente
            setParkingData({ name: '', location: '', capacity: '' });
            Alert.alert('Éxito', 'El parking ha sido agregado exitosamente.');
        } catch (error) {
            console.error('Error al guardar el parking:', error);
            Alert.alert('Error', 'Hubo un problema al intentar agregar el parking. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Numero del parking:</Text>
            <TextInput
                style={styles.input}
                value={parkingData.name}
                onChangeText={(text) => handleChange('name', text)}
                placeholder="Ingrese el numero del parking"
            />
            <Text style={styles.label}>Ubicación:</Text>
            <TextInput
                style={styles.input}
                value={parkingData.location}
                onChangeText={(text) => handleChange('location', text)}
                placeholder="Ingrese la ubicación del parking"
            />
            <Text style={styles.label}>Capacidad:</Text>
            <TextInput
                style={styles.input}
                value={parkingData.capacity}
                onChangeText={(text) => handleChange('capacity', text)}
                placeholder="Ingrese la capacidad del parking"
                keyboardType="numeric"
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Agregar Parking</Text>
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

export default ParkingForm;
