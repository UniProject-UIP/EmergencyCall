import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import axios from 'axios';

const GOOGLE_API_KEY = "AIzaSyBJD_rpcuQnplSLj65unp9lh9UiAyV24iQ";

export default function HospitalesCercanos() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    obtenerUbicacion();
  }, []);

  // Obtener la ubicación actual del usuario
  const obtenerUbicacion = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError("Permiso de ubicación denegado");
      setLoading(false);
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({});
      obtenerHospitales(location.coords.latitude, location.coords.longitude);
    } catch (e) {
      setError("Error obteniendo la ubicación");
      setLoading(false);
    }
  };

  // Obtener los hospitales cercanos usando la API de Google Places
  const obtenerHospitales = async (lat, lng, nextToken = '') => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            location: `${lat},${lng}`,
            radius: 10000,
            type: "hospital",
            key: GOOGLE_API_KEY,
            pagetoken: nextToken, // Si existe, se incluye para manejar la paginación
          },
        }
      );
      console.log("Respuesta de la API:", response.data);

      if (response.data.results.length > 0) {
        setHospitals(prevHospitals => [...prevHospitals, ...response.data.results]);
      } else {
        setError("No se encontraron hospitales cercanos.");
      }

      // Si hay más resultados, obtenemos la siguiente página
      if (response.data.next_page_token) {
        setNextPageToken(response.data.next_page_token);
      } else {
        setNextPageToken(null);
      }
    } catch (error) {
      setError("Error obteniendo hospitales.");
    }
    setLoading(false);
  };

  // Cargar más hospitales cuando el usuario llegue al final
  const cargarMasHospitales = () => {
    if (nextPageToken) {
      obtenerHospitales(hospitals[0]?.geometry.location.lat, hospitals[0]?.geometry.location.lng, nextPageToken);
    }
  };

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        onEndReached={cargarMasHospitales} // Detectar cuando el usuario llega al final
        onEndReachedThreshold={0.5} // Umbral de 50% para que se active
      >
        <View style={styles.container}>
          <Text style={styles.texto}>Hospitales Cercanos</Text>

          {loading && <ActivityIndicator size="large" color="blue" />}

          {error && (
            <Text style={styles.errorText}>{error}</Text>
          )}

          {hospitals.length > 0 && !loading && (
            <View style={styles.containerfoto}>
              {hospitals.map((hospital, index) => (
                <View key={index} style={styles.containerhospital}>
                  <Text style={styles.hospitalName}>{hospital.name}</Text>
                  <Text style={styles.hospitalAddress}>
                    {hospital.vicinity || "Dirección no disponible"}
                  </Text>
                  
                  <TouchableOpacity
                    style={styles.containerllamada}
                    onPress={() => navigation.navigate('Detalles', { hospital: hospital })}
                  >
                    <Text style={styles.botonllamar}>Ver Detalles</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    }, 

    scrollContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexGrow: 1,
        backgroundColor: 'white',
        minHeight: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    containerfoto: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
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
    errorText: {
        fontSize: 16,
        color: 'red',
        marginTop: 20,
        fontWeight: 'bold',
    }
});
