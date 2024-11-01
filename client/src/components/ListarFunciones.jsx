import React, { useEffect, useState } from 'react';
import CreateFuncionButton from './CrearFuncion';
import './styles/funciones.css';
import VenderEntradaButton from './VenderEntrada';

const ListarFunciones = () => {
  const [funciones, setFunciones] = useState([]);

  useEffect(() => {
    const fetchFunciones = async () => {
      try {
        const response = await fetch(''); 
        const data = await response.json();
        setFunciones(data);
      } catch (error) {
        console.error('Error al cargar las funciones:', error);
      }
    };

    fetchFunciones();
  }, []);


  return (
    <div className="container mt-4">
      <div className="funcion-header d-flex justify-content-between align-items-center">
        <h3>Funciones</h3>
        <CreateFuncionButton />
      </div>

      {funciones.length > 0 ? (
        <table className="table table-striped table-hover mt-3">
          <thead>
            <tr>
              <th>Película / Obra</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>Tipo de Lugar</th>
              <th>Dirección</th>
              <th>Stock</th>
              <th>Disponibilidad</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {funciones.map((funcion) => (
              <tr key={funcion.id}>
                <td>{funcion.name}</td>
                <td>{new Date(funcion.date).toLocaleDateString()}</td>
                <td>{new Date(funcion.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{funcion.tipo}</td>
                <td>{funcion.location}</td>
                <td>{funcion.totalSeats}</td>
                <td>{funcion.totalSeats - funcion.seatsOccupied}</td>
                <td>
                  <VenderEntradaButton funcionId={funcion.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4">No hay eventos disponibles</p>
      )}
    </div>
  );
};

export default ListarFunciones;
