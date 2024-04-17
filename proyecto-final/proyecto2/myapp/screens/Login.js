import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { loginUser } from '../api'; // Importamos la función de autenticación de la API
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const LoginScreen = ({ setIsLoggedIn }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const navigation = useNavigation(); // Obtiene el objeto de navegación

    const handleChange = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            // Llamamos a la función de autenticación de la API
            const response = await loginUser(userData);

            // Verificamos si la autenticación fue exitosa
            if (response.success) {
                // Si es exitosa, redireccionamos al usuario al HomeScreen
                // Limpiar el formulario después de guardar exitosamente
                setUserData({ email: '', password: '' });

                // Aquí puedes navegar a la pantalla HomeScreen o realizar alguna acción necesaria
                setIsLoggedIn(true);
                redirectToHomeScreen();
            } else {
                // Si hay un error, mostramos el mensaje de error
                // Puedes mostrar el mensaje de error en una alerta o en otro lugar de la interfaz de usuario
                Alert.alert('Error', response.message);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Manejo de errores, puedes mostrar un mensaje de error al usuario aquí
        }
    };

    const redirectToHomeScreen = () => {
        // Navegar a la pantalla de inicio (Parkings)
        navigation.navigate('Parkings');
        console.log('Usuario autenticado. Redirigiendo al HomeScreen...');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={userData.email}
                onChangeText={(text) => handleChange('email', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={userData.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
