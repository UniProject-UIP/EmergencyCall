import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Main_cuenta( {navigation} ){
    return(
        <SafeAreaView style={styles.container}>
             <View style={styles.containerLogo}>
                <Image
                    source={require('./assets/LogoApp.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('llamada')}>
                    <Text style={styles.buttonText}>Llamar ambulancia</Text>
                    <Icon name="phone" size={20} color="green" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Hospitales_cercanos')}
                >
                    <Text style={styles.buttonText}>Ver hospitales cercanos</Text>
                    <Icon name="map-marker" size={20} color="red" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.botones}>
                <View style={styles.home}>
                    <Icon name="home" size={25} color="black" style={[styles.icon, { marginRight: 75 }]} />
                    <Text style={styles.texC}>home</Text>
                </View>
                
                <View style={styles.registro}>
                    <Icon name="file" size={25} color="black" style={[styles.icon, { marginRight: 75 }]} />
                    <Text style={styles.textfile}>file</Text>
                </View>
                
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.estilosprofile} onPress={() => navigation.navigate('Perfil_usuario')}>
                        <Icon name="user" size={25} color="black" style={styles.icon} />
                        <Text >profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    }, 

    containerLogo: {
        width: '60%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        top: 50
    },

    image: {
        width: '100%',
        height: '200%',
    },

    buttonContainer: {
        width: '70%',
        marginTop: 85,
    },
    button: {
        padding: 12,
        borderRadius: 5, 
        borderWidth: 0.9,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        marginLeft: 10, 
    },

    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 8,
        gap: 10
    },

    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: '25%',
        gap: 10
    },

    home: {
        flexDirection: 'column',
        gap: 4,
    },
    
    registro: {
        flexDirection: 'column',
        gap: 4,
    },
    
    profile: {
        flexDirection: 'column',
    },

    estilosprofile: {
        gap: 4
    },

    textfile: {
        left: 10
    },

    texC: {
        left: 3
    }
    
});
