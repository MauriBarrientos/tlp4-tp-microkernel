import React from 'react';
import CreateTeatrosButton from './CrearTeatro';
import './styles/teatro.css';

const ListarTeatros = () => {
  const teatros = [
    { id: 1, nombre: 'Teatro Nacional', direccion: 'Av. Principal 123' },
    { id: 2, nombre: 'Teatro Colón', direccion: 'Calle 45 Centro' },
    { id: 3, nombre: 'Teatro Municipal', direccion: 'Plaza Grande 789' },
  ];

  const handleEdit = (id) => {
    console.log(`Editar teatro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Borrar teatro con ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="teatro-header d-flex justify-content-between align-items-center">
        <h3>Teatros</h3>
        <CreateTeatrosButton />
      </div>
      <table className="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {teatros.map((teatro) => (
            <tr key={teatro.id}>
              <td>{teatro.nombre}</td>
              <td>{teatro.direccion}</td>
              <td>
                <button 
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(teatro.id)}>
                  Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(teatro.id)}>
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

export default ListarTeatros;
