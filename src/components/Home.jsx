import {useState,useEffect} from 'react';
import axios from 'axios';
import homeImage from '../assets/pokemon.png';

function Home() {
  const [listaPokemones, setListaPokemones] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=6');
        setListaPokemones(response.data.results); 
      } catch (err) {
        console.error('Error al cargar los Pokémon', err);
      }
    };

    fetchPokemon();
  }, []); 

  return (
    <div className="container mt-5 text-center">
      <img src={homeImage} alt="Pokémon" width="50%" />
      <h2>Pokémon App: Tu Guía para Todos los Pokémon</h2>
      <img src={"../"} alt="" />
      <p>¡Bienvenido al fascinante mundo de los Pokémon! Podes buscar el Pokémon que desees y descubrir sus evoluciones junto con sus características. Usa nuestro práctico buscador para encontrar rápidamente a tu Pokémon favorito o navega por nuestra completa lista de Pokémon para explorar nuevas especies. ¡No dudes en probar la página y sumergirte en esta emocionante aventura Pokémon!</p>
      

      <h3 className="mt-4">Vista previa de algunos pokemones con sus evoluciones:</h3>
      <div className="row">
        {listaPokemones.map((pokemon, index) => (
          <div key={index} className="col-4">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
              width="30px"
              className="card-img-top"
            />
            <h5 className="card-title">{pokemon.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
  


export default Home;