import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonCard = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);

        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        const evolutionResponse = await axios.get(evolutionChainUrl);
        const chain = evolutionResponse.data.chain;

        const fetchEvolutionData = async (chain) => {
          const evolutionData = [];
          let currentChain = chain;

          while (currentChain) {
            const speciesName = currentChain.species.name;
            const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${speciesName}`);
            evolutionData.push({
              name: speciesName,
              image: pokemonResponse.data.sprites.other['official-artwork'].front_default
            });
            currentChain = currentChain.evolves_to[0];
          }
          setEvolutions(evolutionData);
        };

        fetchEvolutionData(chain);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the Pokémon details or evolutions:', error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  if (loading) {
    return <p className="text-center">Cargando detalles del Pokémon...</p>;
  }

  if (!pokemon) {
    return <p className="text-center">No se pudo cargar el Pokémon.</p>;
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Parte izquierda: Detalles del Pokémon */}
        <div className="col-12 col-md-6">
          <h2 className="text-capitalize">{pokemon.name}</h2>
          <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
          <p><strong>Peso:</strong> {pokemon.weight} hectogramos</p>
          <p><strong>Habilidades:</strong> 
            {pokemon.abilities.map((ability, index) => (
              <span key={index}> {ability.ability.name}{index < pokemon.abilities.length - 1 && ', '}</span>
            ))}
          </p>
          <p><strong>Tipos:</strong>
            {pokemon.types.map((type, index) => (
              <span key={index}> {type.type.name}{index < pokemon.types.length - 1 && ', '}</span>
            ))}
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="img-fluid mb-3"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>

      <div className="mt-5">
        <h4>Evoluciones:</h4>
        {evolutions.length > 0 ? (
          <div className="d-flex justify-content-start flex-wrap">
            {evolutions.map((evolution, index) => (
              <div key={index} className="card m-2" style={{ width: '150px' }}>
                <img
                  src={evolution.image}
                  alt={evolution.name}
                  className="card-img-top"
                  style={{ height: '100px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title text-capitalize">{evolution.name}</h6>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Este Pokémon no tiene evoluciones.</p>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line no-irregular-whitespace
export default PokemonCard;