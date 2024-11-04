import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Funciones from '../views/Funciones';
import Tickets from '../views/Tickets';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Funciones />} />
    <Route path="/tickets" element={<Tickets />} />
  </Routes>
);

export default AppRoutes;
