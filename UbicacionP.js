import React from "react";
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker, Polyline}from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from '@env';

const carimage = require('./assets/imageambulance.png')

export default function UbicacionUsu() {

    const [origin, setOrigin] = React.useState({
        latitude: 8.97004,
        longitude: -79.53213
    });

    const [destination, setDestination] = React.useState({
        latitude: 8.97004,
        longitude: -79.53213
    });

    React.useEffect(() => {
        permisodelocalizacion();
    }, [])

    async function permisodelocalizacion(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted'){
            alert('Permiso denegado');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.container3}>
                        <Image
                            source={require('./assets/foto1.png')}
                            style={styles.imagen2} 
                            resizeMode="cover" // Usar cover para que la imagen se ajuste bien
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Morgan Perez</Text> 
                            <Text style={styles.text3}>Hospital punta pacifica</Text>  
                        </View>
                        
                        <TouchableOpacity>
                            <Icon name="bars" size={30} color="black" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.containermapa}>
                    <MapView 
                        style={styles.mapa}
                        initialRegion={{
                            latitude: origin.latitude,
                            longitude: origin.longitude,
                            latitudeDelta: 0.03,
                            longitudeDelta: 0.03,
                    
                        }}
                    > 
                        <Marker
                            draggable
                            coordinate={origin}
                            onDragEnd={(Directions) => setOrigin(Directions.nativeEvent.coordinate)}
                        />

                        <Marker
                            draggable
                            coordinate={destination}
                            onDragEnd={(Directions) => setOrigin(Directions.nativeEvent.coordinate)}
                        />

                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_KEY}
                            strokeColor="red"
                            strokeWidth={8}
                        />

                       <Polyline
                            coordinates={[origin, destination]}
                            strokeColor="black"
                            strokeWidth={9}
                        /> 
                    </MapView>
                </View>

                <View style={styles.containerdatos}>
                    <View style={styles.containerfotop}>
                        <Image
                            source={require('./assets/paramedico.png')}
                            style={styles.imagen2} 
                            resizeMode="cover" 
                        />
                    </View>
                    
                    <View style={styles.containerperfil}>
                        <View style={styles.textCo}>
                            <Text style={styles.text1}>Joshua Perez</Text>

                            <View style={styles.containertiempo}>
                                <Text style={styles.estilotext}>Tiempo de llegada</Text>
                                <View style={styles.llegadatime}>
                                    <Text style={styles.texttime}>5</Text>
                                    <Text style={styles.texttime2}>min</Text>
                                </View>

                                <View style={styles.containerchat}>
                                    <Icon name="comment" size={20} color="black" style={styles.chaticon} />
                                    <TextInput 
                                        style={styles.input}
                                        placeholder="Mensaje" 
                                        placeholderTextColor="black" 
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.containerpaciente}>
                            <Text style={styles.datosPaciente}>Datos del paciente</Text>

                            <View style={styles.datos}>
                                <View style={styles.datos2}>
                                    <Text style={styles.texto}>Cedula</Text>
                                    <View style={styles.cedulas}>
                                        <Text>8-980-687</Text>
                                    </View>
                                </View>
                                <View style={styles.datos2}>
                                    <Text style={styles.texto}>Seguro social</Text>
                                    <View style={styles.segurosocial}>
                                        <Text>Privado</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },

    scrollViewContainer: {
        flexGrow: 1, // Permite que el contenido dentro del ScrollView crezca y sea desplazable
    },

    container2: {
        width: '100%',
        height: '16%',
        backgroundColor: 'white',
        top: 30,
        justifyContent: 'center'
    },

    container3: {
        width: 80, 
        height: 80,
        borderRadius: 40,  
        borderColor: 'black',
        backgroundColor: 'white',
        left: '6%',
        flexDirection: 'row',
    },

    imagen2: {
        width: '100%',   
        height: '100%',
    },

    textContainer: {
        flexDirection: 'column', 
        justifyContent: 'center',
        gap: 10,
    },

    text: {
        textAlign: 'center',
        marginTop: 5,  
        fontWeight: 'bold',
        fontSize: 22,
        width: "140%"
    },

    text3: {
        textAlign: 'center',
        width: "140%",
        fontSize: 14
    },

    icon: {
        marginLeft: 75,
        width: 40
    },

    containermapa: {
        width: '100%',
        height: '50%',
        top: 32
    },

    mapa: {
        width: '100%',
        height: '100%'
    },

    containerdatos: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        top: 32,
        flexDirection: 'row'
    },

    containerfotop: {
        width: 60, 
        height: 60,
        borderRadius: 30,  
        borderColor: 'black',
        backgroundColor: 'white',
        left: '6%',
        overflow: 'hidden',
        top: 20
    },

    textCo: {
        left: 40,
        top: 30,
        flexDirection: 'row',
        gap: 40
    },

    text1: {
        fontWeight: 'bold'
    },

    containertiempo: {
        alignItems: 'center',
        gap: 15
    },

    estilotext: {
        fontWeight: 'bold'
    },

    llegadatime: {
        borderWidth: 2,
        borderColor: 'white',
        width: 60,
        height: 50,
        borderRadius: 6,
        backgroundColor: 'red',
        justifyContent: 'center'
    },

    texttime: {
        textAlign: 'center',
        color: 'white',
    },

    texttime2: {
        textAlign: 'center',
        color: 'white',
        
    },

    input: {
        borderWidth: 0.9,
        borderColor: 'black',
        width: 90,
        height: 25,
        borderRadius: 4,
        fontSize: 12,
        paddingTop: 0,
    },

    containerchat: {
        flexDirection: 'row',
        right: 10,
        gap: 10,
        alignItems: 'center',
    },

    containerpaciente: {
        right: 30,
        gap: 35
    },

    datosPaciente: { 
        fontWeight: 'bold',
        fontSize: 16,
    },

    datos: {
        flexDirection: 'row',
        gap: 20
        
    },

    datos2: {
        gap: 13,
        width: '35%',
        height: 70,
        alignItems: 'center',
        right: '10%',
        top: -9
    },

    texto: {
        fontWeight: 'bold',
        
    }

});
