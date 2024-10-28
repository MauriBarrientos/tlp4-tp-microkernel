import React from 'react'
import Navbar from '../components/Navbar'
import ListarTeatros from '../components/ListarTeatro'

const Teatros = () => {
  return (
    <>
     <Navbar />
        <div className='container' id='main' >
        <ListarTeatros />
    </div>
    </>
  )
}

export default Teatros
