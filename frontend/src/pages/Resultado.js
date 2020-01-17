import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Resultado.css'

import api from '../service/api'

import logo from '../assets/_logo.png'

export default function Resultado({ match }) {
    const [cafe, setCafe] = useState('')

    useEffect(() => {
        async function pesquisarApi() {
            try {
                const nomeCafe = match.params.nome   
                const response = await api.get(`/cafe/${nomeCafe}`)
    
                setCafe(response.data)
            }
            
            catch {
                setCafe(false)
            }  
        }     

        pesquisarApi()
    }, [match.params.nome])

    function capitalize (s) {
        if (typeof s === 'string') return s.charAt(0).toUpperCase() + s.slice(1) 
    }

    return (
        
        <div className='resultado_container'>
            <Link to='/'>
                <img src={logo} alt='Café do Bem' />
            </Link>
            {cafe ? (
            <div className='todos-atributos-container'>
                <div className='nome_container'>
                    <h3>Nome</h3>
                    <p><strong>{capitalize(cafe.nome)}</strong></p>    
                </div> 

                <div className='especie_container'>
                    <h3>Especie</h3>
                    <p>{cafe.especie}</p>    
                </div>  

                <div className='grao_container'>
                    <h3>Grão</h3>
                    <p>{cafe.grao}</p>    
                </div>  

                <div className='caracteristicas_container'>
                    <h3>Caracteristicas</h3>
                    <p>{cafe.caracteristicas}</p>    
                </div>

                <div className='altitude_container'>
                    <h3>Altitude</h3>
                    <p>{cafe.altitude}</p>    
                </div> 

                <div className='lavoura_container'>
                    <h3>Lavoura</h3>
                    <p>{cafe.lavoura}</p>    
                </div> 

                <div className='colheita_container'>
                    <h3>Colheita</h3>
                    <p>{cafe.colheita}</p>    
                </div>  

                <div className='temperatura_container'>
                    <h3>Temperatura</h3>
                    <p>{cafe.temperatura}</p>    
                </div>  

                <div className='cafeina_container'>
                    <h3>Nivel de Cafeína</h3>
                    <p>{cafe.cafeina}</p>    
                </div> 

                <div className='deriva_container'>
                    <h3>Deriva</h3>
                    <p>{cafe.deriva}</p>    
                </div>  

                <div className='preco_container'>
                    <h3>Preço</h3>
                    <p><strong>R$ {cafe.preco},00</strong></p>    
                </div>        

                <div className='moeda_container'>
                    <h3>Moeda</h3>
                    <p>{cafe.moeda}</p>    
                </div>        

                <div className='peso_container'>
                    <h3>Peso</h3>
                    <p>{cafe.peso}</p>    
                </div>       
            </div>
            ) : (
                <div className='erro'>
                    <h2>Não existe o cafe informado!</h2>
                    <p>Clique na logo para voltar ao menu...</p>
                </div>
            ) }
        </div>
    )
}