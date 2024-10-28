import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/crearFuncion.css';

function CreateFuncionButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="btn btn-danger">Crear Nueva Función</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content" 
        overlayClassName="modal-overlay"
        contentLabel="Crear Función"
      >
        <div className="modal-header">
          <h5 className="modal-title">Crear Nueva Función</h5>
        </div>
        <hr />
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Película / Obra:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 row">
              <div className="col-6">
                <label className="form-label">Fecha:</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-6">
                <label className="form-label">Horario:</label>
                <input type="time" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de Lugar:</label>
              <select className="form-select">
                <option value="Cine">Cine</option>
                <option value="Teatro">Teatro</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección:</label>
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

export default CreateFuncionButton;
