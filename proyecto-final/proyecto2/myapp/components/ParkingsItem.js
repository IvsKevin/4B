import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParkingItem = ({ parking, handleDelete }) => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.navigate('ParkingDetails', { id: parking.pk_parking })}>
                <Text style={styles.itemTitle}>Numero de Parking: {parking.parking_number}</Text>
                <Text style={styles.itemDescription}>Ubicacion: {parking.parking_location}</Text>
                <Text style={styles.itemDescription}>Capacidad: {parking.parking_capacity}</Text>
            </Pressable>

            <Pressable style={styles.btnEliminar} onPress={() => handleDelete(parking.pk_parking)}>
                <Text style={{ color: 'white' }}>Eliminar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#EAEAEA',
        padding: 10,
        margin: 10,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,

    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 15,
    },
    btnEliminar: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 10,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ParkingItem;
