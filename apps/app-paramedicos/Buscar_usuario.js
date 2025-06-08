import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Linking, Dimensions, Modal, modalVisible } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const carimage = require('./assets/imageambulance.png');
const { width, height } = Dimensions.get('window');


export default function Buscar_Usuario({ navigation }) {
    const [isRecording, setIsRecording] = useState(false);
    const [message, setMessage] = useState('');
    const [origin, setOrigin] = useState({
        latitude: 8.97004,
        longitude: -79.53213
    });
    const [destination, setDestination] = useState({
        latitude: 8.97004,
        longitude: -79.53213
    });

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        permisodelocalizacion();
    }, []);

    async function permisodelocalizacion() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permiso denegado');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        };
        setOrigin(current);
    }

    const abrirConWaze = () => {
        const url = `waze://?ll=${destination.latitude},${destination.longitude}&navigate=yes`;
        Linking.openURL(url).catch(err => console.error("No se pudo abrir Waze: ", err));
    };

    return (
        <SafeAreaView style={styles.scrollViewContainer}>
            <View style={styles.nombreysitio}>
                <Text style={styles.textnom}>Busca a Joshua Voitier en las exclusas de Pedro Miguel</Text>
            </View>

            <View style={styles.containermapa}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    }}
                >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_KEY}
                        strokeColor="red"
                        strokeWidth={5}
                    />
                    <Marker
                        draggable
                        coordinate={origin}
                        onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
                    >
                        <Image source={carimage} style={styles.carIcon} />
                    </Marker>
                    <Marker
                        draggable
                        coordinate={destination}
                        onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
                    />
                </MapView>
            </View>

            <TouchableOpacity style={styles.containerAbrirWaze} onPress={abrirConWaze}>
                <Text style={styles.textwaze}>Abrir con waze</Text>
            </TouchableOpacity>
            
            
           <TouchableOpacity
                style={styles.containerdetallesPaciente}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.detalles}>Ver detalles del paciente</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: '80%',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Detalles del paciente</Text>
                        <View style={styles.ModalText}>
                            <Text><Text style={{ fontWeight: 'bold' }}>Nombre: </Text>Joshua Voitier</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Edad: </Text>54</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Sexo: </Text>Hombre</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Ubicación: </Text>Exclusas de Pedro Miguel</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Cédula: </Text>8-981-689</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Causa: </Text>Paro cardiaco</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Descripción: </Text>No respira bien</Text>
                            <Text><Text style={{ fontWeight: 'bold' }}>Posible causa: </Text>Corría mucho</Text>
                        </View>

                        <TouchableOpacity
                            style={{ marginTop: 20, backgroundColor: '#009FFF', padding: 10, borderRadius: 5 }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: 'white' }}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.ContainerChat}>
                <TouchableOpacity
                    style={styles.BotonChat}
                    onPress={() => navigation.navigate('chats_usuario')}
                >
                    <Text style={styles.textMensajes}>Enviar un mensaje</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Containerllamar}>
                    <Icon name="phone" size={25} color="green" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    nombreysitio: {
        width: '90%',
        marginTop: height * 0.07,
        paddingHorizontal: width * 0.05,
    },

    textnom: {
        fontWeight: 'bold',
        fontSize: 22,
    },

    containermapa: {
        width: '100%',
        height: height * 0.50,
        marginTop: height * 0.02,
        overflow: 'hidden',
    },

    map: {
        width: '100%',
        height: '100%',
    },

    carIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

    containerAbrirWaze: {
        width: '45%',
        height: height * 0.065,
        marginTop: height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009FFF',
        borderRadius: 8,
    },

    textwaze: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },

    containerdetallesPaciente: {
        width: '55%',
        height: height * 0.065,
        marginTop: height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        alignSelf: 'flex-start',
        marginLeft: width * 0.05,
        borderRadius: 8,
    },

    detalles: {
        fontSize: 15,
    },

    ModalText: {
        alignItems: 'center',
        gap: 15,
        marginTop: 15
    },

    ContainerChat: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.03,
    },

    BotonChat: {
        width: '70%',
        height: height * 0.065,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        paddingHorizontal: 15,
    },

    textMensajes: {
        fontSize: 16,
        fontWeight: '400',
    },

    Containerllamar: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        right: '6%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    }

  
});
