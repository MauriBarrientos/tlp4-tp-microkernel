import React from 'react';
import AppRoutes from './routers/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => (

  <div style={{ minHeight: '100vh', backgroundColor: 'rgb(234, 234, 234)' }}>
  <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </div>

);



export default App;
