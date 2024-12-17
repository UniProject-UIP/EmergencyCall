// Login.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) { // Recibe 'navigation' como prop
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>EmergencyCall</Text>
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

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Uso')} // Navega a 'Uso'
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>   
                <Text style={styles.forget}>¿Se le ha olvidado su contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Crearcuenta')} 
            >
                <Text style={styles.account}>¿No tiene cuenta?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 200,
    },
    title: {
        fontSize: 45,
        color: '#b22222',
        fontWeight: 'bold'
    },
    ingresar: {
        width: '80%', // Ancho del contenedor de los inputs
        marginTop: 120,

    },
    inputContainer: {
        flexDirection: 'row', // Alinea el ícono y el input horizontalmente
        alignItems: 'center', // Alinea verticalmente el ícono y el input
        borderColor: 'black', // Color del borde
        borderWidth: 0.9, // Grosor del borde ajustado
        borderRadius: 5, // Bordes redondeados
        backgroundColor: '#fff', // Fondo blanco para el contenedor
        marginBottom: 20, // Espacio entre los campos
        paddingLeft: 20,
    },
    input: {
        height: 40, // Altura del campo de entrada
        paddingHorizontal: 10, // Espacio interno horizontal
        color: '#000', // Color del texto
        flex: 1, // Para que el TextInput ocupe el espacio restante
    },
    
    button: {
        backgroundColor: 'red',
        padding: 9,
        width: '80%', // O establece un porcentaje, como '100%' para ancho completo
        borderRadius: 5, // Bordes redondeados (opcional)
        alignItems: 'center', // Centrar el texto dentro del botón
        alignSelf: 'center', // Centrar el botón dentro del contenedor principal
    },
    buttonText: {
        color: 'white',
    },
    forget: {
        fontSize: 15,
        marginTop: 80,
        marginBottom: 'auto',
        textAlign: 'center',
    },
    account: {
        fontSize: 15,
        textAlign: 'center',
    },
});
