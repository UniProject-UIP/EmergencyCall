import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Perfil( {navigation} ){
const screenHeight = Dimensions.get('window').height;
    return(
        <SafeAreaView style={styles.container1}>
            
            <TouchableOpacity style={styles.containerFlecha} onPress={() => navigation.navigate('Main')}>
                <Icon name="arrow-left" size={25} color="black" style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.containerFoto}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('./assets/fotoperfil.png')}
                        style={styles.foto}
                    />
                </View>
                <Text style={styles.nombre}>Joshua_Voitier04</Text>
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.textinfo}>Datos personales</Text>
            </View>

            <View style={styles.infocontainer}>
                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Nombre completo</Text>
                    <Text style={styles.infostyle}>Joshua Voitier</Text>
                </View>
                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Número de teléfono</Text>
                    <Text style={styles.infostyle}>65205678</Text>
                </View>

                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Cedula</Text>
                    <Text style={styles.infostyle}>8-981-689</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.containerAjustes} onPress={() => navigation.navigate('editar_perfil')}>
                <Icon name="gear" size={25} color="black" style={styles.icon} />
                <Text style={styles.EditarText}>Editar perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerSalir} onPress={() => navigation.navigate('Login_usuarios')}>
                <Icon name="arrow-left" size={25} color="black" style={styles.icon} />
                <Text style={styles.SalirText}>Cerrar sesión</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

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

    containerFoto:{
        marginTop: '7%',
        alignItems: 'center'
    },

    profileImageContainer: {
        width: 155, 
        height: 155,
        borderRadius: 75, 
        overflow: 'hidden',
    },

    foto: {
        height: '100%',
        width: '100%',
    },

    nombre: {
        marginTop: 24,
        fontSize: 18,
        fontWeight: 'bold'
    },

    containerInfo: {
        marginTop: '10%'
    },

    textinfo: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue'
    },

    infocontainer: {
        marginRight: 'auto',
        left: '7%',
        marginTop: '5%'
    },

    infotext: {
        fontWeight: 'bold',
        fontSize: 18
    },

    infostyle: {
        marginTop: 15,
        fontSize: 15
    },

    EditarText: {
        fontSize: 18
    },

    containerAjustes: {
        width: "40%",
        marginTop: 40,
        marginRight: 'auto',
        marginLeft: '10%',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    
    containerSalir: {
        width: "50%",
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: '10%',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    

    SalirText: {
        fontSize: 18
    }


});