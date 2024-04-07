import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222f3e" />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222f3e',
        padding: 20,
        flexx: 1,
        alignItems: 'center',
    }
})

export default Layout