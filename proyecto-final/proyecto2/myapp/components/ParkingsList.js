import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import ParkingItem from './ParkingsItem'; // Asegúrate de tener este componente ParkinItem creado y disponible
import { getParkings, deleteParking } from '../api'; // Asegúrate de importar las funciones adecuadas del API

const ParkingsList = () => {
    const [parkings, setParkings] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    

    const loadParkings = async () => {
        const data = await getParkings();
        setParkings(data);
    };

    useEffect(() => {
        loadParkings();
    }, []);

    const handleDelete = async (id) => {
        await deleteParking(id);
        await loadParkings();
    }

    const renderItem = ({ item }) => {
        return <ParkingItem parking={item} handleDelete={handleDelete}/>;
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadParkings();
        setRefreshing(false);
    }, []);

    return (
        <FlatList
            style={{ backgroundColor: 'white', width: '100%' }}
            data={parkings}
            keyExtractor={(item) => item.pk_parking.toString()}
            renderItem={renderItem}
            refreshing={refreshing}
            refreshControl={
                <RefreshControl
                    colors={['#78308f']}
                    onRefresh={onRefresh}
                />
            }
        />
    );
};

export default ParkingsList;
