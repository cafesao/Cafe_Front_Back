import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Pesquisar from './pages/Pesquisar'
import Resultado from './pages/Resultado'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Pesquisar}/>
            <Route path='/cafe/:nome' component={Resultado}/>
        </BrowserRouter>
    )
}