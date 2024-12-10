import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonData } from '../api/fetchPokemonData';
import { getColorbyPokemon } from '../utils/colors';
import PokemonDetails from '../components/pokemonCard/PokemonDetails';
import Evolutions from '../components/pokemonCard/Evoluciones';
import Navegacion from '../components/pokemonCard/Navegacion';
import PokemonImage from '../components/pokemonCard/PokemonImagen';
import Loading from '../components/Loading';

const PokemonCard = () => {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [pokemonColor, setPokemonColor] = useState('#F1F1F1');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemonData(id); 
        setPokemon(data.pokemon);
        setEvolutions(data.evolutions);
        setPokemonColor(getColorbyPokemon(data.pokemon.types[0].type.name));
        setLoading(false);
      } catch {
        setLoading(false);
        setPokemon(null);
      }
    };
    fetchData();
  }, [id]);

  const handleNextEvolution = () => navigate(`/listado-pokemones/${parseInt(id) + 1}`);
  const handlePrevEvolution = () => {
    if (parseInt(id) > 1) {
      navigate(`/listado-pokemones/${parseInt(id) - 1}`);
    }
  };
  const handleNextPokemon = () => navigate(`/listado-pokemones/${parseInt(id) + 3}`);
  const handlePrevPokemon = () => {
    if (parseInt(id) > 3) {
      navigate(`/listado-pokemones/${parseInt(id) - 3}`);
    }
  };
  const handleBackList = () => navigate('/listado-pokemones');

  if (loading) return <Loading />;
  if (!pokemon) return <p className="text-center">No se pudo cargar el Pokémon.</p>;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container mx-5">
        <div className="d-flex align-items-center" style={{ width: '100%' }}>
          <div
            className="d-flex bg-light rounded p-4"
            style={{ width: '100%', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
          >
            <PokemonDetails pokemon={pokemon} />
          </div>
          <div style={{ flex: '0 0 50%' }}>
            <PokemonImage pokemon={pokemon} pokemonColor={pokemonColor} />
          </div>
        </div>
        <Evolutions
          evolutions={evolutions}
          pokemonColor={pokemonColor}
          currentPokemonName={pokemon.name}
        />
        <Navegacion
          handleBackList={handleBackList}
          handlePrevPokemon={handlePrevPokemon}
          handleNextEvolution={handleNextEvolution}
          handlePrevEvolution={handlePrevEvolution}
          handleNextPokemon={handleNextPokemon}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
