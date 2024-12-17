import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';  // Usamos Axios para hacer las solicitudes HTTP

export default function Continuacion({ navigation }) {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const crearCuenta = async () => {
        if (!nombreUsuario || !contrasena) {
            Alert.alert("Error", "Usuario y contraseña son requeridos.");
            return;
        }

        try {
            // Definir los datos que vamos a enviar
            const datosUsuario = {
                nombre_usuario: nombreUsuario,
                contrasena: contrasena,
                // Asegúrate de incluir todos los demás datos que ya envías al backend
                // nombre, apellido, cedula, genero, telefono, zip_code
            };

            // Realizamos la petición POST al backend
            const response = await axios.post('http://192.168.10.109:5000/CredencialesUsuarios', datosUsuario);

            // Verificar si la creaciaón fue exitosa
            if (response.status === 201) {
                Alert.alert("Éxito", "Cuenta creada con éxito");
                // Puedes navegar a otra pantalla si es necesario
                navigation.navigate('Uso');
            } else {
                Alert.alert("Error", "Hubo un problema al crear la cuenta.");
            }
            
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un error al conectar con el servidor.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titulo1}>
                <Text style={styles.titulo}>EmergencyCall</Text>
                <Icon name="phone" size={45} color="green" style={styles.icon} />
            </View>

            <View style={styles.crearcuenta}>
                <Text style={styles.create}>Crear cuenta</Text>
            </View>

            <View style={styles.ingresar}>
                <View style={styles.inputContainer}>
                    <Icon name="user" size={20} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor="black"
                        value={nombreUsuario}
                        onChangeText={setNombreUsuario}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        placeholderTextColor="black"
                        value={contrasena}
                        onChangeText={setContrasena}
                    />
                    <Icon name="eye" size={20} color="black" style={styles.eyeIcon} />
                </View>
            </View>

            <View style={styles.cuenta}>
                <TouchableOpacity
                    style={styles.atras}
                    onPress={() => navigation.navigate('Crearcuenta')}
                >
                    <Text style={styles.textall}>Atras</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.crear}
                    onPress={crearCuenta}  // Llamamos a la función para crear la cuenta
                >
                    <Text style={styles.textall}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 120,
        backgroundColor: '#fff',
    },

    titulo1: {
        marginRight: 'auto',
        left: '10%',
        flexDirection: 'row',
        gap: 40
    },

    titulo: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#333',
    },

    crearcuenta: {
        marginTop: 50,
        marginRight: 160
    },

    create: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },

    ingresar: {
        width: '80%',
        marginTop: 100,
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
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        color: '#000',
        flex: 1,
    },

    eyeIcon: {
        marginRight: 12,
    },

    cuenta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
    },

    atras: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginRight: 10,
        maxWidth: 150,
    },

    crear: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginLeft: 10,
        maxWidth: 150,
    },

    textall: {
        textAlign: 'center'
    },
});