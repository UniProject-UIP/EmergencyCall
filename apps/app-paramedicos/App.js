import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// stack para dirigir a los archivos
import Login_Paramedicos from './Login_paramedico';
import Cuenta_Paramedicos from './Cuenta_paramedico';
import Buscar_Usuario from './Buscar_usuario';
import Chats_Usuario from './chats_usuario';


const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_paramedico">
        <Stack.Screen 
          name="Home" 
          options={{ headerShown: false }} 
        >
          {({ navigation }) => (
            <View style={styles.container}>
              <Image
                source={require('./assets/LogoApp.png')}
                style={styles.image}
              />
              <StatusBar style="auto" />
              <Button 
                title="AmbuLink" 
                onPress={() => navigation.navigate('Login_paramedico')} 
              />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="Login_paramedico" 
          component={Login_Paramedicos} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Cuenta_paramedico" 
          component={Cuenta_Paramedicos} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Buscar_usuario" 
          component={Buscar_Usuario} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="chats_usuario" 
          component={Chats_Usuario} 
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
