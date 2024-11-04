import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/crearFuncion.css';

function Concretar({ funcionId, fetchTickets }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [paymentMethod, setMetodoPago] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setMetodoPago('');
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/finalize/${funcionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            paymentMethod,
        }),
      });

  
      if (response.ok) {
        alert('Ticket vendido exitosamente');
        closeModal();
        fetchTickets(); 
      } else {
        alert('Error al vender el ticket');
      }
    } catch (error) {
      console.error('Error al vender el ticket:', error);
    }
  };


  return (
    <div className='col'>
      <button onClick={openModal} className="btn btn-danger">Concretar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Seleccionar Método de Pago"
      >
        <div className="modal-header">
          <h5 className="modal-title">Seleccionar Método de Pago</h5>
        </div>
        <hr />
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label className="form-label">Método de Pago:</label>
              <select 
                className="form-control" 
                value={paymentMethod} 
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="efectivo">Efectivo</option>
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>Cerrar</button>
          <button type="button" className="btn btn-danger" onClick={handleSubmit}>Aceptar</button>
        </div>
      </Modal>
    </div>
  );
}

export default Concretar;
