import React from 'react';
import CreateFuncionButton from './CrearFuncion';
import './styles/funciones.css';

const ListarFunciones = () => {
  const funciones = [
    { id: 1, pelicula: 'Avengers', fecha: '2024-11-10', horario: '18:30', tipo: 'Cine', direccion: 'Av. Siempre Viva 123' },
    { id: 2, pelicula: 'Hamlet', fecha: '2024-11-11', horario: '19:00', tipo: 'Teatro', direccion: 'Calle Falsa 456' },
    { id: 3, pelicula: 'Jurassic Park', fecha: '2024-11-12', horario: '20:00', tipo: 'Cine', direccion: 'Plaza Central 789' },
  ];

  const handleEdit = (id) => {
    console.log(`Editar función con ID: ${id}`);

  };

  const handleDelete = (id) => {
    console.log(`Borrar función con ID: ${id}`);

  };

  return (
    <div className="container mt-4">
      <div className="funcion-header d-flex justify-content-between align-items-center">
        <h3>Funciones</h3>
        <CreateFuncionButton />
      </div>
      <table className="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Película / Obra</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Tipo de Lugar</th>
            <th>Dirección</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {funciones.map((funcion) => (
            <tr key={funcion.id}>
              <td>{funcion.pelicula}</td>
              <td>{funcion.fecha}</td>
              <td>{funcion.horario}</td>
              <td>{funcion.tipo}</td>
              <td>{funcion.direccion}</td>
              <td>
                <button 
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(funcion.id)}>
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(funcion.id)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarFunciones;
