import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PaginaHome from '../paginas/PaginaHome';
import PaginaSabores from '../paginas/PaginaSabores';
import PaginaSobre from '../paginas/PaginaSobre';

const Rotas = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaHome />} />
            <Route path='/sabores' element={<PaginaSabores />} />
            <Route path='/sobre' element={<PaginaSobre />} />
        </Routes>
    </BrowserRouter>

)

export default Rotas;