import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/crearTeatro.css';

function CreateTeatrosButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-danger">Crear Nuevo Teatro</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content" 
        overlayClassName="modal-overlay"
        contentLabel="Crear Teatro"
      >
        <div className="modal-header">
          <h5 className="modal-title">Crear Nuevo Teatro</h5>
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
                <label className="form-label">Número de salas:</label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Ubicación:</label>
              <input type="text" className="form-control" />
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
}

export default CreateTeatrosButton;
