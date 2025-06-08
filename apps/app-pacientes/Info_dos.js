import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, Dimensions, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Info_Dos = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('Genero');
    const [entidad, setEntidad] = useState('Entidad');
    const [showDate, setShowDate] = useState(false)

    const [formData, setformData] = useState({
        date: "",
        time: ""
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.containerLogo}>
                    <Image
                        source={require('./assets/LogoApp.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.datos}>
                    <Text style={styles.textdatos}>Datos personales</Text>
                </View>

                <View style={styles.nombre}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.nombre}>
                    <TextInput
                        style={styles.input}
                        placeholder="Cedula"
                        placeholderTextColor="black"
                    />
                </View>

                <View style={styles.nombre}>
                    <TextInput
                        style={styles.input}
                        placeholder="Telefono"
                        placeholderTextColor="black"
                        keyboardType="numeric"
                    />
                </View>
                
                <View style={styles.pickerContainer}>
                    <Picker 
                        selectedValue={selectedValue}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Femenino" value="Femenino" />
                    </Picker>
                </View>

                <View style={styles.nombre} >
                <TouchableOpacity onPress={() => setShowDate(true)} >
                    <Text style={{ fontWeight: "500", fontSize: 16 }}>Fecha de nacimiento</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Fecha de nacimiento"
                    editable={false}
                    value={
                        formData.date
                        ? new Date(formData.date).toLocaleDateString(): ""
                    }
                    />
                </TouchableOpacity>
                {showDate && (
                    <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowDate(false);
                        if (selectedDate) {
                            setformData({ ...formData, date: selectedDate.toISOString() });
                        }
                    }}
                    />
                )}
                </View>

                <View style={styles.nombre}>
                    <Text style={styles.Textfiliado}>Numero de afiliado</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Numero de afiliado"
                        placeholderTextColor="black"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={entidad}
                        onValueChange={(itemValue) => setEntidad(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="MasVida" value="MasVida" />
                        <Picker.Item label="PanamaClinic" value="PanamaClinic" />
                        <Picker.Item label="Summe" value="Summe" />
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Info_tres')}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Info_Dos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 250,
        minHeight: Dimensions.get('window').height + 100, // 👈 Ajuste clave para permitir el scroll
    },
    containerLogo: {
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '12%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    datos: {
        alignItems: 'center',
    },
    textdatos: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    nombre: {
        alignSelf: 'flex-start',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
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
    Generostyle: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    pickerContainer: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    entidadstyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    estilofecha: {
        fontWeight: "500",
        fontSize: 16,
        marginTop: 20,
        marginRight: 'auto',
        left: '5%',
    },

    containerfechas: {
        flexDirection: "row",
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        gap: 10,
    },

    Textfiliado: {
        fontWeight: '500',
        fontSize: 16
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
