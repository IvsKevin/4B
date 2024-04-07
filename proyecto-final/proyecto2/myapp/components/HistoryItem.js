import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const HistoryItem = ({ history, handleDelete }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Fecha de entrada: {history.date_in}</Text>
            <Text style={styles.itemText}>Fecha de salida: {history.date_out}</Text>
            <Text style={styles.itemText}>ID del estacionamiento: {history.fk_parking}</Text>
            <Text style={styles.itemText}>ID de la tarjeta: {history.fk_card}</Text>
            <Text style={styles.itemText}>ID del espacio: {history.fk_space}</Text>
            <Text style={styles.itemText}>ID del estado: {history.fk_status}</Text>
            <Pressable style={styles.btnSee} onPress={() => handleDelete(history.id)}>
                <Text style={{ color: 'white' }}>Ver detalles</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#EAEAEA',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    btnSee: {
        backgroundColor: '#1e8449',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
    },
});

export default HistoryItem;
