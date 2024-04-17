import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmployeeItem = ({ employee, handleDelete }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigation.navigate('EmployeeDetails', { id: employee.pk_employee })}>
                <Text style={styles.itemTitle}>
                    Nombre del empleado:
                </Text>
                <Text style={styles.itemDescription}>
                    {employee.employee_name} {employee.employee_lastNameP} {employee.employee_lastNameM}
                </Text>
                <Text style={styles.itemTitle}>
                    Empresa asociada:
                </Text>
                <Text style={styles.itemDescription}>{employee.fk_client}</Text>
            </Pressable>

            <Pressable style={styles.btnEliminar} onPress={() => handleDelete(employee.pk_employee)}>
                <Text style={{ color: 'white' }}>Eliminar</Text>
            </Pressable>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 3 - 20; // Resta el margen entre elementos

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#EAEAEA',
        width: itemWidth,
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        marginHorizontal: 5, // Agregar margen horizontal
        marginVertical: 5, // Agregar margen vertical
    },
    itemTitle: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
        marginTop: 10,
    },
    itemDescription: {
        fontSize: 14,
        textAlign: 'center',
    },
    btnEliminar: {
        backgroundColor: 'gray',
        padding: 7,
        borderRadius: 10,
        marginTop: 15,
    }
});

export default EmployeeItem;
