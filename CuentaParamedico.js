import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Cuentaparamedico({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.container1}> 
                <View style={styles.containerfoto}>
                    <Icon name="user" size={60} color="black" style={styles.icon} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Morgan Perez</Text> 
                    <Text style={styles.text2}>8-970-207</Text>
                    <Text style={styles.text3}>Hospital punta pacifica</Text>  
                </View>
            </View>

            <View style={styles.containermapa}>
                <Image
                    source={require('./assets/locacion.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.informacion}>
                <View style={styles.containerlinea}>

                    <View style={styles.imagenparamedico}>
                        <Image
                            source={require('./assets/paramedico.png')}
                            style={styles.imagen2} // Cambié de `image` a `imagen2` para usar el tamaño correcto
                            resizeMode="cover" // Usar cover para que la imagen se ajuste bien
                        />
                    </View>
                    <MaterialIcon name="notifications" size={30} color="red" />

                    <View style={styles.ayuda}>
                        <TouchableOpacity 
                            style={styles.containerboton}
                        >
                            <Text style={styles.buttontext}>Solicitud</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.containerboton2}
                        onPress={() => navigation.navigate('UbicacionP')}
                    >
                        <Text style={styles.buttontext2}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerlinea}>

                    <View style={styles.imagenparamedico}>
                        <Image
                            source={require('./assets/paramedico.png')}
                            style={styles.imagen2} // Cambié de `image` a `imagen2` para usar el tamaño correcto
                            resizeMode="cover" // Usar cover para que la imagen se ajuste bien
                        />
                    </View>
                    <MaterialIcon name="notifications" size={30} color="red" />

                    <View style={styles.ayuda}>
                        <TouchableOpacity 
                            style={styles.containerboton}
                        >
                            <Text style={styles.buttontext}>Solicitud</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.containerboton2}
                    >
                        <Text style={styles.buttontext2}>Ubicacion</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30, 
    },
    container1: {
        flexDirection: 'row',  
        alignItems: 'flex-start', 
        width: '100%',
        height: '20%',
        backgroundColor: '#d3d3d3',
        gap: 45,
    },
    containerfoto: {
        width: 100, 
        height: 100,
        borderRadius: 50,  
        borderColor: 'black',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
        left: '6%',
        top: 35
    },
    icon: {
        fontSize: 50,
    },
    textContainer: {
        flexDirection: 'column', 
        justifyContent: 'center',
        gap: 10,
        top: 20
    },
    text: {
        textAlign: 'center',
        marginTop: 5,  
        fontWeight: 'bold',
        fontSize: 22,
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 15
    },
    containermapa: {
        borderColor: 'black',
        height: '50%',
        alignItems: 'center'
    },
    image: {
        width: '50%',   
        height: '100%',
    },
    informacion: {
        width: '112%', 
        height: '50%',  
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    containerlinea: {
        borderColor: 'gray',
        borderWidth: 0.6,
        width: '100%',
        height: 80,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },

    imagenparamedico: {
        width: 60, 
        height: 60,
        borderRadius: 30,  
        overflow: 'hidden',
        left: '4%'
    },

    imagen2: {
        width: '100%',   
        height: '100%',
    },

    ayuda: {
        borderColor: 'gray',
        borderWidth: 0.8,
        width: '25%',
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerboton: {
        borderColor: 'black',
        borderRadius: 8,
        width: '80%',
        height: 35,
        backgroundColor: 'red',
        justifyContent: 'center'
    },

    buttontext: {
        textAlign: 'center',
        color: 'white'
    },

    containerboton2: {
        borderColor: 'black',
        borderRadius: 8,
        width: '20%',
        height: 29,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: 'auto',
        right: '15%'
    },

    buttontext2: {
        textAlign: 'center',
        color: 'white'
    }

});
