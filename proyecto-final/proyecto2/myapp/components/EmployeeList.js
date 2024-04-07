import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, StyleSheet, Dimensions } from 'react-native';
import EmployeeItem from './EmployeeItem'; // Asegúrate de tener este componente EmployeeItem creado y disponible
import { getEmployees, deleteEmployee, saveEmployee, updateEmployee } from '../api'; // Asegúrate de importar las funciones adecuadas del API

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    
    const loadEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        await loadEmployees();
    }

    const numColumns = 3;
    const renderItem = ({ item }) => {
        return <EmployeeItem employee={item} handleDelete={handleDelete}/>;
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadEmployees();
        setRefreshing(false);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.gridContainer}
                data={employees}
                keyExtractor={(item) => item.pk_employee.toString()}
                renderItem={renderItem}
                numColumns={numColumns}
                refreshing={refreshing}
                refreshControl={
                    <RefreshControl
                        colors={['#78308f']}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});

export default EmployeesList;
