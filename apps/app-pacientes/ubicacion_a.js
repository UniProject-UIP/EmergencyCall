import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, SafeAreaView, Dimensions
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from '@env';
import * as Location from "expo-location";

const carimage = require('./assets/imageambulance.png');
const { width, height } = Dimensions.get('window');

const wp = percentage => (width * percentage) / 100;
const hp = percentage => (height * percentage) / 100;

export default function Llamadahospital({ navigation }) {
  const [origin, setOrigin] = useState({
    latitude: 9.020557,
    longitude: -79.611913
  });

  const [destination, setDestination] = useState({
    latitude: 8.97004,
    longitude: -79.53213
  });

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
    setOrigin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  }

  return (
    <SafeAreaView style={styles.containertext}>
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
          <Marker
            draggable
            coordinate={origin}
            onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
          />
          <Marker
            draggable
            coordinate={destination}
            onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
          >
            <Image source={carimage} style={{ width: wp(12), height: wp(12) }} />
          </Marker>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_KEY}
            strokeColor="red"
            strokeWidth={5}
          />
        </MapView>
      </View>

      <View style={styles.Contenedor_Datos}>
        <Text style={styles.TextLlegar}>La ambulancia llega en:</Text>
        <View style={styles.ContainerTiempo}>
          <Text style={styles.Containernumero}>5</Text>
          <Text style={styles.Containernumero}>Minutos</Text>
        </View>
      </View>

      <View style={styles.ContainerInformacion}>
        <Text style={styles.TextM}>La ambulancia esta en camino, por favor mantenga la calma</Text>
      </View>

      <View style={styles.ContainerChat}>
        <TouchableOpacity
          style={styles.BotonChat}
          onPress={() => navigation.navigate('chats_ambulancia')}
        >
          <Text style={styles.textMensajes}>Enviar un mensaje</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Containerllamar}>
          <Icon name="phone" size={wp(6)} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containertext: {
    flex: 1,
  },

  fotohospital: {
    width: '100%',
    height: hp(60),
    alignItems: 'center',
    justifyContent: 'center'
  },

  mapa: {
    width: '100%',
    height: '100%',
  },

  Contenedor_Datos: {
    width: '100%',
    height: hp(5),
    flexDirection: 'row',
    marginTop: hp(3),
    alignItems: 'center'
  },

  TextLlegar: {
    left: wp(7),
    fontWeight: '500',
    fontSize: wp(5)
  },

  ContainerTiempo: {
    borderWidth: 1,
    height: hp(7),
    width: wp(20),
    marginLeft: 'auto',
    right: wp(10),
    alignItems: 'center',
    justifyContent: 'center'
  },

  Containernumero: {
    fontWeight: '500',
    fontSize: wp(4.3)
  },

  ContainerInformacion: {
    width: wp(65),
    height: hp(10),
    marginTop: hp(5),
    left: wp(7),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgray'
  },

  TextM: {
    fontSize: wp(4.3),
    fontWeight: '400',
    textAlign: 'center'
  },

  ContainerChat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },

  BotonChat: {
    width: '70%',
    height: hp(6.5),
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: wp(4),
  },

  textMensajes: {
    fontSize: wp(4),
    fontWeight: '400',
  },

  Containerllamar: {
    width: hp(6.5),
    height: hp(6.5),
    borderRadius: hp(6.5) / 2,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
