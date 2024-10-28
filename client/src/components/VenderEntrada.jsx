import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/venderFuncion.css';

function VenderEntradaButton({ funcionId }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cantidadEntradas, setCantidadEntradas] = useState(1);
  const [nombreCliente, setNombreCliente] = useState('');
  const [emailCliente, setEmailCliente] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCantidadEntradas(1);
    setNombreCliente('');
    setEmailCliente('');
  }

  function handleVender() {
    console.log(`Vender ${cantidadEntradas} entradas para la función con ID: ${funcionId}`);
    console.log(`Nombre del cliente: ${nombreCliente}`);
    console.log(`Correo del cliente: ${emailCliente}`);
    closeModal();
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-danger btn-sm mt-1">Vender Entradas</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content" 
        overlayClassName="modal-overlay"
        contentLabel="Vender Entradas"
      >
        <div className="modal-header">
          <h5 className="modal-title">Vender Entradas para Función {funcionId}</h5>
        </div>
        <hr />
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Cantidad de Entradas:</label>
              <input 
                type="number" 
                className="form-control" 
                value={cantidadEntradas} 
                min="1" 
                onChange={(e) => setCantidadEntradas(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre del Cliente:</label>
              <input 
                type="text" 
                className="form-control" 
                value={nombreCliente} 
                onChange={(e) => setNombreCliente(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico:</label>
              <input 
                type="email" 
                className="form-control" 
                value={emailCliente} 
                onChange={(e) => setEmailCliente(e.target.value)} 
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>Cerrar</button>
          <button type="button" className="btn btn-success" onClick={handleVender}>Vender</button>
        </div>
      </Modal>
    </div>
  );
}

export default VenderEntradaButton;
