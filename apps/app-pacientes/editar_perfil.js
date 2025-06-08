import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

export default function Editar_Perfil({navigation}){
    const [selectedValue, setSelectedValue] = useState('option1');
    return(
        <SafeAreaView style={styles.ContainerPrincipal}>
            <ScrollView style={styles.ContainerScroll} contentContainerStyle={styles.contentContainer}>
                <TouchableOpacity style={styles.containerFlecha} onPress={() => navigation.navigate('Perfil_usuario')}>
                    <Icon name="arrow-left" size={25} color="black" style={styles.icon} />
                </TouchableOpacity>

                <View style={styles.containertex}>
                    <Text style={styles.TextEditar}>Editar perfil</Text>
                </View>

                <View style={styles.dato}>
                    <Text style={styles.textdato}>Editar - nombre</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Joshua Jamil Voitier Vargas"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.dato}>
                    <Text style={styles.textdato}>Editar - cedula</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="9-981-689"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.dato}>
                    <Text style={styles.textdato}>Editar - Telefono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="64968428"
                        placeholderTextColor="black"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.InputPicker}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Genero" value="Generp" />
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Femenino" value="Femenino" />
                    </Picker>
                </View>

                <View style={styles.datoF}>
                    <Text style={styles.textdato}>Editar - fecha de nacimiento</Text>
                    <TextInput
                        style={styles.inputF}
                        placeholder="04 / 01 / 2002"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.datoC}>
                    <Text style={styles.textC}>Editar credenciales</Text>
                </View>

                <View style={styles.dato}>
                    <Text style={styles.textdato}>Editar - usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Joshua123"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.dato}>
                    <Text style={styles.textdato}>Editar - Contrasena</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="****"
                        placeholderTextColor="black"
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Perfil_usuario')}
                >
                    <Text style={styles.buttonText}>Guardar cambios</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ContainerPrincipal: {
        flex: 1,
        backgroundColor: 'white'
    },

    ContainerScroll: {
        flex: 1,
    },

    contentContainer: {
        paddingBottom: 100,
        minHeight: Dimensions.get('window').height + 100,
        alignItems: 'center'
    },

    containerFlecha: {
        width: "40%",
        marginTop: '14%',
        marginRight: 'auto',
        left: '10%',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },

    containertex: {
        alignItems: 'center',
        marginTop: 15
    },

    TextEditar: {
        fontSize: 20,
        fontWeight: 'bold' 
    }, 

    dato: {
        alignSelf: 'flex-start',
        marginTop: 30,
        width: '100%',
        paddingHorizontal: 20,
    },

    InputPicker: {
        alignSelf: 'flex-start',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        paddingHorizontal: 20,
        left: '6%',
        width: '89%',
        alignContent: 'center'
    },


    textdato: {
        fontSize: 16,
        fontWeight: '500'
    },

    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        width: '100%',
    },

    datoF: {
        alignSelf: 'flex-start',
        marginTop: 30,
        width: '100%',
        paddingHorizontal: 20,
    },

    inputF: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        width: '100%',
        textAlign: 'center'
    },

    datoC: {
        alignSelf: 'flex-start',
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },

    textC: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },

    button: {
        borderWidth: 1,
        width: '60%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
