    import React from "react";
    import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
    import Icon from 'react-native-vector-icons/FontAwesome';

    export default function User({navigation}) {
        return (
            <View style={styles.container}>
                <View style={styles.imagencontainer}>
                    <Image
                        source={require('./assets/hospital.png')}
                        style={styles.imgen}
                        resizeMode="cover"
                    >
                    </Image>
                </View>

                <Text style={styles.text}>Seleccione el tipo de usuario</Text>

                <View style={styles.containerp}>
                    <TouchableOpacity 
                            style={styles.containerp} 
                            onPress={() => navigation.navigate('Login')}
                        >
                            
                            <View style={styles.containerusu}>
                                <Text style={styles.textp}>Paciente</Text>
                            </View>
                        </TouchableOpacity>
                </View>

                <View style={styles.containerp}>
                    <TouchableOpacity 
                            style={styles.containerp} 
                            onPress={() => navigation.navigate('LoginP')}
                        >
                            <View style={styles.containerpara}>
                                <Text style={styles.textp}>Paramedico</Text>
                            </View>
                        </TouchableOpacity>
                </View>

                <View style={styles.containerministerio}></View>
                
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: "white",
            padding: 20, // Agrega un poco de espacio para que no toque los bordes
        },

        imagencontainer: {
            marginTop: 50,
            width: 250, 
            height: 250, 
            borderRadius: 125, 
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: "center",
            
        },

        imgen: {
            width: "60%", // Ocupa todo el ancho del contenedor
            height: "50%", // Ocupa toda la altura del contenedor
        },

        text: {
            marginTop: 25,
            fontWeight: 'bold',
            fontSize: 18
        },

        containerp: {
            flexDirection: 'row',
            marginTop: 50,
            gap: 14,
            marginTop: 10,
            top: 20,
            marginBottom: 10, // Espacio entre contenedores
            justifyContent: 'center'
        },

        containerusu: {
            flexDirection: 'row', // Alinea el ícono y el input horizontalmente
            backgroundColor: '#1e90ff', // Fondo blanco para el contenedor
            width: '80%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
        },

        textp: {
            color: 'white',
            fontWeight: 'bold',
            
        }, 

        containerpara: {
            flexDirection: 'row', // Alinea el ícono y el input horizontalmente
            backgroundColor: 'red', // Fondo blanco para el contenedor
            width: '80%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
        },

        icons: {
            fontSize: 32,
            marginTop: 3
        },

        containerministerio:{
            marginTop: 50,
            width: '112%', 
            height: 175,  
            backgroundColor: '#d3d3d3',
            alignItems: "center",
            position: 'absolute', // Posiciona el contenedor de manera absoluta
            bottom: 0,
        },

    
        

    });
