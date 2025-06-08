import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Login_Paramedicos({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('Seleccione su institucion');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Principio}>
        <View style={styles.NombreApp}>
          <Text style={styles.TextNombre}>AmbuLink</Text>
          <Text style={styles.welcomeText}>Bienvenido, por favor ingrese</Text>
        </View>
      </View>
      
      <View style={styles.Login}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuario o numero de empleado"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="black"
            secureTextEntry
          />
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione su institucion:" value="Seleccione su institucion:" />
            <Picker.Item label="Semm" value="Semm" />
            <Picker.Item label="Panama clinic" value="Panama clinic" />
            <Picker.Item label="Summe" value="Summe" />
            <Picker.Item label="MasVida" value="MasVida" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cuenta_paramedico')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  Principio: {
    marginTop: hp('20%'),  // Ajuste con altura responsiva
    alignItems: 'center',
    textAlign: 'center',
  },

  TextNombre: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp('10%'),  // Ajuste con ancho responsivo
  },

  welcomeText: {
    marginTop: hp('2%'),  // Ajuste con altura responsiva
    fontSize: wp('5%'),   // Ajuste con ancho responsivo
  },

  Login: {
    width: '80%',
    marginTop: hp('10%')  // Ajuste con altura responsiva
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    height: hp('7%'),  // Ajuste con altura responsiva
    marginBottom: hp('3%'),  // Ajuste con altura responsiva
    borderRadius: 15
  },

  input: {
    paddingHorizontal: wp('2%'),  // Ajuste con ancho responsivo
    color: '#000',
    flex: 1,
  },

  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    height: hp('7%'),  // Ajuste con altura responsiva
    marginBottom: hp('3%'),  // Ajuste con altura responsiva
    borderRadius: 15
  },

  picker: {
    paddingHorizontal: wp('2%'),  // Ajuste con ancho responsivo
    color: '#000',
    flex: 1,
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp('4%')  // Ajuste con ancho responsivo
  },

  button: {
    width: wp('80%'),  // Ajuste con ancho responsivo
    height: hp('7%'),  // Ajuste con altura responsiva
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f85032',
  },
});
