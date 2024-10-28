import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Funciones from '../views/Funciones';
import Cinemas from '../views/Cinemas';
import Teatros from '../views/Teatros';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Funciones />} />
    <Route path='/cinemas' element={<Cinemas />} />
    <Route path='/teatros' element={<Teatros />} />
  </Routes>
);

export default AppRoutes;
