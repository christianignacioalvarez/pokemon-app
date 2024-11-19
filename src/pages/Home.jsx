import { useState, useEffect } from 'react';
import Carrusel from '../components/Carrusel';  
import homeImage from '../assets/pokemon.png';
import '../styles/Home.css';

function Home() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const pokemonList = [
      { name: 'bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
      { name: 'charmander', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
      { name: 'squirtle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' },
    ];
    setPokemones(pokemonList); 
  }, []);

  return (
    <div className="container mt-5 text-center">
      <img src={homeImage} alt="Pokémon" width="50%" />
      <h2>Pokémon App: Tu Guía para Todos los Pokémon</h2>
      <p>¡Bienvenido al fascinante mundo de los Pokémon! Puedes buscar el Pokémon que desees y descubrir sus evoluciones junto con sus características.</p>

      <h2 className="mt-4">Vista previa de algunos Pokémon:</h2>

      <Carrusel pokemones={pokemones} />
    </div>
  );
}

export default Home;
