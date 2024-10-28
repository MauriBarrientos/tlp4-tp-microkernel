import React from 'react';
import CreateCinesButton from './CrearCine';
import './styles/cine.css';

const ListarCines = () => {
  const cines = [
    { id: 1, nombre: 'Cinepolis', direccion: 'Av. Siempre Viva 123'},
    { id: 2, nombre: 'Cinemex', direccion: 'Calle Falsa 456' },
    { id: 3, nombre: 'CinePlanet', direccion: 'Plaza Central 789'},
  ];

  const handleEdit = (id) => {
    console.log(`Editar cine con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Borrar cine con ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="cine-header d-flex justify-content-between align-items-center">
        <h3>Cines</h3>
        <CreateCinesButton />
      </div>
      
      <table className="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {cines.map((cine) => (
            <tr key={cine.id}>
              <td>{cine.nombre}</td>
              <td>{cine.direccion}</td>
              <td>
                <button 
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(cine.id)}>
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cine.id)}>
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

export default ListarCines;
