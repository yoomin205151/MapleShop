import React from 'react';
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Inicio from './pages/inicio/index'
import Producto from './pages/producto/index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/products' element={<Producto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App