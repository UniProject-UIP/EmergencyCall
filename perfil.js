import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Perfil({ navigation }) {
    // Función para cerrar sesión
    const cerrarSesion = async () => {
        try {
            const response = await fetch('http://192.168.10.109:5000/CerrarSesion/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                alert("Sesión cerrada correctamente");
                // Navegar al login después de cerrar sesión
                navigation.navigate('Login');
            } else {
                alert(data.error || 'Error al cerrar sesión');
            }
        } catch (error) {
            alert("Error al cerrar sesión: " + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                {/* Aquí puedes agregar la imagen del perfil */}
            </View>
            <Text style={styles.nombre}>Celeste inalcanzable</Text>

            <View style={styles.infocontainer}>
                <Text style={styles.infotext}>Información Personal</Text>

                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Nombre y Apellido</Text>
                    <Text style={styles.infostyle}>Joshua Voitier</Text>
                </View>
                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Número de teléfono</Text>
                    <Text style={styles.infostyle}>+50765205678</Text>
                </View>

                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Usuario</Text>
                    <Text style={styles.infostyle}>joshuv04</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={cerrarSesion} // Llamar la función de cierre de sesión
            >
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>

            <View style={styles.botones}>
                <TouchableOpacity onPress={() => navigation.navigate('Uso')}> 
                    <Icon name="home" size={25} color="black" style={[styles.icon, { marginRight: 75 }]} />
                </TouchableOpacity>

                <Icon name="file" size={25} color="black" style={[styles.icon, { marginRight: 75 }]} />
                <Icon name="user" size={25} color="black" style={styles.icon} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 90,
        backgroundColor: 'white'
    },

    profileImageContainer: {
        width: 155, 
        height: 155,
        fontSize: 50,
        borderRadius: 75, 
        borderWidth: 1, 
        borderColor: 'black', // Color del borde
    },

    nombre: {
        marginTop: 24,
        fontWeight: 'bold'
    },

    infocontainer: {
        marginRight: 'auto',
        marginLeft: 25,
        marginTop: 35
    },

    infotext: {
        fontWeight: 'bold',
        fontSize: 15
    },

    infostyle: {
        marginTop: 15
    },

    botones: {
        flexDirection: 'row',
        alignItems: 'center', // Alinear los iconos en el centro verticalmente
        marginTop: 'auto',
        marginBottom: 30,
    },

    button: {
        backgroundColor: 'white',
        padding: 10,
        width: '80%', // O establece un porcentaje, como '100%' para ancho completo
        borderRadius: 5, // Bordes redondeados (opcional)
        alignItems: 'center', // Centrar el texto dentro del botón
        alignSelf: 'center', // Centrar el botón dentro del contenedor principal
        marginTop: 35,
        borderColor: 'red',
        borderWidth: 1
    },
    buttonText: {
        color: 'red',
    },
});
