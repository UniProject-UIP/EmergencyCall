import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

export default function Login_Usuarios({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('./assets/LogoApp.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

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

                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Nombre de su institucion" value="Nombre de su institucion" />
                            <Picker.Item label="Semm" value="Semm" />
                            <Picker.Item label="Panama clinic" value="Panama clinic" />
                            <Picker.Item label="Summe" value="Summe" />
                            <Picker.Item label="MasVida" value="MasVida" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.button, { marginTop: '15%' }]}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forget}>¿Se le ha olvidado su contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Info_dos')}>
                    <Text style={styles.account}>¿No tiene cuenta?</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    containerLogo: {
        width: '60%',
        aspectRatio: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    estiloInicioSesion: {
        fontWeight: 'bold',
        fontSize: 20,
        right: 80,
    },
    ingresar: {
        width: '80%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingLeft: 20,
        height: 50,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        color: '#000',
        flex: 1,
    },

    pickerContainer: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        marginTop: '5%',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    button: {
        width: '80%',
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
       
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },

    forget: {
        fontSize: 17,
        marginTop: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    account: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
});
