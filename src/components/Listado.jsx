import React, { useState, useEffect } from 'react';
import PokemonDetalle from './PokemonDetalle';
import axios from 'axios';

function Listado() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const fetchPokemones = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      setPokemones(response.data.results);
    };
    fetchPokemones();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Listado de Pokemones</h2>
      <div className="row">
        {pokemones.map((pokemon, index) => (
          <PokemonDetalle key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default Listado;