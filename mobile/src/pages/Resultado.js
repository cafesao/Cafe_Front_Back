import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native'

import api from '../services/api'

import logo from '../assets/images/_logo.png'

export default function Pesquisar({ navigation }) {
    const nomeCafe = navigation.getParam('cafe')
    const [cafe, setCafe] = useState('')

    useEffect(() => {
        async function pesquisarApi() {
            try { 
                if(nomeCafe === '') {
                    setCafe(false)
                }
                else {
                    const response = await api.get(`/cafe/${nomeCafe}`)
                    setCafe(response.data) 
                }
            }
            
            catch {
                setCafe(false)
            }  
        }     

        pesquisarApi()
    }, [])

    function capitalize (s) {
        if (typeof s === 'string') return s.charAt(0).toUpperCase() + s.slice(1) 
    }

    return (
        
        <SafeAreaView style={style.container}>
            <Image source={logo}/>
            {cafe ? (
                <ScrollView>
                    <View style={style.container}>
                        <Text style={style.resultadoNome}>Nome</Text>
                        <Text style={style.resultadoInfoStrong}>{capitalize(cafe.nome)}</Text>

                        <Text style={style.resultadoNome}>Especie</Text>
                        <Text style={style.resultadoInfo}>{cafe.especie}</Text>

                        <Text style={style.resultadoNome}>Grão</Text>
                        <Text style={style.resultadoInfo}>{cafe.grao}</Text>    

                        <Text style={style.resultadoNome}>Caracteristicas</Text>
                        <Text style={style.resultadoInfo}>{cafe.caracteristicas}</Text> 

                        <Text style={style.resultadoNome}>Altitude</Text>
                        <Text style={style.resultadoInfo}>{cafe.altitude}</Text> 

                        <Text style={style.resultadoNome}>Lavoura</Text>
                        <Text style={style.resultadoInfo}>{cafe.lavoura}</Text> 

                        <Text style={style.resultadoNome}>Colheita</Text>
                        <Text style={style.resultadoInfo}>{cafe.colheita}</Text> 

                        <Text style={style.resultadoNome}>Temperatura</Text>
                        <Text style={style.resultadoInfo}>{cafe.temperatura}</Text> 

                        <Text style={style.resultadoNome}>Nivel de Cafeína</Text>
                        <Text style={style.resultadoInfo}>{cafe.cafeina}</Text> 

                        <Text style={style.resultadoNome}>Deriva</Text>
                        <Text style={style.resultadoInfo}>{cafe.deriva}</Text> 

                        <Text style={style.resultadoNome}>Preço</Text>
                        <Text style={style.resultadoInfoStrong}>R$ {cafe.preco},00</Text> 

                        <Text style={style.resultadoNome}>Moeda</Text>
                        <Text style={style.resultadoInfo}>{cafe.moeda}</Text> 

                        <Text style={style.resultadoNome}>Peso</Text>
                        <Text style={style.resultadoInfo}>{cafe.peso}</Text> 
                    </View>
                </ScrollView>
            ) : (
                <View style={style.container}>
                    <Text style={style.erro}>Não existe o cafe informado!</Text>
                    <Text style={style.erroInfo}>Clique em voltar no lado esquerdo superior...</Text>
                </View>
                ) }
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        marginHorizontal: 10
    },
    resultadoNome: {
        fontFamily: 'IMFellGreatPrimerSC-Regular',
        paddingTop: 25,
        fontSize: 27,
        color: '#843216'
    },
    resultadoInfoStrong: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 20,  
        fontWeight: 'bold',
        lineHeight: 30,
        marginTop: 5,
        color: '#462A1E',
    },
    resultadoInfo: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 20,  
        lineHeight: 30,
        marginTop: 5,
        color: '#462A1E',
    },
    erro: {
        fontFamily: 'IMFellGreatPrimerSC-Regular',
        paddingTop: 50,
        fontSize: 25,
        color: '#843216'
    },
    erroInfo: {
        fontFamily: 'Montserrat-Regular',
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 20,
        marginTop: 5,
        color: '#c8c8c8'
    },
})