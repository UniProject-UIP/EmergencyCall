import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from "expo-location";

export default function Llamadahospital() {

    const [origin, setOrigin] = React.useState({
        latitude: 9.020557,
        longitude: -79.611913
    });


    return (
        <View style={styles.containertext}>
            <View style={styles.fotohospital}>
                <MapView 
                    style={styles.mapa}
                    initialRegion={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                >
                    {/* El Marker debe estar dentro de MapView */}
                    <Marker
                        coordinate={origin}
                    />
                </MapView>
            </View>

            <View style={styles.datos}>
                <View style={styles.containerllegada}>
                    <Text style={styles.texttiempo}>La ambulancia llega en:</Text>

                    <View style={styles.containertiempo}>
                        <Text style={styles.text1}>5</Text>
                        <Text style={styles.text1}>Min</Text>
                    </View>
                </View>

                <View style={styles.imageContainer}> 
                    <Image
                        source={require('./assets/ambulancia.png')}
                        style={styles.imagambulan}
                    />
                    <Text style={styles.textam}>Ambulancia</Text>
                </View>
            
                <View style={styles.inputcontainer}>
                    <View style={styles.containerp}>
                        <TextInput
                            style={styles.input}
                            placeholder="Mensaje..." 
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.botonenviar}>
                        <TouchableOpacity>
                            <Image
                                source={require('./assets/enviar.png')}
                                style={styles.estiloenviar} 
                                resizeMode="cover" // Usar cover para que la imagen se ajuste bien
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.publicidadimagen}>
                    <View style={styles.containerpublicidad}>
                        <Image
                            source={require('./assets/publicidad.png')}
                            style={styles.imagen2} 
                            resizeMode="cover" // Usar cover para que la imagen se ajuste bien
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containertext: {
        flex: 1,
    },

    fotohospital: {
        width: '100%', 
        height: '60%',
        alignItems: 'center',
        borderWidth: 1,
    },

    mapa: {
        width: '100%',
        height: '100%',
    },

    datos: {
        width: '100%',
        height: '45%',
        backgroundColor: 'white',
    },

    containerllegada: {
        top: 25,
        left: '10%',
        flexDirection: 'row',
        gap: 50,
    },

    texttiempo: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    containertiempo: {
        width: 60,
        borderColor: 'gray',
        height: 50,
        borderWidth: 0.8,
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    text1: {
        textAlign: 'center',
        color: 'white',
    },

    imageContainer: {
        top: '8%',
        left: '5%',
        flexDirection: 'row',
    },

    imagambulan: {
        height: 60, // Ajusta para encajar en el contenedor
        width: 80,  // Ajusta para encajar en el contenedor
    },

    textam: {
        top: 10,
        fontWeight: 'bold',
    },

    inputcontainer: {
        borderWidth: 0.8,
        width: '60%',
        height: 40,
        top: '11%',
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },

    botonenviar:  {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 'auto',
        left: '22%'
    },

    estiloenviar: {
        width: '100%',
        height: '100%'
    },

    input: {
        flex: 1,
        textAlignVertical: 'center',
        justifyContent: 'center',
    },

    containerpublicidad: {
        borderWidth: 0.5,
        width: '80%',
        height: '40%',
        marginTop: '17%',
        alignSelf: 'center',
    },

    imagen2: {
        width: '100%',
        height: '100%',
    }
});
