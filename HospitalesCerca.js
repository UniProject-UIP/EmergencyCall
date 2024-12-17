import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'; // Importar axios para las peticiones HTTP

export default function HospitalesCerca({navigation}) {
    const [hospitals, setHospitals] = useState([]); // Estado para los hospitales

    useEffect(() => {
        // Llamar a la API de Google Places
        const fetchHospitals = async () => {
            try {
                const response = await axios.get('http://192.168.10.109/VerHospitales', {
                    params: {
                        lat: '8.9824', // Latitud
                        lng: '-79.5197', // Longitud
                    }
                });
                setHospitals(response.data.hospitales); // Suponiendo que la respuesta es un objeto con una propiedad "hospitales"
            } catch (error) {
                console.error("Error fetching hospitals:", error);
            }
        };

        fetchHospitals(); // Llamar a la función para obtener los hospitales
    }, []);

    // Función para llamar al hospital
    const handleCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`).catch(err => console.error("Error al intentar llamar:", err));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.containertext}>
                <Icon name="arrow-left" size={24} color="black" style={styles.icon} />
                <Text style={styles.texto}>Hospitales cercanos</Text>

                <View style={styles.containerfoto}>
                    {hospitals.map((hospital, index) => (
                        <View key={index} style={styles.containerhospital}>
                            <Text style={styles.hospitalName}>{hospital.nombre}</Text>
                            <Text style={styles.hospitalAddress}>{hospital.direccion}</Text>

                            <TouchableOpacity 
                                style={styles.containerllamada} 
                                onPress={() => handleCall(hospital.telefono)} // Llamada al teléfono del hospital
                            >
                                <Text style={styles.botonllamar}>Llamar</Text>
                            </TouchableOpacity>

                            <View style={styles.containerhorarios}>
                                <Text style={styles.texthorario}>Horarios disponibles</Text>
                                <Text style={styles.textdias}>{hospital.horarios}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexGrow: 1,
        backgroundColor: '#f0f0f0',
        minHeight: '100%',
    },
    containertext: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
    },
    icon: {
        position: 'absolute',
        left: 25,
        paddingTop: 60,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        right: 15,
    },
    containerfoto: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 70,
    },
    containerhospital: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    hospitalName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    hospitalAddress: {
        fontSize: 14,
        marginBottom: 10,
    },
    containerllamada: {
        backgroundColor: "white",
        padding: 12, 
        borderRadius: 5, 
        alignItems: "center",
        borderWidth: 0.9,
        borderColor: 'green',
        marginTop: 15,
    },
    botonllamar: {
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
        textAlign: 'center',
    },
    containerhorarios: {
        marginTop: 20,
    },
    texthorario: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    textdias: {
        fontSize: 14,
    }
});
