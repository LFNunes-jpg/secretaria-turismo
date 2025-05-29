import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Eventos from './pages/Eventos';
import Grafico from './components/GraficoTurismo';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/grafico" element={<Grafico />} />
      </Routes>
    </Router>
  );
}

export default App;