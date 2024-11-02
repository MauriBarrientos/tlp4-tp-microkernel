import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/crearFuncion.css';

function CreateFuncionButton({ onFuncionCreada }) { 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
    totalSeats: 100,
    price: 10.0,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      description: '',
      date: '',
      time: '',
      location: '',
      totalSeats: 100,
      price: 10.0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          date: `${formData.date}T${formData.time}:00Z`,
          location: formData.location,
          totalSeats: formData.totalSeats,
          seatsOccupied: 0,
          price: formData.price,
        }),
      });

      if (response.ok) {
        alert('Función creada exitosamente');
        if (onFuncionCreada) {
          onFuncionCreada(); 
        }
        closeModal();
      } else {
        alert('Error al crear la función');
      }
    } catch (error) {
      console.error('Error al crear función:', error);
    }
  };

  return (
    <div className='col'>
      <button onClick={openModal} className="btn btn-danger">Crear Función</button>
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
          <div className=" row">
            <div className="col-6">
              <label className="form-label">Película / Obra:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-1 col-6">
              <label className="form-label">Precio:</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            </div>  
            <div className="row mb-1">
              <div className="col-6">
                <label className="form-label">Fecha:</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label className="form-label">Horario:</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 row">
            <div className=" col-6">
              <label className="form-label">Total de Asientos:</label>
              <input
                type="number"
                className="form-control"
                name="totalSeats"
                value={formData.totalSeats}
                onChange={handleChange}
              />
            </div>
            </div>
            <div className="">
              <label className="form-label">Dirección:</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="form-label">Descripción:</label>
              <textarea
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>Cerrar</button>
          <button type="button" className="btn btn-danger" onClick={handleSubmit}>Crear</button>
        </div>
      </Modal>
    </div>
  );
}

export default CreateFuncionButton;
