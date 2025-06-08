import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default function Info_Tres({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('./assets/LogoApp.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.credenciales}>Crear credenciales</Text>

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
                
                <View style={styles.Repetir}>
                    <Text style={styles.textRepetir}>Repita su contraseña por favor</Text>
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
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={styles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    containerLogo: {
        width: width * 0.7,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: height * 0.1,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    credenciales: {
        fontWeight: 'thin',
        fontSize: width < 350 ? 16 : 18,
        alignSelf: 'flex-start',
        marginLeft: width * 0.1,
    },

    ingresar: {
        width: width * 0.8,
        marginTop: height * 0.05
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingLeft: 20,
        height: 55,
        margintop: '7%'
    },

    Repetir: {
        marginBottom: 15,
        
    },

    textRepetir: {
        fontSize: 16,
        fontWeight: '500'
    },

    input: {
        height: 40,
        paddingHorizontal: 10,
        color: '#000',
        flex: 1,
    },

    button: {
        borderWidth: 1,
        width: width * 0.5,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.01,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});
