import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GestionPersonas from './pages/GestionPersonas';
import GestionHooks from './pages/GestionHooks';
import './App.css'; // Importa los estilos

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/clases">Gestión de Personas con Clases</Link></li>
          <li><Link to="/hooks">Gestión de Personas con Hooks</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clases" element={<GestionPersonas />} />
        <Route path="/hooks" element={<GestionHooks />} />
      </Routes>
    </Router>
  );
}

export default App;
