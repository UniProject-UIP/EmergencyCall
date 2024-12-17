import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Modal } from "react-native";

export default function CrearP( {navigation} ) {

    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [codigoPais, setCodigoPais] = useState("+507");

    // Función para actualizar el código del país y cerrar el modal
    const selectCountryCode = (code) => {
        setCodigoPais(code);
        setModalVisible(false);  // Cierra el modal al seleccionar un código
    };

    return (
        <View>
            <Text style={styles.texto}>EmergencyCall</Text>
            <Text style={styles.text}>Crea tu cuenta</Text>

            <View style={styles.containerdatos}>
                <Text style={styles.datostext}>Datos personales</Text>

                <View style={styles.containernom}>
                    <Text style={styles.datosnom}>Nombre</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nombre completo" 
                        placeholderTextColor="black"
                        value={nombre}
                        onChangeText={(text) => setNombre(text)}
                    />
                </View>

                <View style={styles.containerhosp}>
                    <Text style={styles.datoshosp}>Hospital</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Hospital donde trabaja" 
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.containerid}>
                    <Text style={styles.textid}>Cedula</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Cedula" 
                        placeholderTextColor="black"
                        value={cedula}
                        onChangeText={(text) => setCedula(text)}

                    />
                </View>

                <View style={styles.containerfon}>
                    <Text style={styles.textfon}>telefono</Text>
                </View>

                <View style={styles.containernumeros}> {/* contenedor para separar el button con el de input */}
                    <TouchableOpacity 
                        style={styles.containerboton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.buttontext}>{codigoPais}</Text>
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.inputfon}
                        placeholder="telefono" 
                        placeholderTextColor="black"
                        value={telefono}
                        onChangeText={(text) => setTelefono(text)} 
                    />
                </View>

                <Modal
                    animationType="slide"
                    transparent
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+507')}>
                                <Text style={styles.textnum}>+507</Text>
                                <Text style={styles.textpais}>Panamá</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+90210')}>
                                <Text style={styles.textnum}>+90210</Text>
                                <Text style={styles.textpais}>Estados Unidos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+1010')}>
                                <Text style={styles.textnum}>+1010</Text>
                                <Text style={styles.textpais}>Venezuela</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+110111')}>
                                <Text style={styles.textnum}>+110111</Text>
                                <Text style={styles.textpais}>Colombia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+100000')}>
                                <Text style={styles.textnum}>+100000</Text>
                                <Text style={styles.textpais}>China</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+8001')}>
                                <Text style={styles.textnum}>+8001</Text>
                                <Text style={styles.textpais}>Espana</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+2000')}>
                                <Text style={styles.textnum}>+2000</Text>
                                <Text style={styles.textpais}>Costa rica</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+10000')}>
                                <Text style={styles.textnum}>+10000</Text>
                                <Text style={styles.textpais}>Nicaragua</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+1101')}>
                                <Text style={styles.textnum}>+1101</Text>
                                <Text style={styles.textpais}>Salvador</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+8320000')}>
                                <Text style={styles.textnum}>+8320000</Text>
                                <Text style={styles.textpais}>Chile</Text>
                            </TouchableOpacity>

                            {/* Aquí puedes agregar más países */}
                        </View>
                    </View>
                </Modal>

                <View style={styles.gen}>
                    <Text style={styles.textnom}>Genero</Text>
                </View>
                
                <View style={styles.genero}> {/* contenedor para separar con row */} 
                    <TouchableOpacity style={styles.man} onPress={() => setGenero("Hombre")}>
                        <Text style={styles.textall}>Hombre</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.woman} onPress={() => setGenero("Mujer")}>
                        <Text style={styles.textall}>Mujer</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.contitnuar}
                onPress={() => navigation.navigate('CredencialesP')} 
            >
                <Text style={styles.textcontinuar}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b22222'
    },

    text: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
    },

    containerdatos: {
        marginTop: 35,
        left: '8%',
        marginTop: 35,
    },

    datostext: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    containernom:{
        marginTop: 20
    },

    datosnom:{
        fontSize: 17,
        fontWeight: 'bold',
    },

    input: {
        marginTop: 13,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 0.9
    },

    containerhosp: {
        marginTop: 20
    },

    datoshosp: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    containerid: {
        marginTop: 20
    },

    textid: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    containernumeros:{
        flexDirection: 'row',
        gap: 10
    },

    containerboton:{
        width: '25%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.9,
        marginTop: 15,
        justifyContent: 'center', 
        alignItems: 'center',
    },

    buttontext: {
        fontSize: 16,           
        fontWeight: 'bold',
    },

    containerfon: {
        marginTop: 20
    },

    textfon: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    inputfon: {
        width: '55%',
        borderColor: 'gray',
        borderWidth: 0.9,
        height: 40,
        marginTop: 15
    },

    gen: {
        marginTop: 20
    },

    textnom:{
        fontSize: 17,
        fontWeight: 'bold',
    },

    genero: {
        flexDirection: 'row',
        alignItems: 'right',
        marginTop: 15,
    },

    man: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 8, // Espacio entre los botones
        maxWidth: 150,
        width: '40%'
    },
    
    woman: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginLeft: 10, // Espacio entre los botones
        maxWidth: 150,
         width: '40%'
    },

    textall: {
        justifyContent: 'flex-start',
    },

    containercont: {
        alignItems: 'center',
        padding: 10, 
    },

    contitnuar: {
        marginTop: 20,
        borderColor: 'gray',
        width: '40%',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#ff0000',
        alignSelf: 'center',
    },

    textcontinuar: {
        color: 'white'
    },

    modalContainer: {
        height: '60%',
        width: '70%',
        backgroundColor: 'white',
        padding: 20,
        gap: 22,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 9
    },

    numeros: {
        flexDirection: 'row'
        
    },

    textnum: {
        fontSize: 17,
    },

    textpais: {
        fontSize: 17,
        marginLeft: 'auto'
    }


});
