import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Listado from './components/Listado';
import PokemonDetalle from './components/PokemonDetalle';
import Header from './components/Header';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/listado-pokemones" element={<Listado />} />
        <Route path="/pokemon-detalle/:id" element={<PokemonDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
