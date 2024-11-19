import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Header from './components/Header';
import Navbar from './components/NavBar';
import PokemonBusqueda from './pages/PokemonBusqueda';
import PokemonCard from './pages/PokemonCard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/listado-pokemones" element={<Listado />} />
        <Route path="/listado-pokemones/:id" element={<PokemonCard />} />
        <Route path="/pokemon/:nombre" element={<PokemonBusqueda />} />
      </Routes>
    </Router>
  );
}

export default App;
