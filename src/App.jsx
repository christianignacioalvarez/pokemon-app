import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Listado from './components/Listado';
import Header from './components/Header';
import Navbar from './components/NavBar';
import PokemonBusqueda from './components/PokemonBusqueda';
import PokemonCard from './components/pokemonCard/PokemonCard';

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
