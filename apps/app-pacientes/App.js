import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// stack para dirigir a los archivos
import Login_Usuarios from './Login_usuarios';
import Main_cuenta from './Main';
import HospitalesCercanos from './Hospitales_cercanos';
import Detalles from './Detalles';
import Perfil from './Perfil_usuario';
import Info_Dos from './Info_dos';
import Info_Tres from './Info_tres';
import Llamada from './llamada';
import Ubicacion_A from './ubicacion_a';
import Chats_Ambulancia from './chats_ambulancia';
import Editar_Perfil from './editar_perfil';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login_usuarios");
    }, 3000); // espera 3 segundos
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/LogoApp.png')}
        style={styles.image}
      />
    </View>
  );
}

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Login_usuarios" 
          component={Login_Usuarios} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Main" 
          component={Main_cuenta} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Hospitales_cercanos" 
          component={HospitalesCercanos} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Detalles" 
          component={Detalles} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Perfil_usuario" 
          component={Perfil} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Info_dos" 
          component={Info_Dos} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Info_tres" 
          component={Info_Tres} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="llamada" 
          component={Llamada} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="ubicacion_a" 
          component={Ubicacion_A} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="chats_ambulancia" 
          component={Chats_Ambulancia} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="editar_perfil" 
          component={Editar_Perfil} 
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
