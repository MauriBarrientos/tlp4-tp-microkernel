import React from 'react'
import Navbar from '../components/Navbar'
import ListarTickets from '../components/ListarTickets'

const Tickets = () => {
  return (
    <div>
     <Navbar />
        <div className='container' id='main'> 
          <ListarTickets />
          
     </div>
    </div>
  )
}

export default Tickets
