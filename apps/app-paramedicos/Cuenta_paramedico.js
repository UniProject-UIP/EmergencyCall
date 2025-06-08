import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Cuenta_Paramedicos({ navigation }) {
    return (
        <SafeAreaView style={styles.contenedorPrincipal}>
            <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: 80 }]}>

                <View style={styles.containerfilas}>
                    <View style={styles.containerFoto}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={require('./assets/paramedico.png')}
                                style={styles.imagen2}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.containerDatos}>
                        <Text style={styles.TextNom}>Manuel Ortiz</Text>
                        <Text style={styles.TextNum}>xxx xxx</Text>
                    </View>
                </View>

                <View style={styles.containerRol}>
                    <Text style={styles.TextRol}>Rol</Text>
                </View>

                <View style={styles.containerPara}>
                    <Icon name="user" size={30} color="blue" style={styles.icon} />
                    <Text style={styles.TextPara}>Paramedico</Text>
                </View>

                <View style={styles.containerInformacion1}>
                    <Text style={styles.texinfo1}>Mantente informado a las asignaciones de viajes que tu centro te envía</Text>
                </View>

                <View style={styles.containerInformacion1}>
                    <Text style={styles.texinfo1}>Podrás ver ubicación en tiempo real, estimación del tiempo de llegada, chats con tu pacientes</Text>
                </View>

                <View style={styles.containerNotificacion}>
                    <Text style={styles.TextNotificaciones}>Solicitud de viajes</Text>
                    <Icon name="bell" size={25} color="red" left={25} style={styles.icon} />
                </View>

                <View style={styles.Containerllamada}>
                    <View style={styles.containerIcon}>
                        <Image
                            source={require('./assets/paramedico.png')}
                            style={styles.imagen2}
                            resizeMode="cover"
                        />
                    </View>
                    <MaterialIcon name="notifications" size={25} color="red" left={30} />

                    <TouchableOpacity style={styles.containerboton}>
                        <Text style={styles.solicitudtext}>Solicitud</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.containerubicacion} 
                        onPress={() => navigation.navigate('Buscar_usuario')}
                    >
                        <Text style={styles.solicitudtext}>Ubicacion</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        backgroundColor: 'white',
    },

    scrollContent: {
        alignItems: 'center',
        paddingBottom: 40,
    },

    containerfilas: {
        flexDirection: 'row',
        width: '100%'
    },

    containerFoto: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: '15%',
        marginRight: 'auto',
        left: '10%',
        overflow: 'hidden'
    },

    containerDatos: {
        width: '30%',
        height: 70,
        marginTop: '17%',
        marginRight: 'auto',
        right: '12%'
    },

    TextNom: {
        fontWeight: 'bold',
        fontSize: 19,
        left: 5
    },

    TextNum: {
        fontWeight: 'bold',
        fontSize: 18,
        left: 5
    },

    containerRol: {
        marginTop: '5%',
        alignItems: 'center',
        width: '50%'
    },

    TextRol: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    containerPara: {
        marginTop: '5%',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'row',
        gap: 40
    },

    TextPara: {
        fontSize: 16,
    },

    containerInformacion1: {
        borderWidth: 1,
        width: '75%',
        height: '15%',
        marginTop: '10%',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2'
    },

    texinfo1: {
        textAlign: 'center',
        fontSize: 18
    },

    containerNotificacion: {
        width: '60%',
        marginRight: 'auto',
        left: '10%',
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },

    TextNotificaciones: {
        fontWeight: 'bold',
        fontSize: 20
    },

    Containerllamada: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        marginTop: '7%',
        alignItems: 'center',
        left: '4%'
    },

    containerIcon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden',
        left: '4%',
    },

    imagen2: {
        width: '100%',
        height: '100%',
    },

    containerboton: {
        borderWidth: 1,
        width: '25%',
        height: 35,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        left: '15%'
    },

    containerubicacion: {
        borderWidth: 1,
        width: '25%',
        height: 35,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        left: '20%'
    },

    solicitudtext: {
        fontWeight: 'bold'
    }
});
