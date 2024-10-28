import React from 'react'
import CreateCinesButton from './CrearCine'
import './styles/cine.css'

const ListarCines= () => {
  return (
    <div> 
      <div className='cine'>
        <h3>Cines</h3>
        <CreateCinesButton />
      </div>
      
    </div> 
  )
}

export default ListarCines