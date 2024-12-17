import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Modal} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Crear_cuenta = ({ navigation }) => {
    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [genero, setGenero] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [codigoPais, setCodigoPais] = useState("+507");

    // Función de envío al backend
    const handleSubmit = () => {
        const data = {
            nombre,
            cedula, 
            telefono: codigoPais + telefono,
            genero,
        };

        // Enviar los datos al backend
        fetch('http://192.168.10.114:5000/Crear_usuarios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.success) {  // Verifica que la respuesta tenga la propiedad 'success'
                console.log('Success:', data);
                navigation.navigate('Continuacion');
            } else {
                alert("Hubo un problema al registrar el usuario");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Hubo un problema con la conexión. Inténtalo de nuevo.");
});

    };

    // Función para actualizar el código del país y cerrar el modal
    const selectCountryCode = (code) => {
        setCodigoPais(code);
        setModalVisible(false);  // Cierra el modal al seleccionar un código
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EmergencyCall</Text>

            <View style={styles.mensaje}>
                <Text style={styles.editar}>Registrese y llame una ambulancia y en unos</Text>
                <Text style={styles.texto}>minutos estará en donde se encuentre</Text>
            </View>

            <View style={styles.datos}>
                <Text style={styles.textdatos}>Datos personales</Text>
            </View>

            <View style={styles.nombre}>
                <Text style={styles.textnom}>Nombre</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Nombre completo" 
                    placeholderTextColor="black" 
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                />
            </View>

            <View style={styles.nombre}>
                <Text style={styles.textnom}>Cédula</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Cédula" 
                    placeholderTextColor="black"
                    value={cedula}
                    onChangeText={(text) => setCedula(text)}
                />
            </View>

            <View style={styles.telefonoContainer}>
                <Text style={styles.textnom}>Teléfono</Text>
                <View style={styles.phoneInputContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setModalVisible(true)} // Abre el modal al presionar el botón
                    >
                        <Text style={styles.buttonText}>{codigoPais}</Text>
                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center'}}>
                            <View style={styles.modalContainer}>
                                <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+507')}>
                                    <Text style={styles.textnum}>+507</Text>
                                    <Text style={styles.textpais}>Panamá</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.numeros} onPress={() => selectCountryCode('+90210')}>
                                    <Text style={styles.textnum}>+90210</Text>
                                    <Text style={styles.textpais}>Estados unidos</Text>
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
                            </View>
                        </View>
                    </Modal>

                    <TextInput 
                        style={styles.ingresar}
                        placeholder="Ingrese su número.." 
                        placeholderTextColor="black"
                        value={telefono}
                        onChangeText={(text) => setTelefono(text)}
                    />
                </View>
            </View>

            <View style={styles.gen}>
                <Text style={styles.textnom}>Genero</Text>
            </View>
            <View style={styles.genero}>
                <TouchableOpacity style={styles.man} onPress={() => setGenero("Hombre")}>
                    <Text style={styles.textall}>Hombre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.woman} onPress={() => setGenero("Mujer")}>
                    <Text style={styles.textall}>Mujer</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.continuacion}>
                <TouchableOpacity 
                    style={styles.continuar} 
                    onPress={handleSubmit}  
                >
                    <Text style={styles.textcon}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Crear_cuenta;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 120,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b22222',
    },
    mensaje: {
        marginTop: 25,
    },
    editar: {
        fontSize: 15,
    },
    texto: {
        textAlign: 'center',
    },
    datos: {
        marginTop: 30,
    },
    textdatos: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    nombre: {
        alignSelf: 'flex-start',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    textnom: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    telefonoContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        
    },
    phoneInputContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    button: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10, // Espacio entre el botón y el TextInput
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
   
    ingresar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flex: 1, // Ocupar el espacio restante
    },

    gen: {
        alignItems: 'right',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },

    genero: {
        flexDirection: 'row',
        alignItems: 'right',
        marginTop: 20,
    },

    man: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1, // Ocupar espacio igual
        marginRight: 10, // Espacio entre los botones
        maxWidth: 150,
    },
    
    woman: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1, // Ocupar espacio igual
        marginLeft: 10, // Espacio entre los botones
        maxWidth: 150,
    },

    textall: {
        justifyContent: 'flex-start'

    },

    textcon: {
        textAlign: 'center',
        color: 'white'
    },

    continuar: {
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 150,
        backgroundColor: 'red'
    },

    cerrar: {
        left: '90%'
    },

    numeros:{
        flexDirection: 'row',
       
    },

    textnum:{
        fontSize: 17,
        fontWeight: 'bold'
    },

    textpais: {
        fontSize: 17,
        marginLeft: 'auto',
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
    }
    
});