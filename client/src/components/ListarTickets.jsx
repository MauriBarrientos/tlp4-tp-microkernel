import React, { useEffect, useState } from 'react';
import './styles/funciones.css';

const ListarTickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/tickets');
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error al cargar los tickets:', error);
    }
  };

  const concretarTicket = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/tickets/concretar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        fetchTickets(); 
      } else {
        console.error('Error al concretar el ticket');
      }
    } catch (error) {
      console.error('Error al concretar el ticket:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Tickets</h3>

      {tickets.length > 0 ? (
        <table className="table table-striped table-hover mt-3">
          <thead>
            <tr>
              <th>Tickets Comprados</th>
              <th>Precio</th>
              <th>Método de Pago</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.ticketsPurchased}</td>
                <td>${ticket.price.toFixed(2)}</td>
                <td>{ticket.paymentMethod}</td>
                <td>
                  {ticket.status === 'reservado' ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => concretarTicket(ticket.id)}
                    >
                      Concretar
                    </button>
                  ) : (
                    ticket.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4">No hay tickets disponibles</p>
      )}
    </div>
  );
};

export default ListarTickets;
