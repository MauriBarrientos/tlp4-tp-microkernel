import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/crearCine.css';


function CreateCinesButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
    <button onClick={openModal} className="btn btn-danger">Crear Nuevo Cine</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="modal-content" 
      overlayClassName="modal-overlay"
      contentLabel="Example Modal"
    >
      <div className="modal-header">
        <h5 className="modal-title">Crear Nueva Función</h5>
      </div>
      <hr />
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 row">
          <div className="mb-3 col-6">
            <label className="form-label">Capacidad:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Cantidad de salas:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ubicacion:</label>
            <input type="text" className="form-control" />
          </div>
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>Cerrar</button>
        <button type="button" className="btn btn-danger" onClick={closeModal}>Crear</button>
      </div>
    </Modal>
  </div>
);
};


export default CreateCinesButton;
