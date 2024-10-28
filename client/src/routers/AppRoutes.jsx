import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Funciones from '../views/Funciones';
import Cinemas from '../views/Cinemas';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Funciones />} />
    <Route path='/cinemas' element={<Cinemas />} />
  </Routes>
);

export default AppRoutes;
