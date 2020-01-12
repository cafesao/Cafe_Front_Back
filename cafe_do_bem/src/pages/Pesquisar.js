import React, {useState} from 'react'

import './Pesquisar.css'

export default function Pesquisar({ history }) {
    const [cafe, setCafe] = useState('')

    async function apertarPesquisar(e) {
        e.preventDefault()

        history.push(`/cafe/${cafe}`)
    }

    return (
        <div className='pesquisar_container'>
            <form onSubmit={apertarPesquisar}>
                <input 
                    placeholder='Digite o nome do cafe'
                    value={cafe}
                    onChange={e => setCafe(e.target.value)}
                />
                <button type='submit'>Pesquisar</button>
            </form>
        </div>
    )
}