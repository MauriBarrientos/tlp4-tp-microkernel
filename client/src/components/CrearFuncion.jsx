import React, { useState } from 'react';
import Modal from 'react-modal';
import  './styles/crearFuncion.css';


function CreateFunctionButton() {
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
      contentLabel="Example Modal"
    >
      <div className="modal-header">
        <h5 className="modal-title">Crear Nueva Función</h5>
      </div>
      <hr />
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Tipo de función:</label>
            <select className="form-select">
              <option value="pelicula">Película</option>
              <option value="teatro">Teatro</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 row"> 
          <div className="mb-3 col-6">
            <label className="form-label">Fecha:</label>
            <input type="date" className="form-control" />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Hora:</label>
            <input type="time" className="form-control" />
          </div>
          </div>
          <div className="mb-3 row">
          <div className="mb-3 col-6">
            <label className="form-label">Precio:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3 col-6">
            <label className="form-label">Cantidad de boletos:</label>
            <input type="number" className="form-control" />
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


export default CreateFunctionButton;
