import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Header from './components/Header';
import Navbar from './components/NavBar';
import PokemonCard from './pages/PokemonCard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Pagina404 from './pages/Pagina404';

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
        <Route path="/404" element={<Pagina404/>} />

      </Routes>
    </Router>
  );
}

export default App;
