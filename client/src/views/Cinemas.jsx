import React from 'react'
import Navbar from '../components/Navbar'
import ListarCines from '../components/ListarCine'

const Cinemas = () => {
  return (
    <>
     <Navbar />
        <div className='container' id='main' >
        <ListarCines />
    </div>
    </>
  )
}

export default Cinemas
