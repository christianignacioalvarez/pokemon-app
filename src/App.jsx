import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Listado from './components/Listado';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import Navbar from './components/NavBar';

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
      </Routes>
    </Router>
  );
}

export default App;
