import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Chats_Usuario( {navigation}) {
    return(
        <SafeAreaView style={styles.ContainerPrincipal}>

            <View style={styles.containerBarra}>
                <TouchableOpacity
                    style={styles.ContainerEstatico}
                    onPress={() => navigation.navigate('Buscar_usuario')}
                >
                    <Icon name="arrow-left" size={25} color="black" style={{ marginLeft: 12 }} />
                </TouchableOpacity>
                
                <View style={styles.ContainerChat}>
                    <Text style={styles.textChats}>Chats</Text>
                </View>

                <TouchableOpacity style={styles.containerIcono}>
                    <Icon name="phone" size={25} color="green" style={{ marginLeft: 12 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    ContainerPrincipal: {
        flex: 1,
        backgroundColor: 'white',
    },

    containerBarra: {
        //borderWidth: 1,
        position: 'absolute',   // fija la posición
        top: 0,                 // posición desde arriba
        left: 0,
        right: 0,
        height: 60,             // usa un valor fijo mejor que %
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // asegúrate que tenga fondo
        zIndex: 10,
        marginTop: 40
    },

    ContainerEstatico: {
        //borderWidth: 1,
        width: '20%',
        marginRight: 'auto',
        left: '2%'
    },

    ContainerChat: {
        //borderWidth: 1,
        width: '20%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textChats: {
        fontWeight: '600',
        fontSize: 17
    },

    containerIcono: {
        //borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        right: '6%',
        overflow: 'hidden',
        justifyContent: 'center',
    },

    Icon: {
        width: '100%',
        height: '100%'
    }
});

