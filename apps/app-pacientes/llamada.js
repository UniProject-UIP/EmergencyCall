import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Llamada( {navigation} ){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerllamada}>
                <Image
                    source={require('./assets/llamada.png')}
                    style={styles.foto}
                />
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('ubicacion_a')}
            >
                <Icon name="map-marker" size={20} color="red" style={styles.icon} />
                <Text style={styles.buttonText}>Ver ubicacion de ambulancia</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "center"
    },

    containerllamada: {
       
        width: "70%",
        height: "40%"
    },

    profileImageContainer: {
        width: 155, 
        height: 155,
        borderRadius: 75, 
        borderWidth: 1, 
        borderColor: 'black', // Color del borde
        overflow: 'hidden'
    },

    foto: {
        height: '100%',
        width: '100%'
    },

    button: {
        height: '7%',
        width: '50%',
        borderRadius: 5, 
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        marginLeft: 10, 
    },


});