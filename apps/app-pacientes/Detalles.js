import React from 'react';
import { View, Text, StyleSheet, Button, Linking, ScrollView, SafeAreaView } from 'react-native';

export default function Detalles({ route }){
    const { hospital } = route.params; // Obtén los datos del hospital pasados en la navegación
    const handleCall = () => { // Función para hacer la llamada al hospital
    const phone = hospital.formatted_phone_number;
    if (phone) {
        Linking.openURL(`tel:${phone}`);
    } else {
        alert("Número de teléfono no disponible");
    }
    };

    // Función para abrir en Google Maps
    const handleNavigate = () => {
    const { lat, lng } = hospital.geometry.location;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    Linking.openURL(url);
    };

    // Verificar si la propiedad existe
    const hasOpeningHours = hospital.opening_hours && hospital.opening_hours.weekday_text;
    const hasPhone = hospital.formatted_phone_number;
    const hasLocation = hospital.geometry && hospital.geometry.location;


    return(
        <SafeAreaView style={styles.container1}>
            <ScrollView style={styles.container}>
                <Text style={styles.hospitalName}>{hospital.name}</Text>
        
                <Text style={styles.address}>
                {hospital.vicinity || "Dirección no disponible"}
                </Text>
        
                <View style={styles.infoContainer}>
                <Text style={styles.detailTitle}>Detalles del Hospital</Text>
        
                {hasOpeningHours && hospital.opening_hours.weekday_text.length > 0 ? (
                    <View style={styles.detailRow}>
                    <Text style={styles.label}>Horarios:</Text>
                    {hospital.opening_hours.weekday_text.map((day, index) => (
                        <Text key={index} style={styles.value}>
                        {day}
                        </Text>
                    ))}
                    </View>
                ) : (
                    <Text style={styles.value}>Horarios no disponibles</Text>
                )}
        
                {hasPhone ? (
                    <View style={styles.detailRow}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.value}>{hospital.formatted_phone_number}</Text>
                    <Button title="Llamar" onPress={handleCall} />
                    </View>
                ) : (
                    <Text style={styles.value}>Teléfono no disponible</Text>
                )}
        
                {/* Enlace a Google Maps */}
                {hasLocation ? (
                    <View style={styles.detailRow}>
                    <Text style={styles.label}>Ubicación:</Text>
                    <Button title="Ver en Google Maps" onPress={handleNavigate} />
                    </View>
                ) : (
                    <Text style={styles.value}>Ubicación no disponible</Text>
                )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
      marginTop: 30
    },
  
    hospitalName: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#2C3E50',
    },
    address: {
      fontSize: 16,
      marginBottom: 20,
      color: '#7F8C8D',
    },
    infoContainer: {
      marginTop: 20,
      backgroundColor: '#ECF0F1',
      padding: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#BDC3C7',
    },
    detailTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#34495E',
    },
    detailRow: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: '#34495E',
    },
    value: {
      fontSize: 14,
      color: '#2C3E50',
      marginTop: 5,
    },
  });