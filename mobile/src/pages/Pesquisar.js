import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import logo from '../assets/images/_logo.png'

export default function Pesquisar ({ navigation }) {
    const [cafe, setCafe] = useState('')

    function handlePesquisar() {
        navigation.navigate('Cafe', { cafe })
    }

    return (
        <View style={style.container}>
            <Image source={logo}/>
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = 'Digite o nome do café'
                placeholderTextColor = '#999'
                style ={style.input} 
                value={cafe}
                onChangeText={setCafe}
            />
            
            <TouchableOpacity style={style.button} onPress={handlePesquisar}>
                <Text style={style.buttonText}>Pesquisar</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 30,
    },
    input: {
        height: 46,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 46,
        backgroundColor: '#843216',
        alignSelf: 'stretch',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
})