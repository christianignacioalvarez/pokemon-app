import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getColorbyPokemon } from '../utils/colors';

const PokemonCard = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [pokemonColor, setPokemonColor] = useState('#F1F1F1');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        setPokemon(null);
      }
    };
    fetchPokemon();
  }, [id]);

  useEffect(() => {
    const colorName = pokemon?.types[0].type.name;
    setPokemonColor(getColorbyPokemon(colorName));
  }, [pokemon])

  const handleNextPokemon = () => {
    const nextID = parseInt(id) + 1;
    navigate(`/listado-pokemones/${nextID}`);
  };

  const handleBackList = () => {
    navigate('/listado-pokemones');
  };

  if (loading) {
    return <p className="text-center">Cargando detalles del Pokémon...</p>;
  }

  if (!pokemon) {
    return <p className="text-center">No se pudo cargar el Pokémon.</p>;
  }

  return (
    <div className="container mx-5">
      <div className="row bg-light" style={{boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'}}>
        {/* Parte izquierda: Detalles del Pokémon */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="text-capitalize">{pokemon.name}</h2>
          <div className="mt-3">
            <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
            <p><strong>Peso:</strong> {pokemon.weight} hectogramos</p>
            <p><strong>Habilidades:</strong></p>
            <div className="d-flex flex-wrap gap-1">
              {pokemon.abilities.map((ability, index) => (
                <span key={index} className="badge badge-pill bg-primary text-white">
                  {ability.ability.name}
                </span>
              ))}
            </div>
            <p><strong>Tipos:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
          </div>
        </div>

        {/* Parte derecha: Imagen del Pokémon con fondo personalizado */}
        <div className="col-12 col-md-6 text-center rounded-start-pill" style={{ backgroundColor: pokemonColor, borderRadius: '15px', padding: '1rem' }}>
          <div
            className="rounded-start-pill p-3 mx-auto"
            style={{
              width: "450px",
              position: "relative",
              right: "-58px",
              backgroundColor: pokemonColor,
              borderRadius: '50%',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              className="img-fluid"
              style={{ maxHeight: '250px' }}
            />

          </div>
        </div>
      </div>

      {/* Evoluciones */}
      <div className="py-5">
        <h4 style={{ textAlign: "center" }} >EVOLUCIONES</h4>
        {evolutions.length > 0 ? (
          <div className="d-flex justify-content-center flex-wrap">
            {evolutions.map((evolution, index) => (
              <div
              key={index}
              className="card m-4"
              style={{
                width: '160px',
                borderRadius: '10px',
                padding: '12px',
                border: evolution.name === pokemon.name ? `2px solid ${pokemonColor}` : 'none',
                boxShadow: evolution.name === pokemon.name ? ` 0px 9px 24px 7px ${pokemonColor}` : '0px 4px 10px rgba(0,0,0,0.1)'
              }}
            >
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

      {/* Botones de navegación */}
      <div className="py-4 text-center">
        <button
          onClick={handleBackList}
          className="btn me-3"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)', // rojo claro y semitransparente
            color: '#FF0000', // texto rojo
            border: '2px solid #FF0000', // borde rojo
            borderRadius: '50px', // estilo pill
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <i className="fas fa-arrow-left" style={{ marginRight: '8px', color: '#FF0000' }}></i> Volver al Listado
        </button>
        <button
          onClick={handleNextPokemon}
          className="btn"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)', // rojo claro y semitransparente
            color: '#FF0000', // texto rojo
            border: '2px solid #FF0000', // borde rojo
            borderRadius: '50px', // estilo pill
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Siguiente Pokémon <i className="fas fa-arrow-right" style={{ marginLeft: '8px', color: '#FF0000' }}></i>
        </button>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-irregular-whitespace
export default PokemonCard;
