import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CrearCredenciales({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textcontainer}>EmergencyCall</Text>

            <View style={styles.containerinfo}>
                <Text style={styles.textinfo}>Datos personales</Text>
            </View>

            <View style={styles.ingresar}>
                <View style={styles.inputContainer}>
                    <Icon name="user" size={20} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="Usuario" 
                        placeholderTextColor="black" 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña" 
                        secureTextEntry 
                        placeholderTextColor="black" 
                    />
                </View>
            </View>

            <View style={styles.cuenta}>
                <TouchableOpacity
                    style={styles.atras}
                    onPress={() => navigation.navigate('createp')}
                >
                    <Text style={styles.textall}>Atras</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.crear}
                    onPress={() => navigation.navigate('CuentaParamedico')}
                >
                    <Text style={styles.textall}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.informacion}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,               
        alignItems: 'center',     
        padding: 50,
        backgroundColor: 'white'
    },
    textcontainer: {
        fontSize: 35, 
        fontWeight: 'bold', 
        color: '#b22222'
    },

    containerinfo: {
        top: 30
    },

    textinfo: {
        fontSize: 20,
        textAlign: 'center'
    },

    ingresar: {
        width: '100%', 
        justifyContent: 'center',
        flex: 1
        
    },

    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderColor: 'black', 
        borderWidth: 0.9, 
        borderRadius: 5, 
        backgroundColor: '#fff', 
        marginBottom: 20,
        paddingLeft: 20,
        height: 50,
        
    },
    
    input: {
        height: 40, // Altura del campo de entrada
        paddingHorizontal: 10, // Espacio interno horizontal
        color: '#000', // Color del texto

    },

    cuenta: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 190,
        position: 'absolute',
    },

    atras: {
        backgroundColor: 'gray',
        borderRadius: 5,
        padding: 12,
        flex: 1,
        marginRight: 10,
        maxWidth: 150,
    },

    crear: { 
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 12,
        flex: 1,
        marginLeft: 10,
        maxWidth: 150,
    },

    textall: {
        textAlign: 'center',
        color: 'white'
    },

});
