import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './users';
import LoginScreen from './Login'; 
import Uso from './uso';
import Crear_cuenta from './Crearcuenta';
import CrearP from './createp';
import Continuacion from './continuar';
import Perfil from './perfil';
import VerHospitales from './HospitalesCerca'; 
import Llamadahospital from './llamarhospital';
import LoginP from './LoginP';
import cuentaparamedico from './CuentaParamedico';
import CrearCredenciales from './CredencialesP';
import UbicacionUsu from './UbicacionP';


const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla Home
        >
          {({ navigation }) => (
            <View style={styles.container}>
              <Image
                source={require('./assets/iconop.png')}
                style={styles.image}
              />
              <StatusBar style="auto" />
              <Button 
                title="Ir a Login" 
                onPress={() => navigation.navigate('users')} 
              />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="users" 
          component={User} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Uso" 
          component={Uso} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Crearcuenta" 
          component={Crear_cuenta} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="continuar" 
        component={Continuacion} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="perfil" 
        component={Perfil} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="llamarhospital" 
        component={Llamadahospital} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="HospitalesCerca" 
        component={VerHospitales} 
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="LoginP" 
        component={LoginP}  
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="createp" 
        component={CrearP}  
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="CuentaParamedico" 
        component={cuentaparamedico}  
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="CredencialesP" 
        component={CrearCredenciales}  
        options={{ headerShown: false }} 
        />

        <Stack.Screen 
        name="UbicacionP" 
        component={UbicacionUsu}  
        options={{ headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});
