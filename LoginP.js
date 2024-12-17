import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginP({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.contenerI}>
        <Image
            source={require('./assets/imagenp.png')}
            style={styles.image}
            resizeMode="contain"
            />
        </View>

        <Text style={styles.text}>Iniciar Sesión paramedico</Text>

        <View style={styles.ingresar}>
                <View style={styles.inputContainer}>
                    <Icon name="user" size={20} color="black" />
                    <TextInput 
                        style={styles.input}
                        placeholder="Usuario" 
                        placeholderTextColor="black" 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña" 
                        secureTextEntry 
                        placeholderTextColor="black" 
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('CuentaParamedico')}
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('createp')}
            >
                <Text style={styles.account}>¿No tiene cuenta?</Text>
            </TouchableOpacity>

            <View style={styles.informacion}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },

  contenerI: {
    marginTop: 80,
    width: 100, 
    height: 100,  
    justifyContent: 'center',
    alignItems: "center",
  },

  image: {
    width: '100%',  // La imagen tomará todo el ancho del contenedor
    height: '100%', // La imagen tomará toda la altura del contenedor
  },

  text: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  ingresar: {
    width: '80%', // Ancho del contenedor de los inputs
    marginTop: 50,

},
inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderColor: 'black', 
    borderWidth: 0.9, 
    borderRadius: 5, 
    backgroundColor: '#fff', 
    marginBottom: 20,
    paddingLeft: 20,
},
input: {
    height: 40, // Altura del campo de entrada
    paddingHorizontal: 10, // Espacio interno horizontal
    color: '#000', // Color del texto
    flex: 1, // Para que el TextInput ocupe el espacio restante
},

button: {
    backgroundColor: 'red',
    padding: 9,
    width: '40%', // O establece un porcentaje, como '100%' para ancho completo
    height: 50,
    borderRadius: 5, // Bordes redondeados (opcional)
    alignItems: 'center', // Centrar el texto dentro del botón
    alignSelf: 'center', // Centrar el botón dentro del contenedor principal
    justifyContent: 'center',
    marginTop: 10
},
buttonText: {
    color: 'white',
},

account: {
    marginTop: 60,
    fontSize: 18,
    textAlign: 'center',
},

informacion: {
    marginTop: 35,
    width: '100%',
    height: '25%',
    backgroundColor: 'lightgray'
}

});
