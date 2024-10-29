import { useState, useEffect } from 'react';
import PokemonDetalle from './PokemonDetalle';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Listado() {
  const [pokemones, setPokemones] = useState([]);
  const [page, setPage] = useState(0); // Controla la página actual
  const [loading, setLoading] = useState(false);

  const limit = 9; // Cuántos Pokémon mostrar por página

  useEffect(() => {
    const fetchPokemones = async () => {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`);
      setPokemones(response.data.results);
      setLoading(false);
    };
    fetchPokemones();
  }, [page]);

  const getPokemonIdFromUrl = (url) => {
    const params = url.split('/');
    return params[params.length -2];
  }

  // Manejador para avanzar de página
  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Manejador para retroceder de página
  const prevPage = () => {
    if (page > 0) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Listado de Pokemones</h2>
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <>
          <div className="row">
            {pokemones.map((pokemon, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body" style={{ width: "100%" }}>
                    <PokemonDetalle url={pokemon.url} />
                    <Link style={{ width: "100%" }} to={`/listado-pokemones/${getPokemonIdFromUrl(pokemon.url)}`}>
                      <button className='btn btn-primary mt-3' style={{ width: "100%" }} >Ver detalle</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de paginación */}
          <div className="d-flex justify-content-between mt-4">
            <button
              onClick={prevPage}
              className="btn btn-primary"
              disabled={page === 0}
            >
              ← Anterior
            </button>
            <button onClick={nextPage} className="btn btn-primary">
              Siguiente →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Listado;
