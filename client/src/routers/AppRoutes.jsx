import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Funciones from '../views/Funciones';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Funciones />} />

  </Routes>
);

export default AppRoutes;
