import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Resultado.css'

import api from '../service/api'

import logo from '../assets/_logo.png'

export default function Resultado({ match }) {
    const [cafe, setCafe] = useState('')

    async function pesquisarApi() {
        const nomeCafe = match.params.nome
        const response = await api.get(`/cafe/${nomeCafe}`)

        //const { peso, moeda, preco

        setCafe(response.data)
    }

    const capitalize = (s) => {
        if (typeof s === 'string') return s.charAt(0).toUpperCase() + s.slice(1) 
    }

    pesquisarApi()

    return (
        <div className='resultado_container'>
            <Link to='/'>
                <img src={logo} alt='Café do Bem' />
            </Link>
            <div className='atributos_container'>
                <h3>Nome: </h3>
                <p><strong>{capitalize(cafe.nome)}</strong></p>    
            </div> 

            <div className='atributos_container'>
                <h3>Especie: </h3>
                <p>{cafe.especie}</p>    
            </div>  

            <div className='atributos_container'>
                <h3>Grão: </h3>
                <p>{cafe.grao}</p>    
            </div>  

            <div className='atributos_container'>
                <h3>Caracteristicas: </h3>
                <p>{cafe.caracteristicas}</p>    
            </div>

            <div className='atributos_container'>
                <h3>Altitude: </h3>
                <p>{cafe.atitude}</p>    
            </div> 

            <div className='atributos_container'>
                <h3>Lavoura: </h3>
                <p>{cafe.lavoura}</p>    
            </div> 

            <div className='atributos_container'>
                <h3>Colheita</h3>
                <p>{cafe.colheita}</p>    
            </div>  

            <div className='atributos_container'>
                <h3>Temperatura: </h3>
                <p>{cafe.temperatura}</p>    
            </div>  

            <div className='atributos_container'>
                <h3>Nivel de Cafeína: </h3>
                <p>{cafe.cafeina}</p>    
            </div> 

            <div className='atributos_container'>
                <h3>Deriva: </h3>
                <p>{cafe.deriva}</p>    
            </div>  

            <div className='atributos_container'>
                <h3>Preço: </h3>
                <p><strong>R$ {cafe.preco},00</strong></p>    
            </div>        

            <div className='atributos_container'>
                <h3>Moeda: </h3>
                <p>{cafe.moeda}</p>    
            </div>        

            <div className='atributos_container'>
                <h3>Peso: </h3>
                <p>{cafe.peso}</p>    
            </div>                
        </div>
    )
}