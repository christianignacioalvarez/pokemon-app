import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonDetalle({ url }) {
  const [pokemon, setPokemon] = useState(null);

  // Objeto con colores para cada tipo de Pokémon
  const typeColors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A890F0',
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await axios.get(url);
      setPokemon(response.data);
    };
    fetchPokemonDetails();
  }, [url]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  // Obtener el tipo principal del Pokémon
  const mainType = pokemon.types[0].type.name;

  // Obtener los tipos del Pokémon
  const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');

  // Obtener el color del tipo principal
  const backgroundColor = typeColors[mainType] || '#fff'; // Blanco si no se encuentra el tipo

  return (
    <div className="text-center" style={{ backgroundColor, borderRadius: '10px', padding: '10px', color: 'white' }}>
      {/* Mostrar la imagen del Pokémon */}
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="img-fluid mb-2"
      />
      {/* Mostrar el nombre del Pokémon */}
      <h5 className="card-title text-capitalize">{pokemon.name}</h5>
      {/* Mostrar detalles adicionales del Pokémon */}
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Tipos:</strong> {types}</p>
    </div>
  );
}

export default PokemonDetalle;

