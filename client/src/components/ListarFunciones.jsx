import React from 'react'
import CreateFunctionButton from './CrearFuncion'
import './styles/funciones.css'
import MovieCard from './MovieCard'

const ListarFunciones = () => {
  return (
    <div> 
      <div className='funciones '>
        <h3>Funciones</h3>
        <CreateFunctionButton />
      </div>
      <MovieCard />
    </div> 
  )
}

export default ListarFunciones
