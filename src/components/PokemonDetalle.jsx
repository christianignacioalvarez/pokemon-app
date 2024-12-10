import { useState, useEffect } from 'react';
import axios from 'axios';
import { getColorbyPokemon } from '../utils/colors';
import Pagina404 from '../pages/Pagina404';

function PokemonDetalle({ url }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
        setError(null);
      } catch (err) {
        console.error(err)
        setError('Pokemon no encontrado.');
        setPokemon(null);
      }
    };
    fetchPokemonDetails();
  }, [url]);

  if (error) {
    return <Pagina404 />;
  }

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  const mainType = pokemon.types[0].type.name;

  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ');

  const backgroundColor = getColorbyPokemon(mainType);

  return (
    <div
      className="text-center"
      style={{ backgroundColor, borderRadius: '10px', padding: '10px', color: 'white' }}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="img-fluid mb-2"
      />
      <h5 className="card-title text-capitalize">{pokemon.name}</h5>
      <p>
        <strong>N°</strong> {pokemon.id} 
      </p>
    </div>
  );
}

export default PokemonDetalle;
