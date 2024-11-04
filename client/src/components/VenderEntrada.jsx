import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './styles/venderFuncion.css';

function VenderEntradaButton({ onVentaRealizada }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cantidadEntradas, setCantidadEntradas] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [eventos, setEventos] = useState([]); 
  const [funcionId, setFuncionId] = useState(null); 
  const [nombreFuncion, setNombreFuncion] = useState(''); 


  useEffect(() => {
    if (modalIsOpen) {
      fetch('http://localhost:4000/api/events')
        .then((response) => response.json())
        .then((data) => {
          setEventos(data); 
        })
        .catch((error) => console.error('Error al obtener la lista de eventos:', error));
    }
  }, [modalIsOpen]);

  const handleEventChange = (e) => {
    const selectedEvent = eventos.find(event => event.id === parseInt(e.target.value));
    if (selectedEvent) {
      setFuncionId(selectedEvent.id);
      setNombreFuncion(selectedEvent.name);
      setPrecio(selectedEvent.price); 
    }
  };

  const handleVenta = async () => {
    if (!funcionId) {
      alert('Selecciona un evento antes de realizar la venta.');
      return;
    }

    const ventaData = {
      ticketsPurchased: parseInt(cantidadEntradas),
      price: parseFloat(precio),
      eventId: funcionId,
    };

    try {
      const response = await fetch(`http://localhost:4000/api/sell/${funcionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ventaData),
      });

      if (response.ok) {
        console.log(`Venta realizada para la función con ID: ${funcionId}`);
        
       if (onVentaRealizada) {
          onVentaRealizada();
        }
        closeModal();
      } else {
        console.error('Error en la venta');
      }
    } catch (error) {
      console.error('Error en la solicitud de venta:', error);
    }
  };

  function closeModal() {
    setIsOpen(false);
    setCantidadEntradas(1);
    setPrecio(0);
    setFuncionId(null);
    setNombreFuncion('');
  }

  return (
    <div className='col'>
      <button onClick={() => setIsOpen(true)} className="btn btn-sm mt-1 botonVenta">Vender Entradas</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Vender Entradas"
      >
        <div className="modal-header">
          <h5 className="modal-title">Vender Entradas para: {nombreFuncion}</h5>
        </div>
        <hr />
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Selecciona un Evento:</label>
              <select className="form-control" onChange={handleEventChange}>
                <option value="">Selecciona un evento</option>
                {eventos.map((evento) => (
                  <option key={evento.id} value={evento.id}>
                    {evento.name}
                  </option>
                ))}
              </select>
            </div>
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
              <label className="form-label">Precio por Entrada:</label>
              <input 
                type="number" 
                className="form-control" 
                value={precio} 
                min="0" 
                step="0.01"
                readOnly
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary m-2" onClick={closeModal}>Cerrar</button>
          <button type="button" className="btn btn-success" onClick={handleVenta}>Vender</button>
        </div>
      </Modal>
    </div>
  );
}

export default VenderEntradaButton;
